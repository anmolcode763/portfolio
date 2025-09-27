export default function Footer() {
  return (
    <footer className="py-10 border-t-0 relative bg-[#23235B]/80 backdrop-blur-lg">
      {/* Animated gradient border */}
      <div className="absolute inset-0 pointer-events-none border-t-4 border-transparent" style={{
        borderImage: 'linear-gradient(90deg, #3A3A8C 0%, #A084E8 60%, #F7CA18 100%) 1',
        borderWidth: '4px',
        borderStyle: 'solid',
        zIndex: 1,
        animation: 'gradient-border-move 6s linear infinite',
      }}></div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="premium-gradient animate-text-gradient text-lg font-semibold mb-4 md:mb-0">
            © {new Date().getFullYear()} Anmol Rajput. All rights reserved.
          </div>
          <div className="flex space-x-6">
            {/* GitHub */}
            <a href="https://github.com/anmolcode763" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition" aria-label="GitHub">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" fill="#23235B" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.167 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.528 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.34-2.221-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.378.202 2.397.099 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="#fff" />
              </svg>
            </a>
            {/* Email */}
            <a href="mailto:anmolcode763@gmail.com" className="hover:scale-110 transition" aria-label="Email">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="4" fill="#A084E8" />
                <path d="M4 6l8 7 8-7" stroke="#F7CA18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            {/* Phone */}
            <a href="tel:+919574462628" className="hover:scale-110 transition" aria-label="Phone">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" fill="#F7CA18" />
                <path d="M8 7h8v2H8zm0 4h8v2H8zm0 4h5v2H8z" fill="#23235B" />
                <path d="M16 17v-1a2 2 0 00-2-2H8a2 2 0 00-2 2v1" stroke="#A084E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/anmol-rajput-47649a250/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition" aria-label="LinkedIn">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" fill="#3A3A8C" />
                <path d="M7 17v-7h2v7m-1-8a1 1 0 110-2 1 1 0 010 2zm5 8v-4a2 2 0 114 0v4m-2-4a2 2 0 100-4 2 2 0 000 4z" stroke="#F7CA18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            {/* Portfolio/Website */}
            <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition" aria-label="Portfolio">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" fill="#A084E8" />
                <path d="M12 8v8m0 0l-4-4m4 4l4-4" stroke="#F7CA18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}