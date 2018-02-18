import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const mWidthStyle = {
  minWidth: '135px'
};

class Controls extends React.Component {
  state={
    first: true,
  };

  ClickHandler(e) {
    e.preventDefault();
    console.log(this.state.first);
    this.setState((prev, props) =>
      ({first: !prev.first}));
  }

  render() {
    this.ClickHandler = this.ClickHandler.bind(this);
    return (
      <div className="box box-default text-center">
        <FlatButton onClick={this.ClickHandler} style={mWidthStyle} label={this.props.first} href="" target="_blank" secondary={this.state.first} />
        <FlatButton onClick={this.ClickHandler} style={mWidthStyle} label={this.props.second} href="" target="_blank" secondary={!this.state.first} />
      </div>
    );
  }
}

module.exports = Controls;
