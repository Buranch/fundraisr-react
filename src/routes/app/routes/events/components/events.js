import React from 'react';
import Helper from '../../../components/helper';
import HeadText from '../../../components/headText';
import Breadcrumb from '../../../components/breadcrumb';
import EventTable from './table';

class Events extends React.Component {
  render() {
    return (
      <section className="container-fluid no-breadcrumbs">
        <Helper />
        <HeadText pageName="Events" />
        <Breadcrumb path={
          <small>
            <a href="#app/dashboard">Dashboard</a> >> Events
          </small>
        } />
        <EventTable />
      </section>
    );
  }
}


module.exports = Events;
