import React from 'react';
// import Toggle from 'material-ui/Toggle';
// import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import Switch from '@material-ui/core/Switch';
import RadioButton from '@material-ui/core/Radio';
import RadioButtonGroup from '@material-ui/core/RadioGroup';

const styles = {
  toggle: {
    maxWidth: 250,
    marginBottom: 16
  }
};

class CreditCard extends React.Component {
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
          label="Credit Cards"
          style={styles.toggle}
          onToggle={this.ToggleHandler}
        />
        <div className="box bg-color-page" style={this.state}>
          <div className="box-body">
            <h5>Credit Card Types</h5>
            <Switch label="Visa" style={styles.toggle} />
            <Switch label="MasterCard" style={styles.toggle} />
            <Switch label="American Express" style={styles.toggle} />
            <Switch label="Discover" style={styles.toggle} />
            <div className="divider" />

            <h5>Credit Card Verification</h5>
            <RadioButtonGroup name="shipSpeed" defaultSelected="both">
              <RadioButton
                value="both"
                label="Address & Zip/Postal: require BOTH Address and Zip/Postal Code Verification"
                style={styles.radioButton}
              />
              <RadioButton
                value="either"
                label="Address or Zip/Postal: require EITHER Address or Zip/Postal Code Verification"
                style={styles.radioButton}
              />
              <RadioButton
                value="not"
                label="DO NOT Require: DO NOT Require Address or Zip/Postal Code Verification"
                style={styles.radioButton}
              />
            </RadioButtonGroup>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = CreditCard;
