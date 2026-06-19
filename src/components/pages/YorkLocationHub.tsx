import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const locationGroups = [
  {
    id: 'west',
    title: 'West York Areas',
    locations: [
      { name: 'Acomb', postcode: 'YO24', slug: 'driving-lessons-acomb-york' },
      { name: 'Holgate', postcode: 'YO24', slug: 'driving-lessons-holgate-york' },
      { name: 'Foxwood', postcode: 'YO24', slug: 'driving-lessons-foxwood-york' },
      { name: 'Dringhouses', postcode: 'YO24', slug: 'driving-lessons-dringhouses-york' },
      { name: 'Woodthorpe', postcode: 'YO24', slug: 'driving-lessons-woodthorpe-york' },
    ]
  },
  {
    id: 'north',
    title: 'North York Areas',
    locations: [
      { name: 'Clifton', postcode: 'YO30', slug: 'driving-lessons-clifton-york' },
      { name: 'Rawcliffe', postcode: 'YO30', slug: 'driving-lessons-rawcliffe-york' },
      { name: 'Bootham', postcode: 'YO30', slug: 'driving-lessons-bootham-york' },
      { name: 'Haxby', postcode: 'YO32', slug: 'driving-lessons-haxby-york' },
      { name: 'Wigginton', postcode: 'YO32', slug: 'driving-lessons-wigginton-york' },
      { name: 'Huntington', postcode: 'YO32', slug: 'driving-lessons-huntington-york' },
      { name: 'Poppleton', postcode: 'YO26', slug: 'driving-lessons-poppleton-york' },
    ]
  },
  {
    id: 'east',
    title: 'East York Areas',
    locations: [
      { name: 'Heworth', postcode: 'YO31', slug: 'driving-lessons-heworth-york' },
      { name: 'Tang Hall', postcode: 'YO31', slug: 'driving-lessons-tang-hall-york' },
      { name: 'Osbaldwick', postcode: 'YO10', slug: 'driving-lessons-osbaldwick-york' },
      { name: 'Murton', postcode: 'YO19', slug: 'driving-lessons-murton-york' },
      { name: 'Layerthorpe', postcode: 'YO31', slug: 'driving-lessons-layerthorpe-york' },
    ]
  },
  {
    id: 'south',
    title: 'South York Areas',
    locations: [
      { name: 'Fulford', postcode: 'YO10', slug: 'driving-lessons-fulford-york' },
      { name: 'Bishopthorpe', postcode: 'YO23', slug: 'driving-lessons-bishopthorpe-york' },
      { name: 'Copmanthorpe', postcode: 'YO23', slug: 'driving-lessons-copmanthorpe-york' },
      { name: 'Heslington', postcode: 'YO10', slug: 'driving-lessons-heslington-york' },
      { name: 'Badger Hill', postcode: 'YO10', slug: 'driving-lessons-badger-hill-york' },
    ]
  },
  {
    id: 'central',
    title: 'Central York',
    locations: [
      { name: 'York City Centre', postcode: 'YO1', slug: 'driving-lessons-york-city-centre' },
    ]
  }
];

export default function YorkLocationHub() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGroups = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return locationGroups.map(group => ({
      ...group,
      locations: group.locations.filter(loc => 
        loc.name.toLowerCase().includes(query) || 
        loc.postcode.toLowerCase().includes(query)
      )
    })).filter(group => group.locations.length > 0);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-soft-bg font-sans selection:bg-primary-dark/10 selection:text-primary-dark">
      <Header />
      
      <main className="pt-24 pb-16 px-6 sm:px-10">
        <div className="max-w-[1440px] mx-auto">
          
          {/* HERO SECTION */}
          <section className="text-center mb-8 lg:mb-10">
            <h1 className="text-[2.2rem] sm:text-[3rem] lg:text-[3.5rem] font-black text-primary-text mb-3 leading-none tracking-tighter uppercase">
              DRIVING LESSONS ACROSS <span className="text-primary-dark opacity-40 italic font-extrabold">YORK</span>
            </h1>
            <p className="text-[1rem] sm:text-[1.1rem] text-secondary-text leading-relaxed max-w-[600px] mx-auto font-medium mb-1">
              Find your local York area and go straight to the correct driving lesson page.
            </p>
          </section>

          {/* SEARCH SECTION */}
          <section className="max-w-[550px] mx-auto mb-10 lg:mb-12">
            <div className="relative group">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none transition-colors duration-200 group-focus-within:text-primary-dark text-secondary-text/30">
                <Search size={20} strokeWidth={2.5} />
              </div>
              <input 
                type="text" 
                placeholder="Search York area or postcode..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-12 pr-6 bg-white border border-border-main/30 rounded-xl text-[1rem] font-bold text-primary-text placeholder:text-secondary-text/20 focus:outline-none focus:ring-4 focus:ring-primary-dark/5 focus:border-primary-dark/30 transition-all duration-300 shadow-sm"
              />
            </div>
          </section>

          {/* LOCATION GROUPS */}
          <div className="space-y-12 lg:space-y-16">
            <AnimatePresence mode="popLayout">
              {filteredGroups.map((group) => (
                <section key={group.id} id={group.id} className="scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-[0.75rem] font-black text-primary-text uppercase tracking-[0.2em] whitespace-nowrap bg-primary-dark/5 px-3 py-1 rounded-full">{group.title}</h2>
                    <div className="h-px bg-border-main/10 flex-grow"></div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4">
                    {group.locations.map((loc) => (
                      <motion.a
                        layout
                        key={loc.slug}
                        href={`/${loc.slug}`}
                        className="group block p-4 sm:p-5 bg-white border border-border-main/20 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-primary-dark/30 transition-all duration-200 no-underline relative overflow-hidden"
                      >
                        <div className="relative z-10 flex flex-col items-center text-center">
                          <span className="block text-[0.7rem] font-bold text-secondary-text/30 mb-1 group-hover:text-primary-dark/60 transition-colors duration-200 uppercase tracking-widest leading-none">
                            {loc.postcode}
                          </span>
                          <div className="text-[1.05rem] sm:text-[1.15rem] font-black text-primary-text leading-tight tracking-tight group-hover:text-primary-dark transition-colors duration-200 uppercase">
                            {loc.name}
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </section>
              ))}
            </AnimatePresence>

            {filteredGroups.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-secondary-text text-[1.1rem] font-medium opacity-60">
                  No areas found matching "{searchQuery}"
                </p>
              </motion.div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
