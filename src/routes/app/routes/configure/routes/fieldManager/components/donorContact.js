import React from 'react';
import CustomizedTable from './materialDonorContactTable';

class DonationFormTable extends React.Component {
  render() {
    return (
      <div>
        <h5>Donor Contact</h5>
        <CustomizedTable />
      </div>
    );
  }
}

module.exports = DonationFormTable;
