import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  value: string;
  className?: string;
}

export function ContactLink({ href, icon: Icon, label, value, className }: ContactLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'flex items-center gap-4 group',
        className
      )}
    >
      <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-[#e73c47]" />
      </div>
      <div>
        <p className="text-xs text-white/50 uppercase tracking-wider">{label}</p>
        <p className="text-white font-medium group-hover:text-[#e73c47] transition-colors duration-200">{value}</p>
      </div>
    </a>
  );
}
