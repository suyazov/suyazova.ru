import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  className?: string;
}

export function ServiceCard({ icon: Icon, title, description, features, className }: ServiceCardProps) {
  return (
    <div className={cn(
      'group bg-[#fffaf7] border border-[#e8e0d8] rounded-2xl p-8',
      'transition-all duration-300 ease-out',
      'hover:-translate-y-1 hover:shadow-card',
      className
    )}>
      <div className="w-12 h-12 rounded-xl bg-[#fef2f2] flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-[#e73c47]" />
      </div>
      <h3 className="text-xl font-semibold text-[#172033] mb-3">{title}</h3>
      <p className="text-[15px] text-[#60708c] leading-relaxed mb-5">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[#60708c]">
            <svg className="w-4 h-4 text-[#e73c47] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
