import React, { ChangeEvent, FC, FocusEvent, FormEvent, useState } from 'react';

import { Todo as TodoProps } from '../lib/models';

const Todo: FC<TodoProps> = ({ id, projectId, completed, description }) => {
  const [isCompleted, setIsCompleted] = useState(completed);
  const [newDescription, setNewDescription] = useState(description);

  // separate change handlers for description & checkbox?
  const handleCompletedChange = (event: ChangeEvent<HTMLInputElement>) => {
    // fetch call to edit todo
    // e.g. const editedTodo = { ...todo, completed: isCompleted }
    // e.g. updateTodo(editedTodo)
    setIsCompleted(event.target.checked);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewDescription(event.target.value);
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement> | FocusEvent<HTMLInputElement | Element>
  ) => {
    event.preventDefault();
    description === newDescription
      ? console.log('not submitted')
      : console.log('submitted');
  };

  // const handleSaveDescription = () => {};

  return (
    <div>
      <input
        type='checkbox'
        name={`todo${id}`}
        checked={isCompleted}
        onChange={handleCompletedChange}
      />
      <input
        type='text'
        value={newDescription}
        onChange={handleDescriptionChange}
        onBlur={handleSubmit}
      />
      {/* <button onClick={handleSaveDescription}>save description</button> */}
    </div>
  );
};

export default Todo;
