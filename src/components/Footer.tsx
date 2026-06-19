import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-premium bg-primary-dark pt-16 pb-10 px-6 sm:px-10 font-sans border-t border-white/5">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 text-left">
        {/* Column 1: Brand */}
        <div>
          <div className="text-[1.3rem] font-black text-white-text mb-5 tracking-tighter uppercase">York Driving Lesson</div>
          <p className="leading-relaxed text-[0.92rem] text-white-text/60 font-medium mb-0">
            Calm, structured driving lessons across York designed to help learners build confidence on real local roads, roundabouts, junctions, and everyday driving situations.
          </p>
        </div>

        {/* Column 2: Driving Lessons */}
        <div>
          <div className="text-white-text text-[0.8rem] uppercase tracking-[0.2em] mb-6 font-black">Driving Lessons</div>
          <nav className="flex flex-col gap-3">
            <a href="/automatic-driving-lessons" className="text-white-text/50 no-underline text-[0.88rem] hover:text-white-text transition-colors font-bold">Automatic Lessons</a>
            <a href="/manual-driving-lessons" className="text-white-text/50 no-underline text-[0.88rem] hover:text-white-text transition-colors font-bold">Manual Lessons</a>
            <a href="/intensive-driving-courses" className="text-white-text/50 no-underline text-[0.88rem] hover:text-white-text transition-colors font-bold">Intensive Courses</a>
            <a href="/mock-driving-tests" className="text-white-text/50 no-underline text-[0.88rem] hover:text-white-text transition-colors font-bold">Mock Driving Tests</a>
            <a href="/refresher-lessons" className="text-white-text/50 no-underline text-[0.88rem] hover:text-white-text transition-colors font-bold">Refresher Lessons</a>
            <a href="/motorway-lessons" className="text-white-text/50 no-underline text-[0.88rem] hover:text-white-text transition-colors font-bold">Motorway Lessons</a>
            <a href="/pass-plus-course" className="text-white-text/50 no-underline text-[0.88rem] hover:text-white-text transition-colors font-bold">Pass Plus Course</a>
          </nav>
        </div>

        {/* Column 3: York Areas */}
        <div>
          <div className="text-white-text text-[0.8rem] uppercase tracking-[0.2em] mb-6 font-black">York Areas</div>
          <nav className="flex flex-col gap-3">
            <a href="/york" className="text-white-text/50 no-underline text-[0.88rem] hover:text-white-text transition-colors font-bold">York Location Hub</a>
            <a href="/driving-lessons-acomb-york" className="text-white-text/50 no-underline text-[0.88rem] hover:text-white-text transition-colors font-bold">Acomb</a>
            <a href="/driving-lessons-clifton-york" className="text-white-text/50 no-underline text-[0.88rem] hover:text-white-text transition-colors font-bold">Clifton</a>
            <a href="/driving-lessons-fulford-york" className="text-white-text/50 no-underline text-[0.88rem] hover:text-white-text transition-colors font-bold">Fulford</a>
            <a href="/driving-lessons-heworth-york" className="text-white-text/50 no-underline text-[0.88rem] hover:text-white-text transition-colors font-bold">Heworth</a>
            <a href="/york" className="text-white-text/30 no-underline text-[0.8rem] hover:text-white-text transition-colors font-black uppercase tracking-widest mt-1">View All York Areas →</a>
          </nav>
        </div>

        {/* Column 4: Contact */}
        <div>
          <div className="text-white-text text-[0.8rem] uppercase tracking-[0.2em] mb-6 font-black">Contact</div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <span className="text-white-text/30 text-[0.7rem] uppercase tracking-widest font-black">Call booking team</span>
              <a href="tel:+447763999317" className="text-white font-black text-[1.05rem] tracking-tight no-underline hover:text-white/80 transition-colors">07763 999317</a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white-text/30 text-[0.7rem] uppercase tracking-widest font-black">Email</span>
              <a href="mailto:support@yorkdrivinglesson.co.uk" className="text-white-text/60 hover:text-white no-underline text-[0.88rem] font-bold transition-colors">support@yorkdrivinglesson.co.uk</a>
            </div>
            <p className="text-white-text/40 text-[0.85rem] leading-relaxed font-medium">
              Or visit our <a href="/contact-us" className="text-white-text/60 hover:text-white underline decoration-white/20 transition-colors">Contact Us</a> page for more options.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1280px] mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[0.7rem] text-white-text/20 font-bold uppercase tracking-widest">
        <p>© 2026 York Driving Lesson. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <a href="/privacy-policy" className="hover:text-white-text transition-colors no-underline">Privacy Policy</a>
          <a href="/terms-and-conditions" className="hover:text-white-text transition-colors no-underline">Terms & Conditions</a>
          <a href="/cookie-policy" className="hover:text-white-text transition-colors no-underline">Cookie Policy</a>
          <a href="/sitemap" className="hover:text-white-text transition-colors no-underline">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
