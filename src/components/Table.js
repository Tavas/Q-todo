import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserRow from './UserRow';
import Buttons from './Buttons';
import { users } from '../users';

const $ = require('jquery');
$.DataTable = require('datatables.net');

const columns = [
    {
        title: 'ID',
        data: 'id'
    },
    {
        title: 'Job Title',
        data: 'jobtitle'
    },
    {
        title: 'Description',
        data: 'description'
    },
    {
        title: 'Created',
        data: 'created'
    },
];

function reloadTableData(users) {
    const table = $('.data-table-wrapper').find('table').DataTable();
    table.clear();
    table.rows.add(users);
    table.draw();
}

function updateTable(users) {
    const table = $('.data-table-wrapper').find('table').DataTable();
    let dataChanged = false;
    table.rows().every(function () {
        const oldUserData = this.data();
        const newUserData = users.find((userData) => {
            return userData.user === oldUserData.user;
        });
        if (oldUserData.jobtitle !== newUserData.jobtitle) {
            dataChanged = true;
            this.data(newUserData);
        }
       return true;
    });

    if (dataChanged) {
        table.draw();
    }
}

class Table extends Component { 
    componentDidMount() {
        $(this.refs.main).DataTable({
           dom: '<"data-table-wrapper"t>',
           data: this.props.users,
           columns,
           ordering: false
        });
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
        return false;
    }

     render() {
        return (
           <div className="table-responsive">
              <table id="main" className="table table-hover">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Job Title</th>
                      <th>Job Description</th>
                      <th>Record Created</th>
                  </tr>
              </thead>
              <tbody>
                {
                  users.map(row => (
                   <UserRow user={row} />
                  ))
                }
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