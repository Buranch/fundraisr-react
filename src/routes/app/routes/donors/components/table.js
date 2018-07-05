import React from 'react';
import ControlPanel from '../../../components/standartControlPanel';
import FilterManager from '../../../components/filterManager';
import EnhancedTable from './materialTable';
class DonorTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: []
    };
    this.updatefilterArray = this.updatefilterArray.bind(this);
    this.clickBroadcaster = this.clickBroadcaster.bind(this);
  }

  clickBroadcaster(event) {}
  updatefilterArray(filter) {
    this.setState({
      filter
    });
  }
  render() {
    return (
      <div>
        <FilterManager onFilterChange={this.updatefilterArray} />
        <div className="box box-default">
          <div className="box-body">
            <ControlPanel edit="#/app/donors-manage" />
            <EnhancedTable filter={this.state.filter} />
            <ControlPanel edit="#/app/donors-manage" />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = DonorTable;
