// Footer.jsx
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#16051f] text-white py-8 mt-10 font-roboto">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl text-center mb-6 font-lemon font-extralight text-purple-600">
          StarX
        </h3>
        <nav className="flex flex-wrap justify-center space-x-6 mb-6">
          <a href="#hero" className="hover:text-[#9333ea] mb-2 sm:mb-0">
            Home
          </a>
          <a href="#blogs" className="hover:text-[#9333ea] mb-2 sm:mb-0">
            Articles
          </a>
          <a href="#news" className="hover:text-[#9333ea] mb-2 sm:mb-0">
            News
          </a>
          <a href="#quize" className="hover:text-[#9333ea] mb-2 sm:mb-0">
            Quizzes
          </a>
          <a href="#gallery" className="hover:text-[#9333ea] mb-2 sm:mb-0">
            Gallery
          </a>
        </nav>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="http://www.linkedin.com/in/hasini-sankalpana"
            target="_blank"
            rel="noreferrer"
            className="text-xl hover:text-[#9333ea]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Hasini-Sankalpana"
            target="_blank"
            rel="noreferrer"
            className="text-xl hover:text-[#9333ea]"
          >
            <FaGithub />
          </a>
        </div>
        <p className="text-center text-sm opacity-70">
          © 2025 StartX. All rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
