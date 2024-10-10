import React, { useState } from 'react';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      title: 'Project One',
      description: 'A web application to track tasks efficiently.',
      link: 'https://example.com/project-one',
      image: 'https://via.placeholder.com/200', // Replace with your project image
    },
    {
      title: 'Project Two',
      description: 'An e-commerce platform built with React and Node.js.',
      link: 'https://example.com/project-two',
      image: 'https://via.placeholder.com/200',
    },
    {
      title: 'Project Three',
      description: 'A personal blog sharing thoughts on web development.',
      link: 'https://example.com/project-three',
      image: 'https://via.placeholder.com/200',
    },
    {
      title: 'Project Four',
      description: 'A weather app providing real-time updates using an API.',
      link: 'https://example.com/project-four',
      image: 'https://via.placeholder.com/200',
    },
    {
      title: 'Project Five',
      description: 'A task management tool for teams to collaborate effectively.',
      link: 'https://example.com/project-five',
      image: 'https://via.placeholder.com/200',
    },
    {
      title: 'Project Six',
      description: 'A portfolio website to showcase projects and skills.',
      link: 'https://example.com/project-six',
      image: 'https://via.placeholder.com/200',
    },
  ];

  const handleCardClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <h1 className="col-span-full text-4xl font-bold text-yellow-500 mb-6 text-center">My Projects</h1>
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 
              transform hover:scale-105 hover:bg-yellow-100 
              ${activeIndex === index ? 'shadow-lg shadow-yellow-700' : 'shadow-md'}
              hover:shadow-xl hover:shadow-yellow-600`}
          >
            <img src={project.image} alt={project.title} className="w-full h-36 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-yellow-500 mb-1">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {project.title}
                </a>
              </h2>
              <p className="text-sm text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
