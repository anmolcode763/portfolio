import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Starfield from './Starfield';
import spaceVideo from '../assets/space.mp4';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
  <section ref={ref} className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Starfield cosmic animated background */}
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ pointerEvents: 'none' }}
        >
          <source src={spaceVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  {/* Optionally overlay Starfield for extra effect */}
  <Starfield />
      
  <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-center drop-shadow-xl"
          data-parallax-speed="0.04"
        >
          <span className="block premium-gradient animate-text-gradient">
            Imagination
          </span>
          <span className="block premium-gradient animate-text-gradient mt-2">
            Meets Code
          </span>
        </motion.h1>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-[#3A3A8C] via-[#A084E8] to-[#F7CA18] text-[#18122B] shadow-lg transition hover:scale-105 no-hover-color inline-flex items-center gap-2"
        >
          <span>Resume</span>
          <svg className="w-4 h-4 text-[#3A3A8C]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7m0 0L10 14m4-11L10 4m0 0v7" />
          </svg>
        </a>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-10 text-center"
        >
          I craft immersive digital experiences that blend creativity, technology, and purpose.<br className="hidden md:block" />
          Let’s build something extraordinary together.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.08, boxShadow: "0 10px 30px -10px rgba(160, 132, 232, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 premium-gradient rounded-full font-semibold shadow-lg text-lg tracking-wide border-none"
            style={{ background: 'linear-gradient(90deg, #A084E8 0%, #F7CA18 100%)', color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}
          >
            View Projects
          </motion.a>
          <motion.a 
            href="#about"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-[#A084E8] rounded-full font-semibold text-lg tracking-wide bg-[#18122B]/80 hover:bg-[#22223B]/90 transition text-[#F8F8FF]"
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-xs text-gray-400 mb-1">Scroll</span>
          <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}