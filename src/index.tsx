import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './compornent/NavBar';
import { Card } from './compornent/Card';
import { Form } from './compornent/Form';
import { TestForm } from './compornent/TestForm';
import { Profile } from './compornent/Profile';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/about" element={<Card num={1} title='Title' sentence='This is strimg text.' />} />
        <Route path="/test" element={<TestForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
