import { createRef } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RouteAnimator from './components/RouteAnimator';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
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
    path: '/contact',
    name: 'Contact',
    animation: 'down',
    element: <Contact />,
    nodeRef: createRef(),
  },
  {
    path: '/about',
    name: 'About',
    animation: 'right',
    element: <About />,
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
