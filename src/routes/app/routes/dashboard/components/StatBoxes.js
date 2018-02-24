import React from 'react';
import ReactEcharts from 'components/ReactECharts';
import CHARTCONFIG from 'constants/ChartConfig';

const Statboxes = () => (
  <div>
    <div className="row">
      <div className="col-xs-12 col-sm-6 col-md-6">
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
    </div>
      <div className="col-xs-12 col-sm-6 col-md-6">
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
    </div>
    </div>
    <div className="row">
      <div className="col-xs-12 col-sm-6 col-md-6">
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
      </div>
      <div className="col-xs-12 col-sm-6 col-md-6">
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
      </div></div>
  </div>
);

module.exports = Statboxes;
