import React, { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

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

  return (
    <GlobalContext.Provider value={projects}>{children}</GlobalContext.Provider>
  );
};
