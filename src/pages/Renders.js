import PageLayout from '../components/Layout/PageLayout';

import Card from '../components/UI/Card';
import HomeButton from '../components/Nav/HomeButton';

import testImg from '../images/test-image.jpg';

function Renders() {
  const TITLE = ''; // optional, if null the title with be the location.pathname
  const SUBTITLE = 'A showcase for my 3d projects';

  const CONTENT = (
    <>
      <Card
        image={testImg}
        title={'Coming soon!'}
        description={'Another render crunching away'}
      />
      <Card
        image={testImg}
        title={'Coming soon!'}
        description={'Another render crunching away'}
      />
      <Card
        image={testImg}
        title={'Coming soon!'}
        description={'Another render crunching away'}
      />
      <Card
        image={testImg}
        title={'Coming soon!'}
        description={'Another render crunching away'}
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

export default Renders;
