"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../assets/final version.png";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) {
    return (
      <section className="relative h-screen  flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 md:px-20 bg-black overflow-hidden">
        <div className="flex-1 py-10">
          <div className="inline-block mb-4 px-4 py-2 bg-indigo-600/20 backdrop-blur-sm border border-indigo-500/30 rounded-full text-sm">
            ✨ Available for Freelance
          </div>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
            Hamza Wasim
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-10 flex  flex-col md:flex-row justify-center items-center text-center md:text-left px-6 md:px-20 bg-black overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x / 20,
            y: mousePosition.y / 20,
          }}
          transition={{ type: "spring", damping: 30 }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x / 30,
            y: -mousePosition.y / 30,
          }}
          transition={{ type: "spring", damping: 30 }}
          style={{ bottom: "10%", right: "10%" }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-indigo-400/30 rounded-full"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Text */}
      <div className="flex-1 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="inline-block mb-4 px-4 py-2 bg-indigo-600/20 backdrop-blur-sm border border-indigo-500/30 rounded-full text-sm"
        >
          ✨ Available for Freelance
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent"
        >
          Hamza Wasim
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4"
        >
          <span className="text-2xl md:text-3xl font-light text-gray-300">I craft </span>
          <motion.span
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            exceptional digital experiences
          </motion.span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl mt-6 text-gray-400 max-w-lg"
        >
          Full-stack developer specializing in modern web technologies. 
          Transforming ideas into stunning, high-performance applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 flex gap-4 justify-center md:justify-start flex-wrap"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg shadow-indigo-500/50"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-indigo-500/50 text-white rounded-full font-semibold hover:bg-indigo-600/10 backdrop-blur-sm transition"
          >
            Let's Talk
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-10 flex gap-4 justify-center md:justify-start"
        >
          {["github", "linkedin", "twitter"].map((social, i) => (
            <motion.a
              key={social}
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 border border-indigo-500/30 rounded-full flex items-center justify-center hover:bg-indigo-600/20 transition"
            >
              <span className="text-indigo-400 text-xl">→</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Image with 3D effect */}
      <motion.div
        initial={{ opacity: 0, x: 100, rotateY: -30 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ delay: 0.3, duration: 1.2, type: "spring" }}
        className="flex-1 mt-12 md:mt-0 md:ml-10 relative z-10"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse" />
          <Image
            src={profilePic}
            alt="Hamza Wasim"
            width={400}
            height={400}
            className="rounded-full border-4 border-indigo-500/50 shadow-2xl relative z-10"
          />
          {/* Orbiting elements */}
          <motion.div
            className="absolute w-4 h-4 bg-indigo-400 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ top: "20%", left: "10%", transformOrigin: "200px 200px" }}
          />
          <motion.div
            className="absolute w-3 h-3 bg-purple-400 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ bottom: "20%", right: "10%", transformOrigin: "-200px -200px" }}
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-sm">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-indigo-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
