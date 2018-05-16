import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from'./Header';

// Challenge - count default value prop to 0
export default class IndecisionApp extends React.Component {
    
  // pull the state of the constructor
  // convert all 4 events handlers to class properties (arrow functions)
  // delete the constructor completely
  // start with class properties and end with the methods
  state = {
    options: []
  };

  handleDeleteOptions = () => {
    this.setState(() => ({options: []}));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({ 
      options : prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  // equals this
  // handleDeleteOptions() {
  //   this.setState(() => {
  //     return {
  //       options: []
  //     };
  //   });
  // }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }


  // constructor(props) {
  //     super(props);
  //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  //     this.handlePick = this.handlePick.bind(this);
  //     this.handleAddOption = this.handleAddOption.bind(this);
  //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
  //   }
  
    // lifecycle method
    componentDidMount() {
      try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
  
        if (options) {
          this.setState(() => ({ options }));
        }
  
      } catch(e) {
        // Do nothing at all
      }
  
    }
  
    // lifecycle method
    componentDidUpdate (prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
        console.log('componentDidUpdate');
      }
    }
  
    componentWillUnmount() {
      console.log('componentWillUnmount');
    }
  
    render() {
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div>
          <Header subtitle={subtitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
  
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
      );
    }
  }