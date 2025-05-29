// File: /app/about/page.tsx
'use client';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[url('/wallpaper_about.png')] bg-center bg-cover bg-no-repeat" />

      <main className="flex items-center justify-center min-h-[calc(100vh-6rem)] px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-10 bg-black/60 p-8 rounded-xl shadow-lg max-w-5xl w-full border border-blue-700">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img
              src="/avatar_luckenough.jpg"
              alt="Site Creator"
              className="w-40 h-40 rounded-full border-4 border-blue-700 shadow-md object-cover"
            />
          </div>

          {/* Bio box */}
          <div className="text-left max-w-xl">
            <h1 className="text-3xl font-bold mb-4 text-yellow-300">About Luck and Loot</h1>
            <p className="text-lg leading-relaxed text-gray-200">
              [This is where you’ll describe the site — your goals, why you made it, the community you’re building, your love for Dark and Darker, etc.]
              <br /><br />
              This section is ready for your story. Let me know when you want help writing it out.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
