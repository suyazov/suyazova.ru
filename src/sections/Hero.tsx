import { CheckCircle2, Award, Building2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-[72px] overflow-hidden bg-[#fffaf7]">
      {/* Background decoration */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none animate-hero-bg-scale"
        style={{ background: 'radial-gradient(ellipse at center, rgba(231, 60, 71, 0.06) 0%, transparent 70%)' }}
      />

      <div className="w-full max-w-[1200px] mx-auto px-5 py-16 md:py-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Left column - content */}
          <div className="flex-1 md:max-w-[55%]">
            <span
              className="inline-block text-xs font-semibold tracking-[0.08em] uppercase text-[#e73c47] mb-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              КОНСУЛЬТАНТ ПО УПРАВЛЕНИЮ ДЕТСКИМИ САДАМИ
            </span>

            <h1
              className="text-[clamp(32px,4vw,56px)] font-extrabold leading-[1.1] tracking-tight text-[#172033] mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              Помогаю владельцам детских садов и центров выстроить систему управления и привлечь клиентов
            </h1>

            <p
              className="text-lg text-[#60708c] leading-relaxed mb-8 max-w-[540px] opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              10 лет опыта в управлении частными детскими садами. Консультации, внедрение CRM, финансовые модели и маркетинговая поддержка для вашего бизнеса.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 mb-10 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              <a
                href="https://t.me/anna_suyazova"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#e73c47] hover:bg-[#c42835] text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200"
              >
                Написать в Telegram
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 border-[1.5px] border-[#e73c47] text-[#e73c47] hover:border-[#c42835] hover:text-[#c42835] font-semibold px-8 py-4 rounded-full transition-colors duration-200"
              >
                Записаться на консультацию
              </a>
            </div>

            {/* Trust badges */}
            <div
              className="flex flex-wrap gap-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-2 text-sm text-[#60708c]">
                <CheckCircle2 className="w-5 h-5 text-[#e73c47]" />
                <span>10 лет опыта</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#60708c]">
                <Award className="w-5 h-5 text-[#e73c47]" />
                <span>3&times; Золотой Меркурий</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#60708c]">
                <Building2 className="w-5 h-5 text-[#e73c47]" />
                <span>Действующие сады</span>
              </div>
            </div>
          </div>

          {/* Right column - photo */}
          <div className="flex-1 md:max-w-[45%] relative">
            {/* Decorative blob behind photo */}
            <div
              className="absolute -bottom-6 -right-6 w-full h-full rounded-[20px] pointer-events-none animate-hero-bg-scale"
              style={{ background: 'rgba(231, 60, 71, 0.08)', animationDelay: '0s' }}
            />
            <div
              className="relative rounded-[20px] overflow-hidden opacity-0 animate-scale-in aspect-[853/1280]"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              <picture>
                <source srcSet="/anna-white-laptop.webp" type="image/webp" />
                <img
                  src="/anna-white-laptop.jpg"
                  alt="Анна Суязова — консультант по управлению детскими садами"
                  className="absolute inset-0 w-full h-full object-cover"
                  width="853"
                  height="1280"
                  loading="eager"
                  fetchPriority="high"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
