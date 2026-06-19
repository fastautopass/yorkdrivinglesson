import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Flag, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import EnquiryForm from '../EnquiryForm';
import FAQ from '../FAQ';
import YorkAreaFinder from '../YorkAreaFinder';

export default function RefresherLessons() {
  const [currentPassIndex, setCurrentPassIndex] = useState(0);
  const [passOffset, setPassOffset] = useState(0);
  const passTrackRef = useRef<HTMLDivElement>(null);

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
      question: "How many refresher lessons will I need?", 
      answer: "Every driver is different. Some find that just 2-4 hours are enough to rebuild their confidence, while others prefer a longer course if they haven't driven for many years. We start with an assessment session to determine if you'd benefit most from [manual](/manual-driving-lessons) or [automatic refresher lessons](/automatic-driving-lessons), then suggest a plan that matches your pace and what you actually need to work on."
    },
    { 
      question: "Can I take just one refresher lesson?", 
      answer: "Absolutely. If you just want to focus on a specific skill like reverse parking or navigating a particular junction like the Hopgrove roundabout in [York](/york), a single 2-hour session might be all you need to feel confident again. We provide targeted support for any specific area of [York city driving](/york) you find challenging."
    },
    { 
      question: "Are refresher lessons good for nervous drivers?", 
      answer: "Yes, they are specifically designed for nervous drivers. Our instructors use a patient, zero-judgment approach to help you rebuild your confidence gradually. We create a calm, supportive environment where you always feel in control of the vehicle and the lesson pace, allowing you to overcome road anxiety without any pressure." 
    },
    { 
      question: "Do you offer automatic refresher lessons?", 
      answer: "Yes, we provide refresher lessons in both manual and automatic vehicles. Many drivers switching to [automatic driving lessons](/automatic-driving-lessons) find a refresher session helpful to get used to the different vehicle dynamics, especially when navigating stop-start traffic on York's inner ring road."
    },
    { 
      question: "Can refresher lessons help with motorway confidence?", 
      answer: "Yes. [Motorway training](/motorway-lessons) is one of the most common things people come back for. We cover high-speed merging, lane discipline, and overtaking on the A64, A1(M), and M62 in a dual-controlled car so you're never on your own."
    },
    { 
      question: "Are refresher lessons suitable after an accident?", 
      answer: "Returning to the road after an incident can be daunting. We provide a calm, supportive space to help you process the experience and rebuild your road confidence at a pace that feels safe for you. Our goal is to help you regain your technical control and emotional composure without any judgment or pressure." 
    },
    { 
      question: "Can I practise parking and manoeuvres?", 
      answer: "Yes. Whether it's parallel parking, bay parking, or general low-speed control, we work through it at your pace. We use real York locations like Vangarde Shopping Park and Clifton Moor so the practice directly applies to where you drive."
    },
    { 
      question: "Do refresher lessons help with anxiety?", 
      answer: "Yes. We work with drivers who have road anxiety. By breaking complex situations down into smaller steps and keeping the pace calm, we help you get back the confidence to drive again. Many people find this approach makes a bigger difference than they expected."
    },
    { 
      question: "Can you help me drive again after years off the road?", 
      answer: "We regularly help drivers who haven't been behind the wheel for 5, 10, or even 20 years. We start in quiet residential areas and gradually reintroduce more complex York road systems as your skills and confidence return. For those wanting a quicker return, we can also discuss [intensive driving course](/intensive-driving-courses) structures."
    },
    { 
      question: "Do you offer manual refresher lessons?", 
      answer: "Yes. We offer [manual refresher lessons](/manual-driving-lessons) for drivers who want to get back into gear changes, hill starts, and clutch control. All sessions take place on real York roads so you're practising in the environment you'll actually be driving in."
    },
    { 
      question: "Are refresher lessons suitable for elderly drivers?", 
      answer: "Yes. Many mature drivers find a short refresher course helpful to stay up-to-date with modern road signs, updated Highway Code regulations, and new traffic systems in York. Our supportive environment helps you remain a safe, confident driver for as long as possible."
    },
    { 
      question: "Can refresher lessons help with York city driving?", 
      answer: "York's historic inner ring road and one-way systems like Gillygate and Micklegate can be challenging. We'll guide you through these specific routes until you feel completely comfortable navigating the city independently. This is excellent preparation for handling busy urban traffic and complex roundabouts." 
    },
    { 
      question: "Can I focus on specific driving skills only?", 
      answer: "Yes. Refresher lessons are entirely client-led. If you only want to work on roundabouts, high-speed dual carriageways, or night driving, that's exactly what we'll focus on. Every minute of the lesson is shaped around your specific concerns and goals."
    },
    { 
      question: "Do refresher lessons include dual carriageways?", 
      answer: "Yes. We include the A64 and other York dual carriageways in refresher sessions where it's relevant. If you want to go further after your refresher, a [Pass Plus course](/pass-plus-course) covers motorways, rural roads, and night driving in one block."
    }
  ];

  return (
    <div className="min-h-screen bg-soft-bg font-sans">
      
      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-8 lg:pt-32 lg:pb-14 px-4 sm:px-8 lg:px-12 bg-primary-dark overflow-hidden" id="home">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[linear-gradient(135deg,transparent_0%,rgba(212,175,55,0.03)_100%)] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-dark/40 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[4.2rem] font-[900] text-white mb-6 leading-[0.95] tracking-tighter uppercase">
              Refresher <span className="italic font-extrabold text-white/50">Driving</span> Lessons in York
            </h1>
            <p className="text-[1rem] sm:text-[1.12rem] text-hero-paragraph leading-relaxed mb-8 max-w-[580px] font-medium opacity-80">
              Been off the road for a while? Our refresher driving lessons in York help you get your confidence back — no judgment, just driving at whatever pace works for you. Great if you've passed before but haven't driven in years.
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

      {/* NEW INTRO SECTION */}
      <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 border-b border-border-main/5 animate-fade-in">
        <div className="max-w-[850px] mx-auto text-center">
          <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-2 tracking-tighter uppercase leading-none">
            What Are <span className="italic font-extrabold text-primary-text/30">Refresher Driving Lessons?</span>
          </h2>
          <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
          <div className="space-y-4">
            <p className="text-secondary-text text-[1.1rem] leading-relaxed font-semibold">
              Our refresher driving lessons in York are designed for qualified drivers who want to rebuild confidence, sharpen specific skills, or return to the road after a break.
            </p>
            <p className="text-secondary-text text-[1.05rem] leading-[1.8] font-semibold font-medium opacity-80">
              Whether it's been a few months or many years, our sessions provide a patient, pressure-free environment built around what you need. We focus on modern road systems, <a href="/motorway-lessons" className="font-bold text-primary-text hover:underline underline-offset-4 decoration-primary-dark/30 transition-all">motorway confidence</a>, dual carriageway navigation, and parking support. Our goal is to help you overcome anxiety through gradual progression so you feel calm and truly in control on York's inner ring road and surrounding suburbs.
            </p>
          </div>
        </div>
      </section>

      {/* WHO ARE REFRESHER LESSONS IDEAL FOR? */}
      <section className="bg-soft-bg py-8 lg:py-12 px-6 sm:px-10 border-b border-border-main/5 shadow-[inset_0_-4px_12px_rgba(0,0,0,0.01)] hover:shadow-[inset_0_-4px_14px_rgba(0,0,0,0.015)] transition-all duration-300" id="overview">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[1020px] mx-auto mb-8">
            <h2 className="text-[1.8rem] md:text-[2.4rem] font-black text-primary-text mb-2 leading-none tracking-tighter uppercase">
              Who Are Refresher Driving Lessons <span className="italic font-extrabold text-primary-text/30">Ideal For?</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[1.05rem] leading-relaxed font-semibold font-medium mx-auto max-w-[700px]">
              Perfect for licensed drivers seeking a calm, structured reintroduction to safe driving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Drivers Returning After A Long Break", desc: "If you haven't driven for several years, we help you bridge the gap safely and re-familiarise yourself with controls in a supportive environment." },
              { title: "Nervous Motorway Drivers", desc: "Build high-speed confidence with calm, guided exposure to York's dual carriageways and the wider <a href='/motorway-lessons' class='font-bold text-primary-text hover:underline'>motorway corridors</a>." },
              { title: "Overseas Licence Holders", desc: "Adjusting to left-hand driving and UK regulations is easier with calm, supportive guidance on local York road systems." },
              { title: "Confidence After An Incident", desc: "A patient environment to help you move past minor collisions or knock-on effects after a near-miss with no-pressure tuition." },
              { title: "Drivers Returning After Anxiety", desc: "We focus on emotional safety, helping you regain control over driving-related stress in a calm and judgment-free setting." },
              { title: "New Residents Adjusting To York Roads", desc: "Navigate the unique ring roads and historic one-way systems of York, from Holgate to Clifton Moor, with local insight." }
            ].map((feature, index) => (
              <div key={`refresher-feature-${index}`} className="relative p-7 pb-10 group cursor-default bg-white border border-border-main/20 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-primary-dark/5">
                <div className="text-[1.05rem] font-black text-primary-text mb-3 tracking-tight uppercase leading-tight">{feature.title}</div>
                <p className="text-secondary-text text-[0.88rem] leading-relaxed font-medium opacity-80" dangerouslySetInnerHTML={{ __html: feature.desc }}></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT CAN WE WORK ON? */}
      <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 border-y border-border-main/5 animate-fade-in">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[1020px] mx-auto mb-8">
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-2 leading-none tracking-tighter uppercase">
              What Can We <span className="italic font-extrabold text-primary-text/30">Work On?</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[1.05rem] leading-relaxed font-semibold font-medium mx-auto max-w-[750px]">
              Refresher training is not rigid. We work collaboratively to target the aspects of driving that feel most challenging to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {[
              { title: "Roundabouts & Junctions", desc: "Lane selection and timing at York's outer ring road and busy junctions like the Hopgrove roundabout." },
              { title: "Motorway Driving", desc: "Building confidence with high-speed merging and planning on the A1(M) and M62 corridors." },
              { title: "Parking & Manoeuvres", desc: "Polishing parallel parking and bay parking in local York car parks or quiet residential areas like Acomb." },
              { title: "Lane Discipline", desc: "Understanding positioning on complex dual carriageways and historic city-centre one-way systems." },
              { title: "City Driving Confidence", desc: "Gaining comfort with York's narrow streets, pedestrian zones, and heavy inner-city traffic." },
              { title: "Confidence Rebuilding", desc: "Overcoming road anxiety through patient, gradual reintroduction to driving at your own pace." },
              { title: "Night Driving", desc: "Developing skills for visibility and glare management during York's darker winter commutes." },
              { title: "Dual Carriageways", desc: "Merging and forward planning on high-speed routes like the A64 bypass around York." }
            ].map((topic, index) => (
              <div key={`refresher-topic-${index}`} className="bg-soft-bg/30 border border-border-main/10 p-6 rounded-xl flex items-start gap-4 hover:border-primary-dark/10 transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mt-2 flex-shrink-0"></div>
                <div>
                  <div className="text-[1rem] font-black text-primary-text mb-1 tracking-tight uppercase leading-none">{topic.title}</div>
                  <p className="text-secondary-text text-[0.85rem] leading-relaxed font-medium opacity-75">{topic.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY YORK LEARNERS (Carbon Copy Reference) */}
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
                Reviews from real drivers who took refresher, automatic, and manual driving lessons across York.
              </p>
              <a href="https://uk.trustpilot.com/review/yorkdrivinglesson.co.uk" target="_blank" rel="noopener noreferrer" className="w-full bg-soft-bg text-primary-text border border-border-main/20 py-2.5 rounded-xl text-[0.72rem] font-black uppercase tracking-[0.15em] transition-all hover:bg-[#00b67a] hover:text-white hover:border-[#00b67a] shadow-sm">
                View Trustpilot Reviews
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT PASSES IN YORK (Carbon Copy Reference) */}
      <section className="bg-white py-10 lg:py-14 px-6 sm:px-10 border-b border-border-main/10 overflow-hidden">
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
                  <div key={`refresher-pass-${pass.id}`} className="min-w-full md:min-w-[calc(33.333%-16px)] shrink-0">
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
                  key={`refresher-pass-dot-${pass.id}`} 
                  onClick={() => setCurrentPassIndex(i)}
                  aria-label={`Go to pass ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPassIndex === i ? 'bg-primary-dark w-4' : 'bg-primary-dark/20'}`} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE OTHER COURSES */}
      <section className="bg-soft-bg py-8 lg:py-12 px-6 sm:px-10 border-b border-border-main/5 shadow-[inset_0_4px_12px_rgba(0,0,0,0.01)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[1020px] mx-auto mb-8">
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-2 tracking-tighter uppercase leading-none">
              Explore Other <span className="italic font-extrabold text-primary-text/30">Driving Courses in York.</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[0.95rem] font-medium opacity-60 max-w-[600px] mx-auto">Refresher lessons get you back on the road. Once you're comfortable again, one of these courses in York could be a good next step.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Motorway Driving Lessons", desc: "Many drivers returning to the road avoid motorways. Our motorway lessons in York ease you back onto faster roads at a pace that suits you.", link: "/motorway-lessons" },
              { title: "Automatic Driving Lessons", desc: "Switching to automatic after a break can make returning to driving much less stressful. We offer automatic lessons across York.", link: "/automatic-driving-lessons" },
              { title: "Pass Plus Course", desc: "Once you've refreshed the basics, Pass Plus in York takes you further — covering rural roads, dual carriageways, and night driving.", link: "/pass-plus-course" }
            ].map((course, index) => (
              <a key={`refresher-other-${index}`} href={course.link} className="group p-8 bg-white border border-border-main/15 rounded-2xl no-underline transition-all duration-300 hover:border-primary-dark/20 hover:shadow-xl hover:shadow-primary-dark/5 flex flex-col h-full">
                <div className="mb-4">
                  <div className="text-[1.1rem] font-black text-primary-text mb-3 tracking-tight uppercase group-hover:text-primary-dark transition-colors">{course.title}</div>
                  <p className="text-secondary-text text-[0.88rem] leading-relaxed font-semibold font-medium opacity-80">{course.desc}</p>
                </div>
                <div className="mt-auto pt-4 flex items-center gap-2 text-[0.7rem] font-black uppercase tracking-[0.2em] text-primary-text/40 group-hover:text-primary-dark transition-colors">
                  View Course <span>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 animate-fade-in" id="faq">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-8 lg:mb-10">
            <h2 className="text-[2rem] md:text-[2.6rem] font-black text-primary-text mb-2 tracking-tighter uppercase leading-none">
              Refresher <span className="italic font-extrabold text-primary-text/30">Lesson FAQs.</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[1.1rem] font-semibold font-medium opacity-70">Everything you need to know about getting back behind the wheel in York.</p>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CTA BAR */}
      <section className="bg-primary-dark border-t border-white/10 border-b border-b-white/5 py-6 lg:py-7 px-6 sm:px-10">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <h2 className="text-[1.05rem] md:text-[1.2rem] font-black text-white leading-tight tracking-tighter uppercase text-center sm:text-left">
            Ready To Get <span className="italic font-extrabold text-white/40">Back On The Road?</span>
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
