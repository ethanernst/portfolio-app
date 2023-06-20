import { useState } from 'react';

import styled from 'styled-components';

import Card from './Card';
import LinkedButton from '../Buttons/LinkedButton';

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  display: flex;

  background-color: ${props =>
    props.hovered ? 'var(--projects-dark)' : 'var(--transparent)'};
`;

const Details = styled.div`
  width: auto;
  margin-left: 30px;
  display: flex;
  flex-direction: column;

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.5em;
  }
`;

function ProjectCard({ image, title, description, githubUrl, projectUrl }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Container
      hovered={isHovered}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card image={image} hover={isHovered} />
      <Details>
        <h1 className="title">{title}</h1>
        <h3 className="description">{description}</h3>
        <div className="buttons">
          {githubUrl && (
            <LinkedButton
              title="Github"
              url={githubUrl}
              color="var(--button-github)"
              icon="githubIcon"
            />
          )}
          {projectUrl && (
            <LinkedButton
              title="Project"
              url={projectUrl}
              color="var(--button-project)"
              icon="projectIcon"
            />
          )}
        </div>
      </Details>
    </Container>
  );
}

export default ProjectCard;
