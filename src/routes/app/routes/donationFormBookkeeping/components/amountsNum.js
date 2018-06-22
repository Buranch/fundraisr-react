import React from 'react';
import ContentAdd from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ContentRemove from '@material-ui/icons/Remove';
import NumField from '../../../components/numField';

const mWidthStyle = {
  color: '#00bcd4',
  minWidth: '135px',
  fontSize: '15px'
};
const styles = {
  toggle: {
    maxWidth: 250,
    marginBottom: 16
  },
  textFieldStyle: { width: '80px' }
};
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

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
      <span>
        <TextField
          key={this.props.key}
          name={this.props.key}
          style={styles.textFieldStyle}
          label="Amount"
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
      </span>
    );
  }
}

class BlockIP extends React.Component {
  state = {
    array: [75, 100]
  };

  AddHandler = () => {
    if (this.state.array.length < 6) {
      this.setState((prevState, props) => {
        const prev = prevState.array.map(elem => elem);
        prev.push(10);
        return {
          array: prev
        };
      });
    } else {
      alert('Maximum is set at 8');
    }
  };
  RemoveHandler = num => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev.splice(num, 1);
      return {
        array: prev
      };
    });
  };
  NumHandler = (newValue, num) => {
    if (!isNumeric(newValue) && newValue !== '') return;
    if (+newValue >= 10) {
      this.setState((prevState, props) => {
        const prev = prevState.array.map(elem => elem);
        prev[num] = newValue;
        return {
          array: prev
        };
      });
    } else {
      // allow user to enter a number, that smallest the min
      // (for typping 14 from 10 firstly user del 0 and make number smaller 10)
      // when focus ended with smaller num, previous value will return
      throw e;
    }
  };

  render() {
    this.RemoveHandler = this.RemoveHandler.bind(this);
    this.NumHandler = this.NumHandler.bind(this);

    const elems = [];
    for (let i = 0; i < this.state.array.length; i++) {
      elems.push(
        <Elem
          key={i}
          value={this.state.array[i]}
          giveKey={i}
          num={i}
          onDelete={this.RemoveHandler}
          onChange={this.NumHandler}
        />
      );
    }

    return (
      <div>
        <Button
          onClick={this.AddHandler}
          style={mWidthStyle}
          label="Add"
          labelPosition="after"
          primary
          icon={<ContentAdd />}
        />
        <div>
          <NumField style={styles.textFieldStyle} min={10} start={25} />
          <span className="space" />
          <NumField style={styles.textFieldStyle} min={10} start={50} />
        </div>
        {elems}
      </div>
    );
  }
}

module.exports = BlockIP;
