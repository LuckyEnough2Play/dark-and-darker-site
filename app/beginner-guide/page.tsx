'use client';
import Navbar from '../../components/Navbar';

export default function BeginnerGuidePage() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Fixed background layer */}
      <div className="fixed inset-0 -z-10 bg-[url('/wallpaper_beginnerguide.png')] bg-center bg-cover bg-no-repeat" />

      <Navbar />

      <main className="p-6 max-w-4xl mx-auto min-h-[calc(100vh-6rem)] flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-center text-blue-300 mb-6 drop-shadow">
          Beginner Guide
        </h1>
        <p className="text-lg text-center mb-10">
          Welcome adventurer! This section will help you survive your first dungeon run.
        </p>
        <div className="space-y-4">
          <div className="bg-black/60 p-4 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-yellow-300">Getting Started</h2>
            <p className="text-sm">
              Equip your gear, learn your class, and don&apos;t forget to bring a torch. Darkness kills!
            </p>
          </div>
          <div className="bg-black/60 p-4 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-yellow-300">Basic Controls</h2>
            <p className="text-sm">
              Movement is WASD, use items with 1-4, and always check corners. This isn&apos;t a safe world.
            </p>
          </div>
          <div className="bg-black/60 p-4 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-yellow-300">Survival Tips</h2>
            <p className="text-sm">
              Close doors behind you. Heal before opening chests. And extraction is victory, not shame.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
