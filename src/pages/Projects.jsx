import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { GlobalContext } from '../store/GlobalContext';

import ListItem from '../components/UI/ListItem';
import Preview from '../components/UI/Preview';

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(5, 1fr);

  background-color: #666666;

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
    padding: 20px 20px;
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

  display: flex;
  flex-direction: column;

  /* Expand on small screens */
  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`;

const LinkRow = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: min-content;
  display: flex;

  a:first-child {
    display: flex;
    flex-grow: 1;
  }

  a:not(:first-child) {
    display: flex;
    align-items: center;
    justify-content: center;

    /* Hide links on small screens */
    @media (max-width: 768px) {
      display: none;
    }
  }

  h3 {
    height: auto;
    width: min-content;
    margin: 10px;
    padding: 30px;
    border-radius: 10px;

    transition: all 0.2s ease-in-out;
  }

  h3:hover {
    background-color: white;
  }
`;

function Projects() {
  const navigate = useNavigate();
  const location = useLocation();
  const { projects } = useContext(GlobalContext);
  const [activeLink, setActiveLink] = useState(null);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSetActiveLink = id => {
    setActiveLink(id);
  };

  const handleResetActiveLink = () => {
    setActiveLink(null);
  };

  return (
    <Container>
      <Header>
        <h1>projects</h1>
      </Header>
      <Filter>
        <button onClick={handleGoBack}>back</button>
        <button>filter</button>
      </Filter>
      <Links>
        {projects &&
          projects.map(project => {
            if (project.name === 'ethanernst') return;
            return (
              <LinkRow
                key={project.name}
                onMouseOver={() => handleSetActiveLink(project.name)}
                onMouseOut={handleResetActiveLink}
              >
                <Link to={`${location.pathname}/${project.name}`}>
                  <ListItem title={project.name} size={'2vw'} />
                </Link>
                <h3>
                  <a href={project.html_url} target="_blank" rel="noreferrer">
                    Github
                  </a>
                </h3>
                <a href={project.homepage} target="_blank" rel="noreferrer">
                  <h3>Project</h3>
                </a>
              </LinkRow>
            );
          })}
      </Links>
      <Preview gridRows={'4 / -1'} gridColumns={'4 / -1'} image={activeLink} />
    </Container>
  );
}

export default Projects;
