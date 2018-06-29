import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

const styles = {
  toggle: {
    maxWidth: 250,
    marginBottom: 16
  }
};

class CreditCard extends React.Component {
  state = {
    display: 'none',
    value: 'both'
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
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
        <FormGroup row>
          <FormControlLabel
            control={<Switch onChange={this.ToggleHandler} />}
            style={styles.toggle}
            label="Credit Cards"
          />
          <div className="box bg-color-page" style={this.state}>
            <div className="box-body">
              <h5>Credit Card Types</h5>
              <FormControlLabel
                control={<Switch />}
                style={styles.toggle}
                label="Visa"
              />
              <FormControlLabel
                control={<Switch />}
                style={styles.toggle}
                label="MasterCard"
              />
              <FormControlLabel
                control={<Switch />}
                style={styles.toggle}
                label="American Express"
              />
              <FormControlLabel
                control={<Switch />}
                style={styles.toggle}
                label="Discover"
              />
              <div className="divider" />

              <h5>Credit Card Verification</h5>
              <FormControl component="fieldset" required>
                <RadioGroup
                  aria-label="gender"
                  name="shipSpeed"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <FormControlLabel
                    value="both"
                    control={<Radio style={styles.radioButton} />}
                    label="Address & Zip/Postal: require BOTH Address and Zip/Postal Code Verification"
                  />
                  <FormControlLabel
                    value="either"
                    control={<Radio style={styles.radioButton} />}
                    label="Address or Zip/Postal: require EITHER Address or Zip/Postal Code Verification"
                  />
                  <FormControlLabel
                    value="not"
                    control={<Radio style={styles.radioButton} />}
                    label="DO NOT Require: DO NOT Require Address or Zip/Postal Code Verification"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </FormGroup>
      </div>
    );
  }
}

module.exports = CreditCard;
