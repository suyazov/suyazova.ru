import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export function SectionHeader({ label, title, subtitle, light = false, className }: SectionHeaderProps) {
  return (
    <div className={cn('text-center max-w-2xl mx-auto', className)}>
      <span className="text-xs font-semibold tracking-[0.08em] uppercase text-accent-brand">
        {label}
      </span>
      <h2 className={cn(
        'mt-4 text-[clamp(28px,3vw,40px)] font-bold leading-tight tracking-tight',
        light ? 'text-[#fffaf7]' : 'text-[#172033]'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'mt-4 text-lg leading-relaxed',
          light ? 'text-[#fffaf7]/70' : 'text-[#60708c]'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
