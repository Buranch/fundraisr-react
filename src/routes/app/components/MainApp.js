import React from 'react';
import { Route } from 'react-router-dom';
import loadable from 'react-loadable';
import Header from 'components/Header';
import Sidenav from 'components/Sidenav';
import Footer from 'components/Footer';
import Customizer from 'components/Customizer';


import Dashboard from '../routes/dashboard/';
// import Chart from '../components/chart/'
// import ECommerce from '../components/ecommerce/'
// import Form from '../components/form/'
// import Page from '../components/page/'
// import PageLayout from '../components/page-layout/'
// import Table from '../components/table/'
// import UI from '../components/ui/'

function LoadingComponent() {
  return <div></div>;
}

let AsyncChart = loadable({
  loader: () => import('../routes/chart/'),
  loading: LoadingComponent
});
let AsyncECommerce = loadable({
  loader: () => import('../routes/ecommerce/'),
  loading: LoadingComponent
});
let AsyncForm = loadable({
  loader: () => import('../routes/form/'),
  loading: LoadingComponent
});
let AsyncPage = loadable({
  loader: () => import('../routes/page/'),
  loading: LoadingComponent
});
let AsyncPageLayout = loadable({
  loader: () => import('../routes/page-layout/'),
  loading: LoadingComponent
});
let AsyncTable = loadable({
  loader: () => import('../routes/table/'),
  loading: LoadingComponent
});
let AsyncUI = loadable({
  loader: () => import('../routes/ui/'),
  loading: LoadingComponent
});


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
let AsyncFieldManager = loadable({
  loader: () => import('../routes/fieldManager/'),
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
                <Route path={`${match.url}/field-manager`} component={AsyncFieldManager} />
                <Route path={`${match.url}/donation-form-options`} component={AsyncDFO} />
                <Route path={`${match.url}/donation-form-bookkeeping`} component={AsyncDFB} />
                <Route path={`${match.url}/reporting`} component={AsyncReporting} />
                <Route path={`${match.url}/bookkeeping-mir-edit`} component={AsyncMirBk} />
                <Route path={`${match.url}/donation-form-design`} component={AsyncDfDesign} />
`

                <Route path={`${match.url}/chart`} component={AsyncChart} />
                <Route path={`${match.url}/ecommerce`} component={AsyncECommerce} />
                <Route path={`${match.url}/form`} component={AsyncForm} />
                <Route path={`${match.url}/page`} component={AsyncPage} />
                <Route path={`${match.url}/pglayout`} component={AsyncPageLayout} />
                <Route path={`${match.url}/table`} component={AsyncTable} />
                <Route path={`${match.url}/ui`} component={AsyncUI} />
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
