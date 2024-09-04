import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left-side: Brand and Links */}
          <div className="flex flex-col space-y-4">
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="text-xl font-bold text-white">
                <span className="text-2xl">S</span>ummarizer
                <span className="text-indigo-500 text-3xl">X</span>
              </a>
            </div>
            <nav className="flex flex-col space-y-2">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Docs
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Text Summarizer
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Whiteboard
              </a>
            </nav>
          </div>

          {/* Right-side: Social Media and Contact */}
          <div className="flex flex-col space-y-4">
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Facebook Icon */}
                  <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.349C0 23.404.595 24 1.326 24h11.49v-9.294H9.745v-3.622h3.071V8.413c0-3.04 1.861-4.691 4.576-4.691 1.299 0 2.415.097 2.738.14v3.18l-1.88.001c-1.478 0-1.764.702-1.764 1.732v2.271h3.528l-.461 3.622h-3.067V24h6.009c.729 0 1.324-.595 1.324-1.326V1.326C24 .595 23.404 0 22.675 0z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Twitter Icon */}
                  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.206-4.92 4.917 0 .39.045.765.127 1.124-4.086-.205-7.719-2.164-10.141-5.144-.422.723-.666 1.561-.666 2.465 0 1.7.866 3.196 2.181 4.075-.803-.025-1.56-.247-2.22-.616v.062c0 2.377 1.693 4.355 3.946 4.803-.413.111-.849.171-1.296.171-.317 0-.626-.03-.928-.085.631 1.953 2.457 3.376 4.617 3.417-1.69 1.32-3.826 2.105-6.145 2.105-.399 0-.79-.024-1.175-.069 2.189 1.401 4.767 2.219 7.548 2.219 9.054 0 14.01-7.497 14.01-13.986 0-.213-.005-.426-.014-.637.964-.695 1.8-1.562 2.46-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* LinkedIn Icon */}
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.851-3.037-1.853 0-2.137 1.446-2.137 2.941v5.665H9.351v-11.46h3.414v1.561h.049c.476-.899 1.637-1.85 3.37-1.85 3.604 0 4.271 2.371 4.271 5.455v6.294zM5.337 7.433c-1.144 0-2.068-.924-2.068-2.068 0-1.144.924-2.068 2.068-2.068s2.068.924 2.068 2.068c0 1.144-.924 2.068-2.068 2.068zM7.118 20.452H3.557v-11.46h3.561v11.46zM22.225 0H1.771C.792 0 .01.773.01 1.736v20.531c0 .963.782 1.736 1.761 1.736h20.451c.978 0 1.771-.773 1.771-1.736V1.736C23.997.773 23.204 0 22.225 0z" />
                </svg>
              </a>
            </div>

            {/* Contact Info */}
            <div>
              <p className="text-gray-400 text-sm">Contact us: info@summarizerx.com</p>
            </div>
          </div>

          {/* Additional Column: Newsletter Signup */}
          <div className="flex flex-col space-y-4">
            <p className="text-white text-lg font-bold">Stay Updated</p>
            <p className="text-gray-400 text-sm">Sign up for our newsletter to get the latest updates.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your email"
              />
              <button className="px-4 py-2 bg-indigo-500 rounded text-white hover:bg-indigo-600 transition-colors duration-200">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400 text-sm">
            © 2024 SummarizerX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
