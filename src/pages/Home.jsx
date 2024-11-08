import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Profile = ({ imageSrc }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Framer Motion Variants for Animations
  const textVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeInOut' } },
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 gap-6 sm:gap-8 relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("/path/to/your/background-image.jpg")', // Update this path
        }}
      >
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left relative z-10 sm:mb-8"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-yellow-600 drop-shadow-md">
            Hi There! 👋🏻
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-yellow-500 my-2">
            I'M HAMMAD ULLAH
          </h2>
          <p className="text-xl sm:text-2xl text-yellow-700 font-medium italic">
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
        </motion.div>

        {/* Profile Image (Rectangular) */}
        <motion.div
          className="w-32 sm:w-40 md:w-full max-w-xs overflow-hidden relative z-10 mt-10 sm:mt-4"
          initial="hidden"
          animate="visible"
          variants={imageVariant}
        >
          <img
            src={imageSrc || '/images/home.webp'}
            alt="Profile of Hammad Ullah"
            className="w-full h-auto object-cover shadow-lg transition-transform duration-300 hover:scale-110"
          />
        </motion.div>
      </div>

      {/* Introduce Myself Section */}
      <section>
        <div className="relative flex">
          <div className="min-h-screen lg:w-1/3"></div>
          <div className="hidden w-3/4 min-h-screen bg-yellow-100 dark:bg-gray-800 lg:block"></div>

          <motion.div
            className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
            }}
          >
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 capitalize dark:text-white">
              Let me <span className="text-yellow-500">Introduce</span> <br /> Myself
            </h1>

            <div className="mt-10 lg:mt-20 lg:flex lg:items-center flex-col md:flex-row">
              {/* Profile Image in Introduction */}
              <motion.div
                className="bg-yellow-100 rounded-lg h-72 sm:h-80 md:h-96 lg:h-72 shadow-lg overflow-hidden w-full lg:w-[32rem] flex items-center justify-center"
                initial="hidden"
                animate="visible"
                variants={imageVariant}
              >
                <img
                  className="object-cover w-full h-full"
                  src="/images/hammad3.png"
                  alt="Hammad Ullah"
                />
              </motion.div>

              <div className="mt-8 sm:mt-6 lg:px-10 lg:mt-0 w-full md:w-3/4">
                <h1 className="text-xl sm:text-2xl font-medium text-yellow-600 dark:text-white lg:w-72">
                  Navigating the World of Programming
                </h1>
                <p className="max-w-lg mt-6 text-gray-700 dark:text-gray-400">
                  I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️ <br /><br />
                  I am fluent in classics like <b>Javascript, ReactJs and React Native.</b> <br /><br />
                  My field of interest includes building new Web Technologies and Products, and also areas related to Deep Learning and Natural Language Processing. <br /><br />
                  Whenever possible, I also apply my passion for developing products with Modern <b>Javascript</b> Libraries and Frameworks like <b>React.js</b>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll-to-top Arrow */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-5 sm:bottom-6 right-4 p-3 sm:p-4 bg-yellow-600 text-white rounded-full shadow-lg transition-transform duration-300 hover:bg-yellow-500 hover:scale-110 flex items-center justify-center"
        style={{ zIndex: 1001 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <AiOutlineArrowUp className="text-lg" />
      </motion.button>
    </>
  );
};

export default Profile;
