import React from 'react';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import SelectField from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import RadioButton from '@material-ui/core/Radio';
import RadioButtonGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ContentRemove from '@material-ui/icons/Remove';

const mWidthStyle = {
  minWidth: '135px'
};
const styles = {
  toggle: {
    maxWidth: 250,
    marginBottom: 16
  },
  radioButton: {
    marginBottom: 16
  }
};

class Elem extends React.Component {
  clickHandler = e => {
    e.preventDefault();
    this.props.onDelete(this.props.num);
  };

  numHandler = (evt, newValue) => {
    this.props.onChange(newValue, this.props.num);
  };

  render() {
    return (
      <div>
        <TextField
          key={this.props.key}
          name={this.props.key}
          style={styles.textFieldStyle}
          floatingLabelText={`eMail${+this.props.giveKey + 1}`}
          onChange={this.numHandler}
          value={this.props.value}
        />
        <IconButton
          onClick={this.clickHandler}
          style={{ padding: '0 10px 0 0' }}
        >
          {' '}
          <ContentRemove />{' '}
        </IconButton>
      </div>
    );
  }
}
class Format extends React.Component {
  state = {
    value: 1
  };

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <SelectField
        floatingLabelText="Frequency"
        value={this.state.value}
        onChange={this.handleChange}
      >
        <MenuItem value={1} primaryText="HTML" />
        <MenuItem value={2} primaryText="PDF" />
        <MenuItem value={3} primaryText="Excel" />
        <MenuItem value={4} primaryText="CSV" />
      </SelectField>
    );
  }
}
class Email extends React.Component {
  state = {
    array: []
  };

  addHandler = () => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev.push('');
      return { array: prev };
    });
  };
  removeHandler = num => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev.splice(num, 1);
      return { array: prev };
    });
  };
  numHandler = (newValue, num) => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev[num] = newValue;
      return { array: prev };
    });
  };

  render() {
    this.removeHandler = this.removeHandler.bind(this);
    this.numHandler = this.numHandler.bind(this);

    const elems = [];
    for (let i = 0; i < this.state.array.length; i++) {
      elems.push(
        <Elem
          key={i}
          value={this.state.array[i]}
          giveKey={i}
          num={i}
          onDelete={this.removeHandler}
          onChange={this.numHandler}
        />
      );
    }

    return (
      <span>
        <TextField floatingLabelText="eMail" hintText="user@domain.com" />
        <span className="space" />
        <Button
          onClick={this.addHandler}
          style={mWidthStyle}
          label="Add email"
          secondary
          icon={<AddIcon />}
        />
        {elems}
      </span>
    );
  }
}

class Delivery extends React.Component {
  state = { value: 'now' };
  onValueChange = (e, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    let twoRow;
    switch (this.state.value) {
      case 'now':
        twoRow = (
          <span>
            <b>Click Finish, Sit back, and Relax!</b> <br />
            <small>
              Your Report will popup in a new Window as soon as it's ready
            </small>
          </span>
        );
        break;
      case 'email':
        twoRow = (
          <span>
            <Email />
            <Format />
          </span>
        );
        break;
      case 'save':
        twoRow = (
          <span>
            <TextField
              floatingLabelText="File Name"
              hintText="My Custom Report"
            />
            <br />
            <Format />
          </span>
        );
        break;
      default:
        twoRow = (
          <span>
            <TextField
              floatingLabelText="Configuration Name"
              hintText="Report Configuration"
            />
            <br />
            <TextField
              floatingLabelText="Description"
              hintText="Report Description"
            />
          </span>
        );
    }

    return (
      <div>
        <h5>Delivery</h5>
        <small>
          Choose how to get your report. View small reports immediately, to save
          resources have that larger report emailed to youself when it's
          complete.
        </small>
        <br />
        <h6>Properties</h6>
        <TextField floatingLabelText="Title" hintText="Report title" /> <br />
        <TextField
          floatingLabelText="Prepared for"
          hintText="Report for"
        />{' '}
        <br />
        <TextField floatingLabelText="Prepared by" hintText="Report by" />{' '}
        <br />
        <Switch label="Time\Date Stamp" style={styles.toggle} defaultToggled />
        <div className="divider" />
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h6>Output Options</h6>
            <RadioButtonGroup
              name="outputOptions"
              defaultSelected="now"
              onChange={this.onValueChange}
            >
              <RadioButton
                value="now"
                label="View Report Now"
                style={styles.radioButton}
              />
              <RadioButton
                value="email"
                label="Email the Report Results"
                style={styles.radioButton}
              />
              <RadioButton
                value="save"
                label="Save the Report Results"
                style={styles.radioButton}
              />
              <RadioButton
                value="configs"
                label="Save the Report Configuration"
                style={styles.radioButton}
              />
            </RadioButtonGroup>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8">
            <h6>Output Options Defined</h6>
            {twoRow}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Delivery;
