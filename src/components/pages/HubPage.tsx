import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import EnquiryForm from '../EnquiryForm';
import RelatedLinks from '../RelatedLinks';
import FAQ from '../FAQ';

export interface HubCard { name: string; path: string; blurb?: string; meta?: string }

export interface HubSection { heading: string; paragraphs?: string[]; items?: { title: string; text: string; href?: string }[] }

interface Props {
  path: string;
  kind: 'service' | 'area' | 'article' | 'info';
  heading: string;
  accent: string;
  intro: string;
  cardsTitle: string;
  cards: HubCard[];
  sections?: HubSection[];
  faqs?: { question: string; answer: string }[];
}

/** Category-style hub: heading, intro, a grid of cards, enquiry form and cross-links. */
export default function HubPage({ path, kind, heading, accent, intro, cardsTitle, cards, sections = [], faqs = [] }: Props) {
  return (
    <div className="min-h-screen bg-soft-bg font-sans selection:bg-primary-dark/10 selection:text-primary-dark">
      <Header />
      <main className="pt-28 pb-12 px-6 sm:px-10">
        <div className="max-w-[1200px] mx-auto">
          <section className="text-center mb-10">
            <h1 className="text-[2.2rem] sm:text-[3rem] lg:text-[3.5rem] font-black text-primary-text mb-4 leading-none tracking-tighter uppercase">
              {heading} <span className="text-primary-dark opacity-40 italic font-extrabold">{accent}</span>
            </h1>
            <p className="text-[1rem] sm:text-[1.1rem] text-secondary-text leading-relaxed max-w-[720px] mx-auto font-medium">{intro}</p>
          </section>

          <section aria-label={cardsTitle}>
            <h2 className="text-[1.3rem] md:text-[1.6rem] font-black text-primary-text mb-6 tracking-tighter uppercase leading-none">{cardsTitle}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cards.map((c) => (
                <a key={c.path} href={c.path} className="block bg-white border border-border-main/20 rounded-2xl p-6 no-underline transition-all duration-300 hover:border-primary-dark/30 hover:shadow-md hover:-translate-y-0.5">
                  <div className="text-[1rem] font-black text-primary-text uppercase tracking-tight mb-1">{c.name}</div>
                  {c.meta && <div className="text-[0.7rem] font-black uppercase tracking-widest text-primary-dark/50 mb-2">{c.meta}</div>}
                  {c.blurb && <p className="text-[0.88rem] text-secondary-text font-medium leading-relaxed m-0">{c.blurb}</p>}
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>

      {sections.map((sec) => (
        <section key={sec.heading} className="px-6 sm:px-10 pb-10">
          <div className="max-w-[1000px] mx-auto text-left">
            <h2 className="text-[1.4rem] md:text-[1.8rem] font-black text-primary-text mb-4 tracking-tighter uppercase leading-none">{sec.heading}</h2>
            {sec.paragraphs?.map((p) => (
              <p key={p.slice(0, 30)} className="text-secondary-text text-[0.95rem] leading-relaxed font-medium mb-3 max-w-[860px]">{p}</p>
            ))}
            {sec.items && (
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {sec.items.map((it) => (
                  <div key={it.title} className="bg-white border border-border-main/20 rounded-2xl p-5">
                    <h3 className="text-[0.95rem] font-black uppercase tracking-tight text-primary-text mb-1.5">
                      {it.href ? <a href={it.href} className="no-underline text-inherit hover:underline">{it.title}</a> : it.title}
                    </h3>
                    <p className="text-[0.88rem] text-secondary-text font-medium leading-relaxed m-0">{it.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {faqs.length > 0 && (
        <section className="px-6 sm:px-10 pb-10">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-[1.4rem] md:text-[1.8rem] font-black text-primary-text mb-5 tracking-tighter uppercase leading-none">Common questions</h2>
            <FAQ items={faqs} />
          </div>
        </section>
      )}

      <section className="px-6 sm:px-10 pb-12">
        <div className="max-w-[900px] mx-auto"><EnquiryForm /></div>
      </section>

      <RelatedLinks path={path} kind={kind} />
      <Footer />
    </div>
  );
}
