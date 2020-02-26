import React, { Component } from 'react';
import NewRecord from './components/NewRecord';
import ListOfRecord from './components/ListOfRecord';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
        patients: []
        
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(data) {
    this.setState({patients: [...this.state.patients, data]})
  }

  render () {
    return (
      <div className="">
        <NewRecord handleFormSubmit={this.handleFormSubmit}/>
        <ListOfRecord patients={this.state.patients}/>
      </div>
    )
  }
}

export default App;
