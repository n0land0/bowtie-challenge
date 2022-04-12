import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

import { createProject } from '../lib/api';

interface CreateProjectFormProps {
  a?: string;
}

const CreateProjectForm: FC<CreateProjectFormProps> = () => {
  const [projectName, setProjectName] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setProjectName(event.target.value);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createProject({ projectName, todos: [] });
    setProjectName('');
  };

  return (
    <>
      <h2>Create a new project</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='text' value={projectName} />
      </form>
    </>
  );
};

export default CreateProjectForm;
