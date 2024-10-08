import React, { useRef, useEffect, useState } from 'react';
import PortfolioMainSlider from '../components/PortfolioMainSlider';
import { ButtonArrowIcon } from '../assets/Icons';
import { useTab } from '../components/TabContext'; // Import the useTab hook to access activeTab

// Import the components associated with each tab
import SearchPage from '../components/SearchPage';
import CV from '../components/CV';
import WebDev from '../components/WebDev';

const Home = () => {
  const contentRef = useRef(null);
  const sliderRef = useRef(null);
  const isScrolling = useRef(false);
  const [isSliderInView, setIsSliderInView] = useState(true);

  // Use the activeTab from the global context
  const { activeTab } = useTab();

  useEffect(() => {
    // Intersection Observer to detect when the slider is in view
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust threshold as needed
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        setIsSliderInView(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleWheel = (event) => {
      if (isScrolling.current) {
        event.preventDefault();
        return;
      }

      const deltaY = event.deltaY;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // If user scrolls down and is at the top section
      if (deltaY > 0 && scrollTop < window.innerHeight / 2) {
        event.preventDefault();
        isScrolling.current = true;
        contentRef.current.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          isScrolling.current = false;
        }, 800); // Adjust timeout based on scroll duration
      }
      // If user scrolls up and is at the bottom section
      else if (deltaY < 0 && scrollTop >= window.innerHeight / 2) {
        event.preventDefault();
        isScrolling.current = true;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          isScrolling.current = false;
        }, 800); // Adjust timeout based on scroll duration
      }
    };

    // Add wheel event listener to the window
    window.addEventListener('wheel', handleWheel, { passive: false });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Mapping of activeTab values to components
  const tabComponents = {
    'Projects': <SearchPage />,
    'CV': <CV />,
    'WebDev': <WebDev />,
    // Add more mappings as needed
  };

  const renderContent = () => {
    // Return the component corresponding to the activeTab
    // If no component is mapped, return null or a default component
    return tabComponents[activeTab] || null;
  };

  return (
    <div className="min-h-screen">
      {/* Slider Section */}
      <div ref={sliderRef} className="relative">
        <PortfolioMainSlider isPlaying={isSliderInView} />

        {/* Scroll Down Button with shadow */}
        <div className="absolute bottom-0 inset-x-0 flex justify-center z-20 ">
          <div className="absolute inset-x-0 h-24 pointer-events-none bg-gradient-to-t from-black opacity-50"></div>
          <div className="relative">
            {/* Shadow coming up from the bottom */}
            <div
              className="absolute inset-x-0 h-24 pointer-events-none"
              style={{ height: '60px' }}
            />
            <button
              onClick={() => {
                contentRef.current.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex flex-col items-center cursor-pointer text-white mb-7"
            >
              <span className="animate-bounce">
                <ButtonArrowIcon
                  className="h-8 w-8 transform rotate-90"
                  aria-hidden="true"
                />
              </span>
              {/* Use the global activeTab */}
              <span className="mt-2 text-xl font-semibold">
                View {activeTab}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Additional Content Below Slider */}
      <div ref={contentRef} className="bg-white py-16 px-8">
        {/* Render content based on activeTab */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Home;
