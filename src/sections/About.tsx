import { SectionHeader } from '@/components/SectionHeader';
import { AwardBadge } from '@/components/AwardBadge';

const awards = [
  { title: 'Лучший молодой предприниматель', year: '2016' },
  { title: 'Золотой Меркурий', year: '3×' },
  { title: 'Лучший социальный проект', year: '2021' },
  { title: 'Лучший предприниматель года', year: '2025' },
];

export function About() {
  return (
    <section id="about" className="bg-[#fffaf7] py-[clamp(60px,8vw,120px)]">
      <div className="max-w-[900px] mx-auto px-5">
        <div className="scroll-reveal">
          <SectionHeader
            label="ОБО МНЕ"
            title="Анна Суязова"
            subtitle="Основатель сети частных детских садов «Дети в приоритете», предприниматель, победитель национальных конкурсов"
          />
        </div>

        {/* Photo */}
        <div className="scroll-reveal-scale flex justify-center mt-12 mb-12">
          <div className="relative">
            {/* Decorative circle behind */}
            <div
              className="absolute -left-4 -bottom-4 w-[280px] h-[360px] rounded-2xl pointer-events-none"
              style={{ background: 'rgba(231, 60, 71, 0.06)' }}
            />
            <div className="relative w-[240px] h-[320px] md:w-[280px] md:h-[360px] rounded-2xl overflow-hidden">
              <img
                src="/anna-fireplace.jpg"
                alt="Анна Суязова"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bio text - 2 columns */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-12">
          <div className="scroll-reveal">
            <p className="text-[#60708c] leading-relaxed">
              С 2015 года работаю в дошкольном образовании. Начинала с детского центра, выросла до сети частных садов. Знаю изнутри все процессы: от выбора помещения и лицензирования до найма команды и маркетинга.
            </p>
            <p className="text-[#60708c] leading-relaxed mt-4">
              Прошла путь от «всё держится на мне» до выстроенной системы, где бизнес работает независимо от присутствия собственника.
            </p>
          </div>
          <div className="scroll-reveal">
            <p className="text-[#60708c] leading-relaxed">
              Победитель конкурсов «Лучший молодой предприниматель России» (2016), «Лучший социальный проект года» (2021), трёхкратный обладатель национальной премии «Золотой Меркурий», «Лучший предприниматель года» (2025).
            </p>
            <p className="text-[#60708c] leading-relaxed mt-4">
              Сейчас помогаю другим владельцам детских садов и центров выстроить управление системно и выйти на стабильную прибыль.
            </p>
          </div>
        </div>

        {/* Awards */}
        <div className="flex flex-wrap justify-center gap-4 stagger-children">
          {awards.map((award, index) => (
            <div key={index} className="scroll-reveal">
              <AwardBadge title={award.title} year={award.year} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
