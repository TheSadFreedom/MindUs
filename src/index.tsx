import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css';
import App from './App';
import { Api_Client } from './services/Api_client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



console.log("Я index")

root.render(
  <App />
);
