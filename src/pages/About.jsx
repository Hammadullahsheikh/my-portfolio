import React from 'react';
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { AiOutlineArrowUp } from 'react-icons/ai';
import { motion } from 'framer-motion';

const About = ({ imageSrc }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Framer Motion variants for animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className='py-10 md:py-16 px-6  rounded-lg shadow-lg text-white'>
      
      {/* Hero Section */}
      <motion.div 
        className='flex flex-col items-center md:flex-row justify-center py-10 md:py-16'
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className='text-center md:text-left mb-8 md:mb-0 md:mr-8'>
          <p className='font-semibold text-4xl sm:text-5xl text-yellow-400'>
            Know Who <span className='text-yellow-600'>I'M</span>
          </p>
          <br />
          <p className='text-xl sm:text-2xl font-medium text-yellow-400'>
            Hi Everyone, I am <span className='text-yellow-600'>Hammad Ullah</span> from <span className='text-yellow-600'>Karachi, Pakistan.</span> <br />
            I am currently studying web development at SMIT, and I am passionate about building beautiful, functional web applications.
          </p>
        </div>
        
        {/* Profile Image */}
        <motion.div 
          className="md:w-1/3 w-2/3 h-56 overflow-hidden  shadow-xl"
          initial="hidden"
          animate="visible"
          variants={scaleUp}
        >
          <img 
  src={imageSrc || '/images/hamad1.png.jpg'}
  alt="Profile of Hammad Ullah"
  className="w-full h-full object-cover border-2 rounded-sm aspect-auto"
/>
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <div className="mt-16">
        <motion.p 
          className='text-4xl sm:text-5xl text-center font-semibold text-yellow-400'
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Web Development <span className='text-yellow-600'>Skills</span>
        </motion.p>
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
              <motion.div
                key={key}
                className='transition-transform duration-300 ease-in-out transform hover:scale-110 border-2 border-yellow-400 py-5 px-8 rounded-md w-[calc(50%-12px)] sm:w-[calc(25%-16px)] flex justify-center items-center  shadow-lg hover:bg-yellow-100'
                initial="hidden"
                animate="visible"
                variants={scaleUp}
              >
                {icon}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button 
        onClick={scrollToTop} 
        className="fixed bottom-6 right-6 p-4 bg-yellow-600 text-white rounded-full shadow-lg transition-transform duration-300 hover:bg-yellow-500 hover:scale-105 flex items-center justify-center"
        style={{ zIndex: 1001 }} 
        initial="hidden"
        animate="visible"
        variants={scaleUp}
      >
        <AiOutlineArrowUp className="text-lg" /> 
      </motion.button>
    </div>
  );
};

export default About;
