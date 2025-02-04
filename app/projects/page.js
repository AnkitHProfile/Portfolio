"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Steam Reviews Sentiment Analysis",
    description:
      "A Machine Learning pipeline that scrapes Steam reviews, preprocesses the text, and performs sentiment analysis using Transformers.",
    tech: ["Python", "NLP", "Transformers", "Pandas"],
    link: "#",
  },
  {
    title: "Bookstore Management System",
    description:
      "A Spring Boot application implementing Factory Design Pattern for efficient book categorization and management.",
    tech: ["Java", "Spring Boot", "MySQL"],
    link: "#",
  },
  {
    title: "AI-Powered Resume Analyzer",
    description:
      "An AI system that scans resumes and ranks them based on job description relevance using NLP models.",
    tech: ["Python", "Spacy", "TF-IDF", "Flask"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-6">
      <motion.h1
        className="text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-blue-400">{project.title}</h2>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-600 text-white px-3 py-1 text-sm rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} className="inline-block mt-4 text-blue-300 hover:text-blue-500">
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}