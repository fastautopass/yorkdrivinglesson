import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ArticleLayout from '../../ArticleLayout';
import { 
  ChevronLeft, 
  ChevronRight, 
  Flag 
} from 'lucide-react';

export default function YorkTestRoutesMistakes() {
  const [activeStage, setActiveStage] = useState(0);
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

  const stages = [
    {
      title: "Leaving Monks Cross",
      significance: "Stage 01: Initial Minutes",
      face: "Commercial retail traffic, multiple closely spaced mini-roundabouts, immediate speed limit transitions (20mph, 30mph, 40mph). Priority rules at the test centre gates.",
      avoid: "Forgetting to look for pedestrians, cutting corners on mini-roundabouts, speeding out of the 20mph zone too early.",
      examiner: "Excellent command of vehicle controls under low speeds, thorough observation circles, and early awareness of pedestrian crossings."
    },
    {
      title: "Handling Roundabouts",
      significance: "Stage 02: Main Arteries",
      face: "Large multi-lane roundabouts (Grimston Bar, Hopgrove, A1237 outlets) with high-density commuter traffic and complex signage.",
      avoid: "Choosing the incorrect lane, drifting over lane dividers, or hesitating at slip roads while waiting for oversized gaps.",
      examiner: "Early planning (reading gantry signs hundreds of yards ahead), confident lane positioning, and brisk, safe entry selections."
    },
    {
      title: "Moving Through Residential Areas",
      significance: "Stage 03: Precision Driving",
      face: "Narrow domestic lanes in Heworth, Tang Hall, or Huntington. Densely lined with parked delivery vans and commuter cars.",
      avoid: "Squeezing through spaces too confidently, passing parked cars at high speed, or failing to yield to oncoming priority vehicles.",
      examiner: "Clear visual assessment of upcoming bottlenecks, proactive speed moderation, and leaving a safe door-width margin."
    },
    {
      title: "Independent Driving",
      significance: "Stage 04: Navigational Skills",
      face: "A 20-minute section driven using physical gantry/destination road signs or following real-time audio guidance on a sat-nav.",
      avoid: "Deviating from the route in a panic, taking sudden unsafe lane cuts, or letting speed drift while checking screens.",
      examiner: "Maintaining exceptional standard of driving regardless of visual direction. Wrong turns don't fail you; unsafe manoeuvres do."
    },
    {
      title: "Returning to Test Centre",
      significance: "Stage 05: The Final Leg",
      face: "Re-entering the busy Monks Cross lanes. Tight parking slots at the test centre and executing precise physical manoeuvres (e.g., bay reverse or forward parking).",
      avoid: "Losing mental focus in the final minutes, skipping mirror checks during parking, or rushing the final reversing phase.",
      examiner: "Steady, controlled speed, thorough observation loops (including blind spots), and absolute composure until the handbrake is set."
    }
  ];

  const faqs = [
    {
      question: "What are the York driving test routes like?",
      answer: "The York driving test routes cover a wide range of environments designed to test every aspect of your driving. You will encounter fast-flowing sections on the A64 and A1237 York Ring Road, busy multi-lane roundabouts at Grimston Bar and Hopgrove, narrow residential lanes around Heworth and Tang Hall, and the retail park corridors near Monks Cross Driving Test Centre. Build familiarity with these roads through our **[automatic driving lessons in York](/automatic-driving-lessons)** or our **[manual driving lessons in York](/manual-driving-lessons)**."
    },
    {
      question: "Do I need to memorise York test routes?",
      answer: "No, you do not need to memorise the routes. The DVSA has stopped publishing official test routes to discourage rote learning. The examiner wants to see that you can read road signs, respond to marking hints, and make safe, legal decision-making. Focusing on flexible driving style is far more effective than trying to memorise lines."
    },
    {
      question: "Where does the York driving test usually start?",
      answer: "All practical tests in York start at the **[York Driving Test Centre](/monks-cross-driving-test-centre)**, located at Unit 2, Arabesque House, Monks Cross Drive, Huntington, York, YO32 9GW. Because of this, your test will start and end in a busy commercial environment with high traffic density, pedestrian crossings, and frequent speed zone changes."
    },
    {
      question: "Does the York test include Monks Cross?",
      answer: "Yes, almost every test route starting or finishing in York will navigate Monks Cross Drive and its nearby roundabouts. You'll need to show excellent lane discipline, manage speed transitions between 20mph, 30mph, and 40mph, and keep a sharp lookout for shoppers and retail delivery vans."
    },
    {
      question: "Are roundabouts common on York driving tests?",
      answer: "Roundabouts are extremely common. York's outer ring road and retail approaches rely heavily on them. You will face a combination of small domestic mini-roundabouts in residential neighbourhoods and large, multi-lane roundabouts that require early lane planning and careful mirror checks."
    },
    {
      question: "Is Grimston Bar likely to appear on the York test?",
      answer: "Yes, many routes use Grimston Bar because it represents one of York's busiest multi-lane junctions. It tests your ability to read gantry signs, position yourself correctly in multi-lane layouts, and merge confidently onto fast highway spurs."
    },
    {
      question: "Will I drive on the A64 or A1237?",
      answer: "Most routes incorporate some high-speed sections on either the A64 bypass or the A1237 ring road. Examiners want to see that you can emerge from slip-roads smoothly, match the flow rate of highway traffic, and maintain a safe following distance under high-speed constraints."
    },
    {
      question: "What are the most common driving test mistakes in York?",
      answer: "The most common driving test mistakes in York include inadequate junction observations, failing to check mirrors before changing speed or direction, wrong roundabout lane alignment, and holding back traffic unnecessarily (hesitation). You can prepare specifically to avoid these via our realistic **[mock driving tests in York](/mock-driving-tests)**."
    },
    {
      question: "What causes most serious faults on a driving test?",
      answer: "Historically, poor observations at junctions and inadequate mirror-signal-manoeuvre sequences are the leading causes of serious faults. In compact cities like York with prominent cycle paths, failing to check your mirrors before changing directions or turning left is also highly prone to triggering serious faults."
    },
    {
      question: "How can I avoid failing for observations?",
      answer: "The easiest way to avoid observation faults is to make scanning a deliberate, physical habit, which we train on every location-specific **[driving lesson in York](/york)**. Turn your head clearly to look into mirrors, pause at junctions to check both left and right thoroughly, and conduct a physical blind-spot check before moving away."
    },
    {
      question: "Is the independent driving section difficult?",
      answer: "The independent driving section is not designed to trick you. It simply tests whether you can maintain standard safety rules while handling navigation. For 20 minutes, you will follow a sat-nav or road signs. Our guide on **[what happens on the York driving test](/articles/what-happens-on-the-york-driving-test)** explains the process in detail."
    },
    {
      question: "Can a wrong turn fail my driving test?",
      answer: "No! Taking a wrong turn will never fail your driving test, as long as you do so safely and legally. If you realize you are in the wrong lane, do not make a sudden, erratic lane cut. Stay in your lane, take the turn, and the examiner will guide you back onto the correct route."
    },
    {
      question: "Do mock driving tests help with York routes?",
      answer: "Yes, highly targeted **[mock driving tests in York](/mock-driving-tests)** are incredibly beneficial. They simulate the exact pressure of the real exam, allow you to practise under real DVSA scoring conditions, and expose you to the exact routes and pressure points around Huntington, Heworth, and Clifton."
    },
    {
      question: "How do I know when I’m ready for the York driving test?",
      answer: "You are ready for your test when you can drive consistently for a full lesson without your instructor needing to intervene (either physically or verbally). Practising until you pass a realistic mock driving test and feel comfortable managing **[driving test nerves in York](/articles/driving-test-nerves-how-to-stay-calm)** is a great indicator."
    }
  ];

  return (
    <ArticleLayout 
      title={<>York Driving <span className="italic font-extrabold text-white/50">Test Routes</span> & Mistakes</>}
      intro="Preparing for York driving test routes isn't about memorising fixed turns. It's about building the calm, versatile decision-making skills needed to handle any layout. From complex ring roads to narrow residential lanes, here is your direct guide to passing first time."
      faqs={faqs}
      faqBgClassName="bg-soft-bg"
      faqPaddingClassName="pt-10 pb-12 lg:pt-14 lg:pb-16"
      faqHeaderMarginClassName="mb-8 lg:mb-10"
      faqTitle={<>Answers to Your <span className="italic font-extrabold text-[#8E969D]">York Driving Test FAQs</span></>}
      faqSubtitle="Detailed, local insights to prepare you for every speed zone, junction, and roundabout around Monks Cross."
      hideFooterCta={true}
      ctaText="Know The Routes."
      ctaItalic="Now Go Drive Them In York."
      currentSlug="york-driving-test-routes-common-mistakes"
      relatedBgClassName="bg-white"
    >
      {/* SECTION 1: UNDERSTANDING YORK TEST ROUTES (WHITE BACKGROUND) */}
      <section className="bg-white pt-8 pb-10 lg:pt-12 lg:pb-14 px-6 sm:px-10 border-b border-border-main/10 text-balance" id="route-overview">
        <div className="max-w-[1000px] mx-auto text-center">
          <span className="text-primary-dark/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block animate-fade-in">01 / Route Overview</span>
          <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-4 tracking-tighter uppercase leading-none">
            Understanding York <span className="italic font-extrabold text-primary-text/40">Test Routes</span>
          </h2>
          <div className="w-16 h-1.5 bg-primary-dark/10 mb-8 mx-auto"></div>
          <div className="space-y-6 max-w-[800px] mx-auto text-secondary-text text-[0.95rem] md:text-[1.02rem] leading-relaxed font-semibold">
            <p>
              One of the most common anxieties for local learners is the desire to memorise every possible turn of the York driving test routes. However, the DVSA examiners are not testing your memory—they are assessing your ability to make safe, independent decisions in real time. Starting with our detailed guide on <strong><a href="/articles/what-happens-on-the-york-driving-test" className="text-primary-dark font-bold hover:underline">what happens on the York driving test</a></strong> can help contextualise this entire process.
            </p>
            <p>
              Your test, starting from the busy hub at <strong className="text-primary-text font-semibold">Monks Cross Drive</strong>, will navigate a diverse mix of environments. You'll move from the bustling retail park traffic in <strong className="text-primary-text font-semibold">Huntington</strong> to the narrow, historic residential streets of <strong className="text-primary-text font-semibold">Heworth</strong>, <strong className="text-primary-text font-semibold">Tang Hall</strong>, and <strong className="text-primary-text font-semibold">Clifton</strong>. We cover all of these road types on every <strong><a href="/york" className="text-primary-dark font-bold hover:underline">driving lesson in York</a></strong>. You will also encounter high-speed multi-lane configurations on the <strong className="text-primary-text font-semibold">A64</strong> or parts of the <strong className="text-primary-text font-semibold">A1237 ring road</strong>, as well as complex urban roundabouts and busier city approaches. 
            </p>
            <p>
              By understanding the types of roads and decisions you'll encounter, rather than trying to memorise fixed paths, you'll build the calm, analytical mindset needed to navigate any route with absolute confidence. Check where you stand with our realistic <strong><a href="/mock-driving-tests" className="text-primary-dark font-bold hover:underline">mock driving tests in York</a></strong> before your actual test date.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE YORK TEST ROUTE BREAKDOWN (SOFT GREY BACKGROUND) */}
      <section className="bg-soft-bg pt-8 pb-10 lg:pt-12 lg:pb-14 px-6 sm:px-10 border-b border-border-main/10 text-balance" id="route-breakdown">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-dark/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block">02 / Structural Anatomy</span>
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-3 tracking-tighter uppercase leading-none font-sans">
              The York Test <span className="italic font-extrabold text-primary-text/40">Route Breakdown</span>
            </h2>
            <p className="text-secondary-text text-[0.9rem] font-semibold md:text-[0.95rem] max-w-[600px] mx-auto">
              York driving test routes are meticulously crafted by the DVSA to cover four distinct driving environments, each testing a specific set of critical competencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Retail Park & Monks Cross",
                focus: "Pedestrians & Pace",
                desc: "Starting near Monks Cross, you will immediately face heavy pedestrian activity, zebra crossings, and sudden speed limit changes near shopping hubs.",
                keyCompetencies: ["Precise lane discipline", "Zebra crossing vigilance", "Speed zone transitions"]
              },
              {
                title: "Roundabouts & Ring Roads",
                focus: "Early Planning & Speed",
                desc: "Navigating busy junctions like Grimston Bar or Hopgrove onto the A64 / A1237 ring roads, testing your ability to merge, lane plan, and maintain speed.",
                keyCompetencies: ["Early lane alignment", "Safe ring road merging", "Overhead sign reading"]
              },
              {
                title: "Residential Streets",
                focus: "Clearance & Meeting Dynamics",
                desc: "Weaving through Heworth or Tang Hall residential networks presents tight channels of parked cars and oncoming traffic, testing priority control.",
                keyCompetencies: ["Door-width clearances", "Yielding at bottlenecks", "Adaptive visual pacing"]
              },
              {
                title: "Independent Driving",
                focus: "Sat-Nav & Sign Navigation",
                desc: "Following sat-nav voice prompts or physical road signs for 20 minutes, demonstrating independent safety while lane planning around Huntington loops.",
                keyCompetencies: ["Eyes forward, not on screens", "Calm execution of wrong turns", "Consistent defensive focus"]
              }
            ].map((card, idx) => (
              <div key={`route-card-${idx}`} className="bg-white p-6 rounded-[2rem] border border-border-main/10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
                <div>
                  <span className="text-[0.7rem] font-black uppercase tracking-wider text-primary-dark/40 mb-2 block">Route Zone 0{idx + 1}</span>
                  <h3 className="text-[1.12rem] font-black text-primary-text mb-1 uppercase tracking-tight leading-tight">{card.title}</h3>
                  <p className="text-primary-dark font-bold text-[0.75rem] uppercase tracking-wide mb-3">{card.focus}</p>
                  <p className="text-secondary-text text-[0.82rem] leading-relaxed mb-6 font-medium">{card.desc}</p>
                </div>
                <div className="border-t border-border-main/5 pt-4">
                  <h4 className="text-[0.62rem] font-black text-primary-text uppercase tracking-widest mb-2">Key Critical Points:</h4>
                  <ul className="space-y-1.5 list-none p-0 m-0">
                    {card.keyCompetencies.map((comp, cIdx) => (
                      <li key={cIdx} className="text-secondary-text text-[0.72rem] font-semibold flex items-start gap-1.5">
                        <span className="text-[#00B67A] text-xs">✔</span>
                        <span>{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: COMMON DRIVING TEST MISTAKES IN YORK (WHITE BACKGROUND) */}
      <section className="bg-white pt-8 pb-10 lg:pt-12 lg:pb-14 px-6 sm:px-10 border-b border-border-main/10 text-balance" id="common-mistakes">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-dark/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block">03 / DVSA Insights</span>
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-3 tracking-tighter uppercase leading-none">
              Common Driving <span className="italic font-extrabold text-primary-text/40">Test Mistakes</span> in York
            </h2>
            <p className="text-secondary-text text-[0.9rem] font-semibold md:text-[0.95rem] max-w-[600px] mx-auto">
              Historically, these are the most common driving test mistakes and faults registered by DVSA examiners at the York driving test centre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Poor Junction Observations",
                desc: "Failure to look left and right thoroughly when emerging from junctions. On York's multi-tier approaches, learners often emerge too quickly without checking both sides.",
                fix: "Use the 'look once, check twice' rule, leaning forward to clear split pillars."
              },
              {
                title: "Inadequate Mirror Checks",
                desc: "Changing speed or direction without routine checks on center and side mirrors. Crucial when decelerating for cyclists on Haxby Road.",
                fix: "Demonstrate a clear physical mirror sequence (Interior, Exterior, Signal) before any action."
              },
              {
                title: "Wrong Lane Positioning",
                desc: "Drifting into incorrect lanes on major roundabouts like Grimston Bar or the A1237 connections. This can lead to serious marking if adjacent drivers must brake.",
                fix: "Read road markings far in advance; never change lanes abruptly once on the roundabout."
              },
              {
                title: "Hesitation at Safe Gaps",
                desc: "Waiting too long when a clear, safe opportunity exists at junctions or roundabouts. It demonstrates a lack of confidence that examiner marks as serious.",
                fix: "If a vehicle is safely distant and you can clear the lane without making others brake, take the gap."
              },
              {
                title: "Late Response to Road Signs",
                desc: "Not reacting quickly to speed limit changes, particularly the tight 20mph residential pockets and sudden 40mph rural exits.",
                fix: "Scan ahead continuously for new terminal boards and adjust speed before passing them."
              },
              {
                title: "Speed Management Errancy",
                desc: "Allowing speeds to creep up above the limit, or driving excessively slow (e.g. 20 in a 40 zone) when conditions are clear, blocking natural traffic flow.",
                fix: "Match your speed to the limit when safe. Check your speedometer regularly on wide A-roads."
              },
              {
                title: "Poor Planning for Obstructions",
                desc: "Failing to anticipate parked cars in narrow areas like Heworth, leading to emergency braking when oncoming cars approach.",
                fix: "Spot obstructions 100 yards ahead. Ease off your accelerator early to create passing windows."
              },
              {
                title: "Late or Misleading Signals",
                desc: "Signalling too late before a turn, or leaving a signal on after a lane change near Monks Cross, confusing other motorists.",
                fix: "Signal at least 5–8 car lengths before turning and cancel them manually after completing the turn."
              }
            ].map((mistake, idx) => (
              <div key={`mistake-card-${idx}`} className="bg-soft-bg p-6 rounded-[2.5rem] border border-border-main/5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
                <div>
                  <div className="w-8 h-8 rounded-full bg-primary-dark/5 flex items-center justify-center font-black text-xs text-primary-dark mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-[1.05rem] font-black text-primary-text mb-2 uppercase tracking-tight leading-tight">{mistake.title}</h3>
                  <p className="text-secondary-text text-[0.82rem] leading-relaxed mb-6 font-medium">{mistake.desc}</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-border-main/5">
                  <span className="text-[0.6rem] font-black uppercase text-primary-dark tracking-widest block mb-1">How To Prevent It:</span>
                  <p className="text-primary-text text-[0.78rem] leading-normal font-semibold">{mistake.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: INTERACTIVE - ROUTE PRESSURE POINTS (SOFT GREY BACKGROUND) */}
      <section className="bg-soft-bg pt-8 pb-10 lg:pt-12 lg:pb-14 px-6 sm:px-10 border-b border-border-main/10 text-balance" id="pressure-points">
        <div className="max-w-[1040px] mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary-dark/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block font-sans">04 / Route Pressure Points</span>
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-3 tracking-tighter uppercase leading-none font-sans">
              Interactive York <span className="italic font-extrabold text-primary-text/40">Route Journey</span>
            </h2>
            <p className="text-secondary-text text-[0.9rem] font-semibold md:text-[0.95rem] max-w-[620px] mx-auto">
              Follow a candidate's chronological journey through the pressure points of a typical practical test. Click each stage to see critical examiner expectations.
            </p>
          </div>

          {/* Navigation Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8">
            {stages.map((stage, idx) => (
              <button
                key={`stage-btn-${idx}`}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`px-4 py-2.5 rounded-full text-[0.68rem] md:text-[0.72rem] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeStage === idx 
                    ? 'bg-primary-dark text-white shadow-md' 
                    : 'bg-white text-secondary-text border border-border-main/10 hover:bg-white hover:text-primary-text'
                }`}
              >
                {idx + 1}. {stage.title}
              </button>
            ))}
          </div>

          {/* Interactive Screen Wrapper */}
          <div className="relative overflow-hidden bg-white p-6 md:p-10 rounded-[2.5rem] border border-border-main/10 shadow-sm min-h-[380px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={`active-stage-content-${activeStage}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-12">
                  <span className="inline-block bg-primary-dark/10 text-primary-dark text-[0.58rem] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                    {stages[activeStage].significance}
                  </span>
                  <h3 className="text-[1.4rem] md:text-[1.6rem] font-black text-primary-text uppercase tracking-tight mb-4">{stages[activeStage].title}</h3>
                </div>

                <div className="lg:col-span-4 space-y-2">
                  <h4 className="text-[0.7rem] font-black text-primary-dark uppercase tracking-widest">What You Might Face:</h4>
                  <p className="text-secondary-text text-[0.85rem] leading-relaxed font-semibold">{stages[activeStage].face}</p>
                </div>

                <div className="lg:col-span-4 space-y-2 border-t lg:border-t-0 lg:border-x border-border-main/10 pt-4 lg:pt-0 lg:px-6">
                  <h4 className="text-[0.7rem] font-black text-[#EA4335] uppercase tracking-widest">The Mistake To Avoid:</h4>
                  <p className="text-secondary-text text-[0.85rem] leading-relaxed font-semibold">{stages[activeStage].avoid}</p>
                </div>

                <div className="lg:col-span-4 space-y-2 border-t lg:border-t-0 pt-4 lg:pt-0">
                  <h4 className="text-[0.7rem] font-black text-[#34A853] uppercase tracking-widest">What The Examiner Wants:</h4>
                  <p className="text-secondary-text text-[0.85rem] leading-relaxed font-semibold">{stages[activeStage].examiner}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between items-center mt-8 pt-6 border-t border-border-main/5">
              <button
                type="button"
                onClick={() => setActiveStage((prev) => (prev - 1 + stages.length) % stages.length)}
                className="flex items-center gap-1.5 text-[0.68rem] font-black text-secondary-text uppercase tracking-widest hover:text-primary-text transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" /> Prev Stage
              </button>

              <div className="flex gap-1">
                {stages.map((_, idx) => (
                  <div 
                    key={`dot-${idx}`}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${activeStage === idx ? 'bg-primary-dark w-4' : 'bg-primary-dark/20'}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActiveStage((prev) => (prev + 1) % stages.length)}
                className="flex items-center gap-1.5 text-[0.68rem] font-black text-secondary-text uppercase tracking-widest hover:text-primary-text transition-colors cursor-pointer"
              >
                Next Stage <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: DARK PREMIUM BLOCK - COMMON FAILS AND PASS CRITERIA */}
      <section className="bg-primary-dark pt-10 pb-12 lg:pt-14 lg:pb-16 px-6 sm:px-10 text-balance relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.015] skew-x-[-15deg] translate-x-1/4"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-dark/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1040px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-white/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block">05 / The Margin of Error</span>
              <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-white mb-6 uppercase tracking-tighter leading-none">
                The Mistakes That <span className="italic font-extrabold text-white/30">Usually Cost Learners</span>
              </h2>
              <p className="text-[#9CA3AF] text-[0.88rem] md:text-[0.95rem] leading-relaxed mb-8 font-medium">
                DVSA examinations allow up to <strong className="text-white">15 driver faults (minors)</strong>, but zero serious or dangerous faults (majors). These are the critical slip-ups that most frequently upgrade standard minors into critical serious failures:
              </p>

              <div className="space-y-4">
                {[
                  { title: "unsafe observations", desc: "Forgetting the final look-back or side look when taking off at a busy junction." },
                  { title: "poor lane discipline", desc: "Cross-drifting or straddling lane markers on Grimston Bar." },
                  { title: "rushing at roundabouts", desc: "Pushing into gaps that force oncoming drivers to lift off." },
                  { title: "hesitation at clear opportunities", desc: "Holding back traffic flow by not taking safe, visible openings." },
                  { title: "forgetting mirrors before slowing", desc: "Decelerating suddenly without reviewing rearward flow." },
                  { title: "reacting late to signs", desc: "Sailing past 30-to-20mph signage without adjusting speed." },
                  { title: "losing focus after one small error", desc: "Anxious catastrophizing that leads to compounding mistakes." }
                ].map((item, idx) => (
                  <div key={`dark-list-${idx}`} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white/90 font-black text-[0.62rem] shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-white text-[0.82rem] font-bold uppercase tracking-tight">{item.title}</h4>
                      <p className="text-white/50 text-[0.75rem] leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/[0.03] p-6 md:p-8 rounded-[2.5rem] border border-white/10 text-left backdrop-blur-sm shadow-xl">
              <span className="text-[#34A853] font-black text-[0.62rem] uppercase tracking-[0.2em] mb-2 block">Examiner Guidance</span>
              <h3 className="text-white text-[1.25rem] md:text-[1.4rem] font-black uppercase tracking-tight mb-4">RECOVERING AFTER A MISTAKE</h3>
              <p className="text-white/70 text-[0.85rem] leading-relaxed mb-6 font-medium">
                A single driving error is rarely terminal. Many candidates pass with multiple minor faults they were convinced would fail them. What matters to the DVSA examiner is how you react:
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-[#34A853] shrink-0 mt-1 font-bold text-[0.85rem]">01</span>
                  <div>
                    <h4 className="text-white text-[0.82rem] font-bold uppercase tracking-tight">Accept & Reset</h4>
                    <p className="text-white/50 text-[0.75rem] leading-normal">Acknowledge the moment, release the anxiety, and immediately return your full focus to the active road ahead.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#34A853] shrink-0 mt-1 font-bold text-[0.85rem]">02</span>
                  <div>
                    <h4 className="text-white text-[0.82rem] font-bold uppercase tracking-tight">Avoid Catastrophising</h4>
                    <p className="text-white/50 text-[0.75rem] leading-normal">Assuming a simple error is an automatic fail leads to distraction, causing the progressive mistakes that actually fail tests.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#34A853] shrink-0 mt-1 font-bold text-[0.85rem]">03</span>
                  <div>
                    <h4 className="text-white text-[0.82rem] font-bold uppercase tracking-tight">Prioritise Safe Corrections</h4>
                    <p className="text-white/50 text-[0.75rem] leading-normal">If you stall or take a wrong turn, execute your recovery safely and legally. Examiners heavily credit calm, safe adjustments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: LOCAL PREPARATION SECTION (WHITE BACKGROUND) */}
      <section className="bg-white pt-8 pb-10 lg:pt-12 lg:pb-14 px-6 sm:px-10 border-b border-border-main/10 text-balance" id="local-prep">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-primary-dark/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block">06 / Progressive Training</span>
              <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-6 uppercase tracking-tighter leading-none">
                How We Prepare You For York <span className="italic font-extrabold text-primary-text/40">Test Routes</span>
              </h2>
              <p className="text-secondary-text text-[0.92rem] md:text-[0.98rem] leading-relaxed mb-6 font-semibold">
                Our lessons are not based on boring rote memorization of a rigid 40-minute line. Instead, we teach you how to make solid decisions dynamically across York’s main test arterial zones. By building confidence in real-world environments, you will satisfy any DVSA examiner.
              </p>
              <p className="text-secondary-text text-[0.92rem] md:text-[0.98rem] leading-relaxed mb-6 font-semibold">
                Our structured training includes regular <a href="/mock-driving-tests" className="text-primary-dark underline font-bold hover:text-black">mock driving tests</a> that put you under real examination conditions, so test-day itself feels like a familiar routine.
              </p>
              <p className="text-secondary-text text-[0.92rem] md:text-[0.98rem] leading-relaxed mb-6 font-semibold">
                We also understand that mindset is critical. If you suffer from pre-test anxiety, our guide on how to manage <a href="/articles/driving-test-nerves-how-to-stay-calm" className="text-primary-dark underline font-bold hover:text-black">driving test nerves York</a> provides verified psychological tools to keep you focused. You can also read our guide on <a href="/articles/what-happens-on-the-york-driving-test" className="text-primary-dark underline font-bold hover:text-black">what happens on the York driving test</a> to understand the examiner's step-by-step test blueprint.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { 
                  title: "Mock Driving Tests", 
                  desc: "Rehearse realistic marking schemes under DVSA rules on the actual routes around Monks Cross.",
                  url: "/mock-driving-tests",
                  hasLink: true
                },
                {
                  title: "Route Familiarity",
                  desc: "Learn to navigate Clifton Moor, Grimston Bar, and residential junctions with ease.",
                  hasLink: false
                },
                { 
                  title: "Roundabout Confidence", 
                  desc: "Get confident with early lane selection, signalling, and emerging on multi-lane ring-road links including the A1237 and Grimston Bar.",
                  hasLink: false
                },
                { 
                  title: "Residential Road Judgement", 
                  desc: "Safely gauge meeting priorities, speed adjustments, and clearance gaps on narrow streets.",
                  hasLink: false
                },
                { 
                  title: "Independent Practice", 
                  desc: "Get comfortable following sat-nav commands and physical road direction signs during your DVSA test routes York independent driving section.",
                  url: "/mock-driving-tests",
                  hasLink: true
                },
                { 
                  title: "Nervous Driver Support", 
                  desc: "Patient, supportive instructors specifically trained to calm anxious candidates.",
                  url: "/articles/driving-test-nerves-how-to-stay-calm",
                  hasLink: true
                }
              ].map((item, idx) => (
                <div key={`prep-card-${idx}`} className="p-5 bg-soft-bg rounded-[2rem] border border-border-main/5 hover:shadow-md transition-all duration-300">
                  <h4 className="text-[0.88rem] font-bold text-primary-text uppercase tracking-tight mb-2">{item.title}</h4>
                  <p className="text-secondary-text text-[0.78rem] leading-relaxed font-semibold mb-3">{item.desc}</p>
                  {item.hasLink && (
                    <a href={item.url} className="text-[0.62rem] font-black uppercase text-primary-dark tracking-widest hover:underline">Learn more →</a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY YORK LEARNERS SECTION */}
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
              <a href="https://www.google.com/search?q=York+Driving+Lesson+School+reviews" target="_blank" rel="noopener noreferrer" className="w-full bg-soft-bg text-primary-text border border-border-main/20 py-2.5 rounded-xl text-[0.72rem] font-black uppercase tracking-[0.15em] transition-all hover:bg-primary-dark hover:text-white hover:border-primary-dark shadow-sm no-underline">
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
                Independent feedback reflects our supportive learning environment and structured approach to both automatic and manual lessons, built around what real learners need across York.
              </p>
              <a href="https://uk.trustpilot.com/review/yorkdrivinglesson.co.uk" target="_blank" rel="noopener noreferrer" className="w-full bg-soft-bg text-primary-text border border-border-main/20 py-2.5 rounded-xl text-[0.72rem] font-black uppercase tracking-[0.15em] transition-all hover:bg-[#00b67a] hover:text-white hover:border-[#00b67a] shadow-sm no-underline">
                View Trustpilot Reviews
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT PASSES SECTION */}
      <section className="bg-white pt-8 pb-10 lg:pt-12 lg:pb-12 px-6 sm:px-10 overflow-hidden border-b border-border-main/10 text-balance" id="passes">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="mb-8">
            <span className="text-primary-dark/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block font-sans">Proven Candidates</span>
            <h2 className="text-[1.8rem] md:text-[2rem] font-black text-primary-text mb-2 tracking-tighter uppercase leading-none font-sans">
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
                    <div className="aspect-[4/3] bg-soft-bg rounded-[2rem] border border-border-main/10 overflow-hidden relative group/card shadow-sm hover:shadow-md transition-all duration-300">
                      <img src={pass.src} alt="York driving test pass" className="absolute inset-0 w-full h-full object-cover" />
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

      {/* SECTION 9: EXPLORE OUR DRIVING SERVICES (LIGHT GREY BACKGROUND) */}
      <section className="bg-soft-bg pt-8 pb-10 lg:pt-12 lg:pb-14 px-6 sm:px-10 border-b border-border-main/10 text-balance" id="services">
        <div className="max-w-[1280px] mx-auto text-center mb-8">
          <span className="text-primary-dark/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block font-sans">09 / Local Training In York</span>
          <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-3 tracking-tighter uppercase leading-none font-sans">
            Explore Our <span className="italic text-primary-text/30">Driving Services</span>
          </h2>
          <p className="text-secondary-text text-[0.9rem] font-semibold opacity-70">Structured local driving lessons for learners across York, Huntington, Acomb, Fulford, Heworth, and Copmanthorpe.</p>
        </div>
        
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "Automatic Driving Lessons", 
              desc: "Learn to drive in York with our patient automatic driving instructors. No gears or clutch stalling.", 
              url: "/automatic-driving-lessons" 
            },
            { 
              title: "Manual Driving Lessons", 
              desc: "Gain maximum licence flexibility and control with our highly active manual driving instructor York sessions.", 
              url: "/manual-driving-lessons" 
            },
            { 
              title: "Intensive Driving Courses", 
              desc: "Build test-standard skills quickly with high-intensity training schedules that compress weeks of lessons into days.",
              url: "/intensive-driving-courses" 
            },
            { 
              title: "Mock Driving Tests", 
              desc: "Simulate exact test-day pressure and eliminate errors on real Monks Cross test paths.", 
              url: "/mock-driving-tests" 
            }
          ].map((item, idx) => (
            <a key={`pass-item-${idx}`} href={item.url} className="bg-white p-6 sm:p-8 rounded-[2rem] border border-border-main/5 no-underline group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
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
