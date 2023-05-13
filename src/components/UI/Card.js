import { useState } from 'react';

import styled from 'styled-components';

const CardElement = styled.div`
  width: clamp(300px, 40%, 500px);
  height: 300px;
  margin: 20px;
  border-radius: 20px;
  position: relative;
  transition: all 0.5s ease;

  .image-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .image {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
    border: 5px solid white;
    ${props => (props.hovered ? 'filter: brightness(75%)' : '')};
    box-shadow: ${props =>
      props.hovered ? '0 10px 20px rgba(0, 0, 0, 0.5)' : ''};

    transform: ${props => (props.hovered ? 'scale(1.1)' : '')};
    transition: all 0.5s ease;
  }

  .text-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    color: #fff;
    opacity: ${props => (props.hovered ? '1' : '0')};
    transition: all 0.5s ease;
  }

  .title {
    margin-top: 0;
    font-size: 24px;
  }

  .description {
    margin-bottom: 0;
  }
`;

function Card({ image, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <CardElement
      hovered={isHovered}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="image-container">
        <img src={image} alt={title} className="image" />
      </div>
      <div className="text-container">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </CardElement>
  );
}

export default Card;
