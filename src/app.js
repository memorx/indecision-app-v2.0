// import -> install -> use
import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

class OldSyntax {
  constructor() {
    this.name = "Laura";
    this.getGreeting = this.getGreeting.bind(this);
  }

  getGreeting() {
    return `Hi. My name is ${this.name}`;
  }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting.bind();
console.log(oldSyntax);

// --------

class NewSyntax {
  name = "Guillermo";
  getGreeting = () => {
    return `Hi. My name is ${this.name}`;
  }

}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());
console.log(newSyntax)


// Stateless functional component - faster and easier to work with
// Class based components

  // We are reading from local storage now
  // IndecisionApp.defaultProps = {
  //   options: []
  // }
  
  // class Header extends React.Component {
  //   render() {
  //     return (
  //       <div>
  //         <h1>{this.props.title}</h1>
  //         <h2>{this.props.subtitle}</h2>
  //       </div>
  //     );
  //   }
  // }

  
  // class Action extends React.Component {
  //   render() {
  //     return (
  //       <div>
  //         <button
  //           onClick={this.props.handlePick}
  //           disabled={!this.props.hasOptions}
  //         >
  //           What should I do?
  //         </button>
  //       </div>
  //     );
  //   }
  // }
    
  // class Options extends React.Component {
  //   render() {
  //     return (
  //       <div>
  //         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
  //         {
  //           this.props.options.map((option) => <Option key={option} optionText={option} />)
  //         }
  //       </div>
  //     );
  //   }
  // }

  
  // class Option extends React.Component {
  //   render() {
  //     return (
  //       <div>
  //         {this.props.optionText}
  //       </div>
  //     );
  //   }
  // }
  
  // const User = (props) => {
  //   return (
  //     <div>
  //       <p>Name: {props.name} </p>
  //       <p>Age: {props.age}</p>
  //     </div>
  //   );
  // };
  
  ReactDOM.render(<IndecisionApp options={['Hello','Bye']} />, document.getElementById('app'));
  
  // Local storage - only works with string data
  // localStorage.setItem('name', 'Andrew');
  // localStorage.getItem('name');
  // localStorage.removeItem('name');
  // const json = JSON.stringify({age:26});
  // JSON.parse(json).age; 
  
  // localStorage.clear();
  
  // parseInt(num, 10); // parse into number into decimal level
  // parseInt('abc', 10); // NaN 
  // isNaN is non a number
  
  // why to avoid global modules
  // -- not good for collaboration
  // -- each one uses the same version
  

//const template = <p>THIS IS JSX FROM WEBPACK</p>;
//ReactDOM.render(template, document.getElementById('app'));

//console.log(validator.isEmail('test@gmail.com'));



















// import './utils.js';
// import { square, add } from './utils.js' 

// console.log('app.js is running!');
// console.log(square(5));
// console.log(add(3,5));

// person.js
// named export isAdult(18) - true if adult
// named export canDrink(18) - true if bigger than 21

// import
// use both to print into the console

// import isSenior, { isAdult, canDrink } from './person.js';

// console.log(isAdult(18));
// console.log(isAdult(17));
// console.log(canDrink(21));
// console.log(canDrink(20));
// console.log(isSenior(65));
// console.log(isSenior(64));
