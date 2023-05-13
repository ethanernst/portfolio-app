import PageLayout from '../components/Layout/PageLayout';
import Card from '../components/UI/Card';
import HomeButton from '../components/Nav/HomeButton';

import testImg from '../images/test-image.jpg';

function Videos() {
  return (
    <PageLayout>
      <div className="header">
        <h1 className="title">/videos</h1>
        <h2 className="subtitle">
          My latest videos, probably mostly FPV content
        </h2>
      </div>
      <div className="content">
        <Card
          image={testImg}
          title={'PoComing soon!'}
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

export default Videos;
