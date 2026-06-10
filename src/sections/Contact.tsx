import { useState } from 'react';
import { Send, Phone } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { ContactLink } from '@/components/ContactLink';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    interest: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Заявка с сайта от ${formData.name}`;
    const body = `Имя: ${formData.name}\nТелефон: ${formData.phone}\nГород: ${formData.city}\nИнтересует: ${formData.interest}\nСообщение: ${formData.message}`;
    window.location.href = `mailto:anna.suyazova@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="bg-[#0d1b3e] py-[clamp(60px,8vw,120px)]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left column - info */}
          <div className="flex-1 scroll-reveal-left">
            <SectionHeader
              label="КОНТАКТЫ"
              title="Готовы обсудить вашу ситуацию?"
              subtitle="Напишите мне — мы обсудим ваши задачи и подберём оптимальный формат работы"
              light
              className="text-left lg:max-w-none lg:mx-0"
            />

            <div className="mt-10 space-y-6">
              <ContactLink
                href="https://t.me/anna_suyazova"
                icon={Send}
                label="Telegram"
                value="@anna_suyazova"
              />
              <ContactLink
                href="https://wa.me/79614691333"
                icon={Phone}
                label="WhatsApp"
                value="+7 (961) 469-13-33"
              />
            </div>
          </div>

          {/* Right column - form */}
          <div className="flex-1 scroll-reveal-right">
            <form
              onSubmit={handleSubmit}
              className="p-8 md:p-10 rounded-2xl border border-white/10"
              style={{ background: 'rgba(255, 255, 255, 0.05)' }}
            >
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/[0.08] border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-white/50 focus:outline-none focus:border-[#e73c47] transition-colors duration-200"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+7 (___) ___-__-__"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/[0.08] border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-white/50 focus:outline-none focus:border-[#e73c47] transition-colors duration-200"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="city"
                    placeholder="Ваш город"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-white/[0.08] border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-white/50 focus:outline-none focus:border-[#e73c47] transition-colors duration-200"
                  />
                </div>
                <div>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full bg-white/[0.08] border border-white/15 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#e73c47] transition-colors duration-200 appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
                  >
                    <option value="" className="bg-[#0d1b3e] text-white/50">Что интересует?</option>
                    <option value="consultation" className="bg-[#0d1b3e] text-white">Консультация</option>
                    <option value="crm" className="bg-[#0d1b3e] text-white">CRM</option>
                    <option value="finmodel" className="bg-[#0d1b3e] text-white">Финансовая модель</option>
                    <option value="marketing" className="bg-[#0d1b3e] text-white">Маркетинг</option>
                    <option value="premises" className="bg-[#0d1b3e] text-white">Проверка помещения</option>
                    <option value="other" className="bg-[#0d1b3e] text-white">Другое</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Расскажите о вашей ситуации"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/[0.08] border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-white/50 focus:outline-none focus:border-[#e73c47] transition-colors duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#e73c47] hover:bg-[#c42835] text-white font-semibold py-4 rounded-xl transition-colors duration-200"
                >
                  Отправить заявку
                </button>
              </div>
              <p className="mt-4 text-xs text-white/40 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
