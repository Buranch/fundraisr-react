import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Switch from '@material-ui/core/Switch';
import ActivityTable from './activityTable';

const styles = {
  padding: '12px 18px',
  marginBottom: 12,
  fontWeight: 400,
  minHeight: 300,
  toggle: {
    maxWidth: 250,
    marginBottom: 16
  }
};

const Priveleges = () => (
  <div className="row">
    <div className="col-xs-12 col-sm-6 col-md-4">
      <h5>Status</h5>
      <Switch label="Active" style={styles.toggle} />
    </div>
    <div className="col-xs-12 col-sm-6 col-md-4">
      <h5>Group</h5>
      <small>Full Access</small>
      <Switch label="Administrator" style={styles.toggle} />
      <small>Only Reports</small>
      <Switch label="Reports" style={styles.toggle} />
      <small>Only Events</small>
      <Switch label="Event Admin" style={styles.toggle} />
      <div className="divider" />
      <small>Description</small>
      <Switch label="Custom Group" style={styles.toggle} />
    </div>
  </div>
);

class TabsExampleSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  handleChange = (event, val) => {
    this.setState({ value: val });
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="Priveleges" />
          <Tab label="Activity" />
        </Tabs>
        {value === 0 && (
          <div style={styles}>
            <Priveleges />
          </div>
        )}
        {value === 1 && (
          <div style={styles}>
            <ActivityTable />
          </div>
        )}
      </div>
    );
  }
}

const TabsSection = () => (
  <section className="box box-default">
    <div className="box-body no-padding">
      <TabsExampleSimple />
    </div>
  </section>
);

module.exports = TabsSection;
