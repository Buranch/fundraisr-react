import React from 'react';
import Table from 'antd/lib/table';
import 'antd/dist/antd.css';

const dataSource = [
  {
    key: '1',
    inputLabel: 'Payment Type',
    inputId: 'payment-type',
    inputType: 'Select'
  },
  {
    key: '2',
    inputLabel: 'Name on Card',
    inputId: 'name-on-card',
    inputType: 'Text input'
  },
  {
    key: '3',
    inputLabel: 'Card Number',
    inputId: 'card-number',
    inputType: 'Text input'
  },
  {
    key: '4',
    inputLabel: 'CCV Number',
    inputId: 'ccv-number',
    inputType: 'Text input'
  },
  {
    key: '5',
    inputLabel: 'Expiration Month',
    inputId: 'expiration-month',
    inputType: 'Select'
  },
  {
    key: '6',
    inputLabel: 'Expiration Year',
    inputId: 'expiration-year',
    inputType: 'Select'
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
        <h5>Payment Information</h5>
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
