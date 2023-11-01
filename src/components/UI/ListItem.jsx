import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: max-content;
  font-size: 3rem;
  background-color: transparent;

  transition: background-color 1s ease-in;

  :hover {
    background-color: white;
  }

  h2 {
    margin: 10px;
    padding: 30px;
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
