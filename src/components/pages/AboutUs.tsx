import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import FAQ from '../FAQ';
import { Phone, MessageSquare, ChevronRight } from 'lucide-react';

export default function AboutUs() {
  const faqItems = [
    {
      question: "What is York Driving Lesson?",
      answer: "York Driving Lesson provides driving lessons in York. We cover a wide range of services including automatic driving lessons, manual driving lessons, refresher lessons, intensive driving courses, motorway lessons, mock driving tests, and Pass Plus options."
    },
    {
      question: "Do you offer automatic driving lessons in York?",
      answer: "Yes, [automatic driving lessons](/automatic-driving-lessons/) are available for learners who prefer a simpler driving experience without the need to manage a clutch and gear stick. You can ask about availability and lesson options before getting started."
    },
    {
      question: "Do you offer manual driving lessons in York?",
      answer: "Yes, [manual driving lessons](/manual-driving-lessons/) are available for those who want to learn full vehicle control, including clutch coordination and manual gear changes."
    },
    {
      question: "Can nervous learners enquire?",
      answer: "Absolutely. We understand that starting to drive can be daunting, so we focus on calm, steady, and structured lessons to help nervous learners build confidence at their own pace."
    },
    {
      question: "What areas of York do you cover?",
      answer: "We cover a wide range of [areas in York](/york/) and surrounding locations including Acomb, Clifton, Fulford, Heworth, Haxby, Tang Hall, Rawcliffe, Bishopthorpe, and many others."
    },
    {
      question: "Do you help beginners?",
      answer: "Yes, we help complete beginners start from the very basics. The focus is on keeping you comfortable and safe as you take your first steps onto York's roads."
    },
    {
      question: "Do you offer refresher lessons?",
      answer: "Yes, [refresher lessons](/refresher-lessons/) are a great way for licence holders to rebuild their confidence after a break from driving or to get used to new road conditions."
    },
    {
      question: "Do you offer intensive driving courses?",
      answer: "Yes, [intensive driving courses](/intensive-driving-courses/) may be an option for learners who want more focused lesson time over a shorter period, depending on instructor availability."
    },
    {
      question: "Do you offer mock driving tests?",
      answer: "Yes, [mock driving tests](/mock-driving-tests/) are designed to simulate real test conditions, helping you identify areas for improvement and reducing nerves for the actual day."
    },
    {
      question: "Do you offer motorway lessons?",
      answer: "Yes, [motorway lessons](/motorway-lessons/) help qualified drivers or advanced learners build confidence with higher speeds, lane discipline, and the complexities of motorway junctions."
    },
    {
      question: "Do you offer Pass Plus?",
      answer: "Yes, the [Pass Plus](/pass-plus-course/) course is available for new drivers who want to gain extra experience."
    },
    {
      question: "How do I enquire about lessons?",
      answer: "You can enquire easily by calling us directly or by sending a message via WhatsApp. We're happy to discuss your goals and help you find the best next step."
    },
    {
      question: "Do you guarantee driving test passes?",
      answer: "No, we cannot guarantee a pass as it depends on your performance on the day. However, our structured lessons are designed to prepare you to be a safe, competent driver."
    },
    {
      question: "Can I ask which lesson type is right for me?",
      answer: "Yes, we are happy to discuss your goals and help you decide whether automatic driving lessons, manual driving lessons, refresher lessons, or intensive driving courses are the best fit for you."
    }
  ];

  const lessonTypes = [
    { name: "Automatic Driving Lessons", href: "/automatic-driving-lessons/" },
    { name: "Manual Driving Lessons", href: "/manual-driving-lessons/" },
    { name: "Intensive Courses", href: "/intensive-driving-courses/" },
    { name: "Refresher Lessons", href: "/refresher-lessons/" },
    { name: "Motorway Lessons", href: "/motorway-lessons/" },
    { name: "Mock Driving Tests", href: "/mock-driving-tests/" },
    { name: "Pass Plus Course", href: "/pass-plus-course/" }
  ];

  const learnerGuides = [
    { name: "Automatic vs Manual Driving Lessons", href: "/articles/automatic-vs-manual-driving-lessons-york/" },
    { name: "How to Pass Your Driving Test First Time in York", href: "/articles/pass-driving-test-first-time-york/" },
    { name: "What Happens On The York Driving Test", href: "/articles/what-happens-on-the-york-driving-test/" },
    { name: "York Driving Test Routes & Common Mistakes", href: "/articles/york-driving-test-routes-common-mistakes/" },
    { name: "Driving Test Nerves: How To Stay Calm On Test Day", href: "/articles/driving-test-nerves-how-to-stay-calm/" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-primary-text selection:bg-primary-dark/10">
      <Header />

      <main className="pt-14">
        {/* SECTION 1 — HERO */}
        <section className="bg-soft-bg pt-6 pb-4 lg:pt-8 lg:pb-6 px-6 sm:px-10 border-b border-border-main/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[linear-gradient(135deg,transparent_0%,rgba(212,175,55,0.03)_100%)] pointer-events-none"></div>
          <div className="max-w-[720px] mx-auto text-center relative z-10">
            <h1 className="text-[2.4rem] sm:text-[3.2rem] lg:text-[3.8rem] font-black text-primary-text mb-3 leading-[1.1] tracking-tighter uppercase">
              About <span className="text-primary-dark">York Driving</span> <br className="hidden sm:block" /> Lesson
            </h1>
            <p className="text-[1.1rem] sm:text-[1.25rem] text-secondary-text leading-relaxed font-medium">
              York Driving Lesson provides calm, structured driving lessons across York, helping learners build confidence at a steady pace. Whether you’re learning in an automatic or manual car, the focus is always on keeping lessons calm, clear, and suited to real York roads and traffic conditions.
            </p>
          </div>
        </section>

        {/* SECTION 2 — WHO WE ARE */}
        <section className="pt-0 pb-6 lg:pt-0 lg:pb-10 px-6 sm:px-10 border-b border-border-main/5 bg-white">
          <div className="max-w-[750px] mx-auto text-center">
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-4 tracking-tighter uppercase">
              Who We Are
            </h2>
            <div className="w-12 h-1 bg-primary-dark/20 mx-auto mb-4"></div>
            <div className="space-y-6">
              <p className="text-[1.05rem] text-secondary-text leading-relaxed font-medium">
                York Driving Lesson was created to make learning to drive in York feel clearer, calmer, and easier for learners. We understand that everyone learns at a different pace, which is why we offer a broad range of support suited to individual needs.
              </p>
              <p className="text-[1.05rem] text-secondary-text leading-relaxed font-medium">
                From automatic and manual lessons to intensive courses, refresher lessons, mock driving tests, Pass Plus, and motorway lessons, we aim to help learners build confidence steadily without unnecessary pressure.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — OUR APPROACH TO LESSONS */}
        <section className="pt-4 pb-8 lg:pt-6 lg:pb-11 px-6 sm:px-10 bg-soft-bg/30 border-b border-border-main/5">
          <div className="max-w-[1000px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-4 lg:-mt-2">
                <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text leading-tight tracking-tighter uppercase">
                  Our Approach <span className="block text-primary-text/30 italic">To Lessons</span>
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-6">
                <p className="text-[1.05rem] text-secondary-text leading-relaxed font-medium">
                  We believe that learning to drive should be a positive experience. Our approach is built around calm teaching, clear communication, and structured progress. We don't believe in rushing—we believe in getting it right at a pace that works for you.
                </p>
                <p className="text-[1.05rem] text-secondary-text leading-relaxed font-medium">
                  By focusing on real York roads, roundabouts, junctions, and everyday traffic situations, lessons are designed to help learners build confidence gradually without feeling overwhelmed. The aim is to make progress feel steady, manageable, and suited to real driving conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — BUILT AROUND YORK ROADS */}
        <section className="pt-2 pb-2 lg:pt-4 lg:pb-4 px-6 sm:px-10 bg-white border-b border-border-main/5">
          <div className="max-w-[750px] mx-auto text-center">
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-4 tracking-tighter uppercase">
              Built Around York Roads
            </h2>
            <div className="w-12 h-1 bg-primary-dark/20 mx-auto mb-5"></div>
            <div className="space-y-6">
              <p className="text-[1.05rem] text-secondary-text leading-relaxed font-medium">
                York’s roads come with a mix of busy roundabouts, residential streets, city-centre traffic, and complex junctions. Lessons are designed around real driving conditions, helping learners build confidence gradually on the types of roads they’ll actually use every day.
              </p>
              <p className="text-[1.05rem] text-secondary-text leading-relaxed font-medium">
                Lessons take place across York, from local residential roads to busier test-route areas. You can also explore the different parts of York we cover through our <a href="/york/" className="text-primary-dark font-bold hover:underline">York Location Hub</a>.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5 — WHY LEARNERS CHOOSE YORK DRIVING LESSON */}
        <section className="pt-0 pb-8 lg:pt-2 lg:pb-12 px-6 sm:px-10 bg-soft-bg/30 border-b border-border-main/5">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-5 tracking-tighter uppercase">
              Why Learners Choose <span className="text-primary-dark">York Driving Lesson</span>
            </h2>
            
            <div className="max-w-[700px] mx-auto space-y-4 text-left">
              {[
                { title: "CALM SUPPORT FOR NERVOUS LEARNERS", desc: "Lessons are kept steady and manageable, helping nervous learners build confidence without feeling rushed." },
                { title: "AUTOMATIC AND MANUAL OPTIONS", desc: "Learners can enquire about automatic or manual lessons depending on what feels right for their confidence, goals, and driving plans." },
                { title: "YORK-BASED ROAD PRACTICE", desc: "Lessons focus on real local driving situations, from residential roads and roundabouts to busier junctions and test-route areas." },
                { title: "PROGRESS THAT FEELS CLEAR", desc: "The aim is to help learners understand what they are improving, what needs more practice, and how to keep moving forward safely." },
                { title: "SIMPLE WAYS TO GET STARTED", desc: "Learners can call or send a WhatsApp message to ask about lesson options, availability, and the best next step." }
              ].map((item, idx) => (
                <div key={idx} className="pb-4 last:pb-0">
                  <div className="text-[1.10rem] font-black text-primary-text uppercase tracking-tight mb-0.5">{item.title}</div>
                  <p className="text-secondary-text font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 — DRIVING LESSON OPTIONS IN YORK */}
        <section className="pt-0 pb-10 lg:pt-0 lg:pb-14 px-6 sm:px-10 bg-white border-b border-border-main/5">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-4 tracking-tighter uppercase">
                Driving Lesson Options in York
              </h2>
              <p className="text-secondary-text font-medium">Different learners need different types of support. You can explore the main lesson options below.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {lessonTypes.map((type, idx) => (
                <a 
                  key={idx} 
                  href={type.href} 
                  className={`group flex items-center justify-between p-5 bg-soft-bg rounded-2xl border border-border-main/30 hover:border-primary-dark/30 hover:bg-white transition-all duration-300 no-underline h-full ${idx === lessonTypes.length - 1 ? 'lg:col-start-2' : ''}`}
                >
                  <span className="text-[0.95rem] font-bold text-primary-text group-hover:text-primary-dark transition-colors">{type.name}</span>
                  <ChevronRight className="w-4 h-4 text-primary-dark/30 group-hover:text-primary-dark group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7 — HELPFUL LEARNER GUIDES */}
        <section className="pt-2 pb-10 lg:pt-4 lg:pb-16 px-6 sm:px-10 bg-soft-bg/30 border-b border-border-main/5">
          <div className="max-w-[1000px] mx-auto">
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-6 tracking-tighter uppercase text-center">
              Helpful Learner Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learnerGuides.map((guide, idx) => (
                <a 
                  key={idx} 
                  href={guide.href} 
                  className="flex flex-col h-full p-6 bg-white rounded-2xl border border-border-main/20 hover:shadow-xl hover:shadow-primary-dark/5 transition-all duration-300 no-underline group"
                >
                  <div className="text-[1rem] font-bold text-primary-text leading-snug group-hover:text-primary-dark transition-colors flex-grow">{guide.name}</div>
                  <div className="mt-6 flex items-center text-[0.75rem] font-black text-primary-dark uppercase tracking-widest gap-2 shrink-0">
                    Read Guide <ChevronRight className="w-3 h-3 translate-y-[-1px]" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8 — FAQ SECTION */}
        <section className="pt-0 pb-10 lg:pt-2 lg:pb-12 px-6 sm:px-10 bg-white">
          <div className="max-w-[850px] mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-[1.8rem] md:text-[2.2rem] font-black text-primary-text mb-3 tracking-tighter uppercase">
                About York Driving Lesson FAQs
              </h2>
              <div className="w-12 h-1 bg-primary-dark/20 mx-auto"></div>
            </div>
            
            <FAQ items={faqItems} />
          </div>
        </section>

        {/* SECTION 9 — FINAL CTA */}
        <section className="pt-6 pb-8 lg:pt-8 lg:pb-10 px-6 sm:px-10 bg-primary-dark border-t border-white/5 relative overflow-hidden">
          {/* Decorative background blur */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-[620px] mx-auto text-center relative z-10">
            <h2 className="text-[1.7rem] sm:text-[2.2rem] font-black text-white mb-4 leading-tight tracking-tighter uppercase">
              Ready to Start Driving Lessons in York?
            </h2>
            <p className="text-[0.95rem] text-white/70 leading-relaxed font-medium mb-7 max-w-[500px] mx-auto">
              If you’re ready to ask about lessons, availability, or which option may suit you best, you can call or message on WhatsApp to get started.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a 
                href="/contact-us/" 
                className="w-full sm:w-auto bg-[#FDFCF0] text-primary-dark px-7 py-3 rounded-full text-[0.8rem] font-black uppercase tracking-widest no-underline transition-all duration-300 hover:bg-white hover:scale-105 shadow-xl shadow-black/20"
              >
                Enquire Now
              </a>
              <a 
                href="tel:+447763999317" 
                className="w-full sm:w-auto bg-[#2c2c2c] text-[#FDFCF0] border border-[#FDFCF0]/30 px-6 py-3 rounded-full text-[0.8rem] font-black uppercase tracking-widest no-underline transition-all duration-300 hover:bg-[#383838] hover:border-[#FDFCF0]/60 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#FDFCF0]" /> Call Now
              </a>
              <a 
                href="https://wa.me/447763999317" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] text-white px-6 py-3 rounded-full text-[0.8rem] font-black uppercase tracking-widest no-underline transition-all duration-300 hover:brightness-110 shadow-xl shadow-black/10 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
