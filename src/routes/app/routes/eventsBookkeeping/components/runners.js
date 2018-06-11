import React from 'react';
// import FlatButton from 'material-ui/FlatButton';
// import RunIcon from 'material-ui/svg-icons/image/edit';

import Button from '@material-ui/core/Button';
import RunIcon from '@material-ui/icons/Image';

const mWidthStyle = {
  minWidth: '135px'
};

class Runner extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="box box-default">
            <div className="box-header bg-color-primary">
              Manage Initiative Records
            </div>
            <div className="box-body">
              Edit and update general and transactional information for your
              initiative participants, donors and sponsors.
              <div className="text-right">
                <Button
                  icon={<RunIcon />}
                  href="#app/initiative-records"
                  style={mWidthStyle}
                  label="Run"
                  primary
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="box box-default">
            <div className="box-header bg-color-primary">Gift Entry</div>
            <div className="box-body">
              Enter one donation at a time and associate with an existing
              contact record. Real time credit card transactions or offline
              cash, check, or credit card transactions (pledges or payments) are
              available.
              <div className="text-right">
                <Button
                  icon={<RunIcon />}
                  href="#app/gift-entry"
                  style={mWidthStyle}
                  label="Run"
                  primary
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="box box-default">
            <div className="box-header bg-color-primary">Registraion Entry</div>
            <div className="box-body">
              Enter Registrations one at a time.
              <div className="text-right">
                <Button
                  icon={<RunIcon />}
                  href="#app/initiative-records"
                  style={mWidthStyle}
                  label="Run"
                  primary
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Runner;
