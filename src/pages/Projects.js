import PageLayout from '../components/Layout/PageLayout';

import Card from '../components/UI/Card';
import HomeButton from '../components/Nav/HomeButton';

import projectsWip from '../images/projects/projectsWip.webp';

// testing pinging github for dynamic project population
// async function getRepos() {
//   const repos = await fetch(
//     'https://api.github.com/users/ethanernst/repos'
//   ).then(response => response.json());

//   repos.forEach(repo => console.log(repo.contents_url));
// }

function Projects() {
  // getRepos();

  const TITLE = ''; // optional, if null the title with be the location.pathname
  const SUBTITLE = 'Here are some projects I have been working on';

  const CONTENT = (
    <>
      <Card
        image={projectsWip}
        title={'Portfolio website'}
        description={'A React website project with animated routes'}
      />
      <Card
        image={projectsWip}
        title={'Coming soon!'}
        description={'Another project in the works'}
      />
      <Card
        image={projectsWip}
        title={'Coming soon!'}
        description={'Another project in the works'}
      />
      <Card
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
