import React from 'react';
// import FlatButton from 'material-ui/FlatButton';
// import Dialog from 'material-ui/Dialog';
// import TextField from 'material-ui/TextField';
// import SelectField from 'material-ui/SelectField';
// import MenuItem from 'material-ui/MenuItem';
// import AddIcon from 'material-ui/svg-icons/content/add';
// import RemoveIcon from 'material-ui/svg-icons/content/remove';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import SelectField from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const mWidthStyle = {
  minWidth: '135px'
};

class AddDialog extends React.Component {
  state = {
    open: false,
    inputLabel: 'Custom Label',
    inputId: 'custom-id',
    inputType: 'checkbox'
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleConfirm = () => {
    alert('Confirm!');
    alert(this.state.inputLabel);
    alert(this.state.inputId);
    alert(this.state.inputType);
    this.setState({ open: false });
  };
  handleClose = () => {
    alert('Close!');
    this.setState({ open: false });
  };
  handleLabel = (event, value) => this.setState({ inputLabel: value });
  handleInputType = (event, index, value) =>
    this.setState({ inputType: value });
  handleId = (event, value) => this.setState({ inputId: value });

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
      />
    ];

    return (
      <span>
        <Button
          label="Add"
          onClick={this.handleOpen}
          icon={<AddIcon />}
          secondary
        />
        <Dialog
          title="Add Custom Field"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            floatingLabelText="Input Label"
            value={this.state.inputLabel}
            onChange={this.handleLabel}
          />{' '}
          <br />
          <TextField
            floatingLabelText="Input Label"
            value={this.state.inputId}
            onChange={this.handleId}
          />{' '}
          <br />
          <SelectField
            floatingLabelText="Input Type"
            value={this.state.inputType}
            onChange={this.handleInputType}
          >
            <MenuItem value="checkbox" primaryText="Check Box" />
            <MenuItem value="textInput" primaryText="Text Input" />
            <MenuItem value="select" primaryText="Select" />
            <MenuItem value="radioButtons" primaryText="Radio Buttons" />
          </SelectField>
        </Dialog>
      </span>
    );
  }
}

const Controls = () => (
  <div className="box box-default text-center">
    <AddDialog />
    <Button
      style={mWidthStyle}
      label="Delete"
      href=""
      icon={<RemoveIcon />}
      primary
    />
  </div>
);

module.exports = Controls;
