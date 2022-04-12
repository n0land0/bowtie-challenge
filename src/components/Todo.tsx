import React, { FC } from 'react';

import { Todo as TodoProps } from '../lib/models';

const Todo: FC<TodoProps> = ({ id, isCompleted, description }) => {
  const handleChange = () => {
    // fetch call to edit todo
    console.log('handleChange');
  };

  return (
    <div>
      <label>
        <input
          type='checkbox'
          name={`todo${id}`}
          checked={isCompleted}
          onChange={handleChange}
        />
        {description}
      </label>
    </div>
  );
};

export default Todo;
