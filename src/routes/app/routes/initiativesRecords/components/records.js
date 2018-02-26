import React from 'react';
import Helper from '../../../components/helper';
import HeadText from '../../../components/headText';
import Breadcrumb from '../../../components/breadcrumb';
import TableRec from './table';

class Events extends React.Component {
  render() {
    return (
      <section className="container-fluid no-breadcrumbs">
        <Helper />
        <HeadText pageName="Manage Initiative Records" />
        <Breadcrumb
          typeId="Raise FunDation > event"
          id="1234567890"
          path={
            <small>
              <a href="#app/dashboard">Dashboard</a> >> <a href="#app/events">Events</a> >> <a href="app/events-bookkeeping">Bookkeeping</a> >> Manage Initiative Records
            </small>
          } />
        <TableRec />
      </section>
    );
  }
}


module.exports = Events;
