// /app/patch-notes/page.tsx
// force save
'use client';

import Patch861 from './patches/patch_861';
import Patch86 from './patches/patch_86';
import Patch851 from './patches/patch_851';
import Patch85 from './patches/patch_85';
import Patch841 from './patches/patch_841';

export default function PatchNotesPage() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Fixed background layer */}
      <div className="fixed inset-0 -z-10 bg-[url('/wallpaper_patchnotes.png')] bg-center bg-cover bg-no-repeat" />

      <div className="flex flex-col items-center justify-start min-h-[calc(100vh-6rem)] px-4 sm:px-6 md:px-10 py-10">
        <div className="w-full max-w-6xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-300 mb-8 drop-shadow">
            Dark and Darker Patch Log
          </h1>
          <div className="flex flex-col gap-12 sm:gap-16">
            <Patch86 />
            <Patch851 />
            <Patch85 />
            <Patch841 />
          </div>
        </div>
      </div>
    </div>
  );
}
