import React from 'react';

import './App.css';
import Navigation from "./Navigation/Navigation";
import GameContainer from "./GameContainer/GameContainer";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
        <Navigation />
        <GameContainer />
        <Footer />
    </div>
  );
}

export default App;
