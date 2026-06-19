import React from 'react';
import EnquiryForm from './EnquiryForm';
import FAQ from './FAQ';
import Header from './Header';
import Footer from './Footer';
import YorkAreaFinder from './YorkAreaFinder';
import RelatedArticles from './RelatedArticles';

interface Props {
  title: React.ReactNode;
  intro: string;
  children: React.ReactNode;
  faqs: { question: string; answer: string }[];
  faqBgClassName?: string;
  faqPaddingClassName?: string;
  faqHeaderMarginClassName?: string;
  faqTitle?: React.ReactNode;
  faqSubtitle?: string;
  hideFooterCta?: boolean;
  ctaText?: string;
  ctaItalic?: string;
  currentSlug?: string;
  relatedBgClassName?: string;
}

export default function ArticleLayout({
  title,
  intro,
  children,
  faqs,
  faqBgClassName = "bg-white",
  faqPaddingClassName = "py-24 lg:py-32",
  faqHeaderMarginClassName = "mb-16 lg:mb-20",
  faqTitle,
  faqSubtitle,
  hideFooterCta = false,
  ctaText,
  ctaItalic,
  currentSlug = '',
  relatedBgClassName = 'bg-soft-bg',
}: Props) {
  return (
    <div className="min-h-screen bg-soft-bg font-sans selection:bg-primary-dark/10 selection:text-primary-dark">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 px-4 sm:px-[5%] lg:px-[8%] bg-primary-dark overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[linear-gradient(135deg,transparent_0%,rgba(212,175,55,0.03)_100%)] pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-dark/40 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="text-[2.6rem] sm:text-[3.2rem] lg:text-[4.4rem] font-[900] text-white mb-5 leading-[0.95] tracking-tighter uppercase">
                {title}
              </h1>
              <p className="text-[1.1rem] sm:text-[1.25rem] text-hero-paragraph leading-relaxed mb-8 max-w-[580px] font-medium opacity-80 decoration-0">
                {intro}
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                <a href="#enquiry-form" className="bg-white text-primary-dark px-10 py-4 rounded-full text-[0.82rem] font-black uppercase tracking-widest no-underline transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-px">
                  Enquire Now
                </a>
                <a href="tel:+447763999317" className="bg-transparent text-white border-2 border-white/20 px-10 py-4 rounded-full text-[0.82rem] font-black uppercase tracking-widest no-underline transition-all duration-300 hover:border-white/80 hover:bg-white/5">
                  Call Now
                </a>
              </div>

              <div className="flex gap-x-6 gap-y-3 justify-center lg:justify-start items-center flex-wrap text-[0.72rem] font-black uppercase tracking-widest text-white/90">
                <div className="flex items-center gap-2">
                  <span className="text-[#F4B400] text-sm">⭐</span> 
                  <span>5-STAR GOOGLE REVIEWS</span>
                </div>
                <span className="hidden sm:inline opacity-30 font-light text-lg">|</span>
                <a 
                  href="https://uk.trustpilot.com/review/yorkdrivinglesson.co.uk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity no-underline text-white-text"
                >
                  <span className="text-[#00B67A] text-lg">★</span> 
                  <span>EXCELLENT ON TRUSTPILOT</span>
                </a>
              </div>
            </div>

            <div className="flex justify-center w-full lg:justify-end">
              <EnquiryForm />
            </div>
          </div>
        </section>

        {/* CONTENT AREA */}
        {children}

        {/* RELATED ARTICLES */}
        <RelatedArticles currentSlug={currentSlug} bgClassName={relatedBgClassName} />

        {/* FAQ SECTION */}
        <section className={`${faqBgClassName} ${faqPaddingClassName} px-6 sm:px-10 border-t border-border-main/30`} id="faq">
          <div className="max-w-[1000px] mx-auto">
            <div className={`text-center ${faqHeaderMarginClassName}`}>
              <h2 className="text-[2rem] md:text-[2.6rem] font-black text-[#1F2937] mb-4 tracking-tighter uppercase leading-none">
                {faqTitle || <>Common <span className="italic font-extrabold text-[#8E969D]">Questions.</span></>}
              </h2>
              <div className="w-16 h-1.5 bg-primary-dark/10 mb-6 mx-auto"></div>
              <p className="text-[#4B5563] text-[1.1rem] font-medium">
                {faqSubtitle || "Clear answers to help you prepare."}
              </p>
            </div>
            
            <div className="max-w-[800px] mx-auto">
              <FAQ items={faqs} />
            </div>
          </div>
        </section>

        {/* CTA BAR */}
        {ctaText && (
          <section className="bg-primary-dark border-t border-white/10 border-b border-b-white/5 py-6 lg:py-7 px-6 sm:px-10">
            <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
              <h2 className="text-[1.05rem] md:text-[1.2rem] font-black text-white leading-tight tracking-tighter uppercase text-center sm:text-left">
                {ctaText}{ctaItalic && <> <span className="italic font-extrabold text-white/40">{ctaItalic}</span></>}
              </h2>
              <div className="flex items-center gap-3 shrink-0">
                <a href="/york" className="bg-white text-primary-dark px-7 py-3 rounded-full text-[0.78rem] font-black uppercase tracking-widest no-underline transition-all duration-200 hover:-translate-y-px hover:shadow-lg">York</a>
                <a href="#enquiry-form" className="bg-transparent text-white border-2 border-white/25 px-7 py-3 rounded-full text-[0.78rem] font-black uppercase tracking-widest no-underline transition-all duration-200 hover:border-white/70 hover:bg-white/5">Enquire Today</a>
              </div>
            </div>
          </section>
        )}

        {/* CONTACT SECTION */}
        {!hideFooterCta && (
          <section className="bg-primary-dark py-24 lg:py-32 px-6 sm:px-10 relative overflow-hidden" id="enquiry">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2 pointer-events-none"></div>
            <div className="max-w-[1280px] mx-auto relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-[2.2rem] md:text-[3.2rem] font-black text-white mb-8 leading-[1.1] tracking-tighter uppercase">
                    Ready to start <span className="italic font-extrabold text-white/40">driving in York?</span>
                  </h2>
                  <p className="text-hero-paragraph text-[1.1rem] leading-relaxed mb-6 font-medium">
                    Whether you're a complete beginner or looking for a refresher, we're here to help you become a confident, safe driver.
                  </p>
                  <div className="flex flex-col gap-4 text-white/60 text-[0.95rem] font-medium">
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-dark/40"></span>
                      Patient, local York instructors
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-dark/40"></span>
                      Automatic & Manual vehicles
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-dark/40"></span>
                      Test-day preparation focus
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 sm:p-10 rounded-[32px] shadow-2xl">
                  <EnquiryForm />
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {!hideFooterCta && <YorkAreaFinder />}

      <Footer />
    </div>
  );
}
