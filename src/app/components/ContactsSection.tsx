import React from 'react';

export default function ContactsSection() {
  return (
    <section id="contacts" className="py-20 sm:py-28 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="scroll-reveal hidden-init mb-14 sm:mb-18 max-w-2xl">
          <p className="section-label mb-4">Контакты</p>
          <div className="accent-line mb-6" />
          <h2 className="font-display text-section-title font-semibold text-foreground mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Мы готовы ответить на ваши вопросы и помочь с бронированием в любое время.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Address */}
            <div className="scroll-reveal hidden-init bg-card rounded-2xl p-6 border border-border">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'var(--muted)', color: 'var(--primary)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Адрес</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                ул. Фазыла Карибжанова, 76<br />
                Микрорайон Горный Гигант<br />
                Алматы, Казахстан
              </p>
            </div>

            {/* Phone */}
            <div className="scroll-reveal hidden-init delay-100 bg-card rounded-2xl p-6 border border-border">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'var(--muted)', color: 'var(--primary)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Телефон</h3>
              <a
                href="tel:+77078016267"
                className="text-primary font-semibold text-sm hover:text-accent transition-colors"
              >
                +7 707 801 6267
              </a>
              <p className="text-muted-foreground text-xs mt-1">Круглосуточно</p>
            </div>

            {/* WhatsApp */}
            <div className="scroll-reveal hidden-init delay-200 bg-card rounded-2xl p-6 border border-border">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: '#dcfce7', color: '#16a34a' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/77078016267"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold hover:text-accent transition-colors"
                style={{ color: '#16a34a' }}
                aria-label="Написать в WhatsApp"
              >
                Написать в WhatsApp
              </a>
              <p className="text-muted-foreground text-xs mt-1">Бронирование и вопросы</p>
            </div>

            {/* Email */}
            <div className="scroll-reveal hidden-init delay-300 bg-card rounded-2xl p-6 border border-border">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'var(--muted)', color: 'var(--primary)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <a
                href="mailto:montevaboutiquehotel@mail.ru"
                className="text-primary font-semibold text-sm hover:text-accent transition-colors break-all"
              >
                montevaboutiquehotel@mail.ru
              </a>
            </div>
          </div>

          {/* Right Column: CTA Panel */}
          <div className="lg:col-span-5 scroll-reveal hidden-init delay-200 flex flex-col gap-5">
            {/* Book CTA Card */}
            <div
              className="rounded-2xl p-8 flex flex-col gap-5 text-primary-foreground"
              style={{ background: 'var(--primary)' }}
            >
              <div>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Бронирование
                </p>
                <h3 className="font-display text-2xl font-semibold leading-tight mb-3">
                  Готовы приехать? Забронируйте прямо сейчас
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Напишите нам в WhatsApp — ответим в течение нескольких минут и подберём лучший номер.
                </p>
              </div>
              <a
                href="https://wa.me/77078016267"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-semibold w-full"
                aria-label="Забронировать номер через WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Написать в WhatsApp
              </a>
            </div>

            {/* 2GIS + Instagram */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://2gis.kz/almaty/firm/70000001114966538"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-accent transition-all duration-300 hover:shadow-md text-center"
                aria-label="Открыть Monteva Boutique Hotel на 2ГИС"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'var(--muted)', color: 'var(--primary)' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Открыть на 2ГИС</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Маршрут и карта</p>
                </div>
              </a>

              <a
                href="https://instagram.com/monteva_boutiquehotel"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-accent transition-all duration-300 hover:shadow-md text-center"
                aria-label="Instagram Monteva Boutique Hotel"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'var(--muted)', color: 'var(--accent)' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Instagram</p>
                  <p className="text-xs text-muted-foreground mt-0.5">@monteva_boutiquehotel</p>
                </div>
              </a>
            </div>

            {/* Hours */}
            <div className="bg-card border border-border rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <h3 className="font-semibold text-foreground text-sm">Режим работы</h3>
              </div>
              <p className="text-muted-foreground text-sm">Ресепшн работает <span className="font-semibold text-foreground">24 часа, 7 дней в неделю</span></p>
              <p className="text-muted-foreground text-xs mt-1">Заезд: с 14:00 · Выезд: до 12:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}