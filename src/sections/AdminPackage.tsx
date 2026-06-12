import { useState, useEffect, useCallback } from 'react';
import { Send, ChevronLeft, ChevronRight, Check } from 'lucide-react';

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

function PhoneStory() {
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
    const phone = document.getElementById('phone-story');
    const start = () => {
      interval = setInterval(next, 4000);
    };
    const stop = () => clearInterval(interval);

    start();
    phone?.addEventListener('mouseenter', stop);
    phone?.addEventListener('mouseleave', start);
    return () => {
      stop();
      phone?.removeEventListener('mouseenter', stop);
      phone?.removeEventListener('mouseleave', start);
    };
  }, [next]);

  return (
    <div id="phone-story" className="relative w-full max-w-[340px] mx-auto lg:mx-0">
      {/* Phone frame */}
      <div className="bg-[#1a1a1a] rounded-[36px] p-2 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.35)]">
        {/* Screen */}
        <div className="relative bg-black rounded-[28px] overflow-hidden aspect-[9/16]">
          {/* Story image */}
          <img
            src={galleryItems[current].image}
            alt={galleryItems[current].label}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          />

          {/* Gradient overlays */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 z-20 px-3 pt-3 pb-2">
            {/* Progress segments */}
            <div className="flex gap-1 mb-3">
              {galleryItems.map((_, index) => (
                <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-300"
                    style={{
                      width:
                        index < current
                          ? '100%'
                          : index === current
                          ? '100%'
                          : '0%',
                      opacity: index <= current ? 1 : 0.4,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* User info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/30 bg-[#e73c47]">
                  <img src="/anna-fireplace.jpg" alt="Анна" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">anna_suyazova</p>
                  <p className="text-white/70 text-xs">Скрипты продаж</p>
                </div>
              </div>
              <span className="text-white/80 text-xs">{current + 1}/{total}</span>
            </div>
          </div>

          {/* Navigation tap zones */}
          <button
            type="button"
            onClick={prev}
            aria-label="Назад"
            className="absolute left-0 top-0 bottom-0 w-1/4 z-10 flex items-center justify-start pl-2 group"
          >
            <ChevronLeft className="w-7 h-7 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Вперёд"
            className="absolute right-0 top-0 bottom-0 w-1/4 z-10 flex items-center justify-end pr-2 group"
          >
            <ChevronRight className="w-7 h-7 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
          </button>

          {/* Bottom send button */}
          <div className="absolute bottom-0 left-0 right-0 z-20 px-3 pb-4">
            <a
              href="https://t.me/anna_suyazova"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm font-semibold py-2.5 rounded-full border border-white/30 transition-colors"
            >
              <Send className="w-4 h-4" />
              Отправить сообщение
            </a>
          </div>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {galleryItems.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Слайд ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-all ${
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
          {/* Left column — phone */}
          <div className="scroll-reveal-scale flex justify-center lg:justify-start">
            <PhoneStory />
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
              Я собрала пакет всех документов, необходимых для системной и эффективной работы администратора. Каждый из них действует в моём детском саду.
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
