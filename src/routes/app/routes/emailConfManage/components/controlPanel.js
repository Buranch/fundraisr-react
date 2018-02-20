import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const mWidthStyle = {
  minWidth: '135px'
};

class Panel extends React.Component {
  state = {
    testMode: false,
    eventMode: false
  };
  testClickHandle(e) {
    this.setState((prev, props) => {
      return {testMode: !(prev.testMode)};
    });
  }
  eventClickHandle(e) {
    this.setState((prev, props) => {
      return {eventMode: !(prev.eventMode)};
    });
  }

  render() {
    this.testClickHandle = this.testClickHandle.bind(this);
    this.eventClickHandle = this.eventClickHandle.bind(this);

    return (
      <div className="box box-default position-sticky sticky-top -sticky-note -sticky-note-o fa-sticky-note fa-sticky-note-o">
        <div className="text-right">
          <FlatButton style={mWidthStyle} label="Save" secondary />
          <FlatButton style={mWidthStyle} label="Revert" />
          <FlatButton style={mWidthStyle} label="Cancel" primary />
          <FlatButton style={mWidthStyle} onClick={this.testClickHandle} label="Test Mode" primary={this.state.testMode} />
          <FlatButton style={mWidthStyle} onClick={this.eventClickHandle} label="Event Mode" primary={this.state.eventMode} />
        </div>
      </div>
    );
  }
}

module.exports = Panel;
