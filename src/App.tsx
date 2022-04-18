import { Container, Flex, Heading } from '@chakra-ui/react';
import React, { FC, useEffect } from 'react';

import ProjectsContainer from './components/ProjectsContainer';
import { createProject, getProjects } from './lib/api';

const App: FC = () => {
  return (
    <Flex
      as='main'
      direction='column'
      w='100vw'
      h='100vh'
      m={0}
      p={0}
      alignItems='center'
      bg='gray.300'
    >
      <header>
        <Heading as='h1' size='3xl' m='5'>
          Todo!
        </Heading>
      </header>
      <ProjectsContainer />
    </Flex>
  );
};

export default App;
