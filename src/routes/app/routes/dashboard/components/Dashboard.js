/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import QueueAnim from 'rc-queue-anim';
import DonationChart from './DonationChart';
import StatBoxes from './StatBoxes';
import StartHelper from './StartHelper';
import NewEvents from './NewEvents';
import TopDonors from './TopDonors';

function getMonth(date) {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  return month[date.getMonth()];
}
const date = new Date();
const dateString = `${getMonth(date)} ${date.getDate()}, ${date.getFullYear()}`;

// TODO add a table of Top events, top donors, next events
const Main = () => (
  <div className="row">
    <div className="col-xl-6">
      <div className="box box-default">
        <div className="box-body">
          <DonationChart />
        </div>
      </div>
    </div>

    <div className="col-xl-6">
      <StatBoxes />
    </div>
  </div>
);

const HeadText = () => (
  <div className="row">
    <div className="col-sm-6">
      <h1 className="article-title">Dashboard</h1>
    </div>
    <div className="col-sm-6" style={{textAlign: 'right'}}>
      <h1 className="article-title">{dateString}</h1>
    </div>
  </div>
);

const Dashboard = () => (
  <div className="container-fluid no-breadcrumbs page-dashboard">
    <StartHelper />
    <HeadText />
    <QueueAnim type="bottom" className="ui-animate">
      <Main />
    </QueueAnim>
    <div className="row">
      <div className="col-xl-4">
        <NewEvents />
      </div>
      <div className="col-xl-4"><TopDonors /></div>
      <div className="col-xl-4">aa</div>
    </div>
  </div>
);

module.exports = Dashboard;
