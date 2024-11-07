import React from 'react';

const Experience = () => {
  const projects = [
    {
      projectTitle: 'Meme Generator',
      role: 'Frontend Developer',
      duration: 'April 2023 - Present',
      description: 'Created a responsive meme generator app with React, allowing users to generate custom memes by adding text to images.',
      techStack: 'React, CSS, JavaScript',
      link: 'https://meme-generator-ruddy-tau.vercel.app/',
    },
    {
      projectTitle: 'React Ecommerce',
      role: 'Full-Stack Developer',
      duration: 'February 2023 - March 2023',
      description: 'Developed an ecommerce website with a fully functional shopping cart, product filtering, and user authentication.',
      techStack: 'React, Node.js, MongoDB, Express',
      link: 'https://react-ecommerce-snowy-two.vercel.app/',
    },
    {
      projectTitle: 'Blogging App',
      role: 'Frontend Developer',
      duration: 'January 2023 - February 2023',
      description: 'Built a blogging platform where users can write, edit, and manage blog posts. Focused on responsive design and seamless user experience.',
      techStack: 'React, CSS, Firebase',
      link: 'https://blogging-app-beryl.vercel.app',
    },
    {
      projectTitle: 'Stopwatch App',
      role: 'Solo Developer',
      duration: 'December 2022',
      description: 'Developed a simple stopwatch app that tracks time intervals with start, stop, and reset functionality.',
      techStack: 'JavaScript, CSS',
      link: 'https://hammadullahsheikh.github.io/stopWatch/',
    },
    {
      projectTitle: 'Salt n Pepper Clone',
      role: 'Frontend Developer',
      duration: 'November 2022',
      description: 'Built a responsive clone of the Salt n Pepper website, focusing on layout and CSS styling to match the original design.',
      techStack: 'HTML, CSS, JavaScript',
      link: 'https://hammadullahsheikh.github.io/s-n-p-responsive/',
    },
    {
      projectTitle: 'PrizeOye Clone',
      role: 'Frontend Developer',
      duration: 'October 2022',
      description: 'Developed a clone of PrizeOye’s website with responsive design and interactive features using HTML, CSS, and JavaScript.',
      techStack: 'HTML, CSS, JavaScript',
      link: 'https://hammadullahsheikh.github.io/price0ye.pk/',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center mt-10 p-6">
      <div className="max-w-6xl w-full bg-white rounded-lg mt-10 shadow-lg p-8">
        
        <h2 className="text-4xl  sm:text-5xl text-center font-extrabold mt-[80px] text-yellow-600 mb-10">My Project Experience</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
            >
              <h2 className="text-2xl font-semibold text-yellow-600">{project.projectTitle}</h2>
              <h3 className="text-xl text-gray-600">{project.role}</h3>
              <p className="text-sm text-gray-500 mt-1">{project.duration}</p>
              <p className="text-base text-gray-700 mt-3">{project.description}</p>
              <p className="text-sm text-gray-500 mt-3">Tech Stack: <span className="font-semibold">{project.techStack}</span></p>
              <a
                href={project.link}
                className="text-yellow-500 mt-4 block hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
