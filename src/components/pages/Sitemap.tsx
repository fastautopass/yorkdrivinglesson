import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default function Sitemap() {
  const sections = [
    {
      title: "CORE PAGES",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us" },
        { label: "Contact Us", href: "/contact-us" }
      ]
    },
    {
      title: "LEARN TO DRIVE",
      links: [
        { label: "Automatic Driving Lessons", href: "/automatic-driving-lessons" },
        { label: "Manual Driving Lessons", href: "/manual-driving-lessons" },
        { label: "Intensive Driving Courses", href: "/intensive-driving-courses" },
        { label: "Refresher Lessons", href: "/refresher-lessons" },
        { label: "Motorway Lessons", href: "/motorway-lessons" },
        { label: "Mock Driving Tests", href: "/mock-driving-tests" }
      ]
    },
    {
      title: "SERVICES",
      links: [
        { label: "Pass Plus Course", href: "/pass-plus-course" }
      ]
    },
    {
      title: "AREAS WE COVER",
      links: [
        { label: "York Location Hub", href: "/york" },
        { label: "Acomb Driving Lessons", href: "/driving-lessons-acomb-york" },
        { label: "Holgate Driving Lessons", href: "/driving-lessons-holgate-york" },
        { label: "Foxwood Driving Lessons", href: "/driving-lessons-foxwood-york" },
        { label: "Dringhouses Driving Lessons", href: "/driving-lessons-dringhouses-york" },
        { label: "Woodthorpe Driving Lessons", href: "/driving-lessons-woodthorpe-york" },
        { label: "Clifton Driving Lessons", href: "/driving-lessons-clifton-york" },
        { label: "Rawcliffe Driving Lessons", href: "/driving-lessons-rawcliffe-york" },
        { label: "Bootham Driving Lessons", href: "/driving-lessons-bootham-york" },
        { label: "Haxby Driving Lessons", href: "/driving-lessons-haxby-york" },
        { label: "Wigginton Driving Lessons", href: "/driving-lessons-wigginton-york" },
        { label: "Huntington Driving Lessons", href: "/driving-lessons-huntington-york" },
        { label: "Heworth Driving Lessons", href: "/driving-lessons-heworth-york" },
        { label: "Tang Hall Driving Lessons", href: "/driving-lessons-tang-hall-york" },
        { label: "Osbaldwick Driving Lessons", href: "/driving-lessons-osbaldwick-york" },
        { label: "Murton Driving Lessons", href: "/driving-lessons-murton-york" },
        { label: "Layerthorpe Driving Lessons", href: "/driving-lessons-layerthorpe-york" },
        { label: "Fulford Driving Lessons", href: "/driving-lessons-fulford-york" },
        { label: "Bishopthorpe Driving Lessons", href: "/driving-lessons-bishopthorpe-york" },
        { label: "Copmanthorpe Driving Lessons", href: "/driving-lessons-copmanthorpe-york" },
        { label: "Heslington Driving Lessons", href: "/driving-lessons-heslington-york" },
        { label: "Badger Hill Driving Lessons", href: "/driving-lessons-badger-hill-york" },
        { label: "York City Centre Driving Lessons", href: "/driving-lessons-york-city-centre" },
        { label: "Poppleton Driving Lessons", href: "/driving-lessons-poppleton-york" }
      ]
    },
    {
      title: "LEGAL",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Conditions", href: "/terms-and-conditions" },
        { label: "Cookie Policy", href: "/cookie-policy" }
      ]
    },
    {
      title: "ARTICLES",
      links: [
        { label: "How to Pass Your Driving Test First Time in York", href: "/articles/pass-driving-test-first-time-york" },
        { label: "Automatic vs Manual Driving Lessons: Which Should You Choose?", href: "/articles/automatic-vs-manual-driving-lessons-york" },
        { label: "York Driving Test Routes & Common Mistakes", href: "/articles/york-driving-test-routes-common-mistakes" },
        { label: "What Happens On The York Driving Test?", href: "/articles/what-happens-on-the-york-driving-test" },
        { label: "Driving Test Nerves: How to Stay Calm on Test Day", href: "/articles/driving-test-nerves-how-to-stay-calm" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary-dark/10 selection:text-primary-dark">
      <Header />

      <main className="pt-22 pb-20 px-6 sm:px-10">
        {/* Page Title */}
        <section className="max-w-[1280px] mx-auto mb-10 lg:mb-12">
          <h1 className="text-[2.6rem] sm:text-[3.2rem] lg:text-[4rem] font-black text-[#1F2937] tracking-tighter uppercase leading-none">
            Sitemap
          </h1>
        </section>

        {/* Links Grid */}
        <section className="max-w-[1280px] mx-auto border-t border-border-main/40 pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {sections.map((section, sectionIdx) => (
              <div key={`sitemap-section-${sectionIdx}`} className="flex flex-col">
                <h2 className="text-[0.95rem] font-bold text-[#1F2937] tracking-[0.15em] uppercase mb-8 leading-tight">
                  {section.title}
                </h2>
                <ul className="space-y-4 list-none p-0">
                  {section.links.map((link, linkIdx) => (
                    <li key={`sitemap-link-${sectionIdx}-${linkIdx}`}>
                      <a 
                        href={link.href} 
                        className="text-[0.95rem] text-[#4B5563] hover:text-[#1F2937] transition-all duration-300 relative group/link inline-block pb-0.5 no-underline font-medium"
                      >
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#1F2937] transition-all duration-300 group-hover/link:w-full"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Subtle Decorative Element */}
        <div className="max-w-[1280px] mx-auto mt-24 border-t border-border-main/20 pt-8 flex justify-start opacity-10">
          <div className="text-[1.2rem] font-black text-[#1F2937] tracking-tight uppercase">York Driving Lesson</div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

