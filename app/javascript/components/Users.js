import React from "react"
import PropTypes from "prop-types"
import User from "./User.js"

function getUserList(users) {
  return users.map( user =>
   <User key={user.role_id}
      role_name={user.result.role_name}
      top_kill={user.result.top_kill}
      rank_score={user.result.rank_score}
      top_score={user.result.top_score}
      total_head_shot={user.result.total_head_shot}
      top1_num={user.result.top1_num}
      total_num={user.result.total_num}
      die_num={user.result.die_num}
      top10_num={user.result.top10_num}
      kill_num={user.result.kill_num} />
   );
}

class Users extends React.Component {
  render () {
    return (
      <table>
        <tbody>
          <tr>
            <th> roleName </th>
            <th> topKill </th>
            <th> rankScore </th>
            <th> topScore </th>
            <th> totalHeadShot </th>
            <th> top1Num </th>
            <th> totalNum </th>
            <th> dieNum </th>
            <th> top10Num </th>
            <th> killNum </th>
          </tr>
          { getUserList(this.props.users) }
        </tbody>
      </table>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array
};
export default Users
