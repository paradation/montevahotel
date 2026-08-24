import React from 'react';
import AppImage from '@/components/ui/AppImage';

interface Room {
  id: number;
  name: string;
  nameRu: string;
  description: string;
  price: string;
  tag: string;
  image: string;
  imageAlt: string;
  features: string[];
  colSpan: string;
  isLuxe: boolean;
}

const rooms: Room[] = [
  {
    id: 1,
    name: 'Standard Double',
    nameRu: 'Стандарт Двухместный',
    description: 'Современный номер с двуспальной кроватью. Завтрак в формате шведского стола включён.',
    price: 'от 39 000 тг',
    tag: 'Standard',
    image: 'https://avatars.mds.yandex.net/get-altay/5475658/2a0000019ffe5d0c56877dd79bc6af3f196b/XXL_height',
    imageAlt: 'Стандартный двухместный номер Monteva — двуспальная кровать с белым постельным бельём, нейтральные тона, светлый интерьер',
    features: ['Двуспальная кровать', 'Завтрак включён', 'Wi-Fi', 'Кондиционер'],
    colSpan: 'col-span-1',
    isLuxe: false,
  },
  {
    id: 2,
    name: 'Standard Twin',
    nameRu: 'Стандарт Твин',
    description: 'Современный номер с двумя раздельными кроватями. Удобен для коллег и друзей. Завтрак включён.',
    price: 'от 39 000 тг',
    tag: 'Standard',
    image: 'https://avatars.mds.yandex.net/get-altay/21113776/2a0000019ffe5cfa531f48caf117c50826c1/XXL_height',
    imageAlt: 'Стандартный номер твин Monteva — две раздельные кровати, современный интерьер, тёплое освещение',
    features: ['Две кровати', 'Завтрак включён', 'Wi-Fi', 'Кондиционер'],
    colSpan: 'col-span-1',
    isLuxe: false,
  },
  {
    id: 3,
    name: 'Standard Double with Terrace',
    nameRu: 'Стандарт с Террасой',
    description: 'Двуспальная кровать с выходом на личную террасу. Завтрак включён.',
    price: 'от 45 000 тг',
    tag: 'Standard+',
    image: 'https://avatars.mds.yandex.net/get-altay/20179276/2a0000019ffe5ce7d16544ab67931b7a49a2/XXL_height',
    imageAlt: 'Номер Monteva с террасой — двуспальная кровать, выход на открытую террасу с видом, светлый интерьер',
    features: ['Двуспальная кровать', 'Терраса', 'Завтрак включён', 'Wi-Fi'],
    colSpan: 'col-span-1',
    isLuxe: false,
  },
  {
    id: 4,
    name: 'Luxe Double',
    nameRu: 'Люкс Двухместный',
    description: 'Просторный люкс с двуспальной кроватью и раскладным креслом. Повышенный комфорт и элегантный интерьер.',
    price: 'от 50 000 тг',
    tag: 'Luxe',
    image: 'https://avatars.mds.yandex.net/get-altay/18781639/2a0000019fbedd9439a706f90ec51554e8bf/XXL_height',
    imageAlt: 'Люкс номер Monteva — просторный интерьер с двуспальной кроватью, элегантное оформление, мягкое освещение',
    features: ['Двуспальная кровать', 'Раскладное кресло', 'Завтрак включён', 'Кондиционер'],
    colSpan: 'col-span-1',
    isLuxe: true,
  },
  {
    id: 5,
    name: 'Luxe Double with Terrace',
    nameRu: 'Люкс с Террасой',
    description: 'Самый роскошный номер отеля — люкс с выходом на террасу и удобным диваном. Идеален для особых случаев.',
    price: 'от 55 000 тг',
    tag: 'Luxe+',
    image: 'https://avatars.mds.yandex.net/get-altay/20190908/2a0000019fbedd94b3e6896cff9c6f7feb46/XXL_height',
    imageAlt: 'Люкс номер Monteva с террасой — просторный интерьер, диван, выход на террасу, премиальное оформление',
    features: ['Двуспальная кровать', 'Диван', 'Личная терраса', 'Завтрак включён'],
    colSpan: 'lg:col-span-2',
    isLuxe: true,
  },
];

export default function RoomsSection() {
  return (
    <section id="rooms" className="py-20 sm:py-28 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="scroll-reveal hidden-init mb-14 sm:mb-18 max-w-2xl">
          <p className="section-label mb-4">Номера</p>
          <div className="accent-line mb-6" />
          <h2 className="font-display text-section-title font-semibold text-foreground mb-4">
            Выберите свой номер
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Пять категорий номеров — от уютного стандарта до просторного люкса с террасой. Завтрак включён в каждый тариф.
          </p>
        </div>

        {/* Rooms Grid — Bento Layout */}
        {/* 
          BENTO AUDIT:
          Row 1 (grid-cols-3 on lg): [col-1: Room1 cs-1] [col-2: Room2 cs-1] [col-3: Room3 cs-1]
          Row 2 (grid-cols-3 on lg): [col-1: Room4 cs-1] [col-2+3: Room5 cs-2]
          Placed 5/5 cards ✓
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Row 1: Standard rooms — 3 equal cards */}
          {rooms.slice(0, 3).map((room, index) => (
            <div
              key={room.id}
              className={`room-card scroll-reveal hidden-init`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <RoomCard room={room} />
            </div>
          ))}

          {/* Row 2: Luxe rooms — Room4 (1 col) + Room5 (2 cols) */}
          <div className="room-card scroll-reveal hidden-init delay-100">
            <RoomCard room={rooms[3]} />
          </div>
          <div className="room-card scroll-reveal hidden-init delay-200 sm:col-span-1 lg:col-span-2">
            <RoomCardWide room={rooms[4]} />
          </div>
        </div>

        {/* CTA */}
        <div className="scroll-reveal hidden-init mt-12 text-center">
          <a
            href="https://wa.me/77078016267"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base"
            aria-label="Уточнить наличие номеров в WhatsApp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Уточнить наличие номеров
          </a>
        </div>
      </div>
    </section>
  );
}

function RoomCard({ room }: { room: Room }) {
  return (
    <div className="flex flex-col h-full">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <AppImage
          src={room.image}
          alt={room.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Tag */}
        <div className="absolute top-3 left-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
              room.isLuxe
                ? 'text-primary-foreground'
                : 'bg-white/90 text-foreground'
            }`}
            style={room.isLuxe ? { background: 'var(--primary)' } : {}}
          >
            {room.tag}
          </span>
        </div>
      </div>
      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-display text-card-title font-semibold text-foreground mb-1">{room.nameRu}</h3>
        <p className="text-xs text-muted-foreground mb-3 font-medium tracking-wide">{room.name}</p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{room.description}</p>
        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {room.features.map((f) => (
            <span key={f} className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full border border-border">
              {f}
            </span>
          ))}
        </div>
        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="price-badge">{room.price}</span>
          <a
            href="https://wa.me/77078016267"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary hover:text-accent transition-colors duration-200 flex items-center gap-1"
            aria-label={`Забронировать ${room.nameRu}`}
          >
            Забронировать
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17l9.2-9.2M17 17V7H7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function RoomCardWide({ room }: { room: Room }) {
  return (
    <div className="flex flex-col sm:flex-row h-full">
      {/* Image */}
      <div className="relative sm:w-1/2 aspect-[4/3] sm:aspect-auto overflow-hidden">
        <AppImage
          src={room.image}
          alt={room.imageAlt}
          fill
          className="object-cover transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 44vw"
        />
        {/* Tag */}
        <div className="absolute top-3 left-3">
          <span
            className="px-3 py-1 rounded-full text-xs font-bold tracking-wide text-primary-foreground"
            style={{ background: 'var(--accent)' }}
          >
            {room.tag}
          </span>
        </div>
      </div>
      {/* Content */}
      <div className="sm:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <h3 className="font-display text-card-title font-semibold text-foreground mb-1">{room.nameRu}</h3>
          <p className="text-xs text-muted-foreground mb-4 font-medium tracking-wide">{room.name}</p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">{room.description}</p>
          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-6">
            {room.features.map((f) => (
              <span key={f} className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full border border-border">
                {f}
              </span>
            ))}
          </div>
        </div>
        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="price-badge">{room.price}</span>
          <a
            href="https://wa.me/77078016267"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary hover:text-accent transition-colors duration-200 flex items-center gap-1"
            aria-label={`Забронировать ${room.nameRu}`}
          >
            Забронировать
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17l9.2-9.2M17 17V7H7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}