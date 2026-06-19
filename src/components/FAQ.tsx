import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQ({ items, className }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`max-w-[850px] w-full space-y-2 ${className || 'mx-auto'}`}>
      {items.map((item, index) => (
        <div 
          key={`faq-${index}-${item.question.slice(0, 20)}`} 
          className={`bg-soft-bg rounded-[20px] overflow-hidden border transition-all duration-300 ${openIndex === index ? 'shadow-xl shadow-primary-dark/5 border-primary-dark/15' : 'border-border-main/30 hover:border-border-main/60'}`}
        >
          <button 
            type="button"
            aria-expanded={openIndex === index}
            aria-controls={`faq-content-${index}`}
            id={`faq-button-${index}`}
            className={`w-full text-left p-3.5 sm:p-4.5 flex justify-between items-center group focus:outline-none`}
            onClick={() => toggle(index)}
          >
            <span className={`text-[0.9rem] md:text-[0.95rem] font-[900] transition-colors duration-300 tracking-tight uppercase leading-snug ${openIndex === index ? 'text-primary-dark' : 'text-primary-text'}`}>
              {item.question}
            </span>
            <div className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 ml-4 transition-all duration-300 ${openIndex === index ? 'bg-primary-dark border-primary-dark rotate-45' : 'border-border-main/50 group-hover:border-primary-dark'}`}>
              <span className={`text-[1.2rem] leading-none ${openIndex === index ? 'text-white' : 'text-primary-text/20 group-hover:text-primary-dark'}`}>+</span>
            </div>
          </button>
          <div 
            id={`faq-content-${index}`}
            role="region"
            aria-labelledby={`faq-button-${index}`}
            className={`transition-all duration-300 ease-in-out px-4 sm:px-5 ${openIndex === index ? 'max-h-[500px] pb-4 opacity-100' : 'max-h-0 pb-0 opacity-0 overflow-hidden'}`}
          >
            <div className={`text-[0.92rem] text-secondary-text leading-relaxed font-medium markdown-body`}>
              <div dangerouslySetInnerHTML={{ 
                __html: item.answer
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-primary-text">$1</strong>')
                  .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary-dark font-black underline decoration-primary-dark/20 hover:decoration-primary-dark transition-all">$1</a>') 
              }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
