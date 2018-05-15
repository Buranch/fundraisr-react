/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import QueueAnim from 'rc-queue-anim';
import DonationChart from './DonationChart';
import StatBoxes from './StatBoxes';
import StartHelper from './StartHelper';
import NewEvents from './NewEvents';
import TopDonors from './TopDonors';
import TopEvents from './TopEvents';
import HeadText from '../../../components/headText';

const Main = () => (
  <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-6 dashboard-half">
      <div className="box box-default">
        <div className="box-body">
          <DonationChart />
        </div>
      </div>
    </div>

    <div className="col-xs-12 col-sm-12 col-md-6 dashboard-half">
      <StatBoxes />
    </div>
  </div>
);

const Dashboard = () => (
  <div className="container-fluid no-breadcrumbs page-dashboard">
    <StartHelper />
    <HeadText pageName="Dashboard" />
    <QueueAnim type="bottom" className="ui-animate">
      <Main />
    </QueueAnim>
    <div className="row">
      <div className="col-xs-12 col-sm-6 col-md-4 dashboard-half"><TopDonors /></div>
      <div className="col-xs-12 col-sm-6 col-md-4 dashboard-half"><TopEvents /></div>
      <div className="col-xs-12 col-sm-6 col-md-4 dashboard-half"><NewEvents /></div>
    </div>
  </div>
);

module.exports = Dashboard;
