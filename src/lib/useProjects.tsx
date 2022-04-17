import { useContext, useEffect, useState } from 'react';

import { getProjects } from './api';
import { AppContext } from './context';
import { Project } from './models';

export const useProjects = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    const setProjectsData = async () => {
      try {
        const projectsData = await getProjects();
        setData(projectsData);
        setLoading(false);
      } catch (error: any) {
        console.error(error.message);
        setLoading(false);
        setError(error.message);
      }
    };
    setProjectsData();
  }, []);

  return { loading, error, data };
};
