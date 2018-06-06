import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Table from 'antd/lib/table';
import Button from 'antd/lib/Button';

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
        <MenuItem value="Account EIN" primaryText="Account EIN" />
        <MenuItem value="Account Name" primaryText="Account Name" />
        <MenuItem value="Additional Fee 1" primaryText="Additional Fee 1" />
        <MenuItem value="Additional Fee 2" primaryText="Additional Fee 2" />
        <MenuItem
          value="Adoption Tracking #"
          primaryText="Adoption Tracking #"
        />
        <MenuItem value="Amount Due" primaryText="Amount Due" />
        <MenuItem value="Amount Paid" primaryText="Amount Paid" />
        <MenuItem value="Capacity Limit" primaryText="Capacity Limit" />
        <MenuItem value="Capacity Status" primaryText="Capacity Status" />
        <MenuItem value="Mobile Phone" primaryText="Mobile Phone" />
        <MenuItem value="Check Date" primaryText="Check Date" />
        <MenuItem value="Deposit Date" primaryText="Deposit Date" />
        <MenuItem value="Check Number" primaryText="Check Number" />
        <MenuItem value="Co-Leader Yes/No" primaryText="Co-Leader Yes/No" />
        <MenuItem value="Comments" primaryText="Comments" />
        <MenuItem value="Date Created" primaryText="Date Created" />
        <MenuItem value="Credit Card Type" primaryText="Credit Card Type" />
        <MenuItem
          value="Customer Product Code"
          primaryText="Customer Product Code"
        />
        <MenuItem value="Decline Gift" primaryText="Decline Gift" />
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
        <MenuItem value="Equals" primaryText="Equals" />
        <MenuItem value="Not Equal" primaryText="Not Equal" />
        <MenuItem value="Starts With" primaryText="Starts With" />
        <MenuItem value="Contains" primaryText="Contains" />
        <MenuItem value="Not Contain" primaryText="Not Contain" />
        <MenuItem value="Contains Any Of" primaryText="Contains Any Of" />
        <MenuItem value="Contains All Of" primaryText="Contains All Of" />
        <MenuItem value="Is One Of" primaryText="Is One Of" />
        <MenuItem value="Not One Of" primaryText="Not One Of" />
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
          <Button icon="minus" onClick={() => onRemoveRow(a)}>
            Remove
          </Button>
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
