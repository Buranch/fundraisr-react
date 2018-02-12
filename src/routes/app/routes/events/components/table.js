import React from 'react';
import {Table} from 'antd';
import 'antd/dist/antd.css';
import ControlPanel from './controlPanel';
import FilterManager from './filterManager';

const dataSource = [{
  key: '1',
  eventName: 'Walk to the Cure',
  dateCreated: '24 July 2015',
  raisedToDate: '$734,579',
  status: 'active',
  owner: 'Will Goodwin',
}, {
  key: '2',
  eventName: 'Ride to the Cure',
  dateCreated: '4 July 2015',
  raisedToDate: '$3,474,217',
  status: 'inactive',
  owner: 'Henry Flanders',
}];

const col = [{
  title: 'Event Name',
  dataIndex: 'eventName',
  key: 'eventName',
  render: text => <a href="#">{text}</a>,
  sorter: (a, b) => a.eventName.localeCompare(b.eventName),
}, {
  title: 'Actions',
  key: 'actions',
  render: () => (
    <span>
      <a href="#">Edit</a>
      <span className="space" />
      <a href="#">Manage</a>
      <span className="space" />
      <a href="#">Bookkeeping</a>
    </span>
  ),
}, {
  title: 'Date Created',
  dataIndex: 'dateCreated',
  key: 'dateCreated',
  sorter: (a, b) => a.dateCreated.localeCompare(b.dateCreated),
}, {
  title: 'Raised To Date',
  dataIndex: 'raisedToDate',
  key: 'raisedToDate',
  sorter: (a, b) => a.raisedToDate.localeCompare(b.raisedToDate),
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
  sorter: (a, b) => a.status.localeCompare(b.status),
}, {
  title: 'Owner',
  dataIndex: 'owner',
  key: 'owner',
  sorter: (a, b) => a.city.localeCompare(b.city),
}];
const rowSelection = {};

// TODO add the data
// TODO add a number of showed rows
// TODO add a work link to 1 col, 3 col
class EventTable extends React.Component {
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

module.exports = EventTable;
