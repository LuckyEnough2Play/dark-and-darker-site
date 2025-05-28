// /app/journal/page.tsx
'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import summaryMap from './summaryMap';

const RedditLive = dynamic(() => import('../../components/RedditLive'), { ssr: false });

export default function JournalPage() {
  const [summaries, setSummaries] = useState<string[]>([]);

  useEffect(() => {
    async function fetchSummaries() {
      const res = await fetch('/api/journal-summaries');
      const data = await res.json();
      setSummaries(data.files || []);
    }
    fetchSummaries();
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      {/* Fixed background image */}
      <img
        src="/wallpaper_journal.png"
        alt="Journal Background"
        className="fixed inset-0 -z-10 w-screen h-screen object-cover"
      />

      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center text-yellow-300 drop-shadow mb-10">
          Live from Reddit
        </h1>

        <RedditLive />

        <div className="mt-20 space-y-12">
          {summaries.map((name) => {
            const Component = summaryMap[name];
            if (!Component) {
              console.warn(`⚠️ Missing summary component for ${name}`);
              return null;
            }
            return (
              <div key={name}>
                <Component />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
