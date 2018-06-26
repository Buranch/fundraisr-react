import React from 'react';
import Helper from '../../../../../components/helper';
import HeadText from '../../../../../components/headText';
import Breadcrumb from '../../../../../components/breadcrumb';
import PayPal from './paypal';
import CreditCards from './creditCards';
import BlockCountries from './blockCountries';
import BlockIP from './blockIP';
import Grid from '@material-ui/core/Grid';
const Main = () => (
  <Grid container spacing={24}>
    <Grid item xs={12} sm={12} md={6}>
      <div className="box box-default">
        <div className="box-body">
          <h5>Donor Payment Options</h5>
          <small>Activate and Setup Payment Options for Donations</small>
          <br />
          <PayPal />
          <CreditCards />
        </div>
      </div>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
      <div className="box box-default">
        <div className="box-body">
          <h5>Donor Payment Options</h5>
          <small>
            Setup Fraud Protection by blocking Countries and IP Ranges{' '}
          </small>
          <br /> <br />
          <BlockCountries />
          <br />
          <BlockIP />
        </div>
      </div>
    </Grid>
  </Grid>
);

const paymentGateway = () => (
  <section className="container-fluid no-breadcrumbs">
    <Helper />
    <HeadText pageName="Payment Gateway" />
    <Breadcrumb
      path={
        <small>
          <a href="#app/dashboard">Dashboard</a> > <a>Configure</a> > Payment
          Gateway
        </small>
      }
    />
    <Main />
  </section>
);

module.exports = paymentGateway;
