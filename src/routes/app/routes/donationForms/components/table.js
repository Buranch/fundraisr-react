import React from 'react';
import {Table} from 'antd';
import 'antd/dist/antd.css';
import ControlPanel from '../../../components/standartControlPanel';
import FilterManager from '../../../components/filterManager';

const smallIconsStyle = {
  fontSize: '15px', padding: '3px'
};
const styles = {
  fontSize: '15px',
  float: 'right'
};

const dataSource = [{
  key: '1',
  formName: 'Help Needed!',
  owner: 'opp@Betty Boop',
  dateCreated: '04 July 2014',
  raisedToDate: '$500.00',
  status: 'active',
}];
const col = [{
  title: 'Form Name',
  dataIndex: 'formName',
  key: 'formName',
  render: text => <a href="#/app/manage-df" style={{display: 'block'}}>{text}<small className="material-icons" style={styles}><a href="#/app/manage-df">settings</a></small></a>,
  sorter: (a, b) => a.firstName.localeCompare(b.firstName),
}, {
  title: 'Actions',
  key: 'actions',
  render: () => (
    <span>
      <a href="#/app/donation-form-design" className="material-icons" style={smallIconsStyle} title="Design">brush</a>
      <span className="space" />
      <a href="#/app/donation-form-options" className="material-icons" style={smallIconsStyle} title="Options">build</a>
      <span className="space" />
      <a href="#/app/donation-form-bookkeeping" className="material-icons" style={smallIconsStyle} title="Bookkeeping">book</a>
    </span>
  ),
}, {
  title: 'Owner',
  dataIndex: 'owner',
  key: 'owner',
  sorter: (a, b) => a.email.localeCompare(b.email),
},{
  title: 'Date Created',
  dataIndex: 'dateCreated',
  key: 'dateCreated',
  sorter: (a, b) => a.address.localeCompare(b.address),
}, {
  title: 'Raised to Date',
  dataIndex: 'raisedToDate',
  key: 'raisedToDate',
  sorter: (a, b) => a.city.localeCompare(b.city),
}, {
  title: 'Status',
  dataIndex: 'status',
  key: 'status',
  render: (text) => {
    if (text === 'active') {
      return (<span><small className="color-success material-icons" style={smallIconsStyle}>label</small>ACTIVE</span>);
    } else if (text === 'no active') {
      return (<span><small className="color-danger material-icons" style={smallIconsStyle}>label_outline</small>ACTIVE</span>);
    }
    return (<span><small className="color-danger material-icons" style={smallIconsStyle}>label_outline</small>INACTIVE</span>);
  },
  sorter: (a, b) => a.state.localeCompare(b.state),
}];
const rowSelection = {};

class DonationFormTable extends React.Component {
  render() {
    return (
      <div>
        <FilterManager />
        <div className="box box-default">
          <div className="box-body">
            <ControlPanel edit="#/app/manage-df" />
            <Table
              dataSource={dataSource}
              columns={col}
              size="small"
              bordered
              rowSelection={rowSelection}
            />
            <ControlPanel edit="#/app/manage-df" />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = DonationFormTable;
