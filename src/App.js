import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Houses from './components/Houses/Houses'
import Characters from './components/Characters/Characters';
import About from './components/About/About';
import Episodes from './components/Episodes/Episodes';
import HousesDetails from './components/HousesDetails/HousesDetails';
import Quotes from './components/Quotes/Quotes';
import CommentBox from './components/CommentBox/CommentBox';
import Subscribe from './components/Subscribe/Subscribe';
import { useState } from 'react';

const App = () => {
  const[openWindow, setOpenWindow] = useState(false);

  return (
    <div>
      <nav>
      <div className='main-header'>
            <Link to='/'><div className="first-header">Game of Thrones</div></Link>
            <div className='nav-bar'>
                <Link to='/about' ><div className="nav-btn">About</div></Link>
                <Link to='/characters' ><div className="nav-btn">Characters</div></Link>
                <Link to='/episodes' ><div className="nav-btn">Episodes</div></Link>
                <Link to='/houses' ><div className="nav-btn">Houses</div></Link>
                <Link to='/quotes' ><div className="nav-btn">Quotes</div></Link>
                <Link to='/comments' ><div className="nav-btn">Comment</div></Link>
            </div>
            <button 
            onClick={() => {
              setOpenWindow(true);
            }}
            className='open-subscribe-window'>
            Subscribe
            </button>
            {openWindow && <Subscribe openWindow={openWindow} setOpenWindow={setOpenWindow} />}
        </div>
        
      </nav>
    <Routes>
      <Route path='/houses' element={<Houses />} />
      <Route path='/characters' element={<Characters />} />
      <Route path='/about' element={<About />} />
      <Route path='/episodes' element={<Episodes />} />
      <Route path='/houses/:houseName' element={<HousesDetails />} />
      <Route path='/quotes' element={<Quotes />} ></Route>
      <Route path='/comments' element={<CommentBox />} ></Route>
   </Routes> 
   </div>
  );
}

export default App;
