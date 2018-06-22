import React from 'react';
import SelectField from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Date extends React.Component {
  state = {
    value: 'select'
  };

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <SelectField
        label="Date Range"
        value={this.state.value}
        maxHeight={200}
        onChange={this.handleChange}
      >
        <MenuItem value="select">-Select-</MenuItem>
        <MenuItem value={1}>Within</MenuItem>
        <MenuItem value={2}>Between</MenuItem>
        <MenuItem value={3}>Exactly</MenuItem>
        <MenuItem value={4}>Equal to</MenuItem>
        <MenuItem value={5}>Greater than</MenuItem>
        <MenuItem value={6}>Less than</MenuItem>
        <MenuItem value={7}>Greater than or Equal to</MenuItem>
        <MenuItem value={8}>Less than or Equial to</MenuItem>
      </SelectField>
    );
  }
}
class DateSel extends React.Component {
  state = {
    value: 'select'
  };

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <SelectField
        label="Date Range"
        value={this.state.value}
        maxHeight={200}
        onChange={this.handleChange}
      >
        <MenuItem value="select">-Select-</MenuItem>
        <MenuItem value={1}>Today Only</MenuItem>
        <MenuItem value={2}>Previous # of Days</MenuItem>
        <MenuItem value={3}>Previous # of Weeks</MenuItem>
        <MenuItem value={4}>Previous # of Months</MenuItem>
        <MenuItem value={5}>Previous # of Years</MenuItem>
        <MenuItem value={6}>Last Full Week</MenuItem>
        <MenuItem value={7}>Last Full Monnth</MenuItem>
        <MenuItem value={8}>Last Billing Cycle</MenuItem>
        <MenuItem value={9}>2nd Last Billing Cycle</MenuItem>
        <MenuItem value={10}>Year To Date</MenuItem>
        <MenuItem value={11}>To Date</MenuItem>
        <MenuItem value={12}>Next # of Days</MenuItem>
        <MenuItem value={13}>Next # of Weeks</MenuItem>
        <MenuItem value={14}>Next # of Months</MenuItem>
        <MenuItem value={15}>Next # of Years</MenuItem>
        <MenuItem value={16}>Next Full Week</MenuItem>
        <MenuItem value={17}>Next Full Month</MenuItem>
      </SelectField>
    );
  }
}

class DateRange extends React.Component {
  render() {
    return (
      <div>
        <h5>Date Range</h5>
        <small>
          Define the date range for your report. The dates in your report will
          be within this range.
        </small>
        <br />
        <Date /> <span className="space" /> <DateSel />
      </div>
    );
  }
}

module.exports = DateRange;
