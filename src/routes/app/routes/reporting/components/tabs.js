import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Templates from './templates';

const styles = {
  padding: '12px 18px',
  marginBottom: 12,
  fontWeight: 400,
  minHeight: 300,
};

const TabsExampleSimple = () => (
  <Tabs>
    <Tab label="Report Templates" >
      <div style={styles}>
        <h5>Templates</h5>
        <p>Report Templates may be run as is or used to create a new report, which can be saved for repeated use.</p>
        <Templates />
      </div>
    </Tab>
    <Tab label="Saved Reports">
      <div style={styles}>
        ...
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

