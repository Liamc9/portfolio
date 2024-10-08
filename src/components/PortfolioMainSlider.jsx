import React, { useState, useEffect, useContext } from 'react';
import { ButtonArrowIcon } from '../assets/Icons';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useTab } from './TabContext';
import { DataContext } from './DataContext';

const PortfolioMainSlider = ({ isPlaying }) => {
  const { slidesData } = useContext(DataContext);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const slideDuration = 5000; // 5 seconds

  // Use activeTab from the context
  const { activeTab, setActiveTab } = useTab();

  // Update currentSlideIndex when activeTab changes in the context
  useEffect(() => {
    if (slidesData.length > 0) {
      const tabIndex = slidesData.findIndex(
        (slide) => slide.title === activeTab
      );
      if (tabIndex !== -1 && tabIndex !== currentSlideIndex) {
        setCurrentSlideIndex(tabIndex);
        setProgress(0); // Reset progress on tab change
      }
    }
  }, [activeTab, slidesData, currentSlideIndex]);

  useEffect(() => {
    let progressInterval;

    if (isPlaying && slidesData.length > 0) {
      setProgress(0); // Reset progress when starting
      const progressStep = 100 / (slideDuration / 100); // Update every 100ms

      progressInterval = setInterval(() => {
        setProgress((prevProgress) => {
          const nextProgress = prevProgress + progressStep;
          if (nextProgress >= 100) {
            clearInterval(progressInterval);
            handleNextSlide();
            return 0;
          }
          return nextProgress;
        });
      }, 100);
    }

    return () => {
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [isPlaying, currentSlideIndex, slidesData]);

  const handleNextSlide = () => {
    if (slidesData.length > 0) {
      const nextIndex =
        currentSlideIndex === slidesData.length - 1 ? 0 : currentSlideIndex + 1;
      setCurrentSlideIndex(nextIndex);
      setActiveTab(slidesData[nextIndex].title); // Update activeTab in context
    }
  };

  const handlePrevSlide = () => {
    if (slidesData.length > 0) {
      const prevIndex =
        currentSlideIndex === 0
          ? slidesData.length - 1
          : currentSlideIndex - 1;
      setCurrentSlideIndex(prevIndex);
      setActiveTab(slidesData[prevIndex].title); // Update activeTab in context
    }
  };

  const currentSlide =
    slidesData.length > 0 ? slidesData[currentSlideIndex] : null;

  // Preload images to prevent stuttering
  useEffect(() => {
    if (slidesData.length > 0) {
      slidesData.forEach((slide) => {
        const img1 = new Image();
        img1.src = slide.bottleBgImage;
        const img2 = new Image();
        img2.src = slide.bottleImage;
      });
    }
  }, [slidesData]);

  if (!currentSlide) {
    // You can replace this with a loader component if you have one
    return <div>Loading...</div>;
  }

  return (
    <>
    <style>
      {`
/* Transition classes for fade and slide animations */
.fade-slide-enter {
  opacity: 0;
  transform: translateX(100%);
}
.fade-slide-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 600ms ease-in-out, transform 600ms ease-in-out;
}
.fade-slide-exit {
  opacity: 1;
  transform: translateX(0);
}
.fade-slide-exit-active {
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 600ms ease-in-out, transform 600ms ease-in-out;
}

/* Progress Bar Styling */
.progress-bar {
  height: 100%;
  background-color: black;
  width: 0%;
}

@keyframes progressAnimation {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

/* Additional Styling for a Nicer Layout */
body {
  margin: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.slider-container {
  display: flex;
  flex-direction: column;
}

.slider-content {
  flex-grow: 1;
  position: relative;
}

.slider-navigation {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.slider-pagination {
  position: absolute;
  top: 20px;
  right: 20px;
  color: #333;
  font-weight: bold;
}

      `}
      </style>
      <div className="min-h-screen">
      <div
        className="relative h-screen w-full flex flex-col"
        style={{ backgroundColor: currentSlide.backgroundColor }}
      >
        {/* Hero Content with Transition */}
        <div className="relative flex-grow overflow-hidden">
          <TransitionGroup className="h-full">
            <CSSTransition
              key={currentSlide.id}
              timeout={600}
              classNames="fade-slide"
            >
              {/* Integrated HeroContent JSX */}
              <div className="flex md:flex-row flex-col md:space-x-20 h-full items-center py-12 px-4 transition-all duration-500 ease-in-out">
                {/* Left Side Content */}
                <div className="flex flex-col justify-between max-w-[320px] md:text-left text-center space-y-6 md:space-y-8">
                  <div>
                    <h3 className="uppercase text-sm tracking-widest font-semibold">
                      {currentSlide.header}
                    </h3>
                    <h1 className="font-garamond text-7xl font-light mt-2">
                      {currentSlide.title}
                    </h1>
                    <h2 className="font-garamond text-3xl font-light mt-4 mb-10">
                      {currentSlide.subtitle}
                    </h2>
                  </div>
                  <div>
                    <div className="font-garamond text-xl italic mb-4">
                      {currentSlide.contentTitle}
                    </div>
                    <div className="text-base leading-relaxed mb-6 tracking-tight">
                      {currentSlide.contentSubtitle}
                    </div>
                    <div className="flex items-center space-x-3 font-medium text-sm hover:text-blue-500 cursor-pointer">
                      <a
                        href={currentSlide.shopNowLink}
                        className="hover:underline"
                      >
                        Shop Now
                      </a>
                      <ButtonArrowIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Right Side Images */}
                <div className="flex justify-center items-center relative md:mt-0 mt-10">
                  <div className="relative">
                    <img
                      className="rounded-full object-cover transition-transform duration-500 ease-in-out"
                      src={currentSlide.bottleBgImage}
                      alt={`${currentSlide.title} background`}
                      style={{ width: '320px', height: '450px' }}
                    />
                    <img
                      className="absolute top-[25%] left-0 transform scale-150 transition-transform duration-500 ease-in-out"
                      src={currentSlide.bottleImage}
                      alt={`${currentSlide.title} bottle`}
                    />
                  </div>
                </div>
              </div>
              {/* End of integrated HeroContent JSX */}
            </CSSTransition>
          </TransitionGroup>

          {/* Navigation Buttons */}
          <div className="absolute bottom-32 right-10 z-10 flex space-x-4">
            <button
              onClick={handlePrevSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white bg-opacity-75 shadow-md hover:bg-opacity-100 transition duration-200"
            >
              <ButtonArrowIcon className="transform rotate-180" />
            </button>
            <button
              onClick={handleNextSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white bg-opacity-75 shadow-md hover:bg-opacity-100 transition duration-200"
            >
              <ButtonArrowIcon />
            </button>
          </div>

          {/* Pagination */}
          <div className="absolute right-10 top-10 text-base font-medium text-gray-800">
            {currentSlideIndex + 1} / {slidesData.length}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300">
            <div
              className="h-full bg-black transition-width duration-100"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PortfolioMainSlider;