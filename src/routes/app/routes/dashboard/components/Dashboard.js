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
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const Main = () => (
  <Grid container spacing={24}>
    <Grid item xs={12} sm={12} md={6}>
      <div className="box box-default">
        <div className="box-body">
          <DonationChart />
        </div>
      </div>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
      <StatBoxes />
    </Grid>
  </Grid>
);

const Dashboard = () => (
  <div className="container-fluid no-breadcrumbs page-dashboard">
    <StartHelper />
    <HeadText pageName="Dashboard" />
    <QueueAnim type="bottom" className="ui-animate">
      <Main />
    </QueueAnim>
    <Grid container spacing={24}>
      <Grid item xs={12} sm={6} md={4}>
        <TopDonors />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TopEvents />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <NewEvents />
      </Grid>
    </Grid>
  </div>
);

module.exports = Dashboard;
