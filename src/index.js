import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/header/Header.tsx';
import { Today } from './pages/today/Today.tsx';
import { Preview } from './pages/preview/Preview.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';

ReactDOM.render(
  <BrowserRouter>
  <Header title="ToDoList"/>
  <Routes>
    <Route path='/' element={<Today/>}/>
    <Route path='preview' element={<Preview/>}/>
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

