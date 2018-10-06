import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: 'Casey', age: 11 },
      { name: 'Pooh',  age: 9  },
      { name: 'Linda', age: 58 },
      { name: 'Lee',   age: 64 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: 'Moe', age: 11 },
        { name: 'Larry',  age: 9  },
        { name: 'Curly', age: 58 },
        { name: newName, age: 58 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 11 },
        { name: event.target.value,  age: 9  },
        { name: event.target.value, age: 58 },
        { name: event.target.value, age: 58 }
      ]
    })
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      curosr: 'pointer'
    };



    return (
      <div className="App">
        <h1>This is a React 16.5.2 Application</h1>
        <p>This is really working!</p>
        <Person name="Casey" age="11"/>
        <Person name="Pooh" age="9"/>
        <Person name="Lee" age="64">My hobbies: Reading</Person>
        <hr/>
        <hr/>
        {/* <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name 1
        </button> */}
        <button
          style={style}
          onClick={ () => this.switchNameHandler('Maximilian' )}>Switch Name 2
        </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>                
        <Person
            name={this.state.persons[3].name}
            age={this.state.persons[3].age}
            click={this.switchNameHandler.bind(this, 'Max')}
            changed={this.nameChangedHandler}>My hobbies: Reading
        </Person>
      </div>
    );
  }
}

export default App;
