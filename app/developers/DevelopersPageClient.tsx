'use client';

import ScrollShowcase from '@/components/ScrollShowcase';
import Footer from '@/components/Footer';

export default function DevelopersPageClient() {
  return (
    <main>
      <ScrollShowcase initialView="developers" />
      <Footer />
    </main>
  );
}
