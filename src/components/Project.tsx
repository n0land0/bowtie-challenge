import React, {
  ChangeEvent,
  FC,
  FocusEvent,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from 'react';

import { getAllTodosByProject, getProjects, updateProject } from '../lib/api';
import { AppContext } from '../lib/context';
import { Project as ProjectProps, Todo as ITodo } from '../lib/models';
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

  const toggleIsEditing = () => setIsEditing(!isEditing);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value);

  const handleBlur = (event: FocusEvent) => toggleIsEditing();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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
  };

  const todoElements = todos.map((todo: ITodo) => (
    <Todo key={todo.id} {...todo} />
  ));
  return (
    <article>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button>save changes</button>
        </form>
      ) : (
        <div>
          <h3>{projectName}</h3>
          <button onClick={toggleIsEditing}>edit</button>
        </div>
      )}

      {todoElements}
    </article>
  );
};

export default Project;
