import React, {
  ChangeEvent,
  FC,
  FocusEvent,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  createTodo,
  deleteProject,
  getAllTodosByProject,
  getProjects,
  updateProject,
} from '../lib/api';
import { AppContext } from '../lib/context';
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
    if (id) {
      deleteProject(id).then(() =>
        getProjects().then((projectData) => {
          setProjects(projectData);
        })
      );
    }
  };

  const handleAddTodo = () => {
    if (id) {
      createTodo(id, 'new todo').then(() =>
        getAllTodosByProject(id).then((todosData) => {
          setTodos(todosData);
        })
      );
    }
  };

  const toggleIsEditingName = () => setIsEditingName(!isEditingName);

  const formProps = { projectId: id, projectName, toggleIsEditingName };

  return (
    <article>
      {isEditingName ? (
        <NameChangeForm {...formProps} />
      ) : (
        <div>
          <h3>{projectName}</h3>
          <button onClick={toggleIsEditingName}>edit project name</button>
          <button onClick={handleDelete}>delete project</button>
          <button onClick={handleAddTodo}>add todo</button>
        </div>
      )}
      {todoElements.length
        ? todoElements
        : 'No todos added yet for this project.'}
    </article>
  );
};

export default Project;
