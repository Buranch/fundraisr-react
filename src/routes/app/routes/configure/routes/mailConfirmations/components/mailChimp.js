import React from 'react';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';

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
        <Toggle label="Mail Chimp" style={styles.toggle} onToggle={this.ToggleHandler} />
        <div className="box bg-color-page" style={this.state}>
          <div className="box-body">
            <h5>Mail Chimp Settings</h5>
            <TextField floatingLabelText="Account Number" />
            <br />
            <TextField floatingLabelText="Password" />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = PayPal;
