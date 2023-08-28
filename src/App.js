import { HashRouter } from 'react-router-dom';
import React from 'react';
import Main from './pages/Main';
import Nav from './Nav';
import Shop from './pages/Shop';
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
      <HashRouter>
        <Nav />
      </HashRouter>
    </div>
  );
}

export default App;
