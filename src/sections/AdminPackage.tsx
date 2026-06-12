import { useState } from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { Send, ZoomIn } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';

const galleryItems = [
  { label: 'Главная: 3 ошибки администратора', image: '/skripty-prodazh-dlya-administratora-detskogo-sada.jpg' },
  { label: 'Ошибка №1: неверно обрабатываются заявки', image: '/oshibka-nevernye-zayavki-administratora.jpg' },
  { label: 'Ошибка №2: админ плохо знает продукт', image: '/oshibka-plokhoe-znanie-produkta.jpg' },
  { label: 'Ошибка №3: нет работы с возражениями', image: '/oshibka-net-raboty-s-vozrazheniyami.jpg' },
  { label: 'Инструмент — готовые скрипты продаж', image: '/instrument-gotovye-skripty-prodazh.jpg' },
  { label: 'Что входит в пакет документов', image: '/sostav-paketa-dokumentov-administratora.jpg' },
  { label: 'Заказать пакет документов', image: '/paket-dokumentov-dlya-administratora-zakazat.jpg' },
];

export function AdminPackage() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

        <div className="mt-10 max-w-3xl mx-auto">
          <p className="text-center text-lg text-[#60708c]">
            Скрипты продаж для администратора детского сада/центра — это готовые сценарии общения с родителями: ответы на вопросы о цене, запись на экскурсию, работа с возражениями и возврат клиента. Я собрала пакет всех документов, необходимых для системной и эффективной работы администратора. Каждый из них действует в моём детском саду.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-5 stagger-children">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="scroll-reveal w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
            >
              <button
                type="button"
                onClick={() => {
                  setActiveIndex(index);
                  setOpen(true);
                }}
                className="group w-full text-left rounded-2xl overflow-hidden bg-white border border-[#e8e0d8] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-[#e73c47] focus:ring-offset-2"
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      <ZoomIn className="w-6 h-6 text-[#e73c47]" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-[#172033] leading-snug">{item.label}</p>
                </div>
              </button>
            </div>
          ))}
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

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-2xl p-2 sm:p-4 bg-white border-none">
            <DialogTitle className="sr-only">
              {galleryItems[activeIndex]?.label}
            </DialogTitle>
            <img
              src={galleryItems[activeIndex]?.image}
              alt={galleryItems[activeIndex]?.label}
              className="w-full h-auto rounded-lg"
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
