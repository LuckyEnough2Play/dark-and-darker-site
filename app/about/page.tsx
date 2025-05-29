// File: /app/about/page.tsx
'use client';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[url('/wallpaper_about.png')] bg-center bg-cover bg-no-repeat" />

      <main className="flex items-center justify-center min-h-[calc(100vh-6rem)] px-6 py-16">
        <div className="flex flex-col md:flex-row items-start gap-10 bg-black/60 p-8 rounded-xl shadow-lg max-w-5xl w-full border border-[#1D4ED8]">
          {/* Avatar (top-left) */}
          <div className="flex-shrink-0 relative">
            <img
              src="/avatar_luckyenough.jpg"
              alt="Creator"
              className="w-40 h-40 rounded-full border-2 border-[#1D4ED8] object-cover object-top shadow-md"
            />
            <p className="absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 text-sm text-gray-300">
              <strong>LuckyEnough</strong>
            </p>
          </div>

          {/* Bio box */}
          <div className="text-left max-w-xl">
            <h1 className="text-3xl font-bold mb-4 text-yellow-300">About Luck and Loot</h1>
            <div className="text-lg leading-relaxed text-gray-200 space-y-4">
              <p>
                <em>Luck and Loot</em> is a passion project born from a lifelong obsession with medieval fantasy and a deep love for <em>Dark and Darker</em>. Ever since I was a kid, I’ve been captivated by knights, castles, weapons, and magic — the world of swords and sorcery has always felt like home. Video games were my portal: <em>Stronghold</em>, <em>The Bard’s Tale</em>, <em>Total War</em>, <em>Age of Mythology</em>, and of course, thousands of hours in <em>Runescape</em>.
              </p>
              <p>
                Then came <em>Dark and Darker</em>. I discovered it during Playtest 2, and it immediately hit me — this was <strong>my</strong> game. It captured everything I dreamed about growing up, and somehow still felt like a game I’d be growing with into the future.
              </p>
              <p>
                Like many of you, I’ve weathered the highs and lows of each patch, even the wild west torrenting days. And now, with the community in uncertain waters and Ironmace seemingly turning away from its original player base, I wanted to build something that could bring us back together.
              </p>
              <p>
                That’s what <strong>luckandloot.gg</strong> is. A <em>Dark and Darker</em> community hub — part archive, part sanctuary. A place to gather, celebrate community highlights across Twitch, Reddit, and YouTube, and even fill in the gaps with tools the devs haven’t offered (like matchmaking).
              </p>
              <p>
                I’ve never made a website before. I don’t know how to code. But I love this game, and I believe in this community. With the help of ChatGPT and a whole lot of determination, I’m building this place for all of us.
              </p>
              <p className="font-semibold text-blue-400">Hold the line.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
