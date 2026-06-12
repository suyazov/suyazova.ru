import { TrendingUp, FileText, BookOpen, Palette } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { webpUrl } from '@/lib/webpUrl';

const specialists = [
  {
    icon: TrendingUp,
    title: 'Маркетолог',
    description: 'Настройка рекламы, ведение соцсетей, стратегия привлечения заявок',
  },
  {
    icon: FileText,
    title: 'Юрист',
    description: 'Проверка договоров, лицензирование, соответствие требованиям',
  },
  {
    icon: BookOpen,
    title: 'Методист',
    description: 'Образовательные программы, конспекты, стандарты качества',
  },
  {
    icon: Palette,
    title: 'Дизайнер',
    description: 'Фирменный стиль, макеты, визуальная упаковка сада',
  },
];

export function Team() {
  return (
    <section id="team" className="bg-[#0d1b3e] py-[clamp(60px,8vw,120px)] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left column - content */}
          <div className="flex-1 scroll-reveal-left">
            <SectionHeader
              label="КОМАНДА"
              title="Маркетинговая поддержка для детских садов и центров"
              subtitle="У вас будет доступ к команде профессионалов, которая работает с детскими садами ежедневно. Каждый специалист знает специфику ниши и понимает, что важно для привлечения родителей."
              light
              className="text-left lg:max-w-none lg:mx-0"
            />

            <div className="mt-10 space-y-5">
              {specialists.map((spec, index) => (
                <div key={index} className="scroll-reveal flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <spec.icon className="w-5 h-5 text-[#e73c47]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{spec.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{spec.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - photo with stats */}
          <div className="flex-1 scroll-reveal-right relative">
            <div className="relative rounded-2xl overflow-hidden">
              <picture>
                <source srcSet={webpUrl('/anna-red-dress.jpg')} type="image/webp" />
                <img
                  src="/anna-red-dress.jpg"
                  alt="Анна Суязова"
                  className="w-full h-auto object-cover"
                  width="852"
                  height="1280"
                  loading="lazy"
                />
              </picture>

              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div
                  className="grid grid-cols-3 gap-4 p-5 rounded-xl"
                  style={{ background: 'rgba(13, 27, 62, 0.9)', backdropFilter: 'blur(12px)' }}
                >
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-[#e73c47]">10+</p>
                    <p className="text-xs text-white/60 mt-1">лет опыта</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-[#e73c47]">100+</p>
                    <p className="text-xs text-white/60 mt-1">консультаций</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-[#e73c47]">3</p>
                    <p className="text-xs text-white/60 mt-1">действующих сада</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
