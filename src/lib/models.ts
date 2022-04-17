import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface AppContextProps {
  children?: ReactNode | ReactNode[] | undefined;
  projects: Project[];
  setProjects: Dispatch<SetStateAction<Project[]>>;
}

export interface Project {
  id?: number;
  projectName: string;
  todos: Todo[];
}

export interface Todo {
  id?: number;
  completed: boolean;
  description: string;
}
