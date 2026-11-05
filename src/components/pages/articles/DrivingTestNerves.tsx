import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from '../../Header';
import Footer from '../../Footer';
import EnquiryForm from '../../EnquiryForm';
import RelatedArticles from '../../RelatedArticles';
import RelatedLinks from '../../RelatedLinks';
import { 
  Check, 
  ChevronRight, 
  ChevronLeft,
  Flag,
  AlertCircle, 
  MapPin, 
  TrendingUp, 
  Award, 
  HelpCircle,
  Clock,
  Activity,
  Heart,
  Eye,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ThumbsUp,
  UserCheck,
  ArrowRight,
  ShieldAlert,
  MinusCircle
} from 'lucide-react';

export default function DrivingTestNerves() {
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
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

  const title = <>Driving Test Nerves in York: <span className="italic font-extrabold text-white/50">How To Stay Calm</span></>;
  const intro = "Feeling anxious about your driving test is completely normal. We explore practical ways to manage your nerves so you can drive your best when it matters most on the streets of York.";

  const journeySteps = [
    {
      stage: "Before Booking",
      badge: "Stage 01: Commitment",
      fear: "Fear of locking in a date and failing publicly.",
      psychology: "The 'anticipatory flight response'. Your brain perceives the test date as a looming physical threat, leading to persistent procrastination on booking.",
      action: "Work closely with your driving instructor York to identify the precise technical factors causing hesitation. Having a clear diagnostic list takes the abstract pressure away. Remind yourself: a test booking is simply an appointment to show you can drive safely—not a life-defining tribunal."
    },
    {
      stage: "Week Before Test",
      badge: "Stage 02: Anticipation",
      fear: "Sleepless nights, overthinking minor errors, and doubt.",
      psychology: "High cortisol spikes. Your brain plays repeating simulation reels of worst-case scenarios, tricking you into feeling like you've forgotten how to find clutch-bite or manage mirrors.",
      action: "Avoid cramming excessive extra lesson hours. Instead, complete structured mock driving tests York under realistic DVSA marking protocols to habituate the mental pressure. Solidify your familiarity with junction profiles such as Stockton Lane and the Monks Cross roundabouts."
    },
    {
      stage: "Night Before",
      badge: "Stage 03: Restless Night",
      fear: "Worrying about not falling asleep or having panic attacks.",
      psychology: "Hyper-vigilant nervous state. Looking at test routes or reading regulations on your screen activates cognitive alarms.",
      action: "Shut down all driving-related materials by 7 PM. Engage in visual imagery training: close your eyes and mentally walk through a calm, safe, routine drive along Heworth or Huntington roads. Your focus should be on deep breathing (4-7-8 method) rather than forcing sleep."
    },
    {
      stage: "Morning of Test",
      badge: "Stage 04: The Wake-Up",
      fear: "Shaking hands, stomach butterflies, and brain freeze.",
      psychology: "Adrenaline dump. Your heart rate is elevated to prepare your muscles for survival, which you misinterpret as proof of incompetence.",
      action: "Eat a balanced breakfast even if you feel slightly nauseous—your brain needs glucose to make fast, safe hazard judgments near Monks Cross Driving Test Centre. Complete a comfortable 45-minute warm-up drive with your instructor to settle your muscle memory before arriving."
    },
    {
      stage: "During Test",
      badge: "Stage 05: Practical Run",
      fear: "Making a mistake early on and assuming you have failed.",
      psychology: "The 'catastrophe spiral'. One small bump or stalling at a junction causes a complete cognitive collapse, driving you to fail on subsequent hazards.",
      action: "Employ a quiet 'running commentary'. Whisper your observations and plans: 'Approaching Clifton Moor roundabout, checking mirrors, signals, slowing down.' This forces your prefrontal cortex to remain active, keeping cortisol levels under control and keeping nerves backgrounded."
    },
    {
      stage: "After Test",
      badge: "Stage 06: Outcome",
      fear: "Experiencing extreme exhaustion or guilt.",
      psychology: "The massive post-adrenaline crash. Your nervous system returns to baseline, which can feel intensely tiring or emotionally overwhelming.",
      action: "Acknowledge that regardless of the test paper markup, you faced a highly demanding practical assessment. Every single test attempt makes you a significantly safer, more experienced driver. If you passed, enjoy the freedom. If not, you have a precise roadmap for next time."
    }
  ];

  const biggestFears = [
    {
      title: "Fear of Stalling",
      fear: "Stalling at a major York junction and backing up traffic.",
      reality: "Stalling itself is NOT an automatic fail. It is simply a minor fault, provided you handle it safely. It only becomes a serious issue if you panic, fail to secure the vehicle, or restart dangerously.",
      tip: "Apply the handbrake immediately, press the clutch fully, restart the engine, complete a thorough 360-degree observation, and move off calmly."
    },
    {
      title: "Fear of Roundabouts",
      fear: "Selecting the wrong lane or being cut off by fast cars on the A64.",
      reality: "The examiner values safety far above exact navigation. If you realize you are in the incorrect lane for your exit, stay in that lane safely and follow it. You will not fail for taking the wrong exit safely.",
      tip: "Treat roundabouts as a series of simple clock-face exits. Let your eyes scan ahead, match your speed to the traffic flow, and focus entirely on lane markers."
    },
    {
      title: "Fear of the Examiner",
      fear: "Being judged by a cold, silent authority figure wanting you to fail.",
      reality: "DVSA examiners are local professionals, many with families in York. They do not have a failure quota. They genuinely want to see you pass so they can sign off on your safety.",
      tip: "Think of your examiner as a sat-nav with a friendly physical form. If they note items down on their tablet, they are often just marking route choices or safe minors."
    },
    {
      title: "Forgetting Everything",
      fear: "Slowing down and completely blanking on basic mirror checks.",
      reality: "Muscle memory is highly robust. Once the car moves, the thousands of repetitions from your driving lessons York will handle the mechanical operations automatically.",
      tip: "Don't try to think your way through the clutch. Trust your feet, keep your eyes scanning wide, and focus purely on looking for moving hazards."
    },
    {
      title: "Failing in Front of People",
      fear: "Having to tell family, friends, or colleagues that you didn't pass.",
      reality: "Many candidates do not pass on their first attempt. It is a completely routine step on the road to becoming a highly competent driver.",
      tip: "Keep your test date completely private. Tell only your instructor. Removing external performance reviews eliminates immense subconscious pressure."
    },
    {
      title: "Making One Mistake",
      fear: "Clipping a kerb or missing a speed sign, ruining the entire test.",
      reality: "You are allowed up to 15 minor driving faults on your test. What feels like a disaster on the road is often marked as a simple minor—or not marked at all.",
      tip: "Treat every 2 minutes of your test as a fresh, separate segment. Once a junction is behind you, wipe it from your mind completely."
    }
  ];

  const boosterTable = [
    { thought: "I stalled my car, so I've definitely failed my test.", reality: "Stalling is a minor fault. Secure the car, restart safely, check your blind spots, and proceed calmly." },
    { thought: "The examiner is typing non-stop on their tablet.", reality: "Examiners write continuously to record route directions, complete administrative steps, or note minor safe faults." },
    { thought: "I missed an exit at a major Clifton Moor roundabout.", reality: "Taking the wrong route safely is not a fault. Follow the lane you are in and let the examiner redirect you." },
    { thought: "I brushed the kerb slightly during my parallel park.", reality: "A light touch of the kerb is generally a minor fault. Only hard mounting or striking the kerb risks a serious fault." },
    { thought: "I hesitated longer than usual at a busy junction.", reality: "Hesitation is a minor fault. Pulling out dangerously into traffic is an automatic serious fail. Safety always wins." },
    { thought: "My hands are shaking and I'm trembling physically.", reality: "Shaking is a normal adrenaline response. Your muscle memory is unaffected. Focus on taking deep abdominal breaths." },
    { thought: "Another driver aggressive tailgated me near Gillygate.", reality: "You are never failed for another driver's bad behaviour. Respond safely and calmly to secure praise from the examiner." },
    { thought: "I felt like I was driving too slowly during the fast A64 merge.", reality: "As long as you merged safely and built speed appropriately for the road, it's evaluated as safe control." },
    { thought: "I made a minor steering error 5 minutes into the test.", reality: "Forget it instantly. Overthinkers fail because they dwell on historic minors and miss real hazards ahead." },
    { thought: "If I fail this test, it means I am a bad and unsafe driver.", reality: "The test is a snapshot of 40 minutes under high stress. A fail simply means you need more practice with environmental anxiety." }
  ];

  const faqs = [
    {
      question: "Is it normal to have driving test anxiety in York?",
      answer: "Absolutely. York's unique historical layout, narrow medieval walls, and busy dual bypass lanes create an environment that naturally raises anxiety. Most candidates report feeling anxious or experiencing physical butterflies before setting off from the **[York Driving Test Centre](/monks-cross-driving-test-centre/)**. The good news is that anxiety drops significantly with realistic practice on the actual routes."
    },
    {
      question: "What are the best ways to stop a trembling leg during my test?",
      answer: "A shaking left foot can make clutch control in a manual difficult. To counter this, press your heel firmly into the car's floor carpet to stabilize the joint. Take long, slow exhalations through your mouth, which physically lowers your heart rate and subdues excessive adrenaline."
    },
    {
      question: "Should I tell the driving examiner at Monks Cross that I'm nervous?",
      answer: "Yes, you absolutely can. Examiners meet highly nervous learners every single day. Letting them know takes the secrecy out of your anxiety, and they are trained to use a calm, measured tone to put you at ease — similar to the approach we take on our location-specific **[driving lessons in York](/york/)**."
    },
    {
      question: "Does Rescue Remedy actually help with driving test nerves?",
      answer: "Many candidates find natural over-the-counter soothing drops like Rescue Remedy or lavender oils helpful as a comforting ritual. However, the true foundation for confidence is deep, solid technical preparation on real **[York driving test routes](/articles/york-driving-test-routes-common-mistakes/)** and building a highly reliable physical driving habit."
    },
    {
      question: "What happens if I have a panic attack during my driving test in York?",
      answer: "If you feel a panic attack coming on, pull over to a safe position on the left-hand side, secure the car, and inform the examiner. They will help you take a few moments to breathe and compose yourself. Safe driving is the priority, and taking a brief mental pause will not fail your test."
    },
    {
      question: "Can my driving instructor sit in the back of the car for moral support?",
      answer: "Yes, you have the full legal right to have your instructor accompany you in the rear passenger seat during your practical test. Many learners find their familiar presence highly reassuring and helpful for moral support."
    },
    {
      question: "How many minor faults can I make before failing my test?",
      answer: "You are legally permitted to accumulate up to 15 minor driving faults (now called 'driving faults') and still pass your test, provided you do not make a single serious or dangerous fault. Making minor mistakes is expected under exam conditions."
    },
    {
      question: "Why is stall prevention such a major source of anxiety, and how do we fix it?",
      answer: "Stalling is a major stressor because we fear blocking traffic and being judged. To make stalling a minor issue, practice safe recovery habits. If you stall on a manual test, secure the car and restart. Alternatively, many nervous candidates find that switching to **[automatic driving lessons](/automatic-driving-lessons/)** completely removes this source of test anxiety."
    },
    {
      question: "Is early morning or midday better for a nervous driver's test time?",
      answer: "If you get anxious about waiting, an early morning test (around 8:10 AM) is excellent as you get it out of the way quickly. However, mid-morning (around 10:14 AM) offers quieter roads, less rush-hour congestion around central York walls, making it ideal for those taking **[intensive driving courses](/intensive-driving-courses/)**."
    },
    {
      question: "What happens if I make an route mistake on a York test route like Gillygate?",
      answer: "If you take a wrong exit, select the wrong lane safely, or miss a turn, do not panic. Stay in your course and proceed safely. The examiner will simply redirect you. You will only fail if your recovery or lane change is performed unsafely."
    },
    {
      question: "How do mock driving tests York help treat exam nerves?",
      answer: "By replicating the exact marking protocols, examiner feedback styles, and routes of the official DVSA exam with realistic **[mock driving tests in York](/mock-driving-tests/)**, your brain gets acclimated to the pressure. This makes the real test feel like a routine mock run."
    },
    {
      question: "How does the examiner assess safety if I'm obviously anxious?",
      answer: "Examiners evaluate your physical handling of the car, speed choice, observation patterns, and decision-making safety. They do not grade your clinical anxiety. If you drive defensively and keep the vehicle completely safe, they are happy to sign your pass certificate."
    },
    {
      question: "If I fail, how long do I have to wait before retaking my test at Monks Cross?",
      answer: "Under current DVSA rules, you must wait at least 10 working days before you can take another practical test. We recommend using this time to review **[how to pass your driving test first time in York](/articles/pass-driving-test-first-time-york/)** and fine-tune your driving skills."
    },
    {
      question: "Does learning to drive in an automatic reduce test nerves compared to a manual?",
      answer: "For many nervous learners, yes. An automatic completely removes clutch control, hill-start rollback risks, and constant gear-changing, which is why **[automatic driving lessons in York](/automatic-driving-lessons/)** free up approximately 50% of your cognitive capacity, allowing you to focus purely on observation and hazard anticipation in busy York traffic."
    }
  ];

  return (
    <div className="min-h-screen bg-soft-bg font-sans selection:bg-primary-dark/10 selection:text-primary-dark text-balance">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-12 lg:pt-28 lg:pb-20 px-4 sm:px-[5%] lg:px-[8%] bg-primary-dark overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[linear-gradient(135deg,transparent_0%,rgba(212,175,55,0.03)_100%)] pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-dark/40 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="text-[2.6rem] sm:text-[3.2rem] lg:text-[4.2rem] font-[900] text-white mb-5 leading-[0.95] tracking-tighter uppercase">
                {title}
              </h1>
              <p className="text-[1.1rem] sm:text-[1.2rem] text-hero-paragraph leading-relaxed mb-8 max-w-[580px] font-medium opacity-80">
                {intro}
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
                <div className="flex items-center gap-2 text-[#F4B400]">⭐ <span className="text-white">5-STAR GOOGLE REVIEWS</span></div>
                <span className="hidden sm:inline opacity-30 font-light text-lg">|</span>
                <a 
                  href="https://uk.trustpilot.com/review/yorkdrivinglesson.co.uk" 
                  target="_blank"  
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-[#00B67A] hover:opacity-80 transition-opacity no-underline"
                >
                  ★ <span className="text-white">EXCELLENT ON TRUSTPILOT</span>
                </a>
              </div>
            </div>

            <div className="flex justify-center w-full lg:justify-end">
              <EnquiryForm />
            </div>
          </div>
        </section>

        {/* SECTION 1: WHY DRIVING TEST NERVES ARE NORMAL (WHITE BACKGROUND) */}
        <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 border-b border-border-main/10">
          <div className="max-w-[1000px] mx-auto text-left">
            <span className="text-primary-dark/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block">01 / Biological Reality</span>
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-3 tracking-tight uppercase leading-none">
              Why Driving Test Nerves <br />
              <span className="italic font-extrabold text-primary-text/40">Are Completely Normal</span>
            </h2>
            <div className="w-16 h-1.5 bg-primary-dark/10 mb-6"></div>

            <div className="space-y-4 text-secondary-text text-[0.95rem] lg:text-[1rem] leading-relaxed font-medium">
              <p>
                First, let's establish a fundamental fact: <strong className="text-primary-text font-extrabold">almost everyone gets nervous before their practical driving exam.</strong> If you pull up to the Monks Cross Driving Test Centre with physical butterflies, your hands slightly clammy, or your heart racing, you are not failing—you are reacting to a significant developmental milestone.
              </p>
              <p>
                Anxiety is a survival mechanism designed to optimize focus. Under pressure, your body releases cortisol and adrenaline, preparing your senses for danger. In a modern test setting, this surge can be misdirected, leading to overthinking simple physical habits like clutch-bite or looking in the mirror.
              </p>
              <div className="p-5 border-l-4 border-primary-dark bg-soft-bg rounded-r-2xl my-5">
                <p className="text-primary-text font-bold text-[1.1rem] italic leading-relaxed">
                  "Your examiner does not expect clinical perfection or robotic coldness. They expect a safe, defensive drive that shows you can manage typical hazards on the actual roads of York without putting passengers or pedestrians at risk."
                </p>
              </div>
              <p>
                Recognizing that nervous physical energy is simply your body priming itself to perform can change your entire approach. You do not need to feel completely calm or Zen-like inside to pass; you simply need to maintain proper observations, keep safe gaps, and handle errors securely.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE NERVOUS LEARNER JOURNEY (LIGHT GREY BACKGROUND) */}
        <section className="bg-soft-bg py-8 lg:py-12 px-6 sm:px-10 border-b border-border-main/10">
          <div className="max-w-[1200px] mx-auto text-left">
            <div className="text-center mb-8">
              <span className="text-primary-dark/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block">02 / Interactive Timeline</span>
              <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-[#1F2937] mb-2 tracking-tight uppercase leading-none">
                The Nervous <span className="italic font-extrabold text-[#1F2937]/40">Learner's Journey</span>
              </h2>
              <p className="text-secondary-text text-[0.9rem] font-semibold max-w-[600px] mx-auto">
                Select your current timeline stage below to explore the cognitive hurdles at each stage and practical coping strategies that work.
              </p>
            </div>

            {/* Stages Selection Tabs */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 max-w-[950px] mx-auto mb-8">
              {journeySteps.map((step, idx) => (
                <button
                  key={`journey-tab-${idx}`}
                  type="button"
                  onClick={() => setActiveJourneyStep(idx)}
                  className={`py-3 px-2 text-center rounded-xl border text-[0.7rem] sm:text-[0.75rem] font-black uppercase tracking-wider transition-all duration-200 flex flex-col items-center justify-center ${activeJourneyStep === idx ? 'bg-primary-dark text-white border-primary-dark shadow-md' : 'bg-white text-primary-text/60 border-border-main/10 hover:bg-white/80'}`}
                >
                  <span className={`block text-[0.55rem] font-black uppercase tracking-widest mb-0.5 ${activeJourneyStep === idx ? 'text-blue-400' : 'text-blue-600/60'}`}>0{idx + 1}</span>
                  {step.stage}
                </button>
              ))}
            </div>

            {/* Stage Output Card */}
            <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-border-main/15 shadow-sm max-w-[950px] mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-dark/[0.01] rounded-full pointer-events-none"></div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border-main/10 pb-4 mb-4">
                <div>
                  <span className="inline-block bg-primary-dark/10 text-primary-dark text-[0.58rem] font-black uppercase tracking-widest px-2.5 py-1 rounded-full mb-1">
                    {journeySteps[activeJourneyStep].badge}
                  </span>
                  <h3 className="text-[1.3rem] font-black text-primary-text uppercase tracking-tight">
                    {journeySteps[activeJourneyStep].stage}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-primary-dark">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span className="text-[0.75rem] font-black uppercase tracking-widest text-blue-600">Temporal Analysis</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[0.7rem] font-black text-primary-text/40 uppercase tracking-widest mb-1 flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5 text-red-500" />
                      Core Fear & Hurdle
                    </h4>
                    <p className="text-secondary-text text-[0.88rem] leading-relaxed font-bold">
                      {journeySteps[activeJourneyStep].fear}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[0.7rem] font-black text-primary-text/40 uppercase tracking-widest mb-1 flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5 text-blue-500" />
                      Psychological Mechanism
                    </h4>
                    <p className="text-secondary-text text-[0.85rem] leading-relaxed font-medium italic">
                      {journeySteps[activeJourneyStep].psychology}
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-soft-bg rounded-2xl border border-border-main/5 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[0.7rem] font-black text-primary-dark uppercase tracking-widest mb-2 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-blue-500" />
                      Practical Coping Strategy
                    </h4>
                    <p className="text-secondary-text text-[0.88rem] leading-relaxed font-semibold">
                      {journeySteps[activeJourneyStep].action}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: BIGGEST DRIVING TEST FEARS (WHITE BACKGROUND) */}
        <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 border-b border-border-main/10">
          <div className="max-w-[1240px] mx-auto text-left">
            <div className="text-center mb-8">
              <span className="text-primary-dark/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block">03 / De-Escalating Panic</span>
              <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-2 tracking-tight uppercase leading-none">
                Conquering Your <span className="italic font-extrabold text-primary-text/40">Biggest Driving Fears</span>
              </h2>
              <p className="text-secondary-text text-[0.9rem] font-semibold max-w-[600px] mx-auto">
                Practical analysis, objective reality-checks, and actionable tips to neutralize the six most common sources of panic.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {biggestFears.map((item, idx) => (
                <div key={`fear-card-${idx}`} className="bg-soft-bg p-6 rounded-[2rem] border border-border-main/10 flex flex-col justify-between hover:shadow-md transition-all duration-200">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-[1.05rem] font-black text-primary-text uppercase tracking-tight">{item.title}</h3>
                      <span className="text-[0.62rem] font-black bg-primary-dark/15 text-primary-dark px-2 py-0.5 rounded-md uppercase tracking-wider">0{idx + 1}</span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-[0.58rem] font-black uppercase text-red-500 tracking-wider">Common Hurdle:</h4>
                        <p className="text-secondary-text text-[0.82rem] leading-relaxed font-medium">{item.fear}</p>
                      </div>
                      <div>
                        <h4 className="text-[0.58rem] font-black uppercase text-emerald-600 tracking-wider">Reality Check:</h4>
                        <p className="text-secondary-text text-[0.82rem] leading-relaxed font-semibold italic">{item.reality}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border-main/5">
                    <h4 className="text-[0.58rem] font-black uppercase text-primary-dark tracking-wider flex items-center gap-1 mb-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary-dark" />
                      Our Custom Confidence Tip:
                    </h4>
                    <p className="text-primary-text text-[0.82rem] font-bold leading-normal">{item.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

                {/* SECTION 4: YORK TEST ROUTE CONFIDENCE (LIGHT GREY BACKGROUND) */}
        <section className="bg-soft-bg py-8 lg:py-12 px-6 sm:px-10 border-b border-border-main/10" id="local-confidence">
          <div className="max-w-[1200px] mx-auto text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-primary-dark/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block">04 / Rooted in York</span>
                <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-3 tracking-tight uppercase leading-none">
                  York Test Route <br />
                  <span className="italic font-extrabold text-primary-text/40">Familiarity Lowers Anxiety</span>
                </h2>
                <div className="w-16 h-1.5 bg-primary-dark/10 mb-5"></div>

                <div className="space-y-4 text-secondary-text text-[0.9rem] sm:text-[0.95rem] leading-relaxed font-medium">
                  <p>
                    Anxiety thrives on the unknown. When you approach a complex multi-lane layout without knowing which lane merges or when the visibility drops, your brain is forced to think actively under pressure, which spikes your stress level.
                  </p>
                  <p>
                    This is why our training focuses heavily on the physical layouts of <strong className="text-primary-text font-bold">official York driving test routes.</strong> Under our local guidance, you will repeatedly practise negotiating difficult areas:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[0.85rem] font-extrabold uppercase text-primary-text mt-3">
                    <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-blue-500" /> Monks Cross Junctions</div>
                    <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-blue-500" /> Clifton Moor Roundabouts</div>
                    <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-blue-500" /> Heworth & Acomb Residential Roads</div>
                    <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-blue-500" /> Huntington & Copmanthorpe Routes</div>
                    <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-blue-500" /> Tang Hall Lane Markings</div>
                    <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-blue-500" /> Fast-flowing A64 Merge Tracks</div>
                  </div>
                  <p className="mt-3">
                    By making these roundabouts a habitual, predictable part of your routine on your <a href="/york/" className="text-primary-dark font-bold hover:underline">driving lessons York</a>, they stop being scary exam hurdles. They simply become roads you already know how to drive confidently on.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white p-6 rounded-[2rem] border border-border-main/10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-dark/[0.02] rounded-full pointer-events-none"></div>
                <h3 className="text-[1rem] font-black text-primary-text uppercase tracking-tight mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary-dark" />
                  <span>The Confidence Equation</span>
                </h3>
                <div className="space-y-4 text-[0.85rem] leading-relaxed font-semibold text-secondary-text">
                  <div className="p-3.5 bg-soft-bg rounded-xl border border-border-main/5">
                    <h4 className="font-black text-primary-text uppercase text-[0.7rem] tracking-wider mb-1">Exposure Mock Testing</h4>
                    <p className="text-[0.78rem]">Facing a dynamic mock driving test York duplicates the exact atmosphere, silence, and routes of the real DVSA exam, letting you 'get the nerves out' beforehand.</p>
                  </div>
                  <div className="p-3.5 bg-soft-bg rounded-xl border border-border-main/5">
                    <h4 className="font-black text-primary-text uppercase text-[0.7rem] tracking-wider mb-1">Route Familiarity Sessions</h4>
                    <p className="text-[0.78rem]">We look at why the examiner chose Stockton Lane versus Clifton lanes, equipping you with local observation cheats that simplify complex traffic flows.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: THE CALM DRIVER TOOLKIT (WHITE BACKGROUND) */}
        <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 border-b border-border-main/10">
          <div className="max-w-[1240px] mx-auto text-left">
            <div className="text-center mb-8">
              <span className="text-primary-dark/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block">05 / Tactical Methods</span>
              <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-2 tracking-tight uppercase leading-none">
                The Practical <span className="italic font-extrabold text-primary-text/40">Calm Driver Toolkit</span>
              </h2>
              <p className="text-secondary-text text-[0.9rem] font-semibold max-w-[600px] mx-auto">
                Implement these six actionable psychological and physiological techniques inside the test car when nerves spike.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "The Tactical Breath",
                  technique: "4-7-8 Breathing Method",
                  desc: "Inhale through your nose silently for 4 seconds, hold the breath for 7 seconds, then exhale completely through your mouth for 8 seconds. This physical delay stimulates the vagus nerve and shuts down cortisol production instantly.",
                  icon: <Activity className="w-6 h-6 text-primary-dark" />
                },
                {
                  title: "Running Commentary",
                  technique: "Vocalized Observation",
                  desc: "Softly talk your thoughts aloud: 'Mirror, left signal, slowing down for Gillygate, check bike lane, clear.' This keeps your prefrontal brain active, preventing your logical thoughts from getting flooded by emotional panic.",
                  icon: <Eye className="w-6 h-6 text-primary-dark" />
                },
                {
                  title: "Reframed Self-Talk",
                  technique: "Anxiety to Excitement",
                  desc: "Do not tell yourself: 'I am terrified and will fail.' Say aloud: 'My body is releasing energy because I am excited to pass this test and get my independence.' Re-labeling physical symptoms of panic completely alters its impact.",
                  icon: <BrainIcon className="w-6 h-6 text-primary-dark" />
                },
                {
                  title: "Route Visualisation",
                  technique: "Mental Walkthroughs",
                  desc: "Before turning the key, visualize navigating Gillygate safely. Recall your indicators and lane disciplines at Monks Cross. Pre-playing clean habits decreases cognitive load once you face the physical junction.",
                  icon: <MapPin className="w-6 h-6 text-primary-dark" />
                },
                {
                  title: "The Physical Reset",
                  technique: "Grip Release Routine",
                  desc: "When stressed, check your grip. White knuckles on the wheel increase chest and neck tension. Loosen your hand pressure, drop your shoulders, wiggle your toes, and align your posture. This tells your brain the threat level is low.",
                  icon: <Heart className="w-6 h-6 text-primary-dark" />
                },
                {
                  title: "Mistake Recovery",
                  technique: "The 3-Second Wipe Rule",
                  desc: "If you stall or clip the kerb slightly, allow yourself exactly 3 seconds to note the fault. Then mentally 'wipe the board clean'. Overthinkers do not fail on their first mistake; they fail on subsequent sections due to distraction.",
                  icon: <Award className="w-6 h-6 text-primary-dark" />
                }
              ].map((item, idx) => (
                <div key={`toolkit-card-${idx}`} className="p-6 bg-soft-bg rounded-[2rem] border border-border-main/10 shadow-sm flex gap-4 items-start hover:shadow-md transition-all duration-150">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 border border-border-main/10 shadow-sm text-primary-dark">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-[1rem] font-black text-primary-text uppercase tracking-tight mb-0.5">{item.title}</h3>
                    <span className="text-[0.62rem] font-bold text-primary-dark uppercase tracking-wider block mb-2">{item.technique}</span>
                    <p className="text-secondary-text text-[0.82rem] leading-relaxed font-semibold">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: WHAT EXAMINERS ACTUALLY WANT (LIGHT GREY BACKGROUND) */}
        <section className="bg-soft-bg py-8 lg:py-12 px-6 sm:px-10 border-b border-border-main/10">
          <div className="max-w-[1000px] mx-auto text-left">
            <span className="text-primary-dark/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block">06 / Examiner Perspective</span>
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-3 tracking-tight uppercase leading-none">
              Demystifying the Examiner: <br />
              <span className="italic font-extrabold text-primary-text/40">What They Genuinely Care About</span>
            </h2>
            <div className="w-16 h-1.5 bg-primary-dark/10 mb-6"></div>

            <div className="space-y-4 text-secondary-text text-[0.95rem] leading-relaxed font-semibold">
              <p>
                Many learners fail because of a core misconception: they assume the driving examiner is a cold, clinical assessor actively seeking subtle mechanical mistakes to fail them. Under this false paradigm, every gear shift becomes a high-tension anxiety source.
              </p>
              <p>
                The truth is much simpler: <strong className="text-primary-text font-black">the examiner is simply looking for safety.</strong> They do not care if your parallel park is not completely straight or if you take longer to move off from a busy roundabout near Monks Cross, as long as it is done safely.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-white rounded-xl border border-border-main/5 shadow-sm">
                  <h3 className="font-black text-primary-text text-[0.8rem] uppercase tracking-wider mb-2 text-primary-dark">
                    ✔ Safe, Defensive Indicators
                  </h3>
                  <ul className="text-[0.82rem] space-y-2 text-secondary-text font-medium text-left">
                    <li className="flex items-start gap-1.5"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Wide, steady observation habits, scanning early for pedestrians near York walls.</li>
                    <li className="flex items-start gap-1.5"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Keeping clear, defensive braking distances behind buses on Gillygate routes.</li>
                    <li className="flex items-start gap-1.5"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Re-securing the vehicle calmly if stall errors take place.</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-xl border border-border-main/5 shadow-sm">
                  <h3 className="font-black text-primary-text text-[0.8rem] uppercase tracking-wider mb-2 text-red-500">
                    ❌ Dangerous Intent Icons
                  </h3>
                  <ul className="text-[0.82rem] space-y-2 text-secondary-text font-medium text-left">
                    <li className="flex items-start gap-1.5"><MinusCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Pulling blindly into fast gaps without clear mirror observations.</li>
                    <li className="flex items-start gap-1.5"><MinusCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Mounting the kerb sharply or brushing pedestrians at Huntington crossings.</li>
                    <li className="flex items-start gap-1.5"><MinusCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Disobeying speeds, especially in residential YO10 zones.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: CONFIDENCE BOOSTER COMPARISON TABLE (WHITE BACKGROUND) */}
        <section className="bg-white py-10 lg:py-16 px-6 sm:px-10 border-b border-border-main/10" id="booster">
          <div className="max-w-[1100px] mx-auto text-left">
            <div className="text-center mb-8">
              <span className="text-primary-dark/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block">07 / Cognitive Re-alignment</span>
              <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-2 tracking-tight uppercase leading-none">
                Driving Nerves: <span className="italic font-extrabold text-primary-text/40">Real-Time Reality Checks</span>
              </h2>
              <p className="text-secondary-text text-[0.9rem] font-semibold max-w-[600px] mx-auto">
                Compare your anxious internal dialogue side-by-side with genuine DVSA marking standards and practical reality.
              </p>
            </div>

            <div className="border border-border-main/10 rounded-[2rem] overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 bg-soft-bg p-4 border-b border-border-main/10 font-black uppercase text-[0.7rem] tracking-wider text-primary-text">
                <div className="col-span-5">Anxious Thought / Misconception</div>
                <div className="col-span-7">Genuine Practical Reality</div>
              </div>

              {boosterTable.map((row, idx) => (
                <div key={`booster-row-${idx}`} className="grid grid-cols-1 md:grid-cols-12 gap-y-1 md:gap-x-6 p-4 md:p-5 border-b border-border-main/5 items-center hover:bg-soft-bg/20 transition-all">
                  <div className="col-span-12 md:col-span-5 text-primary-text text-[0.88rem] font-black uppercase tracking-tight flex items-start gap-2">
                    <span className="text-red-500 font-extrabold text-[0.8rem] mt-0.5 shrink-0">❌</span>
                    <span>"{row.thought}"</span>
                  </div>
                  <div className="col-span-12 md:col-span-7 text-secondary-text text-[0.85rem] leading-relaxed font-semibold pl-6 md:pl-0 border-l border-border-main/0 md:border-l-0">
                    <span className="md:hidden font-extrabold text-[0.65rem] text-emerald-600 block uppercase mb-1">Reality check:</span>
                    <span className="text-emerald-700 font-bold">✔</span> {row.reality}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: WHY MOCK TESTS WORK (LIGHT GREY BACKGROUND) */}
        <section className="bg-soft-bg py-8 lg:py-12 px-6 sm:px-10 border-b border-border-main/10">
          <div className="max-w-[1200px] mx-auto text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Primary Content Left */}
              <div className="lg:col-span-7">
                <span className="text-primary-dark/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block">08 / Practical Mimicry</span>
                <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-3 tracking-tight uppercase leading-none">
                  Why Mock Driving Tests <br />
                  <span className="italic font-extrabold text-primary-text/40">Are Your Secret Weapon</span>
                </h2>
                <div className="w-16 h-1.5 bg-primary-dark/10 mb-5"></div>

                <div className="space-y-6 text-secondary-text text-[0.95rem] leading-relaxed font-semibold">
                  <p>
                    Nerves require surprise and uncertainty to thrive. If you do not know what standard procedures are checked during the eyesight test, what marking codes look like, or how silent the test car gets during the drive, you are highly likely to panic when facing them.
                  </p>
                  <p>
                    A well-run <a href="/mock-driving-tests/" className="text-primary-dark font-bold hover:underline">mock driving test York</a> targets and eliminates every single one of these variable elements beforehand:
                  </p>
                  <ul className="space-y-4 text-[0.88rem] text-secondary-text pl-1">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-primary-text block mb-0.5 uppercase tracking-wide text-[0.75rem] font-black">Official DVSA Marking Codes</strong>
                        We use official DVSA feedback markers so you know exactly what constitutes a minor fault.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-primary-text block mb-0.5 uppercase tracking-wide text-[0.75rem] font-black">The Formal Silence</strong>
                        Driving without continuous instruction or feedback is a major test hurdle. We replicate this exact sequence.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-primary-text block mb-0.5 uppercase tracking-wide text-[0.75rem] font-black">Real-Time Errors</strong>
                        We review stall recovery on active traffic stretches so you stay focused and composed under real pressure.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Side Formula Box Right */}
              <div className="lg:col-span-5 bg-white p-6 rounded-[2rem] border border-border-main/10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-dark/[0.02] rounded-full pointer-events-none"></div>
                <h3 className="text-[1rem] font-black text-primary-text uppercase tracking-tight mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span>The Desensitisation Formula</span>
                </h3>
                <div className="space-y-4 text-[0.85rem] leading-relaxed font-semibold text-secondary-text">
                  <p>
                    Medical professionals treat spatial phobias and performance anxiety through <strong className="text-primary-text font-black">gradual exposure therapy</strong>—facing the exact physical triggers in a structured, safe, monitored sequence.
                  </p>
                  <p>
                    By engaging in multiple mock driving exams at our <a href="/" className="text-primary-dark font-bold hover:underline">York driving school</a>, you allow your subconscious to realize that the formal atmosphere, marking tablets, and routes near the outer ring road are safe environments.
                  </p>
                  <p className="font-bold text-primary-text">
                    By the time you sit the actual DVSA test, your brain treats it as familiar territory — the format, the routes, and the silence of the examiner are no longer unknowns.
                  </p>
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

        {/* EXPLORE OUR DRIVING SERVICES */}
        <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 border-b border-border-main/10 text-balance" id="services">
          <div className="max-w-[1280px] mx-auto text-center mb-8">
            <span className="text-primary-dark/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block">09 / York Driving Services</span>
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-3 tracking-tighter uppercase leading-none">
              Explore Our <span className="italic text-primary-text/30">Driving Services</span>
            </h2>
            <p className="text-secondary-text text-[0.9rem] font-semibold opacity-70">Clear, structured local training for York's future qualified drivers.</p>
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
                desc: "Gain maximum licence flexibility and control with our highly active manual driving instructor York sessions.", 
                url: "/manual-driving-lessons/" 
              },
              {
                title: "Intensive Driving Courses",
                desc: "Build test-standard skills quickly with high-intensity training schedules and get on the road sooner.",
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

        <RelatedArticles currentSlug="driving-test-nerves-how-to-stay-calm" bgClassName="bg-soft-bg" />

        {/* SECTION 10: 14 HIGH-QUALITY FAQS */}
        <section className="bg-white py-8 lg:py-12 px-6 sm:px-10 border-t border-border-main/10 border-b border-b-border-main/10">
          <div className="max-w-[950px] mx-auto text-left">
            <div className="text-center mb-8">
              <span className="text-primary-dark/40 font-black text-[0.7rem] uppercase tracking-[0.2em] mb-2 block">10 / Deep FAQ Reference</span>
              <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-2 tracking-tight uppercase leading-none">
                Driving Test Nerves FAQ <br />
                <span className="italic font-extrabold text-primary-text/40">Overcoming Exam Anxiety</span>
              </h2>
              <p className="text-secondary-text text-[0.9rem] font-semibold max-w-[600px] mx-auto">
                Clear, in-depth answers about test anxiety, examiners, mock examinations, and calming techniques for York candidates.
              </p>
            </div>

            <div className="space-y-4 max-w-[920px] mx-auto">
              {faqs.map((faq, idx) => {
                const isExpanded = expandedFaq === idx;
                return (
                  <div 
                    key={`faq-it-${idx}`}
                    className="bg-white rounded-2xl border border-border-main/10 overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                      className="w-full text-left p-4 sm:p-5 flex justify-between items-center gap-4 hover:bg-soft-bg/35 transition-colors"
                    >
                      <span className="text-[0.88rem] sm:text-[0.92rem] font-black text-primary-text uppercase tracking-tight leading-snug">
                        {faq.question}
                      </span>
                      <ChevronRight className={`w-5 h-5 text-blue-500 transition-transform shrink-0 ${isExpanded ? 'rotate-90' : 'rotate-0'}`} />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                          <div 
                            className="p-4 sm:p-5 pt-0 border-t border-border-main/5 text-secondary-text text-[0.85rem] sm:text-[0.9rem] leading-relaxed font-semibold w-[90%] md:w-[94%] mx-auto"
                            dangerouslySetInnerHTML={{ 
                              __html: faq.answer
                                .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-primary-text">$1</strong>')
                                .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary-dark font-black underline decoration-primary-dark/20 hover:decoration-primary-dark transition-all">$1</a>')
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      {/* CTA BAR */}
      <section className="bg-primary-dark border-t border-white/10 border-b border-b-white/5 py-6 lg:py-7 px-6 sm:px-10">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <h2 className="text-[1.05rem] md:text-[1.2rem] font-black text-white leading-tight tracking-tighter uppercase text-center sm:text-left">
            Ready To Feel Confident? <span className="italic font-extrabold text-white/40">Book Your First Lesson In York.</span>
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

      <RelatedLinks path="/articles/driving-test-nerves-how-to-stay-calm/" kind="article" />
      <Footer />
    </div>
  );
}

// Simple fallback icon to avoid breaking build system
function BrainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M12 6v12M6 12h12" />
    </svg>
  );
}
