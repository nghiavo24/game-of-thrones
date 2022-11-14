import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Houses from './components/Houses/Houses'
import axios from 'axios';

const App = () => {

const[housesDetails, setHousesDetails] = useState([])

  const getHousesDetails = () => {
  axios
  .get('https://api.gameofthronesquotes.xyz/v1/houses')
  .then(res => 
    setHousesDetails(res.data))
  .catch((err) =>{
    console.log(err)}) 
  }
  
  return (
    <div>
      
    <Routes>
      <Route path='/' element={<Header getHousesDetails={getHousesDetails} />}/>      
      <Route path='/houses' element={<Houses housesDetails={housesDetails} />} />
   </Routes> 
   </div>
  );
}

export default App;
