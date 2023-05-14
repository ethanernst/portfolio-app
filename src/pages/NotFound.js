import PageLayout from '../components/Layout/PageLayout';

function NotFound() {
  // script to enable SPA for github pages from https://github.com/rafgraph/spa-github-pages
  var pathSegmentsToKeep = 1;

  var l = window.location;
  l.replace(
    l.protocol +
      '//' +
      l.hostname +
      (l.port ? ':' + l.port : '') +
      l.pathname
        .split('/')
        .slice(0, 1 + pathSegmentsToKeep)
        .join('/') +
      '/?/' +
      l.pathname
        .slice(1)
        .split('/')
        .slice(pathSegmentsToKeep)
        .join('/')
        .replace(/&/g, '~and~') +
      (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash
  );

  return (
    <PageLayout>
      <h1 className="title">Page not found</h1>
    </PageLayout>
  );
}

export default NotFound;
