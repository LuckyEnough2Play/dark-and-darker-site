'use client';
import Navbar from '../../components/Navbar';
import Patch85 from './patches/patch_85';
import Patch841 from './patches/patch_841';

export default function PatchNotesPage() {
  return (
    <div className="min-h-screen bg-[url('/wallpaper_patchnotes.png')] bg-no-repeat bg-center bg-cover bg-fixed text-white">
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-6rem)]">
        <div className="w-full max-w-6xl p-20">
          <h1 className="text-4xl font-bold text-center text-blue-300 mb-6 drop-shadow">
            Dark and Darker Patch Log
          </h1>
          <div className="flex flex-col gap-16">
            <Patch85 />
            <Patch841 />
          </div>
        </div>
      </div>
    </div>
  );
}
