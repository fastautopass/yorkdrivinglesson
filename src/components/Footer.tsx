import React from 'react';
import { services, learnerHelp, articles, zones, areasInZone, PHONE, PHONE_HREF, EMAIL, ADDRESS, MAP_URL } from '../data/site';

const headCls = 'text-white-text text-[0.8rem] uppercase tracking-[0.2em] mb-6 font-black';
const linkCls = 'text-white-text/50 no-underline text-[0.88rem] hover:text-white-text transition-colors font-bold';
const moreCls = 'text-white-text/30 no-underline text-[0.8rem] hover:text-white-text transition-colors font-black uppercase tracking-widest mt-1';

export default function Footer() {
  return (
    <footer className="footer-premium bg-primary-dark pt-16 pb-10 px-6 sm:px-10 font-sans border-t border-white/5">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14 text-left">
        {/* Column 1: Brand + contact */}
        <div>
          <div className="text-[1.3rem] font-black text-white-text mb-5 tracking-tighter uppercase">York Driving Lesson</div>
          <p className="leading-relaxed text-[0.92rem] text-white-text/60 font-medium mb-6">
            Calm, structured driving lessons across York designed to help learners build confidence on real local roads, roundabouts, junctions, and everyday driving situations.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-white-text/30 text-[0.7rem] uppercase tracking-widest font-black">Call booking team</span>
              <a href={PHONE_HREF} className="text-white font-black text-[1.05rem] tracking-tight no-underline hover:text-white/80 transition-colors">{PHONE}</a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white-text/30 text-[0.7rem] uppercase tracking-widest font-black">Email</span>
              <a href={`mailto:${EMAIL}`} className="text-white-text/60 hover:text-white no-underline text-[0.88rem] font-bold transition-colors">{EMAIL}</a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white-text/30 text-[0.7rem] uppercase tracking-widest font-black">Address</span>
              <address className="not-italic text-white-text/60 text-[0.88rem] font-bold leading-relaxed">
                {ADDRESS.street}<br />{ADDRESS.locality}, {ADDRESS.postcode}
              </address>
              <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>View on Google Maps</a>
            </div>
            <a href="/about-us/" className={linkCls}>About Us</a>
            <a href="/contact-us/" className={linkCls}>Contact Us</a>
          </div>
        </div>

        {/* Column 2: Driving Lessons + Learner Help */}
        <div>
          <div className={headCls}>Driving Lessons</div>
          <nav className="flex flex-col gap-3 mb-8" aria-label="Driving lessons">
            {services.map((x) => <a key={x.path} href={x.path} className={linkCls}>{x.name}</a>)}
            <a href="/driving-lessons/" className={moreCls}>All Driving Lessons →</a>
          </nav>
          <div className={headCls}>Learner Help</div>
          <nav className="flex flex-col gap-3" aria-label="Learner help">
            {learnerHelp.map((x) => <a key={x.path} href={x.path} className={linkCls}>{x.name}</a>)}
            {articles.map((x) => <a key={x.path} href={x.path} className={linkCls}>{x.name}</a>)}
            <a href="/articles/" className={moreCls}>All Guides →</a>
          </nav>
        </div>

        {/* Columns 3-4: every York area, grouped by zone */}
        <div className="lg:col-span-2">
          <div className={headCls}>York Areas We Cover</div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-7">
            {zones.map((z) => (
              <nav key={z.id} aria-label={`${z.name} areas`} className="flex flex-col gap-2.5">
                <a href={z.path} className="text-white-text/80 no-underline text-[0.8rem] uppercase tracking-[0.12em] font-black hover:text-white transition-colors">{z.name}</a>
                {areasInZone(z.id).map((ar) => (
                  <a key={ar.path} href={ar.path} className={linkCls}>{ar.name}</a>
                ))}
              </nav>
            ))}
          </div>
          <a href="/york/" className={`${moreCls} inline-block mt-6`}>View All York Areas →</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1280px] mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[0.7rem] text-white-text/20 font-bold uppercase tracking-widest">
        <p>© 2026 York Driving Lesson. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <a href="/privacy-policy/" className="hover:text-white-text transition-colors no-underline">Privacy Policy</a>
          <a href="/terms-and-conditions/" className="hover:text-white-text transition-colors no-underline">Terms & Conditions</a>
          <a href="/cookie-policy/" className="hover:text-white-text transition-colors no-underline">Cookie Policy</a>
          <a href="/sitemap/" className="hover:text-white-text transition-colors no-underline">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
