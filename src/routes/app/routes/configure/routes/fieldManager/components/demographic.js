import React from 'react';
import Table from 'antd/lib/table';
import 'antd/dist/antd.css';

const dataSource = [
  {
    key: '1',
    inputLabel: 'Age',
    inputId: 'age',
    inputType: 'Text input'
  },
  {
    key: '2',
    inputLabel: 'Birth Day',
    inputId: 'birth-day',
    inputType: 'Text input'
  },
  {
    key: '3',
    inputLabel: 'Gender',
    inputId: 'gender',
    inputType: 'Radio Buttons'
  },
  {
    key: '4',
    inputLabel: 'Ethnicity',
    inputId: 'ethnicity',
    inputType: 'Select'
  },
  {
    key: '5',
    inputLabel: 'Religion',
    inputId: 'religion',
    inputType: 'Text input'
  },
  {
    key: '6',
    inputLabel: 'Marital Status',
    inputId: 'marital-status',
    inputType: 'Select'
  },
  {
    key: '7',
    inputLabel: 'Living',
    inputId: 'living',
    inputType: 'Radio Buttons'
  }
];
const col = [
  {
    title: 'Input Label',
    dataIndex: 'inputLabel',
    key: 'inputLabel'
  },
  {
    title: 'Input ID',
    dataIndex: 'inputId',
    key: 'inputId'
  },
  {
    title: 'Input Type',
    dataIndex: 'inputType',
    key: 'inputType',
    render: text => {
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
  }
];
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
        />{' '}
      </div>
    );
  }
}

module.exports = DonationFormTable;
