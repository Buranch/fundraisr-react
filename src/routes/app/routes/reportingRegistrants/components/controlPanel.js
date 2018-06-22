import React from 'react';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import PreviousIcon from '@material-ui/icons/ChevronLeft';
import NextIcon from '@material-ui/icons/ChevronRight';
import CancelButton from '@material-ui/icons/Cancel';

const mWidthStyle = {
  color: '#00bcd4',
  minWidth: '135px',
  fontSize: '15px'
};
const boxBodyStyle = {
  padding: '4px'
};

class ControlPanel extends React.Component {
  props = {
    onPreviousClick: e => {},
    onNextClick: e => {},
    onFinishClick: e => {},
    onCancelClick: e => {}
  };

  render() {
    return (
      <div className="box box-default position-sticky sticky-top -sticky-note -sticky-note-o fa-sticky-note fa-sticky-note-o">
        <div className="text-right" style={boxBodyStyle}>
          <Button
            style={mWidthStyle}
            label="Previous"
            icon={<PreviousIcon />}
            onClick={this.props.onPreviousClick}
          />
          <Button
            style={mWidthStyle}
            label="Next"
            secondary
            icon={<NextIcon />}
            onClick={this.props.onNextClick}
          />
          <Button
            style={mWidthStyle}
            label="Finish"
            primary
            icon={<DoneIcon />}
            onClick={this.props.onFinishClick}
          />
          <Button
            style={mWidthStyle}
            label="Cancel"
            icon={<CancelButton />}
            onClick={this.props.onCancelClick}
          />
        </div>
      </div>
    );
  }
}

module.exports = ControlPanel;
