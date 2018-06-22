import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DonorTitle from './donorTitle';
import DonorContact from './donorContact';
import Demographic from './demographic';
import EploymentInfo from './employmentInfo';
import PaymentInfo from './paymentInformation';
import ControlPanel from './controlPanel';
import DonorInfo from './donorInfo';

const styles = {
  padding: '12px 18px',
  marginBottom: 12,
  fontWeight: 400
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
          <Tab label="Standard Fields" />
          <Tab label="Custom Fields" />
          <Tab label="Billing Fields" />
        </Tabs>
        {value === 0 && (
          <div style={styles}>
            <DonorTitle />
            <div className="divider" />
            <DonorContact />
            <div className="divider" />
            <Demographic />
            <div className="divider" />
            <EploymentInfo />
          </div>
        )}
        {value === 1 && (
          <div style={styles}>
            <ControlPanel />
            <DonorInfo />
          </div>
        )}
        {value === 2 && (
          <div style={styles}>
            <PaymentInfo />
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
