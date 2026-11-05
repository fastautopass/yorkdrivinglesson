import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Flag, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  X, 
  MapPin, 
  Clock, 
  Zap, 
  Award, 
  ShieldCheck, 
  TrendingUp, 
  Activity, 
  Car,
  DollarSign
} from 'lucide-react';
import ArticleLayout from '../../ArticleLayout';

export default function AutomaticVsManualYork() {
  const [currentPassIndex, setCurrentPassIndex] = useState(0);
  const [passOffset, setPassOffset] = useState(0);
  const passTrackRef = useRef<HTMLDivElement>(null);
  const [selectedLifeScenario, setSelectedLifeScenario] = useState(0);

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

  const lifeScenarios = [
    {
      title: "Pass As Fast As Possible",
      subtitle: "Speed & efficiency focused",
      recommendation: "Automatic Lessons",
      reason: "More lesson time spent developing road skills, hazard perception, and real test route junctions rather than learning complex physical clutch control.",
      badgeColor: "bg-emerald-500/10 text-emerald-600",
      highlightMetric: "Save roughly 15 hours of lesson time",
    },
    {
      title: "Nervous in Heavy Traffic",
      subtitle: "Confidence & stress focused",
      recommendation: "Automatic Lessons",
      reason: "Eliminating the risk of stalling at busy junctions and the stress of continuous physical gear changes drastically lowers cognitive load in rush hour flows.",
      badgeColor: "bg-primary-dark/15 text-primary-dark",
      highlightMetric: "More focus on safety & observation",
    },
    {
      title: "Drive Work Vans & Fleet",
      subtitle: "Career & utility focused",
      recommendation: "Manual Lessons",
      reason: "A manual licence grants you total legal freedom to operate any standard vehicle, which is still a typical prerequisite for light commercial trade vans and delivery vehicles.",
      badgeColor: "bg-amber-500/10 text-amber-600",
      highlightMetric: "Maximum career flexibility post-test",
    },
    {
      title: "Keep Car Long-Term",
      subtitle: "Future-proofing focused",
      recommendation: "Automatic/EV Lessons",
      reason: "With traditional gearboxes phasing out and the explosive rise of hybrid and pure electric vehicle models, your automatic skills remain fully future-proofed.",
      badgeColor: "bg-purple-500/10 text-purple-600",
      highlightMetric: "Ready for the inevitable electric era",
    }
  ];

  const faqs = [
    {
      question: "Is it really easier to learn in an automatic in York?",
      answer: "Generally, yes. York's stop-start traffic, especially around the busy city walls and the Barbican, can be highly taxing in a manual. Choosing **[automatic driving lessons in York](/automatic-driving-lessons/)** completely removes the need for constant clutch control, allowing you to focus on the busy surroundings."
    },
    {
      question: "Can I drive a manual car if I pass in an automatic?",
      answer: "No. If you pass your test in an automatic, your licence will be restricted to automatic vehicles only. If you want to drive a manual later, you'll need to take another practical test after preparing with a **[manual driving instructor in York](/manual-driving-lessons/)**."
    },
    {
      question: "Are automatic lessons more expensive in York?",
      answer: "Slightly. Automatic cars are generally more expensive to buy and maintain, which is reflected in the hourly rate. However, many students find they need far fewer lessons to reach test standard, which can actually reduce the total cost of passing your **[driving test first time in York](/articles/pass-driving-test-first-time-york/)**."
    },
    {
      question: "Which is better for a nervous learner?",
      answer: "Automatic is typically the preferred choice for those who feel anxious about driving. Removing the risk of stalling and the complexity of gear changes significantly reduces the 'mental load' when learning on busy roads like Gillygate, helping you overcome **[driving test nerves](/articles/driving-test-nerves-how-to-stay-calm/)**."
    },
    {
      question: "Will I find it hard to buy an automatic car in York?",
      answer: "Not at all. The rapid shift towards electric and hybrid vehicles means that more and more cars on the market are automatic. You'll have plenty of high-quality options at local dealerships."
    },
    {
      question: "Is a manual licence better for job opportunities?",
      answer: "For certain specific roles, like driving commercial vans, heavy trades, or certain utility vehicles, a manual licence is still required. However, many modern company car fleets are now switching fully to automatic or electric vehicles."
    },
    {
      question: "Does passing in an automatic affect my insurance in York?",
      answer: "It can sometimes be slightly higher, as automatic gearboxes can be more expensive to resolve physically. However, factors like your age, where you live in York (like YO10 vs YO24), and your driving history will have a much bigger impact."
    },
    {
      question: "Can I switch from manual to automatic lessons?",
      answer: "Absolutely. Many students start in a manual and find it's not for them. Switching to automatic can often be the breakthrough they need to start enjoying their lessons and making real progress."
    },
    {
      question: "How long does it take to learn the gears in a manual?",
      answer: "It varies, but it usually takes several hours of dedicated practice to get the 'feel' for the clutch on your **[manual driving lessons in York](/manual-driving-lessons/)**. In an automatic, you can usually get comfortable with the basic controls in the first 20 minutes."
    },
    {
      question: "Are automatic cars less safe on the York bypass?",
      answer: "No, they are just as safe. In fact, many people feel safer because they don't have to worry about being in the wrong gear when merging onto fast-moving roads, which is a key part of preparing for **[York driving test routes](/articles/york-driving-test-routes-common-mistakes/)**."
    },
    {
      question: "Is fuel consumption different between automatic and manual?",
      answer: "In older cars, manuals were more efficient. However, modern automatic gearboxes are incredibly advanced and often match or even beat manuals for fuel economy."
    },
    {
      question: "Do you offer intensive courses for both?",
      answer: "Yes, we do. Whether you choose automatic or manual, our **[intensive driving courses in York](/intensive-driving-courses/)** are designed to help you progress quickly and get to that test-ready standard in a shorter timeframe."
    },
    {
      question: "What if I change my mind after my first lesson?",
      answer: "That's why we recommend a standard first lesson to see how you feel. We'll give you honest feedback on which path we think would suit your learning style and goals best, and we can also prepare **[mock driving tests in York](/mock-driving-tests/)** once you reach standard."
    },
    {
      question: "Are electric cars always automatic?",
      answer: "Yes, almost all electric vehicles (EVs) are automatic. If you're planning on buying an electric car in the future, learning in an automatic is a very sensible long-term choice."
    }
  ];

  return (
    <ArticleLayout path="/articles/automatic-vs-manual-driving-lessons-york/" 
      title={<>Automatic vs <span className="italic font-extrabold">Manual</span> Lessons In York</>}
      intro="Choosing between automatic and manual driving lessons in York is your first key step toward independence. From historic stop-start city walls to the fast lanes of the A64 and York Ring Road, we help you find the right route for your confidence and long-term goals."
      faqs={faqs}
      faqBgClassName="bg-white"
      faqPaddingClassName="pt-10 pb-12 lg:pt-14 lg:pb-16"
      faqHeaderMarginClassName="mb-8"
      faqTitle={<>Choosing Between Automatic & <span className="italic font-extrabold text-[#8E969D]">Manual In York</span></>}
      faqSubtitle="Get clear, direct answers to help you make the smartest choice on your road to independence."
      hideFooterCta={true}
      ctaText="Not Sure Which Is Right For You?"
      ctaItalic="Let's Find Out In York."
      currentSlug="automatic-vs-manual-driving-lessons-york"
    >
      {/* 1. ULTIMATE MANUAL VS AUTOMATIC COMPARISON (WHITE BACKGROUND) - COMPACT/PREMIUM */}
      <section className="bg-white pt-10 pb-12 lg:pt-14 lg:pb-16 px-6 sm:px-10 border-b border-border-main/10 text-balance" id="comparison">
        <div className="max-w-[1200px] mx-auto text-left">
          <div className="mb-6">
            <span className="text-primary-dark/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block">01 / Side-by-side Analysis</span>
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-3 tracking-tight uppercase leading-[1.1]">
              The Ultimate Manual vs. <br />
              <span className="italic font-extrabold text-primary-text/30">Automatic Comparison</span>
            </h2>
            <div className="w-16 h-1.5 bg-primary-dark/10 mb-4"></div>
            <p className="text-secondary-text text-[1rem] leading-relaxed font-medium max-w-[850px]">
              Choosing between manual and automatic driving lessons in York is more than just deciding whether to shift gears. It directly impacts your learning speed, stress levels in York city centre traffic, and your future driving options. Here is a side-by-side comparison based on the core training factors that matter most across York, North Yorkshire, and beyond — from our <a href="/" className="text-primary-dark font-bold hover:underline">York driving lessons</a>.
            </p>
          </div>

          <div className="mt-6 border border-border-main/10 rounded-2xl overflow-hidden shadow-sm bg-white">
            {/* Headers Desktop */}
            <div className="hidden md:grid grid-cols-12 gap-6 bg-soft-bg p-4 border-b border-border-main/10 font-black uppercase text-[0.7rem] tracking-wider text-primary-text">
              <div className="col-span-3">Comparison Category</div>
              <div className="col-span-4">Manual Lessons</div>
              <div className="col-span-5">Automatic Lessons</div>
            </div>

            {/* Rows */}
            {[
              {
                category: "Learning Difficulty",
                manual: "Requires active physical coordination of clutch and shift. Learning smooth engagement and stall prevention takes time.",
                automatic: "Simple 'press & go' controls mean zero mechanics to manage. Drastically lowers early learning friction.",
                winner: "Automatic"
              },
              {
                category: "Test Readiness Speed",
                manual: "Average of 45-48 hours. Technical habits require repeated practice before full focus on busy roundabouts.",
                automatic: "Average of 30 hours. Many learners reach test standard faster as no time is spent on stall recovery or clutch coordination.",
                winner: "Automatic"
              },
              {
                category: "Traffic Stress",
                manual: "Higher. Constant shifting crawling alongside York's walls or handling stop-start queues on Gillygate.",
                automatic: "Minimal. Creep comfortably in congested city traffic. Completely stress-free, with zero hill-start anxiety.",
                winner: "Automatic"
              },
              {
                category: "Licence Flexibility",
                manual: "Unrestricted. Passing a manual test legally permits you to drive both manual and automatic cars.",
                automatic: "Restricted. Restricts your licence to automatic-only. Driving a manual later requires a new practical test.",
                winner: "Manual"
              },
              {
                category: "Future Compatibility",
                manual: "Declining fast. With production fading and traditional petrol cars phasing out, manuals represent the past.",
                automatic: "Future-proof. Essential for all hybrid and electric passenger vehicles. Fully aligns with modern vehicle lines.",
                winner: "Automatic"
              },
              {
                category: "Lesson Efficiency",
                manual: "Moderate. A notable portion of early lessons must focus specifically on physical clutch mechanics and gear selection.",
                automatic: "Outstanding. More of your lesson time goes to real road skills, observation, and direct driving test preparation York.",
                winner: "Automatic"
              }
            ].map((row, idx) => (
              <div key={`comp-row-${idx}`} className="grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-x-6 p-4 md:p-5 border-b border-border-main/5 items-center hover:bg-soft-bg/20 transition-all duration-150">
                <div className="col-span-3 flex flex-wrap md:flex-col items-baseline md:items-start justify-between md:justify-center">
                  <div className="font-extrabold text-primary-text uppercase text-[0.8rem] tracking-wider">
                    {row.category}
                  </div>
                  <span className={`inline-block text-[0.6rem] font-black px-2 py-0.5 rounded-full uppercase tracking-wider mt-1 ${row.winner === 'Automatic' ? 'bg-primary-dark/10 text-primary-dark' : 'bg-amber-500/10 text-primary-text'}`}>
                    🏆 {row.winner} Winner
                  </span>
                </div>
                <div className="col-span-12 md:col-span-4 text-secondary-text text-[0.88rem] leading-relaxed border-l-2 md:border-l-0 pl-3 md:pl-0 border-primary-dark/5">
                  <span className="md:hidden font-extrabold text-[0.65rem] block text-primary-text/40 uppercase mb-0.5">Manual:</span>
                  {row.manual}
                </div>
                <div className="col-span-12 md:col-span-5 text-secondary-text text-[0.88rem] leading-relaxed border-l-2 md:border-l-0 pl-3 md:pl-0 border-primary-dark/5">
                  <span className="md:hidden font-extrabold text-[0.65rem] block text-primary-dark uppercase mb-0.5">Automatic:</span>
                  {row.automatic}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHICH TYPE OF LEARNER ARE YOU? (LIGHT GREY BACKGROUND) - DEEPER LOCAL SCENARIOS */}
      <section className="bg-soft-bg pt-10 pb-12 lg:pt-14 lg:pb-16 px-6 sm:px-10 border-b border-border-main/10 text-balance" id="profiles">
        <div className="max-w-[1200px] mx-auto text-left">
          <div className="mb-8 text-center max-w-[850px] mx-auto">
            <span className="text-primary-dark/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block">04 / Find Your Mirror Match</span>
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-3 tracking-tight uppercase leading-none">
              Which Type Of <span className="italic font-extrabold text-primary-text/30">Learner Are You?</span>
            </h2>
            <div className="w-16 h-1.5 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[1rem] leading-relaxed font-semibold">
              Explore four deep learner profiles mapped to the genuine local challenges of navigating York. Compare your confidence and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Nervous Learner */}
            <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-border-main/10 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-200">
              <div>
                <span className="inline-block text-[0.6rem] font-black uppercase tracking-[0.15em] bg-red-500/15 text-red-600 px-3 py-1 rounded-full mb-3">Confidence Shield</span>
                <h3 className="text-[1.2rem] font-black text-primary-text uppercase tracking-tight mb-2">The Nervous Learner</h3>
                <p className="text-secondary-text text-[0.88rem] leading-relaxed mb-4 font-medium">
                  Worried about stalling at the busy roundabouts around Monks Cross, rolling backwards on York's steep bridge inclines, or managing physical coordination while watching for cyclists on Bootham or Fulford Road during your automatic or manual driving lessons in York.
                </p>
              </div>
              <div className="border-t border-border-main/5 pt-4">
                <p className="text-[0.78rem] font-black text-primary-text uppercase mb-1">Best Fit: <span className="text-primary-dark">Automatic Driving Lessons York</span></p>
                <div className="flex gap-2 items-start mt-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-secondary-text text-[0.82rem] font-medium italic">Frees up more of your attention to stay locked on basic observation and speed control under patient <a href="/york/" className="text-primary-dark font-bold hover:underline">driving instructor York</a> mentorship.</p>
                </div>
              </div>
            </div>

            {/* Fast-Track Learner */}
            <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-border-main/10 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-200">
              <div>
                <span className="inline-block text-[0.6rem] font-black uppercase tracking-[0.15em] bg-primary-dark/10 text-primary-dark px-3 py-1 rounded-full mb-3">Speed Focused</span>
                <h3 className="text-[1.2rem] font-black text-primary-text uppercase tracking-tight mb-2">The Quick-Progress Learner</h3>
                <p className="text-secondary-text text-[0.88rem] leading-relaxed mb-4 font-medium">
                  Need a valid driving licence quickly for relocation, starting a job at Clifton Moor or York Science Park, or to fit your intensive lifestyle? You don't have months to spend habituating physical mechanical gear operations.
                </p>
              </div>
              <div className="border-t border-border-main/5 pt-4">
                <p className="text-[0.78rem] font-black text-primary-text uppercase mb-1">Best Fit: <span className="text-primary-dark">Intensive Automatic Driving Courses</span></p>
                <div className="flex gap-2 items-start mt-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-secondary-text text-[0.82rem] font-medium italic">Reach driving standards around 15 hours faster on average. Quickly proceed from beginner to driving test preparation York with excellent time-efficiency.</p>
                </div>
              </div>
            </div>

            {/* Future Fleet Driver */}
            <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-border-main/10 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-200">
              <div>
                <span className="inline-block text-[0.6rem] font-black uppercase tracking-[0.15em] bg-amber-500/10 text-amber-600 px-3 py-1 rounded-full mb-3">Enterprise Ready</span>
                <h3 className="text-[1.2rem] font-black text-primary-text uppercase tracking-tight mb-2">The Future Fleet Driver</h3>
                <p className="text-secondary-text text-[0.88rem] leading-relaxed mb-4 font-medium">
                  Looking to keep your future career paths completely unrestricted? If you plan to operate work vans, local logistics, physical breakdown service tenders, or want utility vehicle qualifications for rugged rural North Yorkshire routes.
                </p>
              </div>
              <div className="border-t border-border-main/5 pt-4">
                <p className="text-[0.78rem] font-black text-primary-text uppercase mb-1">Best Fit: <span className="text-primary-dark">Manual Driving Lessons</span></p>
                <div className="flex gap-2 items-start mt-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-secondary-text text-[0.82rem] font-medium italic">Broadest possible legal entitlement. Legally licensed to drive older commercial diesel vehicles and manual work gearboxes across any delivery fleet.</p>
                </div>
              </div>
            </div>

            {/* Everyday Commuter */}
            <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-border-main/10 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-200">
              <div>
                <span className="inline-block text-[0.6rem] font-black uppercase tracking-[0.15em] bg-emerald-500/10 text-emerald-600 px-3 py-1 rounded-full mb-3">Urban Efficiency</span>
                <h3 className="text-[1.2rem] font-black text-primary-text uppercase tracking-tight mb-2">The Everyday Commuter</h3>
                <p className="text-secondary-text text-[0.88rem] leading-relaxed mb-4 font-medium">
                  Your daily routine means school runs in Acomb or Bishopthorpe, shopping trips to Clifton Moor retail park, or sitting through the heavy stop-and-start queues along the York Ring Road and into York city centre at peak times.
                </p>
              </div>
              <div className="border-t border-border-main/5 pt-4">
                <p className="text-[0.78rem] font-black text-primary-text uppercase mb-1">Best Fit: <span className="text-primary-dark">Automatic Driving Lessons York</span></p>
                <div className="flex gap-2 items-start mt-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-secondary-text text-[0.82rem] font-medium italic">Make stop-and-start crawls fully automated and effortless. Drive through local traffic jams comfortably under modern mechanical trends with total zero fatigue.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT HAPPENS AFTER YOU PASS? (WHITE BACKGROUND) - VISUAL TIMELINE */}
      <section className="bg-white pt-10 pb-6 lg:pt-14 lg:pb-8 px-6 sm:px-10 border-b border-border-main/10 text-balance" id="after-pass">
        <div className="max-w-[1200px] mx-auto text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-4 lg:gap-x-8 items-start">
            <div className="lg:col-span-12">
              <span className="text-primary-dark/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block">05 / Beyond The Test Car</span>
              <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-3 tracking-tight uppercase leading-[1.1]">
                What Genuinely Happens <br />
                <span className="italic font-extrabold text-primary-text/30">After You Pass?</span>
              </h2>
              <div className="w-16 h-1.5 bg-primary-dark/10 mb-4"></div>
            </div>
            
            <div className="lg:col-span-7 space-y-4 text-secondary-text text-[1rem] leading-[1.7] font-medium">
              <p>
                Passing your practical driving test is a magnificent milestone, but it is actually only the beginning of your journey. Modern road conditions call for robust skills that prepare you for complex commuting, real York city traffic, and future-forward vehicle ownership.
              </p>
              <p>
                If your daily routine takes you along the narrow York streets, through residential areas like Acomb, Fulford, or Heworth, or on regular commutes across the York Ring Road (A1237) or the A64 toward North Yorkshire, your vehicle choice matters. Modern automatic technology has fully closed the gap in economy and performance against traditional manual cars.
              </p>
              <p>
                Additionally, the complete global transition towards eco-friendly driving is already underway. Purely electric vehicles (EVs) are growing in popularity and do not utilise traditional gearboxes—leaving automatic-trained drivers perfectly aligned with upcoming automotive developments.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-soft-bg p-6 rounded-[2rem] border border-border-main/10 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-dark/[0.02] rounded-full -mr-16 -mt-16 group-hover:bg-primary-dark/[0.05] transition-all duration-500"></div>
                <h3 className="text-[1rem] font-black text-primary-text uppercase tracking-tight mb-3 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary-dark" />
                  <span>The Modern Transit Shift</span>
                </h3>
                <div className="space-y-3.5 text-secondary-text text-[0.88rem] leading-relaxed">
                  <div>
                    <h4 className="font-extrabold text-primary-text uppercase text-[0.7rem] tracking-wider mb-0.5">Local Commuting Ease</h4>
                    <p className="text-[0.82rem]">Reduces stress immensely across stop-and-start pathways of Gillygate, Bootham and the historic Barbican walls.</p>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-primary-text uppercase text-[0.7rem] tracking-wider mb-0.5">Smooth Bypass Journeys</h4>
                    <p className="text-[0.82rem]">Effortlessly merge onto fast dual carriageways like the A64 paths without gear error risks or speed lags.</p>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-primary-text uppercase text-[0.7rem] tracking-wider mb-0.5">Electric Vehicle Alignment</h4>
                    <p className="text-[0.82rem]">All modern EVs are purely automatic transmission. Getting your automatic qualification places you fully in the box seat for modern transport.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* VISUAL TIMELINE COMPONENT */}
          <div className="mt-10 pt-8 border-t border-border-main/10">
            <h3 className="text-[0.95rem] font-black text-primary-text uppercase tracking-wider mb-6 text-center lg:text-left">
              The Evolution of a Qualified Driver in York
            </h3>

            {/* Desktop Timeline */}
            <div className="hidden lg:grid grid-cols-5 gap-4 relative">
              <div className="absolute top-5 left-[10%] right-[10%] h-[2px] bg-border-main/20 -z-10"></div>
              {[
                { step: "01", label: "Pass Test", desc: "Successfully pass practical exam at Monks Cross test paths." },
                { step: "02", label: "Independent", desc: "Confidently embark on solo travel with zero passenger guidance." },
                { step: "03", label: "Commuting", desc: "Easily handle traffic roundabouts and peak hour crawls." },
                { step: "04", label: "Road trips", desc: "Cruising efficiently at 70mph on critical fast-flow roads like A64." },
                { step: "05", label: "EV Era", desc: "Frictionless upgrade directly to smart hybrid or pure electric vehicles." }
              ].map((item, idx) => (
                <div key={`timeline-${idx}`} className="text-center px-2">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-primary-dark flex items-center justify-center mx-auto mb-3 font-black text-[0.85rem] text-primary-dark shadow-sm">
                    {item.step}
                  </div>
                  <h4 className="font-extrabold text-primary-text uppercase text-[0.8rem] mb-1">{item.label}</h4>
                  <p className="text-secondary-text text-[0.75rem] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-4">
              {[
                { step: "01", label: "Pass Test", desc: "Successfully pass practical exam at Monks Cross test paths." },
                { step: "02", label: "Independent", desc: "Confidently embark on solo travel with zero passenger guidance." },
                { step: "03", label: "Commuting", desc: "Easily handle traffic roundabouts and peak hour crawls." },
                { step: "04", label: "Road trips", desc: "Cruising efficiently at 70mph on critical fast-flow roads like A64." },
                { step: "05", label: "EV Era", desc: "Frictionless upgrade directly to smart hybrid or pure electric vehicles." }
              ].map((item, idx) => (
                <div key={`timeline-mob-${idx}`} className="flex items-start gap-4 p-3 bg-soft-bg/50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-primary-dark flex items-center justify-center font-black text-[0.75rem] text-white shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-primary-text uppercase text-[0.8rem] mb-0.5">{item.label}</h4>
                    <p className="text-secondary-text text-[0.75rem] leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. COST & EFFICIENCY CONSIDERATIONS (LIGHT GREY BACKGROUND) - SEPARATED EXTRA STROKE */}
      <section className="bg-soft-bg pt-6 pb-12 lg:pt-8 lg:pb-16 px-6 sm:px-10 border-b border-border-main/10 text-balance" id="cost">
        <div className="max-w-[1200px] mx-auto overflow-hidden rounded-[2.5rem] bg-primary-dark px-6 py-10 lg:p-14 relative shadow-xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] skew-x-[-15deg] translate-x-1/4"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
             <div className="text-left">
               <span className="text-white/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block">06 / Lesson Economics</span>
               <h2 className="text-[1.8rem] lg:text-[2.2rem] font-black text-white mb-4 leading-[1.1] tracking-tighter uppercase">
                 Total Training <br />
                 <span className="italic font-extrabold text-white/40">Time vs. Hourly Rates</span>
               </h2>
               <p className="text-white/70 text-[0.95rem] leading-relaxed font-semibold mb-4 text-balance">
                 Don’t judge your learning journey purely by the hourly lesson price. Manual lessons can sometimes appear more cost-effective per hour, but automatic learners often progress faster because they are not spending early lessons managing clutch control, gear changes, hill starts, or stalling.
               </p>
               <p className="text-white/70 text-[0.95rem] leading-relaxed font-semibold mb-6 text-balance">
                 For many York learners, automatic lessons allow more time to be spent on observation, road positioning, roundabouts, dual carriageways, junction planning, and real test preparation.
               </p>
               <p className="text-white font-bold text-[0.9rem] leading-relaxed italic border-l-2 border-[#D4AF37] pl-4 text-balance">
                 “DVSA guidance shows that most learners need around 45 hours of structured instruction plus private practice. Some automatic learners may reach test standard sooner because the mechanical workload is lower — but every learner progresses at their own pace.”
               </p>
             </div>

             <div className="bg-white/5 p-6 sm:p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm">
               <div className="text-white text-[1rem] font-black mb-6 uppercase tracking-wider text-center flex items-center justify-center gap-2">
                 <Clock className="w-5 h-5 text-[#D4AF37]" />
                 <span>Typical Training Time Comparison</span>
               </div>
               
               <div className="space-y-5">
                 {/* Manual bar */}
                 <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                   <div className="flex justify-between text-white text-[0.75rem] font-extrabold uppercase mb-1">
                     <span>Manual Pathway</span>
                   </div>
                   <p className="text-white/60 text-[0.78rem] leading-relaxed mb-2 font-semibold">
                     DVSA guidance: around 45 hours of structured instruction
                   </p>
                   <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                     <div className="h-full bg-white/40 w-[100%]"></div>
                    </div>
                    <p className="text-[#D4AF37] text-[0.75rem] leading-normal font-semibold mt-3">
                      Our structured lesson plans are designed to help learners progress efficiently and reach test standard as soon as they are ready.
                    </p>
                    <div className="hidden">
                   </div>
                 </div>

                 {/* Automatic bar */}
                 <div className="bg-white/10 p-4 rounded-xl border-2 border-[#D4AF37]/50 relative">
                   <span className="absolute -top-2.5 right-4 px-2 py-0.5 bg-[#D4AF37] text-primary-dark text-[0.55rem] font-black uppercase tracking-widest rounded">
                     Reduced Workload
                   </span>
                   <div className="flex justify-between text-white text-[0.75rem] font-extrabold uppercase mb-1">
                     <span>Automatic Pathway</span>
                   </div>
                   <p className="text-white/80 text-[0.78rem] leading-relaxed mb-2 font-semibold">
                     Often fewer hours for many learners because there is no clutch or gear-control learning curve
                   </p>
                   <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                     <div className="h-full bg-[#D4AF37] w-[70%]"></div>
                    </div>
                    <p className="text-white/95 text-[0.75rem] leading-normal font-semibold mt-3">
                      Many learners progress more quickly in automatic vehicles, but every learner develops at a different pace. We design clear, modern training around individual milestones to keep your learning curve smooth.
                    </p>
                    <div className="hidden">
                   </div>
                 </div>
               </div>

               <div className="mt-6 pt-4 border-t border-white/10">
                 <p className="text-white/60 text-[0.7rem] leading-relaxed font-semibold text-center text-balance">
                  Disclaimer: DVSA averages serve as guidance only. Safe, structured driving development varies; some learners require fewer hours while others require more. Individual learning speed varies depending on confidence, frequency of practice, road awareness, and prior driving experience.
                 </p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. NEW INTERACTIVE SECTION: WHICH TRANSMISSION SUITS YOUR LIFE? (WHITE BACKGROUND) */}
      <section className="bg-white pt-10 pb-12 lg:pt-14 lg:pb-16 px-6 sm:px-10 border-b border-border-main/10 text-balance" id="interactive-decision">
        <div className="max-w-[1200px] mx-auto text-left">
          <div className="mb-6 text-center max-w-[850px] mx-auto">
            <span className="text-primary-dark/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block">07 / Self-Identification Tool</span>
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-3 tracking-tight uppercase leading-none">
              Which Transmission <span className="italic font-extrabold text-primary-text/30">Suits Your Life?</span>
            </h2>
            <div className="w-16 h-1.5 bg-primary-dark/10 mb-4 mx-auto"></div>
            <p className="text-secondary-text text-[1rem] leading-relaxed font-semibold">
              Click on the profile situation that matches your main aspirations to inspect your transmission recommendation instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left selector rails (4 columns layout) */}
            <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
              {lifeScenarios.map((scenario, index) => (
                <button
                  key={`scenario-btn-${index}`}
                  type="button"
                  onClick={() => setSelectedLifeScenario(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${selectedLifeScenario === index ? 'bg-primary-dark border-primary-dark text-white shadow-md translate-x-1' : 'bg-soft-bg border-border-main/5 text-primary-text hover:bg-soft-bg/80'}`}
                >
                  <div>
                    <span className={`text-[0.55rem] font-black uppercase tracking-widest block mb-1 ${selectedLifeScenario === index ? 'text-blue-400' : 'text-blue-600/60'}`}>
                      Profile {index + 1}
                    </span>
                    <span className="text-[0.9rem] font-extrabold uppercase tracking-tight block">
                      {scenario.title}
                    </span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${selectedLifeScenario === index ? 'text-blue-400 translate-x-1' : 'text-primary-text/20 group-hover:translate-x-0.5'}`} />
                </button>
              ))}
            </div>

            {/* Right card output (7 columns layout) */}
            <div className="lg:col-span-7 bg-soft-bg p-6 sm:p-8 rounded-[2rem] border border-border-main/10 flex flex-col justify-between items-start relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary-dark/[0.01] rounded-full -mr-24 -mt-24 pointer-events-none"></div>
              
              <div className="w-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-primary-dark/40">
                    Your Life Profile Assessment
                  </span>
                  <Award className="w-6 h-6 text-primary-dark/30 animate-pulse" />
                </div>

                <h3 className="text-[1.3rem] font-black text-primary-text uppercase tracking-tight mb-1">
                  "{lifeScenarios[selectedLifeScenario].title}"
                </h3>
                <p className="text-secondary-text text-[0.82rem] font-bold uppercase tracking-wider mb-4 text-primary-dark">
                  {lifeScenarios[selectedLifeScenario].subtitle}
                </p>

                <div className="p-4 bg-white rounded-xl border border-border-main/5 mb-5">
                  <span className={`inline-block text-[0.6rem] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-2 ${lifeScenarios[selectedLifeScenario].badgeColor}`}>
                    Recommended: {lifeScenarios[selectedLifeScenario].recommendation}
                  </span>
                  <p className="text-secondary-text text-[0.9rem] leading-relaxed font-semibold">
                    {lifeScenarios[selectedLifeScenario].reason}
                  </p>
                </div>
              </div>

              <div className="w-full border-t border-border-main/10 pt-4 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary-dark shrink-0" />
                  <span className="text-[0.82rem] font-black text-primary-text uppercase tracking-wider">
                    {lifeScenarios[selectedLifeScenario].highlightMetric}
                  </span>
                </div>
                <a
                  href="#enquiry-form"
                  className="bg-primary-dark text-white hover:text-blue-400 hover:bg-[#1E293B] px-6 py-2.5 rounded-lg text-[0.7rem] font-black uppercase tracking-widest transition-all text-center no-underline cursor-pointer"
                >
                  Start Your Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. NEW YORK-SPECIFIC SECTION: LEARNING TO DRIVE IN YORK – THE LOCAL FACTOR (LIGHT GREY) */}
      <section className="bg-soft-bg pt-10 pb-12 lg:pt-14 lg:pb-16 px-6 sm:px-10 border-b border-border-main/10 text-balance" id="local-factor">
        <div className="max-w-[1200px] mx-auto text-left">
          <div className="mb-8">
            <span className="text-primary-dark/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block">08 / Local Realities</span>
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-3 tracking-tight uppercase leading-[1.1]">
              Learning to Drive in York – <br />
              <span className="italic font-extrabold text-primary-text/30">The Local Factor</span>
            </h2>
            <div className="w-16 h-1.5 bg-primary-dark/10 mb-4"></div>
            <p className="text-secondary-text text-[1rem] leading-relaxed font-semibold max-w-[850px]">
              Any driving school can explain the difference between a gearstick and an automatic pedal. But York presents a highly unique road layout — from the ancient city walls to the modern DVSA test centre at Monks Cross, from the residential streets of Clifton and Heworth to the fast-moving York Ring Road. Here is how automatic vs manual driving lessons in York actually play out where it matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Stop and start craws */}
            <div className="bg-white p-5 rounded-2xl border border-border-main/5 shadow-sm">
              <div className="flex items-center gap-2.5 mb-3">
                <MapPin className="w-5 h-5 text-primary-dark shrink-0" />
                <h3 className="font-extrabold text-primary-text text-[0.92rem] uppercase tracking-wider">City Centre & Walls</h3>
              </div>
              <p className="text-secondary-text text-[0.82rem] leading-relaxed mb-4">
                Crawling along narrow, historic routes like Gillygate, Bootham lanes, or adjacent to the ancient Barbican walls yields constant stop-and-start queues. 
              </p>
              <div className="space-y-1.5 text-[0.75rem] border-t border-border-main/5 pt-3">
                <div className="text-primary-dark font-black uppercase">Automatic Experience:</div>
                <p className="text-secondary-text italic">✔ Zero clutch exhaustion. Left foot stays relaxed while you focus purely on lanes, pedestrians and cyclists.</p>
                <div className="text-primary-text/60 font-black uppercase mt-2">Manual Experience:</div>
                <p className="text-secondary-text italic">✔ Direct mechanical connection. Requires fast foot coordination and steady throttle control to stop stalling.</p>
              </div>
            </div>

            {/* fast bypass roads */}
            <div className="bg-white p-5 rounded-2xl border border-border-main/5 shadow-sm">
              <div className="flex items-center gap-2.5 mb-3">
                <Car className="w-5 h-5 text-primary-dark shrink-0" />
                <h3 className="font-extrabold text-primary-text text-[0.92rem] uppercase tracking-wider">A1237 Outer bypass</h3>
              </div>
              <p className="text-secondary-text text-[0.82rem] leading-relaxed mb-4">
                Merging onto fast-moving sections of the A1237 outer ring road or handling high-velocity roundabouts like Hopgrove demands instant gear selection.
              </p>
              <div className="space-y-1.5 text-[0.75rem] border-t border-border-main/5 pt-3">
                <div className="text-primary-dark font-black uppercase">Automatic Experience:</div>
                <p className="text-secondary-text italic">✔ Smooth kick-down acceleration. Merging lanes flows intuitively with absolute zero gear stress or speed dips.</p>
                <div className="text-primary-text/60 font-black uppercase mt-2">Manual Experience:</div>
                <p className="text-secondary-text italic">✔ Requires precise downshifting ahead of rapid merging slots to keep engines from laboring at critical junctions.</p>
              </div>
            </div>

            {/* Test paths */}
            <div className="bg-white p-5 rounded-2xl border border-border-main/5 shadow-sm">
              <div className="flex items-center gap-2.5 mb-3">
                <ShieldCheck className="w-5 h-5 text-primary-dark shrink-0" />
                <h3 className="font-extrabold text-primary-text text-[0.92rem] uppercase tracking-wider">Monks Cross Test Routes</h3>
              </div>
              <p className="text-secondary-text text-[0.82rem] leading-relaxed mb-4">
                During your practical <strong><a href="/articles/what-happens-on-the-york-driving-test/" className="text-primary-dark font-bold hover:underline">driving test preparation in York</a></strong> at the Monks Cross centre, physical errors can trigger instant test failure.
              </p>
              <div className="space-y-1.5 text-[0.75rem] border-t border-border-main/5 pt-3">
                <div className="text-primary-dark font-black uppercase">Automatic Experience:</div>
                <p className="text-blue-600 font-extrabold italic">✔ A strong test safeguard. Stalling is physically impossible, removing a major failure risk — which is why many York learners choose our <strong><a href="/automatic-driving-lessons/" className="text-blue-700 font-black hover:underline underline-offset-4">automatic driving lessons</a></strong>.</p>
                <div className="text-primary-text/60 font-black uppercase mt-2">Manual Experience:</div>
                <p className="text-secondary-text italic">✔ Retain engine braking controls. Highly valued by traditional purists who prefer exact mechanics of our <strong><a href="/manual-driving-lessons/" className="text-primary-dark font-black hover:underline underline-offset-4">manual driving lessons</a></strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY YORK LEARNERS SECTION */}
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

      {/* RECENT PASSES SECTION */}
      <section className="bg-soft-bg py-10 lg:py-14 px-6 sm:px-10 overflow-hidden border-b border-border-main/10 text-balance">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="mb-8">
            <span className="text-primary-dark/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block">Proven Candidates</span>
            <h2 className="text-[1.8rem] md:text-[2rem] font-black text-primary-text mb-2 tracking-tighter uppercase leading-none">
              Recent Passes – <span className="italic font-extrabold text-[#8E969D]">York</span>
            </h2>
            <p className="text-secondary-text text-[0.85rem] md:text-[0.92rem] leading-relaxed font-semibold max-w-[600px] mx-auto">
              Real results under authentic test constraints. Check out recent successful candidates completing practical tests across local routes.
            </p>
          </div>

          <div className="relative group">
            {/* Navigation Handles */}
            <div className="absolute top-1/2 left-2 md:-left-12 -translate-y-1/2 z-20">
              <button
                type="button"
                onClick={prevPass}
                aria-label="Previous pass"
                className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-white border border-border-main/20 shadow-md flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-200 pointer-events-auto cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 right-2 md:-right-12 -translate-y-1/2 z-20">
              <button
                type="button"
                onClick={nextPass}
                aria-label="Next pass"
                className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-white border border-border-main/20 shadow-md flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-200 pointer-events-auto cursor-pointer"
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
                    <div className="aspect-[4/3] bg-white rounded-[2rem] border border-border-main/10 overflow-hidden relative group/card shadow-sm hover:shadow-md transition-all duration-300">
                      <img loading="lazy" decoding="async" width={360} height={480} src={pass.src} alt="York driving test pass" className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Mobile Navigation Dots */}
            <div className="flex justify-center gap-2 mt-4 md:hidden">
              {recentPasses.map((pass, i) => (
                <button 
                  type="button"
                  key={`auto-pass-dot-${pass.id}`}
                  onClick={() => setCurrentPassIndex(i)}
                  aria-label={`Go to pass ${i + 1}`}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${currentPassIndex === i ? 'bg-primary-dark w-3' : 'bg-primary-dark/20'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. EXPLORE OUR DRIVING SERVICES (WHITE BACKGROUND) - VISUALLY MATCHING "Everything You Need to Pass" */}
      <section className="bg-white pt-10 pb-12 lg:pt-14 lg:pb-16 px-6 sm:px-10 border-t border-border-main/10 text-balance" id="services">
        <div className="max-w-[1280px] mx-auto text-center mb-8">
          <span className="text-primary-dark/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block">09 / Local Training In York</span>
          <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-3 tracking-tighter uppercase leading-none">
            Explore Our <span className="italic text-primary-text/30">Driving Services</span>
          </h2>
          <p className="text-secondary-text text-[0.90rem] font-semibold opacity-70">Highly structured local guidance for York's future qualified drivers.</p>
        </div>
        
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "Automatic Driving Lessons", 
              desc: "Learn to drive in York with our patient automatic driving instructors. No gears or clutch stalling.", 
              url: "/automatic-driving-lessons/" 
            },
            { 
              title: "Manual Driving Lessons", 
              desc: "Gain maximum licence flexibility and drive any vehicle with our manual driving lessons in York — covering routes across Acomb, Clifton, and Fulford.",
              url: "/manual-driving-lessons/" 
            },
            { 
              title: "Intensive Driving Courses", 
              desc: "Build test-ready skills quickly in York with focused, high-frequency training across Acomb, Fulford, and Heworth routes.",
              url: "/intensive-driving-courses/" 
            },
            { 
              title: "Mock Driving Tests", 
              desc: "Simulate exact test-day pressure and eliminate errors on real Monks Cross test paths.", 
              url: "/mock-driving-tests/" 
            }
          ].map((item, idx) => (
            <a key={`pass-item-${idx}`} href={item.url} className="bg-soft-bg p-6 sm:p-8 rounded-[2rem] border border-border-main/5 no-underline group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <span className="text-primary-dark/20 text-3xl font-black mb-4 block group-hover:text-primary-dark/40 transition-colors">0{idx + 1}</span>
                <h3 className="text-[1.1rem] font-black text-primary-text mb-3 uppercase tracking-tight leading-tight group-hover:text-primary-dark transition-colors">{item.title}</h3>
                <p className="text-secondary-text text-[0.85rem] leading-relaxed mb-6 font-medium">{item.desc}</p>
              </div>
              <div className="pt-2">
                <span className="text-primary-dark/40 font-bold text-[0.68rem] uppercase tracking-widest border-b border-primary-dark/10 group-hover:border-primary-dark group-hover:text-primary-dark transition-all">Explore Service →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

    </ArticleLayout>
  );
}
