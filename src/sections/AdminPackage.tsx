import { SectionHeader } from '@/components/SectionHeader';
import { Send } from 'lucide-react';

const galleryItems = [
  { label: 'Должностная инструкция администратора', image: '/admin-doc-1.jpg' },
  { label: 'Чек-листы работы по дням', image: '/admin-doc-2.jpg' },
  { label: 'Скрипты продаж', image: '/admin-doc-3.jpg' },
  { label: 'Документы для родителей', image: '/admin-doc-4.jpg' },
  { label: 'Финансовая модель', image: '/admin-doc-5.jpg' },
  { label: 'Привлечение клиентов', image: '/admin-doc-6.jpg' },
];

export function AdminPackage() {
  return (
    <section id="admin-package" className="bg-[#fffaf7] py-[clamp(60px,8vw,120px)]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="scroll-reveal">
          <SectionHeader
            label="СИСТЕМА ПРОДАЖ"
            title="Скрипты продаж для администратора"
            subtitle="Готовые сценарии общения с родителями: ответы на вопросы о цене, запись на экскурсию, работа с возражениями и возврат клиента"
          />
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <p className="text-center text-lg text-[#60708c] mb-8">
            Скрипты продаж для администратора детского сада/центра — это готовые сценарии общения с родителями: ответы на вопросы о цене, запись на экскурсию, работа с возражениями и возврат клиента.
          </p>
        </div>

        <div className="mt-10 relative">
          <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
            {galleryItems.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-64 scroll-reveal">
                <div className="bg-white border border-[#e8e0d8] rounded-2xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <p className="text-sm font-medium text-[#172033] text-center">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://t.me/anna_suyazova"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#e73c47] hover:bg-[#c42835] text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200"
          >
            <Send className="w-5 h-5" />
            Написать для покупки пакета
          </a>
        </div>
      </div>
    </section>
  );
}