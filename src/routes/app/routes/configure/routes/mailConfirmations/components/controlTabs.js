import React from 'react';
// import {Tabs, Tab} from 'material-ui/Tabs';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TableMail from './table';
import MailChimp from './mailChimp';

const styles = {
  padding: '12px 18px',
  marginBottom: 12,
  fontWeight: 400,
  minHeight: 300
};

const TabsExampleSimple = () => (
  <Tabs>
    <Tab label="Confirmations">
      <div style={styles}>
        <TableMail />
      </div>
    </Tab>
    <Tab label="Settings">
      <div style={styles}>
        <h5> Mail Settings </h5>
        <MailChimp />
      </div>
    </Tab>
  </Tabs>
);

const TabsSection = () => (
  <section className="box box-default">
    <div className="box-body no-padding">
      <TabsExampleSimple />
    </div>
  </section>
);

module.exports = TabsSection;
