import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Date extends React.Component {
  state = {
    value: 'select',
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <SelectField
        floatingLabelText="Date Range"
        value={this.state.value}
        maxHeight={200}
        onChange={this.handleChange}
      >
        <MenuItem value="select" primaryText="-Select-" />
        <MenuItem value={1} primaryText="Within" />
        <MenuItem value={2} primaryText="Between" />
        <MenuItem value={3} primaryText="Exactly" />
        <MenuItem value={4} primaryText="Equal to" />
        <MenuItem value={5} primaryText="Greater than" />
        <MenuItem value={6} primaryText="Less than" />
        <MenuItem value={7} primaryText="Greater than or Equal to" />
        <MenuItem value={8} primaryText="Less than or Equial to" />
      </SelectField>
    );
  }
}
class DateSel extends React.Component {
  state = {
    value: 'select',
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <SelectField
        floatingLabelText="Date Range"
        value={this.state.value}
        maxHeight={200}
        onChange={this.handleChange}
      >
        <MenuItem value="select" primaryText="-Select-" />
        <MenuItem value={1} primaryText="Today Only" />
        <MenuItem value={2} primaryText="Previous # of Days" />
        <MenuItem value={3} primaryText="Previous # of Weeks" />
        <MenuItem value={4} primaryText="Previous # of Months" />
        <MenuItem value={5} primaryText="Previous # of Years" />
        <MenuItem value={6} primaryText="Last Full Week" />
        <MenuItem value={7} primaryText="Last Full Monnth" />
        <MenuItem value={8} primaryText="Last Billing Cycle" />
        <MenuItem value={9} primaryText="2nd Last Billing Cycle" />
        <MenuItem value={10} primaryText="Year To Date" />
        <MenuItem value={11} primaryText="To Date" />
        <MenuItem value={12} primaryText="Next # of Days" />
        <MenuItem value={13} primaryText="Next # of Weeks" />
        <MenuItem value={14} primaryText="Next # of Months" />
        <MenuItem value={15} primaryText="Next # of Years" />
        <MenuItem value={16} primaryText="Next Full Week" />
        <MenuItem value={17} primaryText="Next Full Month" />
      </SelectField>
    );
  }
}


class DefineFilters extends React.Component {
  render() {
    return (
      <div>
        <h5>Date Range</h5>
        <small>
          Define the date range for your report. The dates in your report will be within this range.
        </small>
        <br />
        <Date /> <span className="space" /> <DateSel />
      </div>
    );
  }
}

module.exports = DefineFilters;
