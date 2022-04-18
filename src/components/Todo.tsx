import { Button, Checkbox, Flex, Text } from '@chakra-ui/react';
import React, { ChangeEvent, FC, FocusEvent, FormEvent, useState } from 'react';

import { deleteTodo, getAllTodosByProject, updateTodo } from '../lib/api';
import {
  deleteTodoAndRefetchProjectTodos,
  updateTodoAndRefetchProjectTodos,
} from '../lib/handlers';
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
    console.log('handleSaveDesc');
    updateTodoAndRefetchProjectTodos({
      id,
      projectId,
      completed: isCompleted,
      description: newDescription.trim(),
      setTodos,
    });
    toggleIsEditingDescription();
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewDescription(event.target.value);
  };

  const handleDelete = () => {
    deleteTodoAndRefetchProjectTodos({
      id,
      projectId,
      completed: isCompleted,
      description: newDescription,
      setTodos,
    });
  };

  const toggleIsEditingDescription = () =>
    setIsEditingDescription(!isEditingDescription);

  const formProps = {
    newDescription,
    handleDescriptionChange,
    handleSaveDescription,
  };

  return (
    <Flex w='100%' m='1' h='12'>
      <Checkbox
        isChecked={isCompleted}
        onChange={handleCompletedChange}
        size='lg'
        m='2'
      />
      <Flex w='100%' alignItems='center'>
        {isEditingDescription ? (
          <DescriptionChangeForm {...formProps} />
        ) : (
          <>
            <Text fontSize='xl' m='4'>
              {newDescription}
            </Text>
            <Button
              type='submit'
              onClick={toggleIsEditingDescription}
              colorScheme={'teal'}
              m='1'
              boxShadow='base'
            >
              edit description
            </Button>
          </>
        )}
        <Button
          type='submit'
          onClick={handleDelete}
          w='18%'
          m='1'
          colorScheme='red'
          boxShadow='base'
        >
          delete todo
        </Button>
      </Flex>
    </Flex>
  );
};

export default Todo;
