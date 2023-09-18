import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Item from './components/Item.js';
import HomePage from './components/HomePage.js';
import LoginPage from './components/LoginPage.js';
import InitPage from  './components/InitPage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<InitPage/>} />
          <Route exact path="/AppLogin" element={<LoginPage/>} />
          <Route exact path="/AppHome" element={<HomePage/>} />
          <Route exact path="/AppItem" element={<Item/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();