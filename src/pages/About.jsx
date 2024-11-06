import React from 'react';
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { AiOutlineArrowUp } from 'react-icons/ai';

const About = ({ imageSrc }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='py-10 md:py-16  rounded-lg shadow-lg'>
      
      {/* Hero Section */}
      <div className='flex flex-col items-center md:flex-row justify-center py-10 md:py-16'>
        <div className='md:text-left mb-8 md:mb-0 md:mr-8 text-center'>
          <p className='font-semibold text-4xl sm:text-5xl text-yellow-400'>
            Know Who <span className='text-yellow-600'>I'M</span>
          </p>
          <br />
          <p className='text-xl sm:text-2xl font-medium text-gray-700'>
            Hi Everyone, I am <span className='text-yellow-600'>Hammad Ullah</span> from <span className='text-yellow-600'>Karachi, Pakistan.</span> <br />
            I am studying web development at SMIT.
          </p>
        </div>
        
        {/* Profile Image */}
        <div className="md:w-1/3 w-2/3 md:h-auto h-56 overflow-hidden rounded-full shadow-xl">
          <img 
            src={imageSrc || '/images/tl.webp'}
            alt="Profile of Hammad Ullah"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-16">
        <p className='text-4xl sm:text-5xl text-center font-semibold text-yellow-400 transition-all duration-200'>
          Web Development <span className='text-yellow-600'>Skills</span>
        </p>
        <div className='flex justify-center mt-8'>
          <div className='flex flex-wrap justify-center gap-6 mx-8'>
            {[ 
              { icon: <IoLogoHtml5 className='text-7xl text-yellow-400' />, key: 'HTML' },
              { icon: <FaCss3Alt className='text-7xl text-yellow-400' />, key: 'CSS' },
              { icon: <IoLogoJavascript className='text-7xl text-yellow-400' />, key: 'JavaScript' },
              { icon: <FaBootstrap className='text-7xl text-yellow-400' />, key: 'Bootstrap' },
              { icon: <RiTailwindCssFill className='text-7xl text-yellow-400' />, key: 'Tailwind' },
              { icon: <BiLogoTypescript className='text-7xl text-yellow-400' />, key: 'TypeScript' },
              { icon: <FaReact className='text-7xl text-yellow-400' />, key: 'React' },
              { icon: <RiNextjsFill className='text-7xl text-yellow-400' />, key: 'Next.js' },
            ].map(({ icon, key }) => (
              <div
                key={key}
                className='transition-transform duration-300 ease-in-out transform hover:scale-110 border-2 border-yellow-400 py-5 px-8 rounded-md w-[calc(50%-12px)] sm:w-[calc(25%-16px)] flex justify-center items-center bg-gray-800 shadow-lg hover:bg-gray-700'
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop} 
        className="fixed bottom-6 right-6 p-4 bg-yellow-600 text-white rounded-full shadow-lg transition-transform duration-300 hover:bg-yellow-500 hover:scale-105 flex items-center justify-center"
        style={{ zIndex: 1001 }} 
      >
        <AiOutlineArrowUp className="text-lg" /> 
      </button>
    </div>
  );
};

export default About;
