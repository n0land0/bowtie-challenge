import { getAllTodosByProject, updateTodo } from './api';
import { Todo } from './models';

export const updateTodoAndRefetchProjectTodos = ({
  id,
  projectId,
  completed,
  description,
  setTodos,
}: Todo) => {
  if (id && projectId && setTodos) {
    updateTodo(id, projectId, description, completed).then(() =>
      getAllTodosByProject(projectId).then((todosData) => {
        setTodos(todosData);
      })
    );
  }
};
