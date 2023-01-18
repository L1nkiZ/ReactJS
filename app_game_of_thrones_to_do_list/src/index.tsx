import React from 'react';
import ReactDOM from 'react-dom/client';
import CharactersList from './pages/CharactersList';
import './style.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <CharactersList />
  </React.StrictMode>
);
