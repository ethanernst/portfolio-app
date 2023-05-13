import { createRef } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RouteAnimator from './components/RouteAnimator';

import Home from './pages/Home';
import Videos from './pages/Videos';
import About from './pages/About';
import Projects from './pages/Projects';
import Art from './pages/Art';
import NotFound from './pages/NotFound';

const routes = [
  {
    path: '/',
    name: 'Home',
    animation: 'center',
    element: <Home />,
    nodeRef: createRef(),
  },
  {
    path: '/projects',
    name: 'Projects',
    animation: 'left',
    element: <Projects />,
    nodeRef: createRef(),
  },
  {
    path: '/about',
    name: 'About',
    animation: 'down',
    element: <About />,
    nodeRef: createRef(),
  },
  {
    path: '/videos',
    name: 'Videos',
    animation: 'right',
    element: <Videos />,
    nodeRef: createRef(),
  },
  {
    path: '/art',
    name: 'Art',
    animation: 'up',
    element: <Art />,
    nodeRef: createRef(),
  },
  {
    path: '*',
    name: '404',
    animation: 'up',
    element: <NotFound />,
    nodeRef: createRef(),
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteAnimator routes={routes} />,
    children: routes.map(route => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
