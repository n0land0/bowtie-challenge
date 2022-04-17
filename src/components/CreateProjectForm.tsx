import React, { ChangeEvent, FC, FormEvent, useContext, useState } from 'react';

import { createProject, getProjects } from '../lib/api';
import { AppContext } from '../lib/context';
import { useProjects } from '../lib/useProjects';

const CreateProjectForm: FC = () => {
  const { projects, setProjects } = useContext(AppContext);

  const [projectName, setProjectName] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setProjectName(event.target.value);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createProject(projectName).then(() =>
      getProjects().then((projectData) => {
        setProjects(projectData);
      })
    );
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
