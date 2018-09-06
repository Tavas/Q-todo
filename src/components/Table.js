import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserRow from './UserRow';
import Buttons from './Buttons';

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

          // Initialize Firebase
          var config = {
            apiKey: "AIzaSyCjwWnFlau-4tnJ8wYwk68l44UNdf5X4P4",
            authDomain: "q-todo-4ead6.firebaseapp.com",
            databaseURL: "https://q-todo-4ead6.firebaseio.com",
            projectId: "q-todo-4ead6",
            storageBucket: "q-todo-4ead6.appspot.com",
            messagingSenderId: "435338733424"
          };
          firebase.initializeApp(config);

const $ = require('jquery');

 function reloadTableData(users) {
    const table = $('.data-table-wrapper').find('table').DataTable();
    table.clear();
    table.rows.add(users);
    table.draw();
}

function updateTable(users) {
    const table = $('.data-table-wrapper').find('table').DataTable();
    table.clear();
    table.rows.add(users);
    table.draw();
}

class Table extends Component { 
  constructor(props) {
    super(props);
      this.state = {
        users: props.users
     };
  } 

    componentWillUnmount(){
       $('.data-table-wrapper')
       .find('table')
       .DataTable()
       .destroy(true);
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.users.length !== this.props.users.length) {
            reloadTableData(nextProps.users);
        } else {
            updateTable(nextProps.users);
        }
        return true;
    }

     render() {
        return (
           <div className="table-responsive">
              <table id="main" className="table table-hover">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Job Title</th>
                      <th>Description</th>
                      <th>Date Created</th>
                  </tr>
              </thead>
                 {
                  this.props.users.map(row => (
                   <UserRow user={row} />
                  ))
                }
              <tbody>

              </tbody>
              </table>
               <div className="row">
                    <Buttons />
               </div>
               </div>
             );
           }
        }

        Table.PropTypes = {
            users: PropTypes.array
        };

export default Table;