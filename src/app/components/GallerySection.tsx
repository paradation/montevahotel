'use client';

import React, { useRef, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';

/*
  GALLERY BENTO AUDIT (10 photos):
  Photos: [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10]

  Desktop (grid-cols-4):
  Row 1: [col-1+2: p1 cs-2 rs-2] [col-3: p2 cs-1] [col-4: p3 cs-1]
  Row 2: [col-1: FILLED(p1)] [col-2: FILLED(p1)] [col-3: p4 cs-1] [col-4: p5 cs-1]
  Row 3: [col-1: p6 cs-1] [col-2: p7 cs-1] [col-3+4: p8 cs-2]
  Row 4: [col-1+2: p9 cs-2] [col-3+4: p10 cs-2]
  Placed 10/10 ✓

  Mobile (grid-cols-2):
  All cards span 1 col, 10 items = 5 rows ✓
*/

const galleryImages = [
  {
    src: 'https://avatars.mds.yandex.net/get-altay/20217881/2a0000019ffe5d352b24165c37b931816240/XXL_height',
    alt: 'Интерьер номера Monteva — уютная обстановка с тёплым освещением, нейтральные тона, качественная мебель',
    colSpan: 'col-span-2 row-span-2',
    aspect: 'aspect-square',
  },
  {
    src: 'https://avatars.mds.yandex.net/get-altay/20305182/2a0000019ffe5d2130f017442465f5c920b6/XXL_height',
    alt: 'Холл Monteva Boutique Hotel — элегантный интерьер с мягким светом',
    colSpan: 'col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    src: 'https://avatars.mds.yandex.net/get-altay/5475658/2a0000019ffe5d0c56877dd79bc6af3f196b/XXL_height',
    alt: 'Стандартный номер Monteva — двуспальная кровать, чистый белый текстиль',
    colSpan: 'col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    src: 'https://avatars.mds.yandex.net/get-altay/21113776/2a0000019ffe5cfa531f48caf117c50826c1/XXL_height',
    alt: 'Номер твин Monteva — две кровати, светлое пространство, современный дизайн',
    colSpan: 'col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    src: 'https://avatars.mds.yandex.net/get-altay/20179276/2a0000019ffe5ce7d16544ab67931b7a49a2/XXL_height',
    alt: 'Номер с террасой Monteva — выход на открытую террасу, дневной свет',
    colSpan: 'col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    src: 'https://avatars.mds.yandex.net/get-altay/18781639/2a0000019fbedd9439a706f90ec51554e8bf/XXL_height',
    alt: 'Люкс номер Monteva — просторный интерьер с элегантной мебелью',
    colSpan: 'col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    src: 'https://avatars.mds.yandex.net/get-altay/20190908/2a0000019fbedd94b3e6896cff9c6f7feb46/XXL_height',
    alt: 'Люкс с террасой Monteva — роскошный интерьер с диваном и выходом на террасу',
    colSpan: 'col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    src: 'https://avatars.mds.yandex.net/get-altay/20967380/2a0000019fbedd951ed6f7b084233b322d01/XXL_height',
    alt: 'Ванная комната Monteva — современный дизайн, тёплый пол, чистота',
    colSpan: 'col-span-2',
    aspect: 'aspect-[16/7]',
  },
  {
    src: 'https://avatars.mds.yandex.net/get-altay/18115183/2a0000019fbedd91a41172ea4047abbc7fa9/XXL_height',
    alt: 'Зона завтрака Monteva — шведский стол, уютная обстановка столовой',
    colSpan: 'col-span-2',
    aspect: 'aspect-[16/7]',
  },
  {
    src: 'https://avatars.mds.yandex.net/get-altay/20192526/2a0000019fbedd913e07eb3862d13c4911fb/XXL_height',
    alt: 'Общая зона Monteva Boutique Hotel — атмосферный интерьер, комфортное пространство',
    colSpan: 'col-span-2',
    aspect: 'aspect-[16/7]',
  },
];

export default function GallerySection() {
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      parallaxRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const speed = (i % 3 === 0) ? 0.04 : 0.06;
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
        const img = el.querySelector('img');
        if (img) {
          (img as HTMLElement).style.transform = `translateY(${offset}px) scale(1.1)`;
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="gallery" className="py-20 sm:py-28 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="scroll-reveal hidden-init mb-14 sm:mb-18 max-w-2xl">
          <p className="section-label mb-4">Галерея</p>
          <div className="accent-line mb-6" />
          <h2 className="font-display text-section-title font-semibold text-foreground mb-4">
            Атмосфера Monteva
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Взгляните на номера, интерьеры и пространства нашего отеля.
          </p>
        </div>

        {/* Desktop Gallery Grid */}
        <div className="hidden sm:grid grid-cols-4 gap-4 auto-rows-[220px]">
          {/* p1: col-span-2 row-span-2 */}
          <div className="gallery-item col-span-2 row-span-2 scroll-reveal hidden-init">
            <div
              ref={(el) => { parallaxRefs.current[0] = el; }}
              className="relative w-full h-full overflow-hidden rounded-xl"
            >
              <AppImage
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 50vw, 600px"
                priority
              />
            </div>
          </div>

          {/* p2: col-span-1 */}
          <div className="gallery-item col-span-1 scroll-reveal hidden-init delay-100">
            <div
              ref={(el) => { parallaxRefs.current[1] = el; }}
              className="relative w-full h-full overflow-hidden rounded-xl"
            >
              <AppImage
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 25vw, 300px"
              />
            </div>
          </div>

          {/* p3: col-span-1 */}
          <div className="gallery-item col-span-1 scroll-reveal hidden-init delay-200">
            <div
              ref={(el) => { parallaxRefs.current[2] = el; }}
              className="relative w-full h-full overflow-hidden rounded-xl"
            >
              <AppImage
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 25vw, 300px"
              />
            </div>
          </div>

          {/* Row 2 col 3+4: p4, p5 */}
          <div className="gallery-item col-span-1 scroll-reveal hidden-init delay-100">
            <div
              ref={(el) => { parallaxRefs.current[3] = el; }}
              className="relative w-full h-full overflow-hidden rounded-xl"
            >
              <AppImage
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 25vw, 300px"
              />
            </div>
          </div>

          <div className="gallery-item col-span-1 scroll-reveal hidden-init delay-200">
            <div
              ref={(el) => { parallaxRefs.current[4] = el; }}
              className="relative w-full h-full overflow-hidden rounded-xl"
            >
              <AppImage
                src={galleryImages[4].src}
                alt={galleryImages[4].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 25vw, 300px"
              />
            </div>
          </div>

          {/* Row 3: p6, p7, p8(cs-2) */}
          <div className="gallery-item col-span-1 scroll-reveal hidden-init">
            <div
              ref={(el) => { parallaxRefs.current[5] = el; }}
              className="relative w-full h-full overflow-hidden rounded-xl"
            >
              <AppImage
                src={galleryImages[5].src}
                alt={galleryImages[5].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 25vw, 300px"
              />
            </div>
          </div>

          <div className="gallery-item col-span-1 scroll-reveal hidden-init delay-100">
            <div
              ref={(el) => { parallaxRefs.current[6] = el; }}
              className="relative w-full h-full overflow-hidden rounded-xl"
            >
              <AppImage
                src={galleryImages[6].src}
                alt={galleryImages[6].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 25vw, 300px"
              />
            </div>
          </div>

          <div className="gallery-item col-span-2 scroll-reveal hidden-init delay-200">
            <div
              ref={(el) => { parallaxRefs.current[7] = el; }}
              className="relative w-full h-full overflow-hidden rounded-xl"
            >
              <AppImage
                src={galleryImages[7].src}
                alt={galleryImages[7].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 50vw, 600px"
              />
            </div>
          </div>

          {/* Row 4: p9(cs-2), p10(cs-2) */}
          <div className="gallery-item col-span-2 scroll-reveal hidden-init">
            <div
              ref={(el) => { parallaxRefs.current[8] = el; }}
              className="relative w-full h-full overflow-hidden rounded-xl"
            >
              <AppImage
                src={galleryImages[8].src}
                alt={galleryImages[8].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 50vw, 600px"
              />
            </div>
          </div>

          <div className="gallery-item col-span-2 scroll-reveal hidden-init delay-100">
            <div
              ref={(el) => { parallaxRefs.current[9] = el; }}
              className="relative w-full h-full overflow-hidden rounded-xl"
            >
              <AppImage
                src={galleryImages[9].src}
                alt={galleryImages[9].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 50vw, 600px"
              />
            </div>
          </div>
        </div>

        {/* Mobile Gallery Grid (2 cols) */}
        <div className="sm:hidden grid grid-cols-2 gap-3">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className={`gallery-item scroll-reveal hidden-init ${index === 0 ? 'col-span-2' : 'col-span-1'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className={`relative overflow-hidden rounded-xl ${index === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                <AppImage
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}