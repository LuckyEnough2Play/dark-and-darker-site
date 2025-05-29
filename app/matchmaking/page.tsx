// File: /app/matchmaking/page.tsx
'use client';

export default function MatchmakingPage() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[url('/wallpaper_matchmaking.png')] bg-center bg-cover bg-no-repeat" />

      <main className="flex items-center justify-center min-h-[calc(100vh-6rem)] px-4 text-center">
        <div className="bg-black/60 p-8 rounded-lg max-w-2xl shadow-xl">
          <h1 className="text-4xl font-bold text-yellow-300 mb-4">Matchmaking</h1>
          <p className="text-lg text-gray-200">Coming soon. A better way to find your next dungeon crew.</p>
        </div>
      </main>
    </div>
  );
}
