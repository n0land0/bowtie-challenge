import React, { createContext, PropsWithChildren, useState } from 'react';

import { AppContextProps, Project, Todo } from './models';

const AppContext = createContext<AppContextProps>({});

const ContextProvider = ({ children }: PropsWithChildren<AppContextProps>) => {
  const value = {};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default ContextProvider;
