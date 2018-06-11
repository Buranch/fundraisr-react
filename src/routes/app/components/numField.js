import React from 'react';
// import TextField from 'material-ui/TextField';

import TextField from '@material-ui/core/TextField';

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

/***
 * min, start, label, style
 */
class NumTextField extends React.Component {
  state = {
    value: this.props.start || this.props.min || '0'
  };

  numHandler = (evt, newValue) => {
    if (!isNumeric(newValue) && newValue !== '') return;
    if (+newValue >= +this.props.min) {
      this.setState({ value: newValue });
      if (this.props.onChange) {
        this.props.onChange(evt, newValue);
      }
    } else {
      // allow user to enter a number, that smallest the min
      // (for typping 14 from 10 firstly user del 0 and make number smaller 10)
      // when focus ended with smaller num, previous value will return
      throw e;
    }
  };

  render = () => (
    <TextField
      key={this.props.key}
      name={this.props.key}
      style={this.props.style}
      floatingLabelText={this.props.label}
      onChange={this.numHandler}
      value={this.state.value}
    />
  );
}

module.exports = NumTextField;
