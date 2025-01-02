// Home.jsx

import React, { useRef, useEffect, useState } from 'react';
import PortfolioMainSlider from '../components/PortfolioMainSlider';
import { ButtonArrowIcon } from '../assets/Icons';
import { useTab } from '../components/TabContext';

// Components associated with each tab
import Overview from '../components/Overview';
import Resume from '../components/Resume';
import Projects from '../components/Projects';

// Optional: Import an icon library or use a custom icon for the CV button
// Example using Heroicons (install via npm: npm install @heroicons/react)
// import { DocumentDownloadIcon } from '@heroicons/react/solid';

const Home = () => {
  const contentRef = useRef(null);
  const sliderRef = useRef(null);
  const isScrolling = useRef(false);
  const [isSliderInView, setIsSliderInView] = useState(true);

  // Use the activeTab from the global context
  const { activeTab } = useTab();

  // Intersection Observer to detect when the slider is in view
  useEffect(() => {
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
      // If we're already programmatically scrolling, prevent user scroll
      if (isScrolling.current) {
        event.preventDefault();
        return;
      }

      // Only intercept the scroll if the slider is in view
      // Once user is fully in the content section, let them scroll freely
      if (!isSliderInView) {
        return;
      }

      // Intercept the scroll event (don’t do the normal scroll)
      event.preventDefault();

      const deltaY = event.deltaY;

      // Scrolling down from the slider
      if (deltaY > 0) {
        isScrolling.current = true;
        contentRef.current.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          isScrolling.current = false;
        }, 800);
      }
      // Scrolling up within the slider
      else if (deltaY < 0) {
        isScrolling.current = true;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          isScrolling.current = false;
        }, 800);
      }
    };

    // Add wheel event listener to the window
    window.addEventListener('wheel', handleWheel, { passive: false });

    // Clean up on component unmount
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isSliderInView]);

  // Map activeTab to the correct component
  const tabComponents = {
    Projects: <Projects />,
    Resume: <Resume />,
    Overview: <Overview />,
    // More mappings as needed...
  };

  const renderContent = () => {
    // Return the component corresponding to activeTab (or null / fallback)
    return tabComponents[activeTab] || null;
  };

  // CV PDF URL from Firebase Storage
  const CV_URL =
    'https://firebasestorage.googleapis.com/v0/b/portfolio-cc7d3.appspot.com/o/Liam_Crowley_CV.pdf?alt=media&token=d9bb5ade-2258-4cf7-9a6f-a4fefa06c2f9'; // Replace with your actual CV URL

  return (
    <div className="min-h-screen relative">
      {/* Slider Section */}
      <div ref={sliderRef} className="relative">
        <PortfolioMainSlider isPlaying={isSliderInView} />

        {/* Scroll Down Button */}
        <div className="absolute bottom-0 inset-x-0 flex justify-center z-20">
          <div className="absolute inset-x-0 h-24 pointer-events-none bg-gradient-to-t from-black opacity-50"></div>
          <div className="relative">
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
              <span className="mt-2 text-xl font-semibold">
                View {activeTab}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Additional Content Below Slider */}
      <div ref={contentRef} className="bg-white py-16 px-8">
        {renderContent()}
      </div>

      {/* Floating CV Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.open(CV_URL, '_blank')}
          className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full w-24 h-24 shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="View CV"
          title="View CV"
        >
          <span className="text-sm font-semibold">View CV</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
