import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Flag } from 'lucide-react';
import Header from '../../Header';
import Footer from '../../Footer';
import EnquiryForm from '../../EnquiryForm';
import FAQ from '../../FAQ';
import RelatedArticles from '../../RelatedArticles';

export default function PassFirstTimeYork() {
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
      question: "Where is the York driving test centre?",
      answer: "The York Driving Test Centre is located on Monks Cross Drive in Huntington. It’s a busy area mixing retail traffic with complex junctions that we cover in our <a href='/monks-cross-driving-test-centre' class='text-primary-dark font-bold hover:underline'>York Driving Test Centre</a> guide."
    },
    {
      question: "What is the most common reason learners fail in York?",
      answer: "Poor observation at junctions and multi-lane roundabouts remains the top cause. Small errors like rushing mirror checks near ring road exits often lead to avoidable faults on test day."
    },
    {
      question: "Which time of day is best for a driving test in York?",
      answer: "Many learners prefer mid-morning slots (around 10:00 am) to avoid heavy school run traffic in areas like Heworth or Tang Hall. However, the best time is simply when you feel most prepared."
    },
    {
      question: "Do I need to know all the test routes in York?",
      answer: "You don't need to memorise them, but familiarity with high-pressure spots like the Monks Cross roundabouts is helpful. We focus on general road skills so you can handle any route confidently."
    },
    {
      question: "How do I handle pressure on test day?",
      answer: "It’s completely normal to feel nervous. We use pre-test warm-up lessons through areas like Acomb or Clifton to settle your jitters and get you focused before meeting the examiner."
    },
    {
      question: "What happens if I stall during my test?",
      answer: "Stalling isn't an automatic fail. If you stay calm, restart safely, and perform your checks before moving off, the examiner will see you can manage pressure responsibly."
    },
    {
      question: "Is the independent driving section difficult?",
      answer: "Not if you're prepared. It lasts about 20 minutes and tests your ability to make safe decisions while following signs or a sat nav through areas like Huntington or Hull Road."
    },
    {
      question: "Will I have to follow a sat nav on my test?",
      answer: "Most tests include 20 minutes of sat nav driving, while some use road signs. We practise both during our <a href='/mock-driving-tests' class='text-primary-dark font-bold hover:underline'>mock driving tests</a> so you're comfortable with either."
    },
    {
      question: "What roads should I practise before my York test?",
      answer: "Focus on the A64 ring road, the Monks Cross retail area, and busy residential spots like Osbaldwick or Murton. Familiarity with multi-lane roundabouts is essential for success."
    },
    {
      question: "Are roundabouts a big part of the York driving test?",
      answer: "Yes, especially large ones like the Hopgrove roundabout. We'll get you confident with lane discipline on complex junctions during your <a href='/manual-driving-lessons' class='text-primary-dark font-bold hover:underline'>manual</a> or <a href='/automatic-driving-lessons' class='text-primary-dark font-bold hover:underline'>automatic lessons</a>."
    },
    {
      question: "Can mock driving tests help me pass first time?",
      answer: "Absolutely. A <a href='/mock-driving-tests' class='text-primary-dark font-bold hover:underline'>mock driving test in York</a> simulates the real pressure and silence of the official exam, helping you spot habits that might otherwise cause a fail."
    },
    {
      question: "Are automatic lessons easier for nervous learners?",
      answer: "Many find <a href='/automatic-driving-lessons' class='text-primary-dark font-bold hover:underline'>automatic lessons</a> easier because they can focus entirely on the road and observations without worrying about gear changes in York's busy traffic."
    },
    {
      question: "Should I take manual lessons if I want more control?",
      answer: "Our <a href='/manual-driving-lessons' class='text-primary-dark font-bold hover:underline'>manual lessons</a> give you full control over the gears and are a great choice if you want the flexibility to drive any vehicle after passing your test."
    },
    {
      question: "How can I prepare in the final week before my test?",
      answer: "Focus on consistency. Review tricky junctions near Grimston Bar, get plenty of rest, and consider a final <a href='/refresher-lessons' class='text-primary-dark font-bold hover:underline'>refresher lesson</a> to keep your observations sharp."
    }
  ];

  const title = <>How To Pass Your Driving Test <span className="italic font-extrabold text-white/50">First Time</span> In York</>;
  const intro = "Passing your driving test first time in York takes more than learning the basics. From busy roundabouts near Monks Cross Driving Test Centre to handling pressure on test day, this guide explains what learners genuinely need to know before booking their DVSA test.";

  return (
    <div className="min-h-screen bg-soft-bg font-sans selection:bg-primary-dark/10 selection:text-primary-dark">
      <Header />

      <main>
        {/* HERO SECTION - Tighter Spacing */}
        <section className="relative pt-20 pb-12 lg:pt-28 lg:pb-20 px-4 sm:px-[5%] lg:px-[8%] bg-primary-dark overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[linear-gradient(135deg,transparent_0%,rgba(212,175,55,0.03)_100%)] pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-dark/40 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="text-[2.6rem] sm:text-[3.2rem] lg:text-[4.2rem] font-[900] text-white mb-5 leading-[0.95] tracking-tighter uppercase">
                {title}
              </h1>
              <p className="text-[1.1rem] sm:text-[1.2rem] text-hero-paragraph leading-relaxed mb-8 max-w-[580px] font-medium opacity-80 decoration-0">
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

        {/* SECTION 1: JOURNEY TO INDEPENDENCE */}
        <section className="bg-white pt-7 pb-8 lg:pt-11 lg:pb-12 px-6 sm:px-10 border-b border-border-main/10">
          <div className="max-w-[1200px] mx-auto text-left">
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-4 tracking-tight uppercase leading-none">
              What to Expect on Your <span className="italic font-extrabold text-primary-text/40">York Driving Test</span>
            </h2>
            <div className="w-16 h-1.5 bg-primary-dark/10 mb-7"></div>
            
            <div className="space-y-8 max-w-[1050px] text-secondary-text text-[1.15rem] leading-[1.8] font-medium">
              <p>
                Many learners start their journey feeling a little overwhelmed by York’s busy outer ring road, multi-lane roundabouts, and the way traffic flow can shift so quickly. That is completely normal. Whether you are navigating the mini-roundabouts in Huntington or joining the faster A64 at Hopgrove, the goal is always to build your confidence gradually—one street at a time.
              </p>
              <p>
                The driving test is not designed to trick you; it is there to verify that you can stay calm, make safe decisions, and handle real-world traffic around the Monks Cross Driving Test Centre. The DVSA examiners are looking for safe, consistent driving — not perfection. If you have been taking regular <a href="/automatic-driving-lessons" className="text-primary-dark font-bold hover:underline transition-all">automatic</a> or <a href="/manual-driving-lessons" className="text-primary-dark font-bold hover:underline transition-all">manual driving lessons in York</a> around Heworth, Fulford, Osbaldwick, Tang Hall, or <a href="/york" className="text-primary-dark font-bold hover:underline transition-all">other areas across York</a>, you will already be building the local familiarity needed for success on test day.
              </p>
              <p>
                As your test date approaches, the focus shifts naturally. It becomes less about being told what to do and more about you trusting your own eyes and judgement. We are here to help you stay calm, read the road ahead, and make those independent decisions while the examiner sits quietly beside you. It's about proving to yourself that you are ready for the road.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: TIMING & PREP */}
        <section className="bg-soft-bg pt-6 pb-12 lg:pt-10 lg:pb-20 px-6 sm:px-10 border-b border-border-main/10">
          <div className="max-w-[1200px] mx-auto text-left">
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-[#1F2937] mb-4 leading-none tracking-tight uppercase">
              Choosing The Right <span className="italic font-extrabold text-primary-text/30">Time To Test.</span>
            </h2>
            <div className="w-16 h-1.5 bg-primary-dark/10 mb-7"></div>
            
            <div className="space-y-4 max-w-[1050px] text-secondary-text text-[1.15rem] leading-[1.8] font-medium">
              <p>
                Learners often ask if there is a perfect time to book a driving test. Mid-morning can feel calmer because it usually avoids the worst of the school run traffic around Heworth and Tang Hall, but there is no magic slot that makes the test easy.
              </p>
              
              <div className="py-2 border-l-2 border-primary-dark/20 pl-6 mt-1 mb-1">
                <p className="text-primary-text font-bold text-[1.3rem] italic tracking-tight leading-snug">
                  The best test time is the one you feel ready for.
                </p>
              </div>

              <p>
                A quieter test can still include faster roads such as the A64 or A1237, while a busier time can give you more time to plan because traffic is moving more slowly. Around Monks Cross, the roads can change quickly from retail park traffic to residential streets and faster dual carriageway sections. Some routes also pass through Fulford or skirt the edge of York city centre, so the real aim is to feel ready for any road, whatever time your test is booked.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: MOCK TESTS */}
        <section className="bg-white pt-6 pb-10 lg:pt-10 lg:pb-14 px-6 sm:px-10 border-b border-border-main/10">
          <div className="max-w-[1200px] mx-auto text-left">
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-[#1F2937] mb-4 leading-none tracking-tight uppercase">
              The Secret Weapon: <span className="italic font-extrabold text-primary-text/30">Mock Tests.</span>
            </h2>
            <div className="w-16 h-1.5 bg-primary-dark/10 mb-7"></div>
            
            <div className="space-y-4 max-w-[1050px] text-secondary-text text-[1.15rem] leading-[1.8] font-medium">
              <p>
                Many learners find that moving from a regular lesson to the formal test environment can be a bit of a shock. <a href="/mock-driving-tests" className="text-primary-dark font-bold hover:underline transition-all">Mock driving tests in York</a> are a great way to get used to the real test environment before the big day. By using the same silence and marking standards as an official examiner, we help you understand exactly what to expect so nothing feels like a surprise.
              </p>

              <div className="py-2 border-l-2 border-primary-dark/20 pl-6 mt-1 mb-1">
                <p className="text-primary-text font-bold text-[1.3rem] italic tracking-tight leading-snug">
                  The more familiar the test feels, the calmer you’ll be on the day.
                </p>
              </div>

              <p>
                A mock test gives you a chance to experience the pressure before the real thing. We spend extra time practising the parts of the York test routes that learners usually find hardest, from the roundabouts around Monks Cross to the independent driving sections through Stockton Lane or Murton Way. Whether you start your lessons in Huntington or another <a href="/york" className="text-primary-dark font-bold hover:underline transition-all">area of York</a>, we'll make sure you're ready for whatever the examiner asks.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHY DO PEOPLE FAIL? */}
        <section className="bg-soft-bg pt-10 pb-0 lg:pt-14 lg:pb-0 px-6 sm:px-10 border-b border-border-main/10 overflow-hidden relative">
          <div className="max-w-[1200px] mx-auto text-left relative z-10">
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-[#1F2937] mb-4 leading-none tracking-tight uppercase">
              Why Do <span className="italic font-extrabold text-primary-text/30">People Fail?</span>
            </h2>
            <div className="w-16 h-1.5 bg-primary-dark/10 mb-8"></div>
            
            <div className="max-w-[1050px]">
              <div className="space-y-6 text-secondary-text text-[1.15rem] leading-[1.8] font-medium">
                <p>
                  Most learners who fail their York driving test aren’t far away from passing. It is almost always the small, split-second decisions under pressure—a rushed mirror check on a busy approach, choosing the wrong lane at the Hopgrove roundabout, or hesitating just a little too long at a junction on Hull Road.
                </p>

                {/* Modern Editorial Feature Section */}
                <div className="relative py-8 border-y border-border-main/10 bg-white/60 -mx-6 sm:mx-0 px-6 sm:px-10">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary-dark/5"></div>
                  <div className="text-primary-text font-black uppercase tracking-[0.15em] text-[0.8rem] mb-6 flex items-center gap-3">
                    <span className="w-8 h-px bg-primary-dark/20"></span>
                    Common Pressure Points in York
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5">
                    {[
                      { title: "Observation", text: "Rushed mirror checks before changing speed near the ring road exits." },
                      { title: "Positioning", text: "Drifting between lanes on the multi-lane roundabouts at Monks Cross." },
                      { title: "Decision Making", text: "Hesitating at busy junctions when a safe gap is clearly available." },
                      { title: "Reaction to Signs", text: "Missing speed limit changes when transitioning from the A64 to local roads." },
                      { title: "Planning", text: "Late lane choices when following sat nav instructions through Huntington." }
                    ].map((item, idx) => (
                      <div key={`first-time-pressure-${idx}`} className="group">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[0.65rem] font-black text-primary-dark/40 tracking-widest uppercase">0{idx + 1}</span>
                          <div className="text-[1rem] font-bold text-primary-text uppercase tracking-tight">{item.title}</div>
                        </div>
                        <p className="text-[0.95rem] text-secondary-text/80 leading-relaxed pl-7 border-l border-primary-dark/5 group-hover:border-primary-dark/20 transition-colors">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="pt-2 pb-6">
                  It's helpful to remember that these slips usually aren't about a lack of driving ability—they're just the result of test-day adrenaline clouding your judgement for a split second. We focus on building rhythms and habits that stay with you even when you're feeling the pressure. By facing these conditions in a realistic <a href="/mock-driving-tests" className="text-primary-dark font-bold hover:underline transition-all">mock driving test in York</a> first, you can get the jitters out of your system and prove to yourself that you're ready for the road.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RECENT PASSES SECTION */}
        <section className="bg-white py-8 lg:py-10 px-6 sm:px-10 overflow-hidden border-b border-border-main/10">
          <div className="max-w-[1200px] mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-2 tracking-tighter uppercase leading-none">
                Recent York <span className="italic font-extrabold text-[#8E969D]">Driving Test Passes</span>
              </h2>
              <p className="text-secondary-text text-[0.85rem] md:text-[0.92rem] leading-relaxed font-medium max-w-[600px] mx-auto">
                Real learners. Real results. Recent driving test passes across York and surrounding areas.
              </p>
            </div>

            <div className="relative group">
              {/* Navigation Handles */}
              <div className="absolute top-1/2 left-2 md:-left-12 -translate-y-1/2 z-20">
                <button
                  onClick={prevPass}
                  className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-white border border-border-main/20 shadow-lg flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
              <div className="absolute top-1/2 right-2 md:-right-12 -translate-y-1/2 z-20">
                <button
                  onClick={nextPass}
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
                      key={`first-time-pass-${pass.id}`}
                      className="min-w-full md:min-w-[calc(33.333%-16px)] shrink-0"
                    >
                      <div className="aspect-[4/3.2] bg-soft-bg rounded-[32px] border border-border-main/10 overflow-hidden relative group/card shadow-sm hover:shadow-xl transition-all duration-500">
                        <img src={pass.src} alt="York driving test pass" className="absolute inset-0 w-full h-full object-cover" />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <div className="flex justify-center gap-2 mt-6 md:hidden">
                {recentPasses.map((pass, i) => (
                  <button 
                    key={`first-time-pass-dot-${pass.id}`}
                    onClick={() => setCurrentPassIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPassIndex === i ? 'bg-primary-dark w-4' : 'bg-primary-dark/20'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRUSTED BY LEARNERS SECTION */}
        <section className="bg-soft-bg py-6 lg:py-10 px-6 sm:px-10 overflow-hidden border-b border-border-main/10">
          <div className="max-w-[1040px] mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-[1.8rem] md:text-[2rem] font-black text-primary-text mb-3 tracking-tighter uppercase leading-none">
                Trusted by <span className="italic font-extrabold text-[#8E969D]">York Learners</span>
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
                  href="https://www.google.com/search?q=York+Driving+Lesson+School+reviews" 
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

        {/* SECTION 5: DEALING WITH TEST NERVES */}
        <section className="bg-primary-dark pt-2 pb-10 lg:pt-4 lg:pb-14 px-6 sm:px-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.03] skew-x-[-15deg] translate-x-1/4 pointer-events-none"></div>
          <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-3 text-left">
              <h2 className="text-[1.8rem] md:text-[2.6rem] font-black text-white mb-6 leading-[1.1] tracking-tighter uppercase">
                Dealing With <span className="italic font-extrabold text-white/30">Test Nerves.</span>
              </h2>
              <div className="w-16 h-1.5 bg-white/20 mb-8"></div>
              <div className="space-y-6 text-white/70 text-[1.05rem] md:text-[1.1rem] leading-relaxed font-medium">
                <p>
                  Don't panic if your legs feel like jelly when you pull out of the Monks Cross test centre. Every learner feels it. The key is to remember that the examiner isn't looking for robotic perfection; they’re looking for a safe, responsible driver who accommodates others.
                </p>
                <p>
                  Before the test, we spend time helping you settle your nerves and feel comfortable in the car. Whether you’re taking your test in a manual or automatic car, the aim is to make the controls feel familiar before the examiner sits beside you.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 flex justify-start lg:justify-end">
              <div className="bg-white/5 pt-5 pb-4 px-5 md:pt-[26px] md:pb-5 md:px-7 rounded-[32px] border border-white/10 backdrop-blur-sm relative group overflow-hidden max-w-sm lg:max-w-[360px]">
                <div className="absolute -top-2 -right-2 w-24 h-24 bg-white/[0.02] rounded-full blur-2xl"></div>
                <p className="text-white text-[1.05rem] md:text-[1.1rem] leading-relaxed font-medium italic mb-0 relative z-10">
                  "Treat the examiner like just another passenger. They are there to verify your safety, not to judge you. Focus on the road ahead, not the result."
                </p>
                <div className="mt-4 w-12 h-px bg-white/10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: REAL ROAD AWARENESS */}
        <section className="bg-soft-bg pt-8 pb-6 lg:pt-10 lg:pb-10 px-6 sm:px-10 border-b border-border-main/10">
          <div className="max-w-[1200px] mx-auto text-left grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-8">
              <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-3 tracking-tight uppercase leading-none">
                Building Real <span className="italic font-extrabold text-primary-text/40">Road Awareness</span>
              </h2>
              <div className="w-16 h-1.5 bg-primary-dark/10 mb-6"></div>
              
              <div className="space-y-4 text-secondary-text text-[1.1rem] md:text-[1.15rem] leading-[1.8] font-medium">
                <p>
                  Passing your driving test in York is about more than just controlling the car; it's about your ability to read the road and react to the environment around you. During the independent driving section—which lasts around 20 minutes—you'll be asked to follow either a sat nav or road signs through local areas like Huntington or towards the Hull Road.
                </p>
                <p>
                  The examiner isn't testing your memory or your ability to follow directions perfectly. They are looking for your ability to make safe, calm decisions. Whether you're navigating the multi-lane approaches to the Monks Cross roundabouts or the busier stretches of the A64 ring road, the real skill is staying focused on your surroundings.
                </p>
                <div className="pt-2 border-l-2 border-primary-dark/10 pl-6">
                  <p className="text-secondary-text font-medium">
                    It's helpful to remember that taking a wrong exit or missing a turn isn't an automatic fault. If you realise you're in the wrong lane at the Hopgrove roundabout, stay in that lane and follow it safely rather than forcing a last-second correction. As long as you stay safe and legal, the examiner will simply help you get back on the route.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 lg:pt-12">
              <div className="bg-white/40 border border-primary-dark/5 pt-5 pb-4 px-6 md:pt-6 md:pb-5 md:px-7 rounded-[32px] relative overflow-hidden group max-w-[340px] ml-auto lg:ml-0">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary-dark/10 group-hover:bg-primary-dark/30 transition-colors"></div>
                <div className="text-[0.75rem] font-black text-primary-dark/40 uppercase tracking-[0.2em] mb-4">Independent Driving</div>
                <p className="text-primary-text font-bold text-[1.15rem] leading-tight italic mb-3 uppercase tracking-tighter">
                  "Navigation is not being tested — safe decisions are."
                </p>
                <p className="text-[0.88rem] text-secondary-text/80 leading-relaxed">
                  If you miss a turn, stay calm. It is better to go the wrong way safely than to make a dangerous last-second move.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: SERVICE HUB */}
        <section className="bg-white pt-8 pb-10 lg:pt-12 lg:pb-16 px-6 sm:px-10">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-[1.3rem] md:text-[1.8rem] font-black text-primary-text mb-6 tracking-[0.16em] uppercase leading-none text-center">
              Everything You Need <span className="italic font-extrabold text-primary-text/40">To Pass</span>
            </h2>
            <div className="w-16 h-1.5 bg-primary-dark/10 mb-12 mx-auto"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Automatic Lessons", desc: "Learn to drive without worrying about gear changes — ideal for York’s busy roads.", url: "/automatic-driving-lessons" },
                { title: "Manual Lessons", desc: "Build confidence with full control of the car and better awareness on York’s busy roads.", url: "/manual-driving-lessons" },
                { title: "Intensive Courses", desc: "Learn quickly and prepare for your driving test in less time.", url: "/intensive-driving-courses" },
                { title: "Mock Exams", desc: "Practise realistic test routes and conditions around Monks Cross before test day.", url: "/mock-driving-tests" }
              ].map((service, index) => (
                <a key={`first-time-service-${index}`} href={service.url} className="flex flex-col p-6 md:p-7 bg-soft-bg/50 border border-border-main/10 rounded-2xl no-underline group hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left h-full">
                  <div className="mb-4">
                    <div className="text-[1.1rem] font-black text-primary-text mb-2 tracking-tight uppercase group-hover:text-primary-dark leading-tight">{service.title}</div>
                    <p className="text-secondary-text text-[0.88rem] leading-relaxed font-medium">{service.desc}</p>
                  </div>
                  <div className="mt-auto">
                    <span className="text-primary-dark font-black text-[0.7rem] uppercase tracking-widest border-b border-primary-dark/20 group-hover:border-primary-dark transition-all inline-block">Learn More →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <RelatedArticles currentSlug="pass-driving-test-first-time-york" bgClassName="bg-soft-bg" />

        {/* FAQ SECTION */}
        <section className="bg-white pt-10 pb-12 lg:pt-14 lg:pb-16 px-6 sm:px-10 border-t border-border-main/10" id="faq">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-10 lg:mb-12">
              <h2 className="text-[1.8rem] md:text-[2.4rem] font-black text-[#1F2937] mb-4 tracking-tighter uppercase leading-none">York Driving Test <span className="italic font-extrabold text-primary-text/30">FAQs.</span></h2>
              <div className="w-16 h-1.5 bg-primary-dark/10 mb-4 mx-auto"></div>
              <p className="text-[#4B5563] text-[1.05rem] font-medium">Helpful answers for learners preparing for their York driving test at Monks Cross.</p>
            </div>
            
            <div className="max-w-[850px] mx-auto">
              <FAQ items={faqs} />
            </div>
          </div>
        </section>
      </main>

      {/* CTA BAR */}
      <section className="bg-primary-dark border-t border-white/10 border-b border-b-white/5 py-6 lg:py-7 px-6 sm:px-10">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <h2 className="text-[1.05rem] md:text-[1.2rem] font-black text-white leading-tight tracking-tighter uppercase text-center sm:text-left">
            Ready To Pass First Time? <span className="italic font-extrabold text-white/40">Start Your Lessons In York.</span>
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

      <Footer />
    </div>
  );
}
