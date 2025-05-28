// /components/ClientLayout.tsx
'use client';

import Navbar from './Navbar';
import SessionWrapper from './SessionWrapper';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionWrapper>
      <Navbar />
      {children}
    </SessionWrapper>
  );
}
