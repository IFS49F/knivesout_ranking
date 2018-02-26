import React from "react"
import PropTypes from "prop-types"
import UserSign from "./UserSign.js"

function getList(user_sign_list) {
  return user_sign_list.map( user_sign =>
    <UserSign
      os_name={user_sign.os_name}
      role_name={user_sign.role_name}
      role_id={user_sign.role_id}
      sign={user_sign.sign} />
  );
}

class UserSigns extends React.Component {
  render () {
    return (
      <table>
        <tbody>
          <tr>
            <th> OsName </th>
            <th> RoleName </th>
            <th> RoleId </th>
            <th> Sign </th>
          </tr>
          { getList(this.props.user_signs) }
        </tbody>
      </table>
    );
  }
}

UserSigns.propTypes = {
  user_signs: PropTypes.array
};
export default UserSigns
