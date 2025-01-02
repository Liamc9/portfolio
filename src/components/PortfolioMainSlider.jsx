// PortfolioMainSlider.js

import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ButtonArrowIcon } from '../assets/Icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useTab } from './TabContext';
import { DataContext } from './DataContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const SliderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  min-height: 100vh;
`;

const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  padding: 2rem 1rem;
  transition: all 0.5s ease-in-out;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 4rem 10rem;
    gap: 4rem;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  text-align: center;
  gap: 1.25rem;

  @media (min-width: 768px) {
    text-align: left;
    gap: 2rem;
  }

  h1 {
    font-family: 'Garamond', serif;
    font-weight: 300;
    margin: 0.5rem 0;
    font-size: 3rem;
    line-height: 1.2;

    @media (min-width: 768px) {
      font-size: 4rem;
    }
  }

  h2 {
    font-family: 'Garamond', serif;
    font-weight: 300;
    margin: 1rem 0 2rem;
    font-size: 1.25rem;
    line-height: 1.4;

    @media (min-width: 768px) {
      font-size: 2rem;
      margin-bottom: 3rem;
    }
  }
`;

const RightImages = styled.div`
  position: relative;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  @media (min-width: 768px) {
    margin-top: 0;
  }


  img.foregroundImage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: auto;
    transition: transform 0.5s ease-in-out;
  }
`;


/* Give it a high z-index, and use a more visible color if your slide background is dark. */
const ProgressBarContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.6rem;
  background-color: #d1d5db;
  z-index: 9999; /* Ensures it is on top */
`;

const Progress = styled.div`
  height: 100%;
  background-color:rgb(0, 0, 0); /* Change to white for contrast if slides are dark */
  width: ${(props) => props.width}%;
  transition: width 0.1s linear;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 2rem;
`;

const PortfolioMainSlider = ({ isPlaying }) => {
  const { slidesData } = useContext(DataContext);
  const { activeTab, setActiveTab } = useTab();
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef(null);

  const slideDuration = 5000; // 5 seconds

  // Update active slide based on activeTab
  useEffect(() => {
    if (slidesData.length > 0 && swiperRef.current) {
      const slideIndex = slidesData.findIndex(
        (slide) => slide.title === activeTab
      );
      if (slideIndex !== -1 && slideIndex !== swiperRef.current.realIndex) {
        swiperRef.current.slideTo(slideIndex);
      }
    }
  }, [activeTab, slidesData]);

  // Handle progress bar
  useEffect(() => {
    let interval;
    if (isPlaying) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          const nextProgress = prev + 100 / (slideDuration / 100);
          if (nextProgress >= 100) {
            return 100;
          }
          return nextProgress;
        });
      }, 100);
    } else {
      // If you want the progress bar to remain visible (or partially complete),
      // remove this line. Otherwise, it resets to 0 on pause:
      setProgress(0);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, activeTab]);

  // Handle Swiper autoplay
  useEffect(() => {
    if (swiperRef.current) {
      if (isPlaying) {
        swiperRef.current.autoplay.start();
      } else {
        swiperRef.current.autoplay.stop();
      }
    }
  }, [isPlaying]);

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

  if (!slidesData || slidesData.length === 0) {
    return <Loader>Loading...</Loader>;
  }

  return (
    <SliderWrapper>
      <StyledSwiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={
          isPlaying
            ? {
                delay: slideDuration,
                disableOnInteraction: false,
              }
            : false
        }
        loop={true}
        onSlideChange={(swiper) => {
          setActiveTab(slidesData[swiper.realIndex].title);
          // Reset progress to 0 whenever the slide changes
          setProgress(0);
        }}
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SlideContent style={{ backgroundColor: slide.backgroundColor }}>
              <LeftContent>
                <h1>{slide.title}</h1>
                <h2>{slide.subtitle}</h2>
              </LeftContent>
              <RightImages>
                <img
                  className="foregroundImage"
                  src={slide.foregroundImage}
                  alt={slide.title}
                />
              </RightImages>
            </SlideContent>
          </SwiperSlide>
        ))}

     

        {/* Progress Bar */}
        <ProgressBarContainer>
          <Progress width={progress} />
        </ProgressBarContainer>
      </StyledSwiper>
    </SliderWrapper>
  );
};

export default PortfolioMainSlider;
