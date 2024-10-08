import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Initialize Swiper modules
SwiperCore.use([Navigation, Pagination, EffectFade]);

// Styled-components CSS
const Container = styled.div`
  max-width: 1100px;
  border-radius: 4px;
  max-height: 680px;
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  background-color: #e6decf;
  padding: 0 30px;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  @media (max-width: 480px) {
    height: 100%;
    max-height: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 62px;
  width: 100%;
  white-space: nowrap;
  flex-shrink: 0;
  font-weight: 600;
  font-size: 15px;
  border-bottom: 1px solid rgba(44, 45, 42, 0.25);
  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--beach-bg);
  z-index: 6;

  .menu-icon svg {
    width: 22px;
  }

  .logo {
    width: 116px;
  }

  .header-menu {
    margin-left: auto;
    display: flex;

    @media screen and (max-width: 740px) {
      display: none;
    }

    a {
      margin-left: 30px;
    }
  }

  .header-icons {
    margin-left: auto;
    display: flex;
    svg {
      width: 18px;
      &:not(:last-child) {
        margin-right: 20px;
      }
    }
  }
`;

const SwiperWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  position: relative;
  padding: 42px 0 30px;
  .main {
    display: flex;
    flex-grow: 1;
    position: relative;
    .left-side {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 320px;
      .main-header {
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 600;
      }
      .main-title {
        font-family: var(--italic-font);
        font-size: 100px;
        font-weight: 400;
      }
      .main-subtitle {
        font-family: var(--italic-font);
        font-weight: 400;
        font-size: 32px;
        margin-top: 14px;
        margin-bottom: 60px;
      }
      .main-content {
        .main-content__title {
          font-size: 26px;
          font-family: var(--italic-font);
          font-style: italic;
        }
        .main-content__subtitle {
          font-size: 14px;
          line-height: 1.5;
        }
        .more-menu {
          display: flex;
          align-items: center;
          font-size: 13px;
          font-weight: 500;
          svg {
            width: 28px;
            height: 18px;
            margin-left: 10px;
          }
        }
      }
    }
    .center {
      display: flex;
      margin-left: 120px;
      .bottle-bg {
        width: 320px;
        height: 450px;
        object-fit: cover;
        border-radius: 160px;
      }
      .bottle-img {
        position: absolute;
        top: 25%;
        left: 0;
        transform: scale(1.6);
      }
    }
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 30px;
  bottom: 20px;
  display: flex;
  align-items: center;
  svg {
    width: 28px;
  }
`;

const SwiperPagination = styled.div`
  position: absolute;
  right: 30px;
  top: 100px;
  font-size: 14px;
  font-family: var(--body-font);
`;

// Component
const CloscaComponent = () => {
    const swiperRef = useRef(null); // Create a ref to attach to Swiper
  
    useEffect(() => {
      if (swiperRef.current) {
        const swiper = new SwiperCore(swiperRef.current, {
          navigation: {
            nextEl: '.swiper-next-button',
            prevEl: '.swiper-prev-button',
          },
          effect: 'fade',
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
        });
  
        swiper.on('slideChange', function (swiper) {
          document.body.setAttribute('data-sld', swiper.realIndex);
        });
      }
    }, []);
  
    return (
      <Container className="container">
        <Header className="header">
          <a className="menu-icon" href="#">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </a>
          <img
            className="logo"
            src="https://cdn.shopify.com/s/files/1/0689/1443/files/CLOSCA-LOGO-WEB-BLACK_130x@2x.png?v=1559116993"
            alt="Logo"
          />
          <div className="header-menu">
            <a href="#">Mask</a>
            <a href="#">Helmet</a>
            <a href="#">Bottle</a>
            <a href="#">Accessories</a>
          </div>
          <div className="header-icons">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M437.02 330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521 243.251 404 198.548 404 148 404 66.393 337.607 0 256 0S108 66.393 108 148c0 50.548 25.479 95.251 64.262 121.962-36.21 12.495-69.398 33.136-97.281 61.018C26.629 379.333 0 443.62 0 512h40c0-119.103 96.897-216 216-216s216 96.897 216 216h40c0-68.38-26.629-132.667-74.98-181.02zM256 256c-59.551 0-108-48.448-108-108S196.449 40 256 40s108 48.448 108 108-48.449 108-108 108z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208.955 208.955">
              <path d="M190.85 200.227L178.135 58.626a7.5 7.5 0 00-7.47-6.829h-26.221V39.971c0-22.04-17.93-39.971-39.969-39.971-22.038 0-39.966 17.931-39.966 39.971v11.826H38.27a7.5 7.5 0 00-7.47 6.829L18.035 200.784a7.5 7.5 0 007.47 8.17h157.946a7.5 7.5 0 007.399-8.727z" />
            </svg>
          </div>
        </Header>
  
        <SwiperWrapper ref={swiperRef}> {/* Attach the ref here */}
          <Swiper
            className="mySwiper"
            navigation={{
              nextEl: '.swiper-next-button',
              prevEl: '.swiper-prev-button',
            }}
            effect="fade"
            loop={true}
            pagination={{
              el: '.swiper-pagination',
              type: 'fraction',
            }}
          >
            <SwiperSlide>
              <div className="main" id="beach">
                <div className="left-side">
                  <div className="main-wrapper">
                    <h3 className="main-header">Closca Bottle</h3>
                    <h1 className="main-title">Beach</h1>
                    <h2 className="main-subtitle">€ 39.90</h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Add more SwiperSlides as needed */}
          </Swiper>
        </SwiperWrapper>
  
        <ButtonWrapper className="button-wrapper">
          <div className="swiper-button swiper-prev-button">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
          <div className="swiper-button swiper-next-button">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </ButtonWrapper>
  
        <SwiperPagination className="swiper-pagination" />
      </Container>
    );
  };
  
  export default CloscaComponent;