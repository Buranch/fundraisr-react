import React from 'react';
import Switch from '@material-ui/core/Switch';
import AmNums from './amountsNum';
import NumField from '../../../components/numField';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = {
  toggle: {
    maxWidth: 250,
    marginBottom: 16
  }
};
const mWidthStyle = {
  color: '#00bcd4',
  minWidth: '135px',
  fontSize: '15px'
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
        <FormControlLabel
          control={
            <Switch style={styles.toggle} onChange={this.ToggleHandler} />
          }
          label="Honor Giving"
        />
        <div style={this.state}>
          <FormControlLabel control={<Switch />} label="Honoree Card" />
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
        <FormControlLabel
          control={<Switch onChange={this.ToggleHandler} />}
          label="Other Amount"
          style={styles.toggle}
        />
        <div className="box-body" style={this.state}>
          <NumField min={5} label="Minimum" />
        </div>
      </div>
    );
  }
}

const PaymentTypes = () => (
  <Grid item xs={12} sm={6} md={4}>
    <h5>Payment Types</h5>
    <small>
      Default payment types are Visa, Master Card, American Express and
      Discover.
    </small>
    <br />
    <br />
    <FormControlLabel
      control={<Switch checked />}
      label="PayPal"
      style={styles.toggle}
    />
  </Grid>
);
const GivingOpt = () => (
  <Grid item xs={12} sm={6} md={4}>
    <h5>Giving Options</h5>
    <small>Enable donors to customize how they donate.</small>
    <br />
    <br />
    <FormControlLabel
      control={<Switch />}
      label="Monthly Giving"
      style={styles.toggle}
    />

    <div className="divider" />
    <HonorGiving />
    <div className="divider" />
    <FormControlLabel
      control={<Switch />}
      label="Designation"
      style={styles.toggle}
    />
  </Grid>
);
const DonAm = () => (
  <Grid item xs={12} sm={6} md={4}>
    <h5>Donation Amounts</h5>
    <AmNums />
    <div className="divider" />
    <OthAmount />
  </Grid>
);

const result = () => (
  <div className="box box-default">
    <div className="box-body">
      <Grid container spacing={24}>
        <GivingOpt />
        <PaymentTypes />
        <DonAm />
      </Grid>
    </div>
  </div>
);

module.exports = result;
