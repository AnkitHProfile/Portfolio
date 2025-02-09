"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-100 text-gray-600 text-center mt-10 border-t border-gray-300">
      <p>© {new Date().getFullYear()} Ankit Hiremath | Built with Next.js & Tailwind CSS</p>
    </footer>
  );
}
