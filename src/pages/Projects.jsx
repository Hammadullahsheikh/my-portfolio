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
    <div className='mt-10 p-5 sm:p-10'>
      <h2 className="text-4xl sm:text-5xl text-center font-extrabold mt-10 text-yellow-600 mb-10">My Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center'>
        {projects.map((project, index) => (
          <div
            key={index}
            className="card bg-gray-100 w-full max-w-xs shadow-lg transform transition-transform hover:scale-105 rounded-lg overflow-hidden"
          >
            <figure className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-40 sm:h-48 transition-transform duration-300 transform hover:scale-110"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-xl font-semibold text-white">{project.title}</h2>
              <p className="text-gray-400 text-sm">{project.description}</p>
              <div className="card-actions justify-between mt-4">
                <a
                  href={project.liveLink}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-800 bg-yellow-400 rounded-md transition-transform duration-200 transform hover:bg-yellow-500 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faEye} /> View
                </a>
                <a
                  href={project.codeLink}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-800 bg-yellow-400 rounded-md transition-transform duration-200 transform hover:bg-yellow-500 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faCodeBranch} /> Code
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
