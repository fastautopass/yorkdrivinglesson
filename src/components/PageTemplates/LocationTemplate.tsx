import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Map, Navigation, Clock, MapPin, Flag, Compass, MapPinned, School, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import EnquiryForm from '../EnquiryForm';
import FAQ from '../FAQ';
import Header from '../Header';
import Footer from '../Footer';
import RelatedLinks from '../RelatedLinks';
import LocalGuide from '../LocalGuide';
import { areas } from '../../data/site';

export interface LocationTemplateProps {
  locationName: string;
  postcode?: string;
  localitySlang: string;
  heroDescription: string;
  overviewP1: React.ReactNode;
  overviewP2: React.ReactNode;
  overviewP3: React.ReactNode;
  whyChooseItems: string[];
  confidenceP1: string;
  confidenceChallenge: string;
  roadsJunctionsItems: {
    icon: 'Map' | 'Navigation' | 'Clock';
    title: string;
    description: string;
    badge: string;
  }[];
  practiceRoutesItems: {
    icon: 'Compass' | 'MapPinned' | 'School';
    title: string;
    description: string;
  }[];
  intensiveP1: React.ReactNode;
  intensiveP2: React.ReactNode;
  intensiveFeatures: string[];
  mockTestP1: React.ReactNode;
  mockTestPoints: string[];
  nearbyAreas: string[];
  faqs: { question: string; answer: string }[];
  mapEmbedUrl: string;
}

import YorkAreaFinder from '../YorkAreaFinder';

export default function LocationTemplate(props: LocationTemplateProps) {
  const [currentPassIndex, setCurrentPassIndex] = useState(0);
  const [passOffset, setPassOffset] = useState(0);
  const passTrackRef = useRef<HTMLDivElement>(null);

  const recentPasses = Array.from({ length: 41 }, (_, i) => ({ id: i + 1, src: `/passes/thumbs/pass-${i + 1}.jpg` })).filter(p => p.id !== 4);

  const nextPass = () => {
    setCurrentPassIndex((prev) => (prev + 1) % recentPasses.length);
  };

  const prevPass = () => {
    setCurrentPassIndex((prev) => (prev - 1 + recentPasses.length) % recentPasses.length);
  };

  useEffect(() => {
    const calc = () => {
      if (!passTrackRef.current) return;
      const firstCard = passTrackRef.current.children[0] as HTMLElement;
      if (!firstCard) return;
      setPassOffset(-(currentPassIndex * (firstCard.offsetWidth + 24)));
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, [currentPassIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPassIndex((prev) => (prev + 1) % recentPasses.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [recentPasses.length]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Map': return <Map className="w-7 h-7 text-primary-dark" strokeWidth={2.5} />;
      case 'Navigation': return <Navigation className="w-7 h-7 text-primary-dark" strokeWidth={2.5} />;
      case 'Clock': return <Clock className="w-7 h-7 text-primary-dark" strokeWidth={2.5} />;
      case 'Compass': return <Compass className="w-8 h-8 text-primary-dark" strokeWidth={2.5} />;
      case 'MapPinned': return <MapPinned className="w-8 h-8 text-primary-dark" strokeWidth={2.5} />;
      case 'School': return <School className="w-8 h-8 text-primary-dark" strokeWidth={2.5} />;
      default: return null;
    }
  };

  const renderContent = (content: React.ReactNode) => {
    if (typeof content !== 'string') return content;
    return (
      <span dangerouslySetInnerHTML={{ 
        __html: content
          .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-primary-text">$1</strong>')
      }} />
    );
  };

  return (
    <div className="min-h-screen bg-soft-bg font-sans">
      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 px-4 sm:px-[5%] lg:px-[8%] bg-primary-dark overflow-hidden" id="home">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[linear-gradient(135deg,transparent_0%,rgba(212,175,55,0.03)_100%)] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-dark/40 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10 text-left">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-[2.6rem] sm:text-[3.2rem] lg:text-[4.4rem] font-[900] text-white mb-5 leading-[0.95] tracking-tighter uppercase">
              Driving Lessons in <span className="italic font-extrabold text-white/50">{props.locationName}</span>, York {props.postcode}
            </h1>
            <p className="text-[1.1rem] sm:text-[1.25rem] text-hero-paragraph leading-relaxed mb-8 max-w-[580px] font-medium opacity-80">
              {renderContent(props.heroDescription)}
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

      {/* SECTION 1: OVERVIEW */}
      <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 overflow-hidden text-primary-text">
        <div className="max-w-[1240px] mx-auto text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start md:items-center">
            <div className="lg:col-span-7">
              <h2 className="text-[1.6rem] md:text-[2.2rem] font-black text-primary-text mb-5 tracking-tighter uppercase leading-[1.1] text-left">
                Driving Lessons in {props.locationName}<br/>
                <span className="italic font-extrabold" style={{ color: '#8E969D' }}>Local York Knowledge That Builds Confidence</span>
              </h2>
              
              <div className="space-y-4 text-secondary-text text-[0.98rem] md:text-[1.05rem] leading-relaxed font-medium max-w-[640px] text-left">
                <p>{renderContent(props.overviewP1)}</p>
                <p>{renderContent(props.overviewP2)}</p>
                <p>{renderContent(props.overviewP3)}</p>
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="bg-soft-bg p-8 lg:p-10 rounded-[32px] border border-border-main/20 shadow-[0_10px_30px_rgba(0,0,0,0.015)] relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-dark/[0.02] rounded-full -mr-12 -mt-12"></div>
                <div className="text-[1.2rem] font-black text-primary-text mb-6 uppercase tracking-tighter leading-tight relative z-10 text-left">
                  Why Learners <br/>Choose Us in {props.locationName}
                </div>
                <div className="space-y-3.5 relative z-10 text-left">
                  {props.whyChooseItems.map((benefit, index) => (
                    <div key={`template-benefit-${index}`} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-dark/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark"></div>
                      </div>
                      <p className="text-secondary-text font-bold text-[0.88rem] leading-snug text-left">{renderContent(benefit)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocalGuide path={(areas.find((x) => x.name === props.locationName)?.path) ?? ''} />

      {/* SECTION: BUILDING CONFIDENCE */}
      <section className="bg-soft-bg py-10 lg:py-14 px-6 sm:px-10 border-y border-border-main/20">
        <div className="max-w-[940px] mx-auto text-left md:text-center">
          <h2 className="text-[1.6rem] md:text-[2rem] font-black text-primary-text mb-4 tracking-tighter uppercase leading-none text-left md:text-center">
            Building Confidence on <span className="italic font-extrabold" style={{ color: '#8E969D' }}>{props.localitySlang}</span>
          </h2>
          <div className="space-y-4 text-secondary-text text-[1rem] md:text-[1.05rem] leading-relaxed font-medium text-left">
            <p>{renderContent(props.confidenceP1)}</p>
            <p className="text-[0.95rem] font-medium text-primary-text/70 transition-colors">
              <span className="font-bold italic text-primary-text">The Challenge:</span> {renderContent(props.confidenceChallenge)}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: LOCAL ROADS & JUNCTIONS */}
      <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 overflow-hidden">
        <div className="max-w-[1040px] mx-auto text-left">
          <div className="text-center mb-10">
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-4 tracking-tighter uppercase leading-none">
              Local Roads & <span className="italic font-extrabold" style={{ color: '#8E969D' }}>Junction Practice</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {props.roadsJunctionsItems.map((item, index) => (
              <div key={`template-road-${index}`} className="group bg-soft-bg px-8 pt-9 pb-8 rounded-[32px] border border-border-main/20 shadow-sm hover:shadow-2xl hover:border-primary-dark/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full cursor-default text-left">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 border border-border-main/10 group-hover:bg-primary-dark/[0.04] transition-colors shadow-sm">
                  {getIcon(item.icon)}
                </div>
                <div className="text-[1rem] font-black text-primary-text mb-4 uppercase tracking-tight group-hover:text-primary-dark transition-colors">{renderContent(item.title)}</div>
                <p className="text-secondary-text text-[0.85rem] lg:text-[0.9rem] leading-relaxed font-medium mb-6 flex-grow">
                  {renderContent(item.description)}
                </p>
                <div className="pt-4 border-t border-border-main/20">
                  <span className="text-[0.68rem] font-black text-primary-text/85 uppercase tracking-[0.18em]">{renderContent(item.badge)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: PRACTICE ROUTES & LANDMARKS */}
      <section className="bg-soft-bg py-10 lg:py-14 px-6 sm:px-10 border-y border-border-main/20 overflow-hidden">
        <div className="max-w-[1040px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text tracking-tighter uppercase leading-none">
              {props.locationName} Practice Routes & <span className="italic font-extrabold" style={{ color: '#8E969D' }}>Local Landmarks</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {props.practiceRoutesItems.map((item, index) => (
              <div key={`template-route-${index}`} className="group bg-white px-8 pt-10 pb-10 rounded-[32px] border border-border-main/20 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-primary-dark/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full cursor-default items-center text-center">
                <div className="w-16 h-16 bg-soft-bg rounded-2xl flex items-center justify-center mb-8 border border-border-main/10 group-hover:bg-primary-dark/[0.05] transition-colors shadow-sm">
                  {getIcon(item.icon)}
                </div>
                <div className="text-[1.05rem] font-black text-primary-text mb-4 uppercase tracking-tight group-hover:text-primary-dark transition-colors">{renderContent(item.title)}</div>
                <p className="text-secondary-text text-[0.85rem] lg:text-[0.9rem] leading-relaxed font-medium flex-grow">
                  {renderContent(item.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PASSES SECTION */}
      <section className="bg-white py-10 lg:py-12 px-6 sm:px-10 overflow-hidden border-b border-border-main/10">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="mb-10">
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-3 tracking-tighter uppercase leading-none text-center">
              Recent Passes – <span className="italic font-extrabold" style={{ color: '#8E969D' }}>York</span>
            </h2>
            <p className="text-secondary-text text-[0.85rem] md:text-[0.92rem] leading-relaxed font-medium max-w-[600px] mx-auto text-center">
              Real learners. Real results. Recent driving test passes across York and surrounding areas.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute top-1/2 left-2 md:-left-12 -translate-y-1/2 z-20">
              <button
                type="button"
                onClick={prevPass}
                aria-label="Previous pass"
                className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-white border border-border-main/20 shadow-lg flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 right-2 md:-right-12 -translate-y-1/2 z-20">
              <button
                type="button"
                onClick={nextPass}
                aria-label="Next pass"
                className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-white border border-border-main/20 shadow-lg flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            <div className="flex overflow-hidden">
              <motion.div
                ref={passTrackRef}
                className="flex gap-6 w-full"
                animate={{ x: passOffset }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ width: '100%', display: 'flex' }}
              >
                {recentPasses.map((pass) => (
                  <div key={`template-pass-${pass.id}`} className="min-w-full md:min-w-[calc(33.333%-16px)] shrink-0">
                    <div className="aspect-[4/3.2] bg-soft-bg rounded-[32px] border border-border-main/10 overflow-hidden relative group/card shadow-sm hover:shadow-xl transition-all duration-500">
                      <img loading="lazy" decoding="async" width={360} height={480} src={pass.src} alt={`York driving test pass certificate ${pass.id} — York Driving Lesson`} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* INTENSIVE SECTION */}
      <section className="bg-primary-dark py-10 lg:py-14 px-6 sm:px-10 overflow-hidden relative border-b border-white/5 text-left">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,transparent_100%)] pointer-events-none"></div>
        <div className="max-w-[1100px] mx-auto relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-[1.8rem] md:text-[1.9rem] font-black text-white mb-6 tracking-tighter uppercase leading-none text-left">
                Intensive Courses & <span className="italic font-extrabold" style={{ color: '#8E969D' }}>Mock Driving Tests</span>
              </h2>
              <div className="w-16 h-1 bg-white/20 mb-6"></div>
              <div className="space-y-6 text-hero-paragraph/90 text-[0.98rem] md:text-[1.05rem] leading-relaxed font-medium text-left">
                <p>{renderContent(props.intensiveP1)}</p>
                <p>{renderContent(props.intensiveP2)}</p>
              </div>
            </div>

            <div className="bg-white/[0.03] backdrop-blur-sm px-8 py-10 rounded-[32px] border border-white/10 shadow-2xl relative overflow-hidden group text-left">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="text-[0.95rem] md:text-[1.02rem] font-black text-white mb-8 uppercase tracking-tighter leading-tight relative z-10 text-left">
                Why learners choose intensive<br/>lessons in {props.locationName}
              </div>
              <div className="space-y-3.5 relative z-10 text-left">
                {props.intensiveFeatures.map((item, index) => (
                  <div key={`template-intensive-feature-${index}`} className="flex items-center gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-white/70 font-bold text-[0.82rem] md:text-[0.85rem] uppercase tracking-wide leading-tight text-left">{renderContent(item)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOCK TEST SECTION */}
      <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 overflow-hidden border-b border-border-main/10 text-left">
        <div className="max-w-[1040px] mx-auto lg:px-24 text-left">
          <div className="max-w-[640px] text-left">
            <h2 className="text-[1.5rem] md:text-[1.8rem] font-black text-primary-text mb-4 tracking-tighter uppercase leading-none text-left">
              Mock Driving Tests & <span className="italic font-extrabold" style={{ color: '#8E969D' }}>Test Preparation</span> in {props.locationName}
            </h2>
            <div className="w-14 h-1 bg-primary-dark/10 mb-6"></div>
            <p className="text-secondary-text text-[0.9rem] md:text-[0.95rem] leading-relaxed font-medium mb-6 text-left">
              {renderContent(props.mockTestP1)}
            </p>
            <div className="flex flex-col gap-y-3 mb-8 text-left">
              {props.mockTestPoints.map((point, index) => (
                <div key={`template-mock-point-${index}`} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-soft-bg flex items-center justify-center shrink-0 border border-border-main/20">
                    <Check className="w-3 h-3 text-primary-dark" strokeWidth={3} />
                  </div>
                  <span className="text-[0.75rem] font-black text-primary-text uppercase tracking-wide leading-tight">{renderContent(point)}</span>
                </div>
              ))}
            </div>
            <a href="/mock-driving-tests/" className="inline-block bg-primary-dark text-white px-5 py-3 md:px-8 md:py-3.5 rounded-full text-[0.7rem] xs:text-[0.74rem] md:text-[0.78rem] font-black uppercase tracking-widest no-underline transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 whitespace-nowrap">
              Explore Mock Test Preparation
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="bg-soft-bg py-8 lg:py-12 px-6 sm:px-10 overflow-hidden border-b border-border-main/10">
        <div className="max-w-[1040px] mx-auto text-left md:text-center">
          <div className="text-left md:text-center mb-8">
            <h2 className="text-[1.8rem] md:text-[2rem] font-black text-primary-text mb-4 tracking-tighter uppercase leading-none text-left md:text-center">
              Trusted by <span className="italic font-extrabold" style={{ color: '#8E969D' }}>York Learners</span>
            </h2>
            <p className="text-secondary-text text-[0.85rem] md:text-[0.95rem] leading-relaxed font-medium max-w-[600px] mx-auto text-left md:text-center">
              Verified Google and Trustpilot reviews from learners who chose York Driving Lesson School.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="group bg-white p-6 lg:p-8 rounded-[32px] border border-border-main/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
               {/* SVG icons and review text same as Acomb */}
               <div className="mb-4 flex items-center justify-center">
                <svg viewBox="0 0 48 48" className="w-10 h-10">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24s.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
              </div>
              <div className="text-[0.9rem] font-black text-primary-text mb-3 uppercase tracking-tight">Google Reviews</div>
              <p className="text-secondary-text text-[0.82rem] lg:text-[0.88rem] leading-relaxed font-medium mb-6 flex-grow">
                Learners highlight their growth in confidence from first lessons through to mock test preparation, benefiting from our calm teaching and in-depth York road experience.
              </p>
              <a href="https://share.google/9B75eIsjdJNEb4cRC" target="_blank" rel="noopener noreferrer" className="w-full bg-soft-bg text-primary-text border border-border-main/20 py-2.5 rounded-xl text-[0.72rem] font-black uppercase tracking-[0.15em] transition-all hover:bg-primary-dark hover:text-white hover:border-primary-dark shadow-sm">View Google Reviews</a>
            </div>
            <div className="group bg-white p-6 lg:p-8 rounded-[32px] border border-border-main/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-4 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="w-10 h-10">
                  <path fill="#00b67a" d="M120 45.8L73.5 45.8 60 0 46.5 45.8 0 45.8 37.6 73.4 23.2 119.2 60 91.1 96.8 119.2 82.4 73.4 120 45.8z"/>
                </svg>
              </div>
              <div className="text-[0.9rem] font-black text-primary-text mb-3 uppercase tracking-tight">Trustpilot Reviews</div>
              <p className="text-secondary-text text-[0.82rem] lg:text-[0.88rem] leading-relaxed font-medium mb-6 flex-grow">
                Independent feedback reflects our supportive learning environment and structured approach to both automatic and manual lessons, built around real learner experiences across York.
              </p>
              <a href="https://uk.trustpilot.com/review/yorkdrivinglesson.co.uk" target="_blank" rel="noopener noreferrer" className="w-full bg-soft-bg text-primary-text border border-border-main/20 py-2.5 rounded-xl text-[0.72rem] font-black uppercase tracking-[0.15em] transition-all hover:bg-[#00b67a] hover:text-white hover:border-[#00b67a] shadow-sm">View Trustpilot Reviews</a>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="bg-white py-10 lg:py-12 px-6 sm:px-10 border-b border-border-main/10 text-left">
        <div className="max-w-[1040px] mx-auto text-left md:text-center">
          <h2 className="text-[1.8rem] md:text-[2.1rem] font-black text-primary-text mb-3 tracking-tighter uppercase leading-none text-left md:text-center">
            Driving Lessons Around <span className="italic font-extrabold" style={{ color: '#8E969D' }}>{props.locationName}, York</span>
          </h2>
          <p className="text-secondary-text text-[0.85rem] md:text-[0.95rem] leading-relaxed font-medium max-w-[600px] mx-auto mb-6 text-left md:text-center">
            Our driving lessons cover {props.locationName} and surrounding York areas with routes designed around real local driving conditions.
          </p>
          <div className="w-full h-[350px] md:h-[450px] bg-soft-bg rounded-[32px] border border-border-main/20 mb-6 overflow-hidden relative shadow-inner">
            <iframe title="Google Maps location" src={props.mapEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="grayscale-[0.1] contrast-[1.05] brightness-[1.02]"></iframe>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-soft-bg py-10 lg:py-14 px-6 sm:px-10 border-y border-border-main/10 text-left" id="faq">
        <div className="max-w-[1200px] mx-auto text-left">
          <div className="text-left md:text-center mb-10 lg:mb-12">
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-4 tracking-tighter uppercase leading-none text-left md:text-center">{props.locationName} Driving Lesson <span className="italic font-extrabold" style={{ color: '#8E969D' }}>FAQs</span></h2>
            <p className="text-secondary-text text-[0.9rem] md:text-[0.95rem] leading-relaxed font-medium max-w-[600px] mx-auto text-left md:text-center">Helpful answers for learners starting driving lessons in {props.locationName} and York.</p>
          </div>
          <FAQ items={props.faqs} />
        </div>
      </section>

      {/* NEARBY AREAS SECTION */}
      <section className="bg-white py-8 lg:py-10 px-6 sm:px-10 border-b border-border-main/10">
        <div className="max-w-[1040px] mx-auto text-center">
          <h2 className="text-[1.4rem] md:text-[1.6rem] font-black text-primary-text mb-2 tracking-tighter uppercase leading-none text-center">Nearby Areas <span className="italic font-extrabold" style={{ color: '#8E969D' }}>We Cover</span></h2>
          <div className="w-12 h-1 bg-primary-dark/10 mb-6 mx-auto text-center"></div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {props.nearbyAreas.map((area, index) => {
              const slug = area.toLowerCase().replace(/\s+/g, '-');
              const href = `/driving-lessons-${slug}${slug.includes('york') ? '' : '-york'}/`;
              return (
                <a 
                  key={`template-nearby-${index}`} 
                  href={href}
                  className="px-5 py-2 bg-white border border-border-main/20 rounded-full text-[0.7rem] md:text-[0.75rem] font-black text-primary-text uppercase tracking-[0.12em] transition-all duration-300 hover:border-primary-dark/30 hover:bg-soft-bg/50 hover:shadow-sm cursor-pointer select-none no-underline"
                >
                  {area}
                </a>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* CTA BAR */}
      <section className="bg-primary-dark border-t border-white/10 border-b border-b-white/5 py-6 lg:py-7 px-6 sm:px-10">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <h2 className="text-[1.05rem] md:text-[1.2rem] font-black text-white leading-tight tracking-tighter uppercase text-center sm:text-left">
            Start Your Driving Journey <span className="italic font-extrabold text-white/40">in {props.locationName}.</span>
          </h2>
          <div className="flex items-center gap-3 shrink-0">
            <a href="/york/" className="bg-white text-primary-dark px-7 py-3 rounded-full text-[0.78rem] font-black uppercase tracking-widest no-underline transition-all duration-200 hover:-translate-y-px hover:shadow-lg">
              York
            </a>
            <a href="#enquiry-form" className="bg-transparent text-white border-2 border-white/25 px-7 py-3 rounded-full text-[0.78rem] font-black uppercase tracking-widest no-underline transition-all duration-200 hover:border-white/70 hover:bg-white/5">
              Enquire Today
            </a>
          </div>
        </div>
      </section>

      <YorkAreaFinder />

      <RelatedLinks path={(areas.find((x) => x.name === props.locationName)?.path) ?? '/york/'} kind="area" />
      <Footer />
    </div>
  );
}
