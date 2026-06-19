import React from 'react';
import { Phone, MessageSquare, Mail, Star, MapPin, ChevronRight, ClipboardList, Navigation, Award, BookOpen } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const TrustpilotLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="white">
    <path d="M24 9.3l-9.1-.1L12 0 9.1 9.2 0 9.3l7.4 5.3-2.8 9.1 7.4-5.4 7.4 5.4-2.8-9.1L24 9.3z"/>
  </svg>
);

export default function ContactUs() {
  const contactMethods = [
    {
      title: "Call support",
      desc: "Speak to us about lesson availability, driving lesson options, or where to start.",
      buttonText: "Call now",
      href: "tel:+447763999317",
      icon: <Phone className="w-6 h-6 text-primary-dark" />,
      tag: "SUPPORT"
    },
    {
      title: "WhatsApp",
      desc: "Send us a quick message about lessons, availability, or what type of driving support you need.",
      buttonText: "Chat now",
      href: "https://wa.me/447763999317",
      icon: <MessageSquare className="w-6 h-6 text-[#25D366]" />,
      tag: "QUICK CHAT"
    },
    {
      title: "Email us",
      desc: "Email us about driving lessons, availability, or general enquiries.",
      buttonText: "Email us",
      href: "mailto:support@yorkdrivinglesson.co.uk",
      icon: <Mail className="w-6 h-6 text-[#1E40AF]" />,
      tag: "ENQUIRIES"
    }
  ];

  const lessonLinks = [
    { label: "Automatic driving lessons", href: "/automatic-driving-lessons", icon: <Award className="w-4 h-4" /> },
    { label: "Manual driving lessons", href: "/manual-driving-lessons", icon: <Award className="w-4 h-4" /> },
    { label: "Intensive courses", href: "/intensive-driving-courses", icon: <Award className="w-4 h-4" /> },
    { label: "Mock driving tests", href: "/mock-driving-tests", icon: <ClipboardList className="w-4 h-4" /> },
    { label: "Refresher lessons", href: "/refresher-lessons", icon: <Navigation className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-light-bg font-sans selection:bg-primary-dark/10 selection:text-primary-dark">
      <Header />

      <main className="pt-14">
        {/* Hero Section */}
        <section className="bg-primary-dark pt-10 pb-16 md:pb-20 lg:pb-24 px-6 sm:px-10 overflow-hidden relative">
          {/* Subtle Decorative Circle */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="max-w-[1280px] mx-auto relative z-10 text-center">
            <h1 className="text-[2.6rem] sm:text-[3.2rem] lg:text-[4.2rem] font-black text-white tracking-tighter uppercase leading-[0.9] mb-8">
              Contact York <br/>Driving Lesson
            </h1>
            <p className="max-w-[700px] mx-auto text-[1.05rem] sm:text-[1.12rem] md:text-[1.2rem] text-hero-paragraph leading-relaxed font-medium mb-10 text-balance opacity-90">
              Have a question about driving lessons in York? Whether you’re just starting out, looking for intensive lessons, or checking lesson availability in your area, we’re here to help.
            </p>

            {/* Compact Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mt-12">
              {/* Google */}
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                <GoogleLogo />
                <div className="flex flex-col gap-0.5 items-start">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={`hero-contact-google-star-${i + 1}`} className="w-2.5 h-2.5 fill-gold-star text-gold-star" />
                    ))}
                  </div>
                  <span className="text-[0.65rem] font-black text-white/40 uppercase tracking-widest leading-none">5★ Google</span>
                </div>
              </div>

              {/* Trustpilot */}
              <a 
                href="https://uk.trustpilot.com/review/yorkdrivinglesson.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 hover:bg-white/10 transition-all text-left no-underline cursor-pointer"
              >
                <div className="bg-[#00b67a] p-1.5 rounded-md flex-shrink-0">
                  <TrustpilotLogo />
                </div>
                <div className="flex flex-col gap-0.5 items-start">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={`hero-contact-trustpilot-star-${i + 1}`} className="w-2.5 h-2.5 fill-[#00b67a] text-[#00b67a]" />
                    ))}
                  </div>
                  <span className="text-[0.65rem] font-black text-white/40 uppercase tracking-widest leading-none">5★ Trustpilot</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Cards Section */}
        <section className="py-12 lg:py-16 px-6 sm:px-10 bg-soft-bg">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
              {contactMethods.map((method, index) => (
                <div 
                  key={`contact-method-${index}`}
                  className="bg-white p-8 lg:p-10 rounded-[32px] border border-border-main/10 shadow-[0_8px_40px_rgba(0,0,0,0.03)] flex flex-col items-center text-center group hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 h-full"
                >
                  <div className="w-16 h-16 bg-soft-bg rounded-2xl flex items-center justify-center mb-8 border border-border-main/10 group-hover:bg-primary-dark/[0.03] transition-colors relative">
                    {method.icon}
                  </div>
                  
                  <h2 className="text-[1.35rem] font-black text-primary-text mb-4 uppercase tracking-tight">{method.title}</h2>
                  <p className="text-[0.92rem] text-secondary-text leading-relaxed font-medium mb-8 opacity-80 flex-grow">
                    {method.desc}
                  </p>
                  
                  <a 
                    href={method.href}
                    target={method.title === "WhatsApp" ? "_blank" : undefined}
                    rel={method.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                    className="w-full inline-block bg-primary-dark text-white font-black text-[0.8rem] uppercase tracking-widest py-4 rounded-xl no-underline transition-all duration-300 hover:bg-secondary-dark shadow-sm hover:shadow-lg"
                  >
                    {method.buttonText}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Section */}
        <section className="py-16 lg:py-20 px-6 sm:px-10 bg-white border-t border-border-main/5">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-16 lg:mb-20">
              <span className="text-[0.7rem] font-black text-primary-dark/30 tracking-[0.25em] uppercase mb-4 block">York Coverage</span>
              <h2 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] font-black text-primary-text tracking-tighter uppercase leading-[1.1] mb-6">
                Driving lessons <br className="hidden sm:block" />across York
              </h2>
              <div className="w-12 h-1.5 bg-primary-dark mb-8 mx-auto"></div>
              <p className="text-[1rem] md:text-[1.1rem] text-secondary-text leading-relaxed font-medium opacity-80 max-w-[600px] mx-auto text-balance">
                We cover driving lessons across York, including local residential roads, roundabouts, junctions, and nearby test-route areas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Column 1: Popular lesson pages */}
              <div className="text-center sm:text-left">
                <div className="text-[0.82rem] font-black text-primary-text tracking-widest uppercase mb-8 pb-4 border-b border-border-main/10 inline-block w-full">
                  Popular lesson pages
                </div>
                <div className="flex flex-col gap-4">
                  {lessonLinks.map((link, idx) => (
                    <a 
                      key={`contact-lesson-${idx}`}
                      href={link.href}
                      className="text-[0.92rem] font-bold text-secondary-text hover:text-primary-dark no-underline transition-all flex items-center justify-center sm:justify-start gap-2 group/link"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-primary-dark/20 group-hover/link:text-primary-dark transition-colors" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Column 2: York areas */}
              <div className="text-center sm:text-left">
                <div className="text-[0.82rem] font-black text-primary-text tracking-widest uppercase mb-8 pb-4 border-b border-border-main/10 inline-block w-full">
                  York areas
                </div>
                <div className="flex flex-col gap-4">
                  {[
                    { label: "Acomb", href: "/driving-lessons-acomb-york" },
                    { label: "Clifton", href: "/driving-lessons-clifton-york" },
                    { label: "Fulford", href: "/driving-lessons-fulford-york" },
                    { label: "Heworth", href: "/driving-lessons-heworth-york" },
                    { label: "Haxby", href: "/driving-lessons-haxby-york" },
                    { label: "View All York Areas", href: "/york", highlight: true }
                  ].map((link: any, idx) => (
                    <a 
                      key={`contact-area-${idx}`}
                      href={link.href}
                      className={`text-[0.92rem] font-bold no-underline transition-all flex items-center justify-center sm:justify-start gap-2 ${
                        link.highlight 
                          ? 'text-primary-dark' 
                          : 'text-secondary-text hover:text-primary-dark'
                      }`}
                    >
                      <ChevronRight className={`w-3.5 h-3.5 transition-colors ${link.highlight ? 'text-primary-dark' : 'text-primary-dark/20'}`} />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Column 3: York Information */}
              <div className="text-center sm:text-left">
                <div className="text-[0.82rem] font-black text-primary-text tracking-widest uppercase mb-8 pb-4 border-b border-border-main/10 inline-block w-full">
                  York Information
                </div>
                <div className="flex flex-col gap-4">
                  {[
                    { label: "Monks Cross Driving Test Centre", href: "/monks-cross-driving-test-centre" }
                  ].map((link, idx) => (
                    <a 
                      key={`contact-info-${idx}`}
                      href={link.href}
                      className="text-[0.92rem] font-bold text-secondary-text hover:text-primary-dark no-underline transition-all flex items-center justify-center sm:justify-start gap-2 group/link"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-primary-dark/20 group-hover/link:text-primary-dark transition-colors" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
