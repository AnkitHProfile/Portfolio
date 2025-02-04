"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      <motion.h1
        className="text-5xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 text-center max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I am <span className="text-blue-400 font-semibold">Ankit Hiremath</span>, an aspiring 
        <span className="text-green-400 font-semibold"> Data Scientist</span> with expertise in
        <span className="text-yellow-400 font-semibold"> Machine Learning, AI, and Cloud Technologies.</span>
        I am currently pursuing my 
        <span className="text-purple-400 font-semibold"> Master’s in Computer Science at Syracuse University</span>,
        with the goal of working at <span className="text-red-400 font-semibold">Google as a Data Scientist.</span>
      </motion.p>

      <motion.div
        className="mt-8 space-y-4 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p>🎓 <strong>Education:</strong> MS in Computer Science, Syracuse University</p>
        <p>💼 <strong>Experience:</strong> System Engineer at Tata Consultancy Services (2.8 Years)</p>
        <p>🔬 <strong>Research:</strong> AI & Deep Learning Projects</p>
        <p>📍 <strong>Location:</strong> Syracuse, NY, USA</p>
      </motion.div>
    </div>
  );
}