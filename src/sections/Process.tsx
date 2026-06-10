import { SectionHeader } from '@/components/SectionHeader';
import { ProcessStep } from '@/components/ProcessStep';

const steps = [
  {
    number: 1,
    title: 'Знакомство',
    description: 'Оставляете заявку или пишете в Telegram. Обсуждаем вашу ситуацию и задачи.',
  },
  {
    number: 2,
    title: 'Диагностика',
    description: 'Анализируем ваш бизнес: процессы, финансы, маркетинг, команду.',
  },
  {
    number: 3,
    title: 'Решение',
    description: 'Разрабатываем план действий: стратегию, внедряем CRM, строим финмодель.',
  },
  {
    number: 4,
    title: 'Результат',
    description: 'Внедряете решения. Я остаюсь на связи 14 дней для поддержки.',
  },
];

export function Process() {
  return (
    <section id="process" className="bg-[#fffaf7] py-[clamp(60px,8vw,120px)]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="scroll-reveal">
          <SectionHeader
            label="ПРОЦЕСС"
            title="Как мы работаем"
            subtitle="Четыре простых шага от заявки до результата"
          />
        </div>

        <div className="mt-16 flex flex-col md:flex-row gap-10 md:gap-6">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
