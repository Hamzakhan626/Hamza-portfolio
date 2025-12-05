"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content: "Hamza delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise are outstanding.",
    avatar: "👩‍💼",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateLab",
    content: "Working with Hamza was a pleasure. He transformed our complex requirements into a beautiful, intuitive application.",
    avatar: "👨‍💻",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, CreativeHub",
    content: "Hamza's expertise in modern web technologies helped us launch our platform ahead of schedule. Highly recommended!",
    avatar: "👩‍🎨",
    rating: 5
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute top-20 left-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 font-semibold text-sm tracking-wider uppercase">Testimonials</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 bg-gradient-to-r from-white via-indigo-200 to-purple-400 bg-clip-text text-transparent">
            What Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-700 hover:border-indigo-500/50 transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-5xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
