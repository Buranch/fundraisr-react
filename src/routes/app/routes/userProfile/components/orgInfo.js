import React from 'react';
import Helper from '../../../components/helper';
import HeadText from '../../../components/headText';
import ControlPanel from '../../../components/stickyControlPanel';
import Breadcrumb from '../../../components/breadcrumb';
import FormTable from './formTable';
import ControlTabs from './controlTabs';

const orgInfo = () => (
  <section className="container-fluid no-breadcrumbs">
    <Helper />
    <HeadText pageName="User Profile" />
    <Breadcrumb
      path={
        <small>
          <a href="#/app/dashboard">Dashboard</a> >{' '}
          <a href="#/app/configure/users">Users</a> > "User Name"
        </small>
      }
    />
    <ControlPanel />
    <FormTable />
    <ControlTabs />
  </section>
);

module.exports = orgInfo;
