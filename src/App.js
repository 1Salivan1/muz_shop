import './App.css';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Main from './Main';
import Nav from './Nav';
import Shop from './pages/Shop';
import Instruments from './pages/Instruments';
import Contacts from './pages/Contacts';
import OfferCard from './components/OfferCard';
import logo from './img/logo.png';
import guitar from './img/guitar.png';
import violence from './img/violence.png';
import drums from './img/drums.png';
import saxophone from './img/saxophone.png';
import telegram from './img/telegram.png';
import instagram from './img/instagram.png';
import facebook from './img/facebook.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </div>
  );
}

export default App;
