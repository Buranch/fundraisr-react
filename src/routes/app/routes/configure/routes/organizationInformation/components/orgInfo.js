import React from 'react';
import Helper from '../../../../../components/helper';
import HeadText from '../../../../../components/headText';
import Breadcrumb from '../../../../../components/breadcrumb';
import ControlPanel from '../../../../../components/stickyControlPanel';
import FormTable from './formTable';
import ControlTabs from './controlTabs';

const orgInfo = () => (
  <section className="container-fluid no-breadcrumbs">
    <Helper />
    <HeadText pageName="Organization information" />
    <Breadcrumb
      typeId="Donor"
      id="9812873456"
      path={
        <small>
          <a href="#app/dashboard">Dashboard</a> >> Configure  "Organization Information"
        </small>
      } />
    <ControlPanel />
    <FormTable />
    <ControlTabs />
  </section>
);

module.exports = orgInfo;
