import React from 'react';
import UserRow from './UserRow';
import { users } from '../users';

const Table = (props) => {
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
     <div className="fl w-25">
        <button className="btn btn-primary ma2">Add</button>
        <button className="btn btn-primary ma2">Edit</button>
        <button className="btn btn-primary ma2">Delete</button>
     </div>
     </div>
    </div>
  );
}

export default Table;