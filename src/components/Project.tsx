import React, { FC } from 'react';

import { Project as ProjectProps } from '../lib/models';
import Todo from './Todo';

const Project: FC<ProjectProps> = ({ id, projectName, todos }) => {
  const todoElements = todos.map((todo) => <Todo key={todo.id} {...todo} />);

  return (
    <article>
      <h3>{projectName}</h3>
      {todoElements}
    </article>
  );
};

export default Project;
