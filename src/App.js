import React, { Component } from 'react';
import NewRecord from './components/NewRecord';
import ListOfRecord from './components/ListOfRecord';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
        patients: [],
        displayList: [],
        is_minor: false
        
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addToDisplayList = this.addToDisplayList.bind(this);
    this.minorUpdate = this.minorUpdate.bind(this);
  }

  minorUpdate(val) {
    this.setState({is_minor: val}, ()=> {
      this.addToDisplayList()
    })
  }

  addToDisplayList() {
    if(this.state.is_minor) 
      this.setState({displayList: [...this.state.patients.filter(p=>p.age<18)]})
    else
      this.setState({displayList: [...this.state.patients]})
  }

  handleFormSubmit(data) {
    this.setState({patients: [...this.state.patients, {
      id: new Date().toJSON(),
      ...data
    }]}, ()=> {
      this.addToDisplayList()
    })
  }

  render () {
    return (
      <div className="">
        <NewRecord handleFormSubmit={this.handleFormSubmit}/>
        <ListOfRecord patients={this.state.displayList} minorUpdate={this.minorUpdate}/>
      </div>
    )
  }
}

export default App;
