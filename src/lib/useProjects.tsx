import { useEffect, useState } from 'react';

import mockData from './data.json';
import { Project } from './models';

// const apiUrl = '';

export const useProjects = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    const setProjectsData = async () => {
      try {
        const projectsData = await getProjectsData();
        setData(projectsData as Project[]);
        setLoading(false);
      } catch (error: any) {
        console.error(error.message);
        setLoading(false);
        setError(error.message);
      }
    };

    setProjectsData();
  });

  return { loading, error, data };
};

const getProjectsData = () =>
  //   fetch(apiUrl)
  //     .then((response) => checkResponse(response))
  //     .then((data) => data.projects);
  new Promise((resolve) => {
    resolve(mockData.projects);
  });

const checkResponse = (response: Response) => {
  if (!response.ok) throw new Error(`${response.status}: bad response`);
  return response.json();
};
