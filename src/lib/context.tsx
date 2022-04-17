import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

import { AppContextProps, Project, Todo } from './models';
import { useProjects } from './useProjects';

export const AppContext = createContext<AppContextProps>({
  projects: [],
  setProjects: () => [],
});

const ContextProvider = ({
  children,
}: PropsWithChildren<Record<string, unknown>>) => {
  const [projects, setProjects] = useState<Project[]>([]);

  const { loading, error, data } = useProjects();

  useEffect(() => {
    if (data.length) setProjects(data);
    console.log(data);
  }, [data]);

  return (
    <AppContext.Provider value={{ projects, setProjects }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
