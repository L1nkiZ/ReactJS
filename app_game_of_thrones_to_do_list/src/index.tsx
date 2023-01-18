import React from 'react';
import ReactDOM from 'react-dom/client';
import CharacteresList from './components/CharactersList';
import './style.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <CharacteresList/>
  </React.StrictMode>
);