import React, { Component } from 'react';
import Table from '../components/Table';
import { users } from '../users';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
       <Table users={users}/>
      </div>
    );
  }
}

export default App;
