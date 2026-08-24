import React from 'react';
import AppImage from '@/components/ui/AppImage';

const stats = [
  { value: '24', label: 'Номера' },
  { value: '5.0', label: 'Рейтинг' },
  { value: '52', label: 'Оценки' },
  { value: '4★', label: 'Категория' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="lg:col-span-5 scroll-reveal hidden-init order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] relative">
                <AppImage
                  src="https://avatars.mds.yandex.net/get-altay/20305182/2a0000019ffe5d2130f017442465f5c920b6/XXL_height"
                  alt="Интерьер Monteva Boutique Hotel — элегантный холл с мягким освещением, тёплые нейтральные тона, уютная атмосфера"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
              {/* Floating stat card */}
              <div
                className="absolute -bottom-6 -right-4 sm:-right-8 bg-card rounded-xl p-5 shadow-xl border border-border"
                style={{ minWidth: '160px' }}
              >
                <div className="flex items-center gap-2 mb-1">
                  {[0,1,2,3,4]?.map((i) => (
                    <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="var(--accent)" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="font-display text-2xl font-semibold text-foreground">5.0</p>
                <p className="text-muted-foreground text-xs mt-0.5">27 отзывов гостей</p>
              </div>
              {/* Accent corner decoration */}
              <div
                className="absolute -top-4 -left-4 w-16 h-16 rounded-full opacity-20"
                style={{ background: 'var(--accent)' }}
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-between gap-10">
            <div className="scroll-reveal hidden-init">
              <p className="section-label mb-4">Об отеле</p>
              <div className="accent-line mb-6" />
              <h2 className="font-display text-section-title font-semibold text-foreground mb-6">
                Больше чем просто отель — <span style={{ color: 'var(--accent)' }}>ваше место в Алматы</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-5">
                Monteva Boutique Hotel — новый уютный отель в тихом районе Алматы, где каждый номер оборудован с вниманием к деталям. Тёплый пол в ванных комнатах, современная мебель, завтрак в формате шведского стола — всё включено в стоимость проживания.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Мы расположены в спокойном микрорайоне Горный Гигант — идеальное место для отдыха после насыщенного дня, при этом центр города легко достижим на такси. Подходит для деловых путешественников, туристов и семей с детьми.
              </p>

              {/* Who it's for */}
              <div className="flex flex-wrap gap-3">
                {['Деловые поездки', 'Туризм', 'Семейный отдых', 'Пары']?.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground bg-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats Row */}
            <div className="scroll-reveal hidden-init delay-200 grid grid-cols-4 gap-4 pt-8 border-t border-border">
              {stats?.map((stat) => (
                <div key={stat?.label} className="text-center">
                  <p className="font-display text-2xl sm:text-3xl font-semibold text-foreground">{stat?.value}</p>
                  <p className="text-xs text-muted-foreground mt-1 tracking-wide">{stat?.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}