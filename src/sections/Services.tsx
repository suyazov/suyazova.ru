import {
  Star,
  Home,
  Rocket,
  CheckCircle2,
  Database,
  Calculator,
  ShieldCheck,
  TrendingUp,
  Users,
  Tent,
} from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';

const featuredService = {
  title: 'Консультация и сопровождение по управлению',
  description:
    'Разбираю вашу текущую ситуацию, нахожу точки роста и даю пошаговый план действий с двухнедельной поддержкой. Работаю с владельцами, у которых сад уже открыт, и с теми, кто только планирует запуск.',
  existing: {
    label: 'Уже открыли сад',
    icon: Home,
    items: [
      'Увеличиваю прибыль и сокращаю личное участие в управлении',
      'Реформирую сад в более актуальный и конкурентный формат',
      'Повышаю качество услуг, сервиса и работы команды',
      'Готовлю к проверкам и помогаю выстроить работу по СанПиН',
      'Разбираю соцсети, определяю уникальное предложение и каналы продвижения',
      'Анализирую расходы, нахожу резервы и планирую рост дохода',
    ],
  },
  new: {
    label: 'Только планируете открыть',
    icon: Rocket,
    items: [
      'Открытие «под ключ»: район, помещение, бюджет и готовый к работе сад',
      'Сопровождение запуска: документы, закупки, брендинг, реклама, команда',
      'Разбор ваших вопросов на каждом этапе открытия',
    ],
  },
  extras: [
    'Выстраиваю автономные процессы, чтобы бизнес работал без постоянного контроля',
    'Внедряю понятные стандарты и регламенты для небольших команд',
    'Ищу выход из кризиса без бесконечных скидок и помогаю не закрыться',
  ],
};

const services = [
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
    icon: ShieldCheck,
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
  {
    icon: Tent,
    title: 'Запуск летнего лагеря',
    description: 'Готовый пакет для запуска лагеря: программа, финансы, документы, привлечение.',
    features: ['Пошаговая инструкция', 'Финансовая модель', 'Все документы', 'Структура программы'],
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

        {/* Featured service */}
        <div className="mt-16 scroll-reveal">
          <div className="relative bg-[#172033] text-white rounded-3xl p-8 lg:p-12 overflow-hidden">
            {/* Decorative glow */}
            <div
              className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #e73c47 0%, transparent 70%)' }}
            />

            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#e73c47] flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-semibold tracking-wider uppercase rounded-full">
                  Главная услуга
                </span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold mb-4">{featuredService.title}</h3>
              <p className="text-white/80 text-base lg:text-lg max-w-3xl mb-10 leading-relaxed">
                {featuredService.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-10">
                {/* Existing gardens */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold mb-5 flex items-center gap-2">
                    <featuredService.existing.icon className="w-5 h-5 text-[#e73c47]" />
                    {featuredService.existing.label}
                  </h4>
                  <ul className="space-y-3">
                    {featuredService.existing.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/85 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#e73c47] mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* New gardens */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold mb-5 flex items-center gap-2">
                    <featuredService.new.icon className="w-5 h-5 text-[#e73c47]" />
                    {featuredService.new.label}
                  </h4>
                  <ul className="space-y-3">
                    {featuredService.new.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/85 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#e73c47] mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Extra principles */}
              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {featuredService.extras.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm text-white/85 leading-relaxed bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#e73c47] mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-[#e73c47] hover:bg-[#c42835] text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200"
                >
                  Записаться на консультацию
                </a>
                <a
                  href="https://t.me/anna_suyazova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-[1.5px] border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-colors duration-200"
                >
                  Написать в Telegram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other services grid */}
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
