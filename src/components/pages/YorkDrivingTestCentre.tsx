import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Clock, Check, Star, ShieldCheck, Map, Compass, RotateCcw, AlertTriangle, Car, GraduationCap } from 'lucide-react';
import EnquiryForm from '../EnquiryForm';
import FAQ from '../FAQ';
import Header from '../Header';
import Footer from '../Footer';
import YorkAreaFinder from '../YorkAreaFinder';
import RelatedLinks from '../RelatedLinks';

export default function YorkDrivingTestCentre() {
  const difficulties = [
    { title: "Roundabout Lane Choice", text: "Judging the correct lane early at multi-lane junctions like Grimston Bar." },
    { title: "Meeting Traffic", text: "Safely managing narrow residential roads in Heworth and Tang Hall." },
    { title: "Speed Changes", text: "Quickly reacting to transitions between 20mph, 30mph, and 40mph zones." },
    { title: "Junction Hesitation", text: "Learning when it is safe to go at busy junctions without causing a delay." },
    { title: "Mirror Timing", text: "Consistency with checks before every change of speed or direction." },
    { title: "Road Positioning", text: "Maintaining a safe and clear position on busier multi-lane roads." }
  ];

  return (
    <div className="min-h-screen bg-soft-bg font-sans selection:bg-primary-dark/10 selection:text-primary-dark translate-z-0">
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-12 lg:pt-24 lg:pb-16 px-6 sm:px-10 bg-primary-dark overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[linear-gradient(135deg,transparent_0%,rgba(212,175,55,0.03)_100%)] pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto relative z-10 text-left">
          <h1 className="text-[2.8rem] sm:text-[3.5rem] lg:text-[4.2rem] font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase max-w-[900px]">
            Monks Cross Driving Test Centre – <span className="italic font-extrabold text-[#8E969D] text-[0.8em]">Test Preparation</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6">
            <a href="/contact-us/" className="bg-white text-primary-dark px-10 py-4.5 rounded-full text-[0.85rem] font-black uppercase tracking-widest no-underline shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-center min-w-max">
              Enquire Now
            </a>
            <a href="tel:+447763999317" className="bg-transparent text-white border-2 border-white/20 px-10 py-4.5 rounded-full text-[0.85rem] font-black uppercase tracking-widest no-underline transition-all duration-300 hover:border-white/80 hover:bg-white/5 text-center min-w-max">
              Call Now
            </a>
            
            <div className="flex gap-x-6 gap-y-3 justify-center lg:justify-start items-center flex-wrap text-[0.72rem] font-black uppercase tracking-widest text-white/90">
              <div className="flex items-center gap-2">
                <span className="text-[#F4B400] text-sm">⭐</span> 
                <span>5-STAR GOOGLE REVIEWS</span>
              </div>
              <span className="hidden sm:inline opacity-30 font-light text-lg">|</span>
              <a 
                href="https://uk.trustpilot.com/review/yorkdrivinglesson.co.uk" 
                target="_blank"  
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:opacity-80 transition-opacity no-underline text-white-text"
              >
                <span className="text-[#00B67A] text-lg">★</span> 
                <span>EXCELLENT ON TRUSTPILOT</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL INTRO SECTION */}
      <section className="py-8 lg:py-10 bg-white border-b border-border-main/10 shadow-sm relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-12 sm:px-24 lg:px-44">
          <div className="max-w-[1100px] relative pl-12">
            <div className="absolute left-0 top-1 bottom-1 w-[3px] bg-primary-dark/30"></div>
            <p className="text-secondary-text text-[0.98rem] leading-[1.6] font-medium opacity-90">
              Preparing for your York test involves navigating road layouts around Monks Cross Drive, the A64, and Hopgrove. We help you adjust to local routines and changing speed limits with both <a href="/automatic-driving-lessons/" className="text-primary-dark font-bold underline decoration-primary-dark/30 hover:decoration-primary-dark transition-all">automatic</a> and <a href="/manual-driving-lessons/" className="text-primary-dark font-bold underline decoration-primary-dark/30 hover:decoration-primary-dark transition-all">manual driving lessons</a>, making the routes feel like a natural part of your training.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1 — ABOUT YORK DRIVING TEST CENTRE */}
      <section className="pt-10 lg:pt-14 pb-8 lg:pb-10 bg-white">
        <div className="max-w-[1280px] mx-auto px-12 sm:px-24 lg:px-44">
          <div className="max-w-[1100px]">
            <h2 className="text-[1.4rem] md:text-[1.8rem] font-black text-primary-text mb-6 uppercase tracking-tight leading-tight">
              About Monks Cross Driving Test Centre
            </h2>
            <div className="space-y-5 text-secondary-text text-[1rem] leading-relaxed font-medium">
              <p>
                Located at Monks Cross, Huntington, the Monks Cross driving test centre combines quieter residential roads with busier multi-lane routes around the A1079 Hull Road, Grimston Bar, and nearby ring road sections. Test routes across York often include a mix of changing speed limits, busy junctions, residential streets, and larger roundabouts that require steady planning and good lane discipline throughout the drive.
              </p>
              <p>
                Many learners find the faster-moving traffic around Monks Cross and the surrounding retail routes more demanding during busy periods, especially when moving between residential roads and dual carriageways. Whether you’re learning gradually or taking an <a href="/intensive-driving-courses/" className="text-primary-dark font-bold underline decoration-primary-dark/20 hover:decoration-primary-dark transition-all">intensive driving course</a>, we help you become more familiar with the same local roads, junctions, and traffic conditions commonly experienced during real York driving tests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — LESSON OPTIONS */}
      <section className="py-4 lg:py-6 bg-soft-bg text-left">
        <div className="max-w-[1280px] mx-auto px-12 sm:px-24 lg:px-44">
          <h2 className="text-[1.2rem] md:text-[1.5rem] font-black text-primary-text mb-6 uppercase tracking-tight leading-tight">
            Driving Lessons & Test Preparation in York
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px]">
            {/* Automatic */}
            <div className="bg-white p-8 rounded-[32px] border border-border-main/10 shadow-sm flex flex-col items-start hover:shadow-lg transition-all duration-300 group">
              <div className="text-[1.1rem] font-black text-primary-text mb-3 uppercase tracking-tighter">Automatic Lessons</div>
              <p className="text-secondary-text text-[0.9rem] leading-relaxed font-medium opacity-80 mb-6 flex-grow">
                Focus on the road without worrying about gear changes. Great for managing busy York junctions and roundabouts with less stress.
              </p>
              <a href="/automatic-driving-lessons/" className="text-primary-dark font-black text-[0.75rem] uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all no-underline border-b-2 border-primary-dark/10 hover:border-primary-dark pb-1">
                Learn More <Navigation size={14} className="rotate-90" />
              </a>
            </div>
 
            {/* Manual */}
            <div className="bg-white p-8 rounded-[32px] border border-border-main/10 shadow-sm flex flex-col items-start hover:shadow-lg transition-all duration-300 group">
              <div className="text-[1.1rem] font-black text-primary-text mb-3 uppercase tracking-tighter">Manual Lessons</div>
              <p className="text-secondary-text text-[0.9rem] leading-relaxed font-medium opacity-80 mb-6 flex-grow">
                Gear changes and clutch control built up gradually so you can drive any car with confidence on every type of local road.
              </p>
              <a href="/manual-driving-lessons/" className="text-primary-dark font-black text-[0.75rem] uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all no-underline border-b-2 border-primary-dark/10 hover:border-primary-dark pb-1">
                Learn More <Navigation size={14} className="rotate-90" />
              </a>
            </div>
 
            {/* Mock Tests */}
            <div className="bg-white p-8 rounded-[32px] border border-border-main/10 shadow-sm flex flex-col items-start hover:shadow-lg transition-all duration-300 group">
              <div className="text-[1.1rem] font-black text-primary-text mb-3 uppercase tracking-tighter">Mock Driving Tests</div>
              <p className="text-secondary-text text-[0.9rem] leading-relaxed font-medium opacity-80 mb-6 flex-grow">
                Practise under real test conditions at the Monks Cross test centre. We'll help you find and fix any weak spots so you feel ready for test day.
              </p>
              <a href="/mock-driving-tests/" className="text-primary-dark font-black text-[0.75rem] uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all no-underline border-b-2 border-primary-dark/10 hover:border-primary-dark pb-1">
                Learn More <Navigation size={14} className="rotate-90" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — ROADS AND ROUTES */}
      <section className="py-4 lg:py-6 bg-white text-left">
        <div className="max-w-[1280px] mx-auto px-12 sm:px-24 lg:px-44">
          <div className="max-w-[1100px]">
            <h2 className="text-[1.4rem] md:text-[1.8rem] font-black text-primary-text mb-4 uppercase tracking-tight leading-tight text-left">
              Roads and Routes We Practise Around York
            </h2>
            <div className="space-y-4 text-secondary-text text-[1rem] leading-[1.6] font-medium text-left">
              <p>
                We focus heavily on roads around the Monks Cross centre, including lane discipline at interchanges like Hopgrove and Grimston Bar. You'll gain confidence handling the faster flow on Hull Road and merging onto the A64, so you're ready for the technical sections of the York routes.
              </p>
              <p>
                We also navigate residential streets in <a href="/driving-lessons-heworth-york/" className="text-primary-dark font-bold underline decoration-primary-dark/20 hover:decoration-primary-dark transition-all">Heworth</a>, <a href="/driving-lessons-tang-hall-york/" className="text-primary-dark font-bold underline decoration-primary-dark/20 hover:decoration-primary-dark transition-all">Tang Hall</a>, and <a href="/driving-lessons-osbaldwick-york/" className="text-primary-dark font-bold underline decoration-primary-dark/20 hover:decoration-primary-dark transition-all">Osbaldwick</a>. Areas like Stockton Lane and Monks Cross Drive are ideal for practising meeting traffic and speed limit changes, helping you feel at home with the conditions you'll face on the day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — COMMON ISSUES */}
      <section className="py-6 lg:py-10 bg-primary-dark relative overflow-hidden text-left">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto px-12 sm:px-24 lg:px-44 relative z-10">
          <div className="max-w-[1100px]">
            <h2 className="text-[1.4rem] md:text-[1.8rem] font-black text-white mb-4 uppercase tracking-tight leading-tight">
              Common Issues Found In York
            </h2>
            <div className="space-y-4 text-white/80 text-[0.92rem] md:text-[0.98rem] leading-[1.5] font-medium">
              <p>
                Faults on York test routes often come from handling busy junctions around the Monks Cross centre and the A1079. Many learners struggle with lane choice at Hopgrove Roundabout or Grimston Bar, usually when rushing decisions. Hesitation when joining the A64 is another frequent challenge where timing is key. A <a href="/mock-driving-tests/" className="text-white font-bold underline decoration-white/30 hover:decoration-white transition-all">mock driving test</a> is a practical way to build confidence for these faster roads.
              </p>
              <p>
                In residential areas like <a href="/driving-lessons-heworth-york/" className="text-white font-bold underline decoration-white/30 hover:decoration-white transition-all">Heworth</a>, <a href="/driving-lessons-tang-hall-york/" className="text-white font-bold underline decoration-white/30 hover:decoration-white transition-all">Tang Hall</a>, and <a href="/driving-lessons-osbaldwick-york/" className="text-white font-bold underline decoration-white/30 hover:decoration-white transition-all">Osbaldwick</a>, issues often involve meeting traffic and positioning around parked cars. It's also easy to miss subtle speed changes without proactive observation. Focusing on these local bottlenecks helps you stay calm and maintain a safe position on test day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — LESSON PREPARATION */}
      <section className="pt-4 lg:pt-6 pb-6 lg:pb-8 bg-white text-left">
        <div className="max-w-[1280px] mx-auto px-12 sm:px-24 lg:px-44">
          <div className="max-w-[1100px]">
            <h2 className="text-[1.4rem] md:text-[1.8rem] font-black text-primary-text mb-4 uppercase tracking-tight leading-tight">
              HOW WE PREPARE YOU FOR THE YORK TEST
            </h2>
            <div className="space-y-4 text-secondary-text text-[1rem] leading-[1.6] font-medium">
              <p>
                We begin on quieter residential streets to build your basic skills before moving onto the actual routes used during York tests. You'll gradually spend more time around the Monks Cross centre, Hull Road, and the A64, becoming familiar with the specific roundabouts and junctions that learners often find challenging.
              </p>
              <p>
                Mock tests are also a key part of your preparation, simulating real exam conditions so there are no surprises. By practising on the actual roads you'll encounter on the day, we help you feel much more at home with local landmarks and the independent driving sections of the test.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — RECENT PASSES */}
      <section className="py-10 lg:py-12 bg-soft-bg border-y border-border-main/10 text-left">
        <div className="max-w-[1280px] mx-auto px-12 sm:px-24 lg:px-44">
          <div className="max-w-[1100px]">
            <h2 className="text-[1.6rem] md:text-[2rem] font-black text-primary-text mb-3 uppercase tracking-tight leading-tight">
              WHAT YORK LEARNERS SAY
            </h2>
            <p className="text-secondary-text text-[1rem] leading-relaxed font-medium mb-7 opacity-80 max-w-[700px]">
              Read verified reviews from learners who prepared for the Monks Cross Driving Test Centre with York Driving Lesson.
            </p>
            <a
              href="https://uk.trustpilot.com/review/yorkdrivinglesson.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-dark text-white px-12 py-5 rounded-full text-[0.85rem] font-black uppercase tracking-widest no-underline shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-3">
              Read Our Reviews <Star size={18} className="text-primary-light" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 7 — AREAS WE COVER */}
      <section className="pt-8 lg:pt-12 pb-16 lg:pb-20 bg-white text-center">
        <div className="max-w-[1280px] mx-auto px-12 sm:px-24 lg:px-44">
          <h2 className="text-[1.4rem] md:text-[1.8rem] font-black text-primary-text mb-6 tracking-tight uppercase leading-tight">
            AREAS WE COVER NEAR YORK TEST CENTRE
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { name: 'Heworth', url: '/driving-lessons-heworth-york/' },
              { name: 'Tang Hall', url: '/driving-lessons-tang-hall-york/' },
              { name: 'Osbaldwick', url: '/driving-lessons-osbaldwick-york/' },
              { name: 'Huntington', url: '/driving-lessons-huntington-york/' },
              { name: 'Haxby', url: '/driving-lessons-haxby-york/' },
              { name: 'Fulford', url: '/driving-lessons-fulford-york/' }
            ].map((area, index) => (
              <a
                key={`test-centre-area-${index}`}
                href={area.url}
                className="px-6 py-3 bg-soft-bg/50 border border-border-main/10 rounded-full hover:bg-primary-dark hover:text-white hover:shadow-md transition-all duration-300 no-underline text-center group"
              >
                <span className="text-[0.8rem] font-black text-primary-text group-hover:text-white uppercase tracking-widest transition-colors">{area.name}</span>
              </a>
            ))}
          </div>

          <a href="/york/" className="inline-flex items-center gap-2 text-primary-dark font-black uppercase tracking-[0.2em] text-[0.7rem] border-b-2 border-primary-dark/20 hover:border-primary-dark transition-all pb-1 no-underline">
            View All York Areas <Map size={14} />
          </a>
        </div>
      </section>

      {/* SECTION 8 — LOCATION MAP */}
      <section className="pt-8 lg:pt-10 pb-8 lg:pb-10 bg-soft-bg border-y border-border-main/10 text-left">
        <div className="max-w-[1280px] mx-auto px-12 sm:px-24 lg:px-44">
          <div className="max-w-[1100px]">
            <h2 className="text-[1.4rem] md:text-[1.8rem] font-black text-primary-text mb-6 tracking-tight uppercase leading-tight">
              Monks Cross Driving Test Centre Map
            </h2>
            
            <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[32px] overflow-hidden border border-border-main/10 shadow-lg group relative">
              <iframe title="Google Maps location" 
                src="https://maps.google.com/maps?q=York+Driving+Test+Centre,+Monks+Cross+Drive,+Huntington,+York&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.1] contrast-[1.05]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — YORK DRIVING TEST FAQs */}
      <section className="py-12 lg:py-16 bg-white text-left">
        <div className="max-w-[1280px] mx-auto px-12 sm:px-24 lg:px-44">
          <div className="mb-8 max-w-[1100px]">
            <h2 className="text-[1.4rem] md:text-[1.8rem] font-black text-primary-text mb-4 uppercase tracking-tight leading-tight text-left">
              Monks Cross Driving Test Centre FAQs
            </h2>
            <p className="text-secondary-text text-[1rem] font-medium max-w-[700px] opacity-70">
              Helpful answers about the Monks Cross driving test centre, local test routes, common road layouts, and what learners can expect on test day.
            </p>
          </div>
          
          <FAQ className="mx-0 space-y-2.5" items={[
            {
              question: "Where exactly is the Monks Cross driving test centre?",
              answer: "The Monks Cross test centre is located at Unit 2, Arabesque House, Monks Cross Drive, Huntington, York, YO32 9GW. Its location allows for a diverse range of routes, from quiet residential areas to busy arterial roads."
            },
            {
              question: "Is the Monks Cross driving test centre considered difficult?",
              answer: "No centre is designed to be 'difficult,' but success in York depends on being comfortable with high-speed roundabouts like those on the A64 and the busy commuter traffic on Hull Road."
            },
            {
              question: "What are the most common roads used in York tests?",
              answer: "You will frequently drive on Monks Cross Drive, Hull Road (A1079), the A64, and the York ring road. Residential sections often include Heworth, Tang Hall, or Osbaldwick."
            },
            {
              question: "Will I have to drive on the A64 dual carriageway?",
              answer: "Many test routes include short stretches of the A64. It’s important to practise merging at speed and selecting the correct lane early for exits at interchanges like Grimston Bar."
            },
            {
              question: "Is practice on Hull Road important for the test?",
              answer: "Yes, Hull Road (A1079) is a key corridor for many test routes. Practising here helps you manage multi-lane junctions and the heavy traffic flow heading toward the city centre."
            },
            {
              question: "What makes the Grimston Bar roundabout challenging?",
              answer: "Grimston Bar is a large, multi-lane interchange. Success here requires early planning, clear observation of road markings, and confidence when changing lanes in high traffic volumes."
            },
            {
              question: "How do I handle the Hopgrove roundabout area?",
              answer: "Hopgrove is another busy junction where lane discipline is vital. We spend time helping you identify the correct lane well in advance to avoid last-minute changes."
            },
            {
              question: "Are there many speed limit changes in York?",
              answer: "Speed limits in York can shift quickly between 20, 30, and 40mph. Developing a proactive rhythm for scanning road signs in areas like Huntington and Heworth is a core part of our training."
            },
            {
              question: "How should I handle roundabouts on my test day?",
              answer: "Focus on early planning and clear mirror routines. Whether it's a small mini-roundabout or a large interchange, consistent observation of other road users is what examiners look for during [Manual Driving Lessons](/manual-driving-lessons/)."
            },
            {
              question: "What are the most common mistakes on the York test?",
              answer: "Common faults often include incorrect lane choice at roundabouts, mirror-timing issues, and hesitation at busy junctions like those found on the York ring road links."
            },
            {
              question: "How should I prepare for my York driving test?",
              answer: "The best preparation is regular practice on local roads. Focus on building instinctive routines for observation and planning, perhaps starting with [Automatic Driving Lessons](/automatic-driving-lessons/) to simplify the learning process."
            },
            {
              question: "Do you offer mock driving tests near the Monks Cross test centre?",
              answer: "We highly recommend [Mock Driving Tests](/mock-driving-tests/). It replicates real examiner marking and allows you to practise independent driving around Monks Cross to build your confidence before the real exam."
            },
            {
              question: "What areas are commonly used on York driving test routes?",
              answer: "Test routes often pass through [Heworth](/driving-lessons-heworth-york/), [Tang Hall](/driving-lessons-tang-hall-york/), and [Osbaldwick](/driving-lessons-osbaldwick-york/). You might also head towards [Haxby](/driving-lessons-haxby-york/) or [Huntington](/driving-lessons-huntington-york/), covering a mix of narrow streets and wider link roads."
            },
            {
              question: "Are the Monks Cross roundabouts difficult?",
              answer: "The roundabouts near the test centre are busy but well-organised. Staying calm and planning your exit early is essential, skills we focus on during our [Intensive Driving Courses](/intensive-driving-courses/)."
            }
          ]} />
        </div>
      </section>

      <YorkAreaFinder />

      <RelatedLinks path="/monks-cross-driving-test-centre/" kind="info" />
      <Footer />
    </div>
  );
}
