import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar'
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
      <Header />
      <Navbar />
    </div>
  );
}

export default App;
