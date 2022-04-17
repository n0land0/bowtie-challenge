import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

import { AppContextProps, Project, Todo } from './models';
import { useProjects } from './useProjects';

const AppContext = createContext<AppContextProps>({
  projects: [],
  setProjects: () => [],
});

const ContextProvider = ({ children }: PropsWithChildren<AppContextProps>) => {
  const [projects, setProjects] = useState<Project[]>([]);

  const { loading, error, data } = useProjects();

  useEffect(() => {
    if (data.length) setProjects(data);
  }, [data]);

  const value = {
    projects,
    setProjects,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default ContextProvider;
