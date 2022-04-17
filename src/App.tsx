import React, { FC, useEffect } from 'react';

import ProjectsContainer from './components/ProjectsContainer';
import { createProject, getProjects } from './lib/api';

interface AppProps {
  a?: string;
}

const App: FC<AppProps> = () => {
  return (
    <main>
      <header></header>
      <ProjectsContainer />
      <footer></footer>
    </main>
  );
};

export default App;
