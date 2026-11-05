import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Map, Navigation, Clock, MapPin, Flag, Compass, MapPinned, School, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import EnquiryForm from '../EnquiryForm';
import FAQ from '../FAQ';
import Header from '../Header';
import Footer from '../Footer';
import YorkAreaFinder from '../YorkAreaFinder';
import RelatedLinks from '../RelatedLinks';
import LocalGuide from '../LocalGuide';

export default function DrivingLessonsAcombYork() {
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
  const faqs = [
    { 
      question: "Do you offer driving lessons in Acomb, York?", 
      answer: "Our driving instructors provide lessons throughout Acomb and the surrounding YO24 area. We cover local roads from residential streets to busier commuter routes, helping you build confidence in every environment."
    },
    { 
      question: "Can I learn in an automatic car in Acomb?", 
      answer: "Yes, we offer [automatic driving lessons](/automatic-driving-lessons/) in Acomb for those who prefer learning without a clutch and gear stick. This allows you to focus on your road awareness and navigation around York."
    },
    { 
      question: "Do you offer manual driving lessons in Acomb?", 
      answer: "We provide structured [manual driving lessons](/manual-driving-lessons/) across Acomb, perfect for learners who want full control over their gear changes. We'll help you get the feel for the clutch in quieter spots near Holgate before moving to busier junctions."
    },
    { 
      question: "Are lessons suitable for complete beginners?", 
      answer: "Absolutely. Many Acomb learners start as total beginners. We begin in calm spots around Foxwood or quiet residential areas, gradually moving onto busier York test preparation routes as your skills develop."
    },
    { 
      question: "Do you help nervous learners build confidence?", 
      answer: "Building confidence is at the heart of our teaching. We provide a calm, supportive atmosphere where you can learn at your own pace, helping you manage pressure on busier York junctions and roundabouts."
    },
    { 
      question: "Can I practise on York test-style routes during lessons?", 
      answer: "While we don't follow set DVSA routes, we incorporate real road conditions similar to those found on test day. This includes practising around Clifton, Rawcliffe, and other common areas to build your practical readiness."
    },
    { 
      question: "Do you offer intensive driving courses in Acomb?", 
      answer: "Yes, our [intensive driving courses](/intensive-driving-courses/) are available for learners in Acomb who want to reach test standard more quickly. Each course is built around your current experience and goals."
    },
    { 
      question: "Can I take mock driving tests before my real test?", 
      answer: "We highly recommend [mock driving tests](/mock-driving-tests/). These sessions simulate real test conditions using local routes, helping you stay calm and focused while identifying any areas that need extra attention before the actual day." 
    },
    { 
      question: "Can I choose between weekly and intensive lessons?", 
      answer: "We offer flexible scheduling to suit your needs. You can pick consistent weekly sessions or opt for a concentrated intensive schedule if you're looking to pass your test in York sooner."
    },
    {
      question: "Do you offer evening or weekend driving lessons?",
      answer: "We understand that learners have busy schedules with work or college. We can often accommodate lessons in the evenings or at weekends, helping you experience driving in different lighting conditions on Acomb Road and the A59."
    },
    { 
      question: "Can lessons include roundabout and dual carriageway practice?", 
      answer: "Progressing to larger roundabouts and faster roads is a vital part of your training. We'll practise lane positioning and observation on the various approaches to the York ring road once you're comfortable."
    },
    { 
      question: "Where do most learners practise around Acomb and York?", 
      answer: "Beginners often start in quieter residential pockets of YO24. As you improve, we'll head towards busier spots like the A59 approaches and junctions connecting Acomb to the wider York area."
    },
    { 
      question: "Do you offer refresher driving lessons in York?", 
      answer: "If you already have your licence but haven't driven for a while, our [refresher lessons](/refresher-lessons/) are ideal. We'll help you regain your confidence on local roads near Holgate and Acomb."
    },
    {
      question: "How can I book driving lessons in Acomb?",
      answer: "The simplest way to book is via our online enquiry form. We’ll discuss your goals and current experience to match you with a local instructor covering Acomb and the surrounding YO24 roads."
    }
  ];

  return (
    <div className="min-h-screen bg-soft-bg font-sans">
      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 px-4 sm:px-[5%] lg:px-[8%] bg-primary-dark overflow-hidden" id="home">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[linear-gradient(135deg,transparent_0%,rgba(212,175,55,0.03)_100%)] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-dark/40 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-[2.6rem] sm:text-[3.2rem] lg:text-[4.4rem] font-[900] text-white mb-5 leading-[0.95] tracking-tighter uppercase">
              Driving Lessons in <span className="italic font-extrabold text-white/50">Acomb</span>, York
            </h1>
            <p className="text-[1.1rem] sm:text-[1.25rem] text-hero-paragraph leading-relaxed mb-8 max-w-[580px] font-medium opacity-80">
              Wide residential loops around Acomb are perfect for your first lessons before you move onto the busier commuter routes heading towards the city centre.
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

      {/* SECTION 1: WHY LEARNERS CHOOSE US - FINAL REFINEMENT */}
      <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 overflow-hidden text-primary-text">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start md:items-center">
            
            {/* LEFT SIDE: Heading and Detailed Content */}
            <div className="lg:col-span-7">
              <h2 className="text-[1.6rem] md:text-[2.2rem] font-black text-primary-text mb-5 tracking-tighter uppercase leading-[1.1]">
                Driving Lessons in Acomb<br/>
                <span className="italic font-extrabold" style={{ color: '#8E969D' }}>Local York Knowledge That Builds Confidence</span>
              </h2>
              
              <div className="space-y-4 text-secondary-text text-[0.98rem] md:text-[1.05rem] leading-relaxed font-medium max-w-[640px]">
                <p>
                  Learning to drive in <strong className="font-bold text-primary-text">Acomb</strong> gives learners a useful mix of real York driving conditions, from quieter residential streets and parked-car situations to busier commuter routes, school-run traffic, roundabouts, and roads leading towards <strong className="font-bold text-primary-text">York city centre</strong> and the <strong className="font-bold text-primary-text">outer ring road</strong>.
                </p>
                <p>
                  Whether you choose <a href="/automatic-driving-lessons/" className="text-primary-dark font-bold no-underline hover:opacity-70 transition-opacity">automatic driving lessons</a> or <a href="/manual-driving-lessons/" className="text-primary-dark font-bold no-underline hover:opacity-70 transition-opacity">manual driving lessons</a>, lessons are built around confidence, observation, junction planning, lane positioning, speed control, and independent driving.
                </p>
                <p>
                  For learners getting close to test standard, <a href="/mock-driving-tests/" className="text-primary-dark font-bold no-underline hover:opacity-70 transition-opacity">mock driving test preparation</a> can help identify weak areas such as roundabouts, parking, manoeuvres, planning ahead, and staying calm under pressure. Practice is kept local and practical, with routes shaped around your pickup point, confidence level, and lesson type.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE: Premium Trust Box */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-soft-bg p-8 lg:p-10 rounded-[32px] border border-border-main/20 shadow-[0_10px_30px_rgba(0,0,0,0.015)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-dark/[0.02] rounded-full -mr-12 -mt-12"></div>
                
                <div className="text-[1.2rem] font-black text-primary-text mb-6 uppercase tracking-tighter leading-tight relative z-10">
                  Why Learners <br/>Choose Us in Acomb
                </div>
                
                <div className="space-y-3.5 relative z-10">
                  {[
                    "Calm, patient teaching for new and nervous learners",
                    "Automatic and manual lessons across Acomb and York",
                    "Real local road, junction, and roundabout practice",
                    "Lessons built around confidence, progress, and test readiness",
                    "Local Acomb routes matched to confidence level"
                  ].map((benefit, index) => (
                    <div key={`acomb-benefit-${index}`} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-dark/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark"></div>
                      </div>
                      <p className="text-secondary-text font-bold text-[0.88rem] leading-snug">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <LocalGuide path="/driving-lessons-acomb-york/" />


      {/* SECTION: BUILDING CONFIDENCE ON ACOMB ROADS */}
      <section className="bg-soft-bg py-10 lg:py-14 px-6 sm:px-10 border-y border-border-main/20">
        <div className="max-w-[940px] mx-auto">
          <h2 className="text-[1.6rem] md:text-[2rem] font-black text-primary-text mb-4 tracking-tighter uppercase leading-none text-center">
            Building Confidence on <span className="italic font-extrabold" style={{ color: '#8E969D' }}>Acomb Roads</span>
          </h2>
          
          <div className="space-y-4 text-secondary-text text-[1rem] md:text-[1.05rem] leading-relaxed font-medium text-left">
            <p>
              Tackling real York driving conditions is about more than basic car control. Around Acomb, learners can practise quieter residential streets, parked-car situations, busier commuter routes, school-run traffic, mini roundabouts, and roads leading towards York city centre and the outer ring road.
            </p>
            <p className="text-[0.95rem] font-medium text-primary-text/70 transition-colors">
              <span className="font-bold italic text-primary-text">The Challenge:</span> Managing lane positioning, observation, and staying calm as traffic flow changes around busier York junctions.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: LOCAL ROADS & JUNCTION PRACTICE */}
      <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 overflow-hidden">
        <div className="max-w-[1040px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-4 tracking-tighter uppercase leading-none">
              Local Roads & <span className="italic font-extrabold" style={{ color: '#8E969D' }}>Junction Practice</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="group bg-soft-bg px-8 pt-9 pb-8 rounded-[32px] border border-border-main/20 shadow-sm hover:shadow-2xl hover:border-primary-dark/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full cursor-default">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 border border-border-main/10 group-hover:bg-primary-dark/[0.04] transition-colors shadow-sm">
                <Map className="w-7 h-7 text-primary-dark" strokeWidth={2.5} />
              </div>
              <div className="text-[1rem] font-black text-primary-text mb-4 uppercase tracking-tight group-hover:text-primary-dark transition-colors">Residential & Training Roads</div>
              <p className="text-secondary-text text-[0.85rem] lg:text-[0.9rem] leading-relaxed font-medium mb-6 flex-grow">
                Practise on quieter Acomb streets with parked cars, meeting traffic, speed control, mirrors, and road positioning before moving onto busier York routes.
              </p>
              <div className="pt-4 border-t border-border-main/20">
                <span className="text-[0.68rem] font-black text-primary-text/85 uppercase tracking-[0.18em]">Local Road Practice</span>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="group bg-soft-bg px-8 pt-9 pb-8 rounded-[32px] border border-border-main/20 shadow-sm hover:shadow-2xl hover:border-primary-dark/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full cursor-default">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 border border-border-main/10 group-hover:bg-primary-dark/[0.04] transition-colors shadow-sm">
                <Navigation className="w-7 h-7 text-primary-dark" strokeWidth={2.5} />
              </div>
              <div className="text-[1rem] font-black text-primary-text mb-4 uppercase tracking-tight group-hover:text-primary-dark transition-colors">Roundabouts & Junctions</div>
              <p className="text-secondary-text text-[0.85rem] lg:text-[0.9rem] leading-relaxed font-medium mb-6 flex-grow">
                Build confidence with junction planning, mini roundabouts, lane discipline, and traffic flow around Acomb, Holgate, Foxwood, and routes towards York city centre.
              </p>
              <div className="pt-4 border-t border-border-main/20">
                <span className="text-[0.68rem] font-black text-primary-text/85 uppercase tracking-[0.18em]">Junction Confidence</span>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="group bg-soft-bg px-8 pt-9 pb-8 rounded-[32px] border border-border-main/20 shadow-sm hover:shadow-2xl hover:border-primary-dark/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full cursor-default">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 border border-border-main/10 group-hover:bg-primary-dark/[0.04] transition-colors shadow-sm">
                <Clock className="w-7 h-7 text-primary-dark" strokeWidth={2.5} />
              </div>
              <div className="text-[1rem] font-black text-primary-text mb-4 uppercase tracking-tight group-hover:text-primary-dark transition-colors">Traffic Flow & Route Planning</div>
              <p className="text-secondary-text text-[0.85rem] lg:text-[0.9rem] leading-relaxed font-medium mb-6 flex-grow">
                Lessons can include school-run traffic, changing speed limits, commuter roads, and outer ring road approaches so learners feel prepared for real York driving.
              </p>
              <div className="pt-4 border-t border-border-main/20">
                <span className="text-[0.68rem] font-black text-primary-text/85 uppercase tracking-[0.18em]">Real York Routes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: ACOMB PRACTICE ROUTES & LOCAL LANDMARKS */}
      <section className="bg-soft-bg py-10 lg:py-14 px-6 sm:px-10 border-y border-border-main/20 overflow-hidden">
        <div className="max-w-[1040px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text tracking-tighter uppercase leading-none">
              Acomb Practice Routes & <span className="italic font-extrabold" style={{ color: '#8E969D' }}>Local Landmarks</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="group bg-white px-8 pt-10 pb-10 rounded-[32px] border border-border-main/20 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-primary-dark/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full cursor-default items-center text-center">
              <div className="w-16 h-16 bg-soft-bg rounded-2xl flex items-center justify-center mb-8 border border-border-main/10 group-hover:bg-primary-dark/[0.05] transition-colors shadow-sm">
                <Compass className="w-8 h-8 text-primary-dark" strokeWidth={2.5} />
              </div>
              <div className="text-[1.05rem] font-black text-primary-text mb-4 uppercase tracking-tight group-hover:text-primary-dark transition-colors">Key Practice Routes</div>
              <p className="text-secondary-text text-[0.85rem] lg:text-[0.9rem] leading-relaxed font-medium flex-grow">
                Lessons regularly cover routes around Acomb Road, Boroughbridge Road, York city centre approaches, and outer ring road connections to help learners build confidence with lane positioning, changing traffic flow, and real York driving conditions.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="group bg-white px-8 pt-10 pb-10 rounded-[32px] border border-border-main/20 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-primary-dark/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full cursor-default items-center text-center">
              <div className="w-16 h-16 bg-soft-bg rounded-2xl flex items-center justify-center mb-8 border border-border-main/10 group-hover:bg-primary-dark/[0.05] transition-colors shadow-sm">
                <MapPinned className="w-8 h-8 text-primary-dark" strokeWidth={2.5} />
              </div>
              <div className="text-[1.05rem] font-black text-primary-text mb-4 uppercase tracking-tight group-hover:text-primary-dark transition-colors">Local Landmarks & Navigation</div>
              <p className="text-secondary-text text-[0.85rem] lg:text-[0.9rem] leading-relaxed font-medium flex-grow">
                Learners practise around familiar York locations including Holgate, Foxwood, Acomb shops, local schools, and busy junction areas to improve observations, route planning, and independent driving confidence.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="group bg-white px-8 pt-10 pb-10 rounded-[32px] border border-border-main/20 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-primary-dark/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full cursor-default items-center text-center">
              <div className="w-16 h-16 bg-soft-bg rounded-2xl flex items-center justify-center mb-8 border border-border-main/10 group-hover:bg-primary-dark/[0.05] transition-colors shadow-sm">
                <School className="w-8 h-8 text-primary-dark" strokeWidth={2.5} />
              </div>
              <div className="text-[1.05rem] font-black text-primary-text mb-4 uppercase tracking-tight group-hover:text-primary-dark transition-colors">University & Daily Travel Routes</div>
              <p className="text-secondary-text text-[0.85rem] lg:text-[0.9rem] leading-relaxed font-medium flex-grow">
                Many lessons include routes linked to the University of York, commuting roads, student areas, pickup points, and everyday York traffic to help learners prepare for independent daily driving across the city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: RECENT PASSES – YORK */}
      <section className="bg-white py-10 lg:py-12 px-6 sm:px-10 overflow-hidden border-b border-border-main/10">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="mb-10">
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-3 tracking-tighter uppercase leading-none">
              Recent Passes – <span className="italic font-extrabold" style={{ color: '#8E969D' }}>York</span>
            </h2>
            <p className="text-secondary-text text-[0.85rem] md:text-[0.92rem] leading-relaxed font-medium max-w-[600px] mx-auto">
              Real learners. Real results. Recent driving test passes across York and surrounding areas.
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
                    key={`acomb-pass-${pass.id}`}
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
                  key={`acomb-pass-dot-${pass.id}`}
                  onClick={() => setCurrentPassIndex(i)}
                  aria-label={`Go to pass ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPassIndex === i ? 'bg-primary-dark w-4' : 'bg-primary-dark/20'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: INTENSIVE COURSES & MOCK TESTS */}
      <section className="bg-primary-dark py-10 lg:py-14 px-6 sm:px-10 overflow-hidden relative border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,transparent_100%)] pointer-events-none"></div>
        <div className="max-w-[1100px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Side: Content */}
            <div>
              <h2 className="text-[1.8rem] md:text-[1.9rem] font-black text-white mb-6 tracking-tighter uppercase leading-none">
                Intensive Courses & <span className="italic font-extrabold" style={{ color: '#8E969D' }}>Mock Driving Tests</span>
              </h2>
              <div className="w-16 h-1 bg-white/20 mb-6"></div>
              
              <div className="space-y-6 text-hero-paragraph/90 text-[0.98rem] md:text-[1.05rem] leading-relaxed font-medium">
                <p>
                  Our <a href="/intensive-driving-courses/" className="text-white font-black underline decoration-white/20 hover:decoration-white transition-all">intensive driving courses</a> in Acomb are designed for learners who want to progress at a faster pace while building real confidence in the <span className="text-white font-black">YO24</span> area. Lessons cover a mix of local Acomb streets, York city centre routes, busy roundabouts, and outer ring road approaches so you are prepared for realistic driving conditions.
                </p>
                <p>
                  We also provide <a href="/mock-driving-tests/" className="text-white font-black underline decoration-white/20 hover:decoration-white transition-all">mock driving tests</a> across York to help you experience test conditions before the big day. These sessions focus on independent driving, junction planning, and observations, helping you stay calm and focused while navigating familiar York test routes.
                </p>
              </div>
            </div>

            {/* Right Side: Feature Card */}
            <div className="bg-white/[0.03] backdrop-blur-sm px-8 py-10 rounded-[32px] border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700"></div>
              
              <div className="text-[0.95rem] md:text-[1.02rem] font-black text-white mb-8 uppercase tracking-tighter leading-tight relative z-10">
                Why learners choose intensive<br/>lessons in Acomb
              </div>
              
              <div className="space-y-3.5 relative z-10">
                {[
                  "Structured lessons around your current level",
                  "Practice on real York driving conditions",
                  "Automatic and manual lesson options",
                  "Support with confidence before test day"
                ].map((item, index) => (
                  <div key={`acomb-intensive-feature-${index}`} className="flex items-center gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-white/70 font-bold text-[0.82rem] md:text-[0.85rem] uppercase tracking-wide leading-tight">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: MOCK DRIVING TESTS & TEST PREPARATION IN ACOMB */}
    <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 overflow-hidden border-b border-border-main/10">
        <div className="max-w-[1040px] mx-auto lg:px-24">
          <div className="max-w-[640px]">
            <h2 className="text-[1.5rem] md:text-[1.8rem] font-black text-primary-text mb-4 tracking-tighter uppercase leading-none text-left">
              Mock Driving Tests & <span className="italic font-extrabold" style={{ color: '#8E969D' }}>Test Preparation</span> in Acomb
            </h2>
            <div className="w-14 h-1 bg-primary-dark/10 mb-6"></div>
            
            <p className="text-secondary-text text-[0.9rem] md:text-[0.95rem] leading-relaxed font-medium mb-6">
              Preparing for your test under realistic conditions is the best way to calm those nerves. In Acomb, we’ll run through the busier junctions near the shops and the A59 approaches, simulating the exact pressure of the final exam so you can sharpen your junction planning and independent driving routines.
            </p>

            <div className="flex flex-col gap-y-3 mb-8 text-left">
              {[
                "Realistic simulation of Acomb residential and urban routes",
                "Targeted feedback on A59 approach lane discipline",
                "Honest assessment of spatial awareness in busy shopping zones"
              ].map((point, index) => (
                <div key={`acomb-mock-point-${index}`} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-soft-bg flex items-center justify-center shrink-0 border border-border-main/20">
                    <Check className="w-3 h-3 text-primary-dark" strokeWidth={3} />
                  </div>
                  <span className="text-[0.75rem] font-black text-primary-text uppercase tracking-wide leading-tight">{point}</span>
                </div>
              ))}
            </div>

            <a href="/mock-driving-tests/" className="inline-block bg-primary-dark text-white px-5 py-3 md:px-8 md:py-3.5 rounded-full text-[0.7rem] xs:text-[0.74rem] md:text-[0.78rem] font-black uppercase tracking-widest no-underline transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 whitespace-nowrap">
              Explore Mock Test Preparation
            </a>
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
                Independent feedback reflects our supportive learning environment and structured approach to both automatic and manual lessons, built around real learner experiences across York.
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

      {/* SECTION 8: DRIVING LESSONS AROUND ACOMB, YORK */}
      <section className="bg-white py-10 lg:py-12 px-6 sm:px-10 border-b border-border-main/10">
        <div className="max-w-[1040px] mx-auto text-center">
          <h2 className="text-[1.8rem] md:text-[2.1rem] font-black text-primary-text mb-3 tracking-tighter uppercase leading-none">
            Driving Lessons Around <span className="italic font-extrabold" style={{ color: '#8E969D' }}>Acomb, York</span>
          </h2>
          <p className="text-secondary-text text-[0.85rem] md:text-[0.95rem] leading-relaxed font-medium max-w-[600px] mx-auto mb-6">
            Our driving lessons cover Acomb, YO24, and surrounding York areas with routes designed around real local driving conditions.
          </p>
          
          <div className="w-full h-[350px] md:h-[450px] bg-soft-bg rounded-[32px] border border-border-main/20 mb-6 overflow-hidden relative shadow-inner">
            <iframe title="Google Maps location" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18833.376510793!2d-1.149176317765113!3d53.95115206263447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487930f305f6e80b%3A0xc346ec0373ab9357!2sAcomb%2C%20York!5e0!3m2!1sen!2suk!4v1715108000000!5m2!1sen!2suk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.1] contrast-[1.05] brightness-[1.02]"
            ></iframe>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-y-4 max-w-[880px] mx-auto">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-primary-dark/60 shrink-0" />
              <p className="text-[0.78rem] font-bold text-primary-text uppercase tracking-wider text-left">
                Local routes across Acomb and surrounding York areas.
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-primary-dark/60 shrink-0" />
              <p className="text-[0.78rem] font-bold text-primary-text uppercase tracking-wider text-left">
                Real road experience designed around everyday driving.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 9: FAQ */}
      <section className="bg-soft-bg py-10 lg:py-14 px-6 sm:px-10 border-y border-border-main/10" id="faq">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-4 tracking-tighter uppercase leading-none">Acomb Driving Lesson <span className="italic font-extrabold" style={{ color: '#8E969D' }}>FAQs</span></h2>
            <p className="text-secondary-text text-[0.9rem] md:text-[0.95rem] leading-relaxed font-medium max-w-[600px] mx-auto">Helpful answers for learners starting driving lessons in Acomb and York.</p>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* SECTION 10: NEARBY AREAS */}
      <section className="bg-white py-8 lg:py-10 px-6 sm:px-10 border-b border-border-main/10">
        <div className="max-w-[1040px] mx-auto text-center">
          <h2 className="text-[1.4rem] md:text-[1.6rem] font-black text-primary-text mb-2 tracking-tighter uppercase leading-none">Nearby Areas <span className="italic font-extrabold" style={{ color: '#8E969D' }}>We Cover</span></h2>
          <div className="w-12 h-1 bg-primary-dark/10 mb-6 mx-auto"></div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {['Holgate', 'Dringhouses', 'Foxwood', 'Clifton', 'Rawcliffe', 'York City Centre'].map((area, index) => {
              const slug = area.toLowerCase().replace(/\s+/g, '-');
              const href = `/driving-lessons-${slug}${slug.includes('york') ? '' : '-york'}/`;
              return (
                <a 
                  key={`acomb-nearby-${index}`} 
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
            Start Your Driving Journey <span className="italic font-extrabold text-white/40">in Acomb.</span>
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

      <RelatedLinks path="/driving-lessons-acomb-york/" kind="area" />
      <Footer />
    </div>
  );
}
