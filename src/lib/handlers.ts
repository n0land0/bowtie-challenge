import { Dispatch, SetStateAction } from 'react';

import {
  createTodo,
  deleteProject,
  deleteTodo,
  getAllTodosByProject,
  getProjects,
  updateTodo,
} from './api';
import { Project, Todo } from './models';

export const deleteProjectAndRefetchProjects = (
  id: number | undefined,
  setProjects: Dispatch<SetStateAction<Project[]>>
) => {
  if (id) {
    deleteProject(id).then(() => refetchProjects(setProjects));
  }
};

export const createTodoAndRefetchProjectTodos = (
  projectId: number | undefined,
  description: string,
  setTodos: Dispatch<SetStateAction<Todo[]>>
) => {
  if (projectId && setTodos) {
    createTodo(projectId, description).then(() => {
      refetchProjectTodos(projectId, setTodos);
    });
  }
};

export const updateTodoAndRefetchProjectTodos = ({
  id: todoId,
  projectId,
  completed,
  description,
  setTodos,
}: Todo) => {
  if (todoId && projectId && setTodos) {
    updateTodo(todoId, projectId, description, completed).then(() =>
      refetchProjectTodos(projectId, setTodos)
    );
  }
};

export const deleteTodoAndRefetchProjectTodos = ({
  id: todoId,
  projectId,
  completed,
  description,
  setTodos,
}: Todo) => {
  if (todoId && projectId && setTodos) {
    deleteTodo(todoId, projectId).then(() =>
      refetchProjectTodos(projectId, setTodos)
    );
  }
};

const refetchProjects = (setProjects: Dispatch<SetStateAction<Project[]>>) => {
  getProjects().then((projectData) => {
    setProjects(projectData);
  });
};

const refetchProjectTodos = (
  projectId: number,
  setTodos: Dispatch<SetStateAction<Todo[]>>
) => {
  getAllTodosByProject(projectId).then((todosData) => {
    setTodos(todosData);
  });
};
