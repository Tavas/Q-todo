import React, { Component } from 'react';
import Table from '../components/Table';
import './App.css';

const firebase = require("firebase");
require("firebase/firestore");

const $ = require('jquery');
$.DataTable = require('datatables.net');

var users = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: users
    }
    $(document).ready(function() {
    const table = $('#main').DataTable({
         select: true,
         data: users,
        "pagingType": "simple",
         scrollY: 500,
         rowId: 'id',
         columns: [
            { data: 'id' },
            { data: 'jobtitle' },
            { data: 'description' },
            { data: 'created' }
         ],
        "fnDrawCallback": function(oSettings) {
           if (6 > oSettings.fnRecordsDisplay()) {
             $(oSettings.nTableWrapper).find('.dataTables_paginate').hide();
          } else {
             $(oSettings.nTableWrapper).find('.dataTables_paginate').show();
          }
        }
    });
      $('#main tbody').on( 'click', 'tr', function () {
          $(this).toggleClass('selected');
      });
      $('#button').click( function () {
          alert( table.rows('.selected').data().length +' row(s) selected' );
      });
       $('#main tbody').on( 'dblclick', 'tr', function () {
          $(this).toggleClass('selected');
      });
    });
  }

     readUsers() {
      firebase.firestore().collection("tasks").get().then((querySnapshot) => {   
        const result = querySnapshot.docs.map((row) => {
        var user = {
              id : row.id,
              jobtitle: row.data()['jobtitle'],
              description: row.data()['description'],
              created: this.timeConverter(row.data()['created'])
        }
          return user; 
          });
            this.users = result;
            this.setState({ users: result });
     }); 
    }

       timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp / 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var time = date + ' ' + month + ' ' + year ;
        return time;
   }

    componentDidMount() {
      this.readUsers();
    } 

    addUser(user) {
      firebase.firestore().collection("tasks").doc(user.id).set({
          jobtitle: user.jobtitle,
          description: user.description,
          created: new Date() * 1000
      })
      .then(function() {
          alert("Task successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
    }

  onAddClick(id, jobtitle, description, created) {
      this.addUser({
       id : id, 
       jobtitle : jobtitle,
       description : description, 
       created : created
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
