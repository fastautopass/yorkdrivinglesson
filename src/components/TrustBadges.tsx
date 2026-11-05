import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star } from 'lucide-react';

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-3.5 md:h-3.5 flex-shrink-0">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const TrustpilotLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-3.5 md:h-3.5 flex-shrink-0" fill="white">
    <path d="M24 9.3l-9.1-.1L12 0 9.1 9.2 0 9.3l7.4 5.3-2.8 9.1 7.4-5.4 7.4 5.4-2.8-9.1L24 9.3z"/>
  </svg>
);

export default function TrustBadges() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setVisible(false);
  };

  if (!mounted || !visible) return null;

  const cardClasses = "pointer-events-auto relative flex items-center gap-2 bg-white px-2 py-1.5 md:px-2.5 md:py-1.5 rounded-lg md:rounded-lg shadow-md md:shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100 group cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5 min-w-[115px] md:min-w-0 md:w-[135px] h-auto md:h-[46px]";
  const closeButtonClasses = "absolute -top-1.5 -right-1.5 w-4 h-4 md:w-4.5 md:h-4.5 bg-white border border-border-main/10 rounded-full shadow-sm flex items-center justify-center text-primary-text/30 hover:text-red-500 hover:scale-110 hidden md:flex md:opacity-0 md:group-hover:opacity-100 transition-all duration-200 z-10 cursor-pointer";

  return (
    <div className="fixed bottom-[85px] md:bottom-auto md:top-[72%] md:-translate-y-1/2 left-0 right-0 md:left-6 lg:left-12 md:right-auto z-[9998] flex flex-col md:flex-col items-center md:items-start gap-2 md:gap-3 px-4 md:px-0 pointer-events-none w-full md:w-auto overflow-visible">

      <div className="relative flex flex-row md:flex-col items-center md:items-start gap-2.5 md:gap-3">
        {/* Mobile-only single X to dismiss both */}
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss trust badges"
          className="md:hidden pointer-events-auto absolute -top-2 -right-2 z-20 w-5 h-5 bg-white border border-border-main/10 rounded-full shadow-sm flex items-center justify-center text-primary-text/40 hover:text-red-500 transition-colors"
        >
          <X className="w-2.5 h-2.5" strokeWidth={3} />
        </button>
      <motion.div
        key="google-review-badge"
        initial={{ opacity: 0, scale: 0.9, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        className={cardClasses}
        onClick={() => {
          window.open("https://share.google/9B75eIsjdJNEb4cRC", "_blank", "noopener,noreferrer");
        }}
      >
        <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 md:w-5.5 md:h-5.5">
          <GoogleLogo />
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={`google-star-${i + 1}`} className="w-2 md:w-2 h-2 md:h-2 fill-[#FBBC05] text-[#FBBC05]" />
            ))}
          </div>
          <span className="text-[0.6rem] md:text-[0.62rem] font-black text-slate-800 tracking-tight leading-none uppercase">
            5★ Google
          </span>
        </div>
        <button 
          type="button"
          onClick={dismiss} 
          className={closeButtonClasses}
          aria-label="Dismiss Google trust badge"
          title="Dismiss trust badges"
        >
          <X className="w-2.5 h-2.5 md:w-2.2 md:h-2.2" strokeWidth={3} />
        </button>
      </motion.div>

      <motion.div
        key="trustpilot-review-badge"
        initial={{ opacity: 0, scale: 0.9, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        className={cardClasses}
        onClick={() => {
          window.open("https://uk.trustpilot.com/review/yorkdrivinglesson.co.uk", "_blank", "noopener,noreferrer");
        }}
      >
        <div className="bg-[#00b67a] rounded-md flex-shrink-0 flex items-center justify-center w-6 h-6 md:w-5.5 md:h-5.5">
          <TrustpilotLogo />
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={`trustpilot-star-${i + 1}`} className="w-2 md:w-2 h-2 md:h-2 fill-[#00b67a] text-[#00b67a]" />
            ))}
          </div>
          <span className="text-[0.6rem] md:text-[0.62rem] font-black text-slate-800 tracking-tight leading-none uppercase">
            5★ Trustpilot
          </span>
        </div>
        <button 
          type="button"
          onClick={dismiss} 
          className={closeButtonClasses}
          aria-label="Dismiss Trustpilot trust badge"
          title="Dismiss trust badges"
        >
          <X className="w-2.5 h-2.5 md:w-2.2 md:h-2.2" strokeWidth={3} />
        </button>
      </motion.div>
      </div>
    </div>
  );
}
