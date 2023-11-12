import React, { createContext, createRef, useEffect, useState } from 'react';

import ProjectDetails from '../pages/ProjectDetails';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [staticRoutes, setStaticRoutes] = useState([]);
  const [dynamicRoutes, setDynamicRoutes] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loadedImages, setLoadedImages] = useState([]);

  // initial projects loader
  useEffect(() => {
    const CACHETIMEOUTINHOURS = 5;

    // load local cache
    const projectsCache = JSON.parse(localStorage.getItem('projectsCache'));
    validateLocalStorageCache(projectsCache);

    // validate or update local cache
    function validateLocalStorageCache(cache) {
      if (!cache) {
        console.log('no cache found, fetching new data');
        fetchProjects();
        return;
      }

      if (!cache?.data.length || !cache?.timestamp) {
        console.log('invalid cache, fetching new data');
        fetchProjects();
        return;
      }

      const cacheAgeInHours = (Date.now() - cache.timestamp) / (1000 * 60 * 60);
      if (cacheAgeInHours > CACHETIMEOUTINHOURS) {
        console.log('outdated cache, fetching new data');
        fetchProjects();
        return;
      }

      setProjects(cache.data);
      console.log('valid cache, loaded data');
    }

    // fetch list of projects from github, update state and local cache
    async function fetchProjects() {
      try {
        fetch('https://api.github.com/users/ethanernst/repos').then(response =>
          response.json().then(data => {
            console.log('fetched new data from github');
            setProjects(data);

            localStorage.setItem(
              'projectsCache',
              JSON.stringify({
                data: [...data],
                timestamp: Date.now(),
              })
            );
          })
        );
      } catch (err) {
        console.error('Failed to fetch projects: ', err);
        return null;
      }
    }
  }, []);

  // generates the dynamic routes after projects have loaded
  useEffect(() => {
    if (!projects) return;

    console.log('generating dynamic routes');
    const newRoutes = projects
      .filter(project => project.name !== 'ethanernst')
      .map(project => {
        return {
          path: `/projects/${project.name}`,
          name: project.name,
          animation: 'page',
          element: <ProjectDetails />,
          nodeRef: createRef(),
        };
      });

    setDynamicRoutes([...newRoutes]);
  }, [projects]);

  return (
    <GlobalContext.Provider
      value={{
        projects,
        staticRoutes,
        setStaticRoutes,
        dynamicRoutes,
        loadedImages,
        setLoadedImages,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
