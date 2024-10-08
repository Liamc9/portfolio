import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, CogIcon, LoginIcon, ScriptIcon, DataIcon, CodeIcon, HomeIcon } from '../../assets/Icons'; // import common icons from CustomIcons

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className="relative">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 h-16 w-min flex items-center justify-between px-4 z-50 ">
        <div className="flex flex-row gap-6">
          <button
            className=""
            onClick={toggleSideNav}
          >
            <MenuIcon className="w-8 h-8" />
          </button>

        </div>
        
          
      </div>

      {/* SideNav Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSideNav}
      ></div>

      {/* SideNav */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-gray-800 text-gray-100 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-700">
          <h1 className="text-3xl font-semibold">My Portfolio</h1>
          <button
            className="text-gray-500 focus:outline-none focus:bg-gray-700"
            onClick={toggleSideNav}
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-grow overflow-y-auto">
          <nav className="space-y-2">
            <Link to="/home" className="flex items-center py-2 px-8 text-gray-200 hover:bg-gray-700 hover:bg-opacity-25 transition-colors duration-200">
              <HomeIcon className="w-5 h-5 mr-3" />
              <span>Home</span>
            </Link>
            <Link to="/webdev" className="flex items-center py-2 px-8 text-gray-200 hover:bg-gray-700 hover:bg-opacity-25 transition-colors duration-200">
              <CodeIcon className="w-5 h-5 mr-3" />
              <span>Web Development</span>
            </Link>
            <Link to="/scriptlist" className="flex items-center py-2 px-8 text-gray-200 hover:bg-gray-700 hover:bg-opacity-25 transition-colors duration-200">
              <ScriptIcon className="w-5 h-5 mr-3" />
              <span>Scripts and Algorithms</span>
            </Link>
            <Link to="/dataAnalytics" className="flex items-center py-2 px-8 text-gray-200 hover:bg-gray-700 hover:bg-opacity-25 transition-colors duration-200">
              <DataIcon className="w-5 h-5 mr-3" />
              <span>Data Analytics</span>
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-center space-y-2 p-4 border-t border-gray-700">
          <Link to="/settings" className="flex items-center w-full py-2 px-8 text-gray-200 hover:bg-gray-700 hover:bg-opacity-25 transition-colors duration-200">
            <CogIcon className="w-5 h-5 mr-3" />
            <span>Settings</span>
          </Link>
          <Link to="/login" className="flex items-center w-full py-2 px-8 text-gray-200 hover:bg-gray-700 hover:bg-opacity-25 transition-colors duration-200">
            <LoginIcon className="w-5 h-5 mr-3" />
            <span>Signup/Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
