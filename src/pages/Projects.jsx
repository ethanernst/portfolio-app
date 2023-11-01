import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { routes } from '../App';

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

function Projects() {
  const location = useLocation();

  const [projects, setProjects] = useState([]);

  // timeout in hours to refresh the localStorage cache
  const REFRESHTIMEOUT = 5;

  useEffect(() => {
    //  fetch list of repos from github, set the data state to the fetched data and store it in localStorage with a timestamp
    async function fetchProjects() {
      fetch('https://api.github.com/users/ethanernst/repos').then(response =>
        response.json().then(data => {
          console.log('fetched new data from github');
          setProjects(data);

          localStorage.setItem(
            'projectsCache',
            JSON.stringify({
              data: [...data],
              timestamp: Date.now(),
            })
          );
        })
      );
    }

    // check the age of cache and refresh the data if cache is older than the REFRESHTIMEOUT
    function validateCache(cache) {
      const cacheAgeInHours = (Date.now() - cache.timestamp) / (1000 * 60 * 60);
      if (cacheAgeInHours > REFRESHTIMEOUT) {
        console.log(
          'cache is older than REFRESHTIMEOUT, purging cache and fetching new data'
        );
        localStorage.removeItem('projectsCache');
        fetchProjects();
      } else {
        console.log('valid cache, loaded data from localStorage');
        setProjects(cache.data);
      }
    }

    // check if projectsCache key exists with a timestamp
    const projectsCache = JSON.parse(localStorage.getItem('projectsCache'));
    if (
      !projectsCache ||
      !projectsCache?.data.length ||
      !projectsCache?.timestamp
    ) {
      console.log('cache is invalid, purging cache and fetching new data');
      localStorage.removeItem('projectsCache');
      fetchProjects();
    } else {
      validateCache(projectsCache);
    }
  }, []);

  return (
    <Container>
      <Header>
        <h1>projects</h1>
      </Header>
      <Filter>
        <h2>filter</h2>
      </Filter>
      <Links>
        {projects &&
          projects.map(project => {
            return (
              <Link
                key={project.name}
                to={`${location.pathname}/${project.name}`}
              >
                <ListItem title={project.name} />
              </Link>
            );
          })}
      </Links>
      <Preview></Preview>
    </Container>
  );
}

export default Projects;
