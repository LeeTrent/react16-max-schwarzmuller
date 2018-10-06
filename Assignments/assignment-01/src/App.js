import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
  state = {
    userName: 'Super Max'
  }

  userNameChangedHandler = (event) => {
    this.setState( { userName: event.target.value } );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <UserInput 
          changed={this.userNameChangedHandler}
          currentName={this.state.userName}
          />
        <UserOutput userName={this.state.userName}/>
      </div>
    );
  }
}

export default App;
