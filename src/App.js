import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React contained in Docker, deployed to AWS with CI using Travis!</p>
      </header>
    </div>
  );
}

export default App;
