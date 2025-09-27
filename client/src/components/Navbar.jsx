import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a 
          href="#" 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent"
        >
          Anmol Rajput
        </motion.a>
        
        <div className="hidden md:flex space-x-8 items-center">
          {[
            { href: '#about', label: 'About' },
            { href: '#projects', label: 'Work' },
            { href: '#skills', label: 'Skills' },
            { href: '#contact', label: 'Contact' }
          ].map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ scale: 1.08 }}
              className="relative text-gray-300 hover:text-[#A084E8] transition font-medium px-2"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-[#3A3A8C] via-[#A084E8] to-[#F7CA18] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </motion.a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 px-4 py-2 rounded-full font-semibold bg-gradient-to-r from-[#3A3A8C] via-[#A084E8] to-[#F7CA18] text-[#18122B] shadow-lg transition hover:scale-105 no-hover-color interactive inline-flex items-center gap-2"
          >
            <span>Resume</span>
            <svg className="w-4 h-4 text-[#3A3A8C]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7m0 0L10 14m4-11L10 4m0 0v7" />
            </svg>
          </a>
        </div>
        
        <motion.a 
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-gradient-to-r from-[#3A3A8C] via-[#A084E8] to-[#F7CA18] rounded-full text-sm font-medium text-[#18122B]"
        >
          Let's Talk
        </motion.a>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg">
          <div className="px-6 py-4 space-y-4">
            <a href="#about" className="block text-white hover:text-indigo-400 transition" onClick={() => setIsOpen(false)}>About</a>
            <a href="#projects" className="block text-white hover:text-indigo-400 transition" onClick={() => setIsOpen(false)}>Work</a>
            <a href="#skills" className="block text-white hover:text-indigo-400 transition" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#contact" className="block text-white hover:text-indigo-400 transition" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </motion.nav>
  );
}