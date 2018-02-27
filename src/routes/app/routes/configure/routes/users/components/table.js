import React from 'react';
import {Table} from 'antd';
import 'antd/dist/antd.css';
import ControlPanel from '../../../../../components/standartControlPanel';
import FilterManager from '../../../../../components/filterManager';

const styles = {
  fontSize: '15px',
  float: 'right'
};


const dataSource = [{
  key: '1',
  firstName: 'Dave',
  lastName: 'Bergschneider',
  email: 'dave@cmscode.com',
  companyName: 'CMS Code, Inc.',
  address: '7317 El Cajon Blvd',
  city: 'La Mesa',
  state: 'CA',
  zip: '91942'
}, {
  key: '2',
  firstName: 'Clifford',
  lastName: 'Nelson',
  email: 'cnelson@cmscode.com',
  companyName: 'CMS Code, Inc',
  address: '5663 Balboa Ave #185',
  city: '185 \tSan Diego',
  state: 'CA',
  zip: '92111'
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
  render: text => <a href="#/app/user-profile" style={{display: 'block'}}>{text} <small className="material-icons" style={styles}><a href="#/app/user-profile">settings</a></small></a>,
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

class DonorTable extends React.Component {
  render() {
    return (
      <div>
        <FilterManager />
        <div className="box box-default">
          <div className="box-body">
            <ControlPanel edit="#/app/user-profile" />
            <Table
              dataSource={dataSource}
              columns={col}
              size="small"
              bordered
              rowSelection={rowSelection}
              pagination={{defaultCurrent: 1, total: 50, pageSize: 10, showSizeChanger: true  }}
            />
            <ControlPanel edit="#/app/user-profile" />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = DonorTable;
