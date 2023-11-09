import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: max-content;
  font-size: ${({ size }) => size};
  background-color: transparent;

  h2 {
    margin: 10px;
    padding: 30px;
    border-radius: 10px;

    transition: all 0.2s ease-in-out;
  }

  &:hover > h2 {
    background-color: white;
  }
`;

function ListItem({ title, size }) {
  return (
    <Container size={size}>
      <h2>{title}</h2>
    </Container>
  );
}

export default ListItem;
