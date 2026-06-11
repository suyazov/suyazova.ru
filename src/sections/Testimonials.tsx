import { useState } from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';

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

export function Testimonials() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {testimonialScreenshots.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setActiveIndex(index);
                setOpen(true);
              }}
              className="scroll-reveal group text-left rounded-2xl overflow-hidden bg-white border border-[#e8e0d8] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-[#e73c47] focus:ring-offset-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
            </button>
          ))}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-2xl p-2 sm:p-4 bg-white border-none">
            <DialogTitle className="sr-only">
              {testimonialScreenshots[activeIndex]?.alt}
            </DialogTitle>
            <img
              src={testimonialScreenshots[activeIndex]?.src}
              alt={testimonialScreenshots[activeIndex]?.alt}
              className="w-full h-auto rounded-lg"
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
