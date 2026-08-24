import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import RoomsSection from '@/app/components/RoomsSection';
import AmenitiesSection from '@/app/components/AmenitiesSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import GallerySection from '@/app/components/GallerySection';
import ContactsSection from '@/app/components/ContactsSection';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';

export default function HomePage() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <RoomsSection />
        <AmenitiesSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactsSection />
      </main>
      <Footer />
      <ScrollRevealInit />
    </>
  );
}