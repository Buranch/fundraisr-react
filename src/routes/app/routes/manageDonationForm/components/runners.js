import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import BrushIcon from 'material-ui/svg-icons/image/brush';
import BookIcon from 'material-ui/svg-icons/action/book';
import OptionIcon from 'material-ui/svg-icons/action/build'

const mWidthStyle = {
  minWidth: '135px'
};

class Runner extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xl-4">
          <div className="box box-default">
            <div className="box-header bg-color-primary">
              Form Design
            </div>
            <div className="box-body">
              <b>Start</b> Here, Choose your form layout then choose from the provided styles. Next choose from the "Form Options" provided by your layout.
              <div className="text-right">
                <FlatButton href="#/app/donation-form-design" style={mWidthStyle} label="Open" icon={<BrushIcon />} primary />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="box box-default">
            <div className="box-header bg-color-primary">
              Form Options
            </div>
            <div className="box-body">
              Choose from the available options provided by your layout choice in the "From Design" Section
              <div className="text-right">
                <FlatButton href="#/app/donation-form-options" style={mWidthStyle} label="Open" icon={<OptionIcon />} primary />
              </div>            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="box box-default">
            <div className="box-header bg-color-primary">
              Form Bookkeeping
            </div>
            <div className="box-body">
              Track your donation form's progress
              <div className="text-right">
                <FlatButton href="#/app/donation-form-bookkeeping" style={mWidthStyle} label="Open" icon={<BookIcon />} primary />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Runner;
