"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-4 bg-gray-800 text-gray-300 text-center mt-10">
      <p>© {new Date().getFullYear()} Ankit Hiremath | Built with Next.js & Tailwind CSS</p>
    </footer>
  );
}
