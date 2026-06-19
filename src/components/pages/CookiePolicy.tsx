import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-light-bg font-sans selection:bg-primary-dark/10 selection:text-primary-dark">
      <Header />

      <main className="pt-14">
        {/* Hero Section */}
        <section className="bg-primary-dark pt-12 pb-12 md:pb-16 lg:pb-20 px-6 sm:px-10 overflow-hidden relative text-center">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col items-center">
            <h1 className="text-[2.6rem] sm:text-[3.2rem] lg:text-[3.8rem] font-black text-white tracking-tighter uppercase leading-[0.9] mb-6">
              Cookies Policy
            </h1>
            <p className="max-w-[800px] text-[1rem] sm:text-[1.1rem] text-hero-paragraph leading-relaxed font-medium opacity-90 mx-auto">
              This Cookies Policy explains how York Driving Lesson uses cookies and similar technologies when you visit our website.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-10 lg:py-14 px-6 sm:px-10">
          <div className="max-w-[1150px] mx-auto bg-white p-8 md:p-12 lg:p-16 rounded-[40px] border border-border-main/10 shadow-[0_8px_40px_rgba(0,0,0,0.02)]">
            <div className="prose prose-slate max-w-none text-left">
              <h1 className="text-[2.2rem] font-black text-primary-text uppercase tracking-tight mb-10 border-b border-border-main/10 pb-6">Cookies Policy</h1>
              
              <div className="space-y-10">
                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">1. Introduction</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>This Cookies Policy explains how York Driving Lesson uses cookies and similar technologies when you visit <a href="https://yorkdrivinglesson.co.uk" className="text-primary-dark hover:underline font-bold">yorkdrivinglesson.co.uk</a>.</p>
                    <p>This policy should be read alongside our <a href="/privacy-policy" className="text-primary-dark hover:underline font-bold">Privacy Policy</a> and <a href="/terms-and-conditions" className="text-primary-dark hover:underline font-bold">Terms & Conditions</a>.</p>
                    <p>By continuing to use our website, you acknowledge that cookies may be used in the ways described in this policy, subject to your browser settings and any cookie preferences you choose.</p>
                    <p>Where legally required, we may ask for your consent before placing non-essential cookies on your device.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">2. What Are Cookies?</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>Cookies are small text files placed on your device when you visit a website.</p>
                    <p>They help websites work properly, improve user experience, remember preferences, and collect information about how visitors use the site.</p>
                    <p>Cookies may be:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Session cookies, which are deleted when you close your browser</li>
                      <li>Persistent cookies, which remain on your device until they expire or are deleted</li>
                    </ul>
                    <p>Some cookies are essential for website functionality, while others help us understand website performance and improve the user experience.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">3. How We Use Cookies</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>York Driving Lesson may use cookies to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Make the website function properly</li>
                      <li>Improve site speed, performance, and usability</li>
                      <li>Remember user preferences where applicable</li>
                      <li>Understand how visitors use the website</li>
                      <li>Help us improve our pages, services, and user experience</li>
                      <li>Support website security and prevent misuse</li>
                      <li>Support embedded tools or third-party features where used</li>
                    </ul>
                    <p>We do not use cookies to sell your personal data.</p>
                    <p>We do not use cookies to send unsolicited marketing.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">4. Types of Cookies We May Use</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>We may use the following types of cookies on our website:</p>
                    <p><strong>Strictly Necessary Cookies</strong></p>
                    <p>These are essential for the website to function properly. Without them, some parts of the website may not work correctly.</p>
                    <p><strong>Performance and Analytics Cookies</strong></p>
                    <p>These help us understand how visitors use the website, such as which pages are visited most often and how users move around the site. This information helps us improve website performance, content, and usability.</p>
                    <p><strong>Functionality Cookies</strong></p>
                    <p>These may be used to remember choices you make, such as preferences or form-related settings, so the website can provide a smoother experience.</p>
                    <p><strong>Security Cookies</strong></p>
                    <p>These help protect the website and users against suspicious, harmful, or malicious activity.</p>
                    <p><strong>Third-Party and Embedded Content Cookies</strong></p>
                    <p>Some third-party tools or embedded content may place cookies where applicable. This may include maps, review widgets, analytics tools, chat tools, video embeds, or similar website features.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">5. Third-Party Cookies</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>Some cookies may be placed by trusted third-party services used on our website, such as:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Google Analytics or similar analytics tools</li>
                      <li>Google Maps or location-based tools</li>
                      <li>Review platforms</li>
                      <li>Website plugins or embedded features</li>
                      <li>Spam prevention or security tools</li>
                      <li>Website performance or caching tools</li>
                      <li>WhatsApp or communication features, where used</li>
                    </ul>
                    <p>These third parties may collect information in accordance with their own privacy and cookie policies.</p>
                    <p>We do not control third-party cookies directly and recommend that you review their own policies where relevant.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">6. Managing and Controlling Cookies</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>You can control or disable cookies through your browser settings.</p>
                    <p>Most browsers allow you to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>View what cookies are stored</li>
                      <li>Delete cookies</li>
                      <li>Block cookies completely</li>
                      <li>Block cookies from specific websites</li>
                      <li>Manage cookie permissions</li>
                    </ul>
                    <p>This can usually be done through the settings area of browsers such as Chrome, Safari, Edge, Firefox, or other browsers.</p>
                    <p>Please note that disabling certain cookies may affect how the website functions and may limit some features or usability.</p>
                    <p>If a cookie banner or consent tool is available on our website, you can also use it to manage your cookie preferences.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">7. Cookies and Personal Data</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>Some cookies may collect information that is considered personal data, such as an IP address, device information, browser details, or browsing activity.</p>
                    <p>Where this happens, we handle that information in line with our <a href="/privacy-policy" className="text-primary-dark hover:underline font-bold">Privacy Policy</a> and applicable UK data protection laws, including UK GDPR and the Data Protection Act 2018.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">8. Cookie Consent</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>Where required by law, York Driving Lesson may ask for your consent before using non-essential cookies.</p>
                    <p>You may be able to accept, reject, or manage cookie preferences through a cookie banner or consent tool on the website.</p>
                    <p>Strictly necessary cookies may still be used because they are required for the website to work properly.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">9. Updates to This Cookies Policy</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>We may update this Cookies Policy from time to time to reflect changes in law, website functionality, or the way cookies are used.</p>
                    <p>Any updates will be posted on this page.</p>
                    <p>We recommend checking this page from time to time so you remain informed.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">10. Related Policies</h2>
                  <div className="space-y-4 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>For more information on how we handle personal data, website use, and your rights, please review our:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><a href="/privacy-policy" className="text-primary-dark hover:underline font-bold">Privacy Policy</a></li>
                      <li><a href="/terms-and-conditions" className="text-primary-dark hover:underline font-bold">Terms & Conditions</a></li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.4rem] font-black text-primary-text uppercase tracking-tight mb-6">11. Contact Us</h2>
                  <div className="space-y-6 text-secondary-text leading-relaxed font-medium opacity-90">
                    <p>If you have any questions about this Cookies Policy or how cookies are used on our website, please get in touch:</p>
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
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
