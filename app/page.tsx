'use client';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/wallpaper_home.png')] bg-center bg-cover text-white">
      <Navbar />

      <div className="max-w-screen-xl mx-auto w-full">
        {/* Title - Luck and Loot */}
        <div className="flex justify-center pt-20">
          <h1 className="text-7xl font-extrabold text-yellow-200 drop-shadow-lg tracking-wide text-center">
            Luck and Loot
          </h1>
        </div>

        {/* Subtitle and Description */}
        <div className="flex justify-center mt-6">
          <div className="text-center px-4 max-w-xl">
            <h2 className="text-3xl font-semibold text-gray-200 mb-2">
              A Dark and Darker Community Hub
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              Discover player-built class guides, annotated patch reactions, and dungeon-tested survival tips — all forged in the depths of the Dark and Darker community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
