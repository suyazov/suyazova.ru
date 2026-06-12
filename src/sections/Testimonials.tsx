import { useState, useEffect, useCallback } from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { webpUrl } from '@/lib/webpUrl';

const testimonialScreenshots = [
  { src: '/otziv-klienta-1.jpg', alt: 'Отзыв клиента: первая консультация и страх проверок' },
  { src: '/otziv-klienta-2.jpg', alt: 'Отзыв клиента: впервые спокойно сплю после разговора' },
  { src: '/otziv-klienta-3.jpg', alt: 'Отзыв клиента: не знала, как открывать детский сад' },
  { src: '/otziv-klienta-4.jpg', alt: 'Отзыв клиента: благодарность за консультацию и таблицу конкурентного анализа' },
  { src: '/otziv-klienta-5.jpg', alt: 'Отзыв клиента: оформление журналов и переход в формат частного сада' },
  { src: '/otziv-klienta-6.jpg', alt: 'Отзыв клиента: все разложили по полочкам и дали конкретные инструменты' },
  { src: '/otziv-klienta-7.jpg', alt: 'Отзыв клиента из детского центра: нужен пакет Администрирование' },
  { src: '/otziv-klienta-8.jpg', alt: 'Отзыв клиента: 2 года вынашивала идею открыть детский сад' },
  { src: '/otziv-klienta-9.jpg', alt: 'Отзыв клиента: вдохновение и понимание, как выстроить систему' },
];

function useVisibleCount() {
  const [visible, setVisible] = useState(3);

  const update = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) setVisible(1);
    else if (width < 1024) setVisible(2);
    else setVisible(3);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  return visible;
}

export function Testimonials() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [current, setCurrent] = useState(0);
  const visibleCount = useVisibleCount();
  const total = testimonialScreenshots.length;
  const maxIndex = Math.max(0, total - visibleCount);

  const goTo = (index: number) => {
    setCurrent(Math.max(0, Math.min(index, maxIndex)));
  };

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  return (
    <section id="testimonials" className="bg-[#f5efe9] py-[clamp(60px,8vw,120px)]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="scroll-reveal">
          <SectionHeader
            label="ОТЗЫВЫ"
            title="Что говорят клиенты"
            subtitle="Реальные скриншоты сообщений от владельцев детских садов и центров после консультаций"
          />
        </div>

        <div className="mt-12 relative">
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            aria-label="Назад"
            className="absolute -left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white text-[#e73c47] border border-[#e8e0d8] shadow-md flex items-center justify-center hover:bg-[#fef2f2] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          <div className="overflow-hidden mx-8 lg:mx-10">
            <div
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * (100 / visibleCount)}%)` }}
            >
              {testimonialScreenshots.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ flex: `0 0 calc(${100 / visibleCount}% - ${(16 * (visibleCount - 1)) / visibleCount}px)` }}
                >
                  <button
                    type="button"
                    onClick={() => openLightbox(index)}
                    className="group w-full text-left rounded-2xl overflow-hidden bg-white border border-[#e8e0d8] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-[#e73c47] focus:ring-offset-2"
                  >
                    <div className="relative overflow-hidden aspect-[3/4]">
                      <picture>
                        <source srcSet={webpUrl(item.src)} type="image/webp" />
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      </picture>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => goTo(current + 1)}
            disabled={current >= maxIndex}
            aria-label="Вперёд"
            className="absolute -right-2 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white text-[#e73c47] border border-[#e8e0d8] shadow-md flex items-center justify-center hover:bg-[#fef2f2] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Слайд ${index + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === current ? 'bg-[#e73c47] scale-125' : 'bg-[#e8e0d8] hover:bg-[#d4ccc4]'
              }`}
            />
          ))}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-2xl p-2 sm:p-4 bg-white border-none">
            <DialogTitle className="sr-only">
              {testimonialScreenshots[activeIndex]?.alt}
            </DialogTitle>
            <picture>
              <source srcSet={webpUrl(testimonialScreenshots[activeIndex]?.src)} type="image/webp" />
              <img
                src={testimonialScreenshots[activeIndex]?.src}
                alt={testimonialScreenshots[activeIndex]?.alt}
                className="w-full h-auto rounded-lg"
              />
            </picture>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
