import './styles/index.scss';

import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import ContextProvider from './lib/context';

const container = document.getElementById('root');
if (!container) {
  throw new Error("The element #container wasn't found");
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ContextProvider>
      <ChakraProvider resetCSS={true}>
        <App />
      </ChakraProvider>
    </ContextProvider>
  </React.StrictMode>
);
