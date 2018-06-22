import React from 'react';
import CustomizedTable from './materialDonorTitleTable';

class DonationFormTable extends React.Component {
  render() {
    return (
      <div>
        <h5>Donor Title</h5>
        <CustomizedTable />
      </div>
    );
  }
}

module.exports = DonationFormTable;
