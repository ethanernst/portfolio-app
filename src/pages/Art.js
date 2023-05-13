import PageLayout from '../components/Layout/PageLayout';
import Card from '../components/UI/Card';
import HomeButton from '../components/Nav/HomeButton';

import testImg from '../images/test-image.jpg';

function Art() {
  return (
    <PageLayout>
      <div className="header">
        <h1 className="title">/3d</h1>
        <h2 className="subtitle">A showcase for my 3d projects and renders</h2>
      </div>
      <div className="content">
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

export default Art;
