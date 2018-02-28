import React from 'react';
import { Route } from 'react-router-dom';
import loadable from 'react-loadable';
import Header from 'components/Header';
import Sidenav from 'components/Sidenav';
import Footer from 'components/Footer';
import Customizer from 'components/Customizer';


import Dashboard from '../routes/dashboard/';

function LoadingComponent() {
  return <div></div>;
}
let AsyncDonors = loadable({
  loader: () => import('../routes/donors/'),
  loading: LoadingComponent
});
let AsyncConfigs = loadable({
  loader: () => import('../routes/configure/'),
  loading: LoadingComponent
});
let AsyncEvents = loadable({
  loader: () => import('../routes/events/'),
  loading: LoadingComponent
});
let AsyncDonationForms = loadable({
  loader: () => import('../routes/donationForms/'),
  loading: LoadingComponent
});
let AsyncDonorsManage = loadable({
  loader: () => import('../routes/donorsManage/'),
  loading: LoadingComponent
});
let AsyncEventsBookkeeping = loadable({
  loader: () => import('../routes/eventsBookkeeping/'),
  loading: LoadingComponent
});
let AsyncInitiativeRecords = loadable({
  loader: () => import('../routes/initiativesRecords/'),
  loading: LoadingComponent
});
let AsyncGiftEntry = loadable({
  loader: () => import('../routes/giftEntry/'),
  loading: LoadingComponent
});
let AsyncManageDF = loadable({
  loader: () => import('../routes/manageDonationForm/'),
  loading: LoadingComponent
});
let AsyncUsersProfile = loadable({
  loader: () => import('../routes/userProfile/'),
  loading: LoadingComponent
});
let AsyncDFO = loadable({
  loader: () => import('../routes/donationFormOptions/'),
  loading: LoadingComponent
});
let AsyncDFB = loadable({
  loader: () => import('../routes/donationFormBookkeeping/'),
  loading: LoadingComponent
});
let AsyncReporting = loadable({
  loader: () => import('../routes/reporting/'),
  loading: LoadingComponent
});
let AsyncMirBk = loadable({
  loader: () => import('../routes/bookkeepingMirEdit/'),
  loading: LoadingComponent
});
let AsyncDfDesign = loadable({
  loader: () => import('../routes/donationFormDesign/'),
  loading: LoadingComponent
});
let AsyncManageEvent = loadable({
  loader: () => import('../routes/eventManage/'),
  loading: LoadingComponent
});
let AsyncManageEmailConf = loadable({
  loader: () => import('../routes/emailConfManage/'),
  loading: LoadingComponent
});
let AsyncReportRegistrants = loadable({
  loader: () => import('../routes/reportingRegistrants/'),
  loading: LoadingComponent
});

class MainApp extends React.Component {

  render() {
    const { match, location } = this.props;

    return (
      <div className="main-app-container">
        <Sidenav />

        <section id="page-container" className="app-page-container">
          <Header />

          <div className="app-content-wrapper">
            <div className="app-content">
              <div className="full-height">
                <Route path={`${match.url}/dashboard`} component={Dashboard} />
                <Route path={`${match.url}/donors`} component={AsyncDonors} />
                <Route path={`${match.url}/configure`} component={AsyncConfigs} />
                <Route path={`${match.url}/events`} component={AsyncEvents} />
                <Route path={`${match.url}/donation-forms`} component={AsyncDonationForms} />
                <Route path={`${match.url}/donors-manage`} component={AsyncDonorsManage} />
                <Route path={`${match.url}/events-bookkeeping`} component={AsyncEventsBookkeeping} />
                <Route path={`${match.url}/initiative-records`} component={AsyncInitiativeRecords} />
                <Route path={`${match.url}/gift-entry`} component={AsyncGiftEntry} />
                <Route path={`${match.url}/manage-df`} component={AsyncManageDF} />
                <Route path={`${match.url}/user-profile`} component={AsyncUsersProfile} />
                <Route path={`${match.url}/donation-form-options`} component={AsyncDFO} />
                <Route path={`${match.url}/donation-form-bookkeeping`} component={AsyncDFB} />
                <Route path={`${match.url}/reporting`} component={AsyncReporting} />
                <Route path={`${match.url}/bookkeeping-mir-edit`} component={AsyncMirBk} />
                <Route path={`${match.url}/donation-form-design`} component={AsyncDfDesign} />
                <Route path={`${match.url}/event-manage`} component={AsyncManageEvent} />
                <Route path={`${match.url}/email-conf-manage`} component={AsyncManageEmailConf} />
                <Route path={`${match.url}/reporting-registrant`} component={AsyncReportRegistrants} />
              </div>
            </div>
            <Footer />
          </div>
        </section>
      </div>
    );
  }
}

module.exports = MainApp;
