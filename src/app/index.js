// src/index.js
import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from '.';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

