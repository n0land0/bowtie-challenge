import { Button, Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import React, { FC, useContext, useEffect, useState } from 'react';

import {
  createTodo,
  deleteProject,
  getAllTodosByProject,
  getProjects,
} from '../lib/api';
import { AppContext } from '../lib/context';
import {
  createTodoAndRefetchProjectTodos,
  deleteProjectAndRefetchProjects,
} from '../lib/handlers';
import { Project as ProjectProps, Todo as ITodo } from '../lib/models';
import NameChangeForm from './NameChangeForm';
import Todo from './Todo';

const Project: FC<ProjectProps> = ({ id, projectName }) => {
  const { setProjects } = useContext(AppContext);

  const [todos, setTodos] = useState<ITodo[]>([]);
  const [isEditingName, setIsEditingName] = useState(false);

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
    <Todo key={todo.id} {...todo} setTodos={setTodos} />
  ));

  const handleDelete = () => {
    deleteProjectAndRefetchProjects(id, setProjects);
  };

  const handleAddTodo = () => {
    createTodoAndRefetchProjectTodos(id, 'new todo', setTodos);
  };

  const toggleIsEditingName = () => setIsEditingName(!isEditingName);

  const formProps = { projectId: id, projectName, toggleIsEditingName };

  return (
    <Flex
      as='article'
      direction='column'
      alignItems='center'
      w='50%'
      m='2.5'
      p='2.5'
      bg='blue.100'
      borderRadius='md'
      boxShadow='md'
      textAlign='center'
    >
      <Flex direction='column' justifyContent='center' h='40'>
        {isEditingName ? (
          <NameChangeForm {...formProps} />
        ) : (
          <>
            <Heading as='h3' size='lg' m='2.5' textAlign='center'>
              {projectName}
            </Heading>
            <Flex m='2.5'>
              <Button
                type='submit'
                onClick={toggleIsEditingName}
                colorScheme={'teal'}
                m='1'
                boxShadow='base'
              >
                edit project name
              </Button>
              <Button
                type='submit'
                onClick={handleDelete}
                colorScheme='red'
                m='1'
                boxShadow='base'
              >
                delete project
              </Button>
              <Button
                type='submit'
                onClick={handleAddTodo}
                colorScheme='purple'
                m='1'
                boxShadow='base'
              >
                add todo
              </Button>
            </Flex>
          </>
        )}
      </Flex>
      <Flex direction='column' w='100%'>
        {todoElements.length ? (
          todoElements
        ) : (
          <Text fontSize='lg'>No todos added yet for this project.</Text>
        )}
      </Flex>
    </Flex>
  );
};

export default Project;
