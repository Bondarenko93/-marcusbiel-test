import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContextProvider } from './context/AuthContext.js';
import App from './App';

const AppProvider = () => {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppProvider />)

