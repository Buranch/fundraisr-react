import React from 'react';
import CustomizedTable from './materialDemographicTable';

class DonationFormTable extends React.Component {
  render() {
    return (
      <div>
        <h5>Personal Information > Demographics</h5>
        <CustomizedTable />
      </div>
    );
  }
}

module.exports = DonationFormTable;
