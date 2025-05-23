'use client';
import Navbar from '../../components/Navbar';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main className="flex items-center justify-center min-h-[calc(100vh-6rem)] px-4 text-center">
        <div className="bg-black/60 p-8 rounded-lg max-w-2xl shadow-xl">
          <h1 className="text-4xl font-bold mb-4">[Team Combat]</h1>
          <p className="text-lg">This page is under construction.</p>
        </div>
      </main>
    </div>
  );
}
