import {
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Spacer,
} from '@chakra-ui/react';
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
    <Flex direction='column' w='100%' alignItems='center'>
      <Heading m='5'>Create a new project</Heading>
      <Spacer />
      <form onSubmit={handleSubmit} style={{ width: '50%' }}>
        <FormControl display='flex' alignItems='center'>
          <Input
            onChange={handleChange}
            type='text'
            value={projectName}
            placeholder='project name'
            required
            w='80%'
            m='2'
            bg='white'
            boxShadow='base'
          />
          <Spacer />
          <Button type='submit' colorScheme={'teal'} m='2'>
            create project
          </Button>
        </FormControl>
        <Spacer />
      </form>
    </Flex>
  );
};

export default CreateProjectForm;
