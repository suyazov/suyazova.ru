import { SectionHeader } from '@/components/SectionHeader';
import { Send, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const galleryItems = [
  { label: 'Главная: 3 ошибки администратора', image: '/skripty-prodazh-dlya-administratora-detskogo-sada.jpg' },
  { label: 'Ошибка №1: неверно обрабатываются заявки', image: '/oshibka-nevernye-zayavki-administratora.jpg' },
  { label: 'Ошибка №2: админ плохо знает продукт', image: '/oshibka-plokhoe-znanie-produkta.jpg' },
  { label: 'Ошибка №3: нет работы с возражениями', image: '/oshibka-net-raboty-s-vozrazheniyami.jpg' },
  { label: 'Инструмент — готовые скрипты продаж', image: '/instrument-gotovye-skripty-prodazh.jpg' },
  { label: 'Что входит в пакет документов', image: '/sostav-paketa-dokumentov-administratora.jpg' },
  { label: 'Заказать пакет документов', image: '/paket-dokumentov-dlya-administratora-zakazat.jpg' },
];

export function AdminPackage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const total = galleryItems.length;

  const scrollToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(index, total - 1));
    setCurrent(clamped);
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[clamped] as HTMLElement | undefined;
    if (!slide) return;
    track.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const handleScroll = () => {
      const slideWidth = track.children[0]?.clientWidth || 1;
      const gap = 16;
      const index = Math.round(track.scrollLeft / (slideWidth + gap));
      setCurrent(Math.max(0, Math.min(index, total - 1)));
    };
    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleScroll);
  }, [total]);

  return (
    <section id="admin-package" className="bg-[#fffaf7] py-[clamp(60px,8vw,120px)]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="scroll-reveal">
          <SectionHeader
            label="СИСТЕМА ПРОДАЖ"
            title="Скрипты продаж для администратора"
            subtitle="Готовые сценарии общения с родителями: ответы на вопросы о цене, запись на экскурсию, работа с возражениями и возврат клиента"
          />
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <p className="text-center text-lg text-[#60708c] mb-8">
            Скрипты продаж для администратора детского сада/центра — это готовые сценарии общения с родителями: ответы на вопросы о цене, запись на экскурсию, работа с возражениями и возврат клиента.
          </p>
          <p className="text-center text-lg text-[#60708c]">
            Я собрала пакет всех документов, необходимых для системной и эффективной работы администратора.
            Каждый из них действует в моем детском саду. В карусели расписала, что входит в пакет.
          </p>
        </div>

        <div className="mt-10 relative">
          <button
            type="button"
            onClick={() => scrollToIndex(current - 1)}
            disabled={current === 0}
            aria-label="Назад"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-12 h-12 rounded-full bg-[#e73c47] text-white flex items-center justify-center shadow-lg hover:bg-[#c42835] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            ref={trackRef}
            className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x snap-mandatory mx-10"
          >
            {galleryItems.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-[340px] snap-start scroll-reveal">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full aspect-[4/5] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollToIndex(current + 1)}
            disabled={current === total - 1}
            aria-label="Вперёд"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-12 h-12 rounded-full bg-[#e73c47] text-white flex items-center justify-center shadow-lg hover:bg-[#c42835] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToIndex(index)}
                aria-label={`Слайд ${index + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === current ? 'bg-[#e73c47] scale-125' : 'bg-[#e8e0d8] hover:bg-[#d4ccc4]'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
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
    </section>
  );
}
