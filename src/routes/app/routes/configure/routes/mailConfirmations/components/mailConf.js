import React from 'react';
import Helper from '../../../../../components/helper';
import HeadText from '../../../../../components/headText';
import Breadcrumb from '../../../../../components/breadcrumb';
import ControlTabs from './controlTabs';

const orgInfo = () => (
  <section className="container-fluid no-breadcrumbs">
    <Helper />
    <HeadText pageName="eMail & Confirmations" />
    <Breadcrumb
      path={
        <small>
          <a href="#app/dashboard">Dashboard</a> > eMail & Confirmations
        </small>
      }
    />
    <ControlTabs />
  </section>
);

module.exports = orgInfo;
