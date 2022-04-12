import React, { FC } from 'react';

import { Todo as TodoProps } from '../lib/models';

const Todo: FC<TodoProps> = ({ id, isCompleted, description }) => {
  return (
    <div>
      <input type='checkbox' name={`todo${id}`} />
      <label>{description}</label>
    </div>
  );
};

export default Todo;
