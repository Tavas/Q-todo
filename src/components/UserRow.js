import React from 'react';

class UserRow extends React.Component {

  render() {
    return (
        <tr>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.jobtitle}</td>
                <td>{this.props.user.description}</td>
                <td>{this.props.user.created}</td>
        </tr>
    );
  }
}

export default UserRow;