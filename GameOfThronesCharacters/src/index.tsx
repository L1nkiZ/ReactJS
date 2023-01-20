import React from 'react';
import ReactDOM from 'react-dom/client';
import CharactersList from './pages/CharactersList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CharacterDetails from './pages/CharacterDetails';
import { Provider } from 'react-redux';
import store from './store';

export const THRONES_API = process.env.REACT_APP_THRONES_API_BASE_URL;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters/*" element={<CharactersList />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
