import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Flag, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import EnquiryForm from '../EnquiryForm';
import FAQ from '../FAQ';
import YorkAreaFinder from '../YorkAreaFinder';

export default function IntensiveCourses() {
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
      question: "How long does an intensive driving course in York take?", 
      answer: "In general, an intensive course can be completed in anywhere from 1 to 4 weeks depending on your current experience and availability. We don't cram too much into one day — fatigue slows learning. We keep sessions at 2-4 hours of focused driving, often following the local <a href='/articles/york-driving-test-routes-common-mistakes' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>York test routes</a> to build familiarity."
    },
    { 
      question: "How many hours do I need for a crash driving course in York?", 
      answer: "This varies per student. Beginners usually require around 35-45 hours, while those with some experience might only need 15-20 hours. We recommend starting with a 2-hour assessment to determine which of our <a href='/manual-driving-lessons' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>manual driving lessons</a> or <a href='/automatic-driving-lessons' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>automatic packages</a> best fits your needs." 
    },
    { 
      question: "What is an assessment lesson and why do I need one?",
      answer: "An assessment lesson is a 2-hour session that allows our York-based instructor to evaluate your control, observation, and road awareness. This is vital for intensive courses because it means we can recommend the correct number of hours, saving you both time and money by avoiding over-booking or under-preparing."
    },
    { 
      question: "Can I take my driving test immediately after the course?", 
      answer: "Yes, the goal of an intensive course is to lead directly into your practical test. However, this is subject to DVSA test availability. We recommend having your theory test passed before starting so we can help you coordinate a booking at the <a href='/monks-cross-driving-test-centre' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>York Test Centre</a> for the final day of your course." 
    },
    { 
      question: "Do you provide the test booking service in York?", 
      answer: "We focus on providing high-quality tuition. While we can't 'skip' the DVSA queue, we can advise you on how to find cancellation dates or use apps to secure an earlier test date for the York test centre. We work closely with our students to align their course completion with their test date." 
    },
    { 
      question: "Is an intensive course suitable for beginners?", 
      answer: "Yes, beginners can take an intensive driving course in York. It does require focus and stamina. We keep the pace at a level that works for you so you learn the fundamentals properly — not just rush through hours."
    },
    { 
      question: "Do I need my theory test passed before starting?",
      answer: "While you can start your lessons without it, we strongly recommend passing your theory test before beginning an intensive course. You cannot book a practical test in York until the theory is passed, and since these courses progress quickly, having that hurdle cleared allows for a much smoother path to your licence."
    },
    { 
      question: "Are intensive courses better for anxious learners?",
      answer: "For some, the continuity of intensive lessons helps reduce anxiety because there is less time to 'overthink' between sessions. However, for others, the intensity can be stressful. Our York instructors adapt their style to your nerves so you feel supported throughout the process."
    },
    { 
      question: "How do you handle mock tests during an intensive course?",
      answer: "Mock tests are a critical part of our intensive process. We conduct them on real <a href='/articles/york-driving-test-routes-common-mistakes' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>York test routes</a> so you're familiar with the specific expectations of the Monks Cross examiners. This builds the composure needed for the real thing."
    },
    { 
      question: "What happens if I fail my test after an intensive course?", 
      answer: "Don't panic. If you don't pass, we'll analyse the examiner's feedback and focus on those specific areas in a few follow-up lessons. You don't need to redo the entire intensive course; we just refine your skills for the next available test date in York."
    },
    { 
      question: "Are automatic intensive driving lessons available in York?", 
      answer: "Yes, we offer both manual and <a href='/automatic-driving-lessons' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>automatic intensive courses</a> across York. Automatic is often preferred for intensive training because it removes the time needed to handle clutch control and gear changes, letting you focus entirely on navigating busy areas like Gillygate and Clifton Moor safely."
    },
    { 
      question: "Which York test centre routes do you cover?",
      answer: "We cover all major routes used by the <a href='/monks-cross-driving-test-centre' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>Monks Cross driving test centre</a>. This includes practising on high-speed dual carriageways like the A1237 ring road, as well as complex urban junctions around Clifton Moor, Acomb, and the historic city walls."
    },
    { 
      question: "Can I start an intensive course in York next week?",
      answer: "Availability varies, but we always do our best to accommodate urgent requests. Intensive courses generally require more forward planning than weekly lessons. Please use the enquiry form above to check our current schedule for the York area."
    },
    { 
      question: "How much does an intensive driving course in York cost?", 
      answer: "Costs depend on the number of hours required. The concentrated nature of intensive lessons often means fewer total hours compared to weekly lessons spread over months. We also recommend booking a <a href='/mock-driving-tests' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>mock driving test</a> towards the end, which can save you the cost of a retest."
    }
  ];

  return (
    <div className="min-h-screen bg-soft-bg font-sans">
      <style>{`
        .feature-item-path {
          stroke-dasharray: 152;
          stroke-dashoffset: 152;
          transition: stroke-dashoffset 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          fill: none;
        }
        .group:hover .feature-item-path {
          stroke-dashoffset: 0;
        }
        .red-feature-item-path {
          stroke-dasharray: 152;
          stroke-dashoffset: 152;
          transition: stroke-dashoffset 0.35s cubic-bezier(0.4, 0, 0.2, 1);
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
              Intensive <span className="italic font-extrabold text-white/50">Driving</span> Courses in York
            </h1>
            <p className="text-[1.1rem] sm:text-[1.25rem] text-hero-paragraph leading-relaxed mb-10 max-w-[580px] font-medium opacity-80">
              Want to pass in weeks rather than months? Our intensive driving courses in York pack your lessons together so you build skills without losing momentum between sessions — available in <a href="/manual-driving-lessons" className="text-white hover:underline underline-offset-4 decoration-white/30 transition-all">manual</a> or <a href="/automatic-driving-lessons" className="text-white hover:underline underline-offset-4 decoration-white/30 transition-all">automatic</a>.
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

      {/* SECTION 2: OUR FAST-TRACK TRAINING (Redesigned for Momentum) */}
      <section className="bg-soft-bg py-8 lg:py-12 px-6 sm:px-10 border-b border-border-main/10 overflow-hidden" id="intensive-training">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* STICKY HEADER PART */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-3 text-[0.7rem] font-black uppercase tracking-[0.35em] text-primary-text/40 mb-4">
                <div className="w-10 h-px bg-primary-text/20"></div> STRUCTURED PROGRESSION
              </div>
              <h2 className="text-[2.8rem] md:text-[3.8rem] lg:text-[4.2rem] font-black text-primary-text mb-4 tracking-tighter uppercase leading-[0.85]">
                Our <span className="italic font-extrabold text-primary-text/30">Intensive</span> Training
              </h2>
              <div className="w-20 h-2 bg-primary-dark mb-6"></div>
              <div className="space-y-4">
                <p className="text-[#374151] text-[1.15rem] leading-relaxed font-bold">
                  Built on a foundation of structured, skill-first progression. We don't believe in cutting corners or rushing the fundamentals.
                </p>
                <div className="pt-4">
                  <div className="flex items-center gap-4 py-4 border-y border-border-main/10">
                     <div className="flex -space-x-3">
                        <div className="w-11 h-11 rounded-full bg-white border-2 border-primary-dark/5 flex items-center justify-center text-[0.7rem] font-black shadow-sm">DV</div>
                        <div className="w-11 h-11 rounded-full bg-white border-2 border-primary-dark/5 flex items-center justify-center text-[0.7rem] font-black shadow-sm">SA</div>
                     </div>
                     <p className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-primary-text/40">DVSA <br/>ACCREDITATION</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SPACER / LINE */}
            <div className="lg:col-span-1 border-l border-border-main/10 hidden lg:block h-full self-stretch"></div>

            {/* DYNAMIC PROGRESSION BLOCKS */}
            <div className="lg:col-span-6 space-y-10 lg:space-y-12">
              
              <div className="relative group">
                <div className="absolute -left-12 lg:-left-16 top-0 text-[1.1rem] font-black text-primary-text/5 uppercase tracking-[0.3em] vertical-text hidden sm:block">Focus 01</div>
                <div className="relative z-10">
                  <div className="text-[1.7rem] font-black text-primary-text mb-2 tracking-tight uppercase leading-none group-hover:translate-x-2 transition-transform duration-500">
                    Concentrated <span className="italic text-primary-text/30">Momentum.</span>
                  </div>
                  <p className="text-secondary-text text-[1.05rem] leading-relaxed font-medium">
                    Instead of spread-out sessions, we concentrate your learning into a shorter timeframe while maintaining the highest standards of safety and technical competence. Our intensive driving course in York means information is retained through immediate, repeated application.
                  </p>
                </div>
                <div className="mt-3 h-1 w-12 bg-primary-dark/10 group-hover:w-full transition-all duration-700 ease-in-out"></div>
              </div>

              <div className="relative group">
                <div className="absolute -left-12 lg:-left-16 top-0 text-[1.1rem] font-black text-primary-text/5 uppercase tracking-[0.3em] vertical-text hidden sm:block">Focus 02</div>
                <div className="relative z-10">
                  <div className="text-[1.7rem] font-black text-primary-text mb-2 tracking-tight uppercase leading-none group-hover:translate-x-2 transition-transform duration-500">
                    Technical <span className="italic text-primary-text/30">Depth.</span>
                  </div>
                  <p className="text-secondary-text text-[1.05rem] leading-relaxed font-medium">
                    Whether you are learning in a manual or automatic vehicle, our tuition focuses on total vehicle control, keen hazard awareness, and real-world experience on York's diverse roads. We don't just teach you to pass; we teach you the car.
                  </p>
                </div>
                <div className="mt-3 h-1 w-12 bg-primary-dark/10 group-hover:w-full transition-all duration-700 ease-in-out"></div>
              </div>

              <div className="relative group">
                <div className="absolute -left-12 lg:-left-16 top-0 text-[1.1rem] font-black text-primary-text/5 uppercase tracking-[0.3em] vertical-text hidden sm:block">Focus 03</div>
                <div className="relative z-10">
                  <div className="text-[1.7rem] font-black text-primary-text mb-2 tracking-tight uppercase leading-none group-hover:translate-x-2 transition-transform duration-500">
                    Safe <span className="italic text-primary-text/30">Independence.</span>
                  </div>
                  <p className="text-secondary-text text-[1.05rem] leading-relaxed font-medium">
                    We focus on crash driving course York solutions that prioritise long-term safety over shortcuts, so you are truly ready for the road beyond the test centre. Progression is calculated and measured at every stage.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
                     <a href="#overview" className="inline-flex items-center gap-2 text-[0.75rem] font-black uppercase tracking-[0.2em] text-primary-text hover:text-primary-dark transition-all group/link">
                        View Intensive Features <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                     </a>
                     <a href="#faq" className="inline-flex items-center gap-2 text-[0.75rem] font-black uppercase tracking-[0.2em] text-primary-text/40 hover:text-primary-text transition-all">
                        Common Questions
                     </a>
                  </div>
                </div>
                <div className="mt-3 h-1 w-12 bg-primary-dark group-hover:w-full transition-all duration-700 ease-in-out"></div>
              </div>

            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (min-width: 640px) {
            .vertical-text {
              writing-mode: vertical-rl;
              transform: rotate(180deg);
            }
          }
        `}} />
      </section>

      {/* TRUSTED BY YORK LEARNERS (Carbon Copy Reference) */}
      <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 overflow-hidden border-b border-border-main/10">
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
              <a href="https://www.google.com/search?q=York+Driving+Lesson+School+reviews" target="_blank" rel="noopener noreferrer" className="w-full bg-soft-bg text-primary-text border border-border-main/20 py-2.5 rounded-xl text-[0.72rem] font-black uppercase tracking-[0.15em] transition-all hover:bg-primary-dark hover:text-white hover:border-primary-dark shadow-sm">
                View Google Reviews
              </a>
            </div>

            <div className="group bg-white p-6 lg:p-8 rounded-[32px] border border-border-main/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-4 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="w-10 h-10">
                  <path fill="#00b67a" d="M120 45.8L73.5 45.8 60 0 46.5 45.8 0 45.8 37.6 73.4 23.2 119.2 60 91.1 96.8 119.2 82.4 73.4 120 45.8z"/>
                </svg>
              </div>
              <div className="text-[0.9rem] font-black text-primary-text mb-3 uppercase tracking-tight">Trustpilot Reviews</div>
              <p className="text-secondary-text text-[0.82rem] lg:text-[0.88rem] leading-relaxed font-medium mb-6 flex-grow">
                Reviews from learners who completed intensive driving courses in York.
              </p>
              <a href="https://uk.trustpilot.com/review/yorkdrivinglesson.co.uk" target="_blank" rel="noopener noreferrer" className="w-full bg-soft-bg text-primary-text border border-border-main/20 py-2.5 rounded-xl text-[0.72rem] font-black uppercase tracking-[0.15em] transition-all hover:bg-[#00b67a] hover:text-white hover:border-[#00b67a] shadow-sm">
                View Trustpilot Reviews
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT PASSES IN YORK (Carbon Copy Reference) */}
      <section className="bg-soft-bg py-8 lg:py-12 px-6 sm:px-10 border-b border-border-main/10 overflow-hidden">
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
            {/* Nav Handles */}
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
                style={{ width: '100%', display: 'flex', touchAction: 'pan-y' }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_e, info) => {
                  if (info.offset.x > 50) prevPass();
                  else if (info.offset.x < -50) nextPass();
                }}
              >
                {recentPasses.map((pass) => (
                  <div key={`intensive-pass-${pass.id}`} className="min-w-full md:min-w-[calc(33.333%-16px)] shrink-0">
                    <div className="aspect-[4/3.2] bg-soft-bg rounded-[32px] border border-border-main/10 overflow-hidden relative group/card shadow-sm hover:shadow-xl transition-all duration-500">
                      <img src={pass.src} alt="York driving test pass" className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Dot indicators for mobile */}
            <div className="flex justify-center gap-2 mt-6 md:hidden">
              {recentPasses.map((pass, i) => (
                <button 
                  type="button"
                  key={`intensive-pass-dot-${pass.id}`} 
                  onClick={() => setCurrentPassIndex(i)}
                  aria-label={`Go to pass ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPassIndex === i ? 'bg-primary-dark w-4' : 'bg-primary-dark/20'}`} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHO IS AN INTENSIVE DRIVING COURSE IDEAL FOR? */}
      <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 border-b border-border-main/5 animate-fade-in" id="overview">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[1020px] mx-auto mb-8">
            <h2 className="text-[2rem] md:text-[2.6rem] font-black text-[#1F2937] mb-2 leading-none tracking-tighter uppercase">
              Who Is An Intensive Driving Course <span className="italic font-extrabold text-primary-text/30">Ideal For?</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[1.05rem] leading-relaxed font-medium mx-auto max-w-[700px]">
              An intensive driving course in York suits learners who want to build skills quickly and keep momentum going rather than waiting weeks between sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
              <filter id="roughness-filter">
                <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="1" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </svg>
            {[
              { title: "Learners With A Deadline", desc: "If you need to pass by a specific date for a job or personal reason, an intensive course in York gives you the focused hours to get there." },
              { title: "University Students Returning Home", desc: "University of York and York St John students often use holiday breaks to get their licence — intensive courses fit well around term dates." },
              { title: "Job or Career Requirements", desc: "Many roles require a full licence. We help you secure yours quickly, including optional <a href='/motorway-lessons' class='font-bold hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>motorway training</a> so you're ready for any commute." }
            ].map((feature, index) => (
              <div key={`intensive-ideal-${index}`} className="relative p-8 pt-10 pb-10 pl-10 group cursor-default">
                <svg className="absolute top-0 left-0 w-24 h-24 pointer-events-none" viewBox="0 0 100 100" fill="none">
                  <path d="M 4 80 V 4 H 80" stroke="#BFC5CE" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
                  <path className="feature-item-path" d="M 4 80 V 4 H 80" stroke="#2F6BFF" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
                </svg>
                <svg className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none rotate-180" viewBox="0 0 100 100" fill="none">
                  <path d="M 4 80 V 4 H 80" stroke="#BFC5CE" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
                  <path className="feature-item-path" d="M 4 80 V 4 H 80" stroke="#2F6BFF" strokeWidth="2.5" strokeLinecap="round" filter="url(#roughness-filter)" />
                </svg>
                <div className="text-[1.1rem] font-bold text-[#1F2937] mb-3 tracking-tight uppercase feature-item-heading">{feature.title}</div>
                <div className="text-secondary-text text-[0.92rem] leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: feature.desc }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REDESIGNED: SUITABILITY BLUEPRINT */}
      <section className="bg-soft-bg py-8 lg:py-12 px-6 sm:px-10 border-b border-border-main/10 shadow-[inset_0_-4px_12px_rgba(0,0,0,0.01)]" id="suitability">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[1020px] mx-auto mb-8">
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-2 tracking-tighter uppercase leading-none">
              Is an Intensive Course <span className="italic font-extrabold text-primary-text/40">Right For You?</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[1.05rem] leading-relaxed font-semibold font-medium mx-auto max-w-[1000px]">
              Not everyone learns the same way. Check whether an intensive driving course in York suits how you learn and what you need to achieve.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-8 max-w-[1100px] mx-auto">
            {/* The Pros Column */}
            <div className="bg-white p-8 lg:p-10 rounded-[32px] border border-border-main/30 shadow-sm hover:border-primary-dark/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-dark/5 text-primary-dark font-black text-[0.8rem]">✓</div>
                <div className="text-[1.1rem] font-black text-primary-text tracking-tight uppercase">The Benefits</div>
              </div>
              <ul className="space-y-5 list-none p-0">
                <li className="flex items-start gap-4 text-[0.92rem] text-secondary-text font-semibold font-medium leading-relaxed">
                  <span className="text-primary-dark font-black select-none mt-0.5 font-sans">✓</span>
                  <span><strong className="text-primary-text font-semibold">Rapid Progression:</strong> Condense months of scheduled driving lessons into small, focused intervals of safe, structured instruction.</span>
                </li>
                <li className="flex items-start gap-4 text-[0.92rem] text-secondary-text font-semibold font-medium leading-relaxed">
                  <span className="text-primary-dark font-black select-none mt-0.5 font-sans">✓</span>
                  <span><strong className="text-primary-text font-semibold">Consistent Skill Retention:</strong> Continuous immersion eliminates the typical decay of learning that occurs during long gaps between weekly sessions.</span>
                </li>
                <li className="flex items-start gap-4 text-[0.92rem] text-secondary-text font-semibold font-medium leading-relaxed">
                  <span className="text-primary-dark font-black select-none mt-0.5 font-sans">✓</span>
                  <span><strong className="text-primary-text font-semibold">Test-Ready in Weeks:</strong> Perfect for learners with defined deadlines, such as starting a new job, starting university, or transitioning to long commutes.</span>
                </li>
              </ul>
            </div>

            {/* Considerations Column */}
            <div className="bg-white p-8 lg:p-10 rounded-[32px] border border-border-main/30 shadow-sm hover:border-primary-dark/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-border-main/20 text-primary-text/40 font-black text-[0.8rem]">•</div>
                <div className="text-[1.1rem] font-black text-primary-text tracking-tight uppercase">Things To Consider</div>
              </div>
              <ul className="space-y-5 list-none p-0">
                <li className="flex items-start gap-4 text-[0.92rem] text-secondary-text font-semibold font-medium leading-relaxed">
                  <span className="text-border-main/40 font-black select-none mt-0.5 font-sans">•</span>
                  <span><strong className="text-primary-text font-semibold">Demanding Concentration:</strong> Expect 2 to 4 hours of active driving per day. This requires sustained focus, stamina, and standard coordination.</span>
                </li>
                <li className="flex items-start gap-4 text-[0.92rem] text-secondary-text font-semibold font-medium leading-relaxed">
                  <span className="text-border-main/40 font-black select-none mt-0.5 font-sans">•</span>
                  <span><strong className="text-primary-text font-semibold">Theory Preparation First:</strong> It is highly recommended to have passed your theory test before beginning so we can schedule your practical test for the core completion date.</span>
                </li>
                <li className="flex items-start gap-4 text-[0.92rem] text-secondary-text font-semibold font-medium leading-relaxed">
                  <span className="text-border-main/40 font-black select-none mt-0.5 font-sans">•</span>
                  <span><strong className="text-primary-text font-semibold">Initial Upfront Support:</strong> Because the course is concentrated, it represents a single upfront investment rather than small payments distributed over months.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Instructor Perspective Box below (Modern, Authentic, Not Advertisement) */}
          <div className="max-w-[1100px] mx-auto">
            <div className="bg-white border border-border-main/30 rounded-[32px] p-6 sm:p-8 hover:border-primary-dark/15 hover:shadow-lg hover:shadow-primary-dark/5 transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="flex-1">
                <div className="text-[0.7rem] font-black text-primary-dark/60 mb-2 tracking-[0.2em] uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-dark"></span>
                  Instructor Perspective
                </div>
                <p className="text-[#4B5563] text-[0.96rem] leading-relaxed font-semibold font-medium italic">
                  "Intensive courses are excellent for developing muscle memory on complex <a href='/articles/york-driving-test-routes-common-mistakes' className='font-bold text-primary-text hover:underline underline-offset-4 decoration-primary-dark/30 transition-all'>York test routes</a>. My advice? Don't treat it as a 'crash course'. Treat it as an immersion into safe driving. Focus on the learning, not just the date of the test."
                </p>
              </div>
              <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-border-main/10 pt-4 md:pt-0 md:pl-6 shrink-0 min-w-[220px]">
                <div className="w-10 h-10 rounded-full bg-primary-dark/5 flex items-center justify-center font-black text-primary-dark text-[0.72rem]">YDL</div>
                <div>
                  <p className="text-[0.78rem] font-black text-primary-text uppercase tracking-wider">York Driving Lesson Team</p>
                  <p className="text-[0.65rem] font-bold text-secondary-text/60 uppercase tracking-widest">Lead Instructor Note</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: HOW OUR INTENSIVE COURSE IS STRUCTURED (Interactive Progression Stages) */}
      <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 border-b border-border-main/10">
        <div className="max-w-[1240px] mx-auto animate-fade-in">
          <div className="text-center max-w-[1020px] mx-auto mb-8">
            <h2 className="text-[2rem] md:text-[2.6rem] font-black text-primary-text mb-2 leading-none tracking-tighter uppercase">
              How the Intensive Driving Course <span className="italic font-extrabold text-primary-text/30">Works in York</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[1.05rem] leading-relaxed font-semibold font-medium mx-auto max-w-[1000px]">
              Our intensive driving courses in York are structured so each stage builds on the last. Progress is steady and nothing gets rushed.
            </p>
          </div>

          {/* INTERACTIVE PROGRESSION HOOK */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1100px] mx-auto">
            {/* Left Column: Interactive Tab Buttons */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-none snap-x touch-pan-x">
              {[
                { num: "01", title: "Assessment & Planning" },
                { num: "02", title: "Core Skill Consolidation" },
                { num: "03", title: "High-Intensity Exposure" },
                { num: "04", title: "Test Route Familiarisation" },
                { num: "05", title: "Mock Test & Preparation" }
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
                      <span className="text-primary-dark font-black text-[0.68rem] uppercase tracking-[0.2em] mb-1 block">Course Progression Stage</span>
                      <h3 className="text-[1.3rem] sm:text-[1.5rem] font-black text-primary-text uppercase tracking-tight leading-snug">
                        {[
                          "Assessment & Planning",
                          "Core Skill Consolidation",
                          "High-Intensity Road Exposure",
                          "Test Route Familiarisation",
                          "Mock Test & Final Preparation"
                        ][activeStage]}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-secondary-text text-[0.96rem] sm:text-[1.02rem] leading-relaxed font-semibold font-medium">
                    {[
                      "We start with a practical assessment to see where you are and what needs work. From there we put together a clear plan that focuses on the areas that will make the biggest difference.",
                      "We work through the fundamentals — vehicle control, junction management, and hazard perception. The concentrated hours mean these skills get properly embedded before moving on to more complex road situations.",
                      "Significant time is spent on York's busier routes, including the inner ring road and multi-lane roundabouts. This phase develops your ability to manage high traffic volumes and varied speed limits with composure.",
                      "We spend focused time on the specific areas and routes used by the York test centre. This isn't about memorising routes, but about being comfortable with the specific challenges examiners use to assess your road awareness.",
                      "Your course ends with full mock driving tests under real exam conditions, marked to DVSA standards. You go into your York driving test knowing exactly where you stand."
                    ][activeStage]}
                  </p>
                  
                  <div className="pt-4 border-t border-border-main/10">
                    <span className="text-primary-text font-black text-[0.72rem] uppercase tracking-[0.15em] mb-3 block">Skills We Focus On In This Stage:</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        [
                          "Assessment of Current Control Levels",
                          "Clear Schedule & Hour Estimation",
                          "Identified Habit Mitigation Plans",
                          "Practical Test Date Coordination"
                        ],
                        [
                          "Steering & Vehicle Setup",
                          "Proper Mirror-Signal-Manoeuvre Work",
                          "Core Manoeuvring & Control Details",
                          "Smooth Shifting or Course Adjustments"
                        ],
                        [
                          "Clifton Moor Roundabout Navigation",
                          "A1237 Ring Road Speed Management",
                          "Handling Busy Multi-Lane Junctions",
                          "Defensive Tactics for High Traffic Areas"
                        ],
                        [
                          "Familiarisation with York Test Centre Lanes",
                          "Complex Urban Streets (e.g. Gillygate)",
                          "Examiner Focus Zones & Tricky Routes",
                          "Practical Spot Testing of Common Habits"
                        ],
                        [
                          "Full 40-Minute Mock Exam Dry-Runs",
                          "Detailed DVSA Marking Fault Breakdown",
                          "Calm Mindset & Nerve Reduction Drills",
                          "Final Control & Skill Refinements"
                        ]
                      ][activeStage].map((point, index) => (
                        <li key={`focus-${index}`} className="flex items-start gap-2.5 text-[0.85rem] sm:text-[0.9rem] text-secondary-text font-semibold font-medium">
                          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary-dark/5 text-primary-dark font-black text-[0.7rem] shrink-0 mt-0.5">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                
                {/* Help hint */}
                <div className="mt-8 pt-4 border-t border-border-main/5 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-secondary-text/50 font-medium text-[0.78rem]">DVSA-aligned client-centred intensive coaching</span>
                  <a href="#enquiry-form" className="text-primary-dark hover:underline font-black text-[0.78rem] uppercase tracking-wider flex items-center gap-1 no-underline">
                    Enquire about this course stage <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: EXPLORE OUR OTHER DRIVING COURSES (Simplified) */}
      <section className="bg-soft-bg py-8 lg:py-12 px-6 sm:px-10 border-y border-border-main/10 shadow-[inset_0_4px_12px_rgba(0,0,0,0.01)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[1020px] mx-auto mb-8">
            <h2 className="text-[2rem] md:text-[2.6rem] font-black text-[#1F2937] mb-2 leading-none tracking-tighter uppercase">
              Explore Other <span className="italic font-extrabold text-primary-text/30">Driving Courses in York.</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[1.05rem] leading-relaxed font-semibold font-medium mx-auto max-w-[1000px]">
              Intensive courses aren't right for everyone. If you need more time, want a specific test focus, or prefer a different style of learning in York, these courses cover that.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
            {[
              {
                title: "Automatic Driving Lessons",
                desc: "Doing your intensive course in an automatic? Removing the gears lets you focus purely on passing in York's test routes.",
                link: "/automatic-driving-lessons"
              },
              {
                title: "Manual Driving Lessons",
                desc: "Prefer a weekly pace? Manual driving lessons in York let you build up gradually without the commitment of a full intensive block.",
                link: "/manual-driving-lessons"
              },
              {
                title: "Mock Driving Tests",
                desc: "Near the end of your intensive course? A mock test in York confirms you're ready before you sit the real DVSA test.",
                link: "/mock-driving-tests"
              }
            ].map((course, index) => (
              <a 
                key={`intensive-other-${index}`} 
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

      {/* SECTION 9: Intensive Driving Course FAQs */}
      <section className="bg-white py-8 px-6 sm:px-10 border-t border-border-main/10 animate-fade-in" id="faq">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-8 lg:mb-10">
            <h2 className="text-[2rem] md:text-[2.6rem] font-black text-[#1F2937] mb-2 tracking-tighter uppercase leading-none">Intensive <span className="italic font-extrabold text-primary-text/30">Driving Course FAQs.</span></h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-[#4B5563] text-[1.1rem] font-[#4B5563] font-semibold font-medium opacity-80">Everything you need to know about our intensive driving lessons York packages.</p>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CTA BAR */}
      <section className="bg-primary-dark border-t border-white/10 border-b border-b-white/5 py-6 lg:py-7 px-6 sm:px-10">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <h2 className="text-[1.05rem] md:text-[1.2rem] font-black text-white leading-tight tracking-tighter uppercase text-center sm:text-left">
            Start Your Intensive <span className="italic font-extrabold text-white/40">Driving Journey in York.</span>
          </h2>
          <div className="flex items-center gap-3 shrink-0">
            <a href="/york" className="bg-white text-primary-dark px-7 py-3 rounded-full text-[0.78rem] font-black uppercase tracking-widest no-underline transition-all duration-200 hover:-translate-y-px hover:shadow-lg">
              York
            </a>
            <a href="#enquiry-form" className="bg-transparent text-white border-2 border-white/25 px-7 py-3 rounded-full text-[0.78rem] font-black uppercase tracking-widest no-underline transition-all duration-200 hover:border-white/70 hover:bg-white/5">
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
