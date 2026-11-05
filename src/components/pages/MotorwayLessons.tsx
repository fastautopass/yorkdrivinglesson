import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Flag, 
  Star, 
  Shield, 
  Zap, 
  TrendingUp, 
  Award, 
  Clock, 
  Navigation,
  Eye,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import EnquiryForm from '../EnquiryForm';
import FAQ from '../FAQ';
import YorkAreaFinder from '../YorkAreaFinder';
import RelatedLinks from '../RelatedLinks';

export default function MotorwayLessons() {
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
      question: "Are motorway lessons worth it?", 
      answer: "Absolutely. Motorways are the UK's safest but fastest roads. DVSA-qualified tuition helps you build confidence with high-speed observations, lane discipline, and safe merging—skills that significantly reduce stress and improve safety. Many students find this training a perfect stepping stone towards a full <a href='/pass-plus-course/' className='text-primary-dark hover:text-primary-dark/80 underline underline-offset-4 decoration-primary-dark/30 hover:decoration-primary-dark transition-all duration-200 font-bold'>Pass Plus course</a>."
    },
    { 
      question: "Can newly passed drivers take motorway lessons?", 
      answer: "Yes, we highly recommend it. Since the law changed, learners can drive on motorways with an instructor, but many wait until they pass. Taking lessons post-test helps you transition to independent high-speed driving safely. This is often the most effective form of <a href='/refresher-lessons/' className='text-primary-dark hover:text-primary-dark/80 underline underline-offset-4 decoration-primary-dark/30 hover:decoration-primary-dark transition-all duration-200 font-bold'>post-test refresher training</a> for new drivers." 
    },
    { 
      question: "Are motorway lessons available in automatic cars?", 
      answer: "Yes. We offer motorway tuition in both automatic and manual vehicles. Choosing our <a href='/automatic-driving-lessons/' className='text-primary-dark hover:text-primary-dark/80 underline underline-offset-4 decoration-primary-dark/30 hover:decoration-primary-dark transition-all duration-200 font-bold'>automatic driving lessons</a> can often make high-speed driving simpler as you can focus entirely on your positioning and observations without the distraction of gear changes on the A1(M)." 
    },
    { 
      question: "How many motorway lessons do I need?", 
      answer: "Most drivers find that a single 2 or 3-hour session is enough to cover the essentials and build baseline confidence. For more anxious drivers, a short course of 2-3 sessions allows for more gradual exposure to the M62 or M1. If you're on a tight schedule, we can also integrate these into our <a href='/intensive-driving-courses/' className='text-primary-dark hover:text-primary-dark/80 underline underline-offset-4 decoration-primary-dark/30 hover:decoration-primary-dark transition-all duration-200 font-bold'>intensive driving courses</a>." 
    },
    { 
      question: "Can we focus on confidence only?", 
      answer: "Yes. Motorway training is client-led. If you already have the technical skills but feel 'blocked' by anxiety, we focus on psychological reassurance, calm exposure, and confidence-building techniques. Our <a href='/refresher-lessons/' className='text-primary-dark hover:text-primary-dark/80 underline underline-offset-4 decoration-primary-dark/30 hover:decoration-primary-dark transition-all duration-200 font-bold'>nervous driver support</a> is ideal for those who have avoided high-speed roads for years." 
    },
    { 
      question: "Do you cover dual carriageways?", 
      answer: "Yes. High-speed dual carriageways like the A64 are often the starting point for motorway training around York. They share many similarities with motorways and are excellent for practising joining and leaving at speed before we move onto the more complex A1(M) corridor."
    },
    { 
      question: "Are motorway lessons good for nervous drivers?", 
      answer: "They are specifically designed for nervous drivers. We use a patient, zero-judgment approach to help you overcome the physical and emotional barriers of high-speed travel in a safe, dual-controlled environment. This is a core part of our <a href='/refresher-lessons/' className='text-primary-dark hover:text-primary-dark/80 underline underline-offset-4 decoration-primary-dark/30 hover:decoration-primary-dark transition-all duration-200 font-bold'>dedicated refresher lessons</a> for those in York." 
    },
    { 
      question: "Can refresher learners take motorway lessons?", 
      answer: "Yes. Many of our <a href='/refresher-lessons/' className='text-primary-dark hover:text-primary-dark/80 underline underline-offset-4 decoration-primary-dark/30 hover:decoration-primary-dark transition-all duration-200 font-bold'>refresher students</a> haven't driven for years and motorways are their biggest fear. We combine general refresher training with dedicated high-speed sessions on the A64 and M62 to rebuild complete independence." 
    },
    { 
      question: "Do you drive on real motorways?", 
      answer: "Yes. While we often start on dual carriageways like the York ring road to build your skills, the goal is to get you onto real motorways (like the M1 or M62) to experience real-world traffic flows and modern smart motorway systems." 
    },
    { 
      question: "What roads around York are used?", 
      answer: "We typically use a combination of the A64, A1(M), M1, and M62. These provide a diverse range of high-speed environments, from traditional dual carriageways near the Hopgrove roundabout to complex smart motorways with variable speed limits."
    },
    { 
      question: "Are night motorway lessons available?", 
      answer: "Yes. Night-time motorway driving presents unique challenges with visibility and glare. We can schedule sessions during evening hours to help you build confidence in these specific conditions, which is also a key component of the <a href='/pass-plus-course/' className='text-primary-dark hover:text-primary-dark/80 underline underline-offset-4 decoration-primary-dark/30 hover:decoration-primary-dark transition-all duration-200 font-bold'>Pass Plus curriculum</a>." 
    },
    { 
      question: "Can I use my own car for motorway tuition?", 
      answer: "In most cases, we recommend using the instructor's dual-controlled car for safety and peace of mind. However, if you are a full licence holder, we can discuss using your own vehicle once an initial assessment is completed." 
    },
    { 
      question: "Is there a specific motorway driving course?", 
      answer: "We offer flexible motorway sessions or a structured block of sessions. Both are built around your current level and what you actually want to work on."
    },
    { 
      question: "What if I'm too nervous to start on the motorway?", 
      answer: "We never force you onto a road you aren't ready for. We'll start on quieter 60mph or 70mph roads to build your confidence gradually until you feel ready for the full motorway experience." 
    }
  ];

  const timelineSteps = [
    { num: '01', title: 'Assessment Drive', desc: 'A quick check of your general driving so we know where to start before heading onto faster roads.' },
    { num: '02', title: 'Confidence Building', desc: 'Initial practice on high-speed dual carriageways like the A64 — joining and leaving at speed.' },
    { num: '03', title: 'Lane Management', desc: 'Lane discipline, overtaking, and forward planning on multi-lane roads around York.' },
    { num: '04', title: 'Live Motorway Exposure', desc: 'Heading onto the M1 or M62 to experience real traffic flow and modern smart systems.' },
    { num: '05', title: 'Independent Confidence', desc: 'Navigating complex junctions and high-speed routes without instructor prompts for safe driving for life.' }
  ];

  return (
    <div className="min-h-screen bg-soft-bg font-sans selection:bg-primary-dark/10">
      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-8 lg:pt-32 lg:pb-12 px-4 sm:px-8 lg:px-12 bg-primary-dark overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-secondary-dark/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4B400] animate-pulse"></span>
              <span className="text-[0.6rem] font-black text-white/50 tracking-[0.2em] uppercase">Advanced Training Available</span>
            </div>
            <h1 className="text-[2.4rem] sm:text-[3.4rem] lg:text-[4.6rem] font-[900] text-white mb-4 leading-[0.92] tracking-tighter uppercase">
              Motorway <br /> <span className="italic font-extrabold text-white/40">Driving Lessons</span> <br /> In York
            </h1>
            <p className="text-[1rem] sm:text-[1.08rem] text-hero-paragraph leading-relaxed mb-6 max-w-[580px] font-medium opacity-80">
              Already passed but never driven on a motorway? Our motorway driving lessons near York take you through slip roads, lane changes, and higher speeds — step by step, no pressure, on the A1(M) and A64.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <a href="#enquiry-form" className="bg-white text-primary-dark px-10 py-5 rounded-full text-[0.85rem] font-black uppercase tracking-widest no-underline transition-all duration-300 shadow-xl hover:-translate-y-1 hover:shadow-2xl">
                Enquire Now
              </a>
              <a href="tel:+447763999317" className="bg-transparent text-white border-2 border-white/20 px-10 py-5 rounded-full text-[0.85rem] font-black uppercase tracking-widest no-underline transition-all duration-300 hover:border-white/80 hover:bg-white/5">
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

      {/* SECTION 1 — IMMERSIVE VISUAL INTRO */}
      <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col">
            <div className="mb-4">
              <span className="text-primary-dark/30 text-[0.7rem] font-black uppercase tracking-[0.3em] mb-1 block">Section 01 // Confidence</span>
              <h2 className="text-[1.8rem] md:text-[2.6rem] font-black text-primary-text mb-2 tracking-tighter uppercase leading-[1.1]">
                Motorway Driving in York — <br /><span className="italic text-primary-text/20">What the Lesson Covers</span>
              </h2>
              <div className="w-16 h-1 bg-primary-dark/10 mb-4"></div>
            </div>
            
            <div className="space-y-4 mb-6">
              <p className="text-secondary-text text-[1.05rem] leading-relaxed font-bold">
                Motorway driving is often the final confidence barrier for qualified drivers in York. The speed, traffic flow, and complex lane systems can feel overwhelming without structured support.
              </p>
              <p className="text-secondary-text text-[1rem] leading-[1.7] font-medium opacity-80">
                We break it down step by step — joining fast-moving traffic on the A64, holding safe distances, and reading the flow of multi-lane systems. Your awareness builds gradually so you feel settled behind the wheel, whether you take <a href="/manual-driving-lessons/" className="text-primary-dark hover:text-primary-dark/80 underline underline-offset-4 decoration-primary-dark/40 hover:decoration-primary-dark transition-all duration-200 font-bold">manual driving lessons</a> or <a href="/automatic-driving-lessons/" className="text-primary-dark hover:text-primary-dark/80 underline underline-offset-4 decoration-primary-dark/40 hover:decoration-primary-dark transition-all duration-200 font-bold">automatic driving lessons</a>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-6 border-t border-border-main/10">
              <div className="group">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-2 h-2 rounded-full bg-primary-dark/30 group-hover:bg-primary-dark transition-colors"></div>
                  <span className="text-[0.75rem] font-black text-primary-text uppercase tracking-tight">Motorway Rules</span>
                </div>
                <p className="text-[0.7rem] leading-tight text-secondary-text opacity-60 font-medium ml-5">Building awareness of lane hogging rules and correct lane usage.</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-2 h-2 rounded-full bg-primary-dark/30 group-hover:bg-primary-dark transition-colors"></div>
                  <span className="text-[0.75rem] font-black text-primary-text uppercase tracking-tight">Safe Overtaking</span>
                </div>
                <p className="text-[0.7rem] leading-tight text-secondary-text opacity-60 font-medium ml-5">Timing and gap selection for smooth multi-lane transitions.</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-2 h-2 rounded-full bg-primary-dark/30 group-hover:bg-primary-dark transition-colors"></div>
                  <span className="text-[0.75rem] font-black text-primary-text uppercase tracking-tight">Slip Road Confidence</span>
                </div>
                <p className="text-[0.7rem] leading-tight text-secondary-text opacity-60 font-medium ml-5">Speed-matching techniques for smooth, safe merging.</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-2 h-2 rounded-full bg-primary-dark/30 group-hover:bg-primary-dark transition-colors"></div>
                  <span className="text-[0.75rem] font-black text-primary-text uppercase tracking-tight">Smart Motorways</span>
                </div>
                <p className="text-[0.7rem] leading-tight text-secondary-text opacity-60 font-medium ml-5">Reading variable speed limits and red X lane closures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHO ARE MOTORWAY LESSONS IDEAL FOR? */}
      <section className="bg-soft-bg py-8 lg:py-12 px-6 sm:px-10 border-y border-border-main/5 shadow-[inset_0_-4px_12px_rgba(0,0,0,0.01)] hover:shadow-[inset_0_-4px_14px_rgba(0,0,0,0.015)] transition-all duration-300">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-8 px-4">
            <h2 className="text-[1.8rem] md:text-[2.4rem] font-black text-primary-text mb-2 leading-none tracking-tighter uppercase">
              Who Is Motorway Tuition <span className="italic font-extrabold text-primary-text/20">Ideal For?</span>
            </h2>
            <p className="text-secondary-text text-[0.9rem] font-semibold opacity-60 uppercase tracking-widest">Built around every driver type.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Nervous Motorway Drivers", desc: "Drivers who physically avoid motorways due to anxiety or fear of high speeds on the A64 or A1(M)." },
              { title: "Newly Passed Drivers", desc: "Gain essential experience that standard lessons rarely cover, providing a safe transition to independent driving." },
              { title: "Dual Carriageway Hesitancy", desc: "If joining fast roads like the York ring road makes you nervous, this is the perfect starting point." },
              { title: "Long-Distance Travel", desc: "Perfect if you have a new job or relocation requiring regular high-speed commuting on the M62 or M1." },
              { title: "Independent Confidence", desc: "Moving from following Sat-Nav to actually 'reading' the motorway flow and lane discipline independently." },
              { title: "Returning Drivers", desc: "Licensed drivers getting back on the road after several years. See our <a href='/refresher-lessons/' class='text-primary-dark underline hover:bg-primary-dark/5 rounded px-1 -mx-1 underline-offset-4 decoration-primary-dark/40 hover:decoration-primary-dark transition-all duration-200 font-bold'>refresher driving lessons York</a> options for more info." }
            ].map((card, index) => (
              <div key={`motorway-ideal-${index}`} className="bg-white p-8 rounded-3xl border border-border-main/20 hover:border-primary-dark/20 transition-all duration-300 group hover:shadow-xl hover:shadow-primary-dark/5">
                <div className="text-[1.1rem] font-black text-primary-text mb-4 tracking-tight uppercase leading-tight">{card.title}</div>
                <p className="text-secondary-text text-[0.95rem] leading-relaxed font-medium opacity-75" dangerouslySetInnerHTML={{ __html: card.desc }}></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT WILL YOU LEARN? */}
      <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 overflow-hidden">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[800px] mx-auto mb-8">
            <h2 className="text-[1.8rem] md:text-[2.6rem] font-black text-primary-text mb-2 leading-tight tracking-tighter uppercase">
              What Can We <br /><span className="italic text-primary-text/20">Work On Together?</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[1.02rem] leading-relaxed font-semibold font-medium mx-auto max-w-[650px] opacity-80">
              Motorway training is built around the situations that feel most challenging to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
            {[
              { title: "Motorway Rules", desc: "Help learners understand motorway lane discipline, safe overtaking behaviour, lane hogging awareness, and how motorway positioning works in real traffic conditions.", icon: <Shield className="w-5 h-5" /> },
              { title: "Joining From Slip Roads", desc: "Getting to grips with the speed-matching required to merge smoothly into 70mph traffic flow on major routes like the A1(M).", icon: <TrendingUp className="w-5 h-5" /> },
              { title: "Overtaking Large Vehicles", desc: "Developing the calmness needed to safely pass lorries and high-sided vehicles on the M62 corridor.", icon: <Flag className="w-5 h-5" /> },
              { title: "Reading Traffic Flow", desc: "Anticipating brake lights and traffic clusters before they become hazards, essential for busy York ring road junctions.", icon: <Navigation className="w-5 h-5" /> },
              { title: "Maintaining Safe Distances", desc: "Applying the 'two-second rule' effectively at high speeds to keep a safe stopping gap in any weather.", icon: <Clock className="w-5 h-5" /> },
              { title: "Exit Planning", desc: "Reading the 'marker posts' and getting into position early for safe, calm exiting at unfamiliar York junctions.", icon: <Navigation className="w-5 h-5" /> },
              { title: "Safe Lane Changing", desc: "Understanding blind spots and gap-selection during multi-lane transitions on busy three-lane motorways.", icon: <Zap className="w-5 h-5" /> },
              { title: "Smart Motorway Systems", desc: "Deciphering overhead gantry signs, variable speed limits, and red X lanes on modern managed motorways.", icon: <Eye className="w-5 h-5" /> },
              { title: "Dual Carriageway Confidence", desc: "Building baseline skills on roads like the A64 before hitting the full motorway network.", icon: <Award className="w-5 h-5" /> },
              { title: "High-Speed Awareness", desc: "Refining your overall observation cycle to scan miles ahead, not just car lengths, for total situational awareness.", icon: <CheckCircle2 className="w-5 h-5" /> }
            ].map((topic, index) => (
              <div key={`motorway-topic-${index}`} className="group flex items-start p-6 rounded-2xl border border-border-main/5 bg-soft-bg/30 hover:bg-white hover:border-primary-dark/15 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-white border border-border-main/10 flex items-center justify-center shrink-0 mr-4 text-primary-dark/40 group-hover:text-primary-dark group-hover:shadow-lg transition-all">
                  {topic.icon}
                </div>
                <div>
                  <div className="text-[1rem] font-black text-primary-text mb-1 tracking-tight uppercase leading-none">{topic.title}</div>
                  <p className="text-secondary-text text-[0.85rem] leading-relaxed font-medium opacity-70">{topic.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW MOTORWAY TRAINING WORKS (Timeline) */}
      <section className="bg-primary-dark py-10 lg:py-14 px-6 sm:px-10 overflow-hidden relative" id="how-it-works">
        <div className="absolute top-0 left-0 w-full h-1 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)]"></div>
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-[1.8rem] md:text-[2.6rem] font-[900] text-white tracking-tighter uppercase mb-2 leading-none">
              How to Get Comfortable <span className="italic font-extrabold text-white/30">Driving on the Motorway</span>
            </h2>
            <div className="w-16 h-1 bg-white/10 mb-3 mx-auto"></div>
            <p className="text-hero-paragraph text-[0.9rem] font-semibold tracking-[0.15em] uppercase opacity-60">A structured approach to high-speed confidence.</p>
          </div>

          <div className="relative">
            {/* Desktop Line */}
            <div className="hidden lg:block absolute top-[26px] left-[10%] right-[10%] h-[1px] bg-white/10"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6">
              {timelineSteps.map((step, index) => (
                <div 
                  key={`motorway-step-${index}`}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left group"
                >
                  <div className="w-14 h-14 rounded-full bg-white border-4 border-primary-dark flex items-center justify-center text-primary-dark text-sm font-black mb-6 relative z-10 group-hover:scale-110 transition-transform shadow-lg shadow-white/5">
                    {step.num}
                  </div>
                  <div className="text-[1rem] font-black text-white mb-3 tracking-tight uppercase leading-tight">{step.title}</div>
                  <p className="text-hero-paragraph text-[0.85rem] leading-relaxed font-medium opacity-60 group-hover:opacity-80 transition-opacity">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY LEARN WITH YORK DRIVING SCHOOL? */}
      <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 overflow-hidden border-b border-border-main/5">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-primary-dark/30 text-[0.7rem] font-black uppercase tracking-[0.3em] mb-1 block">Section 05 // Trust</span>
              <h2 className="text-[1.8rem] md:text-[2.6rem] font-black text-primary-text mb-4 tracking-tighter uppercase leading-[1.1]">
                Why Trust Us With Your <span className="italic text-primary-text/20">Motorway Training?</span>
              </h2>
              <div className="w-16 h-1 bg-primary-dark/10 mb-6"></div>
              
              <div className="space-y-6">
                {[
                  { title: "Calm, Patient Tuition", desc: "Our instructors are highly experienced with supporting <a href='/refresher-lessons/' class='text-primary-dark underline underline-offset-4 decoration-primary-dark/30 hover:decoration-primary-dark transition-all duration-200 font-bold'>nervous drivers</a>. We create a relaxed, zero-pressure atmosphere where you set the speed and focus." },
                  { title: "DVSA-Aligned Coaching", desc: "Our tuition complies with current high-speed vehicle control standards, helping you learn practical, safe habits." },
                  { title: "York-Specific Road Insights", desc: "We understand the precise challenges of local slip roads and major regional routes, from the Hopgrove roundabout to the A1(M) and A64 merging points." },
                  { title: "Modern Safety Tech", desc: "Learn in modern, high-spec vehicles equipped with the latest driver assistance and dual controls." }
                ].map((item, index) => (
                  <div key={`motorway-trust-${index}`} className="flex gap-4">
                    <div className="w-5 h-5 rounded-full bg-primary-dark/5 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-dark"></div>
                    </div>
                    <div>
                      <div className="text-[1rem] font-black text-primary-text mb-1 uppercase tracking-tight">{item.title}</div>
                      <p className="text-secondary-text text-[0.88rem] leading-relaxed font-semibold opacity-75" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-soft-bg rounded-[32px] p-8 lg:p-12 border border-border-main/10 relative overflow-hidden group shadow-[inset_0_4px_12px_rgba(0,0,0,0.01)]">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary-dark/5 rounded-bl-[60px]"></div>
              
              <div className="space-y-10 relative z-10">
                <div>
                  <div className="text-[1.8rem] font-black text-primary-text tracking-tighter mb-1">A64 & A1(M)</div>
                  <p className="text-primary-dark font-black tracking-widest text-[0.65rem] uppercase">York's main motorway routes covered in every session</p>
                  <div className="w-full h-1 bg-border-main/20 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-primary-dark w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="text-[1.8rem] font-black text-primary-text tracking-tighter mb-1">Post-Test</div>
                  <p className="text-primary-dark font-black tracking-widest text-[0.65rem] uppercase">For newly qualified drivers in York — no re-test required</p>
                  <div className="w-full h-1 bg-border-main/20 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-primary-dark w-[90%]"></div>
                  </div>
                </div>
                <div>
                  <div className="text-[1.8rem] font-black text-primary-text tracking-tighter mb-1">DVSA-Aligned</div>
                  <p className="text-primary-dark font-black tracking-widest text-[0.65rem] uppercase">Motorway training that follows current DVSA guidance</p>
                  <div className="w-full h-1 bg-border-main/20 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-primary-dark w-[95%]"></div>
                  </div>
                </div>
              </div>
            </div>
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
              <a href="https://share.google/9B75eIsjdJNEb4cRC" target="_blank" rel="noopener noreferrer" className="w-full bg-soft-bg text-primary-text border border-border-main/20 py-2.5 rounded-xl text-[0.72rem] font-black uppercase tracking-[0.15em] transition-all hover:bg-primary-dark hover:text-white hover:border-primary-dark shadow-sm">
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
                Reviews from drivers who took motorway, automatic, and manual driving lessons across York.
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
                  <div key={`motorway-pass-${pass.id}`} className="min-w-full md:min-w-[calc(33.333%-16px)] shrink-0">
                    <div className="aspect-[4/3.2] bg-soft-bg rounded-[32px] border border-border-main/10 overflow-hidden relative group/card shadow-sm hover:shadow-xl transition-all duration-500">
                      <img loading="lazy" decoding="async" width={360} height={480} src={pass.src} alt="York driving test pass" className="absolute inset-0 w-full h-full object-cover" />
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
                  key={`motorway-pass-dot-${pass.id}`} 
                  onClick={() => setCurrentPassIndex(i)}
                  aria-label={`Go to pass ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPassIndex === i ? 'bg-primary-dark w-4' : 'bg-primary-dark/20'}`} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — EXPLORE OTHER COURSES */}
      <section className="bg-soft-bg py-8 lg:py-12 px-6 sm:px-10 border-b border-border-main/5 shadow-[inset_0_4px_12px_rgba(0,0,0,0.01)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[800px] mx-auto mb-8">
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-2 leading-none tracking-tighter uppercase">
              Explore Other <span className="italic font-extrabold text-primary-text/30">Driving Courses in York.</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[0.95rem] font-medium opacity-60 max-w-[600px] mx-auto">Motorway lessons cover one part of driving in York. If you need to work on other areas or build broader road confidence, these courses are worth considering.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Pass Plus Course", desc: "Motorway driving is one of six Pass Plus modules. If you want a full post-test programme, Pass Plus in York covers everything in one course.", link: "/pass-plus-course/" },
              { title: "Refresher Driving Lessons", desc: "Been off the road for a while? Refresher lessons in York help you get back to a level where motorway driving feels manageable again.", link: "/refresher-lessons/" },
              { title: "Automatic Driving Lessons", desc: "Prefer to focus on the road rather than the gears? Automatic lessons in York let you build motorway awareness without the distraction of a clutch.", link: "/automatic-driving-lessons/" }
            ].map((course, index) => (
              <a key={`motorway-other-${index}`} href={course.link} className="group p-8 bg-white border border-border-main/15 rounded-2xl no-underline transition-all duration-300 hover:border-primary-dark/20 hover:shadow-xl hover:shadow-primary-dark/5 flex flex-col h-full">
                <div className="mb-4">
                  <div className="text-[1.1rem] font-black text-primary-text mb-3 tracking-tight uppercase group-hover:text-primary-dark transition-colors">{course.title}</div>
                  <p className="text-secondary-text text-[0.88rem] leading-relaxed font-medium opacity-80">{course.desc}</p>
                </div>
                <div className="mt-auto pt-4 flex items-center gap-2 text-[0.7rem] font-black uppercase tracking-[0.2em] text-primary-text/40 group-hover:text-primary-dark transition-colors">
                  View Course <span>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — FAQ SECTION */}
      <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 animate-fade-in" id="faq">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-8 lg:mb-10">
            <h2 className="text-[2rem] md:text-[2.6rem] font-black text-primary-text mb-2 tracking-tighter uppercase leading-none">
              Motorway <span className="italic font-extrabold text-primary-text/30">Lesson FAQs.</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[1.1rem] font-semibold opacity-70">Everything you need to know about building confidence on high-speed roads in York.</p>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CTA BAR */}
      <section className="bg-primary-dark border-t border-white/10 border-b border-b-white/5 py-6 lg:py-7 px-6 sm:px-10">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <h2 className="text-[1.05rem] md:text-[1.2rem] font-black text-white leading-tight tracking-tighter uppercase text-center sm:text-left">
            Ready To Drive With <span className="italic font-extrabold text-white/40">Real Confidence?</span>
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

      <RelatedLinks path="/motorway-lessons/" kind="service" />
      <Footer />
    </div>
  );
}
