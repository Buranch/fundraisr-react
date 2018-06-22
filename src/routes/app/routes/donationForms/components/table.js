import React from 'react';
import EnhancedTable from './donationTable';
import ControlPanel from '../../../components/standartControlPanel';
import FilterManager from '../../../components/filterManager';

class DonationFormTable extends React.Component {
  render() {
    return (
      <div>
        <FilterManager />
        <div className="box box-default">
          <div className="box-body">
            <ControlPanel edit="#/app/manage-df" />
            <EnhancedTable />
            <ControlPanel edit="#/app/manage-df" />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = DonationFormTable;
