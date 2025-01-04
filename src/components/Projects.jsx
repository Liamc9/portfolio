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

// Modal Styled Components

const ModalHeader = styled.div`
  display: flex;
  flex-direction: column; /* Stack vertically on small screens */
  align-items: center;
  margin-bottom: 20px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex-direction: row; /* Side by side on larger screens */
    align-items: flex-start;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
  box-sizing: border-box;
  align-self: center;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const ModalContent = styled.div`
  flex: 1;
  box-sizing: border-box;
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
`;

const ModalBody = styled.div`
  margin-bottom: 15px;
  box-sizing: border-box;
`;

const Section = styled.div`
  margin-bottom: 15px;
  box-sizing: border-box;
`;

const SectionTitleSmall = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 8px;
`;

const SectionText = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  color: #555;
  box-sizing: border-box;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
  font-size: 1rem;
  line-height: 1.6;
  box-sizing: border-box;
`;

const ModalFooter = styled.div`
  margin-top: 20px;
  text-align: right;
  box-sizing: border-box;
`;

const ActionButton = styled.a`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.2s ease;
  box-sizing: border-box;

  &:hover {
    background-color: #0056b3;
  }
`;

// Modal Content Components

const DataAnalyticsModalContent = ({ project }) => (
  <div>
    <ModalHeader>
      <ModalImage src={project.image} alt={`${project.title} Image`} />
      <ModalContent>
        <ModalTitle>{project.title}</ModalTitle>
        <ModalBody>
      <Section>
        <SectionTitleSmall>Project Overview</SectionTitleSmall>
        <SectionText>{project.overview}</SectionText>
      </Section>
      <Section>
        <SectionTitleSmall>Key Analyses</SectionTitleSmall>
        <List>
          {project.keyAnalyses.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </List>
      </Section>
      <Section>
        <SectionTitleSmall>Outcomes</SectionTitleSmall>
        <SectionText>{project.outcomes}</SectionText>
      </Section>
    </ModalBody>
    
    <ModalFooter>
      <ActionButton href={project.link} target="_blank" rel="noopener noreferrer">
        {project.buttonText}
      </ActionButton>
    </ModalFooter>
      </ModalContent>
    </ModalHeader>
    
  </div>
);

const WebDevModalContent = ({ project }) => (
  <div>
    <ModalHeader>
      <ModalImage src={project.image} alt={`${project.title} Screenshot`} />
      <ModalContent>
        <ModalTitle>{project.title}</ModalTitle>
        <ModalBody>
      <Section>
        <SectionTitleSmall>About the Project</SectionTitleSmall>
        <SectionText>{project.about}</SectionText>
      </Section>
      <Section>
        <SectionTitleSmall>Tech Stack</SectionTitleSmall>
        <List>
          {project.techStack.map((tech, index) => (
            <ListItem key={index}>{tech}</ListItem>
          ))}
        </List>
      </Section>
    </ModalBody>
    
    <ModalFooter>
      <ActionButton href={project.link} target="_blank" rel="noopener noreferrer">
        {project.buttonText}
      </ActionButton>
    </ModalFooter>
      </ModalContent>
    </ModalHeader>
   
  </div>
);

// Sample Data with Custom Modal Content

const dataAnalyticsProjects = [
  {
    id: 1,
    title: 'Big Data Analytics at JD.com',
    description: 'Using machine learning models to identify trends and patterns in sales data.',
    image: 'https://upload.wikimedia.org/wikipedia/en/c/c4/JD.com_logo.png',
    overview:
      'Analyzed millions of rows of E-commerce data using Python and libraries like Pandas, NumPy, Matplotlib, Seaborn, and Scikit-Learn to develop data-driven strategies for profitability.',
    keyAnalyses: [
      'Predicted customer membership likelihood using Random Forest and Logistic Regression.',
      'Assessed the impact of different discount types on revenue and sales volume using Linear Regression.',
    ],
    outcomes:
      'Provided actionable insights for targeted marketing and optimized discount strategies, enhancing revenue and customer engagement.',
    link: 'https://firebasestorage.googleapis.com/v0/b/portfolio-cc7d3.appspot.com/o/Big_Data_Analytics_at_JD_com_Thesis.pdf?alt=media&token=d1ec680b-d686-4d30-9f86-b76b39e55e04',
    buttonText: 'View Pdf',
    modalContentType: 'dataAnalytics',
  },
  {
    id: 2,
    title: 'Data Migration with IFDS',
    description: 'Migrating millions of rows of sensitive financial data to a new system.',
    image: 'https://www.youthemployment.org.uk/dev/wp-content/uploads/2016/10/IFDS-logo-Portrait-Corporate-Blue.png',
    overview:
      "Migrated millions of sensitive financial records from an external transfer agency's platform to our system.",
    keyAnalyses: [
      'Used C# to automate data analysis and testing, making it easier to find and fix data issues.',
      'Applied SQL for thorough data validation, ensuring accuracy even with differences in data formats.',
    ],
    outcomes:
      'Worked closely with global teams and external partners to coordinate the migration, ensuring a smooth and secure transition with minimal downtime.',
    
    modalContentType: 'dataAnalytics',
  },
  // Add more Data Analytics projects as needed
];

const webDevelopmentProjects = [
  {
    id: 1,
    title: 'Lettz',
    description: 'A web app that provides a very simple interface for subletting rooms.',
    image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-cc7d3.appspot.com/o/Screenshot%202024-12-29%20190803.png?alt=media&token=0a8f8327-b3a7-4a17-b187-66a7c126c0c4',
    about:
      'Lettz simplifies the process of subletting rooms by providing an intuitive interface for listing, searching, and managing sublet offers.',
    techStack: ['Frontend: React', 'Backend: Node.js', 'Database: MongoDB'],
    link: 'https://lettz.ie',
    buttonText: 'Visit Lettz',
    modalContentType: 'webDevelopment',
  },
  {
    id: 2,
    title: 'DisDat (In Progress)',
    description: 'A web app where users can post or vote on simple 50 50 polls.',
    image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-cc7d3.appspot.com/o/Screenshot%202025-01-04%20123941.png?alt=media&token=fc30c3e0-0561-4068-b20d-f619509b7807',
    about:
      'DisDat allows users to create and participate in simple binary polls, fostering engagement and quick decision-making.',
    techStack: ['Frontend: React', 'Backend: Firebase', 'Real-time Data Handling: Firebase Realtime Database'],
    link: 'https://disdat-9d04f.web.app',
    buttonText: 'Visit DisDat',
    modalContentType: 'webDevelopment',
  },
  {
    id: 2,
    title: 'CookBook (In Progress)',
    description: 'A web app where users can subscribe to chefs to see their cookbooks in shortform video steps.',
    image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-cc7d3.appspot.com/o/Screenshot%202025-01-04%20124430.png?alt=media&token=87444e8f-d7a2-41e6-b301-b0a76f7a4d7b',
    about:
      'CookBook is a web app that allows users to subscribe to chefs and view their cookbooks in shortform video steps. It also allows chefs to monetize their content, through subscription formats.',
    techStack: ['Frontend: React', 'Backend: Firebase', 'Real-time Data Handling: Firebase Realtime Database'],
    link: 'https://cookbook-3f0ee.web.app/',
    buttonText: 'Visit CookBook',
    modalContentType: 'webDevelopment',
  },
  // Add more Web Development projects as needed
];

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

  // Function to render modal content based on project type
  const renderModalContent = (project) => {
    if (project.modalContentType === 'dataAnalytics') {
      return <DataAnalyticsModalContent project={project} />;
    } else if (project.modalContentType === 'webDevelopment') {
      return <WebDevModalContent project={project} />;
    } else {
      return null;
    }
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
        <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
          {/* Render the custom modal content */}
          {renderModalContent(selectedProject)}
        </Modal>
      )}
    </ShowcaseContainer>
  );
};

export default Projects;
