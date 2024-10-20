import React from 'react';
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

const About = () => {
  return (
    <div className=' py-32'>
      <div className='flex text-yellow-400 flex-col items-center md:flex-row justify-center  py-16 md:py-20'>
        <div className='md:text-left mb-8 md:mb-0 md:mr-8'>
          <p className='font-semibold text-5xl px-3'>Know Who <span className='text-yellow-600'>I'M</span></p>
          <br />
          <p className='text-2xl font-medium px-3'>
            Hi Everyone, I am <span className='text-yellow-600'>Hammad Ullah</span> from <span className='text-yellow-600'>Karachi, Pakistan.</span> <br />
            I am studying web development at SMIT.
          </p>
        </div>
        
        <div>
        <img 
                        src= "/images/tl.webp"
                        alt="Profile of Hammad Ullah" 
                        className="w-full h-full object-cover" 
                        
                    />
        </div>
      </div>

      <p className='font-semibold text-5xl text-center text-yellow-600 flex-wrap'>Web Development <span className='text-yellow-400'>Skills</span> </p>
      <div className='flex justify-center'>
        <div className='flex flex-wrap justify-center gap-4 mx-8 my-8'>
          {[
            { icon: <IoLogoHtml5 className='text-8xl text-yellow-400'/>, key: 'HTML' },
            { icon: <FaCss3Alt className='text-8xl text-yellow-400'/>, key: 'CSS' },
            { icon: <IoLogoJavascript className='text-8xl text-yellow-400'/>, key: 'JavaScript' },
            { icon: <FaBootstrap className='text-8xl text-yellow-400'/>, key: 'Bootstrap' },
            { icon: <RiTailwindCssFill className='text-8xl text-yellow-400'/>, key: 'Tailwind' },
            { icon: <BiLogoTypescript className='text-8xl text-yellow-400'/>, key: 'TypeScript' },
            { icon: <FaReact className='text-8xl text-yellow-400'/>, key: 'React' },
            { icon: <RiNextjsFill className='text-8xl text-yellow-400'/>, key: 'Next.js' },
          ].map(({ icon, key }) => (
            <div
              key={key}
              className='transition-transform duration-300 ease-in-out hover:scale-105 border-2 border-yellow-400 py-5 px-8 rounded-md w-[calc(50%-8px)] md:w-[calc(25%-16px)] flex justify-center items-center'
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
