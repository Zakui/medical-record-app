import React, { Component } from 'react';
import NewRecord from './components/NewRecord';
import ListOfRecord from './components/ListOfRecord';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
        patients: [],
        is_minor: false
        
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.minorUpdate = this.minorUpdate.bind(this);
  }

  minorUpdate(val) {
    this.setState({is_minor: val})
  }

  handleFormSubmit(data) {
    this.setState({patients: [...this.state.patients, {
      id: new Date().toJSON(),
      ...data
    }]})
  }

  render () {
    const listToDisplay = this.state.is_minor?
        [...this.state.patients.filter(p=>p.age<18)] : 
        [...this.state.patients]

    return (
      <div className="">
        <NewRecord handleFormSubmit={this.handleFormSubmit}/>
        <ListOfRecord patients={listToDisplay} minorUpdate={this.minorUpdate}/>
      </div>
    )
  }
}

export default App;
