import { createRef, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { GlobalContextProvider } from './store/GlobalContext';

import RouteAnimator from './components/RouteAnimator';

import Home from './pages/Home';
// import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
// import Renders from './pages/Renders';
// import Videos from './pages/Videos';
import NotFound from './pages/NotFound';

export const routes = [
  {
    path: '/',
    name: 'home',
    animation: 'page',
    element: <Home />,
    nodeRef: createRef(),
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   animation: 'down',
  //   element: <About />,
  //   nodeRef: createRef(),
  // },
  {
    path: '/projects',
    name: 'projects',
    animation: 'page',
    element: <Projects />,
    nodeRef: createRef(),
  },
  {
    path: '/projects/:id',
    name: 'projectDetails',
    animation: 'project',
    element: <ProjectDetails />,
    nodeRef: createRef(),
  },
  // {
  //   path: '/videos',
  //   name: 'Videos',
  //   animation: 'right',
  //   element: <Videos />,
  //   nodeRef: createRef(),
  // },
  // {
  //   path: '/renders',
  //   name: 'Renders',
  //   animation: 'up',
  //   element: <Renders />,
  //   nodeRef: createRef(),
  // },
  {
    path: '*',
    name: '404',
    animation: 'page',
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
  return (
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  );
}

export default App;
