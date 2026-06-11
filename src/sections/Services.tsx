import { MessageSquare, Database, Calculator, Home, TrendingUp, Users } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';

const services = [
  {
    icon: MessageSquare,
    title: 'Консультация по управлению',
    description: 'Личная онлайн-консультация по любым вопросам управления детским садом или центром.',
    features: ['Ответы под вашу ситуацию', 'Взгляд со стороны', 'План действий', '14 дней поддержки'],
  },
  {
    icon: Database,
    title: 'Внедрение CRM',
    description: 'Подбор и настройка CRM-системы для учёта заявок, клиентов и финансов.',
    features: ['Контроль заявок', 'База клиентов', 'Автоматизация задач', 'Аналитика и отчёты'],
  },
  {
    icon: Calculator,
    title: 'Финансовая модель',
    description: 'Построение финансовой модели: понимание реальной прибыли и точки безубыточности.',
    features: ['Расчёт рентабельности', 'Оптимизация расходов', 'Прогноз доходов', 'Контроль маржинальности'],
  },
  {
    icon: Home,
    title: 'Проверка помещения',
    description: 'Оценка помещения перед арендой по критериям пожарной безопасности и СанПиН.',
    features: ['Пожарная сигнализация', 'Соответствие нормам', 'Инструкция по проверке', 'Избежание штрафов'],
  },
  {
    icon: TrendingUp,
    title: 'Маркетинговая стратегия',
    description: 'Разработка стратегии привлечения клиентов и запуск рекламы для детского сада.',
    features: ['Анализ конкурентов', 'Каналы продвижения', 'Контент-план', 'Измеримый результат'],
  },
  {
    icon: Users,
    title: 'Командная поддержка',
    description: 'Доступ к команде специалистов: маркетолог, юрист, методист, дизайнер.',
    features: ['Маркетолог', 'Юрист', 'Методист', 'Дизайнер'],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[#f5efe9] py-[clamp(60px,8vw,120px)]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="scroll-reveal">
          <SectionHeader
            label="ЧЕМ Я МОГУ ПОМОЧЬ"
            title="Услуги для вашего бизнеса"
            subtitle="От консультации до полного сопровождения — выбирайте то, что нужно именно вам"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children auto-rows-fr">
          {services.map((service, index) => (
            <div key={index} className="scroll-reveal h-full">
              <div className="h-full">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
