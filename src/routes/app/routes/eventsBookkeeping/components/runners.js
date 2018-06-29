import React from 'react';
import Button from '@material-ui/core/Button';
import RunIcon from '@material-ui/icons/Image';
import Grid from '@material-ui/core/Grid';
const mWidthStyle = {
  color: '#00bcd4',
  minWidth: '135px',
  fontSize: '15px'
};

class Runner extends React.Component {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} md={4}>
          <div className="box box-default">
            <div className="box-header bg-color-primary">
              Manage Initiative Records
            </div>
            <div className="box-body">
              Edit and update general and transactional information for your
              initiative participants, donors and sponsors.
              <div className="text-right">
                <Button
                  href="#app/initiative-records"
                  style={mWidthStyle}
                  color="primary"
                >
                  <RunIcon /> Run
                </Button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="box box-default">
            <div className="box-header bg-color-primary">Gift Entry</div>
            <div className="box-body">
              Enter one donation at a time and associate with an existing
              contact record. Real time credit card transactions or offline
              cash, check, or credit card transactions (pledges or payments) are
              available.
              <div className="text-right">
                <Button
                  href="#app/gift-entry"
                  style={mWidthStyle}
                  color="primary"
                >
                  <RunIcon /> Run
                </Button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="box box-default">
            <div className="box-header bg-color-primary">Registraion Entry</div>
            <div className="box-body">
              Enter Registrations one at a time.
              <div className="text-right">
                <Button
                  href="#app/initiative-records"
                  style={mWidthStyle}
                  color="primary"
                >
                  <RunIcon /> Run
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}

module.exports = Runner;
