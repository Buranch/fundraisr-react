import React from 'react';
import {Table} from 'antd';
import 'antd/dist/antd.css';
import ControlPanel from './controlPanel';

const styles = {
  fontSize: '15px',
  float: 'right'
};

const dataSource = [{
  key: '1',
  confirmationEmailType: 'Donation Confirmation',
  category: 'Donation Forms',
  versionInUse: 'Default',
}, {
  key: '2',
  confirmationEmailType: 'Registration Confirmation',
  category: 'Registration Forms',
  versionInUse: 'Default',
}, {
  key: '3',
  confirmationEmailType: 'Falled Payment',
  category: 'Recurring Installment Payments',
  versionInUse: 'Default',
}, {
  key: '4',
  confirmationEmailType: 'Profile Modification',
  category: 'Communication',
  versionInUse: 'Default',
}, {
  key: '5',
  confirmationEmailType: 'Login Retrieval',
  category: 'General Account eMail',
  versionInUse: 'Default',
}];
const col = [{
  title: 'Confirmation eMail type',
  dataIndex: 'confirmationEmailType',
  key: 'confirmationEmailType',
  render: text => <a href="#/app/email-conf-manage" style={{display: 'block'}}>{text} <small className="material-icons" style={styles}><a href="#/app/email-conf-manage">settings</a></small></a>,
  sorter: (a, b) => a.confirmationEmailType.localeCompare(b.confirmationEmailType),
}, {
  title: 'Category',
  dataIndex: 'category',
  key: 'category',
  sorter: (a, b) => a.category.localeCompare(b.category),
}, {
  title: 'Version in Use',
  dataIndex: 'versionInUse',
  key: 'versionInUse',
  sorter: (a, b) => a.versionInUse.localeCompare(b.versionInUse)}];
const rowSelection = {};

class DonorTable extends React.Component {
  render() {
    return (
      <div>
        <div className="box box-default">
          <div className="box-body">
            <ControlPanel />
            <Table
              dataSource={dataSource}
              columns={col}
              size="small"
              bordered
              rowSelection={rowSelection}
              pagination={{defaultCurrent: 1, total: 50, pageSize: 5, showSizeChanger: true }}
            />
            <ControlPanel />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = DonorTable;
