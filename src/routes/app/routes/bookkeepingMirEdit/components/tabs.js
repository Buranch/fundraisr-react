import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import ContactIcon from '@material-ui/icons/Contacts';
import DeleteIcon from '@material-ui/icons/Delete';
import Helper from '../../../components/helper';
import Runners from './runners';
import Role from './roleStepper';

const mWidthStyle = {
  color: '#00bcd4',
  minWidth: '135px',
  fontSize: '15px'
};
const styles = {
  padding: '12px 18px',
  marginBottom: 12,
  fontWeight: 400,
  minHeight: 300
};

const General = () => (
  <div className="row">
    <div className="col-xs-12 col-sm-6 col-md-6">
      <h5>Affiliation</h5>
      <TextField
        value="Michael Scott"
        // label="Name"
        disabled
      />{' '}
      <br />
      <TextField value="The Raisers" label="Team Member of" disabled />
      <br />
      <Button
        style={mWidthStyle}
        variant="contained"
        labelPosition="after"
        color="primary"
      >
        <ContactIcon /> View Contact
      </Button>
    </div>
    <div className="col-xs-12 col-sm-6 col-md-6">
      <h5>Record</h5>
      <TextField value="Michael Scott123" label="User Name" disabled />
      <br />
      <TextField
        value="The Raisers"
        label="Password"
        type="password"
        disabled
      />
      <br />
      <Button
        style={mWidthStyle}
        variant="contained"
        labelPosition="after"
        color="primary"
      >
        <DeleteIcon /> Reset Password
      </Button>
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
          <Tab label="General Information" />
          <Tab label="Delete Record" />
        </Tabs>
        {value === 0 && (
          <div style={styles}>
            <General />
            <div className="divider divider-md" />
            <Role />
          </div>
        )}
        {value === 1 && (
          <div style={styles}>
            <Helper
              text="Alert: This action will permanently delete the information related to this entry."
              isDanger
            />
            <Runners />
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
