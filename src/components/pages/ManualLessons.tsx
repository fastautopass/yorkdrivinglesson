import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Flag, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import EnquiryForm from '../EnquiryForm';
import FAQ from '../FAQ';
import YorkAreaFinder from '../YorkAreaFinder';
import RelatedLinks from '../RelatedLinks';

export default function ManualLessons() {
  const [currentPassIndex, setCurrentPassIndex] = useState(0);
  const [passOffset, setPassOffset] = useState(0);
  const passTrackRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

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

  const faqs = [
    {
      question: "Are manual driving lessons harder than automatic?",
      answer: "Manual lessons require coordination between the clutch and gears, but most learners build confidence progressively with DVSA-qualified guidance. If you prefer a simpler start, our <a href='/automatic-driving-lessons/' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>automatic driving lessons in York</a> are a popular alternative for many city learners."
    },
    {
      question: "How long will it take to get comfortable with the clutch?",
      answer: "Most beginner drivers get to grips with the bite point and basic gear changes within the first few hours. We keep lessons calm and repeat foundational skills until they become natural."
    },
    {
      question: "How many manual driving lessons will I need?",
      answer: "The number of lessons varies depending on confidence and previous experience, though the DVSA average is around 45 hours. For those looking to progress faster, our <a href='/intensive-driving-courses/' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>intensive driving courses</a> offer a condensed schedule to build skills rapidly."
    },
    {
      question: "Is learning manual worth it long term?",
      answer: "Passing in a manual vehicle gives you the flexibility to drive both manual and automatic cars without restriction. We recommend checking our <a href='/articles/automatic-vs-manual-driving-lessons-york/' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>automatic vs manual guide</a> to help decide which path matches your technical goals."
    },
    {
      question: "What happens if I struggle with manual driving?",
      answer: "We adapt every lesson to your individual pace. If gears feel challenging, we focus on technical coordination. Many students also find that a <a href='/mock-driving-tests/' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>mock driving test</a> later in their training helps verify their vehicle control under real test conditions."
    },
    {
      question: "Do you cover York driving test routes?",
      answer: "Yes. We incorporate real <a href='/articles/york-driving-test-routes-common-mistakes/' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>DVSA test routes</a> into your training so you are familiar with the specific junctions, hills, and roundabouts surrounding the <a href='/monks-cross-driving-test-centre/' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>York Test Centre</a>."
    },
    {
      question: "Can I switch to automatic lessons later?",
      answer: "Absolutely. If manual tuition no longer feels suitable for your goals, you can discuss transitioning to <a href='/automatic-driving-lessons/' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>automatic tuition</a> at any stage. Our priority is that you leave as a safe, competent driver."
    },
    {
      question: "Is the York driving test harder in a manual?",
      answer: "The marking standard is identical for both transmission types. Manual requires gear management on top of everything else, so we cover York's varied road systems thoroughly — junctions, roundabouts, and test routes — so you're comfortable on exam day."
    },
    {
      question: "How do I handle hill starts on York's steeper roads?",
      answer: "We practise hill starts on various gradients so you can find the bite point and move off smoothly without rolling. This is a key focus for nervous learners and beginner drivers alike."
    },
    {
      question: "What happens if I stall during my driving test?",
      answer: "Stalling is common and often considered a minor fault unless it results in a hazard. To build your confidence, we offer <a href='/mock-driving-tests/' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>mock driving tests</a> that replicate the pressure of test day, helping you learn to recover calmly and safely."
    },
    {
      question: "Do you offer manual refresher lessons for those with a licence?",
      answer: "Yes. Our <a href='/refresher-lessons/' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>refresher lessons</a> are perfect if you've had a break from driving or have recently moved to York and want to get accustomed to the local roads and busy junctions in a manual car."
    },
    {
      question: "Can I learn motorway driving in a manual car?",
      answer: "Once you have passed, or as part of post-test training, we provide <a href='/motorway-lessons/' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>motorway driving lessons</a>. This builds your confidence in high-speed gear selection and lane discipline on the A1(M) and M62 corridors."
    },
    {
      question: "Is there a course for improving safety after passing?",
      answer: "We highly recommend the <a href='/pass-plus-course/' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>Pass Plus course</a>. It helps new manual drivers refine their skills in more challenging environments, such as night driving, extreme weather, and rural road systems."
    },
    {
      question: "How do I book my first manual lesson?",
      answer: "The easiest way is to fill out the form above. We'll check our current <a href='/york/' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>York location</a> coverage and availability, getting back to you within two hours to schedule your first session."
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
              Manual <span className="italic font-extrabold text-white/50">Driving</span> Lessons in York
            </h1>
            <p className="text-[1.1rem] sm:text-[1.25rem] text-hero-paragraph leading-relaxed mb-10 max-w-[580px] font-medium opacity-80">
              Learn gears and clutch at your own pace on York's real roads. Manual lessons give you the most flexible licence — and once it clicks, it really clicks.
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
            <div className="w-full max-w-[540px] relative z-10">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: STRUCTURED DVSA-ALIGNED MANUAL LESSONS */}
      <section className="bg-soft-bg py-8 lg:py-12 px-6 sm:px-10 border-b border-border-main/10">
        <div className="max-w-[1150px] mx-auto text-center">
          <h2 className="text-[1.3rem] md:text-[1.8rem] font-black text-primary-text mb-2 tracking-[0.16em] uppercase leading-none">
            How Manual Driving Lessons <span className="italic font-extrabold text-primary-text/40">Are Taught in York</span>
          </h2>
          <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
          <div className="space-y-6">
            <p className="text-secondary-text text-[1.1rem] md:text-[1.15rem] leading-[1.8] font-medium max-w-[94%] mx-auto">
              Our manual driving lessons in York follow a structured programme aligned with <span className="font-bold text-primary-text uppercase tracking-tighter">DVSA</span> national standards. From building clutch control to smooth gear transitions, each lesson builds progressively so skills are embedded correctly.
            </p>
            <p className="text-secondary-text text-[1.1rem] md:text-[1.15rem] leading-[1.8] font-medium max-w-[94%] mx-auto">
              We focus on developing calm, regulated driving ability before introducing complex traffic situations on <a href="/articles/york-driving-test-routes-common-mistakes/" className="font-bold text-primary-text hover:underline underline-offset-4 decoration-primary-dark/30 transition-all">roads around the York test centre</a>. The result is not just test readiness, but long-term competence and the flexibility to drive manual vehicles across York and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: DEVELOPING MANUAL DRIVING CONFIDENCE */}
      <section className="bg-white py-8 lg:py-12 px-6 sm:px-10" id="overview">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="text-[2rem] md:text-[2.6rem] font-black text-[#1F2937] mb-3 leading-[1] tracking-tighter uppercase">
              Developing Manual Driving <span className="italic font-extrabold text-primary-text/30">With Confidence.</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4"></div>
            <p className="text-[#4B5563] text-[1.1rem] leading-relaxed font-medium mb-4">
              Our manual driving lessons in York provide a clear, step-by-step approach to developing vehicle control. By focusing on coordination and timing from the start, we help you develop a natural feel for the car so you feel confident and capable in every driving situation.
            </p>
            <p className="text-[#4B5563] text-[#4B5563] text-[1.1rem] leading-relaxed font-medium">
              Whether you're a complete beginner or looking to <a href="/refresher-lessons/" className="font-bold text-primary-text hover:underline underline-offset-4 decoration-primary-dark/30 transition-all">refresh your skills</a>, our DVSA-qualified tuition is built around your individual pace. We combine traditional techniques with modern coaching methods to deliver a structured learning experience.
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
              <div className="text-[1.1rem] font-bold text-[#1F2937] mb-3 tracking-tight uppercase feature-item-heading">Clutch & Bite Point Control</div>
              <p className="text-[#4B5563] text-[0.92rem] leading-relaxed font-medium">Developing smooth starts and delicate control at low speeds so you can navigate uphill junctions with ease.</p>
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
              <div className="text-[1.1rem] font-bold text-[#1F2937] mb-3 tracking-tight uppercase feature-item-heading">Gear Coordination</div>
              <p className="text-[#4B5563] text-[0.92rem] leading-relaxed font-medium">Developing the timing and precision needed for smooth transitions, improving engine efficiency and overall driving flow.</p>
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
              <div className="text-[1.1rem] font-bold text-[#1F2937] mb-3 tracking-tight uppercase feature-item-heading">Greater Vehicle Control</div>
              <p className="text-[#4B5563] text-[0.92rem] leading-relaxed font-medium">Gaining the ability to adapt your driving style to road conditions, giving you a more involved driving experience.</p>
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
              <div className="text-[1.1rem] font-bold text-[#1F2937] mb-3 tracking-tight uppercase feature-item-heading">Strong Foundations</div>
              <p className="text-[#4B5563] text-[0.92rem] leading-relaxed font-medium">Building a technical understanding of the car, which reinforces long-term safety and confident awareness.</p>
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
                href="https://share.google/9B75eIsjdJNEb4cRC" 
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
                Reviews from learners who took manual and automatic driving lessons in York.
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
                    key={`manual-pass-${pass.id}`}
                    className="min-w-full md:min-w-[calc(33.333%-16px)] shrink-0"
                  >
                    <div className="aspect-[4/3.2] bg-soft-bg rounded-[32px] border border-border-main/10 overflow-hidden relative group/card shadow-sm hover:shadow-xl transition-all duration-500">
                      <img loading="lazy" decoding="async" width={360} height={480} src={pass.src} alt="York driving test pass" className="absolute inset-0 w-full h-full object-cover" />
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
                  key={`manual-pass-dot-${pass.id}`}
                  onClick={() => setCurrentPassIndex(i)}
                  aria-label={`Go to pass ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPassIndex === i ? 'bg-primary-dark w-4' : 'bg-primary-dark/20'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY WE’RE TRUSTED (Copy Exactly from Automatic) */}
      <section className="bg-soft-bg py-8 lg:py-12 px-6 sm:px-10 border-y border-border-main/10 shadow-[inset_0_-4px_12px_rgba(0,0,0,0.01)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[1040px] mb-8">
            <h2 className="text-[2rem] md:text-[2.6rem] font-black text-[#1F2937] mb-2 leading-none tracking-tighter uppercase">
              Why We're <span className="italic font-extrabold text-primary-text/30">Trusted.</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4"></div>
            <p className="text-secondary-text text-[1.05rem] leading-relaxed font-medium">
              We provide calm, highly structured manual driving lessons across York. Our approach is built around your individual needs, so you develop real confidence and safe driving habits that stay with you long after the test.
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
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase">Calm Manual Lessons</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">Experience stress-free learning even with clutch and gears, focusing on safe vehicle control and surroundings.</p>
            </div>

            <div className="p-8 bg-white border border-border-main/30 rounded-2xl transition-all duration-300 hover:border-primary-dark/20 hover:shadow-lg hover:shadow-primary-dark/5">
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase">Faster Skill Progression</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">Our structured, client-focused approach helps you build confidence and develop essential driving skills much more efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHO ARE MANUAL DRIVING LESSONS IDEAL FOR? */}
      <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 border-b border-border-main/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[1020px] mx-auto mb-8 lg:mb-10">
            <h2 className="text-[2rem] md:text-[2.6rem] font-black text-[#1F2937] mb-2 leading-none tracking-tighter uppercase">
              Who Are Manual Driving Lessons <span className="italic font-extrabold text-primary-text/30">Ideal For?</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[1.05rem] leading-relaxed font-medium mx-auto max-w-[1000px]">
              Our manual driving lessons in York are ideal for learners who want full vehicle control, long-term flexibility, and the confidence that comes with developing clutch and gear coordination. While manual tuition requires focus and consistency, it provides a strong practical foundation that many drivers value for life.
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
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase feature-item-heading">Full Licence Flexibility</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">Passing in a manual vehicle allows you to drive both manual and automatic cars without restriction, giving you more options in the future.</p>
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
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase feature-item-heading">Technical Skill Confidence</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">Manual transmission offers a more involved driving experience, ideal for those who appreciate developing mechanical coordination.</p>
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
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase feature-item-heading">Career-Focused Learners</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">Many roles and vehicle types require a full manual licence, making it a valuable long-term asset for your prospects.</p>
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
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase feature-item-heading">Driving Different Vehicle Types</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">From classic cars to commercial vans, a manual licence means you can operate any vehicle without needing further tests.</p>
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
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase feature-item-heading">Maximum Vehicle Control</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">Manual gears allow you to proactively manage engine power and speed, providing more involvement in the driving process.</p>
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
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">Many learners value the sense of achievement that comes with developing the gears and clutch through traditional tuition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: HOW OUR MANUAL LESSONS ARE STRUCTURED */}
      <section className="bg-soft-bg/40 py-8 lg:py-12 px-6 sm:px-10 border-y border-border-main/10 shadow-[inset_0_4px_12px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1200px] mx-auto animate-fade-in">
          <div className="text-center max-w-[1020px] mx-auto mb-8 lg:mb-10">
            <h2 className="text-[2rem] md:text-[2.6rem] font-black text-[#1F2937] mb-2 leading-none tracking-tighter uppercase">
              What Happens in a <span className="italic font-extrabold text-primary-text/30">Manual Driving Lesson in York</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[1.05rem] leading-relaxed font-medium mx-auto max-w-[1000px]">
              Our manual driving school in York follows a clear, DVSA-aligned structure. Each lesson builds naturally on the last so you develop strong vehicle control, safe gear management, and practical confidence at a pace that works for you.
            </p>
          </div>

          {/* INTERACTIVE PROGRESSION HOOK */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1100px] mx-auto">
            {/* Left Column: Interactive Tab Buttons */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-none snap-x touch-pan-x">
              {[
                { num: "01", title: "Foundations & Clutch Control" },
                { num: "02", title: "Gear Changes & Positioning" },
                { num: "03", title: "Junctions & Traffic Prep" },
                { num: "04", title: "Complex York Road Systems" },
                { num: "05", title: "Mock Tests & Test Prep" }
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
                          "Foundations & Clutch Control",
                          "Gear Changes & Road Positioning",
                          "Junctions & Traffic Management",
                          "Complex York Road Systems",
                          "Mock Tests & Final Preparation"
                        ][activeStage]}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-secondary-text text-[0.96rem] sm:text-[1.02rem] leading-relaxed font-semibold font-medium">
                    {[
                      "We begin by developing the core basics of manual driving: finding the bite point, smooth pull-aways, and controlled braking in a quiet, low-pressure environment.",
                      "Learning to coordinate speed with gear selection while developing your understanding of road positioning and basic junction navigation.",
                      "Applying gear and clutch coordination to busier T-junctions and roundabouts, building your ability to manage speed and safety in flow.",
                      "Taking your skills to the inner ring road and multi-lane junctions, focusing on forward planning, awareness, and responsive vehicle control.",
                      "Full simulated tests marked to DVSA standards so you know where you stand before your York driving test."
                    ][activeStage]}
                  </p>
                  
                  <div className="pt-4 border-t border-border-main/10">
                    <span className="text-primary-text font-black text-[0.72rem] uppercase tracking-[0.15em] mb-3 block">Skills We Perfect In This Stage:</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        [
                          "Finding the Clutch Bite Point",
                          "Smooth Moving Off & Stopping",
                          "Hill Start Clutch Coordination",
                          "Basic Steering & Secondary Controls"
                        ],
                        [
                          "Gear Box Timing & Selection",
                          "Developing Mirror-Signal-Manoeuvre",
                          "Safe Road Positioning & Lanes",
                          "Downshifting for Approaching Speed"
                        ],
                        [
                          "Entering Standard Intersections",
                          "Roundabout Gear Downshifts",
                          "Clutch Control in Heavy Traffic",
                          "Defensive Hazard Observations"
                        ],
                        [
                          "York Inner Ring Road Gearwork",
                          "Clifton Moor Roundabout Lane Picks",
                          "National Speed Limit Up-shifts",
                          "Interactive Hazard Awareness"
                        ],
                        [
                          "Independent Driving Navigation",
                          "Complete 40-Minute Mock Exams",
                          "Emergency Stop Brake Clutch Sync",
                          "Anxiety Reduction & Calm Execution"
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

      {/* SECTION 7: WHY CHOOSE MANUAL INSTEAD OF AUTOMATIC IN YORK? */}
      <section className="bg-white py-8 lg:py-12 px-6 sm:px-10">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="max-w-[760px] mx-auto">
            <h2 className="text-[1.8rem] md:text-[2.4rem] font-black text-[#1F2937] mb-2 leading-none tracking-tighter uppercase">
              Why Choose Manual <span className="italic font-extrabold text-primary-text/30">Instead Of Automatic</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[1.05rem] leading-relaxed font-medium mb-8">
              Deciding on a manual driving licence offers significant long-term value and future-proofing. It delivers full vehicle flexibility, permitting you to drive both manual and automatic cars without restrictive licence conversions. With manual lessons, you build comfortable coordination, deep confidence behind the wheel, and broad vehicle choice—whether handling your first hatchback, a classic, or commercial vans.
            </p>
            <div className="flex justify-center">
              <a 
                href="/articles/automatic-vs-manual-driving-lessons-york/" 
                className="inline-flex items-center justify-center bg-primary-dark text-white px-8 py-4.5 rounded-full text-[0.8rem] font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5"
              >
                Compare Automatic vs Manual Lessons
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: MANUAL DRIVING TEST PREPARATION IN YORK */}
      <section className="bg-soft-bg py-8 lg:py-12 px-6 sm:px-10 border-y border-border-main/10 shadow-[inset_0_-4px_12px_rgba(0,0,0,0.01)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[1020px] mx-auto mb-8 lg:mb-10">
            <h2 className="text-[2rem] md:text-[2.6rem] font-black text-[#1F2937] mb-2 leading-none tracking-tighter uppercase">
              Manual Driving Test <span className="italic font-extrabold text-primary-text/30">Preparation</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[1.05rem] leading-relaxed font-medium mx-auto max-w-[1000px]">
              Preparing for your manual driving test in York means getting comfortable with gear changes, clutch transitions, and independent navigation — all assessed to DVSA marking standards on the day.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-10">
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] p-8 bg-white border border-border-main/30 rounded-2xl transition-all duration-300 hover:border-primary-dark/20 hover:shadow-lg hover:shadow-primary-dark/5">
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase">Mock Driving Tests</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">Full-length simulations assessed to DVSA standards to build confidence and identify areas for refinement in a calm environment. Explore our dedicated <a href="/mock-driving-tests/" className="font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all">mock driving test preparation</a> page for a more detailed breakdown.</p>
            </div>

            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] p-8 bg-white border border-border-main/30 rounded-2xl transition-all duration-300 hover:border-primary-dark/20 hover:shadow-lg hover:shadow-primary-dark/5">
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase">York Test Route Familiarisation</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">Experience on the specific junctions and road types used by the York test centre for practical exams — no surprises on test day.</p>
            </div>

            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] p-8 bg-white border border-border-main/30 rounded-2xl transition-all duration-300 hover:border-primary-dark/20 hover:shadow-lg hover:shadow-primary-dark/5">
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase">Independent Driving Practice</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">Refining your ability to follow sat-nav and road signs while maintaining smooth clutch and gear control in varied traffic conditions.</p>
            </div>

            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] p-8 bg-white border border-border-main/30 rounded-2xl transition-all duration-300 hover:border-primary-dark/20 hover:shadow-lg hover:shadow-primary-dark/5">
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase">Clutch Control Under Pressure</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">Focused training on hill starts and slow-moving traffic so you maintain total composure and vehicle control during the high-pressure moments of the test.</p>
            </div>

            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] p-8 bg-white border border-border-main/30 rounded-2xl transition-all duration-300 hover:border-primary-dark/20 hover:shadow-lg hover:shadow-primary-dark/5">
              <div className="text-[1.15rem] font-black text-primary-text mb-3 tracking-tight uppercase">Test-Day Confidence</div>
              <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium">Focused coaching to manage nerves so you approach every stage of the examination with calm and technical readiness.</p>
            </div>
          </div>

          <div className="text-center max-w-[800px] mx-auto border-t border-primary-dark/5 pt-8">
            <p className="text-[#4B5563] text-[1.05rem] leading-relaxed font-medium italic">
              Our structured approach means you aren't just prepared for the test, but have the long-term practical competence to drive manual vehicles safely across York and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* AREAS OF YORK WE COVER FOR MANUAL DRIVING LESSONS */}
      <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 border-t border-border-main/10 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.03)_50%,transparent_100%)]"></div>
        <div className="max-w-[1280px] mx-auto text-center">
          <div className="max-w-[1020px] mx-auto mb-8">
            <h2 className="text-[1.6rem] md:text-[2.2rem] font-black text-primary-text mb-2 tracking-tight uppercase leading-none">
              AREAS OF YORK WE COVER FOR <br className="hidden sm:block" /> <span className="text-primary-dark italic">MANUAL</span> DRIVING LESSONS
            </h2>
            <p className="text-secondary-text text-[0.95rem] leading-relaxed font-medium opacity-75 max-w-[700px] mx-auto">
              Our manual driving tuition is available throughout the city and surrounding York suburbs. Our instructors are intimately familiar with local road systems, from quiet residential streets in <b>Holgate</b> and <b>Rawcliffe</b> to the busy multi-lane junctions found on <a href="/articles/york-driving-test-routes-common-mistakes/" className="font-bold text-primary-text hover:underline underline-offset-4 decoration-primary-dark/30 transition-all">York test routes</a>.
            </p>
          </div>
 
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-8 max-w-[1000px] mx-auto">
            {[
              { name: "Holgate", url: "/driving-lessons-holgate-york/" },
              { name: "Layerthorpe", url: "/driving-lessons-layerthorpe-york/" },
              { name: "Osbaldwick", url: "/driving-lessons-osbaldwick-york/" },
              { name: "Haxby", url: "/driving-lessons-haxby-york/" },
              { name: "Rawcliffe", url: "/driving-lessons-rawcliffe-york/" }
            ].map((area) => (
              <a 
                key={`manual-area-${area.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={area.url}
                className="px-6 py-3 bg-white border border-border-main/20 rounded-full hover:bg-soft-bg hover:border-primary-text transition-all duration-150 no-underline group flex items-center gap-2 shadow-sm"
              >
                <MapPin className="w-4 h-4 text-primary-dark/60 group-hover:text-primary-dark transition-colors shrink-0" />
                <span className="text-[0.78rem] font-black text-primary-text uppercase tracking-[0.15em] transition-colors">{area.name}</span>
              </a>
            ))}
          </div>
 
          <div className="flex justify-center pt-2">
            <a href="/york/" className="inline-flex items-center gap-3 text-primary-text hover:text-primary-dark font-black uppercase tracking-[0.2em] text-[0.72rem] transition-all no-underline group py-1 border-b-2 border-primary-dark/10 hover:border-primary-dark">
              EXPLORE ALL YORK LOCATIONS 
              <span className="group-hover:translate-x-1 transition-transform font-bold">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* EXPLORE OUR OTHER DRIVING COURSES IN YORK */}
      <section className="bg-soft-bg py-8 lg:py-12 px-6 sm:px-10 border-y border-border-main/10 shadow-[inset_0_4px_12px_rgba(0,0,0,0.01)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[1020px] mx-auto mb-8 lg:mb-10">
            <h2 className="text-[2rem] md:text-[2.6rem] font-black text-[#1F2937] mb-2 leading-none tracking-tighter uppercase">
              Explore Other <span className="italic font-extrabold text-primary-text/30">Driving Courses in York.</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[1.05rem] leading-relaxed font-medium mx-auto max-w-[700px]">
              Manual lessons are the most common starting point in York. Depending on where you are in your driving journey, one of these courses might be a better fit right now.
            </p>
          </div>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Automatic Driving Lessons",
                desc: "Struggling with the clutch or gear changes? Automatic lessons in York let you focus on the road without the added pressure.",
                link: "/automatic-driving-lessons/"
              },
              {
                title: "Intensive Driving Courses",
                desc: "Want to pass sooner? Our intensive driving courses in York compress your manual lessons into a focused block of training.",
                link: "/intensive-driving-courses/"
              },
              {
                title: "Mock Driving Tests",
                desc: "Not sure you're ready yet? A mock driving test in York gives you a clear picture of where you are before the real test.",
                link: "/mock-driving-tests/"
              }
            ].map((course) => (
              <a 
                key={`manual-other-${course.title.toLowerCase().replace(/\s+/g, '-')}`} 
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

      {/* SECTION 11: FAQ SECTION */}
      <section className="bg-white py-8 px-6 sm:px-10 border-t border-border-main/30" id="faq">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[2rem] md:text-[2.6rem] font-black text-[#1F2937] mb-2 tracking-tighter uppercase leading-none">Your <span className="italic font-extrabold text-primary-text/30">questions.</span></h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-[#4B5563] text-[1.1rem] font-medium">Everything you need to know about manual driving lessons in York.</p>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CTA BAR */}
      <section className="bg-primary-dark border-t border-white/10 border-b border-b-white/5 py-6 lg:py-7 px-6 sm:px-10">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <h2 className="text-[1.05rem] md:text-[1.2rem] font-black text-white leading-tight tracking-tighter uppercase text-center sm:text-left">
            Start Your Manual <span className="italic font-extrabold text-white/40">Driving Journey in York.</span>
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

      <RelatedLinks path="/manual-driving-lessons/" kind="service" />
      <Footer />
    </div>
  );
}
