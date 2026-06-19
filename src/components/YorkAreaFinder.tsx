import React from 'react';
import { useState } from 'react';
import { Search } from 'lucide-react';

export default function YorkAreaFinder() {
  const allLocations = [
    { name: "Acomb", path: "/driving-lessons-acomb-york", postcodes: ["yo24"] },
    { name: "Badger Hill", path: "/driving-lessons-badger-hill-york", postcodes: ["yo10"] },
    { name: "Bishopthorpe", path: "/driving-lessons-bishopthorpe-york", postcodes: ["yo23"] },
    { name: "Bootham", path: "/driving-lessons-bootham-york", postcodes: ["yo30", "yo31"] },
    { name: "Clifton", path: "/driving-lessons-clifton-york", postcodes: ["yo30"] },
    { name: "Copmanthorpe", path: "/driving-lessons-copmanthorpe-york", postcodes: ["yo23"] },
    { name: "Dringhouses", path: "/driving-lessons-dringhouses-york", postcodes: ["yo24"] },
    { name: "Foxwood", path: "/driving-lessons-foxwood-york", postcodes: ["yo24"] },
    { name: "Fulford", path: "/driving-lessons-fulford-york", postcodes: ["yo10"] },
    { name: "Haxby", path: "/driving-lessons-haxby-york", postcodes: ["yo32"] },
    { name: "Heslington", path: "/driving-lessons-heslington-york", postcodes: ["yo10"] },
    { name: "Heworth", path: "/driving-lessons-heworth-york", postcodes: ["yo31"] },
    { name: "Holgate", path: "/driving-lessons-holgate-york", postcodes: ["yo24"] },
    { name: "Huntington", path: "/driving-lessons-huntington-york", postcodes: ["yo32"] },
    { name: "Layerthorpe", path: "/driving-lessons-layerthorpe-york", postcodes: ["yo31"] },
    { name: "Murton", path: "/driving-lessons-murton-york", postcodes: ["yo19", "yo10"] },
    { name: "Osbaldwick", path: "/driving-lessons-osbaldwick-york", postcodes: ["yo10"] },
    { name: "Poppleton", path: "/driving-lessons-poppleton-york", postcodes: ["yo26"] },
    { name: "Rawcliffe", path: "/driving-lessons-rawcliffe-york", postcodes: ["yo30"] },
    { name: "Tang Hall", path: "/driving-lessons-tang-hall-york", postcodes: ["yo10", "yo31"] },
    { name: "Wigginton", path: "/driving-lessons-wigginton-york", postcodes: ["yo32"] },
    { name: "Woodthorpe", path: "/driving-lessons-woodthorpe-york", postcodes: ["yo24"] },
    { name: "York City Centre", path: "/driving-lessons-york-city-centre", postcodes: ["yo1"] }
  ];

  const featuredNames = ["Acomb", "Clifton", "Fulford", "Heworth", "Rawcliffe", "Tang Hall", "Haxby", "Huntington", "York City Centre", "Bishopthorpe"];
  const hubLocations = allLocations.filter(loc => featuredNames.includes(loc.name));

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLocations, setFilteredLocations] = useState(hubLocations);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase().trim();
    setSearchQuery(e.target.value);
    
    if (query === '') {
      setFilteredLocations(hubLocations);
    } else {
      const filtered = allLocations.filter(loc => 
        loc.name.toLowerCase().includes(query) || 
        loc.postcodes.some(pc => pc.includes(query) || query.includes(pc))
      );
      setFilteredLocations(filtered);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && filteredLocations.length > 0) {
      window.location.href = filteredLocations[0].path;
    }
  };

  return (
    <section className="bg-[#0f172a] pt-12 pb-10 lg:pt-14 lg:pb-12 px-6 sm:px-10 border-b border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-dark/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-[1000px] mx-auto text-center relative z-10">
        <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-white-text mb-4 tracking-tighter uppercase leading-[1.1]">
          FIND DRIVING LESSONS NEAR YOU IN <span className="text-white/30 italic font-extrabold">YORK</span>
        </h2>
        <p className="text-white-text/60 text-[0.95rem] md:text-[1rem] leading-relaxed max-w-[700px] mx-auto mb-8 font-medium">
          Find the York areas we cover for automatic and manual driving lessons, including local roads, residential routes, and nearby test-route areas.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-[540px] mx-auto mb-8 group">
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-white/40 transition-colors" />
            <input 
              type="text" 
              placeholder="Search your York area or postcode"
              aria-label="Search York area or postcode"
              value={searchQuery}
              onChange={handleSearch}
              onKeyDown={handleKeyDown}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4.5 pl-13 pr-6 text-white text-[0.95rem] focus:outline-none focus:border-white/20 focus:bg-white/[0.08] transition-all font-medium placeholder:text-white/20"
            />
          </div>
          
          {/* Search Recommendations / Info */}
          {searchQuery && filteredLocations.length === 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-[0.85rem] text-white/40 font-medium z-20">
              No local areas found for "{searchQuery}". Try searching for a major York area.
            </div>
          )}
        </div>

        {/* Location Chips */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {(searchQuery ? filteredLocations : hubLocations).map(loc => (
            <a 
              key={`area-${loc.name}-${loc.path}`}
              href={loc.path}
              className="bg-white/5 text-white/60 px-5 py-2.5 rounded-full text-[0.8rem] font-bold border border-white/5 hover:bg-white/10 hover:text-white hover:border-white/10 transition-all no-underline shadow-sm"
            >
              {loc.name}
            </a>
          ))}
        </div>

        <div className="pt-4">
          <a href="/york" className="group inline-flex items-center gap-2 text-[0.75rem] font-bold text-white/30 hover:text-white transition-colors no-underline uppercase tracking-widest">
            View all York areas <span className="text-[1rem] transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
