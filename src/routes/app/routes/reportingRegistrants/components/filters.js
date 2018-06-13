import React from 'react';
import SelectField from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FlatButton from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import { Table } from 'antd';

const styles = {
  textFieldStyle: { top: '-17px', width: '175px' },
  operatorSelectBoxStyle: { width: '175px' },
  addFilterButtonStyle: { top: '-17px' }
};

class DefineFilters extends React.Component {
  state = {
    fieldValue: null,
    operatorValue: null,
    textFieldValue: '',
    selectedFilters: []
  };

  renderFieldSelection = () => {
    return (
      <SelectField
        floatingLabelText="Field"
        value={this.state.fieldValue}
        maxHeight={200}
        onChange={(event, index, value) => this.setState({ fieldValue: value })}
      >
        <MenuItem primaryText="Account EIN">Account EIN</MenuItem>
        <MenuItem primaryText="Account Name">Account Name</MenuItem>
        <MenuItem primaryText="Additional Fee 1">Additional Fee 1</MenuItem>
        <MenuItem primaryText="Additional Fee 2">Additional Fee 2</MenuItem>
        <MenuItem primaryText="Adoption Tracking #">
          Adoption Tracking #
        </MenuItem>
        <MenuItem primaryText="Amount Due">Amount Due</MenuItem>
        <MenuItem primaryText="Amount Paid">Amount Paid</MenuItem>
        <MenuItem primaryText="Capacity Limit">Capacity Limit</MenuItem>
        <MenuItem primaryText="Capacity Status">Capacity Status</MenuItem>
        <MenuItem primaryText="Mobile Phone">Mobile Phone</MenuItem>
        <MenuItem primaryText="Check Date">Check Date</MenuItem>
        <MenuItem primaryText="Deposit Date">Deposit Date</MenuItem>
        <MenuItem primaryText="Check Number">Check Number</MenuItem>
        <MenuItem primaryText="Co-Leader Yes/No">Co-Leader Yes/No</MenuItem>
        <MenuItem primaryText="Comments">Comments</MenuItem>
        <MenuItem primaryText="Date Created">Date Created</MenuItem>
        <MenuItem primaryText="Credit Card Type">Credit Card Type</MenuItem>
        <MenuItem primaryText="Customer Product Code">
          Customer Product Code
        </MenuItem>
        <MenuItem primaryText="Decline Gift">Decline Gift</MenuItem>
      </SelectField>
    );
  };

  renderOperatorSelection = () => {
    return (
      <SelectField
        floatingLabelText="Operator"
        value={this.state.operatorValue}
        maxHeight={200}
        onChange={(event, index, value) =>
          this.setState({ operatorValue: value })
        }
        style={styles.operatorSelectBoxStyle}
      >
        <MenuItem primaryText="Equals">Equals</MenuItem>
        <MenuItem primaryText="Not Equal">Not Equal</MenuItem>
        <MenuItem primaryText="Starts With">Starts With</MenuItem>
        <MenuItem primaryText="Contains">Contains</MenuItem>
        <MenuItem primaryText="Not Contain">Not Contain</MenuItem>
        <MenuItem primaryText="Contains Any Of">Contains Any Of</MenuItem>
        <MenuItem primaryText="Contains All Of">Contains All Of</MenuItem>
        <MenuItem primaryText="Is One Of">Is One Of</MenuItem>
        <MenuItem primaryText="Not One Of">Not One Of</MenuItem>
      </SelectField>
    );
  };

  createTableCols = onRemoveRow => {
    return [
      {
        title: 'Filter',
        dataIndex: 'filter',
        key: 'filter'
      },
      {
        title: 'Condition',
        dataIndex: 'condition',
        key: 'condition'
      },
      {
        title: 'Variable',
        dataIndex: 'variable',
        key: 'variable'
      },
      {
        title: 'Action',
        key: 'action',
        render: a => (
          <FlatButton onClick={() => onRemoveRow(a)}>
            <RemoveIcon /> Remove
          </FlatButton>
        ),
        width: 100
      }
    ];
  };

  addFilter = () => {
    if (
      this.state.textFieldValue &&
      this.state.fieldValue &&
      this.state.operatorValue
    ) {
      this.setState({
        selectedFilters: this.state.selectedFilters.concat([
          {
            filter: this.state.fieldValue,
            condition: this.state.operatorValue,
            variable: this.state.textFieldValue
          }
        ])
      });
    }
  };

  removeSelectedRow = row => {
    this.setState({
      selectedFilters: this.state.selectedFilters.filter(x => x !== row)
    });
  };

  renderTable = () => {
    if (this.state.selectedFilters.length === 0) {
      return <div />;
    }
    return (
      <Table
        dataSource={this.state.selectedFilters}
        columns={this.createTableCols(this.removeSelectedRow)}
        size="small"
        bordered
      />
    );
  };

  render() {
    return (
      <div>
        <div>
          <h5>Define Filters</h5>
          <small>To filter the results in your report:</small>
        </div>
        <div>
          {this.renderFieldSelection()} {this.renderOperatorSelection()}
          <TextField
            style={styles.textFieldStyle}
            value={this.state.textFieldValue}
            onChange={(e, newValue) =>
              this.setState({ textFieldValue: newValue })
            }
          />
          <FlatButton
            onClick={this.addFilter}
            style={styles.addFilterButtonStyle}
            label="Add Filter"
            labelPosition="after"
            primary
          />
        </div>
        <div>{this.renderTable()}</div>
      </div>
    );
  }
}

module.exports = DefineFilters;
