import { Dispatch, SetStateAction } from 'react';

import { deleteTodo, getAllTodosByProject, updateTodo } from './api';
import { Todo } from './models';

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

const refetchProjectTodos = (
  projectId: number,
  setTodos: Dispatch<SetStateAction<Todo[]>>
) => {
  getAllTodosByProject(projectId).then((todosData) => {
    setTodos(todosData);
  });
};
