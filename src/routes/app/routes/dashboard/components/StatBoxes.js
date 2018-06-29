import React from 'react';
import ReactEcharts from 'components/ReactECharts';
import CHARTCONFIG from 'constants/ChartConfig';
import Grid from '@material-ui/core/Grid';
const Statboxes = () => (
  <div>
    <Grid container spacing={24}>
      <Grid item xs={12} sm={6} md={6}>
        <div className="box box-default">
          <div className="box-top">
            <span>79</span>
          </div>
          <div className="box-info">
            <span>New Donors</span>
          </div>
          <div className="box-bottom">
            <i className="material-icons color-info">supervisor_account</i>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <div className="box box-default">
          <div className="box-top">
            <span>109</span>
          </div>
          <div className="box-info">
            <span>New Event Donations</span>
          </div>
          <div className="box-bottom">
            <i className="material-icons color-success">event</i>
          </div>
        </div>
      </Grid>
    </Grid>
    <Grid container spacing={24}>
      <Grid item xs={12} sm={6} md={6}>
        <div className="box box-default">
          <div className="box-top">
            <span>159</span>
          </div>
          <div className="box-info">
            <span>New General Donations</span>
          </div>
          <div className="box-bottom">
            <i className="material-icons color-warning">language</i>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <div className="box box-default">
          <div className="box-top">
            <span>235</span>
          </div>
          <div className="box-info">
            <span>Others</span>
          </div>
          <div className="box-bottom">
            <i className="material-icons color-danger">import_export</i>
          </div>
        </div>
      </Grid>
    </Grid>
  </div>
);

module.exports = Statboxes;
