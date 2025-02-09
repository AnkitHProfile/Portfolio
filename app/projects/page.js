"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Gomoku",
    technologies: "CNN Architecture, MongoDB, Game Analysis, Pooling, TensorFlow, Keras, SciPy",
    duration: "October 2023 - November 2023",
    description: [
      "Constructed a CNN with 64-256 filters, achieving 25/30 wins on Gomocup data, surpassing Minimax, and leveraging MongoDB.",
      "Recommended 3D CNN and advanced pooling techniques to enhance AI sophistication, strategic depth, and cognitive analysis."
    ],
  },
  {
    title: "Bookstore",
    technologies: "Java, Spring Boot, PostgreSQL, Maven, Thymeleaf, REST API Implementation",
    duration: "August 2024 - September 2024",
    description: [
      "Devised a Java Spring Boot application with PostgreSQL, RESTful APIs, and secure authentication, boosting efficiency by 60%.",
      "Applied Factory design patterns and created Thymeleaf interfaces, improving usability and maintainability by 35%."
    ],
  },
  {
    title: "RAG-Driven QA System",
    technologies: "Transformers, Hugging Face, PyTorch, NumPy, Pandas, Scikit-learn",
    duration: "May 2024 - July 2024",
    description: [
      "Implemented a RAG-based QA model with Transformers, PyTorch, and TensorFlow, achieving 95% precision on 10,000+ files.",
      "Boosted model efficiency by 40% using encoding, response generation, and evaluation with Hugging Face and Scikit-learn."
    ],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white py-16 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-2xl font-bold text-blue-400">{project.title}</h2>
            <p className="italic text-gray-400">{project.technologies}</p>
            <p className="text-sm text-gray-300 mb-2">{project.duration}</p>
            <ul className="text-gray-300 list-disc pl-5 space-y-2">
              {project.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
