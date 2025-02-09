"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center">
      <motion.h1
        className="text-5xl md:text-6xl font-bold leading-tight text-gray-200"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Transforming Data into Intelligence.
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Data Scientist | AI Researcher | Full Stack Developer | Cloud Architect
        <br /> Passionate about Machine Learning, Cloud Technologies, and Scalable AI Solutions.
      </motion.p>

      <motion.div
        className="mt-6 flex space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Link href="/projects">
          <button className="button-primary">Explore My Work</button>
        </Link>
        <Link href="/Ankit-Hiremath-Resume.pdf" target="_blank">
          <button className="button-secondary">View Resume</button>
        </Link>
      </motion.div>
    </section>
  );
}
