// File: /components/Navbar.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/patch-notes', label: 'Patch Notes' },
    { href: '/journal', label: 'Journal' },
    { href: '/beginner-guide', label: 'Beginner Guide' },
    { href: '/boss-guides', label: 'Boss Guides' },
    { href: '/team-combat', label: 'Team Combat' },
    { href: '/class-breakdowns', label: 'Class Builds' },
    { href: '/about', label: 'About' }, // ✅ Added About tab
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

        {/* Right: Discord Auth */}
        <div className="w-40 text-right">
          {session?.user ? (
            <div className="flex items-center justify-end gap-2">
              <img
                src={session.user.image || ''}
                alt="Profile"
                className="w-8 h-8 rounded-full border-2 border-blue-400 object-cover"
              />
              <div className="relative group">
                <button className="text-sm text-yellow-200 font-semibold">
                  {session.user.name} <span className="ml-1">▼</span>
                </button>
                <div className="absolute hidden group-hover:block bg-black border border-blue-700 right-0 mt-2 py-2 w-32 rounded shadow-xl z-50">
                  <button
                    onClick={() => signOut()}
                    className="block w-full px-4 py-2 text-left text-gray-200 hover:bg-blue-700"
                  >
                    Log out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => signIn('discord')}
              className="text-sm text-blue-300 hover:underline"
            >
              Login with Discord
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
