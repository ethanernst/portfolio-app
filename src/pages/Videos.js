import PageLayout from '../components/Layout/PageLayout';

import Card from '../components/UI/Cards/Card';
import HomeButton from '../components/Nav/HomeButton';

import testImg from '../images/test-image.jpg';

function Videos() {
  const TITLE = ''; // optional, null blank the title with be the location.pathname
  const SUBTITLE = 'My latest videos, probably mostly FPV content';

  const CONTENT = (
    <>
      <Card
        image={testImg}
        title={'Coming soon!'}
        description={'Another project on the timeline'}
      />
      <Card
        image={testImg}
        title={'Coming soon!'}
        description={'Another project on the timeline'}
      />
      <Card
        image={testImg}
        title={'Coming soon!'}
        description={'Another project on the timeline'}
      />
      <Card
        image={testImg}
        title={'Coming soon!'}
        description={'Another project on the timeline'}
      />
    </>
  );

  const NAV = <HomeButton />;

  return (
    <PageLayout title={TITLE} subtitle={SUBTITLE} content={CONTENT} nav={NAV} />
  );
}

export default Videos;
