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
  projectId?: number;
  completed: boolean;
  description: string;
  setTodos?: Dispatch<SetStateAction<Todo[]>>;
}
