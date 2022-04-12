import React, { FC } from 'react';

import ProjectsContainer from './components/ProjectsContainer';

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
