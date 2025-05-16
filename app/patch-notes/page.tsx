'use client';
import Navbar from '../../components/Navbar';
import Patch851 from './patches/patch_851'; // ✅ Top patch
import Patch85 from './patches/patch_85';
import Patch841 from './patches/patch_841';

export default function PatchNotesPage() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Fixed background layer */}
      <div className="fixed inset-0 -z-10 bg-[url('/wallpaper_patchnotes.png')] bg-center bg-cover bg-no-repeat" />

      <Navbar />

      <div className="flex items-center justify-center min-h-[calc(100vh-6rem)]">
        <div className="w-full max-w-6xl p-20">
          <h1 className="text-4xl font-bold text-center text-blue-300 mb-6 drop-shadow">
            Dark and Darker Patch Log
          </h1>
          <div className="flex flex-col gap-16">
            <Patch851 /> {/* 🆕 Most recent patch at the top */}
            <Patch85 />
            <Patch841 />
          </div>
        </div>
      </div>
    </div>
  );
}
