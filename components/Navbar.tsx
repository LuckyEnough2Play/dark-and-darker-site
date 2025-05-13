'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/patch-notes', label: 'Patch Notes' },
    { href: '/beginner-guide', label: 'Beginner Guide' },
    { href: '/boss-guides', label: 'Boss Guides' },
    { href: '/team-combat', label: 'Team Combat' },
    { href: '/class-breakdowns', label: 'Class Builds' },
  ];

  return (
    <nav className="bg-[#0a0f1c] text-gray-100 py-6 px-4 shadow-md border-b border-blue-700">
      <ul className="flex flex-wrap justify-center gap-8 text-lg font-semibold tracking-wide">
        {navItems.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <li key={href}>
              <Link
                href={href}
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
    </nav>
  );
}
