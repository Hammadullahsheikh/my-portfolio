import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { TypeAnimation } from 'react-type-animation';

const Profile = ({ imageSrc }) => {
    return (
        <>
            <div 
                className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 gap-[100px] relative"
                style={{ 
                    backgroundImage: 'url("/path/to/your/background-image.jpg")', // Update this path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    animation: 'fadeIn 2s ease-in-out' // Optional animation
                }}
            >
                {/* First Div: Text Section */}
                <div className="mb-8 md:mb-0 md:mr-10 text-center md:text-left relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-600 drop-shadow-md transition-transform duration-300 hover:scale-105">
                        Hi There! 👋🏻
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold text-yellow-500 my-2 transition-transform duration-300 hover:scale-105">
                        I'M HAMMAD ULLAH
                    </h2><br />
                    <p className="text-xl md:text-2xl text-yellow-700 font-medium italic">
                        <TypeAnimation
                            sequence={[
                                'MERN STACK DEVELOPER',
                                1000,
                                'FRONTEND DEVELOPER',
                                1000,
                                'RESPONSIVE WEB DESIGNER',
                                1000,
                                'MERN STACK DEVELOPER',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </p>
                </div>

                {/* Second Div: Image Section */}
                <div className="w-48 h-48 md:w-64 md:h-64   overflow-hidden shadow-lg relative z-10">
                    <img 
                        src={imageSrc || "/images/home.webp"} 
                        alt="Profile of Hammad Ullah" 
                        className="w-full h-full object-cover" 
                    />
                </div>
            </div>
             {/* introuce my self */}
            
    <section className="bg-white dark:bg-gray-900">
  <div className="relative flex">
    <div className="min-h-screen lg:w-1/3"></div>
    <div className="hidden w-3/4 min-h-screen bg-yellow-100 dark:bg-gray-800 lg:block"></div>

    <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
      <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
        Let me <span className="text-yellow-500">Introduce</span> <br /> My self
      </h1>

      <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
      <h1 className="flex items-center justify-center mt-[30px] bg-yellow-100 w-full lg:w-[32rem] rounded-lg h-96">
  <img className="object-cover" src="/images/hammad3.png" alt="" />
</h1>

        <div className="mt-8 lg:px-10 lg:mt-0 ">
          <h1 className="text-2xl  font-medium text-yellow-600 dark:text-white lg:w-72">
          Navigating the World of Programming
          </h1>

          <p className="max-w-lg mt-6 text-gray-700 dark:text-gray-400">
         I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️ <br /><br />

I am fluent in classics like <b>Javascript, ReactJs and React Native.</b> <br /><br />

My field of Interest's are building new  Web Technologies and Products and also in areas related to Deep <br />Learning and Natural Launguage Processing. <br /><br />

Whenever possible, I also apply my passion for developing products with Modern <b>Javascript</b> Library and <br />Frameworks  like<b> React.js </b>
          </p>

          <h3 className="mt-6 text-lg font-medium text-yellow-500"></h3>
          <p className="text-gray-600 dark:text-gray-300"></p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-12 lg:justify-start">
       

        
      </div>
    </div>
  </div>
</section>

{/* footer */}


<div className='text-center pt-20'>
      <h1 className='text-4xl font-semibold'>FIND ME ON</h1>
      <p className='text-2xl font-[2px] mt-3'>Feel free to connect with me</p>
    </div>
    <div className="flex justify-center gap-3 text-5xl mt-5 pb-10">
 <a className='transition-transform duration-300 ease-in-out hover:scale-105' href="https://github.com/Hammadullahsheikh"> <FaGithub className="border p-3 bg-white rounded-full" /></a>
  <FaTwitter className="border p-3 bg-white rounded-full transition-transform duration-300 ease-in-out hover:scale-105" />
  <a className='transition-transform duration-300 ease-in-out hover:scale-105' href="https://www.linkedin.com/in/hammad-ullah-7a435a2a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><FaLinkedin className="border p-3 bg-white rounded-full" /></a>
  <a className='transition-transform duration-300 ease-in-out hover:scale-105' href="https://www.instagram.com/itx_hammadullah/"><PiInstagramLogoFill className="border p-3 bg-white rounded-full" /></a>
  <a className='transition-transform duration-300 ease-in-out hover:scale-105' href="https://mail.google.com/mail/u/0/#sent"><MdEmail className="border p-3 bg-white rounded-full" /></a>
</div>

        </>
    );
};

export default Profile;
