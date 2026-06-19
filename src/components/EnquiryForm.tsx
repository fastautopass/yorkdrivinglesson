import { useState, FormEvent } from 'react';
import { Check, Star, Zap } from 'lucide-react';

declare const grecaptcha: {
  enterprise: {
    ready: (cb: () => void) => void;
    execute: (siteKey: string, opts: { action: string }) => Promise<string>;
  };
};

const RECAPTCHA_SITE_KEY = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY ?? '6Lf9nSgtAAAAANY5Kd3NROwfbFEKP27NJx5xPPWL';

interface Errors {
  fullname?: string;
  mobile?: string;
  postcode?: string;
  service?: string;
  consent?: string;
}

function validateUKMobile(value: string): boolean {
  const cleaned = value.replace(/\s+/g, '');
  return /^(\+447|07)\d{9}$/.test(cleaned);
}

function validateUKPostcode(value: string): boolean {
  return /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i.test(value.trim());
}

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    mobile: '',
    postcode: '',
    service: '',
    consent: false,
    _honey: '', // honeypot — never shown to users
  });

  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  const validate = (): Errors => {
    const e: Errors = {};

    const name = formData.fullname.trim();
    if (!name) {
      e.fullname = 'Please enter your full name.';
    } else if (name.length < 3) {
      e.fullname = 'Please enter your full name (first and last).';
    } else if (!/^[A-Za-z\s'\-]+$/.test(name)) {
      e.fullname = 'Name should only contain letters.';
    } else if (name.split(/\s+/).length < 2) {
      e.fullname = 'Please enter both your first and last name.';
    }

    if (!formData.mobile.trim()) {
      e.mobile = 'Please enter your mobile number.';
    } else if (!validateUKMobile(formData.mobile)) {
      e.mobile = 'Please enter a valid UK mobile number (e.g. 07700 900123).';
    }

    if (!formData.postcode.trim()) {
      e.postcode = 'Please enter your postcode.';
    } else if (!validateUKPostcode(formData.postcode)) {
      e.postcode = 'Please enter a valid UK postcode (e.g. YO24 1AB).';
    }

    if (!formData.service) {
      e.service = 'Please select a service.';
    }

    if (!formData.consent) {
      e.consent = 'You must agree to our Terms and Privacy Policy to continue.';
    }

    return e;
  };

  const handleBlur = (field: keyof Errors) => {
    const e = validate();
    setErrors(prev => ({ ...prev, [field]: e[field] }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot — silently block bots
    if (formData._honey) return;

    const e2 = validate();
    if (Object.keys(e2).length > 0) {
      setErrors(e2);
      return;
    }

    setSubmitting(true);
    setServerError('');

    try {
      const recaptchaToken = await new Promise<string>((resolve, reject) => {
        grecaptcha.enterprise.ready(async () => {
          try {
            const token = await grecaptcha.enterprise.execute(RECAPTCHA_SITE_KEY, { action: 'ENQUIRY' });
            resolve(token);
          } catch (err) {
            reject(err);
          }
        });
      });

      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullname: formData.fullname,
          mobile: formData.mobile,
          postcode: formData.postcode,
          service: formData.service,
          _honey: formData._honey,
          recaptchaToken,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setServerError(data.error ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setServerError('Could not send your enquiry. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const headingColor = "text-[#111827]";
  const bodyColor = "text-[#475569]";
  const errorClass = "text-[0.68rem] text-red-600 font-semibold mt-1.5 leading-tight";
  const inputBase = `w-full p-[0.85rem_1rem] md:p-[1rem_1.2rem] border rounded-[12px] bg-soft-bg text-[0.95rem] ${headingColor} font-medium outline-none transition-all duration-200 focus:bg-white focus:ring-2`;
  const inputOk = `${inputBase} border-border-main focus:ring-primary-dark/10`;
  const inputErr = `${inputBase} border-red-400 focus:ring-red-300/30 bg-red-50/40`;

  if (submitted) {
    return (
      <div id="enquiry-form" className="bg-white rounded-[24px] p-4 sm:p-10 shadow-2xl shadow-primary-dark/20 max-w-[460px] sm:max-w-[580px] w-full border border-border-main/50 font-sans flex flex-col items-center justify-center min-h-[320px] text-center gap-4">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
          <Check className="w-7 h-7 text-green-600" strokeWidth={2.5} />
        </div>
        <h2 className={`text-[1.4rem] font-extrabold ${headingColor} tracking-tighter uppercase`}>Enquiry Sent</h2>
        <p className={`text-[0.9rem] ${bodyColor} font-medium leading-relaxed max-w-[340px]`}>
          Thanks for getting in touch. We'll get back to you within 2 hours.
        </p>
      </div>
    );
  }

  return (
    <div id="enquiry-form" className="bg-white rounded-[24px] p-4 sm:p-10 shadow-2xl shadow-primary-dark/20 max-w-[460px] sm:max-w-[580px] w-full border border-border-main/50 transition-all duration-300 hover:shadow-primary-dark/25 font-sans">
      <h2 className={`text-[1.4rem] xs:text-[1.6rem] md:text-[2.1rem] font-extrabold ${headingColor} mb-2 tracking-tighter text-center uppercase`}>Start your enquiry</h2>
      <div className="flex items-center justify-center gap-1.5 mb-6 md:mb-8 uppercase tracking-[0.1em]">
        <div className="shrink-0 flex items-center justify-center">
          <Zap className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-amber-600 fill-amber-600/10" strokeWidth={3} />
        </div>
        <p className={`text-[0.58rem] md:text-[0.72rem] ${headingColor} font-black leading-none whitespace-nowrap mb-[1px]`}>Response within 2 hours • 24/7 support</p>
      </div>

      {/* Honeypot — hidden from real users, bots fill it in */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <label htmlFor="_honey">Leave this blank</label>
        <input
          type="text"
          id="_honey"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          value={formData._honey}
          onChange={(e) => setFormData({ ...formData, _honey: e.target.value })}
        />
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-3 md:space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div className="flex flex-col">
            <label htmlFor="fullname" className={`text-[0.65rem] font-bold uppercase tracking-widest ${headingColor} mb-1.5 md:mb-2`}>Full Name *</label>
            <input
              type="text"
              id="fullname"
              className={errors.fullname ? inputErr : inputOk}
              required
              autoComplete="name"
              value={formData.fullname}
              onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
              onBlur={() => handleBlur('fullname')}
            />
            {errors.fullname && <p className={errorClass}>{errors.fullname}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="mobile" className={`text-[0.65rem] font-bold uppercase tracking-widest ${headingColor} mb-1.5 md:mb-2`}>Mobile Number *</label>
            <input
              type="tel"
              id="mobile"
              className={errors.mobile ? inputErr : inputOk}
              required
              autoComplete="tel"
              placeholder="07700 900123"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              onBlur={() => handleBlur('mobile')}
            />
            {errors.mobile && <p className={errorClass}>{errors.mobile}</p>}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="postcode" className={`text-[0.65rem] font-bold uppercase tracking-widest ${headingColor} mb-1.5 md:mb-2`}>Postcode *</label>
          <input
            type="text"
            id="postcode"
            className={errors.postcode ? inputErr : inputOk}
            required
            autoComplete="postal-code"
            placeholder="YO24 1AB"
            value={formData.postcode}
            onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
            onBlur={() => handleBlur('postcode')}
          />
          {errors.postcode && <p className={errorClass}>{errors.postcode}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="service" className={`text-[0.65rem] font-bold uppercase tracking-widest ${headingColor} mb-1.5 md:mb-2`}>What are you looking for? *</label>
          <select
            id="service"
            className={`${errors.service ? inputErr : inputOk} cursor-pointer appearance-none bg-[url('data:image/svg+xml,%3Csvg_width%3D%2212%22_height%3D%228%22_viewBox%3D%220_0_12_8%22_fill%3D%22none%22_xmlns%3D%22http%3D//www.w3.org/2000/svg%22%3E%3Cpath_d%3D%22M1_1L6_6L11_1%22_stroke%3D%22%23111827%22_stroke-width%3D%222%22_stroke-linecap%3D%22round%22/%3E%3C/svg%3E')] bg-no-repeat bg-[position:right_1rem_center] md:bg-[position:right_1.2rem_center]`}
            required
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            onBlur={() => handleBlur('service')}
          >
            <option value="">Please select...</option>
            <option value="automatic">Automatic Lessons</option>
            <option value="manual">Manual Lessons</option>
            <option value="intensive">Intensive Courses</option>
            <option value="refresher">Refresher Lessons</option>
            <option value="motorway">Motorway Lessons</option>
            <option value="mock">Mock Driving Tests</option>
            <option value="passplus">Pass Plus Course</option>
            <option value="other">Other</option>
          </select>
          {errors.service && <p className={errorClass}>{errors.service}</p>}
        </div>

        <div className="flex items-start gap-3 pt-2">
          <input
            type="checkbox"
            id="consent"
            className="w-[20px] h-[20px] mt-[0.15rem] cursor-pointer shrink-0 accent-primary-dark"
            required
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            onBlur={() => handleBlur('consent')}
          />
          <div>
            <label htmlFor="consent" className={`text-[0.7rem] sm:text-[0.78rem] leading-snug ${bodyColor} cursor-pointer font-medium`}>
              I confirm that I have read and agree to the <a href="/terms-and-conditions" className="text-primary-dark font-bold hover:underline">Terms</a> and <a href="/privacy-policy" className="text-primary-dark font-bold hover:underline">Privacy Policy</a>, and consent to York Driving Lesson contacting me regarding my enquiry.
            </label>
            {errors.consent && <p className={errorClass}>{errors.consent}</p>}
          </div>
        </div>

        {serverError && (
          <p className="text-[0.78rem] text-red-600 font-semibold text-center bg-red-50 border border-red-200 rounded-[10px] px-4 py-3 leading-snug">
            {serverError}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-primary-dark text-white-text py-4 md:py-5 rounded-[14px] text-[0.85rem] font-black cursor-pointer transition-all duration-300 tracking-[0.18em] uppercase hover:bg-secondary-dark hover:-translate-y-0.5 shadow-xl shadow-primary-dark/20 mt-2 md:mt-4 h-[54px] md:h-[60px] flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
        >
          {submitting ? 'Sending…' : 'Send Enquiry'}
        </button>

        <div className="flex justify-center items-center gap-x-1.5 sm:gap-x-2 gap-y-1 mt-6 md:mt-8 border-t border-border-main/50 pt-6">
          <div className={`flex items-center gap-1 whitespace-nowrap text-[0.52rem] sm:text-[0.65rem] ${headingColor} font-black uppercase tracking-[0.05em]`}>
            <span>DVSA Approved</span>
          </div>
          <span className="text-border-main/60 text-[0.7rem] sm:text-[0.8rem] -mt-0.5 font-light">|</span>
          <div className={`flex items-center gap-1 whitespace-nowrap text-[0.52rem] sm:text-[0.65rem] ${headingColor} font-black uppercase tracking-[0.05em]`}>
            <span>Auto & Manual</span>
          </div>
          <span className="text-border-main/60 text-[0.7rem] sm:text-[0.8rem] -mt-0.5 font-light">|</span>
          <div className={`flex items-center gap-1 whitespace-nowrap text-[0.52rem] sm:text-[0.65rem] ${headingColor} font-black uppercase tracking-[0.05em]`}>
            <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-[#F4B400] text-[#F4B400]" />
            <span>5-Star Rated</span>
          </div>
        </div>
      </form>
    </div>
  );
}
