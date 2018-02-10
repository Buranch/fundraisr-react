import React from 'react';

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
          Welcome
        </div>
      </div>
    );
  }
}


module.exports = StartHelper;
