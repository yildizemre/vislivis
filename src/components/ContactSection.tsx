import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);
    
    // Validasyon
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFeedback(t('contact.form.validation.required'));
      return;
    }
    
    // Email format kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFeedback(t('contact.form.validation.email'));
      return;
    }
    
    setSubmitting(true);
    try {
      // Netlify functions endpoint (hem local hem production)
      const apiUrl = '/.netlify/functions/contact';
      
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!res.ok) {
        let msg = t('contact.form.error.submit');
        try {
          const data = await res.json();
          msg = data?.message || data?.error || msg;
        } catch {}
        throw new Error(msg);
      }
      
      setFormData({ name: '', email: '', company: '', message: '' });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (err) {
      setFeedback((err as Error).message || t('contact.form.error.generic'));
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-100">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm font-medium mb-6">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">
                  {t('contact.getInTouch')}
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{t('contact.phone')}</h4>
                      <a 
                        href="tel:+902164519112" 
                        className="text-white/70 hover:text-cyan-300 transition-colors font-medium"
                      >
                        0216 451 91 12
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-emerald-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{t('contact.email')}</h4>
                      <a 
                        href="mailto:info@vislivis.com" 
                        className="text-white/70 hover:text-emerald-300 transition-colors font-medium"
                      >
                        info@vislivis.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-indigo-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{t('contact.address')}</h4>
                      <p className="text-white/70 font-medium leading-relaxed">
                        Saldan Collective Office, Yenişehir<br />
                        Mustafa Akyol Sokağı No:7a-a<br />
                        İç Kapı No:27, 34912 Pendik/İstanbul
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl border border-white/20 p-8 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-amber-300" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    {t('contact.hours.title')}
                  </h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70 font-medium">{t('contact.hours.weekday')}</span>
                    <span className="text-white font-semibold">{t('contact.hours.weekdayTime')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70 font-medium">{t('contact.hours.saturday')}</span>
                    <span className="text-white font-semibold">{t('contact.hours.saturdayTime')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70 font-medium">{t('contact.hours.sunday')}</span>
                    <span className="text-white font-semibold">{t('contact.hours.sundayTime')}</span>
                  </div>
                  <div className="pt-3 border-t border-white/15 mt-4">
                    <div className="flex justify-between">
                      <span className="text-white/70 font-medium">{t('contact.hours.emergency')}</span>
                      <span className="text-emerald-300 font-semibold">{t('contact.hours.emergencyTime')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 rounded-2xl border border-white/20 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-8">
                {t('contact.sendMessage')}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white/80 mb-3">
                      {t('contact.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white/80 mb-3">
                      {t('contact.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-white/80 mb-3">
                    {t('contact.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white/80 mb-3">
                    {t('contact.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your security requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-cyan-500 text-slate-900 py-4 px-6 font-semibold rounded-xl hover:bg-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('contact.form.sending')}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t('contact.send')}</span>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200">
                {feedback ? (
                  <p className="text-sm text-center font-medium text-gray-700">{feedback}</p>
                ) : (
                  <p className="text-sm text-gray-600 text-center font-medium">
                    {t('contact.response')}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Success Modal */}
        {showSuccess && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center">
            <div className="absolute inset-0 bg-black/70" onClick={() => setShowSuccess(false)}></div>
            <div className="relative z-10 w-full max-w-md mx-4 overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
              <div className="absolute inset-0 bg-white/10"></div>
              <div className="absolute inset-0 backdrop-blur-xl"></div>
              <div className="relative p-8 text-white">
                <button
                  onClick={() => setShowSuccess(false)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                  aria-label="Kapat"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-300">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold tracking-tight">{t('contact.success.title')}</h4>
                  <p className="text-white/90">{t('contact.success.message')}</p>
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#00cadc] hover:bg-cyan-500 text-gray-900 font-semibold transition-colors"
                  >
                    {t('contact.success.button')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;