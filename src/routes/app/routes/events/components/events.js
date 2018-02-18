import React from 'react';
import Helper from '../../../components/helper';
import HeadText from '../../../components/headText';
import EventTable from './table';

class Events extends React.Component {
  render() {
    return (
      <section className="container-fluid no-breadcrumbs">
        <Helper />
        <HeadText pageName="Events" />
        <EventTable />
      </section>
    );
  }
}


module.exports = Events;
