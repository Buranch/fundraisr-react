import React from 'react';
import EnhancedTable from './materialTable';
import ControlPanel from '../../../../../components/standartControlPanel';
import FilterManager from '../../../../../components/filterManager';

class DonorTable extends React.Component {
  render() {
    return (
      <div>
        <FilterManager />
        <div className="box box-default">
          <div className="box-body">
            <ControlPanel edit="#/app/user-profile" />
            <EnhancedTable />
            <ControlPanel edit="#/app/user-profile" />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = DonorTable;
