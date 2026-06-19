import FAQ from '../FAQ';

const faqs = [
  {
    question: 'Do I need separate insurance to practise in a family member\'s car?',
    answer: 'Yes. A car owner\'s standard policy does not cover a learner driver. You must have your own learner insurance policy in place before driving someone else\'s car. GoShorty provides short-term cover from as little as one hour, so you can get insured quickly and legally.',
  },
  {
    question: 'Will learner insurance affect the car owner\'s no-claims bonus?',
    answer: 'No. That\'s one of the biggest advantages of short-term learner insurance. Because it is a separate policy in your name, any claim you make will not touch the car owner\'s no-claims bonus or their existing policy.',
  },
  {
    question: 'How quickly can I get covered with GoShorty?',
    answer: 'Cover can be arranged online in minutes. You can buy a policy on your phone or laptop and be insured almost immediately — ideal if you want to get out for a practice session today.',
  },
  {
    question: 'How long can I get learner insurance for?',
    answer: 'GoShorty offers flexible cover from **1 hour** up to **24 weeks**. You can choose exactly how much cover you need — whether it\'s a single afternoon session or a longer period leading up to your test at Monks Cross.',
  },
  {
    question: 'Am I eligible for GoShorty learner insurance?',
    answer: 'GoShorty typically covers learner drivers aged 17 to 40 with a valid provisional licence. The car you\'re insuring to drive must be insured for the owner and be in a roadworthy condition. Full eligibility details are shown during the quote process.',
  },
  {
    question: 'What is test day car hire and do I need it?',
    answer: 'If you don\'t have access to a car for your practical test at Monks Cross, TestDay provides a fully insured, dual-controlled hire car specifically for test day. This is ideal if your instructor is unavailable, you\'re returning to York from elsewhere, or you simply need a reliable vehicle you can feel comfortable in.',
  },
  {
    question: 'Does the TestDay hire include a warm-up lesson before my test?',
    answer: 'Yes. TestDay bookings typically include time in the car before your test begins so you can get familiar with the vehicle\'s controls, mirrors, and feel before the examiner gets in. This is especially helpful if you\'ve been learning in a different car.',
  },
  {
    question: 'Can I book a TestDay car at short notice for Monks Cross?',
    answer: 'TestDay handles emergency and last-minute bookings where possible. If you have a test slot coming up soon, get a [TestDay Quote](https://quote.testday.co.uk) as early as possible to check availability for your date and time at Monks Cross Driving Test Centre.',
  },
  {
    question: 'Will the hire car be dual-controlled?',
    answer: 'Yes. All TestDay hire cars are dual-controlled, meaning there are instructor pedals on the passenger side. This is a DVSA requirement for practical tests — the examiner will not permit a test in a car that isn\'t dual-controlled unless it\'s an automatic test in a single-controlled vehicle.',
  },
  {
    question: 'Is practising in a family car worth it before my test?',
    answer: 'Absolutely. Research consistently shows that learners who get more hours of practice outside of paid lessons pass sooner. Practising everyday journeys, parking, and local York roads in a family car builds confidence and reduces the number of paid lessons you need overall.',
  },
  {
    question: 'Can I use learner insurance if I\'ve already got a full driving licence?',
    answer: 'No — GoShorty\'s learner insurance is specifically for provisional licence holders. If you hold a full licence and want short-term cover on another vehicle, you\'d need a different type of short-term insurance product.',
  },
  {
    question: 'Are these affiliate services connected to York Driving Lesson?',
    answer: 'GoShorty and TestDay are independent third-party services. We partner with them because we believe they offer genuine value to learners in York. We may earn a small commission if you purchase through our links, but this does not affect the price you pay.',
  },
  {
    question: 'What roads should I practise on in York before my test?',
    answer: 'Focus on the roads most commonly used in Monks Cross test routes — **Hull Road (A1079)**, the **A64 ring road**, the **Hopgrove roundabout**, and residential areas like **Heworth**, **Tang Hall**, and **Osbaldwick**. Getting comfortable on these roads in a family car alongside your lessons will give you the best chance of a first-time pass.',
  },
  {
    question: 'How do I get a quote for learner insurance or test day car hire?',
    answer: 'Click the **Get a Learner Insurance Quote** button above to go straight to GoShorty, or get a [TestDay Quote](https://quote.testday.co.uk) for test day car hire. Both are quick online processes and you\'ll get a price within minutes.',
  },
];

export default function LearnerInsuranceFAQ() {
  return (
    <section className="bg-white pt-8 lg:pt-12 pb-4 px-6 sm:px-10 border-t border-border-main/10" id="faq">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-[2rem] md:text-[2.4rem] font-black text-primary-text mb-2 tracking-tighter uppercase leading-none">
            Your <span className="italic font-extrabold text-primary-text/30">questions.</span>
          </h2>
          <p className="text-secondary-text text-[0.95rem] font-bold opacity-60">
            Everything you need to know about learner insurance and test day car hire in York.
          </p>
        </div>
        <FAQ items={faqs} />
      </div>
    </section>
  );
}
