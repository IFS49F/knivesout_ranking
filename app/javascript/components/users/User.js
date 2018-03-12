import React from "react"
import PropTypes from "prop-types"
class User extends React.Component {
  render () {
    return (
      <tr>
        <td data-label='roleName'> {this.props.role_name} </td>
        <td data-label='totalNum'> {this.props.total_num} </td>
        <td data-label='top1Num'> {this.props.top1_num} </td>
        <td data-label='top10Num'> {this.props.top10_num} </td>
        <td data-label='killNum'> {this.props.kill_num} </td>
        <td data-label='dieNum'> {this.props.die_num} </td>
        <td data-label='topKill'> {this.props.top_kill} </td>
        <td data-label='rankScore'> {this.props.rank_score} </td>
        <td data-label='topScore'> {this.props.top_score} </td>
        <td data-label='totalHeadShot'> {this.props.total_head_shot} </td>
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
