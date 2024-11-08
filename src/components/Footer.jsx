import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { PiInstagramLogoFill } from 'react-icons/pi';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-center pt-10 sm:pt-16 pb-10">
      <h1 className="text-3xl sm:text-4xl font-semibold text-yellow-400">FIND ME ON</h1>
      <p className="text-lg sm:text-xl mt-3 text-gray-300">Feel free to connect with me</p>
      
      <div className="flex justify-center gap-6 sm:gap-8 text-4xl sm:text-5xl mt-5">
        {/* Social Icons */}
        <a
          className="transition-transform duration-300 hover:scale-110 text-gray-300 hover:text-yellow-400"
          href="https://github.com/Hammadullahsheikh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="p-2 sm:p-3 bg-gray-700 rounded-full shadow-lg hover:shadow-yellow-400" />
        </a>
        <a
          className="transition-transform duration-300 hover:scale-110 text-gray-300 hover:text-yellow-400"
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="p-2 sm:p-3 bg-gray-700 rounded-full shadow-lg hover:shadow-yellow-400" />
        </a>
        <a
          className="transition-transform duration-300 hover:scale-110 text-gray-300 hover:text-yellow-400"
          href="https://www.linkedin.com/in/hammad-ullah-7a435a2a9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="p-2 sm:p-3 bg-gray-700 rounded-full shadow-lg hover:shadow-yellow-400" />
        </a>
        <a
          className="transition-transform duration-300 hover:scale-110 text-gray-300 hover:shadow-yellow-400"
          href="https://www.instagram.com/itx_hammadullah/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiInstagramLogoFill className="p-2 sm:p-3 bg-gray-700 rounded-full shadow-lg hover:shadow-yellow-400" />
        </a>
        <a
          className="transition-transform duration-300 hover:scale-110 text-gray-300 hover:text-yellow-400"
          href="mailto:hammadullah@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail className="p-2 sm:p-3 bg-gray-700 rounded-full shadow-lg hover:shadow-yellow-400" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
