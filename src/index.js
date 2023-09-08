import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import './CSS/media.css';
import "./CSS/anim.css";
import Routed from './Router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routed />
  </React.StrictMode>
);


