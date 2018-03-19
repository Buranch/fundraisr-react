import React from 'react';
import Helper from '../../../../../components/helper';
import HeadText from '../../../../../components/headText';
import Breadcrumb from '../../../../../components/breadcrumb';
import Tabs from './tabs';

const fMan = () => (
  <section className="container-fluid no-breadcrumbs">
    <Helper />
    <HeadText pageName="Field Manager" />
    <Breadcrumb
      typeId="event"
      id="1234567890"
      path={
        <small>
          <a href="#app/dashboard">Dashboard</a> > Field Manager
        </small>
      }
    />
    <Tabs />
  </section>
);

module.exports = fMan;
