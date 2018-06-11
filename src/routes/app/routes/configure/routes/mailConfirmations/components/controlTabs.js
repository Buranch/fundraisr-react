import React, { Component } from 'react';
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
          <Tab label="Confirmations" />
          <Tab label="Settings" />
        </Tabs>
        {value === 0 && (
          <div style={styles}>
            <TableMail />
          </div>
        )}
        {value === 1 && (
          <div style={styles}>
            <h5> Mail Settings </h5>
            <MailChimp />
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
