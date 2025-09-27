import { motion } from "framer-motion";

import ParticlesBg from './ParticlesBg';
import { TopWave, BottomWave } from './Waves';
import Confetti from './Confetti';
import React, { useState } from 'react';
import spaceVideo from '../assets/contactspace.mp4';

export default function Contact() {
  const [showConfetti, setShowConfetti] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 1800);
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(120deg, #0f0b14 0%, #1a1530 60%, #18122B 100%)' }}>
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        style={{ pointerEvents: 'none', mixBlendMode: 'overlay' }}
      >
        <source src={spaceVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <TopWave />
      <ParticlesBg parallax />
      <BottomWave />

      {/* decorative floating orbs */}
      <div className="pointer-events-none absolute -left-10 top-32 w-40 h-40 rounded-full bg-[#A084E8]/20 blur-3xl animate-spin-slow" />
      <div className="pointer-events-none absolute right-8 top-8 w-28 h-28 rounded-full bg-[#F7CA18]/18 blur-2xl floating-bg" />

      <div className="relative container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Left column - contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold premium-gradient animate-text-gradient drop-shadow-lg">Get In Touch</h2>
            <p className="text-gray-300 max-w-lg">Interested in collaborating or have a question? Send a message or reach out directly via the links below — I'm always open to exciting projects.</p>

            <div className="mt-4 bg-[#12101b]/40 backdrop-blur-md rounded-xl p-6 border border-[#A084E8]/20 shadow-lg">
              <h3 className="text-lg font-semibold mb-3">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#A084E8]">
                    <path d="M2 7.5C2 6.67 2.67 6 3.5 6H20.5C21.33 6 22 6.67 22 7.5V16.5C22 17.33 21.33 18 20.5 18H3.5C2.67 18 2 17.33 2 16.5V7.5Z" stroke="#A084E8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 7L12 13L2 7" stroke="#F7CA18" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <a className="text-sm text-gray-200 hover:text-[#F7CA18]" href="mailto:anmolcode763@gmail.com">anmolcode763@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#A084E8]">
                    <path d="M22 16.92V21a1 1 0 0 1-1.11 1c-6.19-.9-11.17-5.88-12.07-12.07A1 1 0 0 1 10 7h3.09a1 1 0 0 1 1 .75c.2.88.65 2.18 1.66 3.19s2.31 1.46 3.19 1.66a1 1 0 0 1 .75 1V16.92z" stroke="#A084E8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 6h.01" stroke="#F7CA18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <a className="text-sm text-gray-200 hover:text-[#F7CA18]" href="tel:+919574462628">+91 9574462628</a>
                </li>
                <li className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M16 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0z" stroke="#A084E8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 22c3.5-4 8.5-6 14-6" stroke="#F7CA18" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <a className="text-sm text-gray-200 hover:text-[#F7CA18]" href="https://www.linkedin.com/in/anmol-rajput-47649a250/">linkedin.com/in/anmol-rajput-47649a250</a>
                </li>
              </ul>

              <div className="mt-4 flex items-center gap-3">
                <a target="_blank" rel="noreferrer" href="/resume.pdf" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#A084E8] to-[#F7CA18] text-[#18122B] font-semibold shadow-md no-hover-color">Resume
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="ml-1">
                    <path d="M14 3v6h6" stroke="#18122B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 15V21H3V3h11" stroke="#18122B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#contact-form" className="px-4 py-2 rounded-lg border border-[#A084E8]/30 text-sm text-gray-200 hover:bg-[#A084E8]/10">Message me</a>
              </div>
            </div>
          </motion.div>

          {/* Right column - form */}
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="w-full"
          >
            <motion.form
              onSubmit={handleSubmit}
              className="relative mx-auto max-w-xl bg-[#23235B]/70 backdrop-blur-md rounded-2xl shadow-2xl p-8 border-2 border-transparent"
              style={{ boxShadow: '0 12px 48px -12px rgba(160,132,232,0.25)' }}
            >
              {showConfetti && <Confetti />}

              {/* animated gradient border */}
              <div className="absolute -inset-0.5 rounded-2xl pointer-events-none" style={{
                background: 'linear-gradient(90deg, rgba(58,58,140,0.25) 0%, rgba(160,132,232,0.25) 60%, rgba(247,202,24,0.22) 100%)',
                zIndex: 1,
                filter: 'blur(6px)'
              }} />

              <div className="relative z-10">
                <h4 className="text-xl font-semibold mb-4">Send a message</h4>
                <p className="text-sm text-gray-300 mb-6">I'll get back to you within a few days. Excited to hear about your project.</p>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input required type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-lg bg-[#0f0c18]/50 text-[#F8F8FF] placeholder-[#A084E8]/50 focus:outline-none focus:ring-2 focus:ring-[#A084E8] border border-[#A084E8]/20" />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input required type="email" placeholder="Your email" className="w-full px-4 py-3 rounded-lg bg-[#0f0c18]/50 text-[#F8F8FF] placeholder-[#A084E8]/50 focus:outline-none focus:ring-2 focus:ring-[#A084E8] border border-[#A084E8]/20" />
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea required rows={5} placeholder="Write your message..." className="w-full px-4 py-3 rounded-lg bg-[#0f0c18]/50 text-[#F8F8FF] placeholder-[#A084E8]/50 focus:outline-none focus:ring-2 focus:ring-[#A084E8] border border-[#A084E8]/20" />
                </div>

                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-[#A084E8] to-[#F7CA18] text-[#18122B] font-semibold shadow-lg">
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13" stroke="#18122B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 2l-7 20-4-9-9-4 20-7z" stroke="#18122B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}