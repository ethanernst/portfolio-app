import PageLayout from '../components/Layout/PageLayout';

import Card from '../components/UI/Card';
import HomeButton from '../components/Nav/HomeButton';

import testImg from '../images/test-image.jpg';

function Projects() {
  const TITLE = ''; // optional, if null the title with be the location.pathname
  const SUBTITLE = 'Here are some projects I have been working on!';

  const CONTENT = (
    <>
      <Card
        image={testImg}
        title={'Portfolio website'}
        description={'A React website project with animated routes'}
      />
      <Card
        image={testImg}
        title={'Coming soon!'}
        description={'Another project in the works'}
      />
      <Card
        image={testImg}
        title={'Coming soon!'}
        description={'Another project in the works'}
      />
      <Card
        image={testImg}
        title={'Coming soon!'}
        description={'Another project in the works'}
      />
    </>
  );

  const NAV = <HomeButton />;

  return (
    <PageLayout
      title={TITLE}
      subtitle={SUBTITLE}
      content={CONTENT}
      nav={NAV}
    ></PageLayout>
  );
}

export default Projects;
