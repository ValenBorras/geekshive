'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useI18n } from '../i18n/I18nProvider';

const fadeInUp = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  const { t } = useI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/xjkwzgpd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          subject: e.target.subject.value,
          message: e.target.message.value,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-5 py-3.5 bg-white/[0.03] border border-[#F2D300]/15 rounded-xl focus:outline-none focus:border-[#F2D300]/50 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(242,211,0,0.08)] text-white placeholder-white/30 transition-all duration-300";

  return (
    <section id="contact" className="w-full pt-20 pb-28 px-6 md:px-24 font-raleway relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F2D300]/[0.03] to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title and Description */}
        <motion.div 
          className="text-center space-y-5 mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F2D300]">{t('contact.title')}</h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-3xl mx-auto">{t('contact.desc')}</p>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="max-w-2xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    className={inputClasses}
                    placeholder={t('contact.yourName')}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    className={inputClasses}
                    placeholder={t('contact.yourEmail')}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  required
                  className={inputClasses}
                  placeholder={t('contact.subject')}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  required
                  rows="6"
                  className={`${inputClasses} resize-none`}
                  placeholder={t('contact.yourMessage')}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-2">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative inline-flex items-center gap-2 px-8 py-3.5 bg-[#F2D300] text-black font-bold rounded-full 
                    transition-all duration-300 hover:bg-[#ffe44d] shadow-[0_0_25px_rgba(242,211,0,0.2)] hover:shadow-[0_0_40px_rgba(242,211,0,0.35)]
                    disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none`}
                  whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.97 } : {}}
                >
                  <span>{isSubmitting ? t('contact.sending') : t('contact.send')}</span>
                  <FaPaperPlane className={`text-sm transition-transform duration-300 
                    ${isSubmitting ? 'translate-x-2 -translate-y-1' : 'group-hover:translate-x-1'}`} 
                  />
                </motion.button>
              </div>

              {/* Status Message */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className={`text-center p-4 rounded-xl text-sm font-medium ${
                    submitStatus === 'success' 
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}
                >
                  {submitStatus === 'success' 
                    ? t('contact.success') 
                    : t('contact.error')}
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 