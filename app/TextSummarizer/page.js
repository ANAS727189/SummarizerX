"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

const TextSummarizer = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const API_URL = 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn';
  const API_TOKEN = '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';

  const chunkText = (text, chunkSize = 1024) => {
    const chunks = [];
    for (let i = 0; i < text.length; i += chunkSize) {
      chunks.push(text.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const fetchSummaryFromText = async (inputText) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputs: inputText }),
      });

      const result = await response.json();
      return result[0]?.summary_text || '';
    } catch (error) {
      console.error('Error fetching summary:', error);
      return 'Error fetching summary';
    }
  };

  const handleGetSummaryFromText = async () => {
    if (text.trim()) {
      setLoading(true);
      const chunks = chunkText(text);
      let combinedSummary = '';

      for (const chunk of chunks) {
        const chunkSummary = await fetchSummaryFromText(chunk);
        combinedSummary += chunkSummary + ' ';
      }

      setSummary(combinedSummary.trim());
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast.success("Summary copied to clipboard!");
      },
      (err) => {
        console.error('Failed to copy: ', err);
        toast.error("Failed to copy summary!");
      }
    );
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen dark:bg-gray-900 bg-gray-200 text-gray-100 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-2xl p-8 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-indigo-500">Text Summarizer</h2>

          <textarea
            className="w-full h-32 p-4 dark:bg-gray-700 bg-gray-100 text-indigo-500 dark:text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
            placeholder="Write or paste any text to summarize"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

<div className='fixed bottom-4 right-4'>
                    <Link href="/Help" className='bg-indigo-600 rounded-full text-white flex items-center justify-center shadow-lg w-16 h-16 hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-110'>
                        <span className="sr-only">Ask with AI</span>
                        <img src="./robo_ai.jpg" alt='Robot' className="w-8 h-8 rounded-full" />
                    </Link>
                </div>

          <button
            onClick={handleGetSummaryFromText}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 mb-4"
            disabled={loading}
          >
            {loading ? 'Summarizing...' : 'Get Summary'}
          </button>

          {summary && (
            <div className="relative bg-gray-700 rounded-lg border border-gray-600">
              <button
                onClick={() => copyToClipboard(summary)}
                className="absolute top-2 right-2 bg-gray-700 text-indigo-500 hover:text-gray-300 p-1 rounded transition-colors"
                aria-label="Copy to clipboard"
              >Copy
                <FontAwesomeIcon icon={faCopy} size="sm" />
              </button>
              <textarea
                readOnly
                className="w-full h-32 p-4 bg-transparent text-gray-200 border-none rounded-lg focus:outline-none"
                value={summary}
                placeholder="The summary will appear here..."
              />
            </div>
          )}
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default TextSummarizer;
