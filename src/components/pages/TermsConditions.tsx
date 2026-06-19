import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-light-bg font-sans selection:bg-primary-dark/10 selection:text-primary-dark">
      <Header />

      <main className="pt-14">
        {/* Hero Section */}
        <section className="bg-primary-dark pt-12 pb-12 md:pb-16 lg:pb-20 px-6 sm:px-10 overflow-hidden relative text-center">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col items-center">
            <h1 className="text-[2.6rem] sm:text-[3.2rem] lg:text-[3.8rem] font-black text-white tracking-tighter uppercase leading-[0.9] mb-6">
              Terms & Conditions
            </h1>
            <p className="max-w-[800px] text-[1rem] sm:text-[1.1rem] text-hero-paragraph leading-relaxed font-medium opacity-90 mx-auto">
              Please read these Terms & Conditions carefully before booking or using any driving lesson services with York Driving Lesson.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-10 lg:py-14 px-6 sm:px-10">
          <div className="max-w-[1150px] mx-auto bg-white p-8 md:p-12 lg:p-16 rounded-[40px] border border-border-main/10 shadow-[0_8px_40px_rgba(0,0,0,0.02)]">
            <div className="prose prose-slate max-w-none text-left">
              <h1 className="text-[2.2rem] font-black text-primary-text uppercase tracking-tight mb-10 border-b border-border-main/10 pb-6">Terms & Conditions</h1>
              
              <div className="space-y-10">
                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">1. Introduction</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>By booking, purchasing, or using any services provided by York Driving Lesson, you agree to be legally bound by these Terms & Conditions.</p>
                    <p>These Terms apply to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Automatic Driving Lessons</li>
                      <li>Manual Driving Lessons</li>
                      <li>Intensive Driving Courses</li>
                      <li>Pass Plus Courses</li>
                      <li>Motorway Lessons</li>
                      <li>Mock Driving Tests</li>
                      <li>Refresher Lessons</li>
                    </ul>
                    <p>provided by York Driving Lesson.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">2. Eligibility and Legal Capacity</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>To book driving lessons with York Driving Lesson, pupils must:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>be at least 17 years old</li>
                      <li>hold a valid UK provisional or full driving licence</li>
                      <li>provide accurate and up-to-date information</li>
                    </ul>
                    <p>Pupils are responsible for ensuring they are legally allowed to drive and attend lessons.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">3. Services Offered</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>Services may vary depending on:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>instructor availability</li>
                      <li>vehicle availability</li>
                      <li>lesson location</li>
                      <li>regional coverage</li>
                    </ul>
                    <p>York Driving Lesson reserves the right to adjust lesson scheduling or instructor allocation where necessary.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">4. Payment Terms</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>All lessons and courses must be paid for in advance unless agreed otherwise.</li>
                      <li>Payments are non-refundable unless cancellation conditions are met.</li>
                      <li>Lesson packages must be used within 6 months of purchase unless agreed otherwise.</li>
                      <li>Prices may change at any time without prior notice.</li>
                      <li>Outstanding balances may result in lesson suspension or cancellation.</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">5. Cancellation & Refund Policy</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>Pupils must provide at least 48 hours’ notice to cancel or rearrange lessons.</p>
                    <p>Failure to provide sufficient notice may result in:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>loss of lesson time</li>
                      <li>deduction from lesson packages</li>
                      <li>loss of payment</li>
                    </ul>
                    <p>Once any lesson within a package has been used, the package is considered started and may become non-refundable.</p>
                    <p>Refund requests:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>must be submitted within 7 days of original purchase where no lessons have taken place</li>
                      <li>may be refused if lessons have already started</li>
                      <li>will only be issued back to the original payment method where approved</li>
                    </ul>
                    <p>York Driving Lesson reserves the right to cancel or rearrange lessons due to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>instructor illness</li>
                      <li>vehicle issues</li>
                      <li>unsafe weather</li>
                      <li>emergencies</li>
                      <li>unforeseen circumstances</li>
                    </ul>
                    <p>Where possible, replacement lesson times will be offered.</p>
                    <p>York Driving Lesson is not responsible for indirect financial loss caused by lesson cancellations outside our control.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">6. Instructor Allocation & Driving Test Bookings</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Instructor availability may change at any time.</li>
                      <li>Pupils may be reassigned to another instructor where necessary.</li>
                      <li>York Driving Lesson does not guarantee driving test dates.</li>
                      <li>Pupils remain responsible for booking theory and practical driving tests unless otherwise agreed.</li>
                      <li>We are not responsible for DVSA delays, cancellations, or test availability issues.</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">7. Conduct and Responsibilities</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>Pupils must:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>behave respectfully</li>
                      <li>follow safety instructions</li>
                      <li>arrive fit and legally able to drive</li>
                    </ul>
                    <p>Aggressive, abusive, threatening, dangerous, or inappropriate behaviour may result in immediate lesson termination without refund.</p>
                    <p>Pupils must not attend lessons:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>under the influence of alcohol or drugs</li>
                      <li>while medically unfit to drive</li>
                      <li>while using medication that impairs driving ability</li>
                    </ul>
                    <p>Valid eyesight and legal driving requirements remain the pupil’s responsibility.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">8. Intensive Courses, Refresher Lessons & Test Access</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>Each course includes a fixed amount of lesson time.</p>
                    <p>York Driving Lesson is not required to provide additional hours beyond the purchased package.</p>
                    <p>Use of the instructor vehicle for a practical test is entirely subject to instructor approval.</p>
                    <p>If a pupil is considered unsafe or not test-ready:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>use of the vehicle may be refused</li>
                      <li>no refund will be provided for refused test use</li>
                    </ul>
                    <p>Instructor decisions regarding safety and test readiness are final.</p>
                    <p>Driving test waiting times are controlled by the DVSA and may vary significantly depending on location and availability.</p>
                    <p>York Driving Lesson cannot guarantee:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>fast-track test dates</li>
                      <li>cancellation availability</li>
                      <li>short waiting times</li>
                      <li>preferred test centres</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">9. Pass Plus and Additional Courses</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>Pass Plus, motorway lessons, refresher lessons, and additional driving support sessions are intended to improve driving confidence and road awareness.</p>
                    <p>Completion of additional courses does not guarantee:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>insurance discounts</li>
                      <li>lower premiums</li>
                      <li>licence upgrades</li>
                      <li>driving test success</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">10. Late Arrival Policy</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>If a pupil arrives late for a scheduled lesson, the lesson may still finish at the originally agreed end time.</p>
                    <p>Additional lesson time is not guaranteed and refunds will not be provided for lesson time lost due to lateness.</p>
                    <p>If an instructor is delayed, reasonable efforts will be made to provide the remaining lesson time where possible.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">11. Medical Fitness to Drive</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>Pupils are responsible for ensuring they are medically fit and legally permitted to drive.</p>
                    <p>Any medical conditions, eyesight issues, prescribed medication, or changes affecting driving ability must be disclosed before lessons begin.</p>
                    <p>York Driving Lesson reserves the right to refuse lessons where safety concerns arise.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">12. Personal Belongings</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>York Driving Lesson accepts no responsibility for personal belongings left inside tuition vehicles.</p>
                    <p>Pupils are responsible for checking they have all personal items before leaving the vehicle.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">13. In-Car Cameras and Recording</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>York Driving Lesson vehicles may use dashboard cameras or in-car recording devices for:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>safety</li>
                      <li>insurance purposes</li>
                      <li>incident review</li>
                      <li>instructor protection</li>
                    </ul>
                    <p>Any recordings are handled in line with UK GDPR requirements.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">14. Unsafe Weather Conditions</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>Lessons may be postponed, rearranged, or cancelled where weather or road conditions are considered unsafe.</p>
                    <p>This may include:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>snow</li>
                      <li>ice</li>
                      <li>flooding</li>
                      <li>storms</li>
                      <li>severe fog</li>
                      <li>dangerous road conditions</li>
                    </ul>
                    <p>Safety decisions remain at instructor discretion.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">15. Limitation of Liability</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>To the fullest extent permitted by law:</p>
                    <p>York Driving Lesson is not liable for:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>indirect losses</li>
                      <li>loss of earnings</li>
                      <li>missed tests</li>
                      <li>DVSA delays</li>
                      <li>cancelled tests</li>
                      <li>third-party costs</li>
                      <li>career losses</li>
                      <li>inconvenience caused by events outside our control</li>
                    </ul>
                    <p>Total liability shall not exceed the amount paid for the specific service involved.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">16. Indemnification</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>You agree to indemnify and hold harmless York Driving Lesson, its instructors, staff, and affiliates against:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>claims</li>
                      <li>losses</li>
                      <li>damages</li>
                      <li>legal costs</li>
                      <li>liabilities</li>
                    </ul>
                    <p>resulting from:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>breach of these Terms</li>
                      <li>unsafe conduct</li>
                      <li>unlawful driving behaviour</li>
                      <li>false or misleading information provided by pupils</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">17. Force Majeure</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>York Driving Lesson cannot accept liability for delays or cancellations caused by events beyond reasonable control, including:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>severe weather</li>
                      <li>illness</li>
                      <li>road closures</li>
                      <li>fuel shortages</li>
                      <li>DVSA disruption</li>
                      <li>vehicle breakdowns</li>
                      <li>emergencies</li>
                      <li>national events</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">18. Intellectual Property</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>All branding, website content, logos, images, and materials belonging to York Driving Lesson remain protected intellectual property.</p>
                    <p>No content may be copied, reproduced, distributed, or reused without written permission.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">19. Governing Law and Jurisdiction</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>These Terms & Conditions are governed by the laws of England and Wales.</p>
                    <p>Any disputes shall fall under the exclusive jurisdiction of the courts of England and Wales.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">20. Misuse of Services</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>Fraudulent, abusive, defamatory, threatening, or harmful misuse of York Driving Lesson services may result in:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>service termination</li>
                      <li>refusal of future bookings</li>
                      <li>legal action where appropriate</li>
                    </ul>
                    <p>False or damaging public claims may also be pursued legally where necessary.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">21. Code of Conduct and Termination Policy</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>York Driving Lesson operates a zero-tolerance policy regarding:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>harassment</li>
                      <li>abuse</li>
                      <li>intimidation</li>
                      <li>manipulation</li>
                      <li>unsafe behaviour</li>
                    </ul>
                    <p>Repeated lateness, repeated cancellations, refusal to follow safety guidance, or aggressive behaviour may result in termination of services without refund.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">22. No Guarantee Clause</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>York Driving Lesson does not guarantee:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>driving test passes</li>
                      <li>theory test passes</li>
                      <li>completion within a fixed number of hours</li>
                      <li>guaranteed progress speed</li>
                    </ul>
                    <p>Driving progress depends on:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>pupil ability</li>
                      <li>consistency</li>
                      <li>confidence</li>
                      <li>attendance</li>
                      <li>safety</li>
                      <li>commitment</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">23. Changes to Terms</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>York Driving Lesson may update these Terms & Conditions from time to time.</p>
                    <p>Updated versions will be published on this page.</p>
                    <p>Continued use of services after updates means acceptance of the revised Terms.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">24. Contact Details</h2>
                  <div className="space-y-6 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>If you have any questions regarding these Terms & Conditions, please contact:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-border-main/5">
                      <div className="flex flex-col gap-1">
                        <span className="text-[0.65rem] font-black text-primary-dark/40 tracking-widest uppercase">Email</span>
                        <a href="mailto:support@yorkdrivinglesson.co.uk" className="text-primary-text hover:text-primary-dark transition-colors no-underline font-bold break-all">support@yorkdrivinglesson.co.uk</a>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[0.65rem] font-black text-primary-dark/40 tracking-widest uppercase">Phone</span>
                        <a href="tel:+447763999317" className="text-primary-text hover:text-primary-dark transition-colors no-underline font-bold">07763 999317</a>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[0.65rem] font-black text-primary-dark/40 tracking-widest uppercase">Website</span>
                        <a href="https://yorkdrivinglesson.co.uk" className="text-primary-text hover:text-primary-dark transition-colors no-underline font-bold">yorkdrivinglesson.co.uk</a>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">25. Communication & Response Policy</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>York Driving Lesson aims to respond to enquiries within reasonable business timeframes.</p>
                    <p>We are not responsible for missed communications caused by:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>incorrect contact information</li>
                      <li>technical failures</li>
                      <li>network issues</li>
                      <li>spam filtering</li>
                      <li>circumstances outside our control</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">26. Pupil No-Show Policy</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>Failure to attend scheduled lessons without proper notice may result in:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>lesson loss</li>
                      <li>package deductions</li>
                      <li>cancellation charges</li>
                      <li>termination of services in repeated cases</li>
                    </ul>
                    <p>No refunds or rescheduling will be guaranteed for missed lessons without proper notice.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">27. Data Protection & Privacy Notice</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>York Driving Lesson is committed to protecting personal information.</p>
                    <p>Any data collected through:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>the website</li>
                      <li>contact forms</li>
                      <li>phone calls</li>
                      <li>emails</li>
                      <li>lesson bookings</li>
                    </ul>
                    <p>will be processed in line with UK GDPR requirements.</p>
                    <p>You can read our full <a href="/privacy-policy" className="text-primary-dark hover:underline font-bold">Privacy Policy</a> here.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">28. Vehicle Condition and Insurance Disclaimer</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>York Driving Lesson tuition vehicles are:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>insured for driving instruction</li>
                      <li>regularly maintained</li>
                      <li>safety checked</li>
                      <li>fitted with dual controls where applicable</li>
                    </ul>
                    <p>Intentional damage, reckless misuse, or unauthorised use of vehicles may result in:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>lesson termination</li>
                      <li>financial liability for repairs</li>
                      <li>refusal of future services</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">29. Learning Progress Disclaimer</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>Driving progress varies between pupils.</p>
                    <p>York Driving Lesson does not guarantee that pupils will:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>reach test standard within a fixed number of lessons</li>
                      <li>pass within a specific timeframe</li>
                      <li>progress at the same rate as other learners</li>
                    </ul>
                    <p>Instructor recommendations are based on:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>safety</li>
                      <li>DVSA standards</li>
                      <li>demonstrated driving ability</li>
                      <li>lesson performance</li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
