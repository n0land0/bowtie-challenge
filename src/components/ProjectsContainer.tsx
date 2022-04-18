import { Flex, Heading, VStack } from '@chakra-ui/react';
import React, { FC, useContext } from 'react';

import { AppContext } from '../lib/context';
import { Project as IProject } from '../lib/models';
import CreateProjectForm from './CreateProjectForm';
import Project from './Project';

const ProjectsContainer: FC = () => {
  const { projects } = useContext(AppContext);

  const projectElements = projects.map((project: IProject) => (
    <Project key={project.id} {...project} />
  ));

  return (
    <>
      <CreateProjectForm />
      <Flex direction='column' w='100%' alignItems='center' overflow='scroll'>
        {projectElements.length ? (
          projectElements
        ) : (
          <Heading as='h4' size='md' m='20'>
            No projects created yet!
          </Heading>
        )}
      </Flex>
    </>
  );
};

export default ProjectsContainer;
