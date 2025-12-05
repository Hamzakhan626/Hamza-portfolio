"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  { 
    title: "E-Commerce Platform", 
    desc: "Full-stack online store with payment integration, admin dashboard, and real-time inventory",
    tags: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    image: "🛒",
    link: "#",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    title: "Social Media Dashboard", 
    desc: "Analytics dashboard for tracking social media metrics with beautiful data visualizations",
    tags: ["React", "D3.js", "Firebase", "Tailwind"],
    image: "📊",
    link: "#",
    color: "from-purple-500 to-pink-500"
  },
  { 
    title: "AI Chat Application", 
    desc: "Real-time chat app with AI-powered responses and modern messaging features",
    tags: ["Next.js", "OpenAI", "WebSocket", "PostgreSQL"],
    image: "💬",
    link: "#",
    color: "from-green-500 to-emerald-500"
  },
  { 
    title: "Portfolio CMS", 
    desc: "Content management system for photographers and creatives to showcase their work",
    tags: ["React", "Supabase", "Cloudinary", "Stripe"],
    image: "📸",
    link: "#",
    color: "from-orange-500 to-red-500"
  },
  { 
    title: "Fitness Tracker", 
    desc: "Mobile-responsive fitness tracking app with workout plans and progress monitoring",
    tags: ["Next.js", "MongoDB", "Chart.js", "PWA"],
    image: "💪",
    link: "#",
    color: "from-yellow-500 to-orange-500"
  },
  { 
    title: "Task Management Tool", 
    desc: "Collaborative project management platform with team features and real-time updates",
    tags: ["React", "Firebase", "TypeScript", "Drag-Drop"],
    image: "✅",
    link: "#",
    color: "from-indigo-500 to-purple-500"
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 font-semibold text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 bg-gradient-to-r from-white via-indigo-200 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            A selection of my recent work and passion projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative block"
            >
              <div className="relative p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-700 hover:border-indigo-500/50 transition-all duration-500 h-full overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === i ? 0.1 : 0 }}
                  className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
                />
                
                {/* Icon */}
                <motion.div
                  animate={{ 
                    scale: hoveredIndex === i ? 1.1 : 1,
                    rotate: hoveredIndex === i ? 5 : 0
                  }}
                  className="text-7xl mb-6 relative z-10"
                >
                  {project.image}
                </motion.div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 relative z-10 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 mb-6 relative z-10 leading-relaxed">
                  {project.desc}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-xs text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View button */}
                <motion.div
                  animate={{ x: hoveredIndex === i ? 5 : 0 }}
                  className="flex items-center gap-2 text-indigo-400 font-semibold relative z-10"
                >
                  View Project 
                  <span className="text-xl">→</span>
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
