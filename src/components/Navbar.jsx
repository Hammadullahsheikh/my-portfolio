import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaFolderOpen, FaBriefcase, FaEnvelope, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const links = [
    { name: 'Home', icon: <FaHome />, path: '/' },
    { name: 'About', icon: <FaUser />, path: '/about' },
    { name: 'Experience', icon: <FaBriefcase />, path: '/experience' },
    { name: 'Contact', icon: <FaEnvelope />, path: '/contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  const toggleMenu = () => {
    setIsOpen(true); // Always set it to open on toggle button
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu on close button
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-yellow-100 fixed top-0 left-0 w-full shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Brand Name on the Left */}
        <Link
          to="/"
          className="text-2xl font-bold text-yellow-500 transition-all duration-300 hover:scale-110"
        >
          Hammad Ullah
        </Link>

        {/* Mobile Toggle Button */}
        <div className="flex lg:hidden ml-auto">
          <button onClick={isOpen ? closeMenu : toggleMenu} className="text-yellow-500">
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Desktop Links Centered */}
        <div className="hidden lg:flex space-x-4 mx-auto">
          {links.map(({ name, icon, path }) => (
            <div key={name} className="group relative">
              <Link
                to={path}
                onClick={handleLinkClick}
                className={`flex items-center p-2 border-2 border-transparent transition-all duration-300 rounded-md ${location.pathname === path ? 'text-yellow-600 font-bold' : 'text-yellow-500'} hover:border-yellow-600 hover:bg-transparent hover:shadow-2xl hover:rounded-md`}
              >
                <span className="mr-2">{icon}</span>
                {name}
              </Link>
              <span className={`absolute left-0 bottom-0 h-1 w-0 bg-yellow-600 transition-all duration-300 group-hover:w-full`} />
            </div>
          ))}
        </div>

        {/* Projects and GitHub Links on the Right */}
        <div className="hidden lg:flex ml-auto space-x-4">
          <Link
            to="/projects"
            onClick={handleLinkClick}
            className="flex items-center p-2 bg-yellow-500 text-white rounded-md transition-all duration-300 hover:bg-yellow-600 hover:shadow-lg"
          >
            <FaFolderOpen className="mr-2" />
            Projects
          </Link>
          <Link
            to="https://github.com/yourusername" // Update with your GitHub username
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-2 bg-yellow-500 text-white rounded-md transition-all duration-300 hover:bg-yellow-600 hover:shadow-lg"
          >
            <FaGithub className="mr-2" />
            GitHub
          </Link>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div ref={menuRef} className="flex flex-col items-center lg:hidden">
          {links.map(({ name, icon, path }) => (
            <Link
              key={name}
              to={path}
              onClick={handleLinkClick}
              className={`flex items-center my-2 p-2 border-2 border-transparent transition-all duration-300 rounded-md ${location.pathname === path ? 'text-yellow-600 font-bold' : 'text-yellow-500'} hover:border-yellow-600 hover:bg-transparent hover:shadow-2xl hover:rounded-md`}
            >
              <span className="mr-2">{icon}</span>
              {name}
            </Link>
          ))}
          {/* Projects Link in Mobile Menu */}
          <Link
            to="/projects"
            onClick={handleLinkClick}
            className={`flex items-center my-2 p-2 bg-yellow-500 text-white rounded-md transition-all duration-300 hover:bg-yellow-600 hover:shadow-lg`}
          >
            <FaFolderOpen className="mr-2" />
            Projects
          </Link>
          {/* GitHub Link in Mobile Menu */}
          <Link
            to="https://github.com/yourusername" // Update with your GitHub username
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className={`flex items-center my-2 p-2 bg-yellow-500 text-white rounded-md transition-all duration-300 hover:bg-yellow-600 hover:shadow-lg`}
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
