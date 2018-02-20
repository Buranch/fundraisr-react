import React from 'react';
import Helper from '../../../components/helper';
import HeadText from '../../../components/headText';
import Breadcrumb from '../../../components/breadcrumb';
import ControlPanel from './controlPanel';
import EventInfo from './eventInfo';

const EventManage = () => (
  <section className="container-fluid no-breadcrumbs">
    <Helper />
    <HeadText pageName="Event Manage" />
    <Breadcrumb
      path={<small><a href="">Dashboard</a> >> <a href="">Events</a> >> Raise FunDation</small>}
      typeId="event"
      id="1234567890"
    />
    <ControlPanel />
    <EventInfo />
  </section>
);

module.exports = EventManage;
