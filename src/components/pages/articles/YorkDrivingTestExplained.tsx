import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Flag } from 'lucide-react';
import Header from '../../Header';
import Footer from '../../Footer';
import EnquiryForm from '../../EnquiryForm';
import FAQ from '../../FAQ';
import RelatedArticles from '../../RelatedArticles';
import RelatedLinks from '../../RelatedLinks';

export default function YorkDrivingTestExplained() {
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
      question: "What documents do I genuinely need to bring to Monks Cross?",
      answer: "The most critical item is your UK driving photocard licence. If you have an old-style paper licence, you must also bring a valid passport when visiting the [York Driving Test Centre](/monks-cross-driving-test-centre/). While your theory test certificate and booking confirmation are helpful for your own peace of mind, the examiner will primarily verify your identity through your photocard."
    },
    {
      question: "How long does the practical driving test in York actually last?",
      answer: "The test itself lasts approximately 40 minutes. This includes your eyesight check, safety questions, and about 20 minutes of independent driving. If you're taking an extended test (usually following a previous disqualification), it will last about 70 minutes."
    },
    {
      question: "How does the sat nav section work on York test routes?",
      answer: "For most learners (4 out of 5), the independent driving section involves following a sat nav provided by the examiner. They will set the route—often heading toward residential areas like Huntington or Haxby. Understanding [York driving test routes & common mistakes](/articles/york-driving-test-routes-common-mistakes/) can make these sections feel far more predictable. If you take a wrong turn, don't panic. As long as you stay safe and follow the road markings, the examiner will simply help you get back on track."
    },
    {
      question: "Will I definitely be asked to perform an emergency stop?",
      answer: "No, the emergency stop is requested on roughly 1 in every 3 tests. Your examiner will pull you over to the side of the road first to explain that they will soon give a signal for you to stop the car as if in an emergency. It is a test of your reaction time and control, not your ability to slam on the brakes without checking your surroundings."
    },
    {
      question: "Where do the manoeuvres usually happen in York?",
      answer: "In York, manoeuvres typically take place in quiet residential streets across the [York location hub](/york/), around New Earswick, Heworth, Acomb, or Tang Hall. You might also be asked to perform a forward or reverse bay park in the Monks Cross test centre car park itself. The focus is always on your observation and total control, rather than how fast you can complete the move."
    },
    {
      question: "Are the roundabouts in York particularly difficult on the test?",
      answer: "York has some challenging roundabouts, such as the Hopgrove roundabout or the junctions on the A1237. These require good lane discipline and early planning. We work through these pressure points during our structured coaching or dedicated [mock driving tests](/mock-driving-tests/) so you arrive feeling steady and prepared when you meet them on test day."
    },
    {
      question: "Does the York test always involve the A64 or dual carriageways?",
      answer: "Not every route includes the A64, but many do include sections of the A1237 ring road or the Hull Road dual carriageway. Whether you are doing weekly lessons or [intensive driving courses](/intensive-driving-courses/), the examiner wants to see that you can join high-speed roads safely, maintain a consistent speed, and move back into the left-hand lane when it is clear to do so."
    },
    {
      question: "What is the most common reason for failing a driving test in York?",
      answer: "Nationally, and in York, the most common 'serious' faults occur at junctions—specifically failing to look properly or pulling out when it isn't safe. Other common issues include improper use of mirrors during lane changes and lack of steering control. Realistic preparation is the best way to identify these habits before they cost you your licence."
    },
    {
      question: "How many minor faults am I allowed in the York test?",
      answer: "You can have up to 15 'driving' faults (minors) and still pass your test. Whether you choose [automatic driving lessons](/automatic-driving-lessons/) or [manual driving lessons](/manual-driving-lessons/), if you commit the same minor fault multiple times, the examiner may deem it a repetitive habit and upgrade it to a 'serious' fault, resulting in a fail. A single serious or dangerous fault results in an immediate fail."
    },
    {
      question: "What happens if I feel too nervous to start the test?",
      answer: "Nerves are completely normal. Our detailed guide on [driving test nerves & staying calm](/articles/driving-test-nerves-how-to-stay-calm/) lists practical techniques to help manage anxiety. Many learners find that managing test nerves begins with a good night's sleep and a final hour of calm practice before the test. Examiners at the York centre are very experienced and used to nervous learners; they will do their best to put you at ease."
    },
    {
      question: "Do I have to bring my own car for the test at Monks Cross?",
      answer: "Most learners use their instructor's car, as it is fitted with dual controls and is the vehicle they are most comfortable in. You can use your own car, but it must meet strict DVSA requirements, including an extra rear-view mirror for the examiner and L-plates."
    },
    {
      question: "What are the 'Show Me, Tell Me' questions specifically?",
      answer: "The 'tell me' question is asked at the start of the test (e.g., 'How would you check the brakes are working?'). The 'show me' question is asked while you are driving (e.g., 'When it's safe, show me how you'd wash and wipe the rear windscreen'). We go through all possible questions on our specific training vehicles so you are familiar with every answer before test day."
    },
    {
      question: "Is there a 'best' time of day to take a test in York?",
      answer: "Traffic levels in York vary significantly. Mid-morning (around 10:00 AM) often avoids the heaviest school run and commuter traffic, but your instructor will help you prepare for all conditions, from quiet residential streets to busy shopping centre traffic around Monks Cross."
    },
    {
      question: "What happens at the very end of the test when we get back to the centre?",
      answer: "The examiner will ask you to park up and turn off the engine. They will then take a few moments to finish their digital report before telling you whether you've passed. Regardless of the outcome, they will offer constructive feedback, which is incredibly valuable for your future as a safe driver."
    }
  ];

  const headline = (
    <>
      What Happens On The <br />
      <span className="text-white/30 italic font-extrabold">York Driving Test?</span>
    </>
  );

  const introText = "The road to your full UK licence inevitably leads to Monks Cross Driving Test Centre. For many, this is where the nerves peak—but it doesn't have to be that way. This is a calm, experience-led guide to exactly what happens from the moment you park on Monks Cross Drive to the moment you receive your feedback.";

  return (
    <div className="min-h-screen bg-soft-bg font-sans selection:bg-primary-dark/10 selection:text-primary-dark">
      <Header />

      <main>
        {/* HERO SECTION - REVERTED TO ORIGINAL STYLE */}
        <section className="relative pt-20 pb-12 lg:pt-28 lg:pb-20 px-4 sm:px-[5%] lg:px-[8%] bg-primary-dark overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.02)_100%)] pointer-events-none"></div>
          
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="text-[2.6rem] sm:text-[3.2rem] lg:text-[4.2rem] font-[900] text-white mb-6 leading-[0.95] tracking-tighter uppercase">
                {headline}
              </h1>
              <p className="text-[1.1rem] sm:text-[1.2rem] text-hero-paragraph leading-relaxed mb-8 max-w-[580px] font-medium opacity-80 decoration-0">
                {introText}
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
                <a href="https://uk.trustpilot.com/review/yorkdrivinglesson.co.uk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#00B67A] hover:opacity-80 transition-opacity no-underline">
                  ★ <span className="text-white">EXCELLENT ON TRUSTPILOT</span>
                </a>
              </div>
            </div>

            <div className="flex justify-center w-full lg:justify-end">
              <EnquiryForm />
            </div>
          </div>
        </section>

        {/* EDITORIAL CONTENT SECTIONS - ALTERNATING FLOW */}
        
        {/* 1. ARRIVING AT MONKS CROSS - WHITE */}
        <section className="bg-white pt-8 pb-10 lg:pt-12 lg:pb-14 px-6 sm:px-10 border-b border-border-main/5">
          <div className="max-w-[1100px] mx-auto">
            <div className="mb-0">
              <span className="text-primary-dark/40 font-black text-[0.75rem] uppercase tracking-[0.2em] mb-2 block">01 / The Arrival</span>
              <h2 className="text-[2rem] md:text-[2.6rem] font-black text-primary-text mb-4 tracking-tight uppercase leading-none">
                Arriving At <span className="italic text-primary-text/30">Monks Cross</span>
              </h2>
              <div className="space-y-6 text-secondary-text text-[1.125rem] leading-[1.8] font-medium">
                <p>
                  The Monks Cross Driving Test Centre is situated on Monks Cross Drive, positioned conveniently near the shopping parks. We recommend arriving approximately 10 minutes before your scheduled slot. Arriving too early can lead to unnecessary dwelling on nerves, while arriving late creates avoidable stress.
                </p>
                <p>
                  The Monks Cross car park operates with a specific flow. When you pull in, your instructor will help you find a suitable space. Once parked, you'll head into the waiting room. This moment—the quiet anticipation before your name is called—is often described as the most intense part of the day. Our goal is to help you arrive here feeling like the car is a familiar, safe space, regardless of the building you are sitting in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. MEETING THE EXAMINER - LIGHT GREY */}
        <section className="bg-soft-bg pt-8 pb-10 lg:pt-12 lg:pb-14 px-6 sm:px-10 border-b border-border-main/5">
          <div className="max-w-[1100px] mx-auto">
            <div className="mb-0">
              <span className="text-primary-dark/40 font-black text-[0.75rem] uppercase tracking-[0.2em] mb-2 block">02 / The Introduction</span>
              <h2 className="text-[2rem] md:text-[2.6rem] font-black text-primary-text mb-4 tracking-tight uppercase leading-none">
                Meeting The <span className="italic text-primary-text/30">Examiner</span>
              </h2>
              <div className="space-y-6 text-secondary-text text-[1.125rem] leading-[1.8] font-medium">
                <p>
                  When your examiner calls your name, they will check your provisional licence and ask you to sign a declaration form. They aren't looking for perfection; they are looking for safety, competence, and legal compliance. 
                </p>
                <p>
                  As you walk out to the car together, use those few seconds to breathe. The examiner will ask if you'd like your instructor to accompany you—this is a personal choice. Having a familiar presence can be incredibly grounding for some, while others prefer the focus of a one-on-one environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. THE EYESIGHT CHECK & QUESTIONS - WHITE */}
        <section className="bg-white pt-8 pb-10 lg:pt-12 lg:pb-14 px-6 sm:px-10 border-b border-border-main/5">
          <div className="max-w-[1100px] mx-auto">
            <div className="mb-0">
              <span className="text-primary-dark/40 font-black text-[0.75rem] uppercase tracking-[0.2em] mb-2 block">03 / The First Wins</span>
              <h2 className="text-[2rem] md:text-[2.6rem] font-black text-primary-text mb-4 tracking-tight uppercase leading-none">
                The Eyesight Check & <span className="italic text-primary-text/30">Safety Questions</span>
              </h2>
              <div className="space-y-6 text-secondary-text text-[1.125rem] leading-[1.8] font-medium">
                <p>
                  The first 'technical' part of the test is the 20-metre eyesight check. You'll be asked to read a number plate from a stationary vehicle. It sounds simple, but it represents the first small win of the test. 
                </p>
                <p>
                  Next comes the 'Tell Me' question. This usually involves explaining how you'd check a certain aspect of the car's safety, such as the brake lights or the engine oil. Because we practise these on every <a href="/york/" className="text-primary-dark font-bold hover:underline">location lesson across York</a>, these answers should feel like second nature before you even start the engine.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE DRIVE - LIGHT GREY */}
        <section className="bg-soft-bg pt-8 pb-10 lg:pt-12 lg:pb-14 px-6 sm:px-10 border-b border-border-main/5">
          <div className="max-w-[1200px] mx-auto text-left grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <div className="lg:col-span-7">
              <span className="text-primary-dark/40 font-black text-[0.75rem] uppercase tracking-[0.2em] mb-2 block">04 / The Experience</span>
              <h2 className="text-[2rem] md:text-[2.6rem] font-black text-primary-text mb-4 tracking-tight uppercase leading-none">
                Driving Around <span className="italic text-primary-text/30">York Roads</span>
              </h2>
              <div className="space-y-6 text-secondary-text text-[1.125rem] leading-[1.8] font-medium">
                <p>
                  Pulling away from the Monks Cross centre is your first real test of observation. The junction can be busy, requiring patience and a clear head. Once you're out, the route will take you through a variety of environments—from the tight residential streets of Huntington to the high-speed demands of the A1237 or A64.
                </p>
                <p>
                  Independent driving makes up about half of the test. You'll likely be asked to follow a sat nav. The examiner isn't testing your navigation skills; they are testing your ability to make safe decisions while following directions. If you miss a turn but do so safely, you haven't failed. You've simply shown that you can handle a diversion without losing your cool.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 pt-4">
              {/* INFOGRAPHIC-STYLE CARD */}
              <div className="p-8 lg:p-10 bg-white border border-border-main/5 rounded-[2.5rem] shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-dark/[0.02] rounded-full -mr-16 -mt-16 group-hover:bg-primary-dark/[0.05] transition-all duration-500"></div>
                <h3 className="text-[1.2rem] font-black text-primary-text uppercase tracking-tight mb-4">Local Pressure Points</h3>
                <p className="text-secondary-text text-[0.95rem] leading-relaxed mb-6">
                  York examiners frequently use specific junctions to test your awareness. We focus on:
                </p>
                <div className="grid grid-cols-1 gap-4 text-balance">
                  <div className="flex gap-3 items-start">
                    <div className="w-2 h-2 bg-primary-dark rounded-full mt-2"></div>
                    <span className="text-[0.9rem] font-bold text-primary-text">Hopgrove Roundabout Lane Discipline</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-2 h-2 bg-primary-dark rounded-full mt-2"></div>
                    <span className="text-[0.9rem] font-bold text-primary-text">Hull Road Dual Carriageway Merging</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-2 h-2 bg-primary-dark rounded-full mt-2"></div>
                    <span className="text-[0.9rem] font-bold text-primary-text">Huntington Residential Junctions</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-2 h-2 bg-primary-dark rounded-full mt-2"></div>
                    <span className="text-[0.9rem] font-bold text-primary-text">New Earswick Mini-Roundabouts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. MANOEUVRES & CONCLUSION - WHITE */}
        <section className="bg-white pt-8 pb-10 lg:pt-12 lg:pb-14 px-6 sm:px-10 border-b border-border-main/5">
          <div className="max-w-[1100px] mx-auto">
            <div className="mb-0 text-balance">
              <span className="text-primary-dark/40 font-black text-[0.75rem] uppercase tracking-[0.2em] mb-2 block">05 / The Final Stage</span>
              <h2 className="text-[2rem] md:text-[2.6rem] font-black text-primary-text mb-4 tracking-tight uppercase leading-none">
                Manoeuvres & <span className="italic text-primary-text/30">Test Results</span>
              </h2>
              <div className="space-y-6 text-secondary-text text-[1.125rem] leading-[1.8] font-medium">
                <p>
                  You will be asked to perform one manoeuvre: a parallel park, a bay park (forward or reverse), or pulling up on the right. The biggest mistake learners make is rushing. In York's residential areas, the examiner is watching your mirrors and your blind spots as much as the car's position.
                </p>
                <p>
                  As you pull back into Monks Cross Drive, the test isn't over until the handbrake is on and the engine is off. The examiner will then provide your result. If you've been practising with <a href="/mock-driving-tests/" className="text-primary-dark font-bold hover:underline">realistic mock driving tests</a>, this final feedback session will feel like a conversation you've already had.
                </p>
                <p>
                  Whether your certificate arrives today or in a few weeks' time, the experience shifts you from being a 'learner' to being a 'driver'. It's about more than a licence; it's about your safety on York's unique roads for years to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CARBON COPIED SECTIONS REPOSITIONED AFTER ARTICLE CONTENT */}

        {/* NEW PREMIUM SECTION A: PSYCHOLOGY OF SUCCESS - SOFT BG */}
        <section className="bg-soft-bg pt-8 pb-10 lg:pt-12 lg:pb-14 px-6 sm:px-10 border-b border-border-main/10">
          <div className="max-w-[850px] mx-auto text-left">
            <span className="text-primary-dark/40 font-black text-[0.75rem] uppercase tracking-[0.2em] mb-2 block">06 / Psychological Readiness</span>
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-3 tracking-tight uppercase leading-[1.1]">
              Beyond The Car: The Psychology Of <br />
              <span className="italic font-extrabold text-primary-text/30">Test-Day Confidence</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-6"></div>
            
            <div className="space-y-6 text-secondary-text text-[1.125rem] leading-[1.8] font-medium">
              <p>
                Knowing how to operate the controls is only half the battle at the Monks Cross test centre. The real challenge for many learners is managing the sudden shift from a supportive instructor to the quiet, formal presence of an examiner. This transition is less about driving skill and more about your ability to regulate your focus under pressure.
              </p>
              <p>
                We don't just teach you the <a href="/articles/york-driving-test-routes-common-mistakes/" className="text-primary-dark font-bold hover:underline">York driving test routes</a>; we teach you how to remain a calm decision-maker. Whether you're navigating the busy approaches to the ring road or handling tight residential streets in Huntington, our lessons are designed to build a psychological "muscle memory."
              </p>
              <p>
                By the time you meet your examiner, you aren't just hoping for a pass—you are expecting to drive safely because we have already simulated the pressure of York's high-traffic zones. Confidence isn't born; it's built through realistic exposure and genuine <a href="/york/" className="text-primary-dark font-bold hover:underline">local knowledge</a>.
              </p>
            </div>
          </div>
        </section>

        {/* NEW PREMIUM SECTION B: PRACTICE VS READINESS - WHITE */}
        <section className="bg-white pt-8 pb-10 lg:pt-12 lg:pb-14 px-6 sm:px-10 border-b border-border-main/10">
          <div className="max-w-[1200px] mx-auto text-left">
            <span className="text-primary-dark/40 font-black text-[0.75rem] uppercase tracking-[0.2em] mb-2 block">07 / True Readiness</span>
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-3 tracking-tight uppercase leading-[1.1]">
              The Fine Line: Practice vs. <br />
              <span className="italic font-extrabold text-primary-text/30">True Test Readiness</span>
            </h2>
            <div className="w-16 h-1 bg-primary-dark/10 mb-6"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              <div className="space-y-6 text-secondary-text text-[1.125rem] leading-[1.8] font-medium">
                <p>
                  There is a significant difference between "knowing how to drive" and being "test-ready." Many learners feel ready after they've gained confidence in basic manoeuvres, but true readiness in York is defined by your ability to handle the unpredictable. 
                </p>
                <p>
                  A <a href="/york/" className="text-primary-dark font-bold hover:underline">York driving instructor</a> from our school evaluates more than just your mechanical skill. We look for your "hazard eyes"—the ability to spot the school run congestion in New Earswick or the lane-merging hesitation of other drivers on the A1237 before it results in a fault.
                </p>
              </div>
              <div className="space-y-6 text-secondary-text text-[1.125rem] leading-[1.8] font-medium border-l border-border-main/10 pl-0 md:pl-12">
                <p>
                  Test readiness is the point where you no longer need to be prompted. If you can perform a <a href="/mock-driving-tests/" className="text-primary-dark font-bold hover:underline">mock driving test in York</a> with zero serious faults, you have crossed the bridge from learning to competence.
                </p>
                <p>
                  We focus on these final refinements—the small observations and lane discipline choices—that separate a near-miss from a first-time pass. Our local training across both <a href="/manual-driving-lessons/" className="text-primary-dark font-bold hover:underline">manual</a> and <a href="/automatic-driving-lessons/" className="text-primary-dark font-bold hover:underline">automatic lessons</a> is built on this commitment to genuine readiness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRUSTED BY LEARNERS SECTION */}
        <section className="bg-soft-bg pt-8 pb-10 lg:pt-12 lg:pb-12 px-6 sm:px-10 overflow-hidden border-b border-border-main/10">
          <div className="max-w-[1040px] mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-[1.8rem] md:text-[2rem] font-black text-primary-text mb-3 tracking-tighter uppercase leading-none">
                Trusted by <span className="italic font-extrabold text-[#8E969D]">York Learners</span>
              </h2>
              <p className="text-secondary-text text-[0.85rem] md:text-[0.95rem] leading-relaxed font-semibold max-w-[600px] mx-auto">
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
                <div className="text-[0.9rem] font-black text-primary-text mb-3 uppercase tracking-tight text-center">Google Reviews</div>
                <p className="text-[0.82rem] lg:text-[0.88rem] leading-relaxed font-semibold mb-6 flex-grow text-center">
                  Learners highlight their growth in confidence from first lessons through to mock test preparation, benefiting from our calm teaching and in-depth York road experience.
                </p>
                <a 
                  href="https://share.google/9B75eIsjdJNEb4cRC" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-soft-bg text-primary-text border border-border-main/20 py-2.5 rounded-xl text-[0.72rem] font-black uppercase tracking-[0.15em] transition-all hover:bg-primary-dark hover:text-white hover:border-primary-dark shadow-sm text-center no-underline cursor-pointer"
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
                <div className="text-[0.9rem] font-black text-primary-text mb-3 uppercase tracking-tight text-center">Trustpilot Reviews</div>
                <p className="text-[0.82rem] lg:text-[0.88rem] leading-relaxed font-semibold mb-6 flex-grow text-center">
                  Independent feedback reflects our supportive learning environment and structured approach to both automatic and manual lessons, built around real learner experiences across York.
                </p>
                <a 
                  href="https://uk.trustpilot.com/review/yorkdrivinglesson.co.uk" 
                  target="_blank"  
                  rel="noopener noreferrer"
                  className="w-full bg-soft-bg text-primary-text border border-border-main/20 py-2.5 rounded-xl text-[0.72rem] font-black uppercase tracking-[0.15em] transition-all hover:bg-[#00b67a] hover:text-white hover:border-[#00b67a] shadow-sm text-center no-underline cursor-pointer"
                >
                  View Trustpilot Reviews
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* RECENT PASSES SECTION */}
        <section className="bg-white pt-8 pb-10 lg:pt-12 lg:pb-12 px-6 sm:px-10 overflow-hidden border-b border-border-main/10">
          <div className="max-w-[1200px] mx-auto text-center">
            <div className="mb-6">
              <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-2 tracking-tighter uppercase leading-none">
                Recent York <span className="italic font-extrabold text-[#8E969D]">Driving Test Passes</span>
              </h2>
              <p className="text-secondary-text text-[0.85rem] md:text-[0.92rem] leading-relaxed font-semibold max-w-[600px] mx-auto">
                Real learners. Real results. Recent driving test passes across York and surrounding areas.
              </p>
            </div>

            <div className="relative group">
              {/* Navigation Handles */}
              <div className="absolute top-1/2 left-2 md:-left-12 -translate-y-1/2 z-20">
                <button
                  onClick={prevPass}
                  className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-white border border-border-main/20 shadow-lg flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
              <div className="absolute top-1/2 right-2 md:-right-12 -translate-y-1/2 z-20">
                <button
                  onClick={nextPass}
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
                      key={`recent-pass-${pass.id}`}
                      className="min-w-full md:min-w-[calc(33.333%-16px)] shrink-0"
                    >
                      <div className="aspect-[4/3.2] bg-soft-bg rounded-[32px] border border-border-main/10 overflow-hidden relative group/card shadow-sm hover:shadow-xl transition-all duration-500">
                        <img loading="lazy" decoding="async" width={360} height={480} src={pass.src} alt="York driving test pass" className="absolute inset-0 w-full h-full object-cover" />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <div className="flex justify-center gap-2 mt-6 md:hidden">
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

        {/* EVERYTHING YOU NEED TO PASS SECTION */}
        <section className="bg-soft-bg pt-8 pb-10 lg:pt-12 lg:pb-14 px-6 sm:px-10 border-b border-border-main/10 text-balance">
          <div className="max-w-[1280px] mx-auto text-center mb-8">
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-3 tracking-tighter uppercase leading-none">
              Everything You Need <span className="italic text-primary-text/30">To Pass</span>
            </h2>
            <p className="text-secondary-text text-[1rem] font-semibold opacity-70">Preparation is the antidote to nerves.</p>
          </div>
          
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Mock Test Practice", 
                desc: "The only way to truly understand the pressure of the Monks Cross centre is to simulate it under real test conditions.", 
                url: "/mock-driving-tests/" 
              },
              { 
                title: "York Test Routes", 
                desc: "We don't just teach the routes; we teach the logic behind the junctions and roundabouts that often catch learners out.", 
                url: "/articles/york-driving-test-routes-common-mistakes/" 
              },
              { 
                title: "Nervous Driver Support", 
                desc: "If high-pressure situations feel overwhelming, we offer specific techniques to keep you calm and focused.", 
                url: "/refresher-lessons/" 
              },
              { 
                title: "Automatic Driving Confidence", 
                desc: "Remove the stress of gear changes and focus entirely on your observation and planning around busy York junctions.", 
                url: "/automatic-driving-lessons/" 
              }
            ].map((item, idx) => (
              <a key={`pass-item-${idx}`} href={item.url} className="bg-white p-8 rounded-[2rem] border border-border-main/5 no-underline group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                <span className="text-primary-dark/20 text-2xl font-black mb-4 block group-hover:text-primary-dark/40 transition-colors">0{idx + 1}</span>
                <h3 className="text-[1.1rem] font-black text-primary-text mb-3 uppercase tracking-tight leading-tight">{item.title}</h3>
                <p className="text-secondary-text text-[0.88rem] leading-relaxed mb-6 flex-grow">{item.desc}</p>
                <div className="mt-auto pt-4">
                  <span className="text-primary-dark font-bold text-[0.7rem] uppercase tracking-widest border-b border-primary-dark/10 group-hover:border-primary-dark transition-all">Explore Service</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <RelatedArticles currentSlug="what-happens-on-the-york-driving-test" bgClassName="bg-white" />

        {/* FAQ SECTION */}
        <section className="bg-soft-bg pt-8 pb-10 lg:pt-12 lg:pb-14 px-6 sm:px-10 border-t border-border-main/10" id="faq">
          <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-8 lg:mb-10">
              <h2 className="text-[2.2rem] md:text-[2.6rem] font-black text-primary-text mb-3 tracking-tighter uppercase leading-none">
                Essential <span className="italic text-primary-text/30">Test FAQ</span>
              </h2>
              <p className="text-secondary-text text-[1.05rem] font-medium leading-relaxed">Detailed answers for York's future drivers.</p>
            </div>
            
            <FAQ items={faqs} />
          </div>
        </section>

      </main>

      {/* CTA BAR */}
      <section className="bg-primary-dark border-t border-white/10 border-b border-b-white/5 py-6 lg:py-7 px-6 sm:px-10">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <h2 className="text-[1.05rem] md:text-[1.2rem] font-black text-white leading-tight tracking-tighter uppercase text-center sm:text-left">
            Know What To Expect. <span className="italic font-extrabold text-white/40">Now Get Behind The Wheel In York.</span>
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

      <RelatedLinks path="/articles/what-happens-on-the-york-driving-test/" kind="article" />
      <Footer />
    </div>
  );
}
