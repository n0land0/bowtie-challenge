import React, { FC, useEffect, useState } from 'react';

import { getAllTodosByProject } from '../lib/api';
import { Project as ProjectProps, Todo as ITodo } from '../lib/models';
import Todo from './Todo';

const Project: FC<ProjectProps> = ({ id, projectName }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const loadTodos = async () => {
      if (id) {
        const todosData = await getAllTodosByProject(id);
        setTodos(todosData);
      }
    };

    loadTodos();
  }, [id]);

  const todoElements = todos.map((todo: ITodo) => (
    <Todo key={todo.id} {...todo} />
  ));
  return (
    <article>
      <h3>{projectName}</h3>
      {todoElements}
    </article>
  );
};

export default Project;
