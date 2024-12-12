import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';


const elem = <h2>eeeeq</h2>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App></App>
  </StrictMode>  
);


