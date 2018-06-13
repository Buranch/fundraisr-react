import React from 'react';
import EnhancedTable from './eventTable';
import ControlPanel from './controlPanel';
import FilterManager from '../../../components/filterManager';

class EventTable extends React.Component {
  render() {
    return (
      <div>
        <FilterManager />
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

module.exports = EventTable;
