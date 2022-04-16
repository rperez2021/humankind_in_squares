import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid';

/**
 * Creates the grid element.
 * @return {function} Returns the App Parent Element
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo"
          alt="logo" height="100px" width="100px" />
        <p>
          Welcome to Humankind In Squares
          <br></br>
          Feel free to Add!
        </p>
      </header>
      <Grid></Grid>
    </div>
  );
}

export default App;
