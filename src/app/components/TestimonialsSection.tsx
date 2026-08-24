import React from 'react';

interface Review {
  name: string;
  date: string;
  text: string;
  rating: number;
  initials: string;
  source: string;
}

const reviews: Review[] = [
  {
    name: 'Bo Song',
    date: 'Август 2025',
    text: 'Хороший отель для отдыха. Хороший сон, так как отель расположен в тихом районе, и в нём легко вызвать такси, чтобы добраться до центра города. Новый отель с новым оборудованием и тёплым полом в ванной комнате — отлично подходит для одиноких путешественников или для семейного отдыха.',
    rating: 5,
    initials: 'BS',
    source: 'Яндекс Карты',
  },
  {
    name: 'Айгерим Нурланова',
    date: 'Июль 2025',
    text: 'Останавливалась с мужем на три ночи. Номер с террасой превзошёл все ожидания — просторно, чисто, очень уютно. Завтрак радовал разнообразием каждое утро. Персонал внимательный и доброжелательный. Обязательно вернёмся!',
    rating: 5,
    initials: 'АН',
    source: '2ГИС',
  },
  {
    name: 'Дмитрий Савченко',
    date: 'Июнь 2025',
    text: 'Приезжал в командировку. Отель полностью соответствует формату бутик — стильный интерьер, тишина, никакой суеты. Wi-Fi отличный, можно спокойно работать. Расположение в тихом районе — плюс, центр в 15 минутах. Рекомендую для деловых поездок.',
    rating: 5,
    initials: 'ДС',
    source: '2ГИС',
  },
  {
    name: 'Малика Ахметова',
    date: 'Май 2025',
    text: 'Прекрасный отель! Очень понравился номер люкс — большая кровать, красивый интерьер, всё новое. Завтрак шведский стол — разнообразный и вкусный. Тёплый пол в ванной — приятный бонус. Отель небольшой, но именно это создаёт особую атмосферу уюта.',
    rating: 5,
    initials: 'МА',
    source: '2ГИС',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`Оценка ${rating} из 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? 'var(--accent)' : 'var(--border)'}
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-28 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="scroll-reveal hidden-init mb-14 sm:mb-18 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-xl">
            <p className="section-label mb-4">Отзывы гостей</p>
            <div className="accent-line mb-6" />
            <h2 className="font-display text-section-title font-semibold text-foreground mb-4">
              Что говорят наши гости
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              52 оценки · 27 отзывов · Средний рейтинг 5.0
            </p>
          </div>
          {/* Overall rating */}
          <div className="flex items-center gap-4 bg-card rounded-2xl px-6 py-5 border border-border shadow-sm self-start sm:self-auto">
            <div>
              <p className="font-display text-4xl font-semibold text-foreground leading-none">5.0</p>
              <StarRating rating={5} />
              <p className="text-xs text-muted-foreground mt-1">52 оценки</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <p className="text-sm font-semibold text-foreground">Отлично</p>
              <p className="text-xs text-muted-foreground">27 отзывов</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="review-card p-6 sm:p-7 scroll-reveal hidden-init"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground flex-shrink-0"
                    style={{ background: 'var(--primary)' }}
                    aria-hidden="true"
                  >
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <StarRating rating={review.rating} />
                  <p className="text-xs text-muted-foreground mt-1">{review.source}</p>
                </div>
              </div>
              {/* Text */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}