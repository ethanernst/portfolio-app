import { useState } from 'react';

import styled from 'styled-components';

import Card from './Card';

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding-top: 10px;
  padding-left: 20px;
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
`;

function ProjectCard({ image, title, description, githubUrl, url }) {
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
        <a href={githubUrl}>Github button</a>
        <a href={url}>Project link</a>
      </Details>
    </Container>
  );
}

export default ProjectCard;
