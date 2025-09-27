import { motion } from "framer-motion";
import myPic from '../assets/my_pic.jpg';
import anmol from '../assets/my_pic.jpg';
export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold mb-6 premium-gradient animate-text-gradient"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-gray-200 text-lg mb-6"
            >
              I'm a full-stack developer with a passion for creating digital experiences that 
              stand out. With expertise in the MERN stack and modern development practices, 
              I bring ideas to life with clean code and innovative solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-200 text-lg mb-8"
            >
              My approach combines technical expertise with creative thinking to deliver 
              products that not only function flawlessly but also provide exceptional 
              user experiences.
            </motion.p>
            
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center text-indigo-400 group"
            >
              Get in touch
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden">
                <img
                  src={myPic}
                  alt="Anmol Rajput"
                  className="w-full h-[520px] md:h-96 lg:h-[520px] object-cover transform transition hover:scale-105"
                  style={{ objectPosition: 'right center' }}
                />
            </div>
            <div className="absolute -inset-4 border border-indigo-500/30 rounded-2xl z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}