import React from 'react';
import './App';
import Header from './pages/header/Header';
import Offer from './pages/offers/Offers';
function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header/>
        <Offer/>
      </div>
    </div>
  );
}

export default App;
