import React from 'react';
import Helper from './helper';
import PayPal from './paypal';
import CreditCards from './creditCards';
import BlockCountries from './blockCountries';
import BlockIP from './blockIP';

function getMonth(date) {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  return month[date.getMonth()];
}
const date = new Date();
const dateString = `${getMonth(date)} ${date.getDate()}, ${date.getFullYear()}`;

const HeadText = () => (
  <div className="row">
    <div className="col-sm-6">
      <h1 className="article-title">Organisation information</h1>
    </div>
    <div className="col-sm-6" style={{textAlign: 'right'}}>
      <h1 className="article-title">{dateString}</h1>
    </div>
  </div>
);

const Main = () => (
  <div className="row">
    <div className="col-xl-6">
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
    <div className="col-xl-6">
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
    <HeadText />
    <Main />
  </section>
);

module.exports = paymentGateway;
