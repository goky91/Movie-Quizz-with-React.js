import React from 'react';

import './App.css';
import Navigation from "./Containers/Navigation"
import GameContainer from "./Containers/GameContainer";
import Footer from "./Components/Footer";

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
