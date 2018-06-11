import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import ControlPanel from './controlPanel';
import FilterManager from '../../../components/filterManager';

const smallIconsStyle = {
  fontSize: '15px',
  padding: '3px'
};

const dataSource = [
  {
    key: '1',
    eventName: 'Walk to the Cure',
    dateCreated: '24 July 2015',
    raisedToDate: '$734,579',
    status: 'active',
    owner: 'Will Goodwin'
  },
  {
    key: '2',
    eventName: 'Ride to the Cure',
    dateCreated: '4 July 2015',
    raisedToDate: '$3,474,217',
    status: 'inactive',
    owner: 'Henry Flanders'
  },
  {
    key: '3',
    eventName: 'CommunityCares Run',
    dateCreated: '7 Aug 2015',
    raisedToDate: '$1,234,567',
    status: 'active',
    owner: 'Will Goodwin'
  },
  {
    key: '4',
    eventName: 'High Hopes',
    dateCreated: '10 Nov 2013',
    raisedToDate: '$1,409,576',
    status: 'inactive',
    owner: 'Henry Flanders'
  },
  {
    key: '5',
    eventName: 'Crowd Sourcing',
    dateCreated: '20 April 2015',
    raisedToDate: '$402,967',
    status: 'active',
    owner: 'Joe Mullen'
  },
  {
    key: '6',
    eventName: 'Raise FunDation',
    dateCreated: '13 March 2013',
    raisedToDate: '$3,354,647',
    status: 'inactive',
    owner: 'Hans Meier'
  },
  {
    key: '7',
    eventName: 'Ride to the Cure',
    dateCreated: '4 July 2015',
    raisedToDate: '$3,474,217',
    status: 'inactive',
    owner: 'Henry Flanders'
  },
  {
    key: '8',
    eventName: 'Go Getter Golf',
    dateCreated: '17 Dec 2014',
    raisedToDate: '$3,134,7097',
    status: 'active',
    owner: 'Mario Super'
  },
  {
    key: '9',
    eventName: 'Cycle Cents',
    dateCreated: '19 APRIL 2015',
    raisedToDate: '$264,837',
    status: 'no active',
    owner: 'Roy Hinkley, Ph.D.'
  },
  {
    key: '10',
    eventName: 'Bucks for Babies',
    dateCreated: '12 JULY 2015',
    raisedToDate: '$134,257',
    status: 'active',
    owner: 'Dawn Wells'
  },
  {
    key: '11',
    eventName: 'Free Willy',
    dateCreated: '20 FEB 2014',
    raisedToDate: '$1,735,908',
    status: 'inactive',
    owner: 'Jonas Grumby'
  }
];

const col = [
  {
    title: 'Event Name',
    dataIndex: 'eventName',
    key: 'eventName',
    render: text => <a href="#/app/event-manage">{text}</a>,
    sorter: (a, b) => a.eventName.localeCompare(b.eventName)
  },
  {
    title: 'Actions',
    key: 'actions',
    render: () => (
      <span>
        <a
          href="#"
          className="material-icons"
          style={smallIconsStyle}
          title="Edit Event Settings & Information"
        >
          edit
        </a>
        <span className="space" />
        <a
          href="#"
          className="material-icons"
          style={smallIconsStyle}
          title="Manage Team"
        >
          timeline
        </a>
        <span className="space" />
        <a
          href="#/app/events-bookkeeping"
          className="material-icons"
          style={smallIconsStyle}
          title="Bookkeeping"
        >
          book
        </a>
      </span>
    ),
    width: 120
  },
  {
    title: 'Date Created',
    dataIndex: 'dateCreated',
    key: 'dateCreated',
    sorter: (a, b) => a.dateCreated.localeCompare(b.dateCreated)
  },
  {
    title: 'Raised To Date',
    dataIndex: 'raisedToDate',
    key: 'raisedToDate',
    sorter: (a, b) => a.raisedToDate.localeCompare(b.raisedToDate)
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: text => {
      if (text === 'active') {
        return (
          <span>
            <small
              className="color-success material-icons"
              style={smallIconsStyle}
            >
              label
            </small>ACTIVE
          </span>
        );
      } else if (text === 'no active') {
        return (
          <span>
            <small
              className="color-danger material-icons"
              style={smallIconsStyle}
            >
              label_outline
            </small>ACTIVE
          </span>
        );
      }
      return (
        <span>
          <small
            className="color-danger material-icons"
            style={smallIconsStyle}
          >
            label_outline
          </small>INACTIVE
        </span>
      );
    },
    sorter: (a, b) => a.status.localeCompare(b.status),
    width: 100
  },
  {
    title: 'Owner',
    dataIndex: 'owner',
    key: 'owner',
    sorter: (a, b) => a.city.localeCompare(b.city)
  }
];
const rowSelection = {};

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
              pagination={{
                defaultCurrent: 1,
                total: 55,
                pageSize: 11,
                showSizeChanger: true
              }}
            />
            <ControlPanel />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = EventTable;
