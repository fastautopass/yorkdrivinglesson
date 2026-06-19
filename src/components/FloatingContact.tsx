import React, { useState, useEffect } from 'react';
import { Phone, ClipboardList, Send, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FloatingContact = () => {
  const [dismissed, setDismissed] = useState({
    'floating-enquire-button': false,
    'floating-call-button': false,
    'floating-whatsapp-button': false
  });

  const [mounted, setMounted] = useState(false);

  const [barDismissed, setBarDismissed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dismiss = (type: 'floating-enquire-button' | 'floating-call-button' | 'floating-whatsapp-button') => {
    setDismissed(prev => ({ ...prev, [type]: true }));
  };

  const dismissBar = () => {
    setBarDismissed(true);
  };

  const handleEnquire = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const form = document.getElementById('enquiry-form');
    if (form) {
      e.preventDefault();
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  const buttons = [
    {
      id: 'floating-enquire-button' as const,
      label: 'ENQUIRE',
      icon: <ClipboardList className="w-4 h-4 md:w-5 md:h-5" />,
      color: 'bg-[#1E2A44]',
      hoverColor: 'hover:bg-[#162035]',
      href: '#enquiry-form',
      onClick: handleEnquire,
    },
    {
      id: 'floating-call-button' as const,
      label: 'CALL',
      icon: <Phone className="w-4 h-4 md:w-5 md:h-5" />,
      color: 'bg-[#2B2B2B]',
      hoverColor: 'hover:bg-[#1f1f1f]',
      href: 'tel:+447763999317',
    },
    {
      id: 'floating-whatsapp-button' as const,
      label: 'WHATSAPP',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.12.553 4.189 1.604 6.04L0 24l6.104-1.602a11.81 11.81 0 005.942 1.583h.005c6.635 0 12.031-5.394 12.034-12.031a11.815 11.815 0 00-3.534-8.528z" />
        </svg>
      ),
      color: 'bg-[#25D366]',
      hoverColor: 'hover:bg-[#1fb355]',
      href: 'https://wa.me/447763999317',
    },
  ];

  return (
    <>
      {/* Mobile Action Bar: Fixed to Bottom (Visible only on mobile) */}
      {!barDismissed && (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] md:hidden bg-white shadow-[0_-8px_30px_rgba(0,0,0,0.12)] border-t border-border-main/5 pointer-events-auto">
          {/* Close Button for Bar */}
          <button 
            type="button"
            onClick={dismissBar}
            aria-label="Dismiss mobile contact bar"
            className="absolute -top-3 right-4 w-7 h-7 bg-white border border-border-main/10 rounded-full shadow-lg flex items-center justify-center text-primary-text/40 active:text-red-500 z-10"
          >
            <X className="w-4 h-4" strokeWidth={3} />
          </button>

          <div className="grid grid-cols-3 h-[72px]">
            {buttons.map((btn) => (
              <a
                key={`mobile-${btn.id}`}
                href={btn.href}
                onClick={btn.onClick}
                target={btn.id === 'floating-whatsapp-button' ? "_blank" : undefined}
                rel={btn.id === 'floating-whatsapp-button' ? "noopener noreferrer" : undefined}
                className={`${btn.color} text-white flex flex-col items-center justify-center gap-1.5 no-underline active:opacity-90 transition-opacity`}
              >
                <div className="flex-shrink-0">
                  {btn.id === 'floating-whatsapp-button' ? (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.12.553 4.189 1.604 6.04L0 24l6.104-1.602a11.81 11.81 0 005.942 1.583h.005c6.635 0 12.031-5.394 12.034-12.031a11.815 11.815 0 00-3.534-8.528z" />
                    </svg>
                  ) : (
                    React.cloneElement(btn.icon as React.DetailedReactHTMLElement<any, HTMLElement>, { 
                      className: "w-5 h-5", 
                      strokeWidth: 2.5 
                    } as any)
                  )}
                </div>
                <span className="text-[0.62rem] font-black uppercase tracking-wider">{btn.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Floating stack: Only visible on md+ screens */}
      {!dismissed['floating-enquire-button'] || !dismissed['floating-call-button'] || !dismissed['floating-whatsapp-button'] ? (
        <div className="hidden md:flex fixed right-3 md:right-8 top-[72%] -translate-y-1/2 z-[9999] flex-col gap-2.5 md:gap-3 pointer-events-none">
          <AnimatePresence mode="popLayout">
            {buttons.map((btn) => !dismissed[btn.id] && (
              <motion.div
                key={btn.id}
                layout
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                className="relative pointer-events-auto flex justify-end group/item"
              >
                <a
                  href={btn.href}
                  onClick={btn.onClick}
                  target={btn.id === 'floating-whatsapp-button' ? "_blank" : undefined}
                  rel={btn.id === 'floating-whatsapp-button' ? "noopener noreferrer" : undefined}
                  className={`${btn.color} ${btn.hoverColor} text-white flex items-center justify-between gap-3 md:gap-4 px-4 py-2.5 md:px-6 md:py-3.5 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-[130px] md:w-[170px] no-underline group active:scale-95`}
                >
                  <span className="text-[0.65rem] md:text-[0.74rem] font-black uppercase tracking-[0.18em] leading-none">{btn.label}</span>
                  <div className="flex-shrink-0 opacity-90 group-hover:scale-110 transition-transform duration-300">
                    {btn.icon}
                  </div>
                </a>
                
                <button
                  type="button"
                  onClick={() => dismiss(btn.id)}
                  className="absolute -top-1.5 -left-1.5 w-4 h-4 md:w-5 md:h-5 bg-white border border-border-main/10 rounded-full shadow-sm flex items-center justify-center text-primary-text/30 hover:text-red-500 hover:scale-110 opacity-0 group-hover/item:opacity-100 transition-all duration-200 z-10 cursor-pointer"
                  aria-label={`Dismiss ${btn.label}`}
                  title={`Dismiss ${btn.label}`}
                >
                  <X className="w-2.5 h-2.5 md:w-3 md:h-3" strokeWidth={3} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : null}
    </>
  );
};

export default FloatingContact;
