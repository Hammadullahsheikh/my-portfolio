import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const projects = [
    {
      title: "Meme Generator!",
      description: "If a dog chews shoes whose shoes does he choose?",
      image: "./images/meme-generator.png",
      liveLink: "https://meme-generator-ruddy-tau.vercel.app/",
      codeLink: "https://github.com/Hammadullahsheikh/meme-generator"
    },
    {
      title: "React Ecommerce!",
      description: "If a dog chews shoes whose shoes does he choose?",
      image: "./images/react-ecommerce.png",
      liveLink: "https://react-ecommerce-snowy-two.vercel.app/",
      codeLink: "https://github.com/Hammadullahsheikh/react-ecommerce"
    },
    {
      title: "Blogging-App!",
      description: "If a dog chews shoes whose shoes does he choose?",
      image: "./images/dropbox.png",
      liveLink: "https://blogging-app-beryl.vercel.app",
      codeLink: "https://github.com/Hammadullahsheikh/blogging-app"
    },
    {
      title: "StopWatch!",
      description: "If a dog chews shoes whose shoes does he choose?",
      image: "./images/stopwatch.png",
      liveLink: "https://hammadullahsheikh.github.io/stopWatch/",
      codeLink: "https://github.com/Hammadullahsheikh/stopWatch"
    },
    {
      title: "TossApp!",
      description: "If a dog chews shoes whose shoes does he choose?",
      image: "./images/tossapp.png",
      liveLink: "https://hammadullahsheikh.github.io/toss-app/",
      codeLink: "https://github.com/Hammadullahsheikh/toss-app"
    },
    {
      title: "Salt n Pepper Clone!",
      description: "If a dog chews shoes whose shoes does he choose?",
      image: "./images/snp.png",
      liveLink: "https://hammadullahsheikh.github.io/s-n-p-responsive/",
      codeLink: "https://github.com/Hammadullahsheikh/s-n-p-responsive"
    },
    {
      title: "PrizeOye Clone!",
      description: "If a dog chews shoes whose shoes does he choose?",
      image: "./images/prizeoye.png",
      liveLink: "https://hammadullahsheikh.github.io/price0ye.pk/",
      codeLink: "https://github.com/Hammadullahsheikh/price0ye.pk"
    },
    {
      title: "Shopping Web Clone!",
      description: "If a dog chews shoes whose shoes does he choose?",
      image: "./images/noon.png",
      liveLink: "https://hammadullahsheikh.github.io/noon/",
      codeLink: "https://github.com/Hammadullahsheikh/noon"
    },
    {
      title: "Form!",
      description: "If a dog chews shoes whose shoes does he choose?",
      image: "./images/form.png",
      liveLink: "https://hammadullahsheikh.github.io/form-website/",
      codeLink: "https://github.com/Hammadullahsheikh/form-website"
    },
  ];

  return (
    <div className='mt-20 p-10'>
      <div>
        <h1 className='text-center text-5xl p-10 text-yellow-400 font-semibold'>My Projects</h1>
        <div className='flex justify-center gap-10 mt-10 flex-wrap'>
          {projects.map((project, index) => (
            <div key={index} className="card bg-base-100 w-96 shadow-xl transition-transform transform hover:scale-80 hover:shadow-2xl rounded-lg overflow-hidden">
              <figure className="overflow-hidden">
                <img src={project.image} alt={project.title} className="object-cover w-full h-48 transition-transform duration-300 transform hover:scale-110" />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-xl font-bold">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
                <div className="card-actions justify-between mt-4">
                  <a href={project.liveLink} className="badge badge-outline flex items-center px-4 py-2 border border-yellow-400 text-yellow-400 transition duration-200 hover:bg-yellow-400 hover:text-white rounded-lg">
                    <FontAwesomeIcon icon={faEye} className="mr-2" /> View Web
                  </a>
                  <a href={project.codeLink} className="badge badge-outline flex items-center px-4 py-2 border border-yellow-400 text-yellow-400 transition duration-200 hover:bg-yellow-400 hover:text-white rounded-lg">
                    <FontAwesomeIcon icon={faCodeBranch} className="mr-2" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
