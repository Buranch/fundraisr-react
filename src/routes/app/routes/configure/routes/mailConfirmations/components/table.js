import React from 'react';
import {Table} from 'antd';
import 'antd/dist/antd.css';
import ControlPanel from './controlPanel';
import FilterManager from './filterManager';

const dataSource = [{
  key: '1',
  confirmationEmailType: 'Donation Cofirmation',
  category: 'Donation Forms',
  versionInUse: 'Default',
}, {
  key: '2',
  confirmationEmailType: 'Registration Confirmation',
  category: 'Registration Forms',
  versionInUse: 'Default',
}, {
  key: '1',
  confirmationEmailType: 'Falled Payment',
  category: 'Recurring Installment Payments',
  versionInUse: 'Default',
}, {
  key: '1',
  confirmationEmailType: 'Profile Modification',
  category: 'Communication',
  versionInUse: 'Default',
}, {
  key: '1',
  confirmationEmailType: 'Login Retrieval',
  category: 'General Account eMail',
  versionInUse: 'Default',
}];
const col = [{
  title: 'Confirmation eMail type',
  dataIndex: 'confirmationEmailType',
  key: 'confirmationEmailType',
  render: text => <a href="#">{text}</a>,
  sorter: (a, b) => a.confirmationEmailType.localeCompare(b.confirmationEmailType),
}, {
  title: 'Category',
  dataIndex: 'category',
  key: 'category',
  render: text => <a href="#/app/donors-manage">{text}</a>,
  sorter: (a, b) => a.category.localeCompare(b.category),
}, {
  title: 'Version in Use',
  dataIndex: 'versionInUse',
  key: 'versionInUse',
  sorter: (a, b) => a.versionInUse.localeCompare(b.versionInUse)}];
const rowSelection = {};

// TODO add the data
// TODO add a number of showed rows
// TODO add an icons to link elems
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
