// scripts/generateJournal.js
const fs = require('fs');
const path = require('path');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getRedditAccessToken() {
  const credentials = Buffer.from(`${process.env.REDDIT_CLIENT_ID}:${process.env.REDDIT_CLIENT_SECRET}`).toString('base64');

  const res = await fetch('https://www.reddit.com/api/v1/access_token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': 'LuckAndLootBot/1.0 by LuckyEnough4U',
    },
    body: new URLSearchParams({
      grant_type: 'password',
      username: process.env.REDDIT_USERNAME,
      password: process.env.REDDIT_PASSWORD,
    }),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Reddit auth failed (${res.status}): ${error}`);
  }

  const json = await res.json();
  return json.access_token;
}

async function fetchComments(permalink, token) {
  const res = await fetch(`https://oauth.reddit.com${permalink}.json?limit=20`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'User-Agent': 'LuckAndLootBot/1.0 by LuckyEnough4U',
    },
  });

  if (!res.ok) return [];

  const json = await res.json();

  const comments = json?.[1]?.data?.children
    .filter((c) => c.kind === 't1' && c.data.body)
    .sort((a, b) => b.data.ups - a.data.ups)
    .slice(0, 3)
    .map((c) => c.data.body.trim());

  return comments || [];
}

async function fetchTopTodayPosts(limit, token) {
  const res = await fetch(`https://oauth.reddit.com/r/DarkAndDarker/top.json?t=day&limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'User-Agent': 'LuckAndLootBot/1.0 by LuckyEnough4U',
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Reddit fetch failed (${res.status}): ${body.slice(0, 200)}...`);
  }

  const json = await res.json();

  const posts = await Promise.all(
    json.data.children.map(async (post) => {
      const comments = await fetchComments(post.data.permalink, token);
      return {
        title: post.data.title,
        selftext: post.data.selftext?.trim() || '',
        image: post.data.preview?.images?.[0]?.source?.url?.replace(/&amp;/g, '&') || null,
        comments,
      };
    })
  );

  return posts;
}

function detectTone(posts) {
  const toneKeywords = {
    rogue: ['scam', 'broken', 'trash', 'fail', 'nerf', 'bug', 'sucks', 'complain'],
    bard: ['joke', 'meme', 'lol', 'haha', 'funny', 'laugh', 'scream', 'yell', 'shout'],
    wizard: ['spell', 'incantation', 'magic', 'chant', 'arcane', 'mana'],
    merchant: ['gold', 'price', 'market', 'loot', 'sell', 'buy', 'key'],
    lorekeeper: ['idea', 'concept', 'design', 'class', 'balance', 'map', 'suggest', 'proposal'],
  };

  const counter = { rogue: 0, bard: 0, wizard: 0, merchant: 0, lorekeeper: 0 };

  for (const post of posts) {
    const text = `${post.title} ${post.selftext} ${post.comments.join(' ')}`.toLowerCase();
    for (const [tone, keywords] of Object.entries(toneKeywords)) {
      for (const word of keywords) {
        if (text.includes(word)) {
          counter[tone]++;
        }
      }
    }
  }

  return Object.entries(counter).sort((a, b) => b[1] - a[1])[0][0];
}

function getSystemPrompt(tone) {
  const prompts = {
    rogue: `Summarize Reddit's top Dark and Darker posts like a sarcastic rogue who’s seen too much and cares too little. Be witty, critical, and brutally honest.`,
    bard: `Summarize Reddit's top Dark and Darker posts like a drunk tavern bard telling tales to rowdy patrons. Be funny, exaggerated, and full of flair.`,
    wizard: `Summarize Reddit's top Dark and Darker posts like a wise old wizard mentoring apprentices. Be mystical, formal, and arcane.`,
    merchant: `Summarize Reddit's top Dark and Darker posts like a greedy merchant obsessed with loot, prices, and profit. Be dramatic, slick, and economy-focused.`,
    lorekeeper: `Summarize Reddit's top Dark and Darker posts like a scholarly lorekeeper archiving player sentiment. Be wise, curious, and analytical.`,
  };

  return prompts[tone] || prompts['lorekeeper'];
}

function loadRecentJournalSummaries(limit = 3) {
  const summariesDir = path.join('app/journal/summaries');
  const files = fs
    .readdirSync(summariesDir)
    .filter((f) => f.endsWith('Journal.tsx') && !f.includes('placeholder'))
    .sort()
    .reverse()
    .slice(0, limit);

  return files.map((filename) => {
    const content = fs.readFileSync(path.join(summariesDir, filename), 'utf8');
    const match = content.match(/summary={`([\s\S]*?)`}/);
    return match?.[1]?.trim() || '';
  });
}

async function generateSummary(posts) {
  const tone = detectTone(posts);
  const systemPrompt = getSystemPrompt(tone);
  const recentSummaries = loadRecentJournalSummaries(3);

  const messages = [{ role: 'system', content: systemPrompt }];

  if (recentSummaries.length) {
    messages.push({
      role: 'user',
      content:
        `Here are the last ${recentSummaries.length} journal entries. Do not repeat them or mimic their structure:\n\n` +
        recentSummaries.map((s, i) => `Entry ${i + 1}:\n${s}`).join('\n\n'),
    });
  }

  messages.push({
    role: 'user',
    content: posts.flatMap((post) => {
      const lines = [
        `Title: ${post.title}`,
        post.selftext,
      ].filter(Boolean);

      if (post.comments.length) {
        lines.push(`Top Comments:`);
        post.comments.forEach((c) => lines.push(`  - ${c}`));
      }

      const textBlock = lines.join('\n');
      const imageBlock = post.image
        ? [{ type: 'image_url', image_url: { url: post.image } }]
        : [];

      return [{ type: 'text', text: textBlock }, ...imageBlock];
    }),
  });

  const result = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages,
    temperature: 0.7,
  });

  const text = result.choices[0].message.content;
  return { summary: text.trim() };
}

function generateSummaryMapFile(filenames) {
  const lines = [];
  const header = `// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY\n'use client';\nimport dynamic from 'next/dynamic';\n`;
  const imports = [];
  const mappings = ['const summaryMap: Record<string, React.ComponentType> = {'];

  filenames.forEach((filename) => {
    const id = filename.replace('Journal.tsx', '');
    const varName = `Journal_${id}`;
    const importPath = './summaries/' + filename.replace(/\.tsx$/, '');
    imports.push(`const ${varName} = dynamic(() => import('${importPath}'));`);
    mappings.push(`  "${filename}": ${varName},`);
  });

  mappings.push('};\n\nexport default summaryMap;');
  lines.push(header, ...imports, '', ...mappings);

  const summaryMapPath = path.join('app/journal/summaryMap.ts');
  fs.writeFileSync(summaryMapPath, lines.join('\n'));
  console.log('✅ summaryMap.ts updated');
}

const run = async () => {
  try {
    const token = await getRedditAccessToken();
    const posts = await fetchTopTodayPosts(9, token);

    const { summary } = await generateSummary(posts);

    const now = new Date();
    const yyyymmdd = now.toISOString().slice(0, 10).replace(/-/g, '');
    const filename = `${yyyymmdd}Journal.tsx`;
    const filepath = path.join('app/journal/summaries', filename);

    const fileContent = `
// app/journal/summaries/${filename}
'use client';
import RedditSummary from '../../../components/RedditSummary';

export default function Journal_${yyyymmdd}() {
  return (
    <RedditSummary
      title="Journal Entry – ${now.toDateString()}"
      summary={\`${summary}\`}
    />
  );
}
`.trim();

    fs.writeFileSync(filepath, fileContent);
    console.log('✅ Journal entry created:', filepath);

    const summariesDir = path.join('app/journal/summaries');
    const allSummaries = fs
      .readdirSync(summariesDir)
      .filter((f) => f.endsWith('Journal.tsx') && !f.includes('placeholder'))
      .sort()
      .reverse();

    const dataDir = path.join('data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
      console.log('📁 Created /data directory');
    }

    const jsonPath = path.join(dataDir, 'journal-summaries.json');
    fs.writeFileSync(jsonPath, JSON.stringify({ files: allSummaries }, null, 2));
    console.log('✅ journal-summaries.json written to /data');

    generateSummaryMapFile(allSummaries);
  } catch (err) {
    console.error('❌ Error in generateJournal.js:', err.message);
    process.exit(1);
  }
};

run();
