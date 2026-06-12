import { useState, useEffect, useCallback } from 'react';
import { Send, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { webpUrl } from '@/lib/webpUrl';

const galleryItems = [
  { label: 'Главная: 3 ошибки администратора', image: '/skripty-prodazh-dlya-administratora-detskogo-sada.jpg' },
  { label: 'Ошибка №1: неверно обрабатываются заявки', image: '/oshibka-nevernye-zayavki-administratora.jpg' },
  { label: 'Ошибка №2: админ плохо знает продукт', image: '/oshibka-plokhoe-znanie-produkta.jpg' },
  { label: 'Ошибка №3: нет работы с возражениями', image: '/oshibka-net-raboty-s-vozrazheniyami.jpg' },
  { label: 'Инструмент — готовые скрипты продаж', image: '/instrument-gotovye-skripty-prodazh.jpg' },
  { label: 'Что входит в пакет документов', image: '/sostav-paketa-dokumentov-administratora.jpg' },
  { label: 'Заказать пакет документов', image: '/paket-dokumentov-dlya-administratora-zakazat.jpg' },
];

const features = [
  'Скрипты входящих и исходящих звонков',
  'Работа с возражениями: дорого, подумаем, сравню',
  'Запись родителя на экскурсию',
  'Возврат «замороженного» клиента',
];

function StoryGallery() {
  const [current, setCurrent] = useState(0);
  const total = galleryItems.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-play with pause on hover
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const gallery = document.getElementById('story-gallery');
    const start = () => {
      interval = setInterval(next, 4000);
    };
    const stop = () => clearInterval(interval);

    start();
    gallery?.addEventListener('mouseenter', stop);
    gallery?.addEventListener('mouseleave', start);
    return () => {
      stop();
      gallery?.removeEventListener('mouseenter', stop);
      gallery?.removeEventListener('mouseleave', start);
    };
  }, [next]);

  return (
    <div id="story-gallery" className="w-full max-w-[480px] mx-auto lg:mx-0">
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Navigation arrow - left */}
        <button
          type="button"
          onClick={prev}
          aria-label="Назад"
          className="flex-shrink-0 w-10 h-10 rounded-full bg-white/90 text-[#172033] flex items-center justify-center shadow-lg hover:bg-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Main image */}
        <div className="relative flex-1 rounded-3xl overflow-hidden shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)] aspect-[4/5] bg-[#1a1a1a]">
          {galleryItems.map((item, index) => (
            <picture key={index}>
              <source srcSet={webpUrl(item.image)} type="image/webp" />
              <img
                src={item.image}
                alt={item.label}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  index === current ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </picture>
          ))}

          {/* Top progress */}
          <div className="absolute top-0 left-0 right-0 z-10 px-4 pt-4">
            <div className="flex gap-1.5">
              {galleryItems.map((_, index) => (
                <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-300"
                    style={{
                      width: index <= current ? '100%' : '0%',
                      opacity: index <= current ? 1 : 0.4,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Counter */}
          <div className="absolute top-4 right-4 z-10 text-white text-xs font-medium bg-black/30 px-2 py-1 rounded-full">
            {current + 1}/{total}
          </div>
        </div>

        {/* Navigation arrow - right */}
        <button
          type="button"
          onClick={next}
          aria-label="Вперёд"
          className="flex-shrink-0 w-10 h-10 rounded-full bg-white/90 text-[#172033] flex items-center justify-center shadow-lg hover:bg-white transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-5">
        {galleryItems.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Слайд ${index + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === current ? 'bg-[#e73c47] scale-125' : 'bg-[#d4ccc4] hover:bg-[#b8b0a8]'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function AdminPackage() {
  return (
    <section id="admin-package" className="bg-[#fffaf7] py-[clamp(60px,8vw,120px)] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column — story gallery */}
          <div className="scroll-reveal-scale flex justify-center lg:justify-start">
            <StoryGallery />
          </div>

          {/* Right column — text */}
          <div className="scroll-reveal">
            <span className="text-xs font-semibold tracking-[0.08em] uppercase text-[#e73c47]">
              СИСТЕМА ПРОДАЖ
            </span>
            <h2 className="mt-4 text-[clamp(28px,3vw,42px)] font-bold leading-tight tracking-tight text-[#172033]">
              Скрипты продаж для администратора
            </h2>
            <p className="mt-5 text-lg text-[#60708c] leading-relaxed">
              Готовые сценарии общения с родителями: ответы на вопросы о цене, запись на экскурсию, работа с возражениями и возврат клиента.
            </p>
            <p className="mt-4 text-[#60708c] leading-relaxed">
              Я собрала пакет всех документов, необходимых для системной и эффективной работы администратора. Каждый из них эффективно работает в действующих детских садах.
            </p>

            <ul className="mt-8 space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-[#172033]">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#fef2f2] flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-[#e73c47]" strokeWidth={3} />
                  </span>
                  <span className="text-[15px]">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href="https://t.me/anna_suyazova"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#e73c47] hover:bg-[#c42835] text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200"
              >
                <Send className="w-5 h-5" />
                Написать для покупки пакета
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
