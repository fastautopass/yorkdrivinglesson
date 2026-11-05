import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { services, learnerHelp, articles, zones } from '../data/site';

const navItems: { name: string; url?: string; dropdown?: { name: string; url: string }[] }[] = [
  { name: 'Home', url: '/' },
  {
    name: 'Driving Lessons',
    dropdown: [
      { name: 'All Driving Lessons', url: '/driving-lessons/' },
      ...services.map((x) => ({ name: x.name, url: x.path })),
    ]
  },
  {
    name: 'Learner Help',
    dropdown: [
      { name: 'All Learner Help', url: '/articles/' },
      ...learnerHelp.map((x) => ({ name: x.name, url: x.path })),
      ...articles.map((x) => ({ name: x.name, url: x.path })),
    ]
  },
  {
    name: 'York Areas',
    dropdown: [
      { name: 'All York Areas', url: '/york/' },
      ...zones.map((z) => ({ name: `${z.name} Areas`, url: z.path })),
    ]
  },
  { name: 'Contact Us', url: '/contact-us/' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-1' : 'bg-white/90 backdrop-blur-md py-2'} border-b border-border-main/10`}>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 flex justify-between items-center h-14">
        <a href="/" className="text-[1.1rem] sm:text-[1.2rem] font-black tracking-[-0.04em] uppercase no-underline text-primary-text flex items-center shrink-0">
          York Driving Lesson
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-1 xl:gap-2 list-none m-0 p-0">
            {navItems.map((item) => (
              <li 
                key={`header-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`} 
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <button 
                    type="button"
                    aria-label={`Toggle ${item.name} dropdown`}
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup="true"
                    className="flex items-center gap-1 px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.1em] text-primary-text hover:text-primary-dark transition-colors outline-none cursor-pointer"
                  >
                    {item.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <a 
                    href={item.url} 
                    className="block px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.1em] text-primary-text hover:text-primary-dark transition-colors no-underline"
                  >
                    {item.name}
                  </a>
                )}

                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-0 w-64 bg-white border border-border-main/20 rounded-2xl shadow-xl py-4 z-50 overflow-hidden"
                      >
                        {item.dropdown.map((subItem) => (
                          <a 
                            key={`header-sub-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                            href={subItem.url}
                            className="block px-6 py-2.5 text-[0.8rem] font-bold text-secondary-text hover:text-primary-dark hover:bg-soft-bg/50 transition-all no-underline"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Phone */}
        <a
          href="tel:+447763999317"
          className="hidden lg:flex items-center gap-2 bg-primary-dark text-white px-4 py-2 rounded-xl text-[0.72rem] font-black uppercase tracking-[0.12em] no-underline hover:bg-secondary-dark transition-colors shrink-0"
        >
          <Phone className="w-3.5 h-3.5" />
          07763 999317
        </a>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="lg:hidden p-2 text-primary-text hover:text-primary-dark transition-colors outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border-main/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={`mobile-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex flex-col">
                  {item.dropdown ? (
                    <>
                      <button 
                        type="button"
                        aria-expanded={activeDropdown === item.name}
                        aria-label={`Toggle ${item.name} sub-menu`}
                        className="flex justify-between items-center py-4 text-[0.85rem] font-black uppercase tracking-widest text-primary-text outline-none text-left"
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col gap-2 ml-4 mb-4"
                          >
                            {item.dropdown.map((subItem) => (
                              <a 
                                key={`mobile-sub-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                href={subItem.url}
                                className="py-2.5 text-[0.9rem] font-bold text-secondary-text hover:text-primary-dark no-underline"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a 
                      href={item.url} 
                      className="py-4 text-[0.85rem] font-black uppercase tracking-widest text-primary-text no-underline"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
