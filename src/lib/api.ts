import { Project } from './models';

const apiUrl = '/api/v1';

export const getProjects = () => {
  return fetch(`${apiUrl}/projects`).then((response) =>
    checkResponse(response)
  );
};

export const createProject = (projectName: string) => {
  return fetch(`${apiUrl}/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      projectName,
    }),
  }).then((response) => checkResponse(response));
};

const checkResponse = (response: Response) => {
  if (!response.ok) throw new Error(`${response.status}: bad response`);
  return response.json();
};
