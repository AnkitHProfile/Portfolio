"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <motion.h1
        className="text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Ankit Hiremath
      </motion.h1>
      <motion.p
        className="text-xl mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Engineer | Data Science Enthusiast | AI Researcher | Cloud Architect
      </motion.p>
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <a href="/projects">
          <button className="bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-500">
            View My Work
          </button>
        </a>
      </motion.div>
    </div>
  );
}