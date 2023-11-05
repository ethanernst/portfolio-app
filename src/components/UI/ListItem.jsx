import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: max-content;
  font-size: 3rem;
  background-color: transparent;

  h2 {
    margin: 10px;
    padding: 30px;
    border-radius: 10px;

    transition: all 0.2s ease-in-out;
  }

  h2:hover {
    background-color: white;
  }
`;

function ListItem({ title }) {
  return (
    <Container>
      <h2>{title}</h2>
    </Container>
  );
}

export default ListItem;
