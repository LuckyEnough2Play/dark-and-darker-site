// components/RedditLive.tsx
'use client';

import { useEffect, useState } from 'react';

interface RedditPost {
  data: {
    id: string;
    title: string;
    selftext?: string;
    permalink: string;
    preview?: {
      images?: {
        source?: {
          url: string;
        };
      }[];
    };
  };
}

export default function RedditLive() {
  const [posts, setPosts] = useState<Record<'month' | 'week' | 'day', RedditPost[]>>({
    month: [],
    week: [],
    day: [],
  });

  useEffect(() => {
    const fetchRedditPosts = async () => {
      const timeframes = ['month', 'week', 'day'] as const;
      const result: Record<typeof timeframes[number], RedditPost[]> = {
        month: [],
        week: [],
        day: [],
      };

      for (const t of timeframes) {
        const res = await fetch(`https://www.reddit.com/r/darkanddarker/top.json?t=${t}&limit=3`);
        const json = await res.json();
        result[t] = json.data.children || [];
      }

      setPosts(result);
    };

    fetchRedditPosts();
  }, []);

  const panelStyles: Record<string, string> = {
    month: 'bg-blue-900/40 border-blue-400',
    week: 'bg-yellow-900/30 border-yellow-400',
    day: 'bg-red-900/40 border-red-400',
  };

  const headerLabels: Record<string, string> = {
    month: 'Month',
    week: 'Week',
    day: 'Day',
  };

  const getPreviewImage = (post: RedditPost['data']) => {
    const url = post.preview?.images?.[0]?.source?.url;
    if (!url) return null;
    return url.replace(/&amp;/g, '&');
  };

  return (
    <section className="text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(['month', 'week', 'day'] as const).map((timeframe) => (
          <div key={timeframe} className={`rounded-xl p-4 border ${panelStyles[timeframe]} shadow-md`}>
            <h3 className="text-center text-lg font-bold text-white mb-4">
              {headerLabels[timeframe]}
            </h3>

            <div className="space-y-4">
              {posts[timeframe].map((p, i) => {
                const previewUrl = getPreviewImage(p.data);

                return (
                  <a
                    key={p.data.id}
                    href={`https://reddit.com${p.data.permalink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-black/70 hover:bg-black/90 transition rounded overflow-hidden border border-white/10 transform hover:scale-[1.02] transition-transform"
                  >
                    <div className="p-3">
                      <h2 className="text-xs font-bold text-yellow-300 mb-1">#{i + 1} post</h2>
                      <p className="text-sm text-white line-clamp-3 mb-1">{p.data.title}</p>
                      {p.data.selftext && (
                        <p className="text-xs text-gray-300 line-clamp-3">{p.data.selftext}</p>
                      )}
                    </div>
                    {previewUrl && (
                      <img
                        src={previewUrl}
                        alt=""
                        className="w-full h-32 object-cover border-t border-white/10 rounded-b"
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
