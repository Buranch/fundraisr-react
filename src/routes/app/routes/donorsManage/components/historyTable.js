import React from 'react';
import {Table} from 'antd';
import 'antd/dist/antd.css';

const dataSource = [{
  key: '1',
  activity: 'Donation',
  subject: 'Event : Prouty 2008',
  description: 'Amount : 100.00\nPayment Type : CREDIT\nSource : Event Side\nGift Type : Donation',
  timestamp: '7/11/2008 1:08 PM',
}, {
  key: '2',
  activity: 'Registration',
  subject: 'Event : 2014 Reach for the Peaks - Moosilauke',
  description: 'Amount : 255.00\nPayment Type : CREDIT\nSource : Event Side',
  timestamp: '9/29/2014 1:17 PM',
}, {
  key: '3',
  activity: 'Registration',
  subject: 'Event : 2013 Reach for the Peaks - Kilimanjaro',
  description: 'Amount : 500.00\nPayment Type : CREDIT\nSource : Event Side',
  timestamp: '10/18/2013 8:41 AM',
}, {
  key: '4',
  activity: 'Donation',
  subject: 'Event : 2013 Reach for the Peaks - Kilimanjaro',
  description: 'Amount : 3803.00\nPayment Type : CREDIT\nSource : Event Side\nGift Type : Donation',
  timestamp: '12/11/2013 9:56 AM',
}];
const col = [{
  title: 'Activity',
  dataIndex: 'activity',
  key: 'activity',
}, {
  title: 'Subject',
  dataIndex: 'subject',
  key: 'subject',
}, {
  title: 'Description',
  dataIndex: 'description',
  key: 'description',
}, {
  title: 'Timestamp',
  dataIndex: 'timestamp',
  key: 'timestamp',
}];
const rowSelection = {};

//TODO why enters isnt added? description
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
