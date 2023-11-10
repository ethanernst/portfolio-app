import { useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import styled from 'styled-components';

const Container = styled.div`
  grid-row: ${({ row }) => row};
  grid-column: ${({ column }) => column};
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: lightgray;

  /* Hide on small screens */
  @media (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 80%;
  height: 100%;
  object-fit: contain;
`;

function Preview({ gridRows, gridColumns, image }) {
  const nodeRef = useRef(null);

  const imgSrc = image
    ? `https://raw.githubusercontent.com/ethanernst/${image}/main/thumbnail.jpg`
    : null;

  return (
    <Container row={gridRows} column={gridColumns}>
      <SwitchTransition>
        <CSSTransition
          key={image}
          ref={nodeRef}
          timeout={250}
          classNames={'fade'}
          unmountOnExit
        >
          <Image ref={nodeRef} src={imgSrc} alt={'preview image'} />
        </CSSTransition>
      </SwitchTransition>
    </Container>
  );
}

export default Preview;
