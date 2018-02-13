import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const mWidthStyle = {
  minWidth: '135px'
};

class Controls extends React.Component {
  state={
    donors: true,
  };

  ClickHandler(e) {
    e.preventDefault();
    console.log(this.state.donors);
    this.setState((prev, props) =>
      ({donors: !prev.donors}));
  }

  render() {
    this.ClickHandler = this.ClickHandler.bind(this);
    return (
      <div className="box box-default text-center">
        <FlatButton onClick={this.ClickHandler} style={mWidthStyle} label="Donors" href="" target="_blank" secondary={this.state.donors} />
        <FlatButton onClick={this.ClickHandler} style={mWidthStyle} label="Participants" href="" target="_blank" secondary={!this.state.donors} />
      </div>
    );
  }
}

module.exports = Controls;
