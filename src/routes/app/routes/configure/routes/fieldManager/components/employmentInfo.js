import React from 'react';
import {Table} from 'antd';
import 'antd/dist/antd.css';

const dataSource = [{
  key: '1',
  inputLabel: 'Company Name',
  inputId: 'company-name',
  inputType: 'Text input',
}, {
  key: '2',
  inputLabel: 'Company URL',
  inputId: 'company-url',
  inputType: 'Text input',
}, {
  key: '3',
  inputLabel: 'Job Title',
  inputId: 'job-title',
  inputType: 'Text input',
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
    }}
}];
const rowSelection = {};

class DonationFormTable extends React.Component {
  render() {
    return (
      <div>
        <h5>Personal Information > Demographics</h5>
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
