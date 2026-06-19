import React from 'react';

const ALL_ARTICLES = [
  {
    slug: 'pass-driving-test-first-time-york',
    title: 'Pass Your Test First Time',
    href: '/articles/pass-driving-test-first-time-york',
    desc: 'What to expect and how to prepare for the Monks Cross test.',
  },
  {
    slug: 'automatic-vs-manual-driving-lessons-york',
    title: 'Automatic vs Manual Lessons',
    href: '/articles/automatic-vs-manual-driving-lessons-york',
    desc: 'Which type of lesson is right for you in York?',
  },
  {
    slug: 'york-driving-test-routes-common-mistakes',
    title: 'York Test Routes & Mistakes',
    href: '/articles/york-driving-test-routes-common-mistakes',
    desc: 'Common faults and how to avoid them on real York routes.',
  },
  {
    slug: 'driving-test-nerves-how-to-stay-calm',
    title: 'Driving Test Nerves',
    href: '/articles/driving-test-nerves-how-to-stay-calm',
    desc: 'Practical ways to stay calm and focused on test day.',
  },
  {
    slug: 'what-happens-on-the-york-driving-test',
    title: 'What Happens on the Test?',
    href: '/articles/what-happens-on-the-york-driving-test',
    desc: 'A full walkthrough of the York driving test from start to finish.',
  },
];

interface Props {
  currentSlug: string;
  bgClassName?: string;
}

export default function RelatedArticles({ currentSlug, bgClassName = 'bg-soft-bg' }: Props) {
  const articles = ALL_ARTICLES.filter((a) => a.slug !== currentSlug);
  // Cards must contrast with section background
  const cardBg = bgClassName === 'bg-white' ? 'bg-soft-bg' : 'bg-white';

  return (
    <section className={`${bgClassName} py-16 lg:py-20 px-6 sm:px-10 border-t border-border-main/10`}>
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-10">
          <span className="text-[0.7rem] font-black text-primary-dark/30 tracking-[0.25em] uppercase mb-3 block">Keep Reading</span>
          <h2 className="text-[1.8rem] sm:text-[2.4rem] font-black text-primary-text tracking-tighter uppercase leading-[1.1]">
            More York Driving Guides
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {articles.map((article, i) => (
            <a
              key={`related-${i}`}
              href={article.href}
              className={`${cardBg} rounded-2xl p-5 border border-border-main/10 no-underline hover:border-primary-dark/20 hover:shadow-md transition-all group`}
            >
              <h3 className="text-[0.9rem] font-black text-primary-text uppercase tracking-tight mb-2 group-hover:text-primary-dark leading-tight">
                {article.title}
              </h3>
              <p className="text-[0.8rem] text-secondary-text font-medium leading-relaxed">{article.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
