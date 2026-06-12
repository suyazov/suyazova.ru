import { cn } from '@/lib/utils';
import { webpUrl } from '@/lib/webpUrl';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  screenshot?: string;
  featured?: boolean;
  className?: string;
}

export function TestimonialCard({ quote, author, role, screenshot, featured = false, className }: TestimonialCardProps) {
  if (featured) {
    return (
      <div className={cn(
        'bg-[#fffaf7] border border-[#e8e0d8] rounded-2xl p-8 max-w-[640px] mx-auto',
        className
      )}>
        {screenshot && (
          <div className="mb-6 rounded-xl overflow-hidden border border-[#e8e0d8]">
            <picture>
              <source srcSet={webpUrl(screenshot)} type="image/webp" />
              <img
                src={screenshot}
                alt={`Сообщение от ${author}`}
                className="w-full h-auto object-contain"
              />
            </picture>
          </div>
        )}
        <blockquote className="text-[#60708c] italic leading-relaxed mb-5">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div>
          <p className="font-semibold text-[#172033] text-sm">{author}</p>
          <p className="text-[#60708c] text-[13px]">{role}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      'bg-[#fffaf7] border border-[#e8e0d8] rounded-2xl p-6',
      'transition-all duration-300 hover:-translate-y-1 hover:shadow-card',
      className
    )}>
      <blockquote className="text-[#60708c] italic text-sm leading-relaxed mb-4">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div>
        <p className="font-semibold text-[#172033] text-sm">{author}</p>
        <p className="text-[#60708c] text-[13px]">{role}</p>
      </div>
    </div>
  );
}
