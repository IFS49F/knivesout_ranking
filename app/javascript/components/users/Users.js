import ReactDataGrid from 'react-data-grid'
import React from "react"
import PropTypes from "prop-types"
import User from "./User.js"

class Users extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._columns = [
      {
        key: 'role_name',
        name: 'RoleName',
        sortable: true
      },
      {
        key: 'top_kill',
        name: 'TopKill',
        sortable: true
      },
      {
        key: 'rank_score',
        name: 'RankScore',
        sortable: true
      },
      {
        key: 'total_num',
        name: 'TotalNum',
        sortable: true
      },
      {
        key: 'top1_num',
        name: 'Top1Num',
        sortable: true
      },
      {
        key: 'top10_num',
        name: 'Top10Num',
        sortable: true
      },
      {
        key: 'kill_num',
        name: 'KillNum',
        sortable: true
      },
      {
        key: 'die_num',
        name: 'DieNum',
        sortable: true
      },
      {
        key: 'top_score',
        name: 'TopScore',
        sortable: true
      },
      {
        key: 'total_head_shot',
        name: 'totalHeadShot',
        sortable: true
      }
    ];

    let originalRows = this.props.users;
    let rows = originalRows.slice(0);
    this.state = { originalRows, rows };
  }

  handleGridSort = (sortColumn, sortDirection) => {
    const comparer = (a, b) => {
      if (sortDirection === 'ASC') {
        return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
      } else if (sortDirection === 'DESC') {
        return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
      }
    };

    const rows = sortDirection === 'NONE' ? this.state.originalRows.slice(0) : this.state.rows.sort(comparer);

    this.setState({ rows });
  };

  rowGetter = (i) => {
    return this.state.rows[i];
  };

  render () {
    return (
      <ReactDataGrid
        onGridSort={this.handleGridSort}
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={this.state.rows.length}
        minHeight={700} />
    );
  }
}

Users.propTypes = {
  users: PropTypes.array
};
export default Users
