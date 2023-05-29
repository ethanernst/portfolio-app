// import { useEffect, useState } from 'react';

import PageLayout from '../components/Layout/PageLayout';

import ProjectCard from '../components/UI/ProjectCard';
import HomeButton from '../components/Nav/HomeButton';

import projectsWip from '../images/projects/projectsWip.webp';

function Projects() {
  // const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.github.com/users/ethanernst/repos').then(response =>
  //     response.json().then(data => setProjects(data))
  //   );
  // }, []);

  let projectsList = '';
  // if (projects) {
  //   projectsList = projects.forEach(
  //     project => `
  //       <ProjectCard
  //         image={projectsWip}
  //         title=${project.name}
  //         description=${projects.description}
  //         link=${project.url}
  //       />
  //     `
  //   );
  // }

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
