'use client';
import Navbar from '../../components/Navbar';

export default function BeginnerGuidePage() {
  return (
    <div className="min-h-screen bg-[url('/wallpaper_home.png')] bg-center bg-cover text-white">
      <div className="bg-black bg-opacity-70 min-h-screen">
        <Navbar />
        <main className="p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-300 mb-6 drop-shadow">
            Beginner Guide
          </h1>
          <p className="text-lg text-center">
            Welcome adventurer! This section will help you survive your first dungeon run.
          </p>
          <div className="mt-8 space-y-4">
            <div className="bg-black/50 p-4 rounded-md shadow-md">
              <h2 className="text-2xl font-semibold text-yellow-300">Getting Started</h2>
              <p className="text-sm">
                Equip your gear, learn your class, and don&apos;t forget to bring a torch. Darkness kills!
              </p>
            </div>
            <div className="bg-black/50 p-4 rounded-md shadow-md">
              <h2 className="text-2xl font-semibold text-yellow-300">Basic Controls</h2>
              <p className="text-sm">
                Movement is WASD, use items with 1-4, and always check corners. This isn&apos;t a safe world.
              </p>
            </div>
            <div className="bg-black/50 p-4 rounded-md shadow-md">
              <h2 className="text-2xl font-semibold text-yellow-300">Survival Tips</h2>
              <p className="text-sm">
                Close doors behind you. Heal before opening chests. And extraction is victory, not shame.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
