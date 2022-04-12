export interface AppContextProps {
  a?: string;
}

export interface Project {
  projectName: string;
  todos: Todo[];
}

export interface Todo {
  isCompleted: boolean;
  description: string;
}
