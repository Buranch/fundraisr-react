import React from 'react';
import {Table} from 'antd';
import 'antd/dist/antd.css';

const dataSource = [{
  key: '1',
  template: 'Registrant Listing',
  description: 'This report provides access to detailed information about registrants of one or more events. It may be run for multi-tiered accounts.',
}, {
  key: '2',
  template: 'Membership & Benefits Status Listing',
  description: 'This report provides information about Memberships and Benefits associated with a contact.',
}, {
  key: '3',
  template: 'Relationship Listing',
  description: 'This report provides a list of contacts, their Giving Summary Information, and their relationships including relationship attributes, custom profile fields, and segmentation.',
},{
  key: '4',
  template: 'Registrant Listing',
  description: 'This report provides access to detailed information about registrants of one or more events. It may be run for multi-tiered accounts.',
}, {
  key: '5',
  template: 'Membership & Benefits Status Listing',
  description: 'This report provides information about Memberships and Benefits associated with a contact.',
}, {
  key: '6',
  template: 'Relationship Listing',
  description: 'This report provides a list of contacts, their Giving Summary Information, and their relationships including relationship attributes, custom profile fields, and segmentation.',
}, {
  key: '7',
  template: 'Registrant Listing',
  description: 'This report provides access to detailed information about registrants of one or more events. It may be run for multi-tiered accounts.',
}, {
  key: '8',
  template: 'Membership & Benefits Status Listing',
  description: 'This report provides information about Memberships and Benefits associated with a contact.',
}, {
  key: '9',
  template: 'Relationship Listing',
  description: 'This report provides a list of contacts, their Giving Summary Information, and their relationships including relationship attributes, custom profile fields, and segmentation.',
}];
const col = [{
  title: 'Template',
  dataIndex: 'template',
  key: 'template',
  render: text => <a href="#/app/reporting-registrant">{text}</a>,
}, {
  title: 'Description',
  dataIndex: 'description',
  key: 'description',
}, {
  title: 'Actions',
  key: 'actions',
  render: () => (
    <span>
      <a href="#/app/reporting-registrant">Run</a>
    </span>
  ),
  width: 64
}];

class DonationFormTable extends React.Component {
  render() {
    return (
      <Table
        dataSource={dataSource}
        columns={col}
        size="small"
        bordered
        pagination={false}
      />
    );
  }
}

module.exports = DonationFormTable;
