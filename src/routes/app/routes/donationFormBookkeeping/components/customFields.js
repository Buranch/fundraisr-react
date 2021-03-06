import React from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ContentRemove from 'material-ui/svg-icons/content/remove';

const mWidthStyle = {
  minWidth: '135px'
};

class Elem extends React.Component {
  clickHandler = (e) => {
    e.preventDefault();
    this.props.onDelete(this.props.num);
  };

  numHandler = (evt, newValue) => {
    this.props.onChange(newValue, this.props.num);
  };

  render() {
    return (
      <span>
        <TextField
          key={this.props.key}
          name={this.props.key}
          floatingLabelText="Amount"
          onChange={this.numHandler}
          value={this.props.value}
        />
        <IconButton onClick={this.clickHandler} style={{padding: '0 10px 0 0'}}> <ContentRemove /> </IconButton>
      </span>
    );
  }
}

class CustomFields extends React.Component {
  state = {
    array: ['', '']
  };

  AddHandler = () => {
    if (this.state.array.length < 6) {
      this.setState((prevState, props) => {
        const prev = prevState.array.map(elem => elem);
        prev.push('');
        return {
          array: prev
        };
      });
    } else {
      alert('Maximum is set at 8');
    }
  };
  RemoveHandler = (num) => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev.splice(num, 1);
      return {
        array: prev
      };
    });
  };
  NumHandler = (newValue, num) => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev[num] = newValue;
      return {
        array: prev
      };
    });
  };

  render() {
    this.RemoveHandler = this.RemoveHandler.bind(this);
    this.NumHandler = this.NumHandler.bind(this);

    const elems = [];
    for (let i = 0; i < this.state.array.length; i++) {
      elems.push(
        <div>
          <Elem
            key={i}
            value={this.state.array[i]}
            giveKey={i}
            num={i}
            onDelete={this.RemoveHandler}
            onChange={this.NumHandler}
          />
        </div>
      );
    }
    return (
      <div className="box box-default">
        <div className="box-body">
          <h5>Custom Fields</h5>
          <small>
            Add custom fields for your Donation Form
          </small>
          <FlatButton onClick={this.AddHandler} style={mWidthStyle} label="Add" labelPosition="after" primary icon={<ContentAdd />} />
          <div>
            <TextField floatingLabelText="Amount" />
            <br />
            <TextField floatingLabelText="Amount" />
          </div>
          {elems}
        </div>
      </div>
    );
  }
}

module.exports = CustomFields;
