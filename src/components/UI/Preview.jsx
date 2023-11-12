import { useEffect, useRef, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Markdown from 'react-markdown';
import styled from 'styled-components';

const Container = styled.div`
  grid-row: ${({ $gridRows }) => $gridRows};
  grid-column: ${({ $gridColumns }) => $gridColumns};
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

const Description = styled.div`
  width: 90%;
  height: 50%;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: ${({ $loaded }) => ($loaded ? 'start' : 'center')};
  align-items: center;
  overflow: hidden;

  font-size: normal;

  mask-image: linear-gradient(180deg, #000 60%, transparent);
  -webkit-mask-image: linear-gradient(180deg, #000 60%, transparent);

  #defaultText {
    justify-self: center;
  }
`;

const Image = styled.div`
  width: 90%;
  height: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: min-content;
    width: 100%;

    border: 5px solid white;
    border-radius: 10px;
    object-fit: contain;
  }
`;

// Given a grid row/column through props
// Loads the project readme and thumbnail from a given id
function Preview({ gridRows, gridColumns, id }) {
  const [descriptionMd, setDescriptionMd] = useState(null);
  const nodeRef = useRef(null);

  const imgSrc = id
    ? `https://raw.githubusercontent.com/ethanernst/${id}/main/thumbnail.jpg`
    : null;

  // description fetch effeect
  useEffect(() => {
    if (!id) {
      setDescriptionMd(null);
      return;
    }

    fetch(`https://raw.githubusercontent.com/ethanernst/${id}/main/README.md`)
      .then(res => res.text())
      .then(text => setDescriptionMd(text))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <SwitchTransition>
      <CSSTransition
        key={id}
        ref={nodeRef}
        timeout={250}
        classNames={'fade'}
        unmountOnExit
      >
        <Container
          ref={nodeRef}
          $gridRows={gridRows}
          $gridColumns={gridColumns}
        >
          <Description $loaded={!!descriptionMd}>
            {descriptionMd && (
              <Markdown disallowedElements={['img', 'a']}>
                {descriptionMd}
              </Markdown>
            )}
            {!descriptionMd && <h2>Hover a project for more details!</h2>}
          </Description>
          <Image>{imgSrc && <img src={imgSrc} alt={'preview image'} />}</Image>
        </Container>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default Preview;
