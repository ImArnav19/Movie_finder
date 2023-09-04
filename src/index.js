import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';


import App from './App.js'
const cont = document.getElementById('root');
const root = createRoot(cont);
root.render(<App />)