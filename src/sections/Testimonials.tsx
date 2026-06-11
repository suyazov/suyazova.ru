import { SectionHeader } from '@/components/SectionHeader';
import { TestimonialCard } from '@/components/TestimonialCard';

const miniTestimonials = [
  {
    quote: 'У нас полный сад, а денег всё равно не хватает на зарплаты и аренду. Не понимаем, куда утекают деньги.',
    author: 'Марина',
    role: 'Владелец детского центра',
  },
  {
    quote: 'Открылись полгода назад, но заявок всё меньше. Нужна помощь с маркетингом и пониманием, что не так.',
    author: 'Ирина',
    role: 'Основатель частного сада',
  },
  {
    quote: 'Всё держится только на мне. Хочу выстроить систему, чтобы не работать в режиме выживания.',
    author: 'Ольга',
    role: 'Руководитель детского центра',
  },
  {
    quote: 'Консультация помогла понять, как перейти от центра к полноценному детскому саду. Теперь чётко знаем, какие шаги нужны.',
    author: 'Аноним',
    role: 'Владелец детского центра',
  },
];

const featuredQuote = `Анна, здравствуйте! К вам хочу на консультацию. Рассматриваю вариант открытия частного детского сада в нашем городе. Сейчас смотрю помещение и понимаю, что не уверена: подойдёт оно или нет. Плюс вообще нет чёткого понимания, как всё правильно выстроить на старте. Не хочется наделать ошибок и потом всё переделывать. Можно к вам на консультацию?`;

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#f5efe9] py-[clamp(60px,8vw,120px)]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="scroll-reveal">
          <SectionHeader
            label="ОБРАЩЕНИЯ"
            title="Что говорят владельцы детских садов"
            subtitle="Реальные сообщения от людей, которые приходят за помощью"
          />
        </div>

        {/* Featured testimonial with screenshot */}
        <div className="mt-12 scroll-reveal-scale">
          <TestimonialCard
            quote={featuredQuote}
            author="Екатерина, г. Ростов-на-Дону"
            role="Будущий владелец детского сада"
            screenshot="/testimonial-screenshot.jpg"
            featured
          />
        </div>

        {/* Mini testimonials */}
        <div className="mt-10 grid md:grid-cols-3 gap-6 stagger-children">
          {miniTestimonials.map((t, index) => (
            <div key={index} className="scroll-reveal">
              <TestimonialCard
                quote={t.quote}
                author={t.author}
                role={t.role}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
