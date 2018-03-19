import React from 'react';
import Helper from '../../../components/helper';
import HeadText from '../../../components/headText';
import Breadcrumb from '../../../components/breadcrumb';
import Runner from './runners';

const evBk = () => (
  <section className="container-fluid no-breadcrumbs">
    <Helper />
    <HeadText pageName="Bookkeeping" />
    <Breadcrumb
      typeId="Raise FunDation > event"
      id="1234567890"
      path={
        <small>
          <a href="#app/dashboard">Dashboard</a> >{' '}
          <a href="#app/events">Events</a> > Bookkeeping
        </small>
      }
    />
    <Runner />
  </section>
);

module.exports = evBk;
