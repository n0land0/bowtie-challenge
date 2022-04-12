export interface AppContextProps {
  a?: string;
}

export interface Project {
  id: number;
  projectName: string;
  todos: Todo[];
}

export interface Todo {
  id: number;
  completed: boolean;
  description: string;
}
