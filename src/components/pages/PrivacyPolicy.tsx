import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-light-bg font-sans selection:bg-primary-dark/10 selection:text-primary-dark">
      <Header />

      <main className="pt-14">
        {/* Hero Section */}
        <section className="bg-primary-dark pt-12 pb-12 md:pb-16 lg:pb-20 px-6 sm:px-10 overflow-hidden relative text-center">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col items-center">
            <p className="text-[2.6rem] sm:text-[3.2rem] lg:text-[3.8rem] font-black text-white tracking-tighter uppercase leading-[0.9] mb-6">
              Privacy Policy
            </p>
            <p className="max-w-[800px] text-[1rem] sm:text-[1.1rem] text-hero-paragraph leading-relaxed font-medium opacity-90 mx-auto">
              We respect your privacy and are committed to protecting your personal information in line with UK GDPR regulations.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-10 lg:py-14 px-6 sm:px-10">
          <div className="max-w-[1150px] mx-auto bg-white p-8 md:p-12 lg:p-16 rounded-[40px] border border-border-main/10 shadow-[0_8px_40px_rgba(0,0,0,0.02)]">
            <div className="prose prose-slate max-w-none text-left">
              <h1 className="text-[2.2rem] font-black text-primary-text uppercase tracking-tight mb-10 border-b border-border-main/10 pb-6">Privacy Policy</h1>
              
              <div className="space-y-10">
                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">1. Introduction</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>York Driving Lesson is committed to safeguarding the personal information you share with us. This Privacy Policy explains how we collect, use, store and protect your personal information when you visit our website, contact us, or use our driving lesson services.</p>
                    <p>York Driving Lesson is the data controller responsible for your personal information.</p>
                    <p>We follow the requirements of the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">2. What Personal Data We Collect</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>We may collect the following personal information from you:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Your full name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Home address or pickup location, if required for lessons</li>
                      <li>Postcode or local area</li>
                      <li>Driving licence details, if needed for lessons, test preparation, or related driving services</li>
                      <li>Messages, emails, enquiry details, and any attachments you send to us</li>
                      <li>Payment confirmations or basic payment records, where applicable</li>
                      <li>Website activity information, such as IP address, browser type, device information, and basic cookie data</li>
                    </ul>
                    <p>We only collect information that is reasonably needed to respond to enquiries, arrange lessons, provide services, manage communication, and run our website.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">3. How We Use Your Information</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>We use your personal information to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Respond to enquiries</li>
                      <li>Arrange driving lessons or lesson-related services</li>
                      <li>Contact you about lesson times, availability, or schedule changes</li>
                      <li>Understand what type of driving support you are looking for</li>
                      <li>Manage payments, receipts, and basic business records</li>
                      <li>Help instructors arrange pickup points and lesson planning</li>
                      <li>Respond to messages, emails, or complaints</li>
                      <li>Meet legal, tax, insurance, or record-keeping requirements</li>
                      <li>Improve how we run our services and website</li>
                    </ul>
                    <p>We do not sell your personal data.</p>
                    <p>We do not use your personal data for unsolicited marketing.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">4. Legal Basis for Processing Your Data</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>We collect and use your personal information under one or more of the following legal bases:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>To fulfil a contract or take steps before entering into a contract, such as arranging driving lessons</li>
                      <li>To comply with legal obligations, such as tax, accounting, or record-keeping requirements</li>
                      <li>For legitimate business interests, such as managing enquiries, scheduling lessons, preventing fraud, and improving services</li>
                      <li>With your consent, where consent is required, such as optional communications</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">5. Who We Share Your Data With</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>We do not sell your personal information to third parties.</p>
                    <p>We may share necessary information with:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Driving instructors, where needed to arrange or provide lessons</li>
                      <li>Payment or banking providers, where needed to manage payments</li>
                      <li>Accountants, legal advisers, insurers, or tax authorities, where required for business or legal purposes</li>
                      <li>DVSA or related driving test services, only where necessary for test-related purposes</li>
                      <li>Website, hosting, analytics, or IT providers who help us operate our website and systems</li>
                      <li>Legal or regulatory authorities, if required by law</li>
                    </ul>
                    <p>Any third parties we work with must handle personal information in line with UK data protection standards.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">6. Data Storage and Security</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>We take reasonable steps to keep your personal information safe.</p>
                    <p>Your information may be stored in password-protected systems, email accounts, website enquiry systems, business records, or secure devices used for managing lessons and enquiries.</p>
                    <p>Access to personal information is limited to people who need it for legitimate business purposes.</p>
                    <p>While we take reasonable steps to protect your information, no online system can ever be guaranteed 100% secure.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">7. How Long We Keep Your Data</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>We only keep your personal information for as long as necessary to fulfil the purposes outlined in this Privacy Policy.</p>
                    <p>For example, we may keep your details while:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Responding to your enquiry</li>
                      <li>Arranging or providing lessons</li>
                      <li>Managing payments or receipts</li>
                      <li>Handling complaints or disputes</li>
                      <li>Meeting legal, tax, insurance, or accounting requirements</li>
                    </ul>
                    <p>In most cases, basic business records such as payment or lesson records may be kept for up to 6 years where needed for tax, accounting, or audit purposes.</p>
                    <p>When information is no longer needed, we will delete it securely or anonymise it where appropriate.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">8. Children’s Privacy</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>Our driving lesson services are mainly intended for learners aged 17 and over.</p>
                    <p>If a parent or guardian contacts us on behalf of a learner under 18, we only collect the information needed to respond, arrange communication, or manage lesson-related enquiries.</p>
                    <p>We do not knowingly collect personal information from anyone under 13.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">9. Payments and Security</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>We currently accept payments primarily via bank transfer.</p>
                    <p>We do not collect, store, or process debit or credit card details through our website.</p>
                    <p>If payment arrangements change in the future, this Privacy Policy may be updated to explain how payment information is handled.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">10. Cookies and Website Tracking</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>Our website may use cookies and basic tracking tools to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Help the website work properly</li>
                      <li>Improve website performance</li>
                      <li>Understand how visitors use the website</li>
                      <li>Measure which pages are useful</li>
                      <li>Improve the user experience</li>
                    </ul>
                    <p>This may include tools such as Google Analytics or similar analytics services.</p>
                    <p>You can disable cookies through your browser settings if you prefer.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">11. Your Rights</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>Under UK GDPR, you have rights over your personal information.</p>
                    <p>You may have the right to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Ask for a copy of the personal data we hold about you</li>
                      <li>Ask us to correct inaccurate or outdated information</li>
                      <li>Ask us to delete your data, where legally possible</li>
                      <li>Withdraw your consent, where we rely on consent</li>
                      <li>Object to or restrict how we use your data</li>
                      <li>Ask for your data to be transferred, where applicable</li>
                      <li>Complain to the Information Commissioner’s Office</li>
                    </ul>
                    <p>You can learn more about your rights through the Information Commissioner’s Office at ico.org.uk.</p>
                    <p>To make a request, contact us using the details at the bottom of this page.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">12. Marketing and Contact Preferences</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>We may contact you about:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Enquiries you have made</li>
                      <li>Lesson availability</li>
                      <li>Lesson arrangements</li>
                      <li>Schedule changes</li>
                      <li>Important service updates</li>
                    </ul>
                    <p>We will only send promotional offers or marketing updates if you have agreed to receive them.</p>
                    <p>You can ask us to stop sending optional communications at any time by contacting us directly.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">13. Third-Party Links</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>Our website may include links to third-party websites, such as driving test resources, DVSA pages, maps, review platforms, or other useful learner resources.</p>
                    <p>We are not responsible for how third-party websites collect, use, or protect your personal information.</p>
                    <p>You should check the privacy policies of any external websites you visit.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">14. Changes to This Policy</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>We may update this Privacy Policy from time to time.</p>
                    <p>Any updates will be published on this page.</p>
                    <p>We recommend checking this page occasionally to stay informed about how we handle personal information.</p>
                    <p>If you continue using our website or services after changes are made, the updated policy will apply.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.3rem] font-black text-primary-text uppercase tracking-tight mb-4">15. Contact Us</h2>
                  <div className="space-y-6 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:</p>
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
                        <a href="/" className="text-primary-text hover:text-primary-dark transition-colors no-underline font-bold">yorkdrivinglesson.co.uk</a>
                      </div>
                    </div>
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
