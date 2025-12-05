"use client";
import { motion } from "framer-motion";

const services = [
  { 
    title: "Frontend Development", 
    desc: "Building responsive, interactive UIs with React, Next.js, TypeScript, and Tailwind CSS",
    icon: "💻",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    title: "Backend Development", 
    desc: "Creating robust APIs and server-side solutions with Node.js, Express, and databases",
    icon: "⚙️",
    color: "from-purple-500 to-pink-500"
  },
  { 
    title: "UI/UX Design", 
    desc: "Designing beautiful, intuitive interfaces that provide exceptional user experiences",
    icon: "🎨",
    color: "from-orange-500 to-red-500"
  },
  { 
    title: "Performance Optimization", 
    desc: "Enhancing speed, SEO, and overall performance for better user engagement",
    icon: "⚡",
    color: "from-yellow-500 to-orange-500"
  },
  { 
    title: "Database Management", 
    desc: "Designing and optimizing databases with MongoDB, PostgreSQL, Firebase, Supabase",
    icon: "🗄️",
    color: "from-green-500 to-emerald-500"
  },
  { 
    title: "Full-Stack Solutions", 
    desc: "End-to-end development from concept to deployment with modern tech stacks",
    icon: "🚀",
    color: "from-indigo-500 to-purple-500"
  },
];

export default function Services() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 font-semibold text-sm tracking-wider uppercase">Services</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 bg-gradient-to-r from-white via-indigo-200 to-purple-400 bg-clip-text text-transparent">
            What I Offer
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Comprehensive web development services tailored to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                   style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
              
              <div className="relative p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-700 hover:border-indigo-500/50 transition-all duration-500 h-full">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`text-6xl mb-6 inline-block`}
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {service.desc}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ amount: 0.3 }}
                  transition={{ delay: i * 0.1 + 0.5, duration: 0.8 }}
                  className={`h-1 mt-6 bg-gradient-to-r ${service.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}