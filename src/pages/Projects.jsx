import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const projects = [
    {
      title: "Meme Generator!",
      description: "Generate memes easily with this fun project!",
      image: "./images/meme-generator.png",
      liveLink: "https://meme-generator-ruddy-tau.vercel.app/",
      codeLink: "https://github.com/Hammadullahsheikh/meme-generator"
    },
    {
      title: "React Ecommerce!",
      description: "A simple eCommerce app built with React.",
      image: "./images/react-ecommerce.png",
      liveLink: "https://react-ecommerce-snowy-two.vercel.app/",
      codeLink: "https://github.com/Hammadullahsheikh/react-ecommerce"
    },
    {
      title: "Blogging-App!",
      description: "A blogging platform for writing and reading articles.",
      image: "./images/dropbox.png",
      liveLink: "https://blogging-app-beryl.vercel.app",
      codeLink: "https://github.com/Hammadullahsheikh/blogging-app"
    },
    {
      title: "StopWatch!",
      description: "A simple stopwatch app built using React.",
      image: "./images/stopwatch.png",
      liveLink: "https://hammadullahsheikh.github.io/stopWatch/",
      codeLink: "https://github.com/Hammadullahsheikh/stopWatch"
    },
    {
      title: "TossApp!",
      description: "A fun coin toss app for making random decisions.",
      image: "./images/tossapp.png",
      liveLink: "https://hammadullahsheikh.github.io/toss-app/",
      codeLink: "https://github.com/Hammadullahsheikh/toss-app"
    },
    {
      title: "Salt n Pepper Clone!",
      description: "A clone of the Salt n Pepper food delivery site.",
      image: "./images/snp.png",
      liveLink: "https://hammadullahsheikh.github.io/s-n-p-responsive/",
      codeLink: "https://github.com/Hammadullahsheikh/s-n-p-responsive"
    },
    {
      title: "PrizeOye Clone!",
      description: "A clone of the PrizeOye website for online gaming.",
      image: "./images/prizeoye.png",
      liveLink: "https://hammadullahsheikh.github.io/price0ye.pk/",
      codeLink: "https://github.com/Hammadullahsheikh/price0ye.pk"
    },
    {
      title: "Shopping Web Clone!",
      description: "A shopping website clone with modern UI.",
      image: "./images/noon.png",
      liveLink: "https://hammadullahsheikh.github.io/noon/",
      codeLink: "https://github.com/Hammadullahsheikh/noon"
    },
    {
      title: "Form!",
      description: "A simple form with validation built with React.",
      image: "./images/form.png",
      liveLink: "https://hammadullahsheikh.github.io/form-website/",
      codeLink: "https://github.com/Hammadullahsheikh/form-website"
    },
  ];

  return (
    <div className='mt-10 p-10'>
      
      <h2 className="text-4xl  sm:text-5xl text-center font-extrabold mt-[80px] text-yellow-600 mb-10">My Projects</h2>
      <div className='flex justify-center gap-10 mt-10 flex-wrap'>
        {projects.map((project, index) => (
          <div
            key={index}
            className="card bg-base-100 w-96 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden mb-10"
          >
            <figure className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-48 transition-transform duration-300 transform hover:scale-110"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-2xl font-semibold text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-600">{project.description}</p>
              <div className="card-actions justify-between mt-6">
                <a
                  href={project.liveLink}
                  className="btn btn-outline btn-yellow-500 px-5 py-2 text-lg font-semibold rounded-lg transform transition duration-200 hover:bg-yellow-400 hover:text-white hover:scale-105"
                >
                  <FontAwesomeIcon icon={faEye} className="mr-2" /> View Web
                </a>
                <a
                  href={project.codeLink}
                  className="btn btn-outline btn-yellow-500 px-5 py-2 text-lg font-semibold rounded-lg transform transition duration-200 hover:bg-yellow-400 hover:text-white hover:scale-105"
                >
                  <FontAwesomeIcon icon={faCodeBranch} className="mr-2" /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
