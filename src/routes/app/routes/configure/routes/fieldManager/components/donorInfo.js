import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import TextField from '@material-ui/core/TextField';
import SelectField from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

class EditDialog extends React.Component {
  state = {
    inputLabel: this.props.defaultLabel || '',
    inputId: this.props.defaultId || '',
    inputType:
      this.props.defaultType.toUpperCase().search(/CHECK/i) === -1
        ? 'select'
        : 'check box'
  };

  handleConfirm = () => {
    alert('Confirm!');
    alert(this.state.inputLabel);
    alert(this.state.inputId);
    alert(this.state.inputType);
  };

  handleLabel = (event, value) => this.setState({ inputLabel: value });
  handleInputType = (event, index, value) =>
    this.setState({ inputType: value });
  handleId = (event, value) => this.setState({ inputId: value });

  render() {
    return (
      <span>
        <TextField
          label="Input Label"
          value={this.state.inputLabel}
          onChange={this.handleLabel}
        />{' '}
        <br />
        <TextField
          label="Input Label"
          value={this.state.inputId}
          onChange={this.handleId}
        />{' '}
        <br />
        <SelectField
          label="Input Type"
          value={this.state.inputType}
          onChange={this.handleInputType}
        >
          <MenuItem value="checkBox">Check Box</MenuItem>
          <MenuItem value="textInput">Text Input</MenuItem>
          <MenuItem value="select">Select</MenuItem>
          <MenuItem value="radioButtons">Radio Button</MenuItem>
        </SelectField>
        <br />
        <Button
          label="Confirm"
          secondary
          keyboardFocused
          onClick={this.handleConfirm}
        />
      </span>
    );
  }
}

const dataSource = [
  {
    key: '1',
    inputLabel: 'How did you hear about us?',
    inputId: 'donor-referal',
    inputType: 'Select'
  },
  {
    key: '2',
    inputLabel: 'Active Flag',
    inputId: 'active-flag',
    inputType: 'Select'
  },
  {
    key: '3',
    inputLabel: 'Private Listing',
    inputId: 'private-listing',
    inputType: 'Check Box'
  },
  {
    key: '4',
    inputLabel: 'Celerity',
    inputId: 'is-celebrity',
    inputType: 'Check Box'
  },
  {
    key: '5',
    inputLabel: 'Can Post',
    inputId: 'can-post',
    inputType: 'Check Box'
  },
  {
    key: '6',
    inputLabel: 'Giving Fund',
    inputId: 'giving-fund',
    inputType: 'Check Box'
  }
];
const col = [
  {
    title: 'Input Label',
    dataIndex: 'inputLabel',
    key: 'inputLabel'
  },
  {
    title: 'Input ID',
    dataIndex: 'inputId',
    key: 'inputId'
  },
  {
    title: 'Input Type',
    dataIndex: 'inputType',
    key: 'inputType',
    render: text => {
      const workText = text.toUpperCase();
      switch (workText) {
        case 'SELECT':
          return <span className="color-warning">{workText}</span>;
        case 'TEXT INPUT':
          return <span className="color-info">{workText}</span>;
        case 'CHECK BOX':
          return <span className="color-danger">{workText}</span>;
        default:
          return <span className="color-success">{workText}</span>;
      }
    }
  }
];
const rowSelection = {};

class DonorTable extends React.Component {
  render() {
    return (
      <Table
        dataSource={dataSource}
        columns={col}
        size="small"
        bordered
        rowSelection={rowSelection}
        expandedRowRender={record => (
          <p style={{ margin: 0 }}>
            <EditDialog
              defaultLabel={record.inputLabel}
              defaultId={record.inputId}
              defaultType={record.inputType}
            />
          </p>
        )}
        pagination={false}
      />
    );
  }
}

module.exports = DonorTable;
