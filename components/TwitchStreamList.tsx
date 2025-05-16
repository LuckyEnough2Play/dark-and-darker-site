'use client';
import { useEffect, useState, useRef } from 'react';

interface TwitchStream {
  id: string;
  user_name: string;
  viewer_count: number;
  title: string;
  thumbnail_url: string;
  language: string;
}

export default function TwitchStreamList() {
  const [streams, setStreams] = useState<TwitchStream[]>([]);
  const [selectedLang, setSelectedLang] = useState('All');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const fetchStreams = () => {
    fetch('/api/twitch/streams')
      .then((res) => res.json())
      .then((data) => {
        setStreams(data.data || []);
      });
  };

  useEffect(() => {
    fetchStreams();
    const interval = setInterval(fetchStreams, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const langFrequency: Record<string, number> = {};
  streams.forEach((stream) => {
    const lang = stream.language;
    langFrequency[lang] = (langFrequency[lang] || 0) + 1;
  });

  const sortedLangs = Object.entries(langFrequency)
    .sort((a, b) => b[1] - a[1])
    .map(([lang, count]) => ({ lang, count }));

  const topLangs = sortedLangs.slice(0, 3);
  const otherLangs = sortedLangs.slice(3);

  const filteredStreams =
    selectedLang === 'All'
      ? streams
      : streams.filter((stream) => stream.language === selectedLang);

  const topStreamerId = streams[0]?.id;

  return (
    <section className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-yellow-200 mb-6 text-center drop-shadow">
        Live Dark and Darker Streams
      </h2>

      {/* Language Filters */}
      <div className="flex justify-center gap-2 mb-6 flex-wrap relative">
        <button
          className={`px-3 py-1 text-sm rounded-full border transition ${
            selectedLang === 'All'
              ? 'bg-yellow-400 text-black font-bold'
              : 'bg-black/70 text-white border-yellow-400 hover:bg-yellow-300 hover:text-black'
          }`}
          onClick={() => setSelectedLang('All')}
        >
          All
        </button>

        {topLangs.map(({ lang, count }) => (
          <button
            key={lang}
            className={`px-3 py-1 text-sm rounded-full border transition ${
              selectedLang === lang
                ? 'bg-yellow-400 text-black font-bold'
                : 'bg-black/70 text-white border-yellow-400 hover:bg-yellow-300 hover:text-black'
            }`}
            onClick={() => setSelectedLang(lang)}
          >
            {lang.toUpperCase()} ({count})
          </button>
        ))}

        {otherLangs.length > 0 && (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="px-3 py-1 text-sm rounded-full border bg-black/70 text-white border-yellow-400 hover:bg-yellow-300 hover:text-black"
            >
              More Languages
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-1 bg-black/80 border border-yellow-400 rounded shadow-lg z-10 max-h-60 overflow-y-auto">
                {otherLangs.map(({ lang, count }) => (
                  <div
                    key={lang}
                    className={`px-4 py-1 text-sm cursor-pointer hover:bg-yellow-200 hover:text-black ${
                      selectedLang === lang
                        ? 'bg-yellow-400 text-black font-bold'
                        : 'text-white'
                    }`}
                    onClick={() => {
                      setSelectedLang(lang);
                      setDropdownOpen(false);
                    }}
                  >
                    {lang.toUpperCase()} ({count})
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Stream Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStreams.map((stream) => {
          const isTop = stream.id === topStreamerId;

          let badgeColor = 'bg-green-600';
          if (stream.viewer_count > 200) badgeColor = 'bg-yellow-500';
          if (stream.viewer_count > 500) badgeColor = 'bg-red-600';

          return (
            <a
              key={stream.id}
              href={`https://twitch.tv/${stream.user_name}`}
              target="_blank"
              rel="noreferrer"
              className="relative group bg-black/70 hover:bg-black/90 transition-all duration-300 rounded shadow-lg overflow-hidden border border-yellow-700 hover:shadow-yellow-400 hover:shadow-xl"
            >
              {isTop && (
                <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-2 py-1 z-10 animate-pulse">
                  TOP STREAMER
                </div>
              )}

              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={stream.thumbnail_url.replace('{width}', '320').replace('{height}', '180')}
                  alt={`${stream.user_name}'s stream`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <iframe
                  className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  src={`https://player.twitch.tv/?channel=${stream.user_name}&parent=luckandloot.gg&parent=www.luckandloot.gg&muted=true&autoplay=true`}
                  allow="autoplay; fullscreen"
                  frameBorder="0"
                />
              </div>

              <div className="p-3">
                <div className="flex justify-between items-center">
                  <div className="text-white font-bold truncate">
                    {stream.user_name}
                  </div>
                  <span className={`text-xs text-white px-2 py-1 rounded ${badgeColor}`}>
                    {stream.viewer_count} viewers
                  </span>
                </div>
                <div className="text-xs italic text-yellow-300 truncate mt-1">
                  {stream.title}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
