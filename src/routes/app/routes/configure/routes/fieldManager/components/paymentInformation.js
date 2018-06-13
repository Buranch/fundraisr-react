import React from 'react';
import CustomizedTable from './materialPaymentTable';

class DonationFormTable extends React.Component {
  render() {
    return (
      <div>
        <h5>Payment Information</h5>
        <CustomizedTable />
      </div>
    );
  }
}

module.exports = DonationFormTable;
