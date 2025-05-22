'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/patch-notes', label: 'Patch Notes' },
    { href: '/journal', label: 'Journal' },
    { href: '/beginner-guide', label: 'Beginner Guide' },
    { href: '/boss-guides', label: 'Boss Guides' },
    { href: '/team-combat', label: 'Team Combat' },
    { href: '/class-breakdowns', label: 'Class Builds' },

  ];

  return (
    <nav className="bg-[url('/wallpaper_navbar.png')] bg-cover bg-[center_top_70%] text-gray-100 py-4 px-6 shadow-md border-b-6 border-blue-700">
      <div className="w-full flex items-center justify-between px-6 bg-black/60 rounded">
        {/* Left: Title */}
        <div className="text-left">
          <h1 className="text-xl font-bold text-yellow-200 leading-snug">
            Luck and Loot
          </h1>
          <p className="text-sm text-gray-300">A Dark and Darker Community Hub</p>
        </div>

        {/* Center: Nav Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-md font-semibold tracking-wide">
          {navItems.map(({ href, label }) => {
            const isActive =
              href === '/' ? pathname === '/' : pathname.startsWith(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => {
                    if (isActive) {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`transition-colors ${
                    isActive
                      ? 'text-blue-400 underline underline-offset-4'
                      : 'text-gray-100 hover:text-blue-300'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right: Spacer for balance */}
        <div className="w-40" />
      </div>
    </nav>
  );
}
