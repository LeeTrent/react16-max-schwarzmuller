import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

   constructor(props) {
      super(props);
      console.log("[App.js][constructor] => props:", props);
      this.state = {
      persons: [
         { id:'11', name: 'Casey', age: 11 },
         { id:'22', name: 'Pooh',  age: 9  },
         { id:'33', name: 'Linda', age: 58 },
         { id:'44', name: 'Lee',   age: 64 }
         ],
         showPersons: false
      };   
   }

   componentWillMount() {
      console.log("[App.js][componentWillMount]");
   }

   componentDidMount() {
      console.log("[App.js][componentDidMount]");
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

   console.log("[App.js][render]");

    let persons = null;
    if ( this.state.showPersons ) {
      persons = <Persons  persons={this.state.persons}
                          clicked={this.deletePersonHandler}
                          changed={this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit  appTitle={this.props.title}
                  showPersons={this.state.showPersons} 
                  persons={this.state.persons}
                  clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
