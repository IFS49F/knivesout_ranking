import React from "react"
import PropTypes from "prop-types"
import User from "./User.js"

function getUserList(users) {
  let total = users.length
  return users.map( (user, index) =>
   <User key={user.role_id}
      idx={index}
      total={total}
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

function setDefaultSort(original_rows, sort_key) {
  return original_rows.sort((a,b) => { return (a.result[sort_key] < b.result[sort_key]) ? 1 : -1 });
};

function setColumnStyle(column) {
  let e = document.querySelector("th[data-column-key=" + column + "]");
  e.style.color = 'red';
};

function clearColumnStyle(column) {
  let e = document.querySelector("th[data-column-key=" + column + "]");
  e.style.color = '';
};

class Users extends React.Component {
  constructor(props) {
    super(props);
    let originalRows = this.props.users;
    let defaultSortColumn = "rank_score";
    let rows = setDefaultSort(originalRows.slice(0), defaultSortColumn);
    this.state = { originalRows, rows, currentColumn: defaultSortColumn}
    this.handleSortClick = this.handleSortClick.bind(this);
  };

  componentDidMount() {
    setColumnStyle(this.state.currentColumn);
  };

  componentDidUpdate() {
    setColumnStyle(this.state.currentColumn);
  };

  handleSortClick = (event) => {
    clearColumnStyle(this.state.currentColumn);
    let sortKey = event.target.getAttribute('data-column-key')
    sortKey = sortKey == undefined ? this.state.currentColumn : sortKey
    let rows = (() => {
      if (this.state.currentColumn == sortKey) {
        return this.state.rows.reverse();
      }
      else
      {
        return  this.state.rows.sort((a,b) => { return (a.result[sortKey] < b.result[sortKey]) ? 1 : -1 });
      }
    })();

    this.setState({ rows, currentColumn: sortKey });
  };

  render () {
    return (
      <table>
        <thead>
          <tr style={ {cursor:'pointer'} } onClick={this.handleSortClick}>
            <th data-column-key='role_name'> roleName </th>
            <th data-column-key='total_num'> totalNum </th>
            <th data-column-key='top1_num'> top1Num </th>
            <th data-column-key='top10_num'> top10Num </th>
            <th data-column-key='kill_num'> killNum </th>
            <th data-column-key='die_num'> dieNum </th>
            <th data-column-key='top_kill'> topKill </th>
            <th data-column-key='rank_score'> rankScore </th>
            <th data-column-key='top_score'> topScore </th>
            <th data-column-key='total_head_shot'> totalHeadShot </th>
          </tr>
        </thead>
        <tbody>
          { getUserList(this.state.rows) }
        </tbody>
      </table>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array
};
export default Users
