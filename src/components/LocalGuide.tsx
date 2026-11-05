import React from 'react';
import { areaGuides } from '../data/areaGuides';

/** Area-specific roads and landmarks, so each area page carries text no other page has. */
export default function LocalGuide({ path }: { path: string }) {
  const g = areaGuides[path];
  if (!g) return null;
  return (
    <section className="bg-white py-10 lg:py-14 px-6 sm:px-10 border-t border-border-main/10" aria-labelledby="local-guide-heading">
      <div className="max-w-[940px] mx-auto text-left">
        <h2 id="local-guide-heading" className="text-[1.6rem] md:text-[2rem] font-black text-primary-text mb-4 tracking-tighter uppercase leading-none">
          {g.area} roads <span className="italic font-extrabold" style={{ color: '#8E969D' }}>at a glance</span>
        </h2>
        <p className="text-secondary-text text-[1rem] md:text-[1.05rem] leading-relaxed font-medium mb-5">{g.guide}</p>
        {g.facts.length > 0 && (
          <ul className="list-none m-0 p-0 grid sm:grid-cols-2 gap-x-8 gap-y-2">
            {g.facts.map((f) => (
              <li key={f} className="text-[0.9rem] text-primary-text font-bold leading-snug pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary-dark/40">{f}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
