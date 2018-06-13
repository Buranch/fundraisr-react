import React from 'react';
import EnhancedTable from './initiativeTable';
import FilterManager from '../../../components/filterManager';
import ControlPanel from './controlPanel';

class EventTable extends React.Component {
  render() {
    return (
      <div>
        <ControlPanel />
        <FilterManager />
        <div className="box box-default">
          <div className="box-body">
            <EnhancedTable />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = EventTable;
