"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="w-full py-4 bg-gray-800 text-white shadow-lg fixed top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold tracking-wide hover:text-blue-400 transition duration-300">
          Ankit Hiremath
        </h1>
        <div className="flex space-x-6">
          {["Home", "About", "Projects"].map((text) => (
            <Link
              key={text}
              href={`/${text.toLowerCase()}`}
              className="relative hover:text-blue-400 transition duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-blue-400 before:transition-all before:duration-300 hover:before:w-full"
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}