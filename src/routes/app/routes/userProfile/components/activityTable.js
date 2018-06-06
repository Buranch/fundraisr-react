import React from 'react';
import Table from 'antd/lib/table';
import 'antd/dist/antd.css';

const dataSource = [
  {
    key: '1',
    action: 'Successful Login',
    notes: '',
    timestamp: '8/18/2014 1:08 PM'
  },
  {
    key: '2',
    action: 'Run Report',
    notes: 'Registrant Report',
    timestamp: '8/14/2014 1:17 PM'
  },
  {
    key: '3',
    action: 'Successful Login',
    notes: '',
    timestamp: '7/7/2014 8:41 AM'
  },
  {
    key: '4',
    action: 'Successful Login',
    notes: '',
    timestamp: '6/16/2014 9:56 AM'
  }
];
const col = [
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action'
  },
  {
    title: 'Notes',
    dataIndex: 'notes',
    key: 'notes'
  },
  {
    title: 'Timestamp',
    dataIndex: 'timestamp',
    key: 'timestamp'
  }
];
const rowSelection = {};

class DonationFormTable extends React.Component {
  render() {
    return (
      <Table
        dataSource={dataSource}
        columns={col}
        size="small"
        bordered
        pagination={false}
      />
    );
  }
}

module.exports = DonationFormTable;
