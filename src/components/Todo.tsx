import React, { ChangeEvent, FC, FocusEvent, FormEvent, useState } from 'react';

import { getAllTodosByProject, updateTodo } from '../lib/api';
import { updateTodoAndRefetchProjectTodos } from '../lib/handlers';
import { Todo as TodoProps } from '../lib/models';
import DescriptionChangeForm from './DescriptionChangeForm';

const Todo: FC<TodoProps> = ({
  id,
  projectId,
  completed,
  description,
  setTodos,
}) => {
  const [isCompleted, setIsCompleted] = useState(completed);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [newDescription, setNewDescription] = useState(description);

  const handleCompletedChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsCompleted(event.target.checked); // isCompleted not updating in time to be used with fetch call 🤔
    updateTodoAndRefetchProjectTodos({
      id,
      projectId,
      completed: event.target.checked,
      description: newDescription,
      setTodos,
    });
  };

  const handleSaveDescription = () => {
    updateTodoAndRefetchProjectTodos({
      id,
      projectId,
      completed: isCompleted,
      description: newDescription,
      setTodos,
    });
    toggleIsEditingDescription();
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewDescription(event.target.value);
  };

  const toggleIsEditingDescription = () =>
    setIsEditingDescription(!isEditingDescription);

  const formProps = {
    newDescription,
    handleDescriptionChange,
    handleSaveDescription,
  };

  return (
    <div>
      <input
        type='checkbox'
        checked={isCompleted}
        onChange={handleCompletedChange}
      />
      {isEditingDescription ? (
        <DescriptionChangeForm {...formProps} />
      ) : (
        <div>
          <p>{newDescription}</p>
          <button onClick={toggleIsEditingDescription}>edit description</button>
        </div>
      )}
    </div>
  );
};

export default Todo;
