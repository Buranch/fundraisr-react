import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import DoneIcon from 'material-ui/svg-icons/action/done';
import PreviousIcon from 'material-ui/svg-icons/navigation/chevron-left';
import NextIcon from 'material-ui/svg-icons/navigation/chevron-right';
import CancelButton from 'material-ui/svg-icons/navigation/cancel';

const mWidthStyle = {
  minWidth: '135px'
};
const boxBodyStyle = {
  padding: '4px'
};

class ControlPanel extends React.Component {
  props = {
    onPreviousClick: (e) => {
    },
    onNextClick: (e) => {
    },
    onFinishClick: (e) => {
    },
    onCancelClick: (e) => {
    },
  };

  render() {
    return (
      <div
        className="box box-default position-sticky sticky-top -sticky-note -sticky-note-o fa-sticky-note fa-sticky-note-o">
        <div className="text-right" style={boxBodyStyle}>
          <FlatButton style={mWidthStyle} label="Previous" icon={<PreviousIcon/>}
                      onClick={this.props.onPreviousClick}/>
          <FlatButton style={mWidthStyle} label="Next" secondary icon={<NextIcon/>}
                      onClick={this.props.onNextClick}/>
          <FlatButton style={mWidthStyle} label="Finish" primary icon={<DoneIcon/>}
                      onClick={this.props.onFinishClick}/>
          <FlatButton style={mWidthStyle} label="Cancel" icon={<CancelButton/>}
                      onClick={this.props.onCancelClick}/>
        </div>
      </div>
    )
  }
}

module.exports = ControlPanel;
