import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
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
  Compass,
  Eye,
  CheckCircle2,
  ArrowRight,
  ClipboardCheck,
  Target,
  Users,
  AlertCircle,
  MapPin,
  CheckSquare,
  ChevronDown,
  MessageSquare
} from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import EnquiryForm from '../EnquiryForm';
import FAQ from '../FAQ';
import YorkAreaFinder from '../YorkAreaFinder';
import RelatedLinks from '../RelatedLinks';

interface ChecklistItemProps {
  key?: string;
  title: string;
  items: string[];
  checkedItems: Record<string, boolean>;
  onToggle: (itemValue: string) => void;
}

function ChecklistAccordion({ title, items, checkedItems, onToggle }: ChecklistItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const completedCount = items.filter(item => !!checkedItems[item]).length;
  const totalCount = items.length;
  const pct = Math.round((completedCount / totalCount) * 100);

  return (
    <div className={`border rounded-2xl overflow-hidden mb-3 transition-all duration-300 ${isOpen ? 'border-primary-dark/20 shadow-md bg-white' : 'border-border-main/10 bg-soft-bg/30'}`}>
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`checklist-content-${title.toLowerCase().replace(/\s+/g, '-')}`}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-white hover:bg-white/80 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${isOpen ? 'bg-primary-dark text-white' : 'bg-primary-dark/5 text-primary-dark'}`}>
            <CheckSquare className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0 pr-2">
            <span className="text-[0.95rem] font-black text-primary-text uppercase tracking-tight block truncate">{title}</span>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-16 bg-slate-100 h-1 rounded-full overflow-hidden">
                <div className="bg-primary-dark h-full transition-all duration-300" style={{ width: `${pct}%` }}></div>
              </div>
              <span className="text-[0.62rem] font-bold text-secondary-text/60 uppercase tracking-widest">{completedCount}/{totalCount} Completed</span>
            </div>
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-primary-text/30 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`checklist-content-${title.toLowerCase().replace(/\s+/g, '-')}`}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="p-5 sm:p-6 bg-white border-t border-border-main/5 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {items.map((item, index) => {
                  const isChecked = !!checkedItems[item];
                  return (
                    <button 
                      key={`mock-checklist-item-${index}`} 
                      type="button"
                      onClick={() => onToggle(item)}
                      className="flex items-start gap-3 p-2 rounded-xl text-left hover:bg-primary-dark/[0.02] cursor-pointer group transition-colors w-full"
                    >
                      <div className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-all ${isChecked ? 'bg-primary-dark border-primary-dark text-white' : 'border-primary-dark/20 bg-white group-hover:border-primary-dark/30'}`}>
                        {isChecked && (
                          <svg className="w-3.5 h-3.5 stroke-current stroke-[3] fill-none" viewBox="0 0 24 24">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </div>
                      <span className={`text-[0.88rem] leading-relaxed font-semibold transition-all duration-200 ${isChecked ? 'text-primary-dark/50 line-through' : 'text-secondary-text'}`}>
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MockDrivingTests() {
  const [currentPassIndex, setCurrentPassIndex] = useState(0);
  const [passOffset, setPassOffset] = useState(0);
  const passTrackRef = useRef<HTMLDivElement>(null);
  
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('mock-checklist-state');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleItem = (itemKey: string) => {
    setCheckedItems(prev => {
      const updated = { ...prev, [itemKey]: !prev[itemKey] };
      try {
        localStorage.setItem('mock-checklist-state', JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
      return updated;
    });
  };

  const recentPasses = Array.from({ length: 41 }, (_, i) => ({ id: i + 1, src: `/passes/thumbs/pass-${i + 1}.jpg` })).filter(p => p.id !== 4);

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
      question: "What happens during a mock driving test in York?", 
      answer: "A mock test simulates the exact DVSA exam format. You'll perform an eyesight check, answer 'Show Me, Tell Me' questions, and complete a 40-minute driving route featuring various <a href='/articles/york-driving-test-routes-common-mistakes/' className='text-primary-dark hover:text-primary-dark/80 underline decoration-primary-dark/30 hover:decoration-primary-dark font-extrabold transition-all duration-200 underline-offset-4'>York test scenarios</a>—all under silent, examiner-style conditions to prepare you for Monks Cross Driving Test Centre."
    },
    { 
      question: "Is a mock test marked like the real DVSA test?", 
      answer: "Yes, exactly. We use the standard DL25 appraisal form used by the DVSA. Every fault is categorised as minor (driving), serious, or dangerous, providing a direct measurement of your current test-readiness for both <a href='/manual-driving-lessons/' className='text-primary-dark hover:text-primary-dark/80 underline decoration-primary-dark/30 hover:decoration-primary-dark font-extrabold transition-all duration-200 underline-offset-4'>manual driving lessons</a> and <a href='/automatic-driving-lessons/' className='text-primary-dark hover:text-primary-dark/80 underline decoration-primary-dark/30 hover:decoration-primary-dark font-extrabold transition-all duration-200 underline-offset-4'>automatic driving lessons</a> learners." 
    },
    { 
      question: "How long does a mock driving test take?", 
      answer: "A standard session is approximately 90 minutes. This allows time for the pre-test briefing, the 40-minute exam simulation, and a detailed 20-30 minute debrief. This format is often a core part of our <a href='/intensive-driving-courses/' className='text-primary-dark hover:text-primary-dark/80 underline decoration-primary-dark/30 hover:decoration-primary-dark font-extrabold transition-all duration-200 underline-offset-4'>intensive driving courses</a> so students are performing at their peak before test day."
    },
    { 
      question: "Will we drive on real York test routes?", 
      answer: "We use routes that incorporate common <a href='/monks-cross-driving-test-centre/' className='text-primary-dark hover:text-primary-dark/80 underline decoration-primary-dark/30 hover:decoration-primary-dark font-extrabold transition-all duration-200 underline-offset-4'>York test route elements</a>, including high-pressure junctions, busy roundabouts like Clifton Moor, and varied road types used by the Monks Cross Driving Test Centre examiners." 
    },
    { 
      question: "Can mock tests reduce driving test anxiety?", 
      answer: "Absolutely. Most anxiety comes from the unknown. By experiencing the silent, high-pressure environment of a mock test in a safe setting, you 'desensitise' yourself to the nerves. Many <a href='/refresher-lessons/' className='text-primary-dark hover:text-primary-dark/80 underline decoration-primary-dark/30 hover:decoration-primary-dark font-extrabold transition-all duration-200 underline-offset-4'>nervous drivers</a> find this simulation is the final hurdle to building genuine independence." 
    },
    { 
      question: "How many mock driving tests should I take?", 
      answer: "While one test is incredibly valuable, many learners find two tests ideal: one to identify initial weaknesses and a second to confirm that corrective improvements have become permanent habits. This structured approach is especially recommended for those on <a href='/intensive-driving-courses/' className='text-primary-dark hover:text-primary-dark/80 underline decoration-primary-dark/30 hover:decoration-primary-dark font-extrabold transition-all duration-200 underline-offset-4'>intensive driving courses</a>."
    },
    { 
      question: "Do mock tests include independent driving?", 
      answer: "Yes. Every mock test includes a 20-minute section of independent driving, typically using a Sat Nav (TomTom) or road signs. We often practise these routes around <a href='/driving-lessons-fulford-york/' className='text-primary-dark hover:text-primary-dark/80 underline decoration-primary-dark/30 hover:decoration-primary-dark font-extrabold transition-all duration-200 underline-offset-4'>Fulford</a> and <a href='/driving-lessons-acomb-york/' className='text-primary-dark hover:text-primary-dark/80 underline decoration-primary-dark/30 hover:decoration-primary-dark font-extrabold transition-all duration-200 underline-offset-4'>Acomb</a> to mirror exactly what you will find in 4 out of 5 real DVSA tests." 
    },
    { 
      question: "Can I take a mock test before booking my practical test?", 
      answer: "Yes, this is highly recommended. It prevents 'test disappointment' and means you only book your real test when you are truly performing at the required standard, potentially saving you the cost of a re-test and the long wait for a new slot at Monks Cross."
    },
    { 
      question: "Are mock tests suitable after failing a test?", 
      answer: "They are perfect for post-fail analysis. We help you dissect the failure reason and simulate the exact conditions that led to the fault. Our instructors are experienced in <a href='/refresher-lessons/' className='text-primary-dark hover:text-primary-dark/80 underline decoration-primary-dark/30 hover:decoration-primary-dark font-extrabold transition-all duration-200 underline-offset-4'>confidence rebuilding</a>, working to put a robust technical and emotional fix in place before your next attempt."
    },
    { 
      question: "What faults are assessed during a mock test?", 
      answer: "We assess everything: observations, signals, clearance, speed management, junctions, manoeuvres, and control. Our goal is to find the subtle patterns that lead to serious faults before a real examiner does. This is also how we refine skills during <a href='/pass-plus-course/' className='text-primary-dark hover:text-primary-dark/80 underline decoration-primary-dark/30 hover:decoration-primary-dark font-extrabold transition-all duration-200 underline-offset-4'>Pass Plus</a> or motorway training." 
    },
    { 
      question: "Will I receive feedback afterwards?", 
      answer: "Yes, you receive a detailed verbal debrief and a copy of your DL25 marking sheet. We prioritise the 'critical' areas first so you can approach your remaining <a href='/driving-lessons-york-city-centre/' className='text-primary-dark hover:text-primary-dark/80 underline decoration-primary-dark/30 hover:decoration-primary-dark font-extrabold transition-all duration-200 underline-offset-4'>driving lessons in York</a> with clear, performance-based objectives." 
    },
    { 
      question: "Can mock tests help with roundabout confidence?", 
      answer: "York is famous for its complex roundabouts, from the outer ring road to the city centre. Mock tests specifically target these, testing your lane discipline, entry timing, and 'reading' of other traffic flow under real-world pressure." 
    },
    { 
      question: "Do you offer automatic mock driving tests in York?", 
      answer: "Yes, we provide mock tests for both <a href='/manual-driving-lessons/' className='text-primary-dark hover:text-primary-dark/80 underline decoration-primary-dark/30 hover:decoration-primary-dark font-extrabold transition-all duration-200 underline-offset-4'>manual driving lessons</a> and <a href='/automatic-driving-lessons/' className='text-primary-dark hover:text-primary-dark/80 underline decoration-primary-dark/30 hover:decoration-primary-dark font-extrabold transition-all duration-200 underline-offset-4'>automatic driving lessons</a>. The marking criteria remain identical, focusing on the quality of your roadcraft and safety standards regardless of the vehicle type." 
    },
    { 
      question: "What should I bring to my mock driving test?", 
      answer: "Bring your provisional licence and have your theory test score in mind. Treat it exactly like the real day—arrive with a focused mindset and the shoes you intend to wear. If you are preparing via an <a href='/intensive-driving-courses/' className='text-primary-dark hover:text-primary-dark/80 underline decoration-primary-dark/30 hover:decoration-primary-dark font-extrabold transition-all duration-200 underline-offset-4'>intensive driving course</a>, your instructor will go through everything you need before you start."
    }
  ];

  const checklistCategories = [
    { title: "Pre-Test Essentials", items: ["Provisional licence present", "Eyesight check (20m distance)", "Vehicle safety standards (L-plates, etc.)", "Calm mental preparation", "Show Me/Tell Me theory knowledge"] },
    { title: "Observation & Mirrors", items: ["Internal mirror before changing speed", "Door mirrors before changing direction", "Six-point check before moving off", "Blind spot verification", "Continuous look-out at junctions"] },
    { title: "Signals & Communication", items: ["Correct timing for indicators", "Removing indicators appropriately", "Proper use of horn and headlights", "Brake light communication", "Responding to other drivers' signals"] },
    { title: "Junctions & Roundabouts", items: ["Approaching at appropriate speed", "Correct lane positioning", "Looking early at roundabouts", "Observations while emerging", "Safe gap selection in traffic"] },
    { title: "Positioning & Lane Discipline", items: ["Maintaining normal road position", "Lane selection for turning", "Clearance from parked vehicles", "Staying central in lane on roundabouts", "One-way street positioning"] },
    { title: "Speed Management", items: ["Adhering to local York speed limits", "Adjusting for weather/poor visibility", "Progressive driving (avoiding hesitancy)", "Early braking for hazards", "Safe following distance"] },
    { title: "Manoeuvres (DVSA-Style)", items: ["Parallel park (within 2 car lengths)", "Forward bay park and reverse out", "Reverse bay park", "Pull up on the right and reverse", "Constant observations during movement"] },
    { title: "Independent Driving (Sat Nav)", items: ["Following TomTom directions", "Correct lane selection without prompts", "Maintaining focus on road, not just screen", "Handling incorrect turns safely", "Safe stop after the section"] },
    { title: "Test-Day Nerves & Pressure", items: ["Recovery after a minor mistake", "Focusing on the current task", "Maintaining observation cycle under stress", "Calmness during traffic delays", "Consistent roadcraft throughout"] }
  ];

  return (
    <div className="min-h-screen bg-soft-bg font-sans selection:bg-primary-dark/10">
      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 px-4 sm:px-8 lg:px-12 bg-primary-dark overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-secondary-dark/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-[0.6rem] font-black text-white/50 tracking-[0.2em] uppercase">DVSA-Standard Test Simulation</span>
            </div>
            <h1 className="text-[2.4rem] sm:text-[3.4rem] lg:text-[4.6rem] font-[900] text-white mb-6 leading-[0.92] tracking-tighter uppercase">
              MOCK DRIVING <br /> <span className="italic font-extrabold text-white/40">TESTS</span> <br /> IN YORK.
            </h1>
            <p className="text-[1.05rem] sm:text-[1.2rem] text-hero-paragraph leading-relaxed mb-10 max-w-[580px] font-medium opacity-80">
              Drive the actual test routes in York before the real thing. You'll get honest feedback on exactly where you're at — so you know what to work on before test day.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
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

      {/* SECTION 1 — WHY MOCK DRIVING TESTS MATTER */}
      <section className="bg-white py-10 lg:py-14 px-6 sm:px-10 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto">

          {/* OPTION A: Illustrated Mock Driving Test Scene Cabin & Examiner Panel - REMOVED */}
          <div className="hidden relative group rounded-3xl overflow-hidden aspect-video lg:aspect-square bg-gradient-to-br from-[#10172A] via-[#1E293B] to-[#0F172A] border border-white/10 shadow-2xl p-6 flex flex-col justify-between">
            {/* Ambient Background Grid and Radar glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] opacity-20 pointer-events-none"></div>
            
            {/* Scene Header */}
            <div className="flex justify-between items-center border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-[0.62rem] font-bold text-slate-400 uppercase tracking-widest font-mono">REAL EXAM ENVIRONMENT TRAINING // HUD</span>
              </div>
              <span className="text-[0.55rem] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded uppercase font-bold">SIMULATOR ACTIVE</span>
            </div>

            {/* Core Graphic Area: Learner cockpit & Examiner Tablet Simulation */}
            <div className="relative my-4 flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              
              {/* Left Panel: Vehicle speed / satellite navigator mockup */}
              <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-4 border border-white/5 flex flex-col justify-between h-full min-h-[140px]">
                <div className="flex justify-between items-start">
                  <span className="text-[0.55rem] text-slate-500 font-mono font-bold uppercase uppercase">Sat Nav Guide</span>
                  <Navigation className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                </div>
                
                {/* Simulated GPS Map Path */}
                <div className="my-2 bg-slate-950 rounded-lg p-2 h-16 border border-white/5 relative overflow-hidden flex items-center justify-center">
                  {/* Stylized route line */}
                  <svg className="absolute inset-0 w-full h-full stroke-blue-500/20" viewBox="0 0 100 50">
                    <path d="M10 40 Q 30 10, 50 35 T 90 20" fill="none" strokeWidth="2" strokeDasharray="2 2" />
                    <path d="M10 40 Q 30 10, 50 35" fill="none" stroke="#3B82F6" strokeWidth="3" />
                  </svg>
                  <span className="absolute bottom-1 right-2 text-[0.45rem] font-semibold text-blue-400 bg-blue-950 border border-blue-500/20 px-1 rounded font-mono">YORK ROUTE 3 (PEAR TREE)</span>
                  <div className="absolute left-[50%] top-[70%] -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,1)]"></div>
                </div>

                <div className="flex justify-between items-center text-[0.6rem] font-mono">
                  <div className="flex flex-col">
                    <span className="text-slate-500 font-bold">SPEED LIMIT</span>
                    <span className="text-white font-extrabold text-[0.7rem] text-rose-500">30 MPH</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-slate-500 font-bold">CURRENT SPEED</span>
                    <span className="text-white font-[900] text-[0.7rem] text-emerald-400">28 MPH</span>
                  </div>
                </div>
              </div>

              {/* Right Panel: Examiner DL25 Tablet marking mockup */}
              <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-4 border border-white/5 flex flex-col justify-between h-full min-h-[140px]">
                <div className="flex justify-between items-start border-b border-white/5 pb-1.5 mb-1.5">
                  <span className="text-[0.55rem] text-slate-400 font-mono font-bold uppercase">Examiner DL25 Report</span>
                  <ClipboardCheck className="w-3.5 h-3.5 text-blue-400" />
                </div>

                {/* Checklist Marks */}
                <div className="space-y-1.5 text-[0.55rem] text-slate-300 font-mono">
                  <div className="flex justify-between items-center border-b border-white/[0.02] pb-0.5">
                    <span>1. Eye Sight Distance Check</span>
                    <span className="text-emerald-400 font-bold uppercase">✔ PASSED</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/[0.02] pb-0.5">
                    <span>2. Mirror Observations</span>
                    <span className="text-emerald-400 font-bold uppercase">✔ OPTIMAL</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/[0.02] pb-0.5">
                    <span>3. Junction Control</span>
                    <span className="text-emerald-400 font-bold uppercase">✔ PRECISE</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>4. Independent Driving Section</span>
                    <span className="text-blue-400 font-bold uppercase animate-pulse">● ACTIVE</span>
                  </div>
                </div>

                {/* Score Summary */}
                <div className="bg-[#1E293B]/60 p-1 rounded border border-white/5 flex justify-between items-center text-[0.52rem] font-mono mt-1.5">
                  <span className="text-slate-400 uppercase">Driving faults tracker:</span>
                  <span className="text-rose-400 font-extrabold uppercase">0 Serious // 2 Minors</span>
                </div>
              </div>

            </div>

            {/* Bottom Panel Info */}
            <div className="border-t border-white/5 pt-3 flex justify-between items-center">
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-slate-500" />
                <span className="text-[0.62rem] font-black text-slate-300 font-mono uppercase">Learner & Examiner Simulation Workspace</span>
              </div>
              <span className="text-[0.52rem] text-slate-400 tracking-wider">Aesthetic Assurance Card</span>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-4">
              <span className="text-primary-dark/30 text-[0.7rem] font-black uppercase tracking-[0.3em] mb-2 block">Section 01 // Realism</span>
              <h2 className="text-[1.8rem] md:text-[2.6rem] font-black text-primary-text mb-4 tracking-tighter uppercase leading-[1.1]">
                What to Expect During a <br /><span className="italic text-primary-text/20">Mock Driving Test in York</span>
              </h2>
              <div className="w-16 h-1.5 bg-primary-dark/10 mb-4"></div>
            </div>
            
            <div className="space-y-4 mb-6">
              <p className="text-secondary-text text-[1.05rem] leading-relaxed font-bold">
                Driving test failure is often caused by psychological pressure rather than a lack of skill.
              </p>
              <p className="text-secondary-text text-[1rem] leading-[1.7] font-medium opacity-80">
                A mock test bridges the gap between learning and performing. Whether you are taking <a href="/manual-driving-lessons/" className="text-primary-dark hover:text-primary-dark/80 underline decoration-primary-dark/30 hover:decoration-primary-dark transition-all duration-200 underline-offset-4 font-extrabold">manual driving lessons</a> or <a href="/automatic-driving-lessons/" className="text-primary-dark hover:text-primary-dark/80 underline decoration-primary-dark/30 hover:decoration-primary-dark transition-all duration-200 underline-offset-4 font-extrabold">automatic driving lessons</a>, we help you experience the unique atmosphere of the real exam—the silent examiner, the independent navigation, and the strict adherence to marking criteria. By identifying where your standard falls short now, we eliminate the surprises that cause candidates to fail on the day.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-6 border-t border-border-main/10">
              <div className="group">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-2 h-2 rounded-full bg-primary-dark/30 group-hover:bg-primary-dark transition-colors"></div>
                  <span className="text-[0.75rem] font-black text-primary-text uppercase tracking-tight">Reduce Anxiety</span>
                </div>
                <p className="text-[0.7rem] leading-tight text-secondary-text opacity-60 font-medium ml-5">Exposure therapy for test-day nerves and adrenaline management.</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-2 h-2 rounded-full bg-primary-dark/30 group-hover:bg-primary-dark transition-colors"></div>
                  <span className="text-[0.75rem] font-black text-primary-text uppercase tracking-tight">Identify Faults</span>
                </div>
                <p className="text-[0.7rem] leading-tight text-secondary-text opacity-60 font-medium ml-5">Standardised DL25 marking to find serious faults early.</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-2 h-2 rounded-full bg-primary-dark/30 group-hover:bg-primary-dark transition-colors"></div>
                  <span className="text-[0.75rem] font-black text-primary-text uppercase tracking-tight">Test Familiarity</span>
                </div>
                <p className="text-[0.7rem] leading-tight text-secondary-text opacity-60 font-medium ml-5">Real York test route scenarios and junction complexities.</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-2 h-2 rounded-full bg-primary-dark/30 group-hover:bg-primary-dark transition-colors"></div>
                  <span className="text-[0.75rem] font-black text-primary-text uppercase tracking-tight">Proven Accuracy</span>
                </div>
                <p className="text-[0.7rem] leading-tight text-secondary-text opacity-60 font-medium ml-5">A fresh perspective that highlights 'blind spots' in training.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE YORK DRIVING SCHOOL MOCK TEST SYSTEM */}
      <section className="bg-primary-dark py-14 lg:py-20 px-6 sm:px-10 overflow-hidden relative" id="how-mock-works">
        <div className="absolute top-0 left-0 w-full h-1 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)]"></div>
        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-[1.8rem] md:text-[2.6rem] font-[900] text-white tracking-tighter uppercase mb-3 leading-none">
              The York Driving School <span className="italic font-extrabold text-white/30">Mock Test System.</span>
            </h2>
            <p className="text-hero-paragraph text-[0.9rem] font-medium tracking-[0.15em] uppercase opacity-60">A structured, authoritative assessment framework.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Real Test Conditions", desc: "No coaching during the drive. Total silence. Eyesight and 'Show Me' questions included.", icon: <Shield className="w-5 h-5" /> },
                { title: "DVSA-Style Marking", desc: "Using the official DL25 marking sheet to categorise faults into minor, serious, and dangerous.", icon: <ClipboardCheck className="w-5 h-5" /> },
                { title: "Instructor Debrief", desc: "Detailed breakdown of the marking sheet. We prioritise exactly where you need to improve.", icon: <MessageSquare className="w-5 h-5" /> },
                { title: "Improvement Plan", desc: "A technical strategy built around the faults identified today, so they don't recur on test day.", icon: <Target className="w-5 h-5" /> }
              ].map((card, index) => (
                <div 
                  key={`mock-system-${index}`}
                  className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group"
                >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-white/40 group-hover:text-white group-hover:bg-white/10 transition-all">
                  {card.icon || <Star className="w-5 h-5" />}
                </div>
                <div className="text-[1.1rem] font-black text-white mb-3 tracking-tight uppercase leading-tight">{card.title}</div>
                <p className="text-white/50 text-[0.88rem] leading-relaxed font-medium group-hover:text-white/70 transition-colors">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHO ARE MOCK DRIVING TESTS IDEAL FOR? */}
      <section className="bg-soft-bg py-12 lg:py-16 px-6 sm:px-10 border-y border-border-main/5">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-12 px-4">
            <h2 className="text-[1.8rem] md:text-[2.6rem] font-black text-primary-text mb-4 leading-none tracking-tighter uppercase">
              Who Is Mock Tuition <span className="italic font-extrabold text-primary-text/20">Ideal For?</span>
            </h2>
            <p className="text-secondary-text text-[0.9rem] font-medium opacity-60 uppercase tracking-widest">Psychologically reassuring support for every candidate.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Nervous Test Candidates", desc: "Perfect for those who perform well in lessons but 'freeze' when the word 'test' is mentioned." },
              { title: "Learners Nearing Test Day", desc: "A final verification of your standard before committing to a costly practical test appointment." },
              { title: "Re-Test Preparation", desc: "Specifically designed to dissect previous test failures and prevent the same faults re-occurring." },
              { title: "Sat Nav & Independent Driving", desc: "4 out of 5 tests now use independent driving. Get used to following sat nav directions before your real test." },
              { title: "Independent Practice", desc: "Moving from following instructor prompts to making your own high-level driving decisions." },
              { title: "Roundabout & Junctions", desc: "Targeted focus on York's high-pressure intersections and complex lane discipline." }
            ].map((card, index) => (
              <div key={`mock-ideal-${index}`} className="bg-white p-8 rounded-3xl border border-border-main/20 hover:border-primary-dark/20 transition-all duration-300 group hover:shadow-xl hover:shadow-primary-dark/5">
                <div className="text-[1.1rem] font-black text-primary-text mb-4 tracking-tight uppercase leading-tight">{card.title}</div>
                <p className="text-secondary-text text-[0.92rem] leading-relaxed font-medium opacity-75">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — MOCK TEST READINESS CHECKLIST (DVSA-STYLE) */}
      <section className="bg-white py-10 lg:py-14 px-6 sm:px-10 overflow-hidden" id="test-checklist">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center max-w-[800px] mx-auto mb-8">
            <span className="text-primary-dark/20 text-[0.7rem] font-black uppercase tracking-[0.4em] mb-2 block">Section 04 // Preparation</span>
            <h2 className="text-[1.8rem] md:text-[2.6rem] font-black text-primary-text mb-3 leading-tight tracking-tighter uppercase">
               Test Readiness <span className="italic text-primary-text/20">The Checklist.</span>
            </h2>
            <p className="text-secondary-text text-[1rem] leading-relaxed font-medium mx-auto max-w-[650px] opacity-70">
              Interactive preparation inspired by the official DVSA examiner's assessment criteria.
            </p>
          </div>

          <div className="max-w-[750px] mx-auto">
            {checklistCategories.map((cat, index) => (
              <ChecklistAccordion 
                key={`mock-checklist-cat-${index}`} 
                title={cat.title} 
                items={cat.items} 
                checkedItems={checkedItems}
                onToggle={toggleItem}
              />
            ))}
          </div>

          {/* CTA CARD */}
          <div className="mt-10 p-8 lg:p-12 bg-gradient-to-br from-[#10172A] to-[#1E293B] rounded-[32px] border border-white/10 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-[580px]">
                <h3 className="text-white text-[1.4rem] md:text-[1.8rem] font-black uppercase tracking-tight mb-3 leading-[1.1]">
                  Can you tick all the boxes under pressure?
                </h3>
                <p className="text-slate-400 text-[0.92rem] leading-relaxed opacity-90">
                  Don't wait for your official test day to find out. Enquire about a mock driving test in York and see exactly how you perform against DVSA standards.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:shrink-0">
                <a
                  href="#enquiry-form"
                  className="bg-white text-primary-dark px-8 py-4 rounded-full text-[0.82rem] font-black uppercase tracking-wider no-underline transition-all duration-300 shadow-lg hover:-translate-y-0.5 text-center"
                >
                  Enquire Now
                </a>
                <a
                  href="tel:+447763999317"
                  className="bg-transparent text-slate-300 border border-white/20 px-8 py-4 rounded-full text-[0.82rem] font-black uppercase tracking-wider no-underline transition-all duration-300 hover:border-slate-300 hover:text-white text-center"
                >
                  Call Us
                </a>
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
                Reviews from learners who booked mock driving tests and driving lessons in York.
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
                  <div key={`mock-pass-${pass.id}`} className="min-w-full md:min-w-[calc(33.333%-16px)] shrink-0">
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
                  key={`mock-pass-dot-${pass.id}`} 
                  onClick={() => setCurrentPassIndex(i)}
                  aria-label={`Go to pass ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPassIndex === i ? 'bg-primary-dark w-4' : 'bg-primary-dark/20'}`} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — MASTER YORK TEST ROUTES (Altered bg-soft-bg for contrast sequence) */}
      <section className="bg-soft-bg py-10 lg:py-14 px-6 sm:px-10 overflow-hidden border-b border-border-main/5">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary-dark/30 text-[0.7rem] font-black uppercase tracking-[0.3em] mb-2 block">Section 07 // Authority</span>
              <h2 className="text-[1.8rem] md:text-[2.6rem] font-black text-primary-text mb-4 tracking-tighter uppercase leading-[1.1]">
                Know Your York <br /><span className="italic text-primary-text/20">Test Routes.</span>
              </h2>
              <div className="w-16 h-1.5 bg-primary-dark/10 mb-5"></div>
              
              <div className="space-y-4">
                <p className="text-secondary-text text-[1rem] leading-relaxed font-bold">
                  The Monks Cross Driving Test Centre covers a diverse range of complex road systems.
                </p>
                <p className="text-secondary-text text-[0.95rem] leading-[1.7] font-medium opacity-80">
                   Our mock tests specifically target common examiner areas across York including <a href="/driving-lessons-clifton-york/" className="font-extrabold text-primary-dark hover:text-primary-dark/80 underline decoration-primary-dark/30 hover:decoration-primary-dark transition-all duration-200 underline-offset-4">Clifton Moor</a> roundabouts, the high-speed dual carriageways of the A64, and the complex inner-city junctions of <a href="/driving-lessons-acomb-york/" className="font-extrabold text-primary-dark hover:text-primary-dark/80 underline decoration-primary-dark/30 hover:decoration-primary-dark transition-all duration-200 underline-offset-4">Acomb</a>, <a href="/driving-lessons-heworth-york/" className="font-extrabold text-primary-dark hover:text-primary-dark/80 underline decoration-primary-dark/30 hover:decoration-primary-dark transition-all duration-200 underline-offset-4">Heworth</a>, and <a href="/driving-lessons-fulford-york/" className="font-extrabold text-primary-dark hover:text-primary-dark/80 underline decoration-primary-dark/30 hover:decoration-primary-dark transition-all duration-200 underline-offset-4">Fulford</a>. We help you navigate the tricky ring road junctions and independent driving routes that determine pass or fail status — the same approach used on our <a href="/intensive-driving-courses/" className="font-extrabold text-primary-dark hover:text-primary-dark/80 underline decoration-primary-dark/30 hover:decoration-primary-dark transition-all duration-200 underline-offset-4">intensive driving courses</a>.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6 border-t border-border-main/10 pt-4">
                 {[
                   { name: 'Clifton Moor', link: '/driving-lessons-clifton-york/' },
                   { name: 'Fulford Road', link: '/driving-lessons-fulford-york/' },
                   { name: 'A64 Ring Road', link: '/monks-cross-driving-test-centre/' },
                   { name: 'Acomb Area', link: '/driving-lessons-acomb-york/' },
                   { name: 'Heworth', link: '/driving-lessons-heworth-york/' },
                   { name: 'City Centre', link: '/driving-lessons-york-city-centre/' }
                 ].map((area, index) => (
                   <a 
                     key={`mock-area-${index}`} 
                     href={area.link}
                     className="flex items-center gap-2.5 group/link text-primary-text hover:text-primary-dark transition-colors duration-200 no-underline"
                   >
                     <MapPin className="w-4 h-4 text-primary-dark/30 group-hover/link:text-primary-dark transition-colors" />
                     <span className="text-[0.7rem] font-bold uppercase tracking-widest">{area.name}</span>
                   </a>
                 ))}
              </div>
            </div>

            {/* MONKS CROSS DRIVING TEST CENTRE MAP */}
            <div className="rounded-[32px] overflow-hidden border border-border-main/10 shadow-xl flex flex-col">
              <div className="bg-primary-dark px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-white/60" />
                  <span className="text-[0.7rem] font-black text-white uppercase tracking-widest">Monks Cross Driving Test Centre</span>
                </div>
                <span className="text-[0.62rem] font-bold text-white/50 uppercase tracking-wider">York, YO32</span>
              </div>
              <iframe
                src="https://maps.google.com/maps?q=York+Driving+Test+Centre,+Monks+Cross+Drive,+Huntington,+York&output=embed&z=15"
                width="100%"
                height="400"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Monks Cross Driving Test Centre York"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — EXPLORE OTHER DRIVING COURSES (Altered bg-white for contrast sequence) */}
      <section className="bg-white py-10 lg:py-14 px-6 sm:px-10 border-b border-border-main/5">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[800px] mx-auto mb-8 lg:mb-10">
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-3 leading-none tracking-tighter uppercase">
              Explore Other <span className="italic font-extrabold text-primary-text/30">Driving Courses in York.</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[0.95rem] font-medium opacity-60 max-w-[600px] mx-auto">A mock test shows where you stand before the real thing. Whichever stage of your journey you're at in York, one of these courses might be the right move.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Intensive Driving Courses", desc: "Need to get test-ready quickly in York? An intensive course gets you through your lessons and to test day in a shorter time frame.", link: "/intensive-driving-courses/" },
              { title: "Manual Driving Lessons", desc: "Still building the foundations? Weekly manual driving lessons in York give you time to develop at a steady, consistent pace before your test.", link: "/manual-driving-lessons/" },
              { title: "Automatic Driving Lessons", desc: "Prefer to focus on the road rather than the gears? Automatic lessons in York remove the clutch so you can concentrate on passing.", link: "/automatic-driving-lessons/" }
            ].map((course, index) => (
              <a key={`mock-other-${index}`} href={course.link} className="group p-8 bg-soft-bg border border-border-main/15 rounded-2xl no-underline transition-all duration-300 hover:border-primary-dark/20 hover:shadow-xl hover:shadow-primary-dark/5 flex flex-col h-full">
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

      {/* SECTION 9 — FAQ SECTION (Altered bg-soft-bg for contrast sequence) */}
      <section className="bg-soft-bg py-10 lg:py-14 px-6 sm:px-10" id="faq">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-[2rem] md:text-[2.6rem] font-black text-primary-text mb-3 tracking-tighter uppercase leading-none">
              Mock Driving <span className="italic font-extrabold text-primary-text/30">Test FAQs.</span>
            </h2>
            <div className="w-16 h-1.5 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[1rem] font-medium opacity-70 italic">Everything you need to know about preparing for test day in York.</p>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CTA BAR */}
      <section className="bg-primary-dark border-t border-white/10 border-b border-b-white/5 py-6 lg:py-7 px-6 sm:px-10">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <h2 className="text-[1.05rem] md:text-[1.2rem] font-black text-white leading-tight tracking-tighter uppercase text-center sm:text-left">
            Ready To Face <span className="italic font-extrabold text-white/40">The Test With Clarity?</span>
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

      <RelatedLinks path="/mock-driving-tests/" kind="service" />
      <Footer />
    </div>
  );
}
