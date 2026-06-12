import { SectionHeader } from '@/components/SectionHeader';
import { AwardBadge } from '@/components/AwardBadge';
import { Award, Building2, Users, Calendar } from 'lucide-react';

const awards = [
  { title: 'Лучший молодой предприниматель', year: '2016' },
  { title: 'Золотой Меркурий', year: '3×' },
  { title: 'Лучший социальный проект', year: '2021' },
  { title: 'Лучший предприниматель года', year: '2025' },
];

const stats = [
  { icon: Calendar, value: '10+', label: 'лет в дошкольном образовании' },
  { icon: Building2, value: '5+', label: 'действующих детских садов' },
  { icon: Award, value: '3×', label: 'обладатель премии Золотой Меркурий' },
  { icon: Users, value: '500+', label: 'владельцев бизнеса проконсультировано' },
];

export function About() {
  return (
    <section id="about" className="bg-[#fffaf7] py-[clamp(60px,8vw,120px)]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="scroll-reveal">
          <SectionHeader
            label="ОБО МНЕ"
            title="Анна Суязова"
            subtitle="Основатель сети частных детских садов «Дети в приоритете», предприниматель, победитель национальных конкурсов"
          />
        </div>

        <div className="mt-14 lg:mt-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Photo */}
          <div className="scroll-reveal-scale flex justify-center lg:justify-start">
            <div className="relative">
              {/* Decorative shape behind */}
              <div
                className="absolute -left-5 -bottom-5 w-full h-full rounded-[24px] pointer-events-none"
                style={{ background: 'rgba(231, 60, 71, 0.07)' }}
              />
              <div className="relative w-[280px] h-[360px] md:w-[320px] md:h-[420px] rounded-[24px] overflow-hidden shadow-card">
                <img
                  src="/anna-fireplace.jpg"
                  alt="Анна Суязова"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="scroll-reveal">
            <h3 className="text-2xl md:text-3xl font-bold text-[#172033] mb-4">
              Помогаю владельцам детских садов и центров выстроить управление и выйти на стабильную прибыль
            </h3>

            <div className="space-y-4 text-[#60708c] leading-relaxed mb-8">
              <p>
                С 2015 года работаю в дошкольном образовании. Начинала с детского центра, выросла до сети частных садов. Знаю изнутри все процессы: от выбора помещения и лицензирования до найма команды и маркетинга.
              </p>
              <p>
                Прошла путь от «всё держится на мне» до выстроенной системы, где бизнес работает независимо от присутствия собственника. Победитель конкурсов «Лучший молодой предприниматель России», «Лучший социальный проект года», трёхкратный обладатель национальной премии «Золотой Меркурий», «Лучший предприниматель года».
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#fffaf7] border border-[#e8e0d8] rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <stat.icon className="w-6 h-6 text-[#e73c47] mb-3" />
                  <p className="text-3xl font-bold text-[#172033]">{stat.value}</p>
                  <p className="text-sm text-[#60708c] mt-1 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Awards */}
            <div className="flex flex-wrap gap-3 stagger-children">
              {awards.map((award, index) => (
                <div key={index} className="scroll-reveal">
                  <AwardBadge title={award.title} year={award.year} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
