import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
   constructor(props) {
      super(props);
      console.log("[Persons.js][constructor] => props:", props);
   }

   componentWillMount() {
      console.log("[Persons.js][componentWillMount]");
   }

   componentDidMount() {
      console.log("[Persons.js][componentDidMount]");
   }

   componentWillReceiveProps(nextProps) {
      console.log("[Persons.js][componentWillReceiveProps]", nextProps);
   }

   //////////////////////////////////////////////////////////////////////////////////////////
   // Don't need to do this if we're extending 'PureComponent'
   // PureComponent does this automatically
   //////////////////////////////////////////////////////////////////////////////////////////
   // shouldComponentUpdate(nextProps, nextState) {
   //    console.log("[Persons.js][shouldComponentUpdate][nextProps]", nextProps, nextState);
   //    return   nextProps.persons !== this.props.persons
   //                || nextProps.changed !== this.props.changed
   //                || nextProps.clicked !== this.props.clicked;

   // }   
   //////////////////////////////////////////////////////////////////////////////////////////   

   componentWillUpdate(nextProps, nextState) {
      console.log("[Persons.js][componentWillUpdate][nextProps]", nextProps, nextState);
   }

   componentDidUpdate() {
      console.log("[Persons.js][componentDidUpdate]");
   }
   render() {
      console.log("[Persons.js][render]");
      return this.props.persons.map( (person, index) => {
         return <Person
                     key={person.id}
                     name={person.name}
                     age={person.age} 
                     click={ () => this.props.clicked(index) }
                     changed={ (event) => this.props.changed(event, person.id) } />
      });    
    }
} 

export default Persons;