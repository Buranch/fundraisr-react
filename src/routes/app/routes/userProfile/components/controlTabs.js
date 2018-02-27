import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Toggle from 'material-ui/Toggle';
import ActivityTable from './activityTable';

const styles = {
  padding: '12px 18px',
  marginBottom: 12,
  fontWeight: 400,
  minHeight: 300,
  toggle: {
    maxWidth: 250,
    marginBottom: 16
  },
};

const Priveleges = () => (
  <div className="row">
    <div className="col-xs-12 col-sm-6 col-md-4">
      <h5>Status</h5>
      <Toggle label="Active" style={styles.toggle} defaultToggled />
    </div>
    <div className="col-xs-12 col-sm-6 col-md-4">
      <h5>Group</h5>
      <small>Full Access</small>
      <Toggle label="Administrator" style={styles.toggle} defaultToggled />
      <small>Only Reports</small>
      <Toggle label="Reports" style={styles.toggle} />
      <small>Only Events</small>
      <Toggle label="Event Admin" style={styles.toggle} />
      <div className="divider" />
      <small>Description</small>
      <Toggle label="Custom Group" style={styles.toggle} />
    </div>
  </div>
);

const TabsExampleSimple = () => (
  <Tabs>
    <Tab label="Priveleges" >
      <div style={styles}>
        <Priveleges />
      </div>
    </Tab>
    <Tab label="Activity" >
      <div style={styles}>
        <ActivityTable />
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
