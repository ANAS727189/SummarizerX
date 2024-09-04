"use client";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Docs = () => {
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");

  const toggleFaqVisibility = () => {
    setShowAllFaqs(!showAllFaqs);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopySuccess("Copied!");
        setTimeout(() => setCopySuccess(""), 2000); // Clear success message after 2 seconds
      },
      (err) => {
        setCopySuccess("Failed to copy!");
      }
    );
  };

  const installationCode = `git clone https://github.com/your-repo/summarizerx.git
cd summarizerx
npm install
npm run dev`;

  const apiReferenceCode = `POST https://api-inference.huggingface.co/models/facebook/bart-large-cnn
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "inputs": "Your text goes here..."
}`;

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 dark:bg-gray-800 dark:text-white min-h-screen text-gray-900 p-4 sm:p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-indigo-600">SummarizerX Documentation</h1>

          <section id="introduction" className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Introduction</h2>
            <p className="text-base sm:text-lg">
              SummarizerX is a powerful web application designed to summarize large texts quickly and accurately. It also includes a real-time whiteboard for collaborative work.
            </p>
          </section>
          <div className='fixed bottom-4 right-4'>
                    <Link href="/Help" className='bg-indigo-600 rounded-full text-white flex items-center justify-center shadow-lg w-16 h-16 hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-110'>
                        <span className="sr-only">Ask with AI</span>
                        <img src="./robo_ai.jpg" alt='Robot' className="w-8 h-8 rounded-full" />
                    </Link>
                </div>

          <section id="installation" className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Installation</h2>
            <p className="text-base sm:text-lg">
              To set up SummarizerX locally, follow these steps:
            </p>
            <div className="relative">
            <pre className="bg-gray-800 dark:bg-gray-600 text-white p-3 sm:p-4 rounded-lg my-3 sm:my-4 text-sm overflow-auto break-all">
              {installationCode}
            </pre>
            <button
              onClick={() => copyToClipboard(installationCode)}
              className="absolute right-2 sm:right-4 top-2 sm:top-4 text-indigo-500 bg-white dark:bg-gray-700 p-1 sm:p-2 rounded hover:bg-indigo-500 hover:text-white flex items-center text-sm sm:text-base"
            >
              <FontAwesomeIcon icon={faCopy} className="mr-1 sm:mr-2" />
              {copySuccess ? "Copied!" : "Copy"}
            </button>
          </div>
  </section>
  <section id="features" className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Features</h2>
            <ul className="list-disc ml-4 sm:ml-8 text-base sm:text-lg">
              <li>Fast and accurate text summarization using Hugging Face API.</li>
              <li>Real-time collaborative whiteboard.</li>
              <li>Responsive design with theme switcher.</li>
            </ul>
          </section>
          <section id="api-reference" className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">API Reference</h2>
            <p className="text-base sm:text-lg">
              The text summarization feature uses the Hugging Face API. Below is an example of how to use it:
            </p>
          <div className="relative">
            <pre className="bg-gray-800 dark:bg-gray-600 text-white p-3 sm:p-4 rounded-lg my-3 sm:my-4 text-sm overflow-auto break-all">
              {apiReferenceCode}
            </pre>
            <button
              onClick={() => copyToClipboard(apiReferenceCode)}
              className="absolute right-2 sm:right-4 top-2 sm:top-4 text-indigo-500 bg-white dark:bg-gray-700 p-1 sm:p-2 rounded hover:bg-indigo-500 hover:text-white flex items-center text-sm sm:text-base"
            >
              <FontAwesomeIcon icon={faCopy} className="mr-1 sm:mr-2" />
              {copySuccess ? "Copied!" : "Copy"}
            </button>
          </div>

          </section>

          <section id="usage-guide" className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Usage Guide</h2>
            <p className="text-base sm:text-lg">
              Follow these steps to use the text summarizer:
            </p>
            <ol className="list-decimal ml-4 sm:ml-8 text-base sm:text-lg">
              <li>Navigate to the Text Summarizer page.</li>
              <li>Enter your text into the input box.</li>
              <li>Click on "Get Summary" to see the summarized text.</li>
            </ol>
          </section>

          <section id="advanced-usage" className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Advanced Usage</h2>
            <p className="text-base sm:text-lg">
              For more control, you can configure SummarizerX with custom settings or integrate it with other APIs.
            </p>
            <ul className="list-disc ml-4 sm:ml-8 text-base sm:text-lg">
              <li>Custom API endpoints</li>
              <li>Adjustable summarization length</li>
              <li>Integration with other NLP models</li>
            </ul>
          </section>

          <section id="troubleshooting" className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Troubleshooting</h2>
            <p className="text-base sm:text-lg">
              Here are some common issues and solutions:
            </p>
            <ul className="list-disc ml-4 sm:ml-8 text-base sm:text-lg">
              <li><strong>Issue:</strong> API key is invalid.<br /><strong>Solution:</strong> Make sure your API key is correctly formatted and active.</li>
              <li><strong>Issue:</strong> Text input too large.<br /><strong>Solution:</strong> Consider breaking the text into smaller chunks.</li>
              <li><strong>Issue:</strong> Whiteboard not loading.<br /><strong>Solution:</strong> Check your internet connection or try refreshing the page.</li>
            </ul>
          </section>

          <section id="faq" className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">FAQ</h2>
            <div className="text-base sm:text-lg">
              <div>
                <strong>Q:</strong> What is the maximum length of text that can be summarized?<br />
                <strong>A:</strong> The text is automatically chunked into 1024-character segments, allowing large texts to be summarized.<br />
              </div>
              <div>
                <strong>Q:</strong> How does SummarizerX work?<br />
                <strong>A:</strong> SummarizerX uses advanced algorithms and the Hugging Face API to generate summaries by processing large text inputs.<br />
              </div>
              <div>
                <strong>Q:</strong> Can I use SummarizerX for summarizing non-English texts?<br />
                <strong>A:</strong> SummarizerX primarily supports English, but other languages may work depending on the underlying model’s capabilities.<br />
              </div>
              
              {showAllFaqs && (
                <>
                  <div>
                    <strong>Q:</strong> What are the benefits of using SummarizerX over other text summarizers?<br />
                    <strong>A:</strong> SummarizerX offers fast processing, user-friendly interfaces, and highly accurate results, making it stand out from other tools.<br />
                  </div>
                  <div>
                    <strong>Q:</strong> How do I set up SummarizerX locally?<br />
                    <strong>A:</strong> Follow the installation steps provided in the Installation section above.<br />
                  </div>
                  <div>
                    <strong>Q:</strong> How does the whiteboard feature work?<br />
                    <strong>A:</strong> The whiteboard allows users to draw, write, and share ideas in real-time, providing a collaborative space.<br />
                  </div>
                </>
              )}

              <button
                onClick={toggleFaqVisibility}
                className="text-indigo-500 mt-4 sm:mt-6 text-sm sm:text-base"
              >
                {showAllFaqs ? "Show Less" : "Show More"}
              </button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Docs;
