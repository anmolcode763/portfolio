import { motion } from 'framer-motion';
import React from 'react';

export default function ProjectCard({ p }) {
  // 3D tilt mouse follow
  const handleMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) scale(1.01)`;
  };
  const handleLeave = (e) => {
    const el = e.currentTarget;
    el.style.transform = '';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.04, boxShadow: '0 8px 32px -8px #A084E8' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="border rounded-xl p-6 shadow-lg bg-[#22223B]/80 backdrop-blur-md transition-all duration-300"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <h3 className="text-xl font-bold mb-2 premium-gradient animate-text-gradient">{p.title}</h3>
      <p className="text-sm mb-3 text-gray-200">{p.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {p.tech?.map((t, idx) => (
          <span key={idx} className="text-xs px-2 py-1 border border-[#A084E8]/40 rounded-full bg-[#A084E8]/10 text-[#F8F8FF]">{t}</span>
        ))}
      </div>
      <div className="flex gap-3">
        {p.liveUrl && <motion.a whileHover={{ scale: 1.1, color: '#F7CA18' }} href={p.liveUrl} target="_blank" rel="noreferrer" className="text-sm underline text-[#A084E8]">Live</motion.a>}
        {p.repoUrl && <motion.a whileHover={{ scale: 1.1, color: '#F7CA18' }} href={p.repoUrl} target="_blank" rel="noreferrer" className="text-sm underline text-[#A084E8]">Repo</motion.a>}
      </div>
    </motion.div>
  );
}