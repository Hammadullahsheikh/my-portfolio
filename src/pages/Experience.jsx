import React from 'react';

const Experience = () => {
  const experiences = [
    {
      jobTitle: 'Frontend Developer',
      company: 'Tech Solutions',
      duration: 'June 2021 - Present',
      description: 'Developing user-friendly web applications with a focus on responsive design and performance.',
    },
    {
      jobTitle: 'Web Developer Intern',
      company: 'Creative Agency',
      duration: 'January 2021 - May 2021',
      description: 'Assisted in the development of client websites and collaborated with designers to improve user experience.',
    },
    {
      jobTitle: 'Software Engineer Intern',
      company: 'Innovatech',
      duration: 'June 2020 - August 2020',
      description: 'Worked on backend services using Node.js and contributed to various features of the company’s product.',
    },
    {
      jobTitle: 'Junior Developer',
      company: 'StartUp Inc.',
      duration: 'September 2019 - December 2019',
      description: 'Supported the development team in building applications and maintaining existing projects.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-yellow-500 mb-6 text-center">My Experience</h1>
        <div className="space-y-4">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300"
            >
              <h2 className="text-xl font-semibold text-yellow-500">{experience.jobTitle}</h2>
              <h3 className="text-gray-600">{experience.company}</h3>
              <p className="text-gray-500">{experience.duration}</p>
              <p className="text-gray-700">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
