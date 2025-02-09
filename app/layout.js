import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";  // ✅ Ensure Navbar is imported

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ankit Hiremath | Portfolio",
  description: "Portfolio showcasing expertise in AI, Data Science, and Cloud Technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white`}
      >
        <Navbar /> {/* ✅ Navbar is now included */}
        <main className="mt-16">{children}</main>
      </body>
    </html>
  );
}
