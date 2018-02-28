import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
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
  fontWeight: 400,
};
const TabsExampleSimple = () => (
  <Tabs>
    <Tab label="Standard Fields" >
      <div style={styles}>
        <DonorTitle />
        <div className="divider" />
        <DonorContact />
        <div className="divider" />
        <Demographic />
        <div className="divider" />
        <EploymentInfo />
      </div>
    </Tab>
    <Tab label="Custom Fields" >
      <div style={styles}>
        <ControlPanel />
        <DonorInfo />
      </div>
    </Tab>
    <Tab label="Billing Fields">
      <div style={styles}>
        <PaymentInfo />
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
