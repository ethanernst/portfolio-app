import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { GlobalContext } from '../store/GlobalContext';

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
  grid-row: 1 / 3;
  grid-column: 1 / -1;
  background-color: #666666;
  text-align: left;
  font-size: 3.5rem;

  h1 {
    margin-top: 30px;
  }
`;

const Filter = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / -1;
  background-color: white;

  display: flex;
  align-items: center;
  padding-left: 20px;

  button {
    font: inherit;
    background-color: transparent;
    color: black;
    padding: 20px 80px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 32px;

    transition: all 0.2s ease-in-out;
  }

  button:hover {
    background-color: #aaaaaa;
  }
`;

const Links = styled.div`
  grid-row: 4 / -1;
  grid-column: 1 / 4;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: transparent;

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

function ProjectDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  const { projects } = useContext(GlobalContext);
  const currentProject = location.pathname.split('/').pop();
  const projectData = projects.find(project => project.name === currentProject);

  console.log(projectData);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Header>
        <h1>{currentProject}</h1>
      </Header>
      <Filter>
        <button onClick={handleGoBack}>back</button>
      </Filter>
      <Links></Links>
      <Preview></Preview>
    </Container>
  );
}

export default ProjectDetails;
