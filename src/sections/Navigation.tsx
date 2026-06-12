import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollHeader } from '@/hooks/useScrollHeader';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#services', label: 'Услуги' },
  { href: '#team', label: 'Команда' },
  { href: '#about', label: 'Обо мне' },
  { href: '#testimonials', label: 'Отзывы' },
  { href: '#contact', label: 'Контакты' },
];

export function Navigation() {
  const scrolled = useScrollHeader(50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300',
          scrolled
            ? 'bg-[#fffaf7]/90 backdrop-blur-xl border-b border-[#e8e0d8]'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <div className="w-full max-w-[1200px] mx-auto px-5 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 text-base font-bold text-[#172033] hover:text-[#e73c47] transition-colors duration-200"
          >
            <img src="/logo.png" alt="Анна Суязова" className="w-8 h-8 object-contain" />
            <span>Анна Суязова</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-[#172033] hover:text-[#e73c47] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="https://t.me/anna_suyazova"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#e73c47] hover:bg-[#c42835] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
          >
            Написать в Telegram
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#172033]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden bg-[#0d1b3e]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-400',
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className="text-xl font-medium text-white hover:text-[#e73c47] transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://t.me/anna_suyazova"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-[#e73c47] hover:bg-[#c42835] text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200"
        >
          Написать в Telegram
        </a>
      </div>
    </>
  );
}
