import React from 'react';

interface Amenity {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const amenities: Amenity[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <path d="M9 22V12h6v10"/>
      </svg>
    ),
    title: 'Завтрак включён',
    description: 'Шведский стол каждое утро — разнообразное меню без доплаты для всех гостей.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12.55a11 11 0 0114.08 0"/>
        <path d="M1.42 9a16 16 0 0121.16 0"/>
        <path d="M8.53 16.11a6 6 0 016.95 0"/>
        <line x1="12" y1="20" x2="12.01" y2="20"/>
      </svg>
    ),
    title: 'Бесплатный Wi-Fi',
    description: 'Высокоскоростной интернет во всех номерах и общественных зонах.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8h1a4 4 0 010 8h-1"/>
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/>
        <line x1="10" y1="1" x2="10" y2="4"/>
        <line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    title: 'Кафе в отеле',
    description: 'Собственное кафе для гостей — напитки и лёгкие перекусы в любое время.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    title: 'Оплата картой',
    description: 'Принимаем карты, наличные и оплату по QR-коду — удобно для всех.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 12a9 9 0 1018 0A9 9 0 003 12z"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Кондиционер',
    description: 'Индивидуальный климат-контроль в каждом номере для вашего комфорта.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M9 9h.01M15 9h.01M9 15h.01M15 15h.01M12 12h.01"/>
      </svg>
    ),
    title: 'Парковка',
    description: 'Удобная парковка для гостей отеля на территории.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M4.93 4.93l14.14 14.14"/>
      </svg>
    ),
    title: 'Некурящий отель',
    description: 'Полностью некурящий отель — чистый воздух для всех гостей.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    title: 'Тёплый пол',
    description: 'Тёплый пол в ванных комнатах всех номеров — уют в каждой детали.',
  },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-20 sm:py-28 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="scroll-reveal hidden-init mb-14 sm:mb-18 max-w-2xl">
          <p className="section-label mb-4">Удобства</p>
          <div className="accent-line mb-6" />
          <h2 className="font-display text-section-title font-semibold text-foreground mb-4">
            Всё для вашего комфорта
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Завтрак, интернет, кафе и внимание к деталям — мы позаботились о каждом аспекте вашего пребывания.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.title}
              className="amenity-card p-6 scroll-reveal hidden-init"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'var(--muted)', color: 'var(--primary)' }}
              >
                {amenity.icon}
              </div>
              <h3 className="font-display text-base font-semibold text-foreground mb-2">{amenity.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}