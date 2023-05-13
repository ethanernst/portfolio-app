import PageLayout from '../components/Layout/PageLayout';
import Card from '../components/UI/Card';
import HomeButton from '../components/Nav/HomeButton';

import testImg from '../images/test-image.jpg';

function About() {
  return (
    <PageLayout>
      <div className="header">
        <h1 className="title">/about</h1>
        <h2 className="subtitle">About me</h2>
      </div>
      <div className="content"></div>
      <div className="nav">
        <HomeButton />
      </div>
    </PageLayout>
  );
}

export default About;
