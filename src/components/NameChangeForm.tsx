import React, {
  ChangeEvent,
  FC,
  FocusEvent,
  FormEvent,
  useContext,
  useState,
} from 'react';

import { getProjects, updateProject } from '../lib/api';
import { AppContext } from '../lib/context';

interface NameChangeFormProps {
  projectId: number | undefined;
  projectName: string;
  toggleIsEditing: () => void;
}

const NameChangeForm: FC<NameChangeFormProps> = ({
  projectId,
  projectName,
  toggleIsEditing,
}) => {
  const { setProjects } = useContext(AppContext);

  const [inputValue, setInputValue] = useState(projectName);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value);

  const handleBlur = (event: FocusEvent) => toggleIsEditing();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);
    if (projectId) {
      updateProject(inputValue, projectId).then(() =>
        getProjects().then((projectData) => {
          console.log('data after submitting name change', projectData);
          setProjects(projectData);
        })
      );
    }
    toggleIsEditing();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button>save changes</button>
    </form>
  );
};

export default NameChangeForm;
