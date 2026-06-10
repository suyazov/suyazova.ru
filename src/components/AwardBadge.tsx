import { Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AwardBadgeProps {
  title: string;
  year: string;
  className?: string;
}

export function AwardBadge({ title, year, className }: AwardBadgeProps) {
  return (
    <div className={cn(
      'flex items-center gap-3 bg-[#fef2f2] rounded-xl px-5 py-3',
      className
    )}>
      <Trophy className="w-5 h-5 text-[#e73c47] flex-shrink-0" />
      <div>
        <p className="text-sm font-medium text-[#172033]">{title}</p>
        <p className="text-xs text-[#60708c]">{year}</p>
      </div>
    </div>
  );
}
