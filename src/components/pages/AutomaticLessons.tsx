import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Flag, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import EnquiryForm from '../EnquiryForm';
import FAQ from '../FAQ';
import YorkAreaFinder from '../YorkAreaFinder';

export default function AutomaticLessons() {
  const [currentPassIndex, setCurrentPassIndex] = useState(0);
  const [passOffset, setPassOffset] = useState(0);
  const passTrackRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  const recentPasses = Array.from({ length: 41 }, (_, i) => ({ id: i + 1, src: `/passes/pass-${i + 1}.jpg` })).filter(p => p.id !== 4);

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

  const faqs = [
    { 
      question: "Do you offer automatic driving lessons in York?", 
      answer: "Yes, we provide automatic driving lessons across all areas of York. Our driving instructor in York is local, patient, and DVSA approved — giving you the best start on the roads, whether you're in Acomb, Fulford, or the city centre."
    },
    { 
      question: "Why is automatic often better for nervous learners?", 
      answer: "For many nervous learners, the biggest stress of driving is the gear coordination. Automatic cars remove that entire layer of complexity, leaving you with more mental energy to focus on hazard awareness, which naturally builds beginner driver confidence much faster."
    },
    { 
      question: "How much do automatic driving lessons cost in York?", 
      answer: "We keep our automatic driving tuition prices fair and competitive. For current hourly rates and block booking discounts, please send us an enquiry above; we typically reply within two hours with availability."
    },
    { 
      question: "How many lessons will I actually need to pass?", 
      answer: "Every learner is different, but the goal is to get you to a <b>test-ready driving</b> standard safely. While the DVSA average is 45 hours, our structured approach often helps <a href='/intensive-driving-courses' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>intensive driving</a> students progress quickly. We provide honest feedback after every session." 
    },
    { 
      question: "Can I start from scratch as a complete beginner?", 
      answer: "Absolutely. Most of our beginner drivers have never sat in the driver's seat before. We start in very quiet residential areas where you can learn basic vehicle control without any pressure from traffic."
    },
    { 
      question: "What areas of York do you cover?", 
      answer: "We cover the majority of the city. You can view our full coverage on the <a href='/york' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>York Locations Hub</a>, including Acomb, Heworth, Fulford, Clifton, and Huntington. We can usually pick you up from home, work, or college." 
    },
    { 
      question: "Do you offer refresher lessons for automatic drivers?", 
      answer: "Yes, we do. Our <a href='/refresher-lessons' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>refresher lessons</a> are perfect if you've had a long break or have just moved to York and want to get used to local roundabouts and busy junctions in an automatic car." 
    },
    { 
      question: "Will we practise on real York test routes?",
      answer: "Yes. As you become more <a href='/mock-driving-tests' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>test-ready</a>, we'll spend time on real <a href='/articles/york-driving-test-routes-common-mistakes' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>DVSA test routes</a>. This helps you become familiar with the specific junctions you'll encounter at the <a href='/monks-cross-driving-test-centre' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>York Test Centre</a>."
    },
    { 
      question: "Is learning in York's traffic harder in an automatic?", 
      answer: "Actually, it's easier. York's inner ring road can be busy, but in an automatic, you don't worry about constant gear changes in stop-start traffic. This is especially helpful for <a href='/motorway-lessons' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>motorway-style driving</a> preparation and busy city junctions like Gillygate." 
    },
    { 
      question: "Are automatic driving lessons easier than manual?", 
      answer: "Generally, yes. Most people pick up the basics quicker without a clutch. If you're undecided, read our <a href='/articles/automatic-vs-manual-driving-lessons-york' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>automatic vs manual guide</a>. Remember, passing in an automatic means your licence is restricted to automatics."
    },
    { 
      question: "What should I expect on my first lesson?", 
      answer: "Your first lesson is about comfort. We'll introduce you to our driving school vehicle, explain the simple controls, and get you moving in a quiet spot. It's calm, supportive, and focused on building your confidence from day one."
    },
    { 
      question: "Can I take my test in an automatic car?", 
      answer: "Yes. You'll take the same <b>practical driving test</b> as manual learners, using our modern, dual-controlled automatic car. We recommend a few <a href='/mock-driving-tests' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>mock driving tests</a> first so you go in with total composure."
    }
  ];

  return (
    <div className="min-h-screen bg-soft-bg font-sans">
      <style>{`
        .feature-item-path {
          stroke-dasharray: 152;
          stroke-dashoffset: 152;
          transition: stroke-dashoffset 0.45s cubic-bezier(0.4, 0, 0.2, 1);
          fill: none;
        }
        .group:hover .feature-item-path {
          stroke-dashoffset: 0;
        }
        .red-feature-item-path {
          stroke-dasharray: 152;
          stroke-dashoffset: 152;
          transition: stroke-dashoffset 0.45s cubic-bezier(0.4, 0, 0.2, 1);
          fill: none;
        }
        .group:hover .red-feature-item-path {
          stroke-dashoffset: 0;
        }
        .feature-item-heading {
          transition: color 0.15s ease;
        }
        .group:hover .feature-item-heading {
          color: #2F6BFF !important;
        }
        .group:hover .red-feature-item-heading {
          color: #D32F2F !important;
        }
      `}</style>
      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 px-4 sm:px-8 lg:px-12 bg-primary-dark overflow-hidden" id="home">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[linear-gradient(135deg,transparent_0%,rgba(212,175,55,0.03)_100%)] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-dark/40 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-[2.6rem] sm:text-[3.2rem] lg:text-[4.4rem] font-[900] text-white mb-6 leading-[0.95] tracking-tighter uppercase">
              Automatic <span className="italic font-extrabold text-white/50">Driving</span> Lessons in York
            </h1>
            <p className="text-[1.1rem] sm:text-[1.25rem] text-hero-paragraph leading-relaxed mb-10 max-w-[580px] font-medium opacity-80">
              Forget the gears — just focus on driving. Our automatic lessons in York are great if you're just starting out, have been putting it off, or simply find automatic easier. No clutch, no stress.
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
              <a href="https://uk.trustpilot.com/review/yorkdrivinglesson.co.uk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity no-underline text-white">
                <span className="text-[#00B67A] text-lg">★</span>
                <span>EXCELLENT ON TRUSTPILOT</span>
              </a>
            </div>
          </div>

          <div className="flex justify-center w-full lg:justify-end">
            <div id="enquiry-form" className="w-full max-w-[540px] relative z-10">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* NEW: STRUCTURED DVSA TRAINING SECTION */}
      <section className="bg-soft-bg py-8 lg:py-12 px-6 sm:px-10 border-b border-border-main/10 shadow-[inset_0_4px_12px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1150px] mx-auto text-center">
          <h2 className="text-[1.2rem] md:text-[1.6rem] font-black text-primary-text mb-4 tracking-[0.16em] uppercase leading-none">
            How Automatic Driving Lessons <span className="italic font-extrabold text-primary-text/40">Work in York</span>
          </h2>
          <div className="w-16 h-1 bg-primary-dark/10 mb-8 mx-auto"></div>
          <div className="space-y-8">
            <p className="text-secondary-text text-[1.05rem] md:text-[1.1rem] leading-[1.8] font-medium max-w-[90%] mx-auto">
              Our <span className="font-bold text-primary-text uppercase tracking-tighter">DVSA</span>-approved automatic driving instructors in York work at your pace and focus on what you find difficult. We work with nervous learners regularly, keeping lessons calm and building confidence on York's roads gradually.
            </p>
            <p className="text-secondary-text text-[1.05rem] md:text-[1.1rem] leading-[1.8] font-medium max-w-[90%] mx-auto">
              By eliminating the complexity of gear changes, our local driving school in York allows you to progress faster and focus entirely on the road ahead. We prepare students for practical driving test success, from quiet residential streets to busy inner-city junctions, and our <a href="/york" className="font-bold text-primary-text hover:underline underline-offset-4 decoration-primary-dark/30 transition-all">York Locations Hub</a> covers routes and areas across the city.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHY LEARN AUTOMATIC */}
      <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 border-b border-border-main/5" id="overview">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="text-[2rem] md:text-[2.4rem] font-black text-[#1F2937] mb-3 leading-[1.1] tracking-tighter uppercase">
              Automatic Lessons <span className="italic font-extrabold text-primary-text/30">Without The Stress.</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4"></div>
            <p className="text-[#4B5563] text-[1.05rem] leading-relaxed font-medium">
              Learning to drive shouldn't feel like a battle with a machine. Automatic driving tuition removes the stress of clutch control, letting you focus on becoming a safe, confident driver. If you're comparing your options, read our <a href="/articles/automatic-vs-manual-driving-lessons-york" className="font-bold text-primary-text hover:underline underline-offset-4 decoration-primary-dark/30 transition-all">automatic vs manual</a> guide to see why many <span className="text-primary-text font-bold uppercase tracking-widest text-[0.8rem]">York learners</span> prefer this route.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
              <filter id="roughness-filter">
                <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="1" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </svg>
            <div className="relative p-8 pt-10 pb-10 pl-10 group cursor-default">
              <svg className="absolute top-0 left-0 w-24 h-24 pointer-events-none" viewBox="0 0 100 100" fill="none">
                <path d="M 4 80 V 4 H 80" stroke="#BFC5CE" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
                <path className="feature-item-path" d="M 4 80 V 4 H 80" stroke="#2F6BFF" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
              </svg>
              <svg className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none rotate-180" viewBox="0 0 100 100" fill="none">
                <path d="M 4 80 V 4 H 80" stroke="#BFC5CE" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
                <path className="feature-item-path" d="M 4 80 V 4 H 80" stroke="#2F6BFF" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
              </svg>
              <div className="text-[1.1rem] font-bold text-[#1F2937] mb-3 tracking-tight uppercase feature-item-heading">No stalling</div>
              <p className="text-[#4B5563] text-[0.92rem] leading-relaxed font-medium">Forget the panic of finding the bite point at York's busy junctions. Just press and go.</p>
            </div>
            <div className="relative p-8 pt-10 pb-10 pl-10 group cursor-default">
              <svg className="absolute top-0 left-0 w-24 h-24 pointer-events-none" viewBox="0 0 100 100" fill="none">
                <path d="M 4 80 V 4 H 80" stroke="#BFC5CE" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
                <path className="feature-item-path" d="M 4 80 V 4 H 80" stroke="#2F6BFF" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
              </svg>
              <svg className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none rotate-180" viewBox="0 0 100 100" fill="none">
                <path d="M 4 80 V 4 H 80" stroke="#BFC5CE" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
                <path className="feature-item-path" d="M 4 80 V 4 H 80" stroke="#2F6BFF" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
              </svg>
              <div className="text-[1.1rem] font-bold text-[#1F2937] mb-3 tracking-tight uppercase feature-item-heading">More focus</div>
              <p className="text-[#4B5563] text-[0.92rem] leading-relaxed font-medium">Without gear sticks to worry about, your eyes stay on the road and your mind stays focused.</p>
            </div>
            <div className="relative p-8 pt-10 pb-10 pl-10 group cursor-default">
              <svg className="absolute top-0 left-0 w-24 h-24 pointer-events-none" viewBox="0 0 100 100" fill="none">
                <path d="M 4 80 V 4 H 80" stroke="#BFC5CE" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
                <path className="feature-item-path" d="M 4 80 V 4 H 80" stroke="#2F6BFF" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
              </svg>
              <svg className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none rotate-180" viewBox="0 0 100 100" fill="none">
                <path d="M 4 80 V 4 H 80" stroke="#BFC5CE" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
                <path className="feature-item-path" d="M 4 80 V 4 H 80" stroke="#2F6BFF" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
              </svg>
              <div className="text-[1.1rem] font-bold text-[#1F2937] mb-3 tracking-tight uppercase feature-item-heading">Smoother drive</div>
              <p className="text-[#4B5563] text-[0.92rem] leading-relaxed font-medium">Navigating the inner ring road becomes much more natural when the car handles the shifts.</p>
            </div>
            <div className="relative p-8 pt-10 pb-10 pl-10 group cursor-default">
              <svg className="absolute top-0 left-0 w-24 h-24 pointer-events-none" viewBox="0 0 100 100" fill="none">
                <path d="M 4 80 V 4 H 80" stroke="#BFC5CE" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
                <path className="feature-item-path" d="M 4 80 V 4 H 80" stroke="#2F6BFF" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
              </svg>
              <svg className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none rotate-180" viewBox="0 0 100 100" fill="none">
                <path d="M 4 80 V 4 H 80" stroke="#BFC5CE" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
                <path className="feature-item-path" d="M 4 80 V 4 H 80" stroke="#2F6BFF" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
              </svg>
              <div className="text-[1.1rem] font-bold text-[#1F2937] mb-3 tracking-tight uppercase feature-item-heading">Calm learning</div>
              <p className="text-[#4B5563] text-[0.92rem] leading-relaxed font-medium">Spend your time learning how to drive, not how to use a gearbox. It's progression without frustration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: TRUSTED BY YORK LEARNERS (REVIEWS) */}
      <section className="bg-soft-bg py-8 lg:py-12 px-6 sm:px-10 overflow-hidden border-b border-border-main/10">
        <div className="max-w-[1040px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-[1.8rem] md:text-[2rem] font-black text-primary-text mb-4 tracking-tighter uppercase leading-none">
              Trusted by <span className="italic font-extrabold" style={{ color: '#8E969D' }}>York Learners</span>
            </h2>
            <p className="text-secondary-text text-[0.85rem] md:text-[0.95rem] leading-relaxed font-medium max-w-[600px] mx-auto">
              Verified Google and Trustpilot reviews from learners who chose York Driving Lesson School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Google Reviews Card */}
            <div className="group bg-white p-6 lg:p-8 rounded-[32px] border border-border-main/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
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
              <a 
                href="https://www.google.com/search?q=York+Driving+Lesson+School+reviews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-soft-bg text-primary-text border border-border-main/20 py-2.5 rounded-xl text-[0.72rem] font-black uppercase tracking-[0.15em] transition-all hover:bg-primary-dark hover:text-white hover:border-primary-dark shadow-sm"
              >
                View Google Reviews
              </a>
            </div>

            {/* Trustpilot Reviews Card */}
            <div className="group bg-white p-6 lg:p-8 rounded-[32px] border border-border-main/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-4 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="w-10 h-10">
                  <path fill="#00b67a" d="M120 45.8L73.5 45.8 60 0 46.5 45.8 0 45.8 37.6 73.4 23.2 119.2 60 91.1 96.8 119.2 82.4 73.4 120 45.8z"/>
                </svg>
              </div>
              <div className="text-[0.9rem] font-black text-primary-text mb-3 uppercase tracking-tight">Trustpilot Reviews</div>
              <p className="text-secondary-text text-[0.82rem] lg:text-[0.88rem] leading-relaxed font-medium mb-6 flex-grow">
                Reviews from learners who took automatic and manual driving lessons in York.
              </p>
              <a 
                href="https://uk.trustpilot.com/review/yorkdrivinglesson.co.uk" 
                target="_blank"  
                rel="noopener noreferrer"
                className="w-full bg-soft-bg text-primary-text border border-border-main/20 py-2.5 rounded-xl text-[0.72rem] font-black uppercase tracking-[0.15em] transition-all hover:bg-[#00b67a] hover:text-white hover:border-[#00b67a] shadow-sm"
              >
                View Trustpilot Reviews
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: RECENT PASSES – YORK */}
      <section className="bg-white py-10 lg:py-14 px-6 sm:px-10 overflow-hidden border-b border-border-main/10">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="mb-10">
            <h2 className="text-[1.8rem] md:text-[2rem] font-black text-primary-text mb-3 tracking-tighter uppercase leading-none">
              Recent Passes – <span className="italic font-extrabold" style={{ color: '#8E969D' }}>York</span>
            </h2>
            <p className="text-secondary-text text-[0.85rem] md:text-[0.92rem] leading-relaxed font-medium max-w-[600px] mx-auto">
              Real <b>learner driver support</b> results. Recent <strong>practical driving test</strong> passes across York and surrounding areas.
            </p>
          </div>

          <div className="relative group">
            {/* Navigation Handles */}
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

            {/* Carousel Container */}
            <div className="flex overflow-hidden">
              <motion.div
                ref={passTrackRef}
                className="flex gap-6 w-full"
                animate={{ x: passOffset }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ 
                  width: '100%',
                  display: 'flex',
                  touchAction: 'pan-y'
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_e, info) => {
                  if (info.offset.x > 50) prevPass();
                  else if (info.offset.x < -50) nextPass();
                }}
              >
                {recentPasses.map((pass) => (
                  <div 
                    key={`auto-pass-${pass.id}`}
                    className="min-w-full md:min-w-[calc(33.333%-16px)] shrink-0"
                  >
                    <div className="aspect-[4/3.2] bg-soft-bg rounded-[32px] border border-border-main/10 overflow-hidden relative group/card shadow-sm hover:shadow-xl transition-all duration-500">
                      <img src={pass.src} alt="York driving test pass" className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Mobile Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6 md:hidden">
              {recentPasses.map((pass, i) => (
                <button 
                  type="button"
                  key={`auto-pass-dot-${pass.id}`}
                  onClick={() => setCurrentPassIndex(i)}
                  aria-label={`Go to pass ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPassIndex === i ? 'bg-primary-dark w-4' : 'bg-primary-dark/20'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEWLY REDESIGNED: WHY LEARNERS CHOOSE US */}
      <section className="bg-soft-bg/30 py-8 lg:py-12 px-6 sm:px-10 border-y border-border-main/10 shadow-[inset_0_-4px_12px_rgba(0,0,0,0.01)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[1040px] mb-8">
            <h2 className="text-[1.8rem] md:text-[2.4rem] font-black text-[#1F2937] mb-2 leading-none tracking-tighter uppercase">
              Why York Learners <span className="italic font-extrabold text-primary-text/30">Choose Automatic.</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4"></div>
            <p className="text-secondary-text text-[1.05rem] leading-relaxed font-medium">
              We provide automatic driving tuition in York. Our approach is built around <span className="text-primary-text font-bold">beginner drivers</span> and nervous learners, so you develop test-ready habits that stay with you long after the test.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-8 bg-white border border-border-main/30 rounded-2xl transition-all duration-300 hover:border-primary-dark/20 hover:shadow-lg hover:shadow-primary-dark/5">
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase">Client-Centred Learning</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">Our lessons are adapted around your confidence, pace, and goals while strictly following DVSA-aligned teaching methods.</p>
            </div>

            <div className="p-8 bg-white border border-border-main/30 rounded-2xl transition-all duration-300 hover:border-primary-dark/20 hover:shadow-lg hover:shadow-primary-dark/5">
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase">Confidence Building</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">We break every skill down into manageable steps so you always feel comfortable and never overwhelmed behind the wheel.</p>
            </div>

            <div className="p-8 bg-white border border-border-main/30 rounded-2xl transition-all duration-300 hover:border-primary-dark/20 hover:shadow-lg hover:shadow-primary-dark/5">
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase">Local Knowledge</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">Benefit from deep understanding of York's roads, from quiet beginner spots to complex busy junctions, roundabouts, and test routes.</p>
            </div>

            <div className="p-8 bg-white border border-border-main/30 rounded-2xl transition-all duration-300 hover:border-primary-dark/20 hover:shadow-lg hover:shadow-primary-dark/5">
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase">High-Risk Areas</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">We prepare you for difficult roads and challenging junctions in York where learners are often caught out, building advanced road awareness.</p>
            </div>

            <div className="p-8 bg-white border border-border-main/30 rounded-2xl transition-all duration-300 hover:border-primary-dark/20 hover:shadow-lg hover:shadow-primary-dark/5">
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase">Calm Automatic Lessons</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">Experience stress-free learning without the worry of clutch control or gears, allowing you to focus 100% on safety and surroundings.</p>
            </div>

            <div className="p-8 bg-white border border-border-main/30 rounded-2xl transition-all duration-300 hover:border-primary-dark/20 hover:shadow-lg hover:shadow-primary-dark/5">
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase">Faster Skill Progression</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">Our structured, client-focused approach helps you build confidence and develop essential driving skills much more efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: WHO ARE AUTOMATIC DRIVING LESSONS IDEAL FOR? */}
      <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 border-b border-border-main/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[1020px] mx-auto mb-8 lg:mb-10">
            <h2 className="text-[2rem] md:text-[2.4rem] font-black text-[#1F2937] mb-2 leading-none tracking-tighter uppercase">
              Who Are Automatic Driving Lessons <span className="italic font-extrabold text-primary-text/30">Ideal For?</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[1.05rem] leading-relaxed font-medium mx-auto max-w-[1000px]">
              Our automatic driving lessons in York are designed for learners who want a calmer, more focused way to build confidence. By removing the complexity of clutch control, you can concentrate fully on hazard perception and safe decision-making from your very first lesson.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="relative p-8 pt-10 pb-10 pl-10 group cursor-default">
              <svg className="absolute top-0 left-0 w-24 h-24 pointer-events-none" viewBox="0 0 100 100" fill="none">
                <path d="M 4 80 V 4 H 80" stroke="#BFC5CE" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
                <path className="feature-item-path" d="M 4 80 V 4 H 80" stroke="#2F6BFF" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
              </svg>
              <svg className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none rotate-180" viewBox="0 0 100 100" fill="none">
                <path d="M 4 80 V 4 H 80" stroke="#BFC5CE" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
                <path className="feature-item-path" d="M 4 80 V 4 H 80" stroke="#2F6BFF" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
              </svg>
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase feature-item-heading">Nervous or Anxious Learners</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">Automatic lessons remove the added pressure of managing gears, helping nervous learners feel calmer and more in control behind the wheel.</p>
            </div>
 
            <div className="relative p-8 pt-10 pb-10 pl-10 group cursor-default">
              <svg className="absolute top-0 left-0 w-24 h-24 pointer-events-none" viewBox="0 0 100 100" fill="none">
                <path d="M 4 80 V 4 H 80" stroke="#BFC5CE" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
                <path className="feature-item-path" d="M 4 80 V 4 H 80" stroke="#2F6BFF" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
              </svg>
              <svg className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none rotate-180" viewBox="0 0 100 100" fill="none">
                <path d="M 4 80 V 4 H 80" stroke="#BFC5CE" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
                <path className="feature-item-path" d="M 4 80 V 4 H 80" stroke="#2F6BFF" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
              </svg>
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase feature-item-heading">First-Time Drivers</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">If you’ve never driven before, learning in an automatic car allows you to focus on steering, awareness, and road positioning without feeling overwhelmed.</p>
            </div>
 
            <div className="relative p-8 pt-10 pb-10 pl-10 group cursor-default">
              <svg className="absolute top-0 left-0 w-24 h-24 pointer-events-none" viewBox="0 0 100 100" fill="none">
                <path d="M 4 80 V 4 H 80" stroke="#BFC5CE" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
                <path className="feature-item-path" d="M 4 80 V 4 H 80" stroke="#2F6BFF" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
              </svg>
              <svg className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none rotate-180" viewBox="0 0 100 100" fill="none">
                <path d="M 4 80 V 4 H 80" stroke="#BFC5CE" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
                <path className="feature-item-path" d="M 4 80 V 4 H 80" stroke="#2F6BFF" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
              </svg>
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase feature-item-heading">Learners Who Struggled With Manual</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">If clutch control or stalling held you back in the past, automatic driving lessons offer a smoother and more confidence-building alternative.</p>
            </div>
 
            <div className="relative p-8 pt-10 pb-10 pl-10 group cursor-default">
              <svg className="absolute top-0 left-0 w-24 h-24 pointer-events-none" viewBox="0 0 100 100" fill="none">
                <path d="M 4 80 V 4 H 80" stroke="#BFC5CE" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
                <path className="feature-item-path" d="M 4 80 V 4 H 80" stroke="#2F6BFF" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
              </svg>
              <svg className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none rotate-180" viewBox="0 0 100 100" fill="none">
                <path d="M 4 80 V 4 H 80" stroke="#BFC5CE" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
                <path className="feature-item-path" d="M 4 80 V 4 H 80" stroke="#2F6BFF" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
              </svg>
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase feature-item-heading">Busy Professionals</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">With fewer technical distractions, many learners progress more efficiently in automatic vehicles — ideal if you’re balancing lessons around work or university.</p>
            </div>
 
            <div className="relative p-8 pt-10 pb-10 pl-10 group cursor-default">
              <svg className="absolute top-0 left-0 w-24 h-24 pointer-events-none" viewBox="0 0 100 100" fill="none">
                <path d="M 4 80 V 4 H 80" stroke="#BFC5CE" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
                <path className="feature-item-path" d="M 4 80 V 4 H 80" stroke="#2F6BFF" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
              </svg>
              <svg className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none rotate-180" viewBox="0 0 100 100" fill="none">
                <path d="M 4 80 V 4 H 80" stroke="#BFC5CE" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
                <path className="feature-item-path" d="M 4 80 V 4 H 80" stroke="#2F6BFF" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
              </svg>
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase feature-item-heading">Older or Late-Starters</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">Automatic tuition offers a supportive and structured way to build driving confidence at any stage of life.</p>
            </div>
 
            <div className="relative p-8 pt-10 pb-10 pl-10 group cursor-default">
              <svg className="absolute top-0 left-0 w-24 h-24 pointer-events-none" viewBox="0 0 100 100" fill="none">
                <path d="M 4 80 V 4 H 80" stroke="#BFC5CE" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
                <path className="feature-item-path" d="M 4 80 V 4 H 80" stroke="#2F6BFF" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
              </svg>
              <svg className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none rotate-180" viewBox="0 0 100 100" fill="none">
                <path d="M 4 80 V 4 H 80" stroke="#BFC5CE" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
                <path className="feature-item-path" d="M 4 80 V 4 H 80" stroke="#2F6BFF" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
              </svg>
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase feature-item-heading">Faster Confidence Building</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">Because your focus stays on observation and hazard awareness, many learners feel road-ready sooner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: HOW OUR AUTOMATIC LESSONS ARE STRUCTURED */}
      <section className="bg-soft-bg/40 py-8 lg:py-12 px-6 sm:px-10 border-y border-border-main/10 shadow-[inset_0_4px_12px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1200px] mx-auto animate-fade-in">
          <div className="text-center max-w-[1020px] mx-auto mb-8 lg:mb-10">
            <h2 className="text-[2rem] md:text-[2.4rem] font-black text-[#1F2937] mb-2 leading-none tracking-tighter uppercase">
              What Happens in an <span className="italic font-extrabold text-primary-text/30">Automatic Driving Lesson in York</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[1.05rem] leading-relaxed font-medium mx-auto max-w-[1000px]">
              Our automatic driving school in York follows a clear, DVSA-aligned structure. Each lesson builds on the last so you develop strong vehicle control, hazard awareness, and independent skills at a pace that suits you.
            </p>
          </div>

          {/* INTERACTIVE PROGRESSION HOOK */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1100px] mx-auto">
            {/* Left Column: Interactive Tab Buttons */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-none snap-x touch-pan-x">
              {[
                { num: "01", title: "Foundations & Vehicle Control" },
                { num: "02", title: "Junctions & Traffic Awareness" },
                { num: "03", title: "Developing Independent Driving" },
                { num: "04", title: "Complex Road Systems in York" },
                { num: "05", title: "Mock Tests & Final Preparation" }
              ].map((stage, idx) => {
                const isActive = activeStage === idx;
                return (
                  <button
                    key={`stage-btn-${stage.num}`}
                    type="button"
                    onClick={() => setActiveStage(idx)}
                    className={`snap-center shrink-0 min-w-[245px] md:min-w-0 text-left p-4.5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-white border-primary-dark shadow-[2px_8px_20px_rgba(47,107,255,0.06)] scale-[1.01]"
                        : "bg-white/40 border-border-main/20 hover:border-primary-dark/20 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-[0.9rem] font-black uppercase tracking-wider ${isActive ? "text-primary-dark" : "text-primary-text/30"}`}>
                        {stage.num}
                      </span>
                      <span className={`text-[0.85rem] lg:text-[0.92rem] font-black uppercase tracking-tight ${isActive ? "text-primary-text" : "text-primary-text/70"}`}>
                        {stage.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Content Panel */}
            <div className="md:col-span-2">
              <div className="bg-white p-6 sm:p-8 rounded-[32px] border border-border-main/30 shadow-sm relative overflow-hidden min-h-[350px] flex flex-col justify-between">
                {/* Decorative Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-dark/[0.01] rounded-full translate-x-12 -translate-y-12"></div>
                
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4.5">
                    <span className="text-[2.2rem] font-sans font-black text-primary-dark/10 leading-none">
                      {[ "01", "02", "03", "04", "05" ][activeStage]}
                    </span>
                    <div>
                      <span className="text-primary-dark font-black text-[0.68rem] uppercase tracking-[0.2em] mb-1 block">Lesson Progression Stage</span>
                      <h3 className="text-[1.3rem] sm:text-[1.5rem] font-black text-primary-text uppercase tracking-tight leading-snug">
                        {[
                          "Foundations & Vehicle Control",
                          "Junctions & Traffic Awareness",
                          "Developing Independent Driving",
                          "Complex Road Systems in York",
                          "Mock Tests & Final Preparation"
                        ][activeStage]}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-secondary-text text-[0.96rem] sm:text-[1.02rem] leading-relaxed font-semibold">
                    {[
                      "We begin with the basics: cockpit drill, moving off safely, and smooth braking. Without the clutch to worry about, you can focus on vehicle control and steering from the very first session.",
                      "Once you're comfortable, we progress to T-junctions, roundabouts, and lane positioning. We focus on your observations and hazard response, building your confidence in real-world York traffic conditions.",
                      "This phase focuses on your ability to make decisions. You'll practise road sign interpretation, forward planning, and following sat nav directions—essential skills for both your practical test and your future as a safe driver.",
                      "We work through York's more challenging areas — the inner ring road, multi-lane roundabouts, and the kinds of junctions that come up on the York driving test routes.",
                      "When you're close to test-ready, we run full mock test simulations using DVSA marking standards so you know exactly where you stand before the real thing."
                    ][activeStage]}
                  </p>
                  
                  <div className="pt-4 border-t border-border-main/10">
                    <span className="text-primary-text font-black text-[0.72rem] uppercase tracking-[0.15em] mb-3 block">What We Cover In This Stage:</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        [
                          "Cockpit Drill & Safety Checks",
                          "Smooth Moving Off & Stopping",
                          "Steering & Lane Alignment",
                          "Mirror & Signal Routines"
                        ],
                        [
                          "Left & Right Turn Routines",
                          "Emerging from T-Junctions",
                          "Approaching Standard Roundabouts",
                          "Pedestrian Crossings & Safety"
                        ],
                        [
                          "Satellite Navigation Following",
                          "Complex Road Sign Reading",
                          "Forward Hazard Detection",
                          "Independent Decisions"
                        ],
                        [
                          "Clifton Moor Roundabout Lanes",
                          "York Inner Ring Road Merging",
                          "Heworth & Monks Cross Junctions",
                          "National Speed Limit Roads"
                        ],
                        [
                          "Eyesight & 'Show Me, Tell Me'",
                          "Full 40-Minute Mock Exams",
                          "Fault Assessment Review",
                          "Composure & Anxiety Control"
                        ]
                      ][activeStage].map((point, index) => (
                        <li key={`focus-${index}`} className="flex items-start gap-2.5 text-[0.85rem] sm:text-[0.9rem] text-secondary-text font-medium">
                          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary-dark/5 text-primary-dark font-black text-[0.7rem] shrink-0 mt-0.5">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                
                {/* Help hint */}
                <div className="mt-8 pt-4 border-t border-border-main/5 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-secondary-text/50 font-medium text-[0.78rem]">DVSA-aligned client-centred coaching</span>
                  <a href="#enquiry-form" className="text-primary-dark hover:underline font-black text-[0.78rem] uppercase tracking-wider flex items-center gap-1 no-underline">
                    Enquire about this stage <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLIFIED: WHY CHOOSE AUTOMATIC INSTEAD OF MANUAL IN YORK? */}
      <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 border-b border-border-main/5">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="text-[1.65rem] md:text-[2rem] font-black text-[#1F2937] mb-2 leading-none tracking-tighter uppercase">
            Why Choose Automatic <span className="italic font-extrabold text-primary-text/30">Instead Of Manual</span>
          </h2>
          <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
          <p className="text-secondary-text text-[1.05rem] leading-relaxed font-medium mb-6">
            Choosing between automatic and manual driving lessons in York often comes down to confidence, comfort, and personal preference. Automatic lessons can feel simpler for some learners, while manual gives you the flexibility to drive both types of vehicles. If you’re unsure which option suits you best, read our full guide comparing automatic vs manual driving lessons below.
          </p>
          <div className="flex justify-center">
            <a 
              href="/articles/automatic-vs-manual-driving-lessons-york" 
              className="inline-block bg-primary-dark text-white px-10 py-4 rounded-full text-[0.82rem] font-black uppercase tracking-widest no-underline transition-all duration-300 hover:bg-secondary-dark shadow-md hover:shadow-lg"
            >
              Compare Automatic vs Manual Lessons
            </a>
          </div>
        </div>
      </section>
      {/* NEW: AUTOMATIC DRIVING TEST PREPARATION IN YORK */}
      <section className="bg-soft-bg py-8 lg:py-12 px-6 sm:px-10 border-y border-border-main/10 shadow-[inset_0_4px_12px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[1020px] mx-auto mb-8 lg:mb-10">
            <h2 className="text-[2rem] md:text-[2.4rem] font-black text-[#1F2937] mb-2 leading-none tracking-tighter uppercase">
              Automatic Driving Test <span className="italic font-extrabold text-primary-text/30">Preparation</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[1.05rem] leading-relaxed font-medium mx-auto max-w-[1000px]">
              Preparing for your practical driving test in York requires more than just basic vehicle control. Our automatic driving lessons cover real <a href="/articles/york-driving-test-routes-common-mistakes" className="font-bold text-primary-text hover:underline underline-offset-4 decoration-primary-dark/30 transition-all">DVSA test routes</a> and varied conditions across the city.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-16">
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] p-8 bg-white border border-border-main/30 rounded-2xl transition-all duration-300 hover:border-primary-dark/20 hover:shadow-lg hover:shadow-primary-dark/5">
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase">Mock Driving Tests</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">We conduct full-length mock tests assessed to DVSA standards. This helps identify weak areas in a calm environment, providing technical and psychological readiness for the big day. Explore our dedicated <a href="/mock-driving-tests" className="font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all">mock driving test preparation</a> page for a more detailed breakdown.</p>
            </div>

            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] p-8 bg-white border border-border-main/30 rounded-2xl transition-all duration-300 hover:border-primary-dark/20 hover:shadow-lg hover:shadow-primary-dark/5">
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase">Real York Test Routes</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">As part of your preparation, we familiarise you with local test-style routes, including complex junctions and roundabouts like those on the York inner ring road.</p>
            </div>

            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] p-8 bg-white border border-border-main/30 rounded-2xl transition-all duration-300 hover:border-primary-dark/20 hover:shadow-lg hover:shadow-primary-dark/5">
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase">Independent Driving Practice</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">We practise following sat nav directions and road signs, building your ability to make safe decisions independently—exactly as required by the DVSA examiner.</p>
            </div>

            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] p-8 bg-white border border-border-main/30 rounded-2xl transition-all duration-300 hover:border-primary-dark/20 hover:shadow-lg hover:shadow-primary-dark/5">
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase">High-Risk Area Preparation</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">Focus is given to challenging junctions, multi-lane areas, and pedestrian-heavy zones in York, so you can anticipate hazards and react with composure.</p>
            </div>

            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] p-8 bg-white border border-border-main/30 rounded-2xl transition-all duration-300 hover:border-primary-dark/20 hover:shadow-lg hover:shadow-primary-dark/5">
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase">Test-Day Readiness</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">From managing nerves to covering 'show-me, tell-me' questions, we provide a structured, calm approach that reinforces your confidence for every stage of the test.</p>
            </div>
          </div>

          <div className="text-center max-w-[800px] mx-auto border-t border-primary-dark/5 pt-12">
            <p className="text-[#4B5563] text-[1.05rem] leading-relaxed font-medium italic">
              Working through these elements means that by the time you reach the York test centre, you aren't just memorising routes—you are a competent, calm, and safe driver ready for any situation beyond test day.
            </p>
          </div>
        </div>
      </section>

      {/* AREAS OF YORK WE COVER FOR AUTOMATIC DRIVING LESSONS */}
      <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 border-t border-border-main/10 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.03)_50%,transparent_100%)]"></div>
        <div className="max-w-[1280px] mx-auto text-center">
          <div className="max-w-[1020px] mx-auto mb-8">
            <h2 className="text-[1.6rem] md:text-[2.2rem] font-black text-primary-text mb-2 tracking-tight uppercase leading-none">
              AREAS OF YORK WE COVER FOR <br className="hidden sm:block" /> <span className="text-primary-dark italic">AUTOMATIC</span> DRIVING LESSONS
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[0.95rem] leading-relaxed font-semibold opacity-70 max-w-[800px] mx-auto">
              Our DVSA-approved automatic driving tuition is available throughout the city and surrounding York suburbs.
            </p>
          </div>
 
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-8 max-w-[1000px] mx-auto">
            {[
              { name: "Heworth", url: "/driving-lessons-heworth-york" },
              { name: "Tang Hall", url: "/driving-lessons-tang-hall-york" },
              { name: "Clifton", url: "/driving-lessons-clifton-york" },
              { name: "Fulford", url: "/driving-lessons-fulford-york" },
              { name: "Acomb", url: "/driving-lessons-acomb-york" }
            ].map((area) => (
              <a 
                key={`auto-area-${area.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={area.url}
                className="px-6 py-3.5 bg-white border border-[#E5E7EB] rounded-full hover:border-primary-dark hover:bg-soft-bg/50 shadow-sm hover:shadow-md transition-all duration-200 no-underline group flex items-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-primary-text/40 group-hover:text-primary-dark transition-colors" />
                <span className="text-[0.78rem] font-black text-primary-text uppercase tracking-[0.18em] transition-colors group-hover:text-primary-dark">{area.name}</span>
              </a>
            ))}
          </div>
 
          <div className="flex justify-center pt-4">
            <a 
              href="/york" 
              className="inline-flex items-center gap-3 text-primary-dark hover:text-secondary-dark font-black uppercase tracking-[0.2em] text-[0.8rem] transition-all no-underline group border-b border-primary-dark/15 hover:border-primary-dark pb-1"
            >
              EXPLORE ALL YORK LOCATIONS 
              <span className="group-hover:translate-x-1 transition-transform text-primary-dark">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* EXPLORE OUR OTHER DRIVING COURSES IN YORK */}
      <section className="bg-soft-bg py-8 lg:py-12 px-6 sm:px-10 border-y border-border-main/10">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[1020px] mx-auto mb-8">
            <h2 className="text-[2rem] md:text-[2.6rem] font-black text-[#1F2937] mb-2 leading-none tracking-tighter uppercase">
              Explore Other <span className="italic font-extrabold text-primary-text/30">Driving Courses in York.</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[1.05rem] leading-relaxed font-medium mx-auto max-w-[1000px]">
              Automatic lessons are one way to learn in York. If you want to compare your options or take the next step after passing, these courses are worth a look.
            </p>
          </div>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Manual Driving Lessons",
                desc: "Want a manual licence instead? Manual driving lessons in York give you full vehicle control and a licence that works in any car.",
                link: "/manual-driving-lessons"
              },
              {
                title: "Intensive Driving Courses",
                desc: "Need to pass quickly? Our intensive driving courses in York cover everything in a shorter time frame — automatic or manual.",
                link: "/intensive-driving-courses"
              },
              {
                title: "Mock Driving Tests",
                desc: "Feeling nearly ready? A mock driving test in York shows you exactly where you stand before you sit the real thing.",
                link: "/mock-driving-tests"
              }
            ].map((course) => (
              <a 
                key={`auto-other-${course.title.toLowerCase().replace(/\s+/g, '-')}`} 
                href={course.link}
                className="group p-8 bg-white border border-border-main/20 rounded-2xl no-underline transition-all duration-300 hover:border-primary-dark/30 hover:shadow-xl hover:shadow-primary-dark/5 flex flex-col h-full"
              >
                <div className="mb-4">
                  <div className="text-[1.12rem] font-black text-primary-text mb-3 tracking-tight uppercase group-hover:text-primary-dark transition-colors">{course.title}</div>
                  <p className="text-secondary-text text-[0.88rem] leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">{course.desc}</p>
                </div>
                <div className="mt-auto pt-4 flex items-center gap-2 text-[0.72rem] font-black uppercase tracking-[0.2em] text-primary-text/40 group-hover:text-primary-dark transition-colors">
                  View Course <span>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQ */}
      <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 border-t border-border-main/20" id="faq">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-8 lg:mb-10">
            <h2 className="text-[2rem] md:text-[2.4rem] font-black text-[#1F2937] mb-2 tracking-tighter uppercase leading-none">Your <span className="italic font-extrabold text-primary-text/30">questions.</span></h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-[#4B5563] text-[1.05rem] font-medium leading-relaxed max-w-[800px] mx-auto">Everything you need to know about learning automatic or preparing for your <b>practical driving test</b> in York.</p>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CTA BAR */}
      <section className="bg-primary-dark border-t border-white/10 border-b border-b-white/5 py-6 lg:py-7 px-6 sm:px-10">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <h2 className="text-[1.05rem] md:text-[1.2rem] font-black text-white leading-tight tracking-tighter uppercase text-center sm:text-left">
            Start Your Automatic <span className="italic font-extrabold text-white/40">Driving Journey in York.</span>
          </h2>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/york"
              className="bg-white text-primary-dark px-7 py-3 rounded-full text-[0.78rem] font-black uppercase tracking-widest no-underline transition-all duration-200 hover:-translate-y-px hover:shadow-lg"
            >
              York
            </a>
            <a
              href="#enquiry-form"
              className="bg-transparent text-white border-2 border-white/25 px-7 py-3 rounded-full text-[0.78rem] font-black uppercase tracking-widest no-underline transition-all duration-200 hover:border-white/70 hover:bg-white/5"
            >
              Enquire Today
            </a>
          </div>
        </div>
      </section>

      <YorkAreaFinder />

      <Footer />
    </div>
  );
}
