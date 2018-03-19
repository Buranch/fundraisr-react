import React from 'react';
import Helper from '../../../../../components/helper';
import HeadText from '../../../../../components/headText';
import Breadcrumb from '../../../../../components/breadcrumb';
import Keys from './keys';

const apiAccess = () => (
  <section className="container-fluid no-breadcrumbs">
    <Helper />
    <HeadText pageName="Api Access" />
    <Breadcrumb
      path={
        <small>
          <a href="#app/dashboard">Dashboard</a> > <a>Configure</a> > Api Access
        </small>
      }
    />
    <Keys />
  </section>
);

module.exports = apiAccess;
