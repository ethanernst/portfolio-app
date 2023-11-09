import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { GlobalContext } from '../store/GlobalContext';

import ListItem from '../components/UI/ListItem';

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(5, 1fr);

  background-color: 666666;

  /* Media query to adjust layout for smaller screens */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Header = styled.div`
  grid-row: 1 / 4;
  grid-column: 1 / -1;
  background-color: #666666;
  text-align: center;
  font-size: 3.5rem;
`;

const Links = styled.div`
  grid-row: 4 / -1;
  grid-column: 1 / 4;
  background-color: #333333;

  /* Expand on small screens */
  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`;

const Preview = styled.div`
  grid-row: 4 / -1;
  grid-column: 4 / -1;
  background-color: lightgray;

  /* Hide on small screens */
  @media (max-width: 768px) {
    display: none;
  }
`;

function Home() {
  const { staticRoutes } = useContext(GlobalContext);

  return (
    <Container>
      <Header>
        <h1>vault</h1>
      </Header>
      <Links>
        {staticRoutes &&
          staticRoutes.map(route => {
            if (route.path === '/' || route.path.split('/').length !== 2)
              return;
            return (
              <Link key={route.path} to={route.path}>
                <ListItem title={route.name} size={'50px'} />
              </Link>
            );
          })}
      </Links>
      <Preview></Preview>
    </Container>
  );
}

export default Home;
