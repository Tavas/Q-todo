import React from 'react';
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
              <tr>
                <td>{row.id}</td>
                <td>{row.jobtitle}</td>
                <td>{row.description}</td>
                <td>{row.created}</td>
              </tr>
            ))
          }
        </tbody>
     </table>
    </div>
  );
}

export default Table;