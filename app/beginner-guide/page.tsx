// /app/beginner-guide/page.tsx
'use client';

export default function BeginnerGuidePage() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Fixed background layer */}
      <div className="fixed inset-0 -z-10 bg-[url('/wallpaper_beginnerguide.png')] bg-center bg-cover bg-no-repeat" />

      <main className="flex items-center justify-center min-h-[calc(100vh-6rem)] px-4 text-center">
        <div className="bg-black/60 p-8 rounded-lg max-w-2xl shadow-xl">
          <h1 className="text-4xl font-bold mb-4">[Beginner Guide]</h1>
          <p className="text-lg">This page is under construction.</p>
        </div>
      </main>
    </div>
  );
}
