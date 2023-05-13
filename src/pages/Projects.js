import { useLocation } from 'react-router-dom';

import PageLayout from '../components/Layout/PageLayout';
import Card from '../components/UI/Card';
import HomeButton from '../components/Nav/HomeButton';

import testImg from '../images/test-image.jpg';

function Projects() {
  const location = useLocation();

  return (
    <PageLayout layout={location.pathname}>
      <div className="header">
        <h1 className="title">/projects</h1>
        <h2 className="subtitle">
          Here are some projects I have been working on!
        </h2>
      </div>
      <div className="content">
        <Card
          image={testImg}
          title={'Portfolio website'}
          description={'A React website project with animated routes'}
        />
        <Card
          image={testImg}
          title={'Coming soon!'}
          description={'Yet another project in the works'}
        />
        <Card
          image={testImg}
          title={'Coming soon!'}
          description={'Yet another project in the works'}
        />
        <Card
          image={testImg}
          title={'Coming soon!'}
          description={'Yet another project in the works'}
        />
      </div>
      <div className="nav">
        <HomeButton />
      </div>
    </PageLayout>
  );
}

export default Projects;
