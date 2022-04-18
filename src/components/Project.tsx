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
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(projectName);

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

  const toggleIsEditing = () => setIsEditing(!isEditing);

  const handlers = {
    handleChange(event: ChangeEvent<HTMLInputElement>) {
      setInputValue(event.target.value);
    },

    handleBlur(event: FocusEvent) {
      toggleIsEditing();
    },

    handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      console.log(inputValue);
      if (id) {
        updateProject(inputValue, id).then(() =>
          getProjects().then((projectData) => {
            console.log('data after submitting name change', projectData);
            setProjects(projectData);
          })
        );
      }
      toggleIsEditing();
    },

    handleDelete() {
      if (id) {
        deleteProject(id).then(() =>
          getProjects().then((projectData) => {
            console.log('data after deleting', projectData);
            setProjects(projectData);
          })
        );
      }
    },
  };

  return (
    <article>
      {isEditing ? (
        <NameChangeForm inputValue={inputValue} {...handlers} />
      ) : (
        <div>
          <h3>{projectName}</h3>
          <button onClick={toggleIsEditing}>edit</button>
          <button onClick={handlers.handleDelete}>delete</button>
        </div>
      )}

      {todoElements}
    </article>
  );
};

export default Project;
