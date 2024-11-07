import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaGithub, FaBars, FaTimes, FaFolderOpen } from 'react-icons/fa';
import { RxResume } from 'react-icons/rx';
import clsx from 'clsx';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);  // Track the state of menu open or closed
  const menuRef = useRef(null);

  const links = [
    { name: 'Home', icon: <FaHome />, path: '/' },
    { name: 'About', icon: <FaUser />, path: '/about' },
    { name: 'Experience', icon: <FaBriefcase />, path: '/experience' },
    { name: 'Contact', icon: <FaEnvelope />, path: '/contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);  // Close the mobile menu when a link is clicked
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);  // Close the menu when clicking outside
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderLinks = () => (
    links.map(({ name, icon, path }) => (
      <Link
        key={name}
        to={path}
        onClick={handleLinkClick}
        className={clsx(
          'flex items-center my-2 p-2 border-b-2 border-transparent transition-all duration-300 rounded-md',
          location.pathname === path ? 'text-white font-bold border-white' : 'text-gray-300 hover:border-white hover:bg-gray-700'
        )}
      >
        <span className="mr-2">{icon}</span>
        {name}
      </Link>
    ))
  );

  return (
    <nav className="bg-gray-800 fixed top-0 left-0 w-full shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Clicking on this will navigate to the home page */}
        <Link
          to="/"
          className="text-3xl font-bold text-yellow-400 transition-all duration-300"
        >
          Hammad Ullah...
        </Link>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className="text-gray-300"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden lg:flex space-x-4 ml-auto">
          {renderLinks()}
          <Link
            to="/projects"
            onClick={handleLinkClick}
            className={clsx(
              'flex items-center my-2 p-2 border-b-2 border-transparent transition-all duration-300 rounded-md',
              location.pathname === '/projects' ? 'text-white font-bold border-white' : 'text-gray-300 hover:border-white hover:bg-gray-700'
            )}
          >
            <FaFolderOpen className="mr-2" />
            Projects
          </Link>
          <a
            className="flex items-center my-2 p-2 bg-yellow-500 text-white rounded-md transition-all duration-300 hover:bg-yellow-600 hover:shadow-lg"
            href="/images/hammad_ullah_cv.pdf"
            onClick={handleLinkClick}
            download="Hammad_Ullah_Resume.pdf"
          >
            <RxResume className="mr-2" />
            Resume
          </a>
          <Link
            to="https://github.com/Hammadullahsheikh"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="flex items-center my-2 p-2 bg-yellow-500 text-white rounded-md transition-all duration-300 hover:bg-yellow-600 hover:shadow-lg"
          >
            <FaGithub className="mr-2" />
            GitHub
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          ref={menuRef}
          className="flex flex-col items-center lg:hidden bg-gray-800 transition-all duration-300 ease-in-out"
        >
          {renderLinks()}
          <Link
            to="/projects"
            onClick={handleLinkClick}
            className={clsx(
              'flex items-center my-2 p-2 border-b-2 border-transparent transition-all duration-300 rounded-md',
              location.pathname === '/projects' ? 'text-white font-bold border-white' : 'text-gray-300 hover:border-white hover:bg-gray-700'
            )}
          >
            <FaFolderOpen className="mr-2" />
            Projects
          </Link>
          <a
            className="flex items-center my-2 p-2 bg-yellow-500 text-white rounded-md transition-all duration-300 hover:bg-yellow-600 hover:shadow-lg"
            href="/images/hammad_ullah_cv.pdf"
            onClick={handleLinkClick}
            download="Hammad_Ullah_Resume.pdf"
          >
            <RxResume className="mr-2" />
            Resume
          </a>
          <Link
            to="https://github.com/Hammadullahsheikh"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="flex items-center my-2 p-2 bg-yellow-500 text-white rounded-md transition-all duration-300 hover:bg-yellow-600 hover:shadow-lg"
          >
            <FaGithub className="mr-2" />
            GitHub
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
