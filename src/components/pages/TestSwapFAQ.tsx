import FAQ from '../FAQ';

const faqs = [
  {
    question: 'What is TestSwap?',
    answer: 'TestSwap is a free platform that allows learner drivers to swap their DVSA practical driving test slots directly with other learners. If you have a test date that no longer works for you, you can find another learner who wants your slot and take theirs in return.',
  },
  {
    question: 'Why would I need to swap my driving test slot?',
    answer: 'Driving test waiting times in York can be several months. If you\'ve booked a slot but your circumstances change — or you find you\'re ready earlier than expected — swapping with another learner lets you get a more suitable date without going back to the bottom of the DVSA waiting list.',
  },
  {
    question: 'Is swapping driving test slots allowed by the DVSA?',
    answer: 'Yes. The DVSA introduced new rules specifically to support **learner-to-learner** test slot swapping. This is different from the banned practice of "slot scalping," where third-party companies bulk-buy slots and resell them at inflated prices. TestSwap operates within the DVSA\'s approved framework for direct learner swaps.',
  },
  {
    question: 'What are the new DVSA rules on test slot swapping?',
    answer: 'The DVSA updated its rules to crack down on commercial slot scalping while allowing genuine learner-to-learner swaps. The key point is that slots must be swapped directly between individual learners — no money should change hands for the slot itself, and no third party should profit from the transaction.',
  },
  {
    question: 'How does a test slot swap actually work?',
    answer: 'You list your current test slot on TestSwap and browse slots listed by other learners. When you find a slot you want and the other learner wants yours, both of you update your bookings directly on the DVSA website. The swap happens through the official DVSA booking system — TestSwap just helps you find a suitable match.',
  },
  {
    question: 'Is TestSwap free to use?',
    answer: 'Yes, TestSwap is free. There is no charge for listing or swapping your slot. This is one of the key differences between TestSwap and the old slot-scalping services that charged learners inflated prices for earlier test dates.',
  },
  {
    question: 'Can I find an earlier driving test date in York through TestSwap?',
    answer: 'Potentially yes. If another learner in York has an earlier slot they no longer need and wants yours, a swap can give you a test date much sooner than waiting for DVSA cancellations. The availability depends on what other learners in your area have listed.',
  },
  {
    question: 'Do both learners have to agree to the swap?',
    answer: 'Yes. A swap only goes ahead when both learners are happy with the exchange. Neither party is forced into anything — you browse available slots and only proceed when you find a mutual match that works for both of you.',
  },
  {
    question: 'Will swapping my test slot affect my DVSA booking?',
    answer: 'The actual slot change is made through your own DVSA account. You and the other learner each rebook your slots simultaneously through the official DVSA system. TestSwap coordinates the match but the final booking is always done officially through the DVSA.',
  },
  {
    question: 'What if I can\'t find a swap straight away?',
    answer: 'You can leave your slot listed on TestSwap and wait for a match to come up. More learners join the platform regularly, so a suitable swap may become available as your test date approaches. In the meantime, it\'s worth also checking the DVSA website directly for cancellation slots.',
  },
  {
    question: 'Can I swap to a different test centre through TestSwap?',
    answer: 'This depends on what slots are available and what both learners agree to. Swapping to Monks Cross Driving Test Centre specifically would require finding another learner who has a Monks Cross slot and wants yours. The swap must be mutually agreed and both learners must rebook through the DVSA system.',
  },
  {
    question: 'Is there a risk involved in swapping my test slot?',
    answer: 'The main risk is timing — both learners need to update their DVSA bookings at the same time to avoid one of you losing your slot. TestSwap guides you through this process to minimise the risk, but it\'s important to follow the steps carefully when completing the swap.',
  },
  {
    question: 'Should I tell my driving instructor if I swap my test date?',
    answer: 'Absolutely — tell your instructor as soon as possible. If you swap to an earlier date, your instructor needs to know so they can plan your remaining lessons and make sure you\'re fully prepared. Swapping to an earlier slot you\'re not ready for could result in an unnecessary fail.',
  },
  {
    question: 'How do I get started with TestSwap?',
    answer: 'Head to [TestSwap](https://www.testswap.com) to create an account and list your current test slot. You can then browse other learners\' available slots and request a swap when you find a match. Make sure you have your DVSA booking reference to hand when you sign up.',
  },
];

export default function TestSwapFAQ() {
  return (
    <section className="bg-white pt-8 lg:pt-12 pb-4 px-6 sm:px-10 border-t border-border-main/10" id="faq">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-[2rem] md:text-[2.4rem] font-black text-primary-text mb-2 tracking-tighter uppercase leading-none">
            Your <span className="italic font-extrabold text-primary-text/30">questions.</span>
          </h2>
          <p className="text-secondary-text text-[0.95rem] font-bold opacity-60">
            Everything you need to know about swapping your driving test slot in York.
          </p>
        </div>
        <FAQ items={faqs} />
      </div>
    </section>
  );
}
