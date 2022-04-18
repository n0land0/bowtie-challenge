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

  const handleDelete = () => {
    if (id) {
      deleteProject(id).then(() =>
        getProjects().then((projectData) => {
          console.log('data after deleting', projectData);
          setProjects(projectData);
        })
      );
    }
  };
  const toggleIsEditing = () => setIsEditing(!isEditing);
  const formProps = { projectId: id, projectName, toggleIsEditing };

  return (
    <article>
      {isEditing ? (
        <NameChangeForm {...formProps} />
      ) : (
        <div>
          <h3>{projectName}</h3>
          <button onClick={toggleIsEditing}>edit</button>
          <button onClick={handleDelete}>delete</button>
        </div>
      )}
      {todoElements}
    </article>
  );
};

export default Project;
