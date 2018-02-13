import React from 'react';
import FlatButton from 'material-ui/FlatButton';

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
                <FlatButton href="#" style={mWidthStyle} label="Open" target="_blank" primary />
              </div>            </div>
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
                <FlatButton href="#" style={mWidthStyle} label="Open" target="_blank" primary />
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
                <FlatButton href="#" style={mWidthStyle} label="Open" target="_blank" primary />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Runner;
