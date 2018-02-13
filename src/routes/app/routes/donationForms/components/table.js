import React from 'react';
import {Table} from 'antd';
import 'antd/dist/antd.css';
import ControlPanel from './controlPanel';
import FilterManager from './filterManager';

const dataSource = [{
  key: '1',
  formName: 'Help Needed!',
  owner: 'opp@Betty Boop',
  dateCreated: '04 July 2014',
  raisedToDate: '$500.00',
  status: 'active',
}];
const col = [{
  title: 'Form Name',
  dataIndex: 'formName',
  key: 'formName',
  render: text => <a href="#">{text}</a>,
  sorter: (a, b) => a.firstName.localeCompare(b.firstName),
}, {
  title: 'Actions',
  key: 'actions',
  render: () => (
    <span>
      <a href="#">Design</a>
      <span className="space" />
      <a href="#">Options</a>
      <span className="space" />
      <a href="#">Bookkeeping</a>
    </span>
  ),
}, {
  title: 'Owner',
  dataIndex: 'owner',
  key: 'owner',
  sorter: (a, b) => a.email.localeCompare(b.email),
},{
  title: 'Date Created',
  dataIndex: 'dateCreated',
  key: 'dateCreated',
  sorter: (a, b) => a.address.localeCompare(b.address),
}, {
  title: 'Raised to Date',
  dataIndex: 'raisedToDate',
  key: 'raisedToDate',
  sorter: (a, b) => a.city.localeCompare(b.city),
}, {
  title: 'Status',
  dataIndex: 'status',
  key: 'status',
  render: (text) => {
    if (text === 'active') {
      return (<span className="color-success">active</span>);
    }
    return (<span className="color-danger">active</span>);
  },
  sorter: (a, b) => a.state.localeCompare(b.state),
}];
const rowSelection = {};

// TODO add the data
// TODO add a number of showed rows
// TODO add a work link to 2 col
// TODO add an icons to link elems
class DonationFormTable extends React.Component {
  render() {
    return (
      <div>
        <FilterManager />
        <div className="box box-default">
          <div className="box-body">
            <ControlPanel />
            <Table
              dataSource={dataSource}
              columns={col}
              size="small"
              bordered
              rowSelection={rowSelection}
            />
            <ControlPanel />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = DonationFormTable;
