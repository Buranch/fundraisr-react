import React from 'react';
import Helper from '../../../components/helper';
import HeadText from '../../../components/headText';
import Breadcrumb from '../../../components/breadcrumb';
import Runner from './runners';

const evBk = () => (
  <section className="container-fluid no-breadcrumbs">
    <Helper pageName="Manage Donation Form" />
    <HeadText />
    <Breadcrumb
      typeId="form Name  >  form"
      id="1234567890"
      path={
        <small>
          <a href="#app/dashboard">Dashboard</a> >{' '}
          <a href="#/app/donation-forms">Donation Forms</a> > Manage Donation
          Form
        </small>
      }
    />
    <Runner />
  </section>
);

module.exports = evBk;
