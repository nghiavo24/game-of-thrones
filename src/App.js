import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Houses from './components/Houses/Houses'
import Characters from './components/Characters/Characters';
import axios from 'axios';

const App = () => {



  return (
    <div>
    <Routes>
      <Route path='/' element={<Header />}/>      
      <Route path='/houses' element={<Houses />} />
      <Route path='/characters' element={<Characters />} />
   </Routes> 
   </div>
  );
}

export default App;
