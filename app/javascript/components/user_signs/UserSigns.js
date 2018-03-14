import React from "react"
import PropTypes from "prop-types"
import UserSign from "./UserSign.js"

function getList(user_sign_list) {
  const user_signs = user_sign_list;

  return user_signs.map( user_sign =>
    <UserSign key={user_sign.id}
      os_name={user_sign.os_name}
      role_name={user_sign.role_name}
      role_id={user_sign.role_id}
      sign={user_sign.sign} />
  );
}

class UserSigns extends React.Component {
  constructor(props) {
    super(props);
    let originalRows = this.props.user_signs;
    let rows = originalRows.slice(0);
    this.state = { originalRows, rows };
  };

  // handleSortClick = (sortColumn) => {
    // const comparer = (a, b) => {
      // return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
    // };

    // const rows = this.state.rows.sort(comparer);
    // this.setState({ rows });
  // };

  handleSortClick = (event) => {
    const sortKey = event.target.getAttribute('data-column-key')
    const comparer = (a, b) => {
      return (a[sortKey] < b[sortKey]) ? 1 : -1;
    };

    const rows = this.state.rows.sort(comparer);
    this.setState({ rows });
  };

  // <tr>
    // <th onClick={() => this.handleSortClick('os_name')}> OsName </th>
    // <th onClick={() => this.handleSortClick('role_name')}> RoleName </th>
    // <th onClick={() => this.handleSortClick('role_id')}> RoleId </th>
    // <th onClick={() => this.handleSortClick('sign')}> Sign </th>
  // </tr>
  render () {
    return (
      <table>
        <tbody>
          <tr onClick={this.handleSortClick}>
            <th data-column-key='os_name'> OsName </th>
            <th data-column-key='role_name'> RoleName </th>
            <th data-column-key='role_id'> RoleId </th>
            <th data-column-key='sign'> Sign </th>
          </tr>
          { getList(this.state.rows) }
        </tbody>
      </table>
    );
  }
}

UserSigns.propTypes = {
  user_signs: PropTypes.array
};
export default UserSigns
