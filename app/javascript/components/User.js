import React from "react"
import PropTypes from "prop-types"
class User extends React.Component {
  render () {
    return (
      <tr>
        <td> {this.props.role_name} </td>
        <td> {this.props.top_kill} </td>
        <td> {this.props.rank_score} </td>
        <td> {this.props.top_score} </td>
        <td> {this.props.total_head_shot} </td>
        <td> {this.props.top1_num} </td>
        <td> {this.props.total_num} </td>
        <td> {this.props.die_num} </td>
        <td> {this.props.top10_num} </td>
        <td> {this.props.kill_num} </td>
      </tr>
    );
  }
}

User.propTypes = {
  role_name: PropTypes.string,
  top_kill: PropTypes.number,
  rank_score: PropTypes.number,
  top_score: PropTypes.number,
  total_head_shot: PropTypes.number,
  top1_num: PropTypes.number,
  total_num: PropTypes.number,
  die_num: PropTypes.number,
  top10_num: PropTypes.number,
  kill_num: PropTypes.number
};
export default User
