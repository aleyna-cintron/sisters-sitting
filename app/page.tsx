import React from 'react';
import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import MeetTheSisters from '@/components/sections/MeetTheSisters';
import PatchSection from '@/components/sections/PatchSection';
import ServicesSection from '@/components/sections/ServicesSection';
import GallerySection from '@/components/sections/GallerySection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

// Define metadata here since this is a server component
export const metadata: Metadata = {
  title: 'Two Tails Dog Care - Loving, Reliable Dog Sitting',
  description: 'Personalized dog walking, drop-in visits, and house sitting by Oneida & Janay.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <HeroSection />
      <MeetTheSisters />
      <PatchSection />
      <ServicesSection />
      <GallerySection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
