"use client"

// src/components/Chat.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const api_key = "AIzaSyBy7jFXKlLQTBJe8Qbtk169Gl-7zMb34kU";

const Chat = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("Hi there, How can I help you?");
  const [error, setError] = useState("");

  async function generateAi() {
    if (!question.trim()) {
      setAnswer("Hi there, How can I help you?");
      return;
    }
    try {
      setAnswer("⏳ Loading answer...");
      setError("");
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${api_key}`,
        {
          contents: [{ parts: [{ text: question }] }],
        }
      );
      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setError("An error occurred while fetching the response. Please try again.");
      setAnswer("");
    }
  }

  return (
   <>
     <Navbar />
     <div className="min-h-screen bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center py-10">
       <motion.div
         className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg"
         style={{ marginTop: '-60px' }}
         initial={{ opacity: 0, y: -50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
       >
         <motion.h1
           className="text-4xl font-bold mb-6 text-center dark:text-gray-600 text-gray-800"
           initial={{ y: 0 }}
           animate={{ y: [0, -10, 0] }}
           transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
         >
           Robo AI
           <motion.span
             initial={{ x: 0 }}
             animate={{ x: [0, 20, 0] }}
             transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
             style={{ display: 'inline-block' }}
           >
             🤖
           </motion.span>
         </motion.h1>
         <textarea
           className="w-full dark:bg-gray-900 text-gray-200 p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:border-purple-600"
           placeholder="Ask Chitty something..."
           value={question}
           onChange={(e) => setQuestion(e.target.value)}
           onKeyDown={(e) => {
             if (e.key === 'Enter' && !e.shiftKey) {
               e.preventDefault();
               generateAi();
             }
           }}
           rows="4"
         />
         <motion.button
           className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-400 transition duration-200"
           whileHover={{ scale: 1.02 }}
           whileTap={{ scale: 0.98 }}
           onClick={generateAi}
         >
           Generate
         </motion.button>
       </motion.div>
       <motion.div
         className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg mt-8"
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
       >
         {answer && (
           <motion.div
             className="mt-4 p-4 bg-gray-100 text-gray-800 border-l-4 border-indigo-800 rounded shadow-inner"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.5 }}
             dangerouslySetInnerHTML={{ __html: answer.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') }}
           />
         )}
         {error && (
           <p className="mt-4 p-2 bg-red-100 border border-red-300 rounded text-red-800">
             {error}
           </p>
         )}
       </motion.div>
     </div>
     <Footer />
   </>
  );
}

export default Chat;
