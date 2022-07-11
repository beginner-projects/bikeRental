import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BlockchainProvider } from './context/BlockchainContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BlockchainProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BlockchainProvider>
);


