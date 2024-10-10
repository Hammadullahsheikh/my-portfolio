import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen mt-10 bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl mt-10 bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-yellow-500 mb-4">About Me</h1>
        <p className="text-lg mb-4">
          Hello! I'm Hammad Ullah, a passionate web developer with a love for creating beautiful and functional web applications. I specialize in front-end development using modern JavaScript frameworks and libraries, particularly React.
        </p>
        <p className="text-lg mb-4">
          With a strong foundation in HTML, CSS, and JavaScript, I enjoy transforming design ideas into interactive experiences. I thrive on solving problems and continuously seek to expand my skill set to stay current with the latest industry trends.
        </p>
        <p className="text-lg mb-4">
          When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
        </p>
        <h2 className="text-2xl font-bold text-yellow-500 mt-8 mb-4">My Skills</h2>
        <ul className="list-disc list-inside mb-4">
          <li>HTML & CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Responsive Web Design</li>
          <li>Version Control (Git)</li>
        </ul>
        <h2 className="text-2xl font-bold text-yellow-500 mt-8 mb-4">Get in Touch</h2>
        <p className="text-lg">
          Feel free to reach out if you'd like to connect or collaborate on a project! You can find my contact details on the <a href="/contact" className="text-yellow-500 underline">Contact</a> page.
        </p>
      </div>
    </div>
  );
};

export default About;
