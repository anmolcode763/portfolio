import { motion } from "framer-motion";

// Projects (from resume)
const projects = [
  {
    id: 1,
    title: "BXIWorld Platform",
    description: "Developed a comprehensive barter exchange platform enabling businesses to trade goods and services. Implemented user authentication, product listing, search functionality, and transaction management systems. Built with modern web technologies to ensure scalability and a responsive user experience.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1332&q=80",
    tags: ["React", "Node", "Express", "Razorpay", "AWS S3"],
    link: "https://bxiworld.com"
  },
  {
    id: 2,
    title: "BrandWorld E-commerce Platform",
    description: "Created a full-featured e-commerce website with product catalog, shopping cart, and checkout functionality. Designed responsive UI components and optimized performance for enhanced user engagement. Integrated secure payment processing and order management systems.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    tags: ["E-commerce", "Payments", "Responsive UI"],
    link: "https://brandworld.co.in"
  },
  {
    id: 3,
    title: "VoucherBot Mobile Application",
    description: "Developed a React Native mobile application for voucher and coupon management. Built and generated APK for Android distribution, ensuring smooth performance across devices. Implemented features for voucher creation, redemption tracking, and user account management.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    tags: ["React Native", "Mobile", "APK"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20" style={{ background: 'linear-gradient(120deg, #18122B 0%, #22223B 100%)' }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 premium-gradient animate-text-gradient">
            Featured Work
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and approach to development.
          </p>
        </motion.div>
        
  <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-8 items-center rounded-2xl p-6 backdrop-blur-sm border border-[#A084E8]/30 bg-[#22223B]/80 shadow-lg"
            >
              <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="rounded-xl overflow-hidden relative group border-4 border-[#A084E8]/30">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="block w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700 transform-gpu"
                  />
                  <div className="absolute inset-0 bg-[#A084E8]/10 group-hover:opacity-0 transition-opacity duration-700"></div>
                </div>
              </div>
              
              <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <h3 className="text-2xl font-bold mb-3 premium-gradient animate-text-gradient">{project.title}</h3>
                <p className="text-gray-200 mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#A084E8]/30 rounded-full text-sm text-[#F8F8FF]">
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.a 
                  href={project.link}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center premium-gradient animate-text-gradient font-semibold text-lg group"
                  style={{ background: 'linear-gradient(90deg, #A084E8 0%, #F7CA18 100%)', color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}
                >
                  View Project
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" fill="none" stroke="#A084E8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}