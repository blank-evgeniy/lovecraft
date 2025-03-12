import { useState } from 'react';

import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import loc1 from '@assets/locations/sunken-city.jpg';
import loc2 from '@assets/locations/the-city-of-arkham.jpg';
import loc3 from '@assets/locations/fishing-town.jpg';
import loc4 from '@assets/locations/the-frozen-wasteland.jpg';
import loc5 from '@assets/locations/the-remote-village.jpg';
import loc6 from '@assets/locations/underground-city.jpg';
import loc7 from '@assets/locations/desert.jpg';
import loc8 from '@assets/locations/portal.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface LocationSlide {
  img: string;
  title: string;
  description: string;
}

const data: LocationSlide[] = [
  {
    img: loc1.src,
    title: "Р'льех (Город Ктулху)",
    description:
      'Древний подводный город, где спит Ктулху. Архитектура города нарушает законы физики, а его стены покрыты странными символами.',
  },
  {
    img: loc2.src,
    title: 'Аркхем',
    description:
      'Мрачный город в Новой Англии, известный своими тайнами и ужасами. Здесь находится знаменитый Университет Мискатоник.',
  },
  {
    img: loc3.src,
    title: 'Иннсмут',
    description:
      'Заброшенный рыбацкий городок, где живут Глубокие. Его улицы полны странных существ и древних секретов.',
  },
  {
    img: loc4.src,
    title: 'Антарктида (Хребты Безумия)',
    description:
      'Ледяная пустыня, где были обнаружены древние руины и следы инопланетной цивилизации.',
  },
  {
    img: loc5.src,
    title: 'Данвич',
    description:
      'Уединённая деревня, окружённая лесами и холмами. Здесь происходят странные и пугающие события.',
  },
  {
    img: loc6.src,
    title: 'Подземный город (Город Древних)',
    description:
      'Древний город, скрытый под землёй. Его стены покрыты рунами, а в его залах хранятся тайны древних богов.',
  },
  {
    img: loc7.src,
    title: 'Пустыня (Обитель Ньярлатотепа)',
    description:
      'Безжизненная пустыня, где обитает Ньярлатотеп. Здесь царит хаос, а древние руины скрывают страшные секреты.',
  },
  {
    img: loc8.src,
    title: 'Космический портал (Врата Йог-Сотота)',
    description:
      'Портал в другие измерения, окружённый древними камнями. Через него можно попасть в мир Йог-Сотота.',
  },
];

export const LocationCarousel = () => {
  const [description, setDescription] = useState<string>(data[0].description);

  return (
    <>
      <Swiper
        className="animate-fade-down animate-delay-[300ms]"
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => {
          setDescription(data[swiper.activeIndex].description);
        }}
      >
        {data.map((location) => (
          <SwiperSlide key={location.title}>
            <div className="relative flex aspect-[1.7] items-start justify-center bg-slate-700">
              <img src={location.img} className="h-full w-full object-cover" />
              <h3 className="absolute w-full bg-slate-900/50 py-2 text-center font-serif text-lg font-semibold text-slate-100 sm:py-4 sm:text-2xl">
                {location.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="animate-fade-down animate-delay-[300ms] pt-8 font-serif text-lg font-medium text-slate-200 sm:text-xl">
        {description}
      </p>
    </>
  );
};
