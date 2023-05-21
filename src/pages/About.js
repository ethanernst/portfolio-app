import PageLayout from '../components/Layout/PageLayout';

import HomeButton from '../components/Nav/HomeButton';

function About() {
  const TITLE = ''; // optional, if null the title with be the location.pathname
  const SUBTITLE = 'About me';

  const CONTENT = <></>;

  const NAV = <HomeButton />;

  return (
    <PageLayout title={TITLE} subtitle={SUBTITLE} content={CONTENT} nav={NAV} />
  );
}

export default About;
