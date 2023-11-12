import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import styled from 'styled-components';

const Container = styled.div`
  grid-row: ${({ $gridRows }) => $gridRows};
  grid-column: ${({ $gridColumns }) => $gridColumns};
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  display: flex;

  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: lightgray;
`;

const Description = styled.div`
  width: 100%;
  height: 100%;

  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  overflow-y: scroll;
`;

const Image = styled.div`
  width: 90%;
  height: 100%;

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

// Would like to combine this with Preview eventually
// Functions the same but CSS differences caused issues
function ProjectView({ gridRows, gridColumns, id }) {
  const [descriptionMd, setDescriptionMd] = useState(null);

  const imgSrc = id
    ? `https://raw.githubusercontent.com/ethanernst/${id}/main/thumbnail.jpg`
    : null;

  // description fetch effeect
  useEffect(() => {
    if (!id) {
      setDescriptionMd(null);
    }

    fetch(`https://raw.githubusercontent.com/ethanernst/${id}/main/README.md`)
      .then(res => res.text())
      .then(text => setDescriptionMd(text))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <Container $gridRows={gridRows} $gridColumns={gridColumns}>
      <Description>
        {descriptionMd && (
          <Markdown disallowedElements={['img']}>{descriptionMd}</Markdown>
        )}
      </Description>
      <Image>
        <img src={imgSrc} alt={'preview image'} />
      </Image>
    </Container>
  );
}

export default ProjectView;
