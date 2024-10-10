import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaFolderOpen, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', icon: <FaHome /> },
    { name: 'About', icon: <FaUser /> },
    { name: 'Projects', icon: <FaFolderOpen /> },
    { name: 'Experience', icon: <FaBriefcase /> },
    { name: 'Contact', icon: <FaEnvelope /> },
  ];

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="relative bg-white shadow-lg">
      <div className="container px-6 py-4 mx-auto flex justify-between items-center">
        <Link className='text-2xl font-bold text-yellow-500' to="/" aria-label="Home">
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-full transition-all duration-300 hover:bg-yellow-600 hover:shadow-lg">
            Hammad Ullah
          </button>
        </Link>

        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-label="Toggle menu"
            className="text-yellow-500 hover:text-yellow-600 focus:outline-none"
            aria-expanded={isOpen}
          >
            {!isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-yellow-100 rounded-lg shadow-md ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'} md:mt-0 md:p-0 md:top-0 md:relative md:bg-white md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}>
          <div className="flex flex-col md:flex-row md:mx-6">
            {links.map(({ name, icon }) => (
              <Link
                key={name}
                to={name.toLowerCase()}
                onClick={handleLinkClick}
                className={`flex items-center my-2 p-2 transition-transform duration-300 transform hover:scale-105 hover:bg-yellow-200 rounded-md ${location.pathname === `/${name.toLowerCase()}` ? 'text-yellow-600 font-bold' : 'text-yellow-500'} md:mx-4 md:my-0`}
                aria-label={name}
              >
                <span className="mr-2">{icon}</span>
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
