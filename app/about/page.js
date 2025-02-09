"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center py-16 px-6">
      <motion.h1
        className="text-5xl font-extrabold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="text-lg text-gray-500 text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I am Ankit Hiremath, a Data Scientist & AI Researcher with expertise in
        Machine Learning, AI, and Cloud Computing.  
        I am currently pursuing my Master’s in Computer Science at Syracuse University, 
        with the goal of working as a Data Scientist.
      </motion.p>

      <div className="mt-10 flex flex-col space-y-6 max-w-3xl">
        <motion.div
          className="p-4 bg-gray-100 rounded-lg shadow-sm"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <strong>🎓 Education:</strong> MS in Computer Science, Syracuse University  
        </motion.div>

        <motion.div
          className="p-4 bg-gray-100 rounded-lg shadow-sm"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <strong>💼 Experience:</strong> 2.8 Years as a System Engineer at Tata Consultancy Services  
        </motion.div>

        <motion.div
          className="p-4 bg-gray-100 rounded-lg shadow-sm"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <strong>📊 Research:</strong> AI & Deep Learning Projects, including CNN-based Gomoku AI  
        </motion.div>

        <motion.div
          className="p-4 bg-gray-100 rounded-lg shadow-sm"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <strong>📍 Location:</strong> Syracuse, NY, USA  
        </motion.div>
      </div>
    </div>
  );
}
