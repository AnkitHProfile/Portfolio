"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      <motion.h1
        className="text-6xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Ankit Hiremath
      </motion.h1>

      <motion.p
        className="text-xl mt-4 text-gray-300 text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Engineer | Data Science Enthusiast | AI Researcher | Cloud Architect
      </motion.p>

      <motion.div
        className="mt-6 flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {[
          { text: "View My Work", color: "bg-blue-600", link: "/projects" },
          { text: "About Me", color: "bg-green-600", link: "/about" },
          { text: "My Projects", color: "bg-purple-600", link: "/projects" },
        ].map((btn, index) => (
          <motion.a
            key={index}
            href={btn.link}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              className={`${btn.color} px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all hover:shadow-lg hover:scale-110`}
            >
              {btn.text}
            </button>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}