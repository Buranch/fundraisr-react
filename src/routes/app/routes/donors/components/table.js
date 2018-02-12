import React from 'react';
import {Table} from 'antd';
import 'antd/dist/antd.css';
import ControlPanel from './controlPanel';
import FilterManager from './filterManager';

const dataSource = [{
  key: '1',
  firstName: 'Optimus',
  lastName: 'Prime',
  email: 'opp@mail.com',
  companyName: 'Non-profit America',
  address: '1357 Winners Circle',
  city: 'Donerville',
  state: 'CA',
  zip: '92110'
}, {
  key: '2',
  firstName: 'Daffy',
  lastName: 'Duck',
  email: 'dafDuck@mail.com',
  companyName: 'Ducky Dollars',
  address: '1 Lilly Lane',
  city: 'Duckville',
  state: 'CA',
  zip: '92345'
}];
const col = [{
  title: 'First Name',
  dataIndex: 'firstName',
  key: 'firstName',
  sorter: (a, b) => a.firstName.localeCompare(b.firstName),
}, {
  title: 'Last Name',
  dataIndex: 'lastName',
  key: 'lastName',
  render: text => <a href="#">{text}</a>,
  sorter: (a, b) => a.lastName.localeCompare(b.lastName),
}, {
  title: 'eMail',
  dataIndex: 'email',
  key: 'email',
  sorter: (a, b) => a.email.localeCompare(b.email),
}, {
  title: 'Company Name',
  dataIndex: 'companyName',
  key: 'companyName',
  sorter: (a, b) => a.companyName.localeCompare(b.companyName),
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
  sorter: (a, b) => a.address.localeCompare(b.address),
}, {
  title: 'City',
  dataIndex: 'city',
  key: 'city',
  sorter: (a, b) => a.city.localeCompare(b.city),
}, {
  title: 'State',
  dataIndex: 'state',
  key: 'state',
  sorter: (a, b) => a.state.localeCompare(b.state),
}, {
  title: 'ZIP',
  dataIndex: 'zip',
  key: 'zip',
  sorter: (a, b) => a.zip.localeCompare(b.zip),
}];
const rowSelection = {};

// TODO add the data
// TODO add a number of showed rows
// TODO add a work link to 2 col
class DonorTable extends React.Component {
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

module.exports = DonorTable;
