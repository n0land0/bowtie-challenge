import { Project } from './models';

export const createProject = (params: Project) => {
  // fetch(apiUrl, {
  // method: "POST",
  // body: JSON.stringify(params)
  // })
  localStorage.setItem(Date.now().toString(), JSON.stringify(params));
};
