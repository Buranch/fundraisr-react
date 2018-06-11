import React from 'react';
// import Toggle from 'material-ui/Toggle';
// import TextField from 'material-ui/TextField';

import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';

const styles = {
  toggle: {
    maxWidth: 250,
    marginBottom: 16
  }
};

class PayPal extends React.Component {
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
          label="PayPal"
          style={styles.toggle}
          onToggle={this.ToggleHandler}
        />
        <div className="box bg-color-page" style={this.state}>
          <div className="box-body">
            <h5>PayPal Account Information</h5>
            <TextField hintText="Account ID" floatingLabelText="Account ID" />
            <span className="space" />
            <TextField
              hintText="Application ID"
              floatingLabelText="Application ID"
            />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = PayPal;
