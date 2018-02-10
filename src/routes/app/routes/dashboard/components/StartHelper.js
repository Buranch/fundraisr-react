import React from 'react';
import APPCONFIG from 'constants/Config';

class StartHelper extends React.Component {
  state = {
  };

  clickHandle = () => {
    this.setState({display: 'none'});
  };
  render() {
    return (
      <div className="box bg-color-warning" style={this.state} onClick={this.clickHandle}>
        <div className="box-body">
          Welcome <b>{APPCONFIG.user}</b>! This is your Fundraisr Dashboard, Start by exploring the 'Menu'
        </div>
      </div>
    );
  }
}


module.exports = StartHelper;
