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

export const updateProject = (projectName: string, projectId: number) => {
  return fetch(`${apiUrl}/projects/${projectId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      projectName,
    }),
  }).then((response) => checkResponse(response));
};

export const deleteProject = (projectId: number) => {
  return fetch(`${apiUrl}/projects/${projectId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => checkResponse(response));
  // remember to invoke delete todos fxn here
};

export const getAllTodosByProject = (projectId: number) => {
  return fetch(`${apiUrl}/projects/${projectId}/todos`).then((response) =>
    checkResponse(response)
  );
};

export const createTodo = (projectId: number, todoDescription: string) => {
  return fetch(`${apiUrl}/projects/${projectId}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      projectId,
      todoDescription,
    }),
  }).then((response) => checkResponse(response));
};

export const updateTodo = (
  todoId: number,
  projectId: number,
  description: string,
  completed: boolean
) => {
  console.log(todoId, projectId, description, completed);
  return fetch(`${apiUrl}/projects/${projectId}/todos/${todoId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      description,
      completed,
    }),
  }).then((response) => checkResponse(response));
};

const checkResponse = (response: Response) => {
  if (!response.ok) throw new Error(`${response.status}: bad response`);
  return response.json();
};
