"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gray-900 bg-opacity-95 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold tracking-wide text-white">
          Ankit Hiremath
        </Link>
        <div className="space-x-6">
          <Link href="/" className="text-gray-300 hover:text-white transition">Home</Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition">About</Link>
          <Link href="/projects" className="text-gray-300 hover:text-white transition">Projects</Link>
        </div>
      </div>
    </nav>
  );
}
