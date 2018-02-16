import React from 'react';
import TextField from 'material-ui/TextField';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ContentRemove from 'material-ui/svg-icons/content/remove';

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const mWidthStyle = {
  minWidth: '135px'
};
const styles = {
  toggle: {
    maxWidth: 250,
    marginBottom: 16
  },
  textFieldStyle: { width: 180 }
};

class NumTextField extends React.Component {
  state = {
    value: this.props.value || this.props.defaultValue || '',
  };

  numHandler = (evt, newValue) => {
    if (!isNumeric(newValue)) return;
    if (+newValue < 5) {
      this.setState({value: 5});
    } else {
      this.setState({value: newValue});
    }
  };

  render = () => (
    <TextField style={this.props.style} value={this.state.value} floatingLabelText="Amount" onChange={this.numHandler}/>
  );
}

class Elem extends React.Component {
  clickHandler = (e) => {
    e.preventDefault();
    this.props.onDelete(this.props.num - 2);
  };

  numHandler = (e, newValue) => {
    e.preventDefault();
    this.props.onNumChange(newValue, this.props.num - 2);
  };

  render() {
    return (
      <div>
        <TextField
          key={this.props.key}
          onChange={this.numHandler}
          style={styles.textFieldStyle}
          value={this.props.value.begin}
          label="Amount"
        />
        <IconButton onClick={this.clickHandler}> <ContentRemove /> </IconButton>
      </div>
    );
  }
}

//TODO onNumChange calls before end of typing
//TODO add onNumChange handler to first 2 amounts
class BlockIP extends React.Component {
  state = {
    array: []
  };

  AddHandler = () => {
    if (this.state.array.length < 8) {
      this.setState((prevState, props) => {
        const prev = prevState.array.map(elem => elem);
        prev.push({begin: '', end: ''});
        return {
          style: prevState.style,
          array: prev
        };
      });
    }
  };

  RemoveHandler = (num) => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev.splice(num, 1);
      return {
        style: prevState.style,
        array: prev
      };
    });
  };

  NumHandler = (newValue, num) => {
    if (!isNumeric(newValue)) return;
    if (+newValue < 10) {
      this.setState(() => {
        const prev = prevState.array.map(elem => elem);
        prev[num].value = 10;
        return {
          style: prevState.style,
          array: prev
        };
      });
    } else {
      this.setState(() => {
        const prev = prevState.array.map(elem => elem);
        prev[num].value = newValue;
        return {
          style: prevState.style,
          array: prev
        };
      });
    }
  };

  render() {
    this.BegHandler = this.NumHandler.bind(this);

    const elems = [];
    for (let i = 0; i < this.state.array.length; i++) {
      elems.push(
        <Elem
          value={this.state.array[i]}
          key={i}
          num={i + 2}
          onDelete={this.RemoveHandler}
          onNumChange={this.NumHandler}
        />
      );
    }

    return (
      <div>
        <FlatButton onClick={this.AddHandler} style={mWidthStyle} label="Add" labelPosition="after" primary icon={<ContentAdd />} />
        <div>
          <NumTextField style={styles.textFieldStyle} />
          <span className="space" />
          <NumTextField style={styles.textFieldStyle} />
        </div>
        {elems}
      </div>
    );
  }
}

module.exports = BlockIP;
