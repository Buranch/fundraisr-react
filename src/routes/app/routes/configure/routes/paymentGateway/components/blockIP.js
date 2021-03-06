import React from 'react';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ContentRemove from 'material-ui/svg-icons/content/remove';

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

class Elem extends React.Component {
  clickHandler = (e) => {
    e.preventDefault();
    this.props.onDelete(this.props.num - 1);
  };

  begHandler = (e, newValue) => {
    e.preventDefault();
    this.props.onBegChange(newValue, this.props.num - 1);
  };

  endHandler = (e, newValue) => {
    e.preventDefault();
    this.props.onEndChange(newValue, this.props.num - 1);
  };

  render() {
    return (
      <div>
        <TextField
          key={`${this.props.key}beg`}
          onChange={this.begHandler}
          floatingLabelText="Begin Range"
          style={styles.textFieldStyle}
          value={this.props.value.begin}
        />
        <span className="space" />
        <TextField
          key={`${this.props.key}end`}
          onChange={this.endHandler}
          floatingLabelText="End Range"
          style={styles.textFieldStyle}
          value={this.props.value.end}
        />
        <IconButton onClick={this.clickHandler}> <ContentRemove /> </IconButton>
      </div>
    );
  }
}

class BlockIP extends React.Component {
  state = {
    style: {display: 'none'},
    array: []
  };

  AddHandler = () => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev.push({begin: '', end: ''});
      return {
        style: prevState.style,
        array: prev
      };
    });
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

  BegHandler = (newValue, num) => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev[num].begin = newValue;
      return {
        style: prevState.style,
        array: prev
      };
    });
  };

  EndHandler = (newValue, num) => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev[num].end = newValue;
      return {
        style: prevState.style,
        array: prev
      };
    });
  };

  ToggleHandler = () => {
    if (this.state.style.display === 'block') {
      this.setState({
        style: {display: 'none'}
      });
    } else {
      this.setState({
        style: {display: 'block'}
      });
    }
  };

  render() {
    this.BegHandler = this.BegHandler.bind(this);
    this.EndHandler = this.EndHandler.bind(this);

    const elems = [];
    for (let i = 0; i < this.state.array.length; i++) {
      elems.push(
        <Elem
          value={this.state.array[i]}
          key={i}
          num={i + 1}
          onDelete={this.RemoveHandler}
          onBegChange={this.BegHandler}
          onEndChange={this.EndHandler}
        />
      );
    }

    return (
      <div>
        <Toggle label="Block IP Addresses" style={styles.toggle} onToggle={this.ToggleHandler} />
        <div className="box bg-color-page" style={this.state.style}>
          <div className="box-body">
            <FlatButton onClick={this.AddHandler} style={mWidthStyle} label="Addresses" labelPosition="after" primary icon={<ContentAdd />} />
            <div>
              <TextField floatingLabelText="Begin Range" style={styles.textFieldStyle} />
              <span className="space" />
              <TextField floatingLabelText="End Range" style={styles.textFieldStyle} />
            </div>
            {elems}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = BlockIP;
