import React from 'react';
import ControlPanel from '../../../components/standartControlPanel';
import FilterManager from '../../../components/filterManager';
import EnhancedTable from './materialTable';

class DonorTable extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div>
        <FilterManager />
        <div className="box box-default">
          <div className="box-body">
            <ControlPanel edit="#/app/donors-manage" />
            <EnhancedTable />
            <ControlPanel edit="#/app/donors-manage" />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = DonorTable;
