import React from 'react';
import Table from 'antd/lib/table';
import 'antd/dist/antd.css';

const dataSource = [
  {
    key: '1',
    inputLabel: 'Suffix',
    inputId: 'donor-suffix',
    inputType: 'text input'
  },
  {
    key: '2',
    inputLabel: 'First Name',
    inputId: 'first-name',
    inputType: 'text input'
  },
  {
    key: '3',
    inputLabel: 'Middle Name',
    inputId: 'middle-name',
    inputType: 'text input'
  },
  {
    key: '4',
    inputLabel: 'Last Name',
    inputId: 'last-name',
    inputType: 'text input'
  },
  {
    key: '5',
    inputLabel: 'Nick Name',
    inputId: 'nick-name',
    inputType: 'text input'
  },
  {
    key: '6',
    inputLabel: 'Maiden Name',
    inputId: 'maiden-name',
    inputType: 'text input'
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
        <h5>Donor Title</h5>
        <Table
          dataSource={dataSource}
          columns={col}
          size="small"
          bordered
          pagination={false}
        />
      </div>
    );
  }
}

module.exports = DonationFormTable;
