import React from 'react';
import Switch from '@material-ui/core/Switch';
import CountryDialog from './countriesDialogs';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = {
  toggle: {
    maxWidth: 250
    // // marginBottom: 16
  }
};

class BlockCountries extends React.Component {
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
        <small>
          {' '}
          Add/Remove as many countries as needed. Countries that are known
          sources of on-line fraudulent activity have been removed by default,
          see "http://www.wymoo.com/countries/fraud-zones/" for more information
          on on-line Internet scams.{' '}
        </small>

        <FormControlLabel
          control={<Switch onChange={this.ToggleHandler} />}
          style={styles.toggle}
          label="Block Countries"
        />

        <div style={this.state}>
          <CountryDialog />
        </div>
      </div>
    );
  }
}

module.exports = BlockCountries;
