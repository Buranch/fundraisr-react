import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import SelectField from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const mWidthStyle = {
  color: '#00bcd4',
  minWidth: '135px',
  fontSize: '15px'
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
    alert(this.state.inputLabel);
    alert(this.state.inputId);
    alert(this.state.inputType);
    this.setState({ open: false });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleLabel = (event, value) =>
    this.setState({ inputLabel: event.target.value });
  handleInputType = (event, index, value) =>
    this.setState({ inputType: event.target.value });
  handleId = (event, value) => this.setState({ inputId: event.target.value });

  render() {
    const actions = [
      <Button
        label="Confirm"
        color="secondary"
        keyboardFocused
        onClick={this.handleConfirm}
      >
        Confirm
      </Button>,
      <Button
        label="Cancel"
        style={mWidthStyle}
        color="primary"
        onClick={this.handleClose}
      >
        Cancel
      </Button>
    ];

    return (
      <span>
        <Button onClick={this.handleOpen} color="secondary">
          <AddIcon /> Add
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          maxWidth="xl"
          aria-labelledby="form-dialog-title"
          actions={actions}
        >
          <DialogTitle id="form-dialog-title">Add Custom Field</DialogTitle>
          <DialogContent>
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
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleConfirm} color="primary">
              Save
            </Button>
          </DialogActions>
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
      color="primary"
    >
      <RemoveIcon /> Delete
    </Button>
  </div>
);

module.exports = Controls;
