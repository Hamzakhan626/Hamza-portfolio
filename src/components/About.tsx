"use client";
import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Code Commits", value: "1000+" },
];

export default function About() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl" />
      
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left side - Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-indigo-400 font-semibold text-sm tracking-wider uppercase">About Me</span>
            <h2 className="text-5xl font-bold mt-4 mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Turning Vision Into Reality
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-300 leading-relaxed text-lg mb-6"
          >
            I'm Hamza Wasim, a passionate Full-Stack Developer and Creative Problem Solver 
            with over 2 years of experience crafting exceptional digital experiences. 
            I specialize in building scalable, performant web applications that users love.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-400 leading-relaxed mb-8"
          >
            My approach combines clean code, modern design principles, and user-centric 
            thinking to deliver solutions that not only look great but perform flawlessly.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg shadow-indigo-500/50"
          >
            Download Resume
          </motion.a>
        </div>

        {/* Right side - Stats */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border border-indigo-500/20 rounded-2xl text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/10 group-hover:to-purple-600/10 transition-all duration-500" />
              <motion.h3
                className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent relative z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ delay: i * 0.1 + 0.3, type: "spring", stiffness: 200 }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-400 mt-2 text-sm relative z-10">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
