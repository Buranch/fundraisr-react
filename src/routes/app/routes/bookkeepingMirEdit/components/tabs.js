import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Danger from './danger';
import Runners from './runners';
import Role from './roleStepper';

const mWidthStyle = {
  minWidth: '135px'
};
const styles = {
  padding: '12px 18px',
  marginBottom: 12,
  fontWeight: 400,
  minHeight: 300,
};

const General = () => (
  <div className="row">
    <div className="col-xl-4">
      <h5>Affiliation</h5>
      <TextField value="Michael Scott" floatingLabelText="Name" disabled /> <br />
      <TextField value="The Raisers" floatingLabelText="Team Member of" disabled /><br />
      <RaisedButton style={mWidthStyle} label="View Contact" labelPosition="after" primary />
    </div>
    <div className="col-xl-4">
      <h5>Record</h5>
      <TextField value="Michael Scott123" floatingLabelText="User Name" disabled /><br />
      <TextField value="The Raisers" floatingLabelText="Password" type="password" disabled /><br />
      <RaisedButton style={mWidthStyle} label="Reset Password" labelPosition="after" primary />
    </div>
  </div>
);



const TabsExampleSimple = () => (
  <Tabs>
    <Tab label="General Information" >
      <div style={styles}>
        <General />
        <div className="divider divider-md" />
        <Role />
      </div>
    </Tab>
    <Tab label="Delete Record">
      <div style={styles}>
        <Danger />
        <Runners />
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
