import { useContext, createRef, useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RouteAnimator from './components/RouteAnimator';

import { GlobalContext } from './store/GlobalContext';

import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

// static routes
const routes = [
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

function App() {
  const { dynamicRoutes, setStaticRoutes } = useContext(GlobalContext);

  // update static routes in context on first load
  // static routes need to be in this file to prevent errors
  // trying to render an empty router on first load
  useEffect(() => {
    setStaticRoutes(routes);
  }, []);

  // set initial router
  const [router, setRouter] = useState(
    createBrowserRouter([
      {
        path: '/',
        element: <RouteAnimator />,
        children: routes.map(route => ({
          index: route.path === '/',
          path: route.path === '/' ? undefined : route.path,
          element: route.element,
        })),
      },
    ])
  );

  // update router with dynamic routes once they are generated
  useEffect(() => {
    if (!dynamicRoutes) {
      return;
    }

    const allRoutes = [...routes, ...dynamicRoutes];
    console.log('updating routes: ', allRoutes);
    const newRouter = createBrowserRouter([
      {
        path: '/',
        element: <RouteAnimator />,
        children: allRoutes.map(route => ({
          index: route.path === '/',
          path: route.path === '/' ? undefined : route.path,
          element: route.element,
        })),
      },
    ]);

    setRouter(newRouter);
  }, [dynamicRoutes]);

  return <RouterProvider router={router} />;
}

export default App;
