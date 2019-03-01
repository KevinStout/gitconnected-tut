import * as React from "react";
import logo from './logo.svg';
import './App.css';

import Header from "./components/Header";
import Description from "./components/Description";

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <div className="messingAround">
        <Header/>
      </div>
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Description/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
