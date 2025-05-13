'use client';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/wallpaper_home.png')] bg-center bg-cover text-white">
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-6rem)]">
        <div className="text-center p-8 bg-black/60 rounded">
          <h1 className="text-4xl font-bold mb-4">Dark and Darker Community Hub</h1>
          <p className="text-lg">
            Welcome! This site offers guides, patch note reactions, and community-driven class builds.
          </p>
        </div>
      </div>
    </div>
  );
}
