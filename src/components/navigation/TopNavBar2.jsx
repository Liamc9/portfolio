import React, { useEffect, useContext } from 'react';
import SideNav from './SideNav';
import { useTab } from '../TabContext'; // Import the useTab hook
import { DataContext } from '../DataContext'; // Import the DataContext
import { Link } from 'react-router-dom';

const TopNavBar2 = () => {
  const { activeTab, setActiveTab } = useTab(); // Use the shared activeTab from context
  const { slidesData } = useContext(DataContext); // Get slidesData from DataContext

  // Generate menuItems from slidesData
  const menuItems = slidesData ? slidesData.map((slide) => slide.title) : [];

  const handleTabClick = (item) => {
    setActiveTab(item); // Update shared activeTab state
  };

  return (
    <div className="absolute top-0 left-0 w-full z-50 flex items-center h-[62px] whitespace-nowrap font-semibold text-[15px] bg-[var(--beach-bg)]">
      <SideNav />
      <p className='absolute left-16 text-3xl font-bold'>Liam Crowley</p>
      
      <div className="hidden sm:flex mx-auto space-x-8 md:text-xl">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => handleTabClick(item)}
            className={`${
              item === activeTab
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-black'
            } transition-all duration-300 hover:text-blue-400`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="absolute right-8 flex items-center header-icons text-lg">
        <Link to='/login' className="rounded-full bg-black text-white p-2 px-6 hover:bg-gray-800 hover:scale-105 transition-all duration-300 focus:translate-y-[2px]">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default TopNavBar2;
