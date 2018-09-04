import React, { Component } from 'react';
import Table from '../components/Table';
import { users } from '../users';
import './App.css';

class App extends Component {
  constructor(props) {
  	super(props)
  	this.state = {
  	  users: users
  	}
  }
  render() {
    return (
      <div className="App">
       <Table users={this.state.users}/>
      </div>
    );
  }
}

export default App;
