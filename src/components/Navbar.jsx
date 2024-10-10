import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaFolderOpen, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const links = [
    { name: 'Home', icon: <FaHome />, path: '/' },
    { name: 'About', icon: <FaUser />, path: '/about' },
    { name: 'Projects', icon: <FaFolderOpen />, path: '/projects' },
    { name: 'Experience', icon: <FaBriefcase />, path: '/experience' },
    { name: 'Contact', icon: <FaEnvelope />, path: '/contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
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
    <nav className="bg-yellow-100 relative shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link
          to="/"
          className="text-2xl font-bold text-yellow-500 transition-all duration-300 hover:scale-110"
        >
          Hammad Ullah
        </Link>

        {/* Mobile Toggle Button */}
        <div className="flex lg:hidden">
          <button onClick={toggleMenu} className="text-yellow-500">
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-4 relative">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
