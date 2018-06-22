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
        label="Field"
        value={this.state.fieldValue}
        maxHeight={200}
        onChange={(event, index, value) => this.setState({ fieldValue: value })}
      >
        <MenuItem>Account EIN">Account EIN</MenuItem>
        <MenuItem>Account Name">Account Name</MenuItem>
        <MenuItem>Additional Fee 1">Additional Fee 1</MenuItem>
        <MenuItem>Additional Fee 2">Additional Fee 2</MenuItem>
        <MenuItem>Adoption Tracking #"> Adoption Tracking #</MenuItem>
        <MenuItem>Amount Due">Amount Due</MenuItem>
        <MenuItem>Amount Paid">Amount Paid</MenuItem>
        <MenuItem>Capacity Limit">Capacity Limit</MenuItem>
        <MenuItem>Capacity Status">Capacity Status</MenuItem>
        <MenuItem>Mobile Phone">Mobile Phone</MenuItem>
        <MenuItem>Check Date">Check Date</MenuItem>
        <MenuItem>Deposit Date">Deposit Date</MenuItem>
        <MenuItem>Check Number">Check Number</MenuItem>
        <MenuItem>Co-Leader Yes/No">Co-Leader Yes/No</MenuItem>
        <MenuItem>Comments">Comments</MenuItem>
        <MenuItem>Date Created">Date Created</MenuItem>
        <MenuItem>Credit Card Type">Credit Card Type</MenuItem>
        <MenuItem>Customer Product Code"> Customer Product Code</MenuItem>
        <MenuItem>Decline Gift">Decline Gift</MenuItem>
      </SelectField>
    );
  };

  renderOperatorSelection = () => {
    return (
      <SelectField
        label="Operator"
        value={this.state.operatorValue}
        maxHeight={200}
        onChange={(event, index, value) =>
          this.setState({ operatorValue: value })
        }
        style={styles.operatorSelectBoxStyle}
      >
        <MenuItem>Equals">Equals</MenuItem>
        <MenuItem>Not Equal">Not Equal</MenuItem>
        <MenuItem>Starts With">Starts With</MenuItem>
        <MenuItem>Contains">Contains</MenuItem>
        <MenuItem>Not Contain">Not Contain</MenuItem>
        <MenuItem>Contains Any Of">Contains Any Of</MenuItem>
        <MenuItem>Contains All Of">Contains All Of</MenuItem>
        <MenuItem>Is One Of">Is One Of</MenuItem>
        <MenuItem>Not One Of">Not One Of</MenuItem>
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
