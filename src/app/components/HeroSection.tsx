'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (titleRef?.current) titleRef?.current?.classList?.add('reveal-active');
    }, 300);
    const timer2 = setTimeout(() => {
      if (badgeRef?.current) badgeRef?.current?.classList?.add('scroll-reveal', 'revealed');
      if (subtitleRef?.current) subtitleRef?.current?.classList?.add('scroll-reveal', 'revealed');
    }, 800);
    const timer3 = setTimeout(() => {
      if (ctaRef?.current) ctaRef?.current?.classList?.add('scroll-reveal', 'revealed');
    }, 1100);
    return () => { clearTimeout(timer); clearTimeout(timer2); clearTimeout(timer3); };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef?.current) {
        const scrolled = window.scrollY;
        imgRef.current.style.transform = `translateY(${scrolled * 0.25}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden"
      aria-label="Добро пожаловать в Monteva Boutique Hotel"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div ref={imgRef} className="absolute inset-0 scale-110 parallax-img">
          <AppImage
            src="/assets/images/monteva_hero_room.png"
            alt="Уютный интерьер номера Monteva Boutique Hotel — тёплое освещение, современная мебель, спокойная атмосфера"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Gradient scrim for dark text legibility — strong bottom overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(20,18,15,0.82) 0%, rgba(20,18,15,0.5) 40%, rgba(20,18,15,0.15) 70%, transparent 100%)' }}
          aria-hidden="true"
        />
      </div>
      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 pt-32">
        <div className="max-w-3xl">
          {/* Rating Badge */}
          <div
            ref={badgeRef}
            className="hidden-init scroll-reveal inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm"
            style={{ background: 'rgba(255,255,255,0.12)' }}
          >
            <div className="flex gap-0.5" aria-label="Рейтинг 5 звёзд">
              {[0,1,2,3,4]?.map((i) => (
                <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#C8965A" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span className="text-white text-xs font-semibold tracking-wide">5.0 · 52 оценки</span>
          </div>

          {/* Main Headline */}
          <h1
            ref={titleRef}
            className="font-display text-hero font-semibold text-white mb-5"
          >
            <span className="text-reveal-wrapper">
              <span className="text-reveal-content delay-200">Monteva</span>
            </span>
            <br />
            <span className="text-reveal-wrapper">
              <span className="text-reveal-content delay-300" style={{ color: 'var(--accent)' }}>Boutique Hotel</span>
            </span>
          </h1>

          {/* Tagline */}
          <p
            ref={subtitleRef}
            className="hidden-init scroll-reveal text-white/80 text-lg sm:text-xl font-light leading-relaxed mb-8 max-w-xl"
          >
            Ваш уютный дом в сердце Алматы. 24 номера, завтрак включён, рейтинг 5.0 — бутик-отель для тех, кто ценит атмосферу.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="hidden-init scroll-reveal flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="https://wa.me/77078016267"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex items-center gap-2.5 px-8 py-4 rounded-full text-base"
              aria-label="Забронировать номер через WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Забронировать в WhatsApp
            </a>
            <a
              href="#rooms"
              className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white border border-white/30 hover:border-white/70 hover:bg-white/10 transition-all duration-300"
            >
              Посмотреть номера
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17l9.2-9.2M17 17V7H7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom info strip */}
        <div className="mt-12 flex flex-wrap items-center gap-6 sm:gap-10">
          <div className="flex items-center gap-2 text-white/60">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span className="text-xs font-medium tracking-wide">ул. Карибжанова, 76, Алматы</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span className="text-xs font-medium tracking-wide">24 номера · Завтрак включён</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span className="text-xs font-medium tracking-wide">Работает круглосуточно</span>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden sm:flex flex-col items-center gap-2 z-10">
        <span className="text-white/40 text-xs tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}