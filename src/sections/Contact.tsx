import { useState, useRef, useEffect } from 'react';
import { Send, Phone, ExternalLink } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { ContactLink } from '@/components/ContactLink';

import { ruCities } from '@/data/russianCities';

type Mask = Awaited<ReturnType<typeof import('imask')['default']>>;

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    interest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [filteredCities, setFilteredCities] = useState<string[]>([]);
  const phoneRef = useRef<HTMLInputElement>(null);
  const maskRef = useRef<Mask | null>(null);

  useEffect(() => {
    if (phoneRef.current) {
      let destroyed = false;
      import('imask').then(({ default: IMask }) => {
        if (destroyed || !phoneRef.current) return;
        maskRef.current = IMask(phoneRef.current, {
          mask: '+7 (000) 000-00-00',
        });
      });
      return () => {
        destroyed = true;
        maskRef.current?.destroy();
      };
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const phoneValue = maskRef.current?.value || formData.phone;
    setIsSubmitting(true);

    try {
      const response = await fetch('/send-lead.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          name: formData.name,
          phone: phoneValue,
          city: formData.city,
          interest: formData.interest,
          message: formData.message,
          website: '',
        }).toString(),
      });

      const result = await response.text();

      if (result === 'success') {
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', city: '', interest: '', message: '' });
        if (maskRef.current) maskRef.current.value = '+7 (___) ___-__-__';
      } else if (result === 'rate_limited') {
        alert('Слишком много запросов. Попробуйте позже.');
      } else {
        alert('Ошибка отправки. Попробуйте ещё раз.');
      }
    } catch {
      alert('Ошибка соединения. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, city: value }));
    setFilteredCities(
      value.length < 2
        ? []
        : ruCities.filter(c => c.toLowerCase().includes(value.toLowerCase())).slice(0, 10)
    );
  };

  const selectCity = (city: string) => {
    setFormData(prev => ({ ...prev, city }));
    setFilteredCities([]);
    setShowCityDropdown(false);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="bg-[#0d1b3e] py-[clamp(60px,8vw,120px)]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center revealed">
            <SectionHeader
              label="СПАСИБО!"
              title="Заявка отправлена"
              subtitle="Я свяжусь с вами в ближайшее время. А пока — подпишитесь на мои каналы"
              light
            />

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/suyazovaa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#e73c47] hover:bg-[#c42835] text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
              >
                <Send className="w-5 h-5" />
                Канал @suyazovaa
              </a>
              <a
                href="https://max.ru/join/ztz-wH7eN8noF7sbsNFmW9qSG_lJuh2i0rYbAVlksKg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
              >
                <ExternalLink className="w-5 h-5" />
                Я в Максе
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-[#0d1b3e] py-[clamp(60px,8vw,120px)]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 scroll-reveal-left">
            <SectionHeader
              label="КОНТАКТЫ"
              title="Готовы обсудить вашу ситуацию?"
              subtitle="Напишите мне — мы обсудим ваши задачи и подберём оптимальный формат работы"
              light
              className="text-left lg:max-w-none lg:mx-0"
            />

            <div className="mt-10 space-y-6">
              <ContactLink href="https://t.me/anna_suyazova" icon={Send} label="Telegram" value="@anna_suyazova" />
              <ContactLink href="https://wa.me/79614691333" icon={Phone} label="WhatsApp" value="+7 (961) 469-13-33" />
            </div>

            <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
              <p className="text-sm text-white/80 mb-4">
                Подпишитесь на мои каналы — там я делюсь инсайтами по управлению детскими садами:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://t.me/suyazovaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#e73c47] hover:bg-[#c42835] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <Send className="w-4 h-4" />
                  Канал @suyazovaa
                </a>
                <a
                  href="https://max.ru/join/ztz-wH7eN8noF7sbsNFmW9qSG_lJuh2i0rYbAVlksKg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  Я в Максе
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 scroll-reveal-right">
            <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-2xl border border-white/10" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
              <div className="space-y-4">
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
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
                    ref={phoneRef}
                    type="tel"
                    name="phone"
                    placeholder="+7 (___) ___-__-__"
                    required
                    defaultValue=""
                    className="w-full bg-white/[0.08] border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-white/50 focus:outline-none focus:border-[#e73c47] transition-colors duration-200"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="city"
                    placeholder="Ваш город"
                    value={formData.city}
                    onChange={handleCityChange}
                    onFocus={() => setShowCityDropdown(true)}
                    onBlur={() => setTimeout(() => setShowCityDropdown(false), 200)}
                    className="w-full bg-white/[0.08] border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-white/50 focus:outline-none focus:border-[#e73c47] transition-colors duration-200"
                  />
                  {showCityDropdown && filteredCities.length > 0 && (
                    <ul className="absolute z-10 mt-1 w-full bg-[#0d1b3e] border border-white/15 rounded-xl max-h-48 overflow-y-auto">
                      {filteredCities.map(city => (
                        <li key={city} className="px-4 py-2 text-white hover:bg-[#e73c47] cursor-pointer" onMouseDown={() => selectCity(city)}>
                          {city}
                        </li>
                      ))}
                    </ul>
                  )}
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
                    <option value="Консультация" className="bg-[#0d1b3e] text-white">Консультация</option>
                    <option value="CRM" className="bg-[#0d1b3e] text-white">CRM</option>
                    <option value="Финансовая модель" className="bg-[#0d1b3e] text-white">Финансовая модель</option>
                    <option value="Маркетинг" className="bg-[#0d1b3e] text-white">Маркетинг</option>
                    <option value="Проверка помещения" className="bg-[#0d1b3e] text-white">Проверка помещения</option>
                    <option value="Другое" className="bg-[#0d1b3e] text-white">Другое</option>
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
                <button type="submit" disabled={isSubmitting} className="w-full bg-[#e73c47] hover:bg-[#c42835] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-colors duration-200">
                  {isSubmitting ? 'Отправляю...' : 'Отправить заявку'}
                </button>
              </div>
              <p className="mt-4 text-xs text-white/40 text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}