import React from 'react';
import EnhancedTable from './mailConfirmTable';
import ControlPanel from './controlPanel';

class DonorTable extends React.Component {
  render() {
    return (
      <div>
        <div className="box box-default">
          <div className="box-body">
            <ControlPanel />
            <EnhancedTable />
            <ControlPanel />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = DonorTable;
