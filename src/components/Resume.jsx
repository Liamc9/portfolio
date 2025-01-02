// Resume.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  FaGraduationCap,
  FaCode,
  FaProjectDiagram,
  FaUser,
  FaHeart,
  FaBriefcase,
  FaLocationArrow,
} from 'react-icons/fa';

// Define breakpoints for responsiveness
const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
};

// Fade-in animation for sections
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Section Background Colors
const Section = styled.section`
  padding: 20px;
  animation: ${fadeIn} 1s ease-out;
`;

// Main Container
const Container = styled.div`
  margin: 0 auto;
  max-width: 1400px;
`;

// Section Title
const SectionTitle = styled.h2`
  font-size: 2.5em;
  color: #2c3e50;
  margin-bottom: 40px;
  text-align: center;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    width: 60px;
    height: 4px;
    background-color: #3498db;
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
    border-radius: 2px;
  }
`;

// Experience Section
const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 40px;
  }
`;

// Experience Item
const ExperienceItem = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  align-items: flex-start;
  gap: 40px;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  animation-delay: ${(props) => props.delay || '0s'};

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

// Experience Details
const ExperienceDetails = styled.div`
  flex: 1;
`;

// Job Title Styled Component
const JobTitle = styled.h3`
  font-size: 1.8em; /* Increased font size */
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 10px;
`;

// Company Name Styled Component
const CompanyName = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.2em;
  color: #555;
  margin: 0;
`;

// Location Styled Component
const Location = styled.p`
  display: flex;
  align-items: center;
  font-size: 1em;
  color: #777;
  margin: 5px 0 15px 0;
`;

// Experience Image
const ExperienceImage = styled.img`
  width: 30%;
  border-radius: 10px;
  object-fit: cover;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  align-self: center;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
    margin-bottom: 20px;
  }
`;

// Education Section
const EducationContainerStyled = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

// Education Card
const EducationCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 30px 20px;
  flex: 1 1 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
  }
`;

// School Logo Styled Component
const SchoolLogo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 20px;
`;

// Education Details Styled Component
const EducationDetails = styled.div`
  text-align: center;
`;

// Skills Section
const SkillsSection = styled.section`
  padding: 60px 20px;
  animation: ${fadeIn} 1s ease-out;
`;

// Skills Header (Optional Legend)
const SkillsHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const SkillsHeaderTitle = styled.h3`
  font-size: 1.5em;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const SkillsHeaderDesc = styled.p`
  font-size: 1em;
  color: #555;
`;

// Skills List Container
const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 800px;
`;

// Individual Skill Item
const SkillItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

// Skill Name with Icon
const SkillName = styled.span`
  flex: 1;
  font-size: 1.1em;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 10px;
`;

// Progress Bar Container
const ProgressBar = styled.div`
  flex: 2;
  background-color: #e0e0e0;
  border-radius: 10px;
  height: 15px;
  margin-left: 20px;
  position: relative;
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    margin-left: 0;
    margin-top: 10px;
  }
`;

// Progress Indicator
const Progress = styled.div`
  background-color: #3498db;
  height: 100%;
  border-radius: 10px;
  width: ${(props) => props.level || '0%'};
  transition: width 0.5s ease-in-out;
`;

// Percentage Label
const Percentage = styled.span`
  margin-left: 10px;
  font-size: 0.9em;
  color: #555;
  min-width: 30px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 0;
    margin-top: 5px;
  }
`;

// Skill Icon (Optional)
const SkillIcon = styled.div`
  color: #3498db;
  font-size: 1.5em;
`;

// Other Information Section
const OtherInfoSection = styled.section`
  padding: 40px 20px;
  animation: ${fadeIn} 1s ease-out;
`;

// Bullet List for Other Information
const BulletList = styled.ul`
  list-style-type: disc;
  padding-left: 40px;
  color: #555;
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Resume = () => {
  // Define your skills data as an array of objects
  const skills = [
    { name: 'JavaScript', level: '60%', icon: <FaCode /> },
    { name: 'Python', level: '60%', icon: <FaCode /> },
    { name: 'SQL', level: '90%', icon: <FaCode /> },
    { name: 'C#', level: '50%', icon: <FaCode /> },
    { name: 'HTML', level: '90%', icon: <FaCode /> },
    { name: 'CSS', level: '70%', icon: <FaCode /> },
    { name: 'Tailwind', level: '80%', icon: <FaCode /> },
    { name: 'Node.js', level: '40%', icon: <FaCode /> },
    { name: 'Firebase', level: '80%', icon: <FaCode /> },
    { name: 'React', level: '80%', icon: <FaCode /> },
    { name: 'GitHub', level: '70%', icon: <FaCode /> },
    { name: 'Excel', level: '60%', icon: <FaCode /> },
    { name: 'Machine Learning', level: '50%', icon: <FaProjectDiagram /> },
    { name: 'APIs', level: '50%', icon: <FaProjectDiagram /> },
    { name: 'BI', level: '50%', icon: <FaProjectDiagram /> },
    { name: 'Figma', level: '30%', icon: <FaProjectDiagram /> },
    { name: 'Storybook', level: '60%', icon: <FaProjectDiagram /> },
    { name: 'Financial Markets', level: '50%', icon: <FaUser /> },
    { name: 'Trading/Betting', level: '60%', icon: <FaProjectDiagram /> },
    { name: 'Sports Exchange', level: '70%', icon: <FaProjectDiagram /> },
  ];

  return (
    <Container>
      {/* Experience Section */}
      <Section bgColor="#f0f8ff">
        <SectionTitle>Experience</SectionTitle>
        <ExperienceContainer>
          {/* First Experience: Details Left, Image Right */}
          <ExperienceItem delay="0.2s">
            <ExperienceDetails>
              <JobTitle>Data Analyst</JobTitle>
              <CompanyName>
                <FaBriefcase /> IFDS
              </CompanyName>
              <Location>
                <FaLocationArrow /> Dublin, Ireland (2024)
              </Location>
              <ul>
                <li>
                  Involved in the migration of millions of rows of sensitive financial data from an external transfer agency's platform to ours,
                  ensuring data integrity and security throughout the process.
                </li>
                <li>
                  Developed automation scripts using C# and utilized SQL to analyze and validate large datasets, identifying discrepancies and
                  enhancing efficiency.
                </li>
                <li>
                  Coordinated with global teams and liaised with the previous transfer agency to facilitate smooth data transfers and timely issue
                  resolution.
                </li>
                <li>
                  Conducted automated testing during live data migration events, including weekend deployments, to verify accuracy and ensure
                  seamless transitions.
                </li>
              </ul>
            </ExperienceDetails>
            <ExperienceImage
              src="https://www.youthemployment.org.uk/dev/wp-content/uploads/2016/10/IFDS-logo-Portrait-Corporate-Blue.png"
              alt="IFDS Logo"
            />
          </ExperienceItem>

          {/* Second Experience: Image Left, Details Right */}
          <ExperienceItem reverse delay="0.4s">
            <ExperienceDetails>
              <JobTitle>Financial Software Consultant</JobTitle>
              <CompanyName>
                <FaBriefcase /> Murex Advanced Technologies
              </CompanyName>
              <Location>
                <FaLocationArrow /> Dublin, Ireland (2022)
              </Location>
              <ul>
                <li>
                  Worked in a team of consultants and developers using agile project management to improve features of the company’s financial
                  software.
                </li>
                <li>
                  Analyzed and manipulated financial data to develop BI dashboards using ETL to extract data from Murex’s software and prepare it
                  for use in the dashboards.
                </li>
                <li>Solved issues clients encountered while using the risk management software.</li>
              </ul>
            </ExperienceDetails>
            <ExperienceImage
              src="https://upload.wikimedia.org/wikipedia/en/c/cb/Murex_logo.svg"
              alt="Murex Logo"
            />
          </ExperienceItem>
        </ExperienceContainer>
      </Section>

      {/* Education Section */}
      <Section bgColor="#fffaf0">
        <SectionTitle>Education</SectionTitle>
        <EducationContainerStyled>
          {/* Leaving Certificate Card */}
          <EducationCard>
            {/* School Logo */}
            <SchoolLogo
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzoeThlGPg6xqHZRurhXH24B1LRsUY0XARfg&s"
              alt="Cistercian College Roscrea Logo"
            />
            {/* Education Details */}
            <EducationDetails>
              <h3>Leaving Certificate</h3>
              <p>
                <strong>Cistercian College Roscrea</strong>
              </p>
              <p>
                <strong>Points:</strong> 601
              </p>
              <ul>
                <li>Maths H1</li>
                <li>Physics H1</li>
                <li>Chemistry H1</li>
                <li>Accounting H1</li>
                <li>DCG H2</li>
                <li>German H2</li>
              </ul>
            </EducationDetails>
          </EducationCard>

          {/* BSc in Mechanical Engineering Card */}
          <EducationCard>
            {/* School Logo */}
            <SchoolLogo
              src="https://upload.wikimedia.org/wikipedia/en/9/9e/UCD_Dublin.png"
              alt="University College Dublin Logo"
            />
            {/* Education Details */}
            <EducationDetails>
              <h3>BSc in Mechanical Engineering</h3>
              <p>
                <strong>University College Dublin</strong>
              </p>
              <p>
                <strong>Grade:</strong> 1.1
              </p>
              <p>
                <strong>Relevant Modules:</strong>
              </p>
              <ul>
                <li>Computer Engineering A+</li>
                <li>Intro to Computer Science A-</li>
                <li>Modelling and Simulation A</li>
                <li>Statistics and Probability A+</li>
                <li>Data Modelling for Science A+</li>
                <li>Professional Finance A-</li>
                <li>Multivariable Calculus A+</li>
              </ul>
            </EducationDetails>
          </EducationCard>

          {/* ME in Mechanical Engineering with Business Card */}
          <EducationCard>
            {/* School Logo */}
            <SchoolLogo
              src="https://upload.wikimedia.org/wikipedia/en/9/9e/UCD_Dublin.png"
              alt="University College Dublin Logo"
            />
            {/* Education Details */}
            <EducationDetails>
              <h3>ME in Mechanical Engineering with Business</h3>
              <p>
                <strong>University College Dublin</strong>
              </p>
              <p>
                <strong>Grade:</strong> 1.1
              </p>
              <p>
                <strong>Thesis:</strong> Big Data Analytics at JD.com (Grade: 1.1)
              </p>
              <p>
                <strong>Relevant Modules:</strong>
              </p>
              <ul>
                <li>Management Engineering A+</li>
                <li>Entrepreneurship in Action A</li>
                <li>Professional Management B+</li>
                <li>Business Information Systems Management B+</li>
                <li>Game Theory A</li>
              </ul>
            </EducationDetails>
          </EducationCard>
        </EducationContainerStyled>
      </Section>

      {/* Skills Section */}
      <SkillsSection>
        <SectionTitle>Skills</SectionTitle>
        <SkillsHeader>
          <SkillsHeaderTitle>Proficiency Level</SkillsHeaderTitle>
          <SkillsHeaderDesc>Indicates my proficiency in each skill.</SkillsHeaderDesc>
        </SkillsHeader>
        <SkillsList>
          {/* Iterate over the skills array to render each skill */}
          {skills.map((skill, index) => (
            <SkillItem key={index}>
              <SkillName>
                {skill.icon && <SkillIcon>{skill.icon}</SkillIcon>}
                {skill.name}
              </SkillName>
              <ProgressBar>
                <Progress level={skill.level} />
              </ProgressBar>
              <Percentage>{skill.level}</Percentage>
            </SkillItem>
          ))}
        </SkillsList>
      </SkillsSection>

      {/* Other Relevant Information Section */}
      <OtherInfoSection>
        <SectionTitle>Other Relevant Information</SectionTitle>
        <BulletList>
          <li>Year Head at Cistercian College Roscrea</li>
          <li>Hobbies and interests include football, rugby, betting and trading, and web development</li>
          <li>Entrance scholarship to University College Dublin</li>
          <li>Completed amplifyMe finance accelerator event</li>
          <li>Captain of club senior football team</li>
        </BulletList>
      </OtherInfoSection>
    </Container>
  );
};

export default Resume;
