import React from 'react';
import Table from 'antd/lib/table';
import 'antd/dist/antd.css';
import ControlPanel from '../../../components/standartControlPanel';
import FilterManager from '../../../components/filterManager';

const styles = {
  fontSize: '15px',
  float: 'right'
};

const dataSource = [
  {
    key: '1',
    firstName: 'Optimus',
    lastName: 'Prime',
    email: 'opp@mail.com',
    companyName: 'Non-profit America',
    address: '1357 Winners Circle',
    city: 'Donerville',
    state: 'CA',
    zip: '92110'
  },
  {
    key: '2',
    firstName: 'Daffy',
    lastName: 'Duck',
    email: 'dafDuck@mail.com',
    companyName: 'Ducky Dollars',
    address: '1 Lilly Lane',
    city: 'Duckville',
    state: 'CA',
    zip: '92345'
  },
  {
    key: '3',
    firstName: 'Betty',
    lastName: 'Boop',
    email: 'bboop@mail.com',
    companyName: 'Betty Bucks',
    address: '12 Boop Blvd',
    city: 'Betyington',
    state: 'CA',
    zip: '98756'
  },
  {
    key: '4',
    firstName: 'Jonas',
    lastName: 'Grumby',
    email: 'theskipper@mail.com',
    companyName: 'Minnow Money',
    address: '3 Gilli Lane',
    city: 'Island',
    state: 'CA',
    zip: '91654'
  },
  {
    key: '5',
    firstName: 'Super',
    lastName: 'Luidgi',
    email: 'sluigi@mail.com',
    companyName: '1-Up',
    address: '347 Castle Lane',
    city: 'Superland',
    state: 'CA',
    zip: '99876'
  },
  {
    key: '6',
    firstName: 'Jim',
    lastName: 'Magoo',
    email: 'mrmagoo@mail.com',
    companyName: 'Rag-Time',
    address: '657 Bear St',
    city: 'Gooville',
    state: 'CA',
    zip: '98734'
  },
  {
    key: '7',
    firstName: 'George',
    lastName: 'Jetson',
    email: 'gjett@mail.com',
    companyName: 'RUDI',
    address: '456 Space Lane',
    city: 'Space',
    state: 'CP',
    zip: 'X2148'
  },
  {
    key: '8',
    firstName: 'Bobby',
    lastName: 'Hill',
    email: 'bhill@mail.com',
    companyName: 'Sugarland Propane',
    address: '124 Rainey St',
    city: 'Arlen',
    state: 'TX',
    zip: '91993'
  },
  {
    key: '9',
    firstName: 'Eunice',
    lastName: 'Howell',
    email: 'lovey@mail.com',
    companyName: 'TH3 Industries',
    address: '128 High Lane',
    city: 'Island',
    state: 'CA',
    zip: '98376'
  },
  {
    key: '10',
    firstName: 'Bob',
    lastName: 'Denver',
    email: 'gilligan@mail.com',
    companyName: 'Minnow Money',
    address: '3.5 Gilli Lane',
    city: 'Island',
    state: 'CA',
    zip: '91654'
  }
];
const col = [
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
    sorter: (a, b) => a.firstName.localeCompare(b.firstName)
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
    render: text => (
      <a href="#/app/donors-manage" style={{ display: 'block' }}>
        {text}{' '}
        <small className="material-icons" style={styles}>
          <a href="#/app/donors-manage">settings</a>
        </small>
      </a>
    ),
    sorter: (a, b) => a.lastName.localeCompare(b.lastName)
  },
  {
    title: 'eMail',
    dataIndex: 'email',
    key: 'email',
    sorter: (a, b) => a.email.localeCompare(b.email)
  },
  {
    title: 'Company Name',
    dataIndex: 'companyName',
    key: 'companyName',
    sorter: (a, b) => a.companyName.localeCompare(b.companyName)
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    sorter: (a, b) => a.address.localeCompare(b.address)
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
    sorter: (a, b) => a.city.localeCompare(b.city)
  },
  {
    title: 'State',
    dataIndex: 'state',
    key: 'state',
    sorter: (a, b) => a.state.localeCompare(b.state)
  },
  {
    title: 'ZIP',
    dataIndex: 'zip',
    key: 'zip',
    sorter: (a, b) => a.zip.localeCompare(b.zip)
  }
];
const rowSelection = {};

class DonorTable extends React.Component {
  render() {
    return (
      <div>
        <FilterManager />
        <div className="box box-default">
          <div className="box-body">
            <ControlPanel edit="#/app/donors-manage" />
            <Table
              dataSource={dataSource}
              columns={col}
              size="small"
              bordered
              rowSelection={rowSelection}
              pagination={{
                defaultCurrent: 1,
                total: 50,
                pageSize: 10,
                showSizeChanger: true
              }}
            />
            <ControlPanel edit="#/app/donors-manage" />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = DonorTable;
