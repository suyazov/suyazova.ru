export function Footer() {
  return (
    <footer className="bg-[#fffaf7] border-t border-[#e8e0d8]">
      <div className="max-w-[1200px] mx-auto px-5 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#60708c]">
          &copy; {new Date().getFullYear()} Анна Суязова. Все права защищены.
        </p>
        <div className="flex items-center gap-4 text-sm text-[#60708c]">
          <a
            href="https://t.me/anna_suyazova"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e73c47] transition-colors duration-200"
          >
            Telegram
          </a>
          <span className="text-[#e8e0d8]">•</span>
          <a
            href="https://wa.me/79614691333"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e73c47] transition-colors duration-200"
          >
            WhatsApp
          </a>
          <span className="text-[#e8e0d8]">•</span>
          <a
            href="https://www.instagram.com/annasuyazova"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e73c47] transition-colors duration-200"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
