import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { id:'11', name: 'Casey', age: 11 },
      { id:'22', name: 'Pooh',  age: 9  },
      { id:'33', name: 'Linda', age: 58 },
      { id:'44', name: 'Lee',   age: 64 }
    ],
    showPerson: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return (p.id === id);
    });

    // Older approach
    //const person = Object.assign( {}, this.state.persons[personIndex] );
    
    // Newer ES6 approach
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons });
  }
  
  deletePersonHandler = (index) => {
    //const persons = [ ... this.state.persons ]; // ES-6 spread operator
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState( {persons: persons} );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow} );
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      curosr: 'pointer',
      ':hover' : {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if ( this.state.showPersons ) {
      persons = (
          <div>
            {
              this.state.persons.map( (person, index) => {
                  return <Person
                            key={person.id}
                            name={person.name}
                            age={person.age} 
                            click={ () => this.deletePersonHandler(index) }
                            changed={ (event) => this.nameChangedHandler(event, person.id)} />
              })
            }
        </div>         
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'pink',
        color: 'black'
      };
    }

    // The join(' ') method will convert 
    // this string array to a string
    // with a space between each word
    // (i.e. 'red bold')
    //let classes = ['red', 'bold'].join(' ');

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }    

    return (
      <StyleRoot>
        <div className="App">
          <h1>This is a React 16.5.2 Application</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Names
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
