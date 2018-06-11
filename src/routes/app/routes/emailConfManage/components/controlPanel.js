import React from 'react';
// import FlatButton from 'material-ui/FlatButton';
// import PlayIcon from 'material-ui/svg-icons/av/play-arrow';
// import PauseIcon from 'material-ui/svg-icons/av/pause';
// import SaveIcon from 'material-ui/svg-icons/content/save';
// import CancelIcon from 'material-ui/svg-icons/navigation/cancel';
// import UndoIcon from 'material-ui/svg-icons/content/undo';

import Button from '@material-ui/core/Button';
import PlayIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import UndoIcon from '@material-ui/icons/Undo';

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
        <div className="text-right" style={{ padding: '4px' }}>
          <Button
            style={mWidthStyle}
            label="Save"
            secondary
            icon={<SaveIcon />}
          />
          <Button style={mWidthStyle} label="Revert" icon={<UndoIcon />} />
          <Button
            style={mWidthStyle}
            label="Cancel"
            primary
            icon={<CancelIcon />}
          />
          <Button
            style={mWidthStyle}
            onClick={this.testClickHandle}
            label="Test Mode"
            icon={this.state.testMode ? <PlayIcon /> : <PauseIcon />}
            primary={this.state.testMode}
          />
          <Button
            style={mWidthStyle}
            onClick={this.eventClickHandle}
            label="Event Mode"
            icon={this.state.eventMode ? <PlayIcon /> : <PauseIcon />}
            primary={this.state.eventMode}
          />
        </div>
      </div>
    );
  }
}

module.exports = Panel;
