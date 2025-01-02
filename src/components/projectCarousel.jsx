// src/components/ProjectCarousel.jsx
import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Styled Components
const SliderSection = styled.section`
  width: 100%;
  padding: 50px 0;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CarouselTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 250px;
  height: 300px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const ProjectCarousel = ({ cards }) => {
  return (
    <SliderSection>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <Card>
              <CardImage src={card.image} alt={card.title} />
              <div>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderSection>
  );
};

export default ProjectCarousel;
