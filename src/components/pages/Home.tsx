import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useAnimation } from 'motion/react';
import Header from '../Header';
import Footer from '../Footer';
import EnquiryForm from '../EnquiryForm';
import FAQ from '../FAQ';
import { 
  ShieldCheck, 
  Car, 
  Star, 
  Clock, 
  Settings, 
  MapPin, 
  ClipboardCheck, 
  Navigation, 
  MessageSquareText, 
  Route, 
  CheckCircle2, 
  Flag, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  GraduationCap, 
  Building2, 
  Briefcase, 
  Moon, 
  Smile, 
  MapPinned,
  Search
} from 'lucide-react';

import YorkAreaFinder from '../YorkAreaFinder';
import RelatedLinks from '../RelatedLinks';
import { ADDRESS, MAP_URL, MAP_EMBED_URL } from '../../data/site';

export default function Home() {
  const [currentPassIndex, setCurrentPassIndex] = useState(0);
  const [passOffset, setPassOffset] = useState(0);
  const passTrackRef = useRef<HTMLDivElement>(null);
  const [currentTrustIndex, setCurrentTrustIndex] = useState(0);
  const [isTrustHovered, setIsTrustHovered] = useState(false);

  const recentPasses = Array.from({ length: 41 }, (_, i) => ({ id: i + 1, src: `/passes/thumbs/pass-${i + 1}.jpg`, alt: `York driving test pass certificate ${i + 1} — York Driving Lesson` })).filter(p => p.id !== 4);

  const trustCards = [
    { 
      id: 1, 
      title: "York university students", 
      desc: "Lessons planned around lectures, placements, and student schedules across York.",
      icon: <GraduationCap className="w-5 h-5" />
    },
    { 
      id: 2, 
      title: "Shift work & healthcare", 
      desc: "Flexible lesson times for learners working evenings, weekends, and rotating shifts.",
      icon: <Building2 className="w-5 h-5" />
    },
    { 
      id: 3, 
      title: "Commuters & professionals", 
      desc: "Driving lessons arranged around full-time jobs and busy weekday routines.",
      icon: <Briefcase className="w-5 h-5" />
    },
    { 
      id: 4, 
      title: "First-time York learners", 
      desc: "Structured lessons designed to build confidence steadily on local York roads.",
      icon: <Car className="w-5 h-5" />
    },
    { 
      id: 5, 
      title: "Evening & weekend lessons", 
      desc: "Flexible availability for learners with limited daytime availability.",
      icon: <Moon className="w-5 h-5" />
    },
    { 
      id: 6, 
      title: "York road experience", 
      desc: "Build confidence on roundabouts, junctions, residential roads and common York routes.",
      icon: <Route className="w-5 h-5" />
    },
    { 
      id: 7, 
      title: "Nervous or returning drivers", 
      desc: "Calm pacing for anxious learners or drivers returning after a break.",
      icon: <Smile className="w-5 h-5" />
    },
    { 
      id: 8, 
      title: "Automatic & manual lessons", 
      desc: "Choose the lesson type that best suits your confidence and driving goals.",
      icon: <Settings className="w-5 h-5" />
    }
  ];

  // Double the cards for infinite loop effect
  const displayTrustCards = [...trustCards, ...trustCards];

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

  const nextTrust = useCallback(() => {
    setCurrentTrustIndex((prev) => (prev + 1) % trustCards.length);
  }, [trustCards.length]);

  const prevTrust = () => {
    setCurrentTrustIndex((prev) => (prev - 1 + trustCards.length) % trustCards.length);
  };

  useEffect(() => {
    if (isTrustHovered) return;
    const timer = setInterval(() => {
      nextTrust();
    }, 3000);
    return () => clearInterval(timer);
  }, [isTrustHovered, nextTrust]);

  const faqs = [
    { 
      question: "Do you offer driving lessons across York?", 
      answer: "Yes, York Driving Lesson offers driving lessons [across York](/york/) and nearby areas. Lessons can include local residential roads, busier junctions, roundabouts, city routes, and common test-route areas." 
    },
    { 
      question: "Can I choose between automatic and manual lessons?", 
      answer: "Yes, learners can choose [automatic lessons](/automatic-driving-lessons/) or [manual lessons](/manual-driving-lessons/) depending on what suits their confidence, goals, and learning style. If you are unsure, you can compare both options before deciding." 
    },
    { 
      question: "Are lessons suitable for complete beginners?", 
      answer: "Yes, lessons can start from the basics, including moving off, stopping, steering, mirrors, road positioning, and early confidence-building on quieter York roads." 
    },
    { 
      question: "Can nervous learners take lessons?", 
      answer: "Yes, nervous learners are welcome. Lessons can move at a calm pace, with time spent on the areas that feel more difficult, such as roundabouts, junctions, parking, or independent driving. [Refresher lessons](/refresher-lessons/) are also available." 
    },
    { 
      question: "Do you offer mock driving tests in York?", 
      answer: "Yes, [mock driving tests](/mock-driving-tests/) are available to help learners experience realistic test-style driving before the real thing. Sessions cover routes near [Monks Cross Driving Test Centre](/monks-cross-driving-test-centre/), including independent driving, manoeuvres, junctions, roundabouts, and feedback afterwards."
    },
    { 
      question: "Can I have lessons around university, work, or shift patterns?", 
      answer: "Lesson availability can often be planned around university, college, work, shift patterns, and everyday routines. It is best to contact us early to discuss suitable times." 
    },
    { 
      question: "Do you cover York test routes?", 
      answer: "Lessons can include roads and situations commonly found around [York test-route areas](/york/), including near [Monks Cross Driving Test Centre](/monks-cross-driving-test-centre/), such as roundabouts, residential streets, junctions, traffic lights, and busier city routes."
    },
    { 
      question: "How do I know whether automatic or manual is better for me?", 
      answer: "Automatic lessons can feel simpler because there are no gears or clutch control, while manual lessons give you experience with gear changes and clutch control. The right choice depends on your confidence, goals, and what type of licence you want. Learn more on our [automatic](/automatic-driving-lessons/) and [manual](/manual-driving-lessons/) service pages." 
    },
    { 
      question: "Do you offer intensive driving courses in York?", 
      answer: "Yes, [intensive courses](/intensive-driving-courses/) may be available for learners who want more frequent lessons over a shorter period. Availability can depend on your current driving level and instructor schedule." 
    },
    { 
      question: "Can I take refresher lessons if I already have a licence?", 
      answer: "Yes, [refresher lessons](/refresher-lessons/) are suitable for drivers who already have a licence but want to rebuild confidence, practise parking, get used to York roads, or return to driving after a break." 
    },
    { 
      question: "Do you offer motorway lessons?", 
      answer: "Yes, [motorway lessons](/motorway-lessons/) can help drivers build confidence with faster roads, lane changes, joining and leaving slip roads, and safer planning at higher speeds." 
    },
    { 
      question: "What areas of York do you cover?", 
      answer: "York Driving Lesson covers learners across York and surrounding areas, including popular local areas listed in our [York Location Hub](/york/)." 
    },
    { 
      question: "How do I get started with lessons?", 
      answer: "You can get started by [contacting York Driving Lesson](#enquiry-form) with your location, availability, licence status, and whether you are looking for automatic or manual lessons." 
    },
    { 
      question: "Can I practise parking and manoeuvres during lessons?", 
      answer: "Yes, lessons can include parking, reversing, observations, control, positioning, and manoeuvres used in everyday driving and test preparation." 
    }
  ];

  const services = [
    { title: "Automatic Lessons", desc: "No gears, no stalling — just focus on the road. A popular choice for learners in York who want to keep things simple.", link: "/automatic-driving-lessons/" },
    { title: "Manual Lessons", desc: "Learn clutch control and gears on York's real roads. The most common licence type and the one that opens up more cars when you pass.", link: "/manual-driving-lessons/" },
    { title: "Intensive Courses", desc: "Want to pass sooner? Our intensive driving courses in York pack your lessons together so you make faster progress.", link: "/intensive-driving-courses/" },
    { title: "Refresher Lessons", desc: "Been off the road for a while? Get your confidence back with refresher driving lessons in York, at whatever pace suits you.", link: "/refresher-lessons/" },
    { title: "Motorway Lessons", desc: "Already passed? Get comfortable on faster roads, slip roads, and lane changes with motorway lessons near York.", link: "/motorway-lessons/" },
    { title: "Mock Driving Tests", desc: "Drive the real test routes in York before the big day. A mock test helps you know what to expect and go in feeling ready.", link: "/mock-driving-tests/" },
    { title: "Pass Plus Course", desc: "Freshly passed? The Pass Plus course covers motorways, rural roads, and night driving — and can help cut your insurance costs too.", link: "/pass-plus-course/" }
  ];

  return (
    <div className="min-h-screen bg-light-bg font-sans home-page">
      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-8 lg:pt-24 lg:pb-12 px-4 sm:px-8 overflow-hidden bg-primary-dark" id="home">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.06)_0%,transparent_55%)] pointer-events-none"></div>
        
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start lg:pt-8">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left lg:pr-4">
              
              <h1 className="text-[clamp(2.8rem,7vw,4.8rem)] font-[900] text-soft-off-white leading-[0.95] mb-6 tracking-tighter max-w-[800px] uppercase">
                Driving Lessons in York
              </h1>
              
              <p className="text-[1.1rem] md:text-[1.2rem] text-white-text/80 leading-relaxed max-w-[620px] mb-10 font-medium">
                Driving lessons in York built around you. We use real local roads, roundabouts, and test routes so by the time you sit your test, you're ready — not just hoping for the best.
              </p>
              
              {/* Premium Trust Section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-8 pt-8 border-t border-white/5 w-full max-w-[750px]">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left group cursor-default">
                  <div className="bg-white/5 p-3 rounded-2xl mb-4 transform transition-all group-hover:bg-white/10 group-hover:-translate-y-1.5 group-hover:shadow-[0_15px_30px_-10px_rgba(255,255,255,0.1)] duration-500 border border-white/5">
                    <ShieldCheck className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="text-[0.82rem] font-bold text-white-text/95 uppercase tracking-[0.18em] mb-1.5 transition-colors duration-300 group-hover:text-white">
                    DVSA Approved
                  </div>
                  <p className="text-[0.65rem] text-white-text/50 font-bold uppercase tracking-[0.08em]">
                    Qualified instructors
                  </p>
                </div>
                
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left group cursor-default">
                  <div className="bg-white/5 p-3 rounded-2xl mb-4 transform transition-all group-hover:bg-white/10 group-hover:-translate-y-1.5 group-hover:shadow-[0_15px_30px_-10px_rgba(255,255,255,0.1)] duration-500 border border-white/5">
                    <Car className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="text-[0.82rem] font-bold text-white-text/95 uppercase tracking-[0.18em] mb-1.5 transition-colors duration-300 group-hover:text-white">
                    Automatic & Manual
                  </div>
                  <p className="text-[0.65rem] text-white-text/50 font-bold uppercase tracking-[0.08em]">
                    Flexible options
                  </p>
                </div>
                
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left group cursor-default">
                  <div className="bg-white/5 p-3 rounded-2xl mb-4 transform transition-all group-hover:bg-white/10 group-hover:-translate-y-1.5 group-hover:shadow-[0_15px_30px_-10px_rgba(255,255,255,0.1)] duration-500 border border-white/5">
                    <Star className="w-6 h-6 text-[#F4B400] fill-[#F4B400]" />
                  </div>
                  <div className="text-[0.82rem] font-bold text-white-text/95 uppercase tracking-[0.18em] mb-1.5 transition-colors duration-300 group-hover:text-white">
                    5-Star Rated
                  </div>
                  <p className="text-[0.65rem] text-white-text/50 font-bold uppercase tracking-[0.08em]">
                    5.0 on Google · 10 reviews
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end lg:pt-14">
              <div className="w-full max-w-[580px] relative group">
                {/* Decorative background element for the form */}
                <div className="absolute -inset-6 bg-slate-navy/10 rounded-[40px] blur-3xl transform group-hover:scale-105 transition-transform duration-700 pointer-events-none"></div>
                
                <div className="relative transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)]">
                  <EnquiryForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* BRANDING SECTION: LESSONS THAT FIT AROUND YOU */}
      <section className="bg-white py-6 lg:py-10 px-6 sm:px-10 border-b border-border-main/40">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-7">
              <h2 className="text-[2rem] md:text-[2.8rem] font-black text-primary-text mb-6 leading-tight tracking-tighter uppercase max-w-[550px]">
                Driving lessons that fit <span className="text-secondary-text/40 font-extrabold italic">around you.</span>
              </h2>
              
              <div className="space-y-5 max-w-[580px]">
                <p className="text-[1.05rem] md:text-[1.1rem] text-secondary-text leading-relaxed font-medium">
                  Learning to drive should feel straightforward and manageable. At York Driving Lesson, we provide calm, structured <a href="/york/" className="text-primary-dark font-bold hover:underline">lessons across York</a> designed to help you build confidence at a steady pace.
                </p>
                <p className="text-[1.05rem] md:text-[1.1rem] text-secondary-text leading-relaxed font-medium">
                  Whether you’re learning around work, university, college, or everyday life, lessons are planned around your availability and experience level. Lessons cover local York roads, roundabouts, residential areas, and nearby test routes to help you gain real driving experience where it matters most.
                </p>
              </div>
            </div>

            {/* Right Column: Info Card */}
            <div className="lg:col-span-5">
              <div className="bg-soft-bg/50 border border-border-main/20 p-6 md:p-7 rounded-[32px] shadow-sm relative overflow-hidden group">
                <div className="text-[1.3rem] font-black text-primary-text mb-6 tracking-tighter uppercase leading-none relative z-10">
                  FLEXIBLE LESSONS. <br/>LOCAL ROADS.
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5 relative z-10">
                  <div className="flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-white border border-border-main/30 flex items-center justify-center shadow-sm text-primary-dark group-hover:bg-primary-dark group-hover:text-white transition-all duration-300">
                      <Clock className="w-4.5 h-4.5" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-[0.88rem] font-bold text-primary-text mb-1 tracking-tight">Flexible scheduling</div>
                      <p className="text-[0.78rem] text-secondary-text/80 leading-snug font-medium">Morning, evening, and weekend availability where possible.</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-white border border-border-main/30 flex items-center justify-center shadow-sm text-primary-dark group-hover:bg-primary-dark group-hover:text-white transition-all duration-300">
                      <Settings className="w-4.5 h-4.5" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-[0.88rem] font-bold text-primary-text mb-1 tracking-tight">Auto & manual</div>
                      <p className="text-[0.78rem] text-secondary-text/80 leading-snug font-medium">Choose the transmission that suits your confidence.</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-white border border-border-main/30 flex items-center justify-center shadow-sm text-primary-dark group-hover:bg-primary-dark group-hover:text-white transition-all duration-300">
                      <MapPin className="w-4.5 h-4.5" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-[0.88rem] font-bold text-primary-text mb-1 tracking-tight">York roads</div>
                      <p className="text-[0.78rem] text-secondary-text/80 leading-snug font-medium">Build experience on real local junctions and routes.</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-white border border-border-main/30 flex items-center justify-center shadow-sm text-primary-dark group-hover:bg-primary-dark group-hover:text-white transition-all duration-300">
                      <Car className="w-4.5 h-4.5" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-[0.88rem] font-bold text-primary-text mb-1 tracking-tight">Pickup available</div>
                      <p className="text-[0.78rem] text-secondary-text/80 leading-snug font-medium">Convenient collection across York areas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="bg-soft-bg pt-8 pb-10 lg:pt-12 lg:pb-14 px-6 sm:px-10 border-b border-border-main/40">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-8 lg:mb-10 text-center">
            <h2 className="text-[2.2rem] md:text-[2.8rem] font-black text-primary-text mb-4 tracking-tighter uppercase leading-[1]">
              Driving Lessons & Courses in York
            </h2>
            <div className="w-16 h-1.5 bg-primary-dark/10 mb-6 mx-auto"></div>
            <p className="text-secondary-text text-[1.05rem] md:text-[1.1rem] leading-relaxed max-w-[650px] font-medium mx-auto">
              Whether you're a total beginner or just need a bit of top-up, there's a driving lesson in York that fits where you're at.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {services.map((service) => (
              <a 
                key={`home-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`} 
                href={service.link.startsWith('#') ? '#' : service.link}
                onClick={service.link.startsWith('#') ? (e) => {
                  e.preventDefault();
                  const target = document.getElementById(service.link.substring(1));
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                } : undefined}
                className="group flex flex-col h-full bg-white border border-border-main/40 p-6 lg:p-7 rounded-[18px] no-underline transition-all duration-400 hover:border-[#1F2937] hover:shadow-xl hover:shadow-primary-dark/5 hover:-translate-y-1 hover:bg-[#F8FAFC]"
              >
                <div className="text-[1.1rem] font-extrabold text-primary-text mb-3 tracking-tighter uppercase group-hover:text-primary-dark transition-colors duration-300 leading-none">
                  {service.title}
                </div>
                <p className="text-[0.9rem] text-secondary-text leading-relaxed mb-6 font-medium">
                  {service.desc}
                </p>
                <div className="mt-auto flex items-center gap-2 text-primary-text text-[0.7rem] font-black tracking-[0.15em] uppercase transition-all duration-300 group-hover:text-primary-dark group-hover:gap-3">
                  <span>Learn More</span>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MOCK DRIVING TESTS SECTION */}
      <section className="bg-secondary-dark pt-12 pb-10 lg:pt-16 lg:pb-12 px-6 sm:px-10 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.01] skew-x-[-15deg] translate-x-1/4 pointer-events-none"></div>
        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-7">
              <div className="text-[0.6rem] font-black text-white/30 uppercase tracking-[0.4em] mb-3">
                Test Readiness
              </div>
              <h2 className="text-[2.2rem] md:text-[2.8rem] font-black text-white-text mb-4 leading-[1.05] tracking-tighter uppercase max-w-[440px]">
                Mock driving tests <br/>
                that feel like <span className="text-white/30 italic font-extrabold">the real thing.</span>
              </h2>
              
              <div className="space-y-4 max-w-[500px] mb-8">
                <p className="text-[1rem] md:text-[1.05rem] text-white-text/70 leading-relaxed font-medium">
                  Mock driving tests help you experience realistic driving test conditions before the real test day. Sessions cover local York roads and common test-route areas near <a href="/monks-cross-driving-test-centre/" className="text-white/90 underline hover:text-white">Monks Cross Driving Test Centre</a> to help you build confidence and prepare calmly.
                </p>
                <p className="text-[1rem] md:text-[1.05rem] text-white-text/70 leading-relaxed font-medium">
                  You’ll practise manoeuvres, independent driving, roundabouts, junctions, and real-world road situations with clear feedback afterwards.
                </p>
              </div>

              {/* Two-column bullets: Sentence case & refined weight */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-10 max-w-[500px]">
                {[
                  "Local York test routes",
                  "Independent driving practice",
                  "Manoeuvre preparation",
                  "Calm feedback after lessons"
                ].map((item) => (
                  <div key={`home-benefit-${item.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center gap-2.5 text-[0.85rem] font-semibold text-white-text/60 tracking-tight">
                    <div className="w-1 h-1 rounded-full bg-white/20 shrink-0"></div>
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 items-start">
                <p className="text-[0.72rem] font-bold text-white-text/30 uppercase tracking-widest">
                  Ready to try a realistic mock driving test?
                </p>
                <a href="/mock-driving-tests/" className="inline-block bg-white text-primary-dark px-10 py-4 rounded-xl text-[0.7rem] font-black uppercase tracking-[0.2em] shadow-lg hover:bg-white-text/90 hover:-translate-y-1 transition-all duration-300">
                  Mock Driving Tests
                </a>
              </div>
            </div>

            {/* Right Column: Checklist Card - Repositioned and refined */}
            <div className="lg:col-span-5 lg:pt-8">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-[32px] shadow-2xl group transition-all duration-500 hover:bg-white/[0.07] w-full max-w-[480px] mx-auto lg:ml-auto">
                <div className="text-[0.75rem] font-black text-white/40 mb-7 tracking-[0.15em] uppercase leading-none">
                  DVSA Test Preparation
                </div>
                
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-8.5 h-8.5 rounded-xl bg-white/5 flex items-center justify-center shrink-0 text-white/50 shadow-sm border border-white/5 group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
                      <Navigation className="w-4 h-4" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-[0.88rem] font-black text-white mb-0.5 uppercase tracking-tight">Independent driving</div>
                      <p className="text-[0.75rem] text-white/40 leading-relaxed font-medium">Sat nav & road sign practice</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8.5 h-8.5 rounded-xl bg-white/5 flex items-center justify-center shrink-0 text-white/50 shadow-sm border border-white/5 group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
                      <CheckCircle2 className="w-4 h-4" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-[0.88rem] font-black text-white mb-0.5 uppercase tracking-tight">Manoeuvres</div>
                      <p className="text-[0.75rem] text-white/40 leading-relaxed font-medium">Reverse bay park & parallel parking</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8.5 h-8.5 rounded-xl bg-white/5 flex items-center justify-center shrink-0 text-white/50 shadow-sm border border-white/5 group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
                      <Route className="w-4 h-4" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-[0.88rem] font-black text-white mb-0.5 uppercase tracking-tight">York road experience</div>
                      <p className="text-[0.75rem] text-white/40 leading-relaxed font-medium">Local routes, junctions & roundabouts</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8.5 h-8.5 rounded-xl bg-white/5 flex items-center justify-center shrink-0 text-white/50 shadow-sm border border-white/5 group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
                      <MessageSquareText className="w-4 h-4" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-[0.88rem] font-black text-white mb-0.5 uppercase tracking-tight">Feedback afterwards</div>
                      <p className="text-[0.75rem] text-white/40 leading-relaxed font-medium">Clear guidance after the drive</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-white/5">
                  <a href="/mock-driving-tests/" className="text-[0.7rem] font-bold text-white/30 uppercase tracking-[0.15em] no-underline hover:text-white transition-colors flex items-center gap-2 group/link">
                    Mock test checklist <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: RECENT PASSES – YORK */}
      <section className="bg-white pt-10 pb-8 lg:pt-14 lg:pb-10 px-6 sm:px-10 overflow-hidden border-b border-border-main/10">
        <div className="max-w-[1240px] mx-auto text-center">
          <div className="mb-10">
            <h2 className="text-[2.2rem] md:text-[2.8rem] font-black text-primary-text mb-4 tracking-tighter uppercase leading-none">
              RECENT PASSES – <span className="text-secondary-text/40 font-extrabold italic">YORK</span>
            </h2>
            <p className="text-secondary-text text-[1rem] md:text-[1.1rem] leading-relaxed font-medium max-w-[700px] mx-auto">
              Real learners. Real driving test passes across York and surrounding areas.
            </p>
          </div>

          <div className="relative group">
            {/* Navigation Handles */}
            <div className="absolute top-1/2 left-2 md:-left-12 -translate-y-1/2 z-20">
              <button
                type="button"
                onClick={prevPass}
                aria-label="Previous pass"
                className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-white border border-border-main/20 shadow-lg flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-300 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 right-2 md:-right-12 -translate-y-1/2 z-20">
              <button
                type="button"
                onClick={nextPass}
                aria-label="Next pass"
                className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-white border border-border-main/20 shadow-lg flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-300 cursor-pointer"
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
                    key={pass.id}
                    className="min-w-full md:min-w-[calc(33.333%-16px)] shrink-0"
                  >
                    <div className="aspect-[4/3.2] bg-soft-bg rounded-[32px] border border-border-main/10 overflow-hidden relative group/card shadow-sm hover:shadow-xl transition-all duration-500">
                      <img loading="lazy" decoding="async" width={360} height={480} src={pass.src} alt={pass.alt} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center gap-2 mt-8 md:hidden">
              {recentPasses.map((pass, i) => (
                <button 
                  key={`pass-dot-${pass.id}`}
                  onClick={() => setCurrentPassIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPassIndex === i ? 'bg-primary-dark w-4' : 'bg-primary-dark/20'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: TRUSTED BY YORK LEARNERS */}
      <section className="bg-soft-bg pt-8 pb-10 lg:pt-10 lg:pb-12 px-6 sm:px-10 overflow-hidden border-b border-border-main/10">
        <div className="max-w-[1040px] mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-[1.8rem] md:text-[2rem] font-black text-primary-text mb-4 tracking-tighter uppercase leading-none">
              Trusted by <span className="italic font-extrabold" style={{ color: '#8E969D' }}>York Learners</span>
            </h2>
            <p className="text-secondary-text text-[0.85rem] md:text-[0.95rem] leading-relaxed font-medium max-w-[600px] mx-auto">
              Verified Google and Trustpilot reviews from learners who chose York Driving Lesson.
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
                Learners share their progress in confidence, from first lessons on quieter York roads through to mock test preparation and passing their test.
              </p>
              <a href="https://share.google/9B75eIsjdJNEb4cRC" target="_blank" rel="noopener noreferrer" className="w-full bg-soft-bg text-primary-text border border-border-main/20 py-2.5 rounded-xl text-[0.72rem] font-black uppercase tracking-[0.15em] transition-all hover:bg-primary-dark hover:text-white hover:border-primary-dark shadow-sm no-underline">
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
                Independent feedback reflects our supportive learning environment and structured approach to both automatic and manual lessons, built around real learner experiences across York.
              </p>
              <a href="https://uk.trustpilot.com/review/yorkdrivinglesson.co.uk" target="_blank" rel="noopener noreferrer" className="w-full bg-soft-bg text-primary-text border border-border-main/20 py-2.5 rounded-xl text-[0.72rem] font-black uppercase tracking-[0.15em] transition-all hover:bg-[#00b67a] hover:text-white hover:border-[#00b67a] shadow-sm no-underline">
                View Trustpilot Reviews
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION: LEARNING ACROSS YORK */}
      <section 
        className="bg-white pt-4 pb-4 lg:pt-6 lg:pb-6 px-6 sm:px-10 overflow-hidden border-b border-border-main/10"
        onMouseEnter={() => setIsTrustHovered(true)}
        onMouseLeave={() => setIsTrustHovered(false)}
      >
        <div className="max-w-[1240px] mx-auto text-center">
          <div className="mb-3 lg:mb-4">
            <h2 className="text-[1.4rem] md:text-[1.8rem] font-black text-primary-text mb-1.5 tracking-tighter uppercase leading-none">
              LEARNING ACROSS <span className="text-secondary-text/40 font-extrabold italic">YORK</span>
            </h2>
            <p className="text-secondary-text text-[0.8rem] md:text-[0.9rem] leading-relaxed font-medium max-w-[500px] mx-auto">
              Supporting learners across York with lessons built around university life, shift work, commuting, and everyday schedules.
            </p>
          </div>

          <div className="relative group/carousel max-w-[900px] mx-auto">
            {/* Navigation Handles - Ultra-Subtle */}
            <div className="absolute top-1/2 -left-2 lg:-left-8 -translate-y-1/2 z-20 hidden md:block opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
              <button 
                type="button"
                onClick={prevTrust}
                aria-label="Previous core benefit"
                className="w-6 h-6 rounded-full bg-white border border-border-main/20 flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
              >
                <ChevronLeft className="w-3 h-3" />
              </button>
            </div>
            <div className="absolute top-1/2 -right-2 lg:-right-8 -translate-y-1/2 z-20 hidden md:block opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
              <button 
                type="button"
                onClick={nextTrust}
                aria-label="Next core benefit"
                className="w-6 h-6 rounded-full bg-white border border-border-main/20 flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
              >
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            {/* Carousel Container */}
            <div className="flex overflow-hidden">
              <motion.div 
                className="flex gap-4"
                animate={{ x: `calc(-${currentTrustIndex * 276}px)` }} // 260px (card) + 16px (gap)
                transition={{ duration: 1.2, ease: "easeInOut" }}
                style={{ 
                  display: 'flex',
                  touchAction: 'pan-y'
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_e, info) => {
                  if (info.offset.x > 50) prevTrust();
                  else if (info.offset.x < -50) nextTrust();
                }}
              >
                {displayTrustCards.map((card, idx) => (
                  <div 
                    key={`${card.id}-${idx}`}
                    className="w-[260px] shrink-0 h-[135px] md:h-[145px]"
                  >
                    <div className="bg-soft-bg h-full p-4 lg:p-4 rounded-[12px] border border-border-main/10 transition-all duration-500 hover:shadow-md hover:border-primary-dark/5 group/card text-left flex flex-col justify-start overflow-hidden">
                      <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center mb-2 border border-border-main/10 group-hover/card:bg-primary-dark/[0.04] transition-colors shadow-sm text-primary-dark">
                        {card.icon}
                      </div>
                      <div className="text-[0.75rem] font-bold text-primary-text mb-1 uppercase tracking-tight group-hover/card:text-primary-dark transition-colors leading-tight truncate">{card.title}</div>
                      <p className="text-secondary-text text-[0.68rem] leading-tight font-medium line-clamp-3">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center gap-1 mt-1 md:hidden">
              {trustCards.map((card, i) => (
                <button 
                  key={`trust-dot-${card.id}-${i}`}
                  onClick={() => setCurrentTrustIndex(i)}
                  className={`w-1 h-1 rounded-full transition-all duration-300 ${currentTrustIndex === i ? 'bg-primary-dark w-2' : 'bg-primary-dark/10'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: AUTOMATIC & MANUAL DRIVING LESSONS ACROSS YORK */}
      <section className="bg-soft-bg/60 py-10 lg:py-14 px-6 sm:px-10 border-b border-border-main/10">
        <div className="max-w-[1240px] mx-auto text-center">
          <div className="mb-8 lg:mb-10">
            <h2 className="text-[1.6rem] md:text-[2rem] font-black text-primary-text mb-4 tracking-tighter uppercase leading-none">
              AUTOMATIC & MANUAL DRIVING LESSONS ACROSS <span className="text-secondary-text/40 font-extrabold italic">YORK</span>
            </h2>
            <p className="text-secondary-text text-[0.9rem] md:text-[0.95rem] leading-relaxed font-medium max-w-[580px] mx-auto">
              Learning to drive in York means getting used to a mix of residential roads, busy junctions, roundabouts, and city traffic. At York Driving Lesson, <a href="/automatic-driving-lessons/" className="font-bold text-primary-dark hover:underline">automatic</a> and <a href="/manual-driving-lessons/" className="font-bold text-primary-dark hover:underline">manual</a> lessons are planned around your progress and the roads you’ll use most.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {[
              {
                title: "Choosing the right car type",
                desc: "Whether you prefer automatic or manual, lessons can be shaped around how confident you feel behind the wheel.",
                icon: <Settings className="w-5 h-5" />
              },
              {
                title: "Building confidence gradually",
                desc: "Start with quieter roads before moving towards busier junctions, roundabouts, and city driving.",
                icon: <CheckCircle2 className="w-5 h-5" />
              },
              {
                title: "Real York road practice",
                desc: "Gain experience on residential streets, local routes, traffic lights, meeting situations, and everyday road layouts.",
                icon: <MapPin className="w-5 h-5" />
              },
              {
                title: "Lessons around your routine",
                desc: "Plan lessons around work, university, college, shift patterns, or regular weekly availability.",
                icon: <Clock className="w-5 h-5" />
              },
              {
                title: "Support at your pace",
                desc: "Take time with the areas you find harder, from clutch control to parking, observations, or independent driving.",
                icon: <Check className="w-5 h-5" />
              },
              {
                title: "Preparing for test routes",
                desc: "Gain experience on the types of roads, junctions, and situations often found around York test-route areas.",
                icon: <Navigation className="w-5 h-5" />
              }
            ].map((block) => (
              <div 
                key={`home-feature-${block.title.toLowerCase().replace(/\s+/g, '-')}`} 
                className="bg-white p-5 rounded-[20px] border border-border-main/10 text-left flex flex-col h-full transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="w-9 h-9 bg-soft-bg/40 rounded-xl flex items-center justify-center mb-3 text-primary-dark border border-border-main/5">
                  {block.icon}
                </div>
                <div className="text-[0.88rem] font-bold text-primary-text mb-2 uppercase tracking-tight leading-tight">{block.title}</div>
                <p className="text-secondary-text text-[0.8rem] leading-relaxed font-medium">
                  {block.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-[700px] mx-auto">
            <p className="text-secondary-text text-[0.88rem] font-medium leading-relaxed mb-8">
              Our instructors help you practise the roads and routines that matter most in everyday driving. Whether starting from scratch or building confidence, lessons are shaped around steady progress on <a href="/york/" className="font-bold text-primary-dark hover:underline">York test-route areas</a>.
            </p>
            
            <div className="text-center">
              <p className="text-[0.8rem] md:text-[0.82rem] text-secondary-text font-medium mb-5">
                If you would like to discuss lesson options or current availability across York, feel free to contact us.
              </p>
              <a href="#enquiry-form" onClick={(e) => {
                e.preventDefault();
                document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
              }} className="inline-block bg-primary-dark text-white px-9 py-3.5 rounded-xl text-[0.7rem] font-black uppercase tracking-[0.2em] shadow-md hover:bg-primary-dark/95 transition-all">
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="bg-white pt-16 pb-12 lg:pt-16 lg:pb-14 px-6 sm:px-10">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-8 lg:mb-10">
            <h2 className="text-[2rem] md:text-[2.5rem] font-black text-primary-text mb-2 tracking-tighter uppercase leading-none">Common Questions About <span className="italic font-extrabold text-primary-text/30">Driving Lessons in York</span></h2>
            <p className="text-secondary-text text-[0.95rem] md:text-[1rem] font-medium">Straightforward answers about learning to drive in York.</p>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      <YorkAreaFinder />

      {/* FIND US */}
      <section className="bg-white py-10 lg:py-14 px-6 sm:px-10 border-t border-border-main/10" id="find-us">
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-8 items-center text-left">
          <div>
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-4 tracking-tighter uppercase leading-none">Find York Driving Lesson</h2>
            <address className="not-italic text-[1rem] text-secondary-text font-medium leading-relaxed mb-5">
              <span className="font-black text-primary-text">York Driving Lesson</span><br />
              {ADDRESS.street}<br />{ADDRESS.locality}, {ADDRESS.postcode}<br />
              <a href="tel:+447763999317" className="font-bold underline">07763 999317</a>
            </address>
            <p className="text-[0.95rem] text-secondary-text font-medium leading-relaxed mb-6">
              We teach learners across every part of York. Lessons usually start from your home, work or college, and you can see the <a href="/york/" className="font-bold underline">areas we cover</a> or send an enquiry for availability.
            </p>
            <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary-dark text-white px-7 py-3 rounded-full text-[0.78rem] font-black uppercase tracking-widest no-underline hover:bg-secondary-dark transition-colors">Get directions</a>
          </div>
          <div className="w-full h-[320px] bg-soft-bg rounded-[24px] border border-border-main/20 overflow-hidden shadow-inner">
            <iframe title="York Driving Lesson location on Google Maps" src={MAP_EMBED_URL} width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

      <RelatedLinks path="/" kind="info" />
      <Footer />
    </div>
  );
}
