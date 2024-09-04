"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Help from "../Help/page";
import Image from "next/image";
import TakeNote from "../../public/take-note.png";
import RoboAI from "../../public/robo_ai.jpg";


const HomePage = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 min-h-screen flex flex-col items-center justify-center">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-center py-20 px-6 md:px-12 lg:px-24">
          {/* Text and Buttons */}
          <div className="text-center md:text-left md:mr-12 mb-12 md:mb-0 max-w-lg">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight mb-4">
              <span className="lg:text-7xl text-gray-600">W</span>elcome to{" "}
              <span className="text-indigo-600 lg:text-5xl">
                Summarizer<span className="lg:text-7xl">X</span>
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg dark:text-gray-200 text-gray-700 mb-8">
              A powerful web application that summarizes text with ease and
              precision.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/TextSummarizer"
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Text Summarizer
              </Link>
              <Link
                href="/Docs"
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-white text-indigo-600 rounded-lg border border-indigo-600 shadow-md hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
              >
                Go to Docs
              </Link>
            </div>
          </div>

          {/* Feature Image */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mt-8 md:mt-0">
            <Image
              src={TakeNote}
              alt="Text Summarizer"
              className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="fixed bottom-4 right-4">
          <Link
            href="/Help"
            className="bg-indigo-600 rounded-full text-white flex items-center justify-center shadow-lg w-16 h-16 hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-110"
          >
            <span className="sr-only">Ask with AI</span>
            <Image
              src={RoboAI}
              alt="Robot"
              className="w-8 h-8 rounded-full"
              width={8}
              height={8}
            />
          </Link>
        </div>

        {/* Features Section */}
        <div className="dark:bg-gray-800 bg-gray-100 py-20 w-full">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold dark:text-gray-300 text-gray-900 text-center mb-12">
              Why Use <span className="text-indigo-600">SummarizerX?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center p-6 sm:p-8 dark:bg-gray-400 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl duration-300 ease-in-out transition-transform hover:scale-105">
                <h3 className="text-xl sm:text-2xl font-semibold dark:text-gray-800 text-gray-800 mb-4">
                  Fast Processing
                </h3>
                <p className="text-sm sm:text-base dark:text-gray-200 text-gray-600">
                  Summarize your text instantly with our fast and efficient
                  algorithm.
                </p>
              </div>
              <div className="text-center p-6 sm:p-8 dark:bg-gray-400 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl duration-300 ease-in-out transition-transform hover:scale-105">
                <h3 className="text-xl sm:text-2xl font-semibold dark:text-gray-800 text-gray-800 mb-4">
                  Easy to Use
                </h3>
                <p className="text-sm sm:text-base dark:text-gray-200 text-gray-600">
                  User-friendly interface with simple steps to summarize any
                  text.
                </p>
              </div>
              <div className="text-center p-6 sm:p-8 dark:bg-gray-400 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl duration-300 ease-in-out transition-transform hover:scale-105">
                <h3 className="text-xl sm:text-2xl font-semibold dark:text-gray-800 text-gray-800 mb-4">
                  Accurate Results
                </h3>
                <p className="text-sm sm:text-base dark:text-gray-200 text-gray-600">
                  Get the most relevant summaries of your documents with high
                  accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Whiteboard Introduction Section */}
        <div className="bg-gray-200 dark:bg-gray-700 py-20 w-full">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold dark:text-gray-300 text-gray-900 text-center mb-12">
              Discover Our <span className="text-indigo-600">Whiteboard</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg dark:text-gray-200 text-gray-700 text-center max-w-2xl mx-auto mb-12">
              Visualize your ideas with our intuitive Whiteboard feature.
              Collaborate in real-time and bring your thoughts to life.
            </p>
            <div className="flex justify-center">
              <Link
                href="/WhiteBoard"
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Explore Whiteboard
              </Link>
            </div>
          </div>
        </div>

        {/* Documentation & Support Section */}
        <div className="dark:bg-gray-900 bg-indigo-700 py-20 w-full">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
            <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold dark:text-gray-300 text-gray-900 text-center mb-12">
              Explore Our{" "}
              <span className="text-gray-400 text-5xl dark:text-indigo-700">
                Documentation
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg dark:text-gray-200 text-gray-200 text-center max-w-2xl mx-auto mb-12">
              Get detailed guides and support to maximize your experience with
              SummarizerX and Whiteboard.
            </p>
            <div className="flex justify-center">
              <Link
                href="/Docs"
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 dark:bg-indigo-600 bg-indigo-400 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Visit Documentation
              </Link>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="dark:bg-gray-800 bg-gray-300 py-20 w-full">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold dark:text-gray-300 text-gray-900 text-center mb-12">
              What Our <span className="text-indigo-500">Users</span> Say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              <div className="text-center p-6 sm:p-8 dark:bg-gray-400 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl duration-300 ease-in-out transition-transform hover:scale-105">
                <p className="text-sm sm:text-base md:text-lg dark:text-gray-200 text-gray-600 mb-4">
                  &quot;SummarizerX has significantly improved my workflow.
                  It&apos;s fast, reliable, and extremely accurate!&quot;
                </p>
                <p className="font-semibold dark:text-gray-800 text-gray-800">
                  - Ben 10
                </p>
              </div>
              <div className="text-center p-6 sm:p-8 dark:bg-gray-400 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl duration-300 ease-in-out transition-transform hover:scale-105">
                <p className="text-sm sm:text-base md:text-lg dark:text-gray-200 text-gray-600 mb-4">
                  &quot;The Whiteboard feature is a game-changer. It makes
                  brainstorming sessions so much more productive.&quot;
                </p>
                <p className="font-semibold dark:text-gray-800 text-gray-800">
                  - Luffy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
