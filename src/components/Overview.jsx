// Overview.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaEnvelope, FaPhone, FaLinkedin, FaExternalLinkAlt, FaCode, FaGraduationCap, FaProjectDiagram, FaGithub, FaFigma, FaQuestion } from 'react-icons/fa';
import { StorybookIcon } from '../assets/Icons';

// Define breakpoints for responsiveness
const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
};

// Pulsing animation for the green dot in Tile2
const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.9;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 0.9;
  }
`;

// Container for the entire layout
const LayoutContainer = styled.div`
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

// Base Tile styling
const Tile = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Styling for h2 headers
const Header2 = styled.h2`
  font-size: 2em;
  color: #333;
  margin-bottom: 10px;
`;

// Styling for h3 headers
const Header3 = styled.h3`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 8px;
`;

// Specific Tiles with grid positioning
const Tile1 = styled(Tile)`
  grid-column: 1 / span 3;
  grid-row: 1 / span 3;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    grid-column: 1 / span 2;
    grid-row: 1 / span 1;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    flex-direction: column;
    text-align: center;
  }
`;

const Tile2 = styled(Tile)`
  grid-column: 4 / 5;
  grid-row: 1 / 2;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    grid-column: 1 / span 1;
    grid-row: 2 / 3;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-column: 1 / span 1;
    grid-row: 2 / 3;
  }
`;

const Tile3 = styled(Tile)`
  grid-column: 4 / 5;
  grid-row: 2 / 4;
  
  @media (max-width: ${breakpoints.tablet}) {
    grid-column: 1 / span 1;
    grid-row: 3 / 4;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-column: 1 / span 1;
    grid-row: 3 / 4;
  }
`;

const Tile4 = styled(Tile)`
  grid-column: 1 / 2;
  grid-row: 4 / 6;

  @media (max-width: ${breakpoints.tablet}) {
    grid-column: 2 / span 1;
    grid-row: 2 / 4;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-column: 1 / span 1;
    grid-row: 4 / 5;
  }
`;

const Tile5 = styled(Tile)`
  grid-column: 2 / 3;
  grid-row: 4 / 6;

  @media (max-width: ${breakpoints.tablet}) {
    grid-column: 1 / span 1;
    grid-row: 4 / 6;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-column: 1 / span 1;
    grid-row: 4 / 6;
  }
`;

const Tile6 = styled(Tile)`
  grid-column: 3 / 4;
  grid-row: 4 / 6;

  @media (max-width: ${breakpoints.tablet}) {
    grid-column: 2 / span 1;
    grid-row: 4 / 6;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-column: 1 / span 1;
    grid-row: 6 / 7;
  }
`;

const Tile7 = styled(Tile)`
  grid-column: 4 / 5;
  grid-row: 4 / 6;

  @media (max-width: ${breakpoints.tablet}) {
    grid-column: 1 / span 1;
    grid-row: 6 / 8;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-column: 1 / span 1;
    grid-row: 7 / 8;
  }
`;

// Additional Styled Components for Specific Tiles

// Profile Image in Tile1
const ProfileImage = styled.img`
  width: 30%;
  height: auto;
  margin: 10px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

// Profile Info in Tile1
const ProfileInfo = styled.div`
  width: 70%;
  padding-left: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    padding-left: 0;
  }
`;

// Pulsing Green Dot for Tile2
const PulsingDot = styled.div`
  width: 12px;
  height: 12px;
  background-color: #28a745;
  border-radius: 50%;
  position: absolute;
  top: 15px;
  right: 15px;
  animation: ${pulse} 2s infinite;
`;

// Contact Item
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

// Icon Styling
const IconWrapper = styled.div`
  margin-right: 10px;
  color: #4a90e2;
`;

// Other Resources Grid
const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

// Clickable Resource Tile
const ResourceTile = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;;
  justify-content: center;
  color: #4a90e2;
  border: 1px solid #4a90e2;
  text-decoration: none;
  padding: 10px;
  border-radius: 6px;
  font-size: 0.9em;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #cde4ff;
    transform: translateY(-3px);
  }
`;

// Styled Components for Enhanced Tiles 4, 5, and 6

// Tile4: Main Skills
const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const SkillBadge = styled.span`
  background-color: #4a90e2;
  color: #ffffff;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 0.9em;
  display: flex;
  align-items: center;
`;

const SkillIcon = styled.span`
  margin-right: 5px;
`;

// Tile5: Main Qualifications
const QualificationTimeline = styled.div`
  position: relative;
  padding-left: 10px;
  margin-top: 10px;
`;

const QualificationItem = styled.div`
  position: relative;
  margin-bottom: 20px;
  padding-left: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const QualificationIcon = styled.div`
  position: absolute;
  left: -10px;
  top: 0;
  background-color: #4a90e2;
  color: #fff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Tile6: Top Projects
const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ProjectCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  color: #333;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 6px;
  transition: background-color 0.3s, transform 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #e0f0ff;
    transform: translateY(-2px);
  }
`;

const ProjectIcon = styled.div`
  margin-right: 10px;
  color: #4a90e2;
`;

// Overview Component
const Overview = () => {
  return (
    <LayoutContainer>
      {/* Tile 1: Profile Card */}
      <Tile1>
        <ProfileInfo>
          <Header2>Liam Crowley</Header2>
          <p>I'm a 25 year old male from Ireland. I graduated in 2023 with a Masters degree in mechanical engineering with business from University College Dublin.</p>
          <p>My experience includes working as a Financial Software Consultant with Murex and also as a Data Analyst with IFDS.</p>
          <p>I am skilled in various areas such as web development, data analytics and BI, and financial trading and betting.</p>
          <p>I have completed many substantial projects such as my thesis in big data analytics, a data migration project involving sensitive financial data while with IFDS, and also some personal web deveopment projects.</p>
        </ProfileInfo>
        <ProfileImage src="https://atg-prod-scalar.s3.amazonaws.com/studentpower/media/user%20avatar.png" alt="Profile" />
      </Tile1>

      {/* Tile 2: Now */}
      <Tile2>
        <Header3>Now</Header3>
        <p>Currently working as a Data Analyst at IFDS, Dublin</p>
        <PulsingDot />
      </Tile2>

      {/* Tile 3: Contact */}
      <Tile3>
        <Header3>Contact</Header3>
        <div>
          <ContactItem>
            <IconWrapper>
              <FaEnvelope />
            </IconWrapper>
            <span>liam12crowley@gmail.com</span>
          </ContactItem>
          <ContactItem>
            <IconWrapper>
              <FaPhone />
            </IconWrapper>
            <span>+353 83 372 6206</span>
          </ContactItem>
          <ContactItem>
            <IconWrapper>
              <FaLinkedin />
            </IconWrapper>
            <span>
              <a href="https://www.linkedin.com/in/liam-crowley-3027a3220/" target="_blank" rel="noopener noreferrer">
                Liam Crowley
              </a>
            </span>
          </ContactItem>
        </div>
      </Tile3>

      {/* Tile 4: Main Skills */}
      <Tile4>
        <Header3>Skilled Areas</Header3>
        <SkillsList>
          <SkillBadge>
            <SkillIcon><FaCode /></SkillIcon>
            Web Development
          </SkillBadge>
          <SkillBadge>
            <SkillIcon><FaCode /></SkillIcon>
            Data Analytics
          </SkillBadge>
          <SkillBadge>
            <SkillIcon><FaCode /></SkillIcon>
            BI
          </SkillBadge>
          <SkillBadge>
            <SkillIcon><FaCode /></SkillIcon>
            Machine Learning
          </SkillBadge>
          <SkillBadge>
            <SkillIcon><FaCode /></SkillIcon>
            Financial Trading
          </SkillBadge>
          
        </SkillsList>
      </Tile4>

      {/* Tile5: Main Qualifications */}
      <Tile5>
        <Header3>Qualifications</Header3>
        <QualificationTimeline>
          <QualificationItem>
            <QualificationIcon>
              <FaGraduationCap />
            </QualificationIcon>
            <div>
              ME Mechanical Engineering with Business
              <p>University College Dublin</p><p>2020</p>
            </div>
          </QualificationItem>
          <QualificationItem>
            <QualificationIcon>
              <FaGraduationCap />
            </QualificationIcon>
            <div>BSc Mechanical Engineering
              <p>University College Dublin</p><p>2018</p>
            </div>
          </QualificationItem>
        </QualificationTimeline>
      </Tile5>

      {/* Tile6: Top Projects */}
      <Tile6>
        <Header3>Top Projects</Header3>
        <ProjectsList>
          
          <ProjectCard >
            <ProjectIcon><FaProjectDiagram /></ProjectIcon>
            Data Migration Project with IFDS
          </ProjectCard>
          <ProjectCard>
            <ProjectIcon><FaProjectDiagram /></ProjectIcon>
            Big Data Analytics College Thesis
          </ProjectCard>
          <ProjectCard>
            <ProjectIcon><FaProjectDiagram /></ProjectIcon>
            Web app for subletting rooms
          </ProjectCard>
        </ProjectsList>
      </Tile6>

      {/* Tile7: Other Resources */}
      <Tile7>
        <Header3>Other</Header3>
        <ResourcesGrid>
          <ResourceTile href="https://github.com/Liamc9" target="_blank" rel="noopener noreferrer">
          <FaGithub className='h-14 w-14'/>
            GitHub 
          </ResourceTile>
          <ResourceTile href="https://liamc9.github.io/Storybook/" target="_blank" rel="noopener noreferrer">
          <StorybookIcon className='h-14 w-14'/>
            Storybook 
          </ResourceTile>
          <ResourceTile href="https://figma.com" target="_blank" rel="noopener noreferrer">
          <FaFigma className='h-14 w-14'/>
            Figma 
          </ResourceTile>
          <ResourceTile href="https://example.com/resource4" target="_blank" rel="noopener noreferrer">
          <FaQuestion className='h-14 w-14'/>
            Other
          </ResourceTile>
        </ResourcesGrid>
      </Tile7>
    </LayoutContainer>
  );
};

export default Overview;
