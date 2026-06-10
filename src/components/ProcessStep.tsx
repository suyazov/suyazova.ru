interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export function ProcessStep({ number, title, description, isLast = false }: ProcessStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center flex-1">
      {/* Connector line - desktop only */}
      {!isLast && (
        <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] right-[calc(-50%+24px)] h-[1px] bg-[#e8e0d8]" />
      )}

      <div className="w-12 h-12 rounded-full bg-[#e73c47] flex items-center justify-center text-white text-lg font-bold mb-5 relative z-10 scroll-reveal">
        {number}
      </div>
      <h3 className="text-lg font-semibold text-[#172033] mb-2 scroll-reveal">{title}</h3>
      <p className="text-sm text-[#60708c] leading-relaxed max-w-[220px] scroll-reveal">{description}</p>
    </div>
  );
}
