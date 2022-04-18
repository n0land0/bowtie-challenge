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
  toggleIsEditingName: () => void;
}

const NameChangeForm: FC<NameChangeFormProps> = ({
  projectId,
  projectName,
  toggleIsEditingName,
}) => {
  const { setProjects } = useContext(AppContext);

  const [inputValue, setInputValue] = useState(projectName);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value);

  const handleBlur = (event: FocusEvent) => toggleIsEditingName();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (projectId) {
      updateProject(inputValue.trim(), projectId).then(() =>
        getProjects().then((projectData) => {
          setProjects(projectData);
        })
      );
    }
    toggleIsEditingName();
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
