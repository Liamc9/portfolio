// ProjectShowcase.jsx

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Styled Components
import styled from 'styled-components';

// Import the Modal component
import Modal from './Modal'; // Adjust the path based on your project structure

// Sample Data with Custom Modal Content
const dataAnalyticsProjects = [
  {
    id: 1,
    title: 'Big Data Analytics at JD.com',
    description: 'Using machine learning models to identify trends and patterns in sales data.',
    image: 'https://upload.wikimedia.org/wikipedia/en/c/c4/JD.com_logo.png',
    modalContent: (
      <>
       
        <p>
        Big Data Analytics for E-commerce Optimization: Analysed millions of rows of E-commerce data using Python and libraries
like Pandas, NumPy, Matplotlib, Seaborn, and Scikit-Learn to develop data-driven strategies for profitability. Key analysis included
predicting customer membership likelihood using random forest and logistic regression, and assessing the impact of different
discount types on revenue and sales volume using linear regression. The results provided actionable insights for targeted marketing
and optimized discount strategies to enhance revenue and customer engagement.
        </p>
        <a href="https://jd.com/big-data-analytics" target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </>
    ),
  },
  {
    id: 2,
    title: 'Data Migration with IFDS',
    description: 'Migrating millions of rows of sensitive financial data to a new system.',
    image: 'https://www.youthemployment.org.uk/dev/wp-content/uploads/2016/10/IFDS-logo-Portrait-Corporate-Blue.png',
    modalContent: (
      <>
        
        <p>
        Data Migration Project: Involved in a key project to migrate millions of sensitive financial records from an external transfer
agency's platform to our system. Used C# to automate data analysis and testing, making it easier to find and fix data issues. Applied
SQL for thorough data validation, ensuring accuracy even with differences in data formats. Worked closely with global teams and
external partners to coordinate the migration. Created and ran automated tests during live data transfers to ensure a smooth and
secure transition with minimal downtime.
  </p>
        <a href="https://ifds.com/data-migration" target="_blank" rel="noopener noreferrer">
          View Project Details
        </a>
      </>
    ),
  },
  // Add more projects as needed
];

const webDevelopmentProjects = [
  {
    id: 1,
    title: 'Lettz',
    description: 'A web app that provides a very simple interface for subletting rooms.',
    image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-cc7d3.appspot.com/o/Screenshot%202024-12-29%20190803.png?alt=media&token=0a8f8327-b3a7-4a17-b187-66a7c126c0c4',
    modalContent: (
      <>
        <p>
          Lettz is designed to simplify the process of subletting rooms by providing an intuitive interface for listing,
          searching, and managing sublet offers. Built with React and Node.js, it ensures a seamless user experience.
        </p>
        <a href="https://lettz.ie" target="_blank" rel="noopener noreferrer">
          Visit Lettz
        </a>
      </>
    ),
  },
  {
    id: 2,
    title: 'DisDat',
    description: 'A web app where users can post or vote on simple 50 50 polls.',
    image: 'https://via.placeholder.com/300x200?text=Portfolio+Website',
    modalContent: (
      <>
        <p>
          DisDat allows users to create and participate in simple binary polls, fostering engagement and quick decision-making.
          Developed using React for the frontend and Firebase for real-time data handling.
        </p>
        <a href="https://disdat.com" target="_blank" rel="noopener noreferrer">
          Explore DisDat
        </a>
      </>
    ),
  },
  // Add more projects as needed
];

// Styled Components

const ShowcaseContainer = styled.div`
  padding: 20px;
`;

const ProjectSection = styled.section`
  padding: 20px 0;
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
  text-align: center;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  border: 1px solid #f0f0f0;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #555;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #777;
`;

// ProjectCard Component
const ProjectCard = ({ project, onClick }) => (
  <Card onClick={() => onClick(project)}>
    <CardImage src={project.image} alt={project.title} />
    <CardContent>
      <CardTitle>{project.title}</CardTitle>
      <CardDescription>{project.description}</CardDescription>
    </CardContent>
  </Card>
);

// ProjectShowcase Component
const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <ShowcaseContainer>
      {/* Data Analytics Projects Section */}
      <ProjectSection>
        <SectionTitle>Data Analytics Projects</SectionTitle>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {dataAnalyticsProjects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} onClick={openModal} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ProjectSection>

      {/* Web Development Projects Section */}
      <ProjectSection>
        <SectionTitle>Web Development Projects</SectionTitle>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {webDevelopmentProjects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} onClick={openModal} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ProjectSection>

      {/* Modal Component */}
      {selectedProject && (
        <Modal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          title={selectedProject.title}
        >
          {/* Render the custom modal content */}
          {selectedProject.modalContent}
        </Modal>
      )}
    </ShowcaseContainer>
  );
};

export default Projects;
