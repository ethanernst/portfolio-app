import PageLayout from '../components/Layout/PageLayout';

import HomeButton from '../components/Nav/HomeButton';

function NotFound() {
  const TITLE = 'Something went wrong'; // optional, if null the title with be the location.pathname
  const SUBTITLE = 'The page you are looking for could not be found';

  const CONTENT = <></>;

  const NAV = <HomeButton />;

  return (
    <PageLayout title={TITLE} subtitle={SUBTITLE} content={CONTENT} nav={NAV} />
  );
}

export default NotFound;
