import React from 'react';
import Button from '@material-ui/core/Button';

const mWidthStyle = {
  color: '#00bcd4',
  minWidth: '135px',
  fontSize: '15px'
};

class Controls extends React.Component {
  state = {
    first: true
  };

  ClickHandler(e) {
    e.preventDefault();
    console.log(this.state.first);
    this.setState((prev, props) => ({ first: !prev.first }));
  }

  render() {
    this.ClickHandler = this.ClickHandler.bind(this);
    return (
      <div className="box box-default text-center">
        <Button
          onClick={this.ClickHandler}
          style={mWidthStyle}
          label={this.props.first}
          href=""
          target="_blank"
          secondary={this.state.first}
        />
        <Button
          onClick={this.ClickHandler}
          style={mWidthStyle}
          label={this.props.second}
          href=""
          target="_blank"
          secondary={!this.state.first}
        />
      </div>
    );
  }
}

module.exports = Controls;
