import React from 'react';
import {Table} from 'antd';
import 'antd/dist/antd.css';
import FilterManager from './filterManager';
import ControlPanel from './controlPanel';

const dataSource = [{
  key: '1',
  firstName: 'Michael',
  lastName: 'Scott',
  companyName: 'Dunder Mifflin Paper',
  amount: '$100.00',
  paymentType: 'credit',
  paymentDate: '3/25/2014 7:50pm',
  modifiedDate: '3/25/2014',
  registrantCredited: 'Johny Doiter'
}, {
  key: '2',
  firstName: 'Brian',
  lastName: 'Griffin',
  companyName: 'Faster than Publishing',
  amount: '$200.00',
  paymentType: 'debit',
  paymentDate: '6/14/2013 4:10pm',
  modifiedDate: '6/14/2013',
  registrantCredited: 'Johny Doiter'
}];

const col = [{
  title: 'Actions',
  key: 'actions',
  render: () => (
    <span>
      <a href="#app/donors-manage">Profile</a>
      <span className="space" />
      <a href="#">Edit</a>
    </span>)
}, {
  title: 'First Name',
  dataIndex: 'firstName',
  key: 'firstName',
  sorter: (a, b) => a.firstName.localeCompare(b.firstName),
}, {
  title: 'Last Name',
  dataIndex: 'lastName',
  key: 'lastName',
  sorter: (a, b) => a.lastName.localeCompare(b.lastName),
  render: text => <a href="#">{text}</a>,
}, {
  title: 'Company Name',
  dataIndex: 'companyName',
  key: 'companyName',
  sorter: (a, b) => a.companyName.localeCompare(b.companyName),
}, {
  title: 'Amount',
  dataIndex: 'amount',
  key: 'amount',
  sorter: (a, b) => a.amount.localeCompare(b.amount),
}, {
  title: 'Payment Type',
  dataIndex: 'paymentType',
  key: 'paymentType',
  render: (text) => {
    if (text === 'credit') {
      return (<span className="color-danger">active</span>);
    }
    return (<span className="color-primary">active</span>);
  },
  sorter: (a, b) => a.paymentType.localeCompare(b.paymentType),
}, {
  title: 'Payment Date',
  dataIndex: 'paymentDate',
  key: 'paymentDate',
  sorter: (a, b) => a.paymentDate.localeCompare(b.paymentDate),
}, {
  title: 'Modified Date',
  dataIndex: 'modifiedDate',
  key: 'modifiedDate',
  sorter: (a, b) => a.modifiedDate.localeCompare(b.modifiedDate),
}, {
  title: 'Registrant Credited',
  dataIndex: 'registrantCredited',
  key: 'registrantCredited',
  sorter: (a, b) => a.registrantCredited.localeCompare(b.registrantCredited),
}];
const rowSelection = {};

// TODO add a number of showed rows
// TODO add a work link to 1 col
// TODO add an icons to link elems
class EventTable extends React.Component {
  render() {
    return (
      <div>
        <ControlPanel />
        <FilterManager />
        <div className="box box-default">
          <div className="box-body">
            <Table
              dataSource={dataSource}
              columns={col}
              size="small"
              bordered
              rowSelection={rowSelection}
            />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = EventTable;
