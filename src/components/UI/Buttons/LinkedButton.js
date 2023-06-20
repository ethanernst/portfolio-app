import { useState } from 'react';

import styled from 'styled-components';

import githubIcon from '../../../images/icons/githubIcon.svg';
import projectIcon from '../../../images/icons/projectIcon.svg';

const Container = styled.a`
  position: relative;
  width: min-content;
  height: auto;
  margin: 20px;
  padding: 30px;
  text-decoration: none;
  border-radius: 15px;
  color: var(--white);
  background-color: ${({ color }) => color};

  box-shadow: ${props =>
    props.hovered ? '0px 10px 10px rgba(0, 0, 0, 0.5)' : ''};
  transform: ${props => (props.hovered ? 'scale(1.1)' : '')};
  transition: all 0.2s ease;
`;

function LinkedButton({ title, url, color, icon }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  let imgSrc = '';
  if (icon) {
    if (icon === 'githubIcon') {
      imgSrc = githubIcon;
    }
    if (icon === 'projectIcon') {
      imgSrc = projectIcon;
    }
  }

  return (
    <Container
      hovered={isHovered}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      color={color}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <img src={imgSrc} style={{ height: 30, width: 30 }} alt={icon} />
      {title}
    </Container>
  );
}

export default LinkedButton;
