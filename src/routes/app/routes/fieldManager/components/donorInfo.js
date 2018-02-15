import React from 'react';
import {Table} from 'antd';
import 'antd/dist/antd.css';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

// TODO Dialog doesnt work in table!
class EditDialog extends React.Component {
  state = {
    open: false,
    inputLabel: this.props.defaultLabel || '',
    inputId: this.props.defaultId || '',
    inputType: this.props.defaultType || ''
  };

  handleOpen = () => {
    this.setState({open: true});
  };
  handleConfirm = () => {
    alert('Confirm!');
    alert(this.state.inputLabel);
    alert(this.state.inputId);
    alert(this.state.inputType);
    this.setState({open: false});
  };
  handleClose = () => {
    alert("Close!");
    this.setState({open: false});
  };
  handleLabel = (event, value) => this.setState({inputLabel: value});
  handleInputType = (event, index, value) => this.setState({inputType: value});
  handleId = (event, value) => this.setState({inputId: value});

  render() {
    const actions = [
      <FlatButton
        label="Confirm"
        secondary
        keyboardFocused
        onClick={this.handleConfirm}
      />,
      <FlatButton
        label="Cancel"
        style={mWidthStyle}
        primary
        onClick={this.handleClose}
      />,
    ];

    return (
      <span>
        <FlatButton label={this.state.inputLabel || this.props.defaultLabel} onClick={this.handleOpen} target="_blank" secondary />
        <Dialog
          title="Edit Field"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField floatingLabelText="Input Label" value={this.state.inputLabel} onChange={this.handleLabel} /> <br />
          <TextField floatingLabelText="Input Label" value={this.state.inputId} onChange={this.handleId} /> <br />
          <SelectField
            floatingLabelText="Input Type"
            value={this.state.inputType}
            onChange={this.handleInputType}
          >
            <MenuItem value={'checkBox'} primaryText="Check Box" />
            <MenuItem value={'textInput'} primaryText="Text Input" />
            <MenuItem value={'select'} primaryText="Select" />
            <MenuItem value={'radioButtons'} primaryText="Radio Buttons" />
          </SelectField>
        </Dialog>
      </span>
    );
  }
}

const dataSource = [{
  key: '1',
  inputLabel: 'How did you hear about us?',
  inputId: 'donor-referal',
  inputType: 'Select',
}, {
  key: '2',
  inputLabel: 'Active Flag',
  inputId: 'active-flag',
  inputType: 'Select',
}, {
  key: '3',
  inputLabel: 'Private Listing',
  inputId: 'private-listing',
  inputType: 'Check Box',
}, {
  key: '4',
  inputLabel: 'Celerity',
  inputId: 'is-celebrity',
  inputType: 'Check Box',
}, {
  key: '5',
  inputLabel: 'Can Post',
  inputId: 'can-post',
  inputType: 'Check Box',
}, {
  key: '6',
  inputLabel: 'Giving Fund',
  inputId: 'giving-fund',
  inputType: 'Check Box',
}];
const col = [{
  title: 'Input Label',
  dataIndex: 'inputLabel',
  key: 'inputLabel',
}, {
  title: 'Input ID',
  dataIndex: 'inputId',
  key: 'inputId',
}, {
  title: 'Input Type',
  dataIndex: 'inputType',
  key: 'inputType',
  render: (text) => {
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
}];
const rowSelection = {};

// TODO add the data
// TODO add a number of showed rows
// TODO add an icons to link elems
class DonorTable extends React.Component {
  render() {
    return (
      <Table
        dataSource={dataSource}
        columns={col}
        size="small"
        bordered
        rowSelection={rowSelection}
      />
    );
  }
}

module.exports = DonorTable;
