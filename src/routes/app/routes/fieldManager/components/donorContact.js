import React from 'react';
import {Table} from 'antd';
import 'antd/dist/antd.css';

const dataSource = [{
  key: '1',
  inputLabel: 'Home Phone',
  inputId: 'home-phone',
  inputType: 'text input',
}, {
  key: '2',
  inputLabel: 'Cell Phone',
  inputId: 'cell-phone',
  inputType: 'text input',
}, {
  key: '3',
  inputLabel: 'Business Phone',
  inputId: 'business-phone',
  inputType: 'text input',
}, {
  key: '4',
  inputLabel: 'eMail Address',
  inputId: 'email-address',
  inputType: 'text input',
}, {
  key: '5',
  inputLabel: 'Street Address',
  inputId: 'street-address',
  inputType: 'text input',
}, {
  key: '6',
  inputLabel: 'City',
  inputId: 'city',
  inputType: 'text input',
}, {
  key: '7',
  inputLabel: 'State',
  inputId: 'state',
  inputType: 'select',
}, {
  key: '8',
  inputLabel: 'Zip Code',
  inputId: 'zip-code',
  inputType: 'text input',
}];
const col = [{
  title: 'Input Label',
  dataIndex: 'inputLabel',
  key: 'inputLabel',
}, {
  title: 'Input ID',
  dataIndex: 'inputId',
  key: 'inputId',
}, {
  title: 'Input Type',
  dataIndex: 'inputType',
  key: 'inputType',
  render: (text) => {
    const workText = text.toUpperCase();
    switch (workText) {
      case 'SELECT':
        return <span className="color-warning">{workText}</span>;
      case 'TEXT INPUT':
        return <span className="color-info">{workText}</span>;
      case 'CHECK BOX':
        return <span className="color-danger">{workText}</span>;
      default:
        return <span className="color-success">{workText}</span>;
    }
  }
}];
const rowSelection = {};

class DonationFormTable extends React.Component {
  render() {
    return (
      <div>
        <h5>Donor Contact</h5>
        <Table
          dataSource={dataSource}
          columns={col}
          size="small"
          bordered
          pagination={false}
        /> </div>
    );
  }
}

module.exports = DonationFormTable;
