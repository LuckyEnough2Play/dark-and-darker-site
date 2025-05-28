'use client';
import TwitchStreamList from '../components/TwitchStreamList';

export default function Home() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Actual image tag for pixel-perfect fixed wallpaper */}
      <img
        src="/wallpaper_home.png"
        alt="Background"
        className="fixed inset-0 -z-10 w-screen h-screen object-cover"
      />

      <div className="w-full max-w-screen-xl mx-auto px-4 pb-16">
        {/* Title */}
        <div className="flex justify-center pt-20">
          <h1 className="text-7xl font-extrabold text-yellow-200 drop-shadow-lg tracking-wide text-center">
            Luck and Loot
          </h1>
        </div>

        {/* Subtitle */}
        <div className="flex justify-center mt-6">
          <div className="text-center px-4 max-w-xl">
            <h2 className="text-3xl font-semibold text-gray-200 mb-2">
              A Dark and Darker Community Hub
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed mb-16">
              Discover player-built class guides, annotated patch reactions, and dungeon-tested survival tips — all forged in the depths of the Dark and Darker community.
            </p>
          </div>
        </div>

        {/* Stream Grid */}
        <TwitchStreamList />
      </div>
    </div>
  );
}
