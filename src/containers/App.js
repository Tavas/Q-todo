import React, { Component } from 'react';
import Table from '../components/Table';
import './App.css';

class App extends Component {
  constructor(props) {
  	super(props)
  	this.state = {
  	  users: []
  	}
  }

  onAddClick(id, jobtitle, description, created) {
        let updated = false;
        const result = this.state.users.map((userData) => {
            if (userData.id === id) {
                updated = true;
                return {id, jobtitle, description, created}
            }
            return userData;
        });
        if (!updated) {
            result.push({id, jobtitle, description, created});
        }

        this.setState({
            users: result
        })
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
