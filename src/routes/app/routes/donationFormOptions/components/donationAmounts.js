import React from 'react';
// import TextField from 'material-ui/TextField';
// import Toggle from 'material-ui/Toggle';

import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import AmNums from './amountsNum';
import NumField from '../../../components/numField';

const styles = {
  toggle: {
    maxWidth: 250,
    marginBottom: 16
  }
};
const mWidthStyle = {
  minWidth: '135px'
};

class HonorGiving extends React.Component {
  state = {
    display: 'none'
  };

  ToggleHandler = () => {
    if (this.state.display === 'block') {
      this.setState({
        display: 'none'
      });
    } else {
      this.setState({
        display: 'block'
      });
    }
  };

  render() {
    return (
      <div>
        <Switch
          label="Honor Giving"
          style={styles.toggle}
          onToggle={this.ToggleHandler}
        />
        <div style={this.state}>
          <Switch label="Honoree Card" />
        </div>
      </div>
    );
  }
}
class OthAmount extends React.Component {
  state = {
    display: 'none'
  };

  ToggleHandler = () => {
    if (this.state.display === 'block') {
      this.setState({
        display: 'none'
      });
    } else {
      this.setState({
        display: 'block'
      });
    }
  };

  render() {
    return (
      <div>
        <Toggle
          label="Other Amount"
          style={styles.toggle}
          onToggle={this.ToggleHandler}
        />
        <div className="box-body" style={this.state}>
          <NumField min={5} label="Minimum" />
        </div>
      </div>
    );
  }
}

const PaymentTypes = () => (
  <div className="col-xs-12 col-sm-6 col-md-4">
    <h5>Payment Types</h5>
    <small>
      Default payment types are Visa, Master Card, American Express and
      Discover.
    </small>
    <br />
    <br />
    <Toggle label="PayPal" style={styles.toggle} defaultToggled />
  </div>
);
const GivingOpt = () => (
  <div className="col-xs-12 col-sm-6 col-md-4">
    <h5>Giving Options</h5>
    <small>Enable donors to customize how they donate.</small>
    <br />
    <br />
    <Toggle label="Monthly Giving" style={styles.toggle} />
    <div className="divider" />
    <HonorGiving />
    <div className="divider" />
    <Toggle label="Designation" style={styles.toggle} />
  </div>
);
const DonAm = () => (
  <div className="col-xs-12 col-sm-6 col-md-4">
    <h5>Donation Amounts</h5>
    <AmNums />
    <div className="divider" />
    <OthAmount />
  </div>
);

const result = () => (
  <div className="box box-default">
    <div className="box-body">
      <div className="row">
        <GivingOpt />
        <PaymentTypes />
        <DonAm />
      </div>
    </div>
  </div>
);

module.exports = result;
