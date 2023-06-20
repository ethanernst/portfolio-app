import { useEffect, useState } from 'react';

import PageLayout from '../components/Layout/PageLayout';

import ProjectCard from '../components/UI/Cards/ProjectCard';
import HomeButton from '../components/Nav/HomeButton';

import projectsWip from '../images/projects/projectsWip.webp';

function Projects() {
  const [projects, setProjects] = useState([]);
  let projectsList = '';

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

  if (projects) {
    projectsList = projects.map((project, i) => (
      <ProjectCard
        key={i}
        image={`https://raw.githubusercontent.com/ethanernst/${project.name}/main/thumbnail.jpg`}
        title={project.name}
        description={project.description}
        githubUrl={project.html_url}
        projectUrl={project.homepage}
      />
    ));
    projectsList.push(
      <ProjectCard
        key={projectsList.length}
        image={projectsWip}
        title="Coming soon!"
        description="Another project in the works"
      />
    );
  }

  const TITLE = ''; // optional, if null the title with be the location.pathname
  const SUBTITLE = 'Here are some projects I have been working on';

  const CONTENT = projectsList || (
    <>
      <ProjectCard
        image={projectsWip}
        title={'Portfolio website'}
        description={'A React website project with animated routes'}
      />
      <ProjectCard
        image={projectsWip}
        title={'Coming soon!'}
        description={'Another project in the works'}
      />
      <ProjectCard
        image={projectsWip}
        title={'Coming soon!'}
        description={'Another project in the works'}
      />
      <ProjectCard
        image={projectsWip}
        title={'Coming soon!'}
        description={'Another project in the works'}
      />
    </>
  );

  const NAV = <HomeButton />;

  return (
    <PageLayout title={TITLE} subtitle={SUBTITLE} content={CONTENT} nav={NAV} />
  );
}

export default Projects;
