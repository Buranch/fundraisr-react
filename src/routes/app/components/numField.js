import React from 'react';
import TextField from 'material-ui/TextField';

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

class NumTextField extends React.Component {
  state = {
    defaultValue: this.props.start || this.props.min || '0',
    value: this.props.start || this.props.min || '0'
  };

  numHandler = (evt, newValue) => {
    if (!isNumeric(newValue) && newValue !== '') return;
    if (+newValue >= +this.props.min) {
      this.setState({value: newValue});
    } else {
      // allow user to enter a number, that smallest the min
      // (for typping 14 from 10 firstly user del 0 and make number smaller 10)
      // when focus ended with smaller num, previous value will return
      throw e;
    }
  };

  render = () => (
    <TextField style={this.props.style}
               defaultValue={this.state.value}
               floatingLabelText={this.props.label}
               onChange={this.numHandler}
               value={this.state.value}
    />
  );
}

module.exports = NumTextField;
