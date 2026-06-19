import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  CheckSquare, 
  ChevronDown, 
  CheckCircle2, 
  MapPin, 
  ArrowRight, 
  Shield, 
  Zap, 
  Award, 
  Clock, 
  Navigation,
  Eye,
  Users,
  Target,
  Star,
  ClipboardCheck,
  TrendingUp,
  Flag,
  ChevronLeft,
  ChevronRight,
  CloudRain,
  Moon,
  Compass,
  ZapOff
} from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import EnquiryForm from '../EnquiryForm';
import FAQ from '../FAQ';
import YorkAreaFinder from '../YorkAreaFinder';

export default function PassPlus() {
  const [currentPassIndex, setCurrentPassIndex] = useState(0);
  const [passOffset, setPassOffset] = useState(0);
  const passTrackRef = useRef<HTMLDivElement>(null);

  const recentPasses = Array.from({ length: 41 }, (_, i) => ({ id: i + 1, src: `/passes/pass-${i + 1}.jpg` })).filter(p => p.id !== 4);

  const nextPass = () => setCurrentPassIndex((prev) => (prev + 1) % recentPasses.length);
  const prevPass = () => setCurrentPassIndex((prev) => (prev - 1 + recentPasses.length) % recentPasses.length);

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
      question: "What is Pass Plus?",
      answer: "Pass Plus is a DVSA training course for [newly qualified drivers](/refresher-lessons). It covers roads and situations not included in standard lessons — [motorway driving](/motorway-lessons), rural roads, night driving, and dual carriageways."
    },
    {
      question: "Is Pass Plus worth it?",
      answer: "Yes. It builds real road confidence, addresses weak areas early, and gets you comfortable on roads you've never driven independently. Most drivers feel noticeably more settled after completing it."
    },
    {
      question: "Does Pass Plus reduce insurance?",
      answer: "Some insurers offer a discount for Pass Plus certificate holders, but it's not guaranteed and varies by provider. Always check directly with your insurer before assuming a reduction."
    },
    {
      question: "How long does Pass Plus take?",
      answer: "A minimum of 6 hours of practical driving. This can be done as a full day or spread across a few sessions — whatever works for your schedule alongside any [manual](/manual-driving-lessons) or [automatic driving lessons](/automatic-driving-lessons) you're doing."
    },
    {
      question: "Is there a Pass Plus test?",
      answer: "No formal test. Your DVSA-approved instructor assesses you as you drive throughout the course. Once you've reached the required standard across all modules, you get your certificate."
    },
    {
      question: "Do you cover motorway driving?",
      answer: "Yes. [Motorway driving in York](/motorway-lessons) is a core part of Pass Plus. We cover lane discipline, following distances, joining and leaving at speed, and how to stay safe on longer journeys."
    },
    {
      question: "Can nervous drivers take Pass Plus?",
      answer: "Absolutely. Pass Plus works well for drivers who feel anxious about [driving after passing](/refresher-lessons) — particularly on faster roads. We go at your pace and don't push you onto motorways before you're ready."
    },
    {
      question: "Do you use York roads?",
      answer: "Yes. All training takes place on roads in and around York — the A64, York Ring Road, city centre streets, and rural routes into North Yorkshire. You're learning on roads you'll actually use."
    },
    {
      question: "Can I use my own car?",
      answer: "Yes, as long as it's roadworthy and you have the right insurance. If not, you can use our dual-controlled [manual](/manual-driving-lessons) or [automatic](/automatic-driving-lessons) vehicle."
    },
    {
      question: "What roads are covered?",
      answer: "York city centre, the A64 dual carriageway, York Ring Road (A1237), rural North Yorkshire lanes, night driving routes, and all-weather conditions. All real roads around York."
    },
    {
      question: "Is Pass Plus DVSA approved?",
      answer: "Yes. The Pass Plus scheme is run by the DVSA — the same government body that runs your driving test. It's nationally recognised and your certificate is issued directly by them."
    },
    {
      question: "What happens after completion?",
      answer: "Your instructor submits your training record to the DVSA, who issue your official Pass Plus certificate. You can then share this with insurers or keep it as evidence of your post-test training."
    },
    {
      question: "Can Pass Plus improve confidence?",
      answer: "Yes, and it's one of the main reasons people do it. Driving on motorways, in the dark, and on rural roads for the first time alone can feel daunting. Doing it with an instructor first makes a real difference."
    },
    {
      question: "Is Pass Plus suitable after recently passing?",
      answer: "It's most effective within the first year of passing — before habits set in and while the foundations from your driving lessons in York are still fresh."
    }
  ];

  return (
    <div className="min-h-screen bg-soft-bg font-sans selection:bg-primary-dark/10">
      <Header />

      <main>
        {/* 1. HERO SECTION (Exactly as is) */}
        <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 px-4 sm:px-8 lg:px-12 bg-primary-dark overflow-hidden" id="home">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.03)_100%)] pointer-events-none"></div>
          
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="text-[2.6rem] sm:text-[3.2rem] lg:text-[4.4rem] font-[900] text-white mb-6 leading-[0.95] tracking-tighter uppercase text-balance">
                Pass <span className="italic font-extrabold text-white/50">Plus</span> Course in York
              </h1>
              <div className="space-y-6 mb-10">
                <p className="text-[1.1rem] sm:text-[1.25rem] text-hero-paragraph leading-relaxed max-w-[620px] font-medium opacity-80">
                  Just passed your test in York? The Pass Plus course covers motorways, rural roads, and night driving — and could help cut the cost of your first year's insurance too.
                </p>
              </div>
              
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

        {/* SECTION 1 — WHAT IS PASS PLUS? (Split Layout) */}
        <section className="bg-white py-12 lg:py-16 px-6 sm:px-10 overflow-hidden border-b border-border-main/5" id="how-it-works">
          <div className="max-w-[1240px] mx-auto">
            <span className="text-primary-dark/30 text-[0.7rem] font-black uppercase tracking-[0.3em] mb-4 block">Official DVSA Scheme</span>
            <h2 className="text-[2rem] md:text-[2.6rem] font-black text-primary-text mb-6 tracking-tighter uppercase leading-[1.1]">
              What Is the <span className="italic text-primary-text/20">DVSA Pass Plus Scheme?</span>
            </h2>
            <div className="w-16 h-1.5 bg-primary-dark/10 mb-8"></div>

            <div className="space-y-6 mb-10 text-secondary-text text-[1.05rem] leading-[1.75] font-medium opacity-80">
              <p>
                The <strong>Pass Plus Course in York</strong> is a practical training programme designed for newly qualified drivers. Developed by the DVSA, it focuses on building your skills and confidence in driving situations that are rarely fully explored during regular lessons.
              </p>
              <p>
                The course consists of a <strong>minimum of 6 hours</strong> of tuition from a <strong>DVSA-approved instructor</strong>. Crucially, there is <strong>no formal test</strong> at the end; you are assessed throughout the training.
              </p>
            </div>

            <p className="text-primary-text font-bold text-[1.05rem] mb-6">We cover 6 essential driving modules:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8">
              {[
                { icon: <Navigation className="w-4 h-4" />, label: "Motorway Driving" },
                { icon: <Compass className="w-4 h-4" />, label: "Rural Roads" },
                { icon: <Shield className="w-4 h-4" />, label: "Dual Carriageways" },
                { icon: <Eye className="w-4 h-4" />, label: "Town Driving" },
                { icon: <Moon className="w-4 h-4" />, label: "Night Driving" },
                { icon: <CloudRain className="w-4 h-4" />, label: "All-Weather" }
              ].map((item, index) => (
                <div key={`passplus-module-${index}`} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-soft-bg flex items-center justify-center text-primary-dark/30 group-hover:bg-primary-dark group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[0.75rem] font-black text-primary-text uppercase tracking-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2 — WHY TAKE PASS PLUS? (Benefits) */}
        <section className="bg-soft-bg py-12 lg:py-16 px-6 sm:px-10 border-b border-border-main/5">
          <div className="max-w-[1240px] mx-auto text-center mb-12">
            <h2 className="text-[2rem] md:text-[2.6rem] font-black text-primary-text mb-4 leading-none tracking-tighter uppercase text-balance">
              Why Take a <span className="italic font-extrabold text-primary-text/20">Pass Plus Course?</span>
            </h2>
            <p className="text-secondary-text text-[0.95rem] font-medium opacity-60 uppercase tracking-widest max-w-[600px] mx-auto">
              Investment in your safety and long-term driving confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {[
              { icon: <Shield className="w-5 h-5" />, title: "Motorway Readiness", desc: "Get comfortable at speed — lane changes, joining, and keeping safe gaps on the A64 and beyond." },
              { icon: <Zap className="w-5 h-5" />, title: "Hazard Awareness", desc: "Read the road earlier and react more smoothly — skills that take time to develop alone." },
              { icon: <Compass className="w-5 h-5" />, title: "Rural Road Driving", desc: "Narrow lanes, blind bends, and passing places across North Yorkshire — covered in full." },
              { icon: <Moon className="w-5 h-5" />, title: "Night Driving", desc: "Driving after dark is a different experience. We cover visibility, speed, and judgement in low light." },
              { icon: <Award className="w-5 h-5" />, title: "Safer Habits", desc: "Address the habits that creep in after passing — before they become a problem on the road." },
              { icon: <Star className="w-5 h-5" />, title: "Confidence After Passing", desc: "The anxiety of driving alone fades quickly once you've done it with an instructor watching." },
              { icon: <Clock className="w-5 h-5" />, title: "Longer Journeys", desc: "Build focus and awareness for motorway and cross-country drives that go beyond York." },
              { icon: <TrendingUp className="w-5 h-5" />, title: "York-Specific Training", desc: "Every session uses real York roads — the ring road, city centre, and rural routes you'll actually drive." }
            ].map((benefit, index) => (
              <motion.div 
                key={`passplus-benefit-${index}`}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[32px] border border-border-main/10 shadow-sm hover:shadow-xl hover:shadow-primary-dark/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-2xl bg-soft-bg flex items-center justify-center text-primary-dark/40 mb-6 font-bold">
                  {benefit.icon}
                </div>
                <div className="text-[1.1rem] font-black text-primary-text mb-3 tracking-tight uppercase leading-tight">{benefit.title}</div>
                <p className="text-secondary-text text-[0.88rem] leading-relaxed font-medium opacity-70">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 max-w-[800px] mx-auto text-center px-6 py-5 bg-white/40 backdrop-blur-sm rounded-2xl border border-border-main/5">
            <p className="text-[0.75rem] font-bold text-secondary-text/60 italic">
              Insurance Disclaimer: Reductions are not guaranteed and vary significantly by provider. Please check with your specific insurance company for policy benefits.
            </p>
          </div>
        </section>

        <section className="bg-white py-12 lg:py-20 px-6 sm:px-10 overflow-hidden">
          <div className="max-w-[1240px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
              <div>
                <div className="text-[1.3rem] font-[900] text-primary-text mb-6 uppercase tracking-tight leading-none italic opacity-90 underline decoration-primary-dark/10 underline-offset-8">We Teach, Not Tick Boxes.</div>
                <div className="space-y-5 text-secondary-text text-[1.05rem] leading-relaxed font-medium opacity-80">
                  <p>Pass Plus in York is not a box to tick. We work through each module properly — stopping, explaining, and going again until it clicks. You drive the real roads, not a pre-planned route designed to rush through hours.</p>
                  <p>Whether you're confident or coming to us as a <a href="/refresher-lessons" className="font-bold text-primary-text hover:underline underline-offset-4 decoration-primary-dark/30 transition-all">nervous driver</a>, we adjust how we communicate so the session actually helps you — not just ticks off the hours.</p>
                </div>
              </div>
              <div>
                <div className="text-[1.3rem] font-[900] text-primary-text mb-6 uppercase tracking-tight leading-none italic opacity-90 underline decoration-primary-dark/10 underline-offset-8">No Rush to Finish.</div>
                <div className="space-y-5 text-secondary-text text-[1.05rem] leading-relaxed font-medium opacity-80">
                  <p>If you're not comfortable on <a href="/motorway-lessons" className="font-bold text-primary-text hover:underline underline-offset-4 decoration-primary-dark/30 transition-all">motorways around York</a> yet, we don't push you straight onto them. We build up through dual carriageways and faster A-roads first so the step up feels natural.</p>
                  <p>By the end of your Pass Plus course, you should feel ready to drive on the roads you've covered — not just relieved it's over.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — REAL-WORLD YORK EXPERIENCE (SEO Focus) */}
        <section className="bg-primary-dark py-6 lg:py-8 px-6 sm:px-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.03)_0%,transparent_50%)] pointer-events-none"></div>
          <div className="max-w-[1240px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-center">

              <div>
                <span className="text-white/30 text-[0.65rem] font-black uppercase tracking-[0.4em] mb-2 block">York Roads</span>
                <h2 className="text-[1.6rem] md:text-[2.1rem] font-[900] text-white tracking-tighter uppercase mb-3 leading-[0.95]">
                  Real-World Driving <span className="italic text-white/30">Around York.</span>
                </h2>
                <div className="w-10 h-[3px] bg-white/10 mb-4"></div>
                <div className="space-y-3 text-hero-paragraph text-[0.9rem] leading-relaxed font-medium opacity-70">
                  <p>Pass Plus in York covers the roads newly qualified drivers face straight after passing. The A64 between York and Leeds, the York Ring Road (A1237), and York city centre junctions are all part of your training — not textbook scenarios.</p>
                  <p>You'll drive through Acomb, Fulford, and out into rural North Yorkshire. Moorland roads, dual carriageways, and wet-weather conditions are covered with a DVSA-approved instructor based in York.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { label: "A64 Dual Carriageway", desc: "York to Leeds road — lane changes and safe gaps at speed." },
                  { label: "York Ring Road", desc: "A1237 roundabouts and multi-lane exits around York." },
                  { label: "York City Centre", desc: "Bus gates, pedestrian zones, and historic street layouts." },
                  { label: "Rural North Yorkshire", desc: "Narrow lanes and open moorland roads near York." },
                ].map((card, i) => (
                  <div key={`route-card-${i}`} className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mb-2"></div>
                    <div className="text-white font-black text-[0.72rem] uppercase tracking-tight mb-1">{card.label}</div>
                    <p className="text-white/40 text-[0.7rem] leading-snug font-medium">{card.desc}</p>
                  </div>
                ))}
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
                Reviews from drivers who completed Pass Plus and driving lessons in York.
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
                    <div key={`passplus-pass-${pass.id}`} className="min-w-full md:min-w-[calc(33.333%-16px)] shrink-0">
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
                  key={`passplus-pass-dot-${pass.id}`} 
                  onClick={() => setCurrentPassIndex(i)}
                  aria-label={`Go to pass ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPassIndex === i ? 'bg-primary-dark w-4' : 'bg-primary-dark/20'}`} 
                />
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* SECTION 8 — EXPLORE OTHER COURSES */}
        <section className="bg-soft-bg py-12 lg:py-16 px-6 sm:px-10 border-b border-border-main/5">
          <div className="max-w-[1240px] mx-auto">
            <div className="text-center max-w-[800px] mx-auto mb-12">
              <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-4 leading-none tracking-tighter uppercase">
                Explore Other <span className="italic font-extrabold text-primary-text/30">Driving Courses in York.</span>
              </h2>
              <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
              <p className="text-secondary-text text-[0.95rem] font-medium opacity-60 max-w-[600px] mx-auto">Pass Plus is for drivers who have already passed. If you're still learning or want to build specific skills first, these York driving courses may suit you better.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              {[
                { title: "Automatic Driving Lessons", desc: "Not yet driving? Learn in an automatic car in York and build the confidence you need before taking on Pass Plus.", link: "/automatic-driving-lessons" },
                { title: "Manual Driving Lessons", desc: "Still learning? Manual driving lessons in York cover everything the DVSA expects before you're ready for post-test training.", link: "/manual-driving-lessons" },
                { title: "Motorway Driving Lessons", desc: "Motorway driving is a core part of Pass Plus. Book a standalone motorway session in York if you want to focus on that first.", link: "/motorway-lessons" }
              ].map((course, index) => (
                <a key={`passplus-other-${index}`} href={course.link} className="group p-8 bg-white border border-border-main/15 rounded-3xl no-underline transition-all duration-300 hover:border-primary-dark/20 hover:shadow-2xl flex flex-col h-full bg-gradient-to-b hover:from-white hover:to-soft-bg/20">
                  <div className="mb-6">
                    <div className="text-[1.1rem] font-black text-primary-text mb-4 tracking-tight uppercase group-hover:text-primary-dark transition-colors">{course.title}</div>
                    <p className="text-secondary-text text-[0.88rem] leading-relaxed font-medium opacity-80">{course.desc}</p>
                  </div>
                  <div className="mt-auto pt-6 border-t border-border-main/10 flex items-center gap-2 text-[0.7rem] font-black uppercase tracking-[0.2em] text-primary-text/40 group-hover:text-primary-dark transition-colors">
                    Explore Course <span>→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9 — FAQ SECTION (14 Items) */}
        <section className="bg-white py-12 lg:py-20 px-6 sm:px-10" id="faq">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="text-[2rem] md:text-[2.8rem] font-black text-primary-text mb-4 tracking-tighter uppercase leading-none">
                Pass Plus York <span className="italic font-extrabold text-primary-text/30">FAQ.</span>
              </h2>
              <div className="w-16 h-1.5 bg-primary-dark/10 mb-6 mx-auto"></div>
              <p className="text-secondary-text text-[1.1rem] font-medium opacity-70 italic">Everything you need to know about the Pass Plus course in York.</p>
            </div>
            <FAQ items={faqs} />
          </div>
        </section>

        {/* COMPRESSED FINAL CLOSING CTA */}
        {/* CTA BAR */}
        <section className="bg-primary-dark border-t border-white/10 border-b border-b-white/5 py-6 lg:py-7 px-6 sm:px-10">
          <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
            <h2 className="text-[1.05rem] md:text-[1.2rem] font-black text-white leading-tight tracking-tighter uppercase text-center sm:text-left">
              Build Real-World <span className="italic font-extrabold text-white/40">Confidence In York.</span>
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
      </main>

      <Footer />
    </div>
  );
}
