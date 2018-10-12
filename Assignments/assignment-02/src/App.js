import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({
      userInput: event.target.value
    });
  }

  deleteCharHandler = (index) => {
    // The split() function converts userInput
    // to an array of characters
    const text = this.state.userInput.split('');
    
    // The splice() function removes characters
    // from the chararacter array at postion index
    // (1 = # of chars to remove)
    text.splice(index, 1);

    // The join() function converts the 
    // character array back to a string
    const updatedText = text.join('');

    this.setState( {
      userInput: updatedText
    });
  }

  render() {
    // the split() function will convert userInput into a list
    // so we can use the map() function
    const charList = this.state.userInput.split('').map((ch,index) => {
      return <Char 
                character={ch}
                key={index}
                clicked={ () => this.deleteCharHandler(index) } />;
    });

    return (
      <div className="App">
        <h1>Assignment 2</h1>
        <hr/>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.inputChangedHandler} />
        <p>{this.state.userInput}</p>
        <Validation
          inputLength={this.state.userInput.length}/>
        {charList}     
      </div>
    );
  }
}

export default App;
