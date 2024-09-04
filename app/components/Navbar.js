"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter(); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isActive = (href) => router.pathname === href;

  return (
    <nav className="bg-gray-800 border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left-side: Brand and Navigation */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-white dark:text-gray-100">
                <span className="text-2xl">S</span>ummarizer
                <span className="text-indigo-500 text-3xl">X</span>
              </Link>
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className={`${
                    isActive("/") ? "border-b-2 border-red-800 text-white" : "border-transparent text-gray-500"
                  } hover:border-indigo-600 hover:text-white dark:text-gray-400 dark:hover:text-gray-100 inline-flex items-center px-1 pt-1 border-b-4 text-sm font-medium`}>
                Home
              </Link>

              <Link href="/Docs" className={`${
                    isActive("/Docs") ? "border-b-2 border-white text-white" : "border-transparent text-gray-500"
                  } hover:border-indigo-600 hover:text-white dark:text-gray-400 dark:hover:text-gray-100 inline-flex items-center px-1 pt-1 border-b-4 text-sm font-medium`}>
                Docs
              </Link>

              <Link href="/TextSummarizer" className={`${
                    isActive("/TextSummarizer") ? "border-b-2 border-white text-white" : "border-transparent text-gray-500"
                  } hover:border-indigo-600 hover:text-white dark:text-gray-400 dark:hover:text-gray-100 inline-flex items-center px-1 pt-1 border-b-4 text-sm font-medium`}>
                Text Summarizer
              </Link>

              <Link href="/WhiteBoard" className={`${
                    isActive("/WhiteBoard") ? "border-b-2 border-white text-white" : "border-transparent text-gray-500"
                  } hover:border-indigo-600 hover:text-white dark:text-gray-400 dark:hover:text-gray-100 inline-flex items-center px-1 pt-1 border-b-4 text-sm font-medium`}>
                Whiteboard
              </Link>
            </div>
          </div>

          {/* Right-side: Search and User Profile */}
          <div className="flex items-center">
            {/* Search Input */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-5 pr-4 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            {/* User Dropdown */}
            <div className="ml-4 relative hidden sm:flex">
              <button
                type="button"
                className="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="sr-only">Open user menu</span>
              </button>

              {/* Theme Switch Button */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              >
                {theme === "dark" ? "🌙" : "🌞"}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${mobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                <svg
                  className={`${mobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className={`${
                  isActive("/") ? "bg-gray-900 text-white" : "text-gray-300"
                } block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white`}>
              Home
            </Link>
            <Link href="/Docs" className={`${
                  isActive("/Docs") ? "bg-gray-900 text-white" : "text-gray-300"
                } block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white`}>
              Docs
            </Link>
            <Link href="/TextSummarizer" className={`${
                  isActive("/TextSummarizer") ? "bg-gray-900 text-white" : "text-gray-300"
                } block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white`}>
              Text Summarizer
            </Link>
            <Link href="/WhiteBoard" className={`${
                  isActive("/WhiteBoard") ? "bg-gray-900 text-white" : "text-gray-300"
                } block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white`}>
              Whiteboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
