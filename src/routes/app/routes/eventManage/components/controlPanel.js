import React from 'react';
import Button from '@material-ui/core/Button';
import PlayIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import UndoIcon from '@material-ui/icons/Undo';

const mWidthStyle = {
  minWidth: '135px'
};

const boxBodyStyle = {
  padding: '4px'
};

class Panel extends React.Component {
  state = {
    testMode: false,
    eventMode: false
  };
  testClickHandle(e) {
    this.setState((prev, props) => {
      return { testMode: !prev.testMode };
    });
  }
  eventClickHandle(e) {
    this.setState((prev, props) => {
      return { eventMode: !prev.eventMode };
    });
  }

  render() {
    this.testClickHandle = this.testClickHandle.bind(this);
    this.eventClickHandle = this.eventClickHandle.bind(this);

    return (
      <div className="box box-default position-sticky sticky-top -sticky-note -sticky-note-o fa-sticky-note fa-sticky-note-o">
        <div className="text-right" style={boxBodyStyle}>
          <Button style={mWidthStyle} color="secondary">
            <SaveIcon /> Save
          </Button>
          <Button style={mWidthStyle} label="Revert" icon={<UndoIcon />} />
          <Button style={mWidthStyle} color="primary">
            <CancelIcon /> Cancel
          </Button>
          <Button
            style={mWidthStyle}
            onClick={this.testClickHandle}
            label="Test Mode"
            icon={this.state.testMode ? <PlayIcon /> : <PauseIcon />}
            secondary={this.state.testMode}
          >
            {this.state.testMode ? <PlayIcon /> : <PauseIcon />} Test Mode
          </Button>
          <Button
            style={mWidthStyle}
            onClick={this.eventClickHandle}
            secondary={this.state.eventMode}
          >
            {this.state.eventMode ? <PlayIcon /> : <PauseIcon />} Event Mode
          </Button>
        </div>
      </div>
    );
  }
}

module.exports = Panel;
