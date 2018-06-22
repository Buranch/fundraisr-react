import React from 'react';
import Button from '@material-ui/core/Button';

const mWidthStyle = {
  color: '#00bcd4',
  minWidth: '135px',
  fontSize: '15px'
};

const controlPanelStyle = {
  padding: '4px'
};

class Controls extends React.Component {
  state = {
    donors: true
  };

  ClickHandler(e) {
    e.preventDefault();
    console.log(this.state.donors);
    this.setState((prev, props) => ({ donors: !prev.donors }));
  }

  render() {
    this.ClickHandler = this.ClickHandler.bind(this);
    return (
      <div className="box box-default text-center" style={controlPanelStyle}>
        <Button
          onClick={this.ClickHandler}
          style={mWidthStyle}
          label="Donors"
          href=""
          target="_blank"
          secondary={this.state.donors}
        >
          Donors
        </Button>
        <Button
          onClick={this.ClickHandler}
          style={mWidthStyle}
          label="Participants"
          href=""
          target="_blank"
          secondary={!this.state.donors}
        >
          Participants
        </Button>
      </div>
    );
  }
}

module.exports = Controls;
