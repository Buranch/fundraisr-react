import React from 'react';
import Helper from '../../../../../components/helper';
import HeadText from '../../../../../components/headText';
import Breadcrumb from '../../../../../components/breadcrumb';
import PayPal from './paypal';
import CreditCards from './creditCards';
import BlockCountries from './blockCountries';
import BlockIP from './blockIP';

const Main = () => (
  <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-6">
      <div className="box box-default">
        <div className="box-body">
          <h5>Donor Payment Options</h5>
          <small>Activate and Setup Payment Options for Donations</small>
          <br />
          <PayPal />
          <CreditCards />
        </div>
      </div>
    </div>
    <div className="col-xs-12 col-sm-12 col-md-6">
      <div className="box box-default">
        <div className="box-body">
          <h5>Donor Payment Options</h5>
          <small>Setup Fraud Protection by blocking Countries and IP Ranges </small>
          <br /> <br />
          <BlockCountries />
          <br />
          <BlockIP />
        </div>
      </div>
    </div>
  </div>
);

const paymentGateway = () => (
  <section className="container-fluid no-breadcrumbs">
    <Helper />
    <HeadText pageName="Payment Gateway" />
    <Breadcrumb path={
      <small>
        <a href="#app/dashboard">Dashboard</a> >> <a>Configure</a> >> Payment Gateway
      </small>
    } />
    <Main />
  </section>
);

module.exports = paymentGateway;
