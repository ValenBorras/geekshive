'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  return (
    <section id="contact" className="w-full pt-16 pb-28 px-6 md:px-24 font-raleway relative overflow-hidden">
      {/* Background gradient - centered in the section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F2D300]/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title and Description */}
        <motion.div 
          className="text-center space-y-6 mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F2D300]">
            Get in Touch
          </h2>
          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
            Have questions about our products or services? We'd love to hear from you. 
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="max-w-2xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-[#F2D300]/20 rounded-lg focus:outline-none focus:border-[#F2D300] text-white placeholder-white/50 transition-colors"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-[#F2D300]/20 rounded-lg focus:outline-none focus:border-[#F2D300] text-white placeholder-white/50 transition-colors"
                  placeholder="Your Email"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div className="relative">
              <input
                type="text"
                name="subject"
                required
                className="w-full px-4 py-3 bg-black/40 border border-[#F2D300]/20 rounded-lg focus:outline-none focus:border-[#F2D300] text-white placeholder-white/50 transition-colors"
                placeholder="Subject"
              />
            </div>

            {/* Message Field */}
            <div className="relative">
              <textarea
                name="message"
                required
                rows="6"
                className="w-full px-4 py-3 bg-black/40 border border-[#F2D300]/20 rounded-lg focus:outline-none focus:border-[#F2D300] text-white placeholder-white/50 transition-colors resize-none"
                placeholder="Your Message"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group relative px-8 py-3 bg-[#F2D300] text-black font-semibold rounded-lg 
                  transition-all duration-300 hover:bg-[#F2D300]/80 hover:scale-105 
                  disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <span className="flex items-center space-x-2">
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <FaPaperPlane className={`transform transition-transform duration-300 
                    ${isSubmitting ? 'translate-x-2' : 'group-hover:translate-x-1'}`} 
                  />
                </span>
              </button>
            </div>

            {/* Status Message */}
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center p-4 rounded-lg ${
                  submitStatus === 'success' 
                    ? 'bg-green-500/20 text-green-300' 
                    : 'bg-red-500/20 text-red-300'
                }`}
              >
                {submitStatus === 'success' 
                  ? 'Message sent successfully! We\'ll get back to you soon.' 
                  : 'Something went wrong. Please try again.'}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
} 