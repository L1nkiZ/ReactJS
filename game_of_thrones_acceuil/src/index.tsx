import React from 'react';
import ReactDOM from 'react-dom/client';
import CharactersList from './pages/CharactersList';
import './style.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <CharactersList />
  </React.StrictMode>
);


<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Personnages" element={<AddCharacters />} />
    <Route path="/test/:id" element={<TestPageWithId />} />
  </Routes>
</BrowserRouter>