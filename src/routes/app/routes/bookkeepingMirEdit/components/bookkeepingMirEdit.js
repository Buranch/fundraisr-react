import React from 'react';
import Helper from '../../../components/helper';
import HeadText from '../../../components/headText';
import Breadcrumb from '../../../components/breadcrumb';
import ControlTab from './tabs';


class Reports extends React.Component {
  render() {
    return (
      <section className="container-fluid no-breadcrumbs">
        <Helper />
        <HeadText pageName="Bookkeeping MIR EDIT" />
        <Breadcrumb
          typeId="Raise FunDation > event"
          id="1234567890"
          path={
            <small>
              <a href="#app/dashboard">Dashboard</a> >> <a href="#app/events">Events</a> >> <a href="#app/events-bookkeeping">Bookkeeping</a> >> <a href="#app/initiative-records">Manage Initiative Records</a> >> Edit
            </small>
          } />
        <h5>
          Participant / Donor Name: Michael Scott
        </h5>
        <ControlTab />
      </section>
    );
  }
}


module.exports = Reports;
