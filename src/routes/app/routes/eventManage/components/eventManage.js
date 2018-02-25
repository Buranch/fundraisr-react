import React from 'react';
import Helper from '../../../components/helper';
import HeadText from '../../../components/headText';
import Breadcrumb from '../../../components/breadcrumb';
import ControlPanel from './controlPanel';
import EventInfo from './eventInfo';
import EventSettings from './eventSettings';

const EventManage = () => (
  <section className="container-fluid no-breadcrumbs">
    <Helper />
    <HeadText pageName="Manage Event" />
    <Breadcrumb
      path={<small><a href="#app/dashboard">Dashboard</a> >> <a href="#app/events">Events</a> >> Raise FunDation</small>}
      typeId="event"
      id="1234567890"
    />
    <ControlPanel />
    <EventInfo />
    <EventSettings />
  </section>
);

module.exports = EventManage;
