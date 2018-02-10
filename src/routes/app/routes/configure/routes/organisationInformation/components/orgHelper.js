import React from 'react';

class OrgHelper extends React.Component {
  state = {
  };

  clickHandle = () => {
    this.setState({display: 'none'});
  };
  render() {
    return (
      <div className="box bg-color-warning" style={this.state} onClick={this.clickHandle}>
        <div className="box-body">
          This is an Important Message, you can tell because it's right here at the top and a color that contrasts it's surroundings!  Click anywhere in the box to make this thing go away, until next time.
        </div>
      </div>
    );
  }
}


module.exports = OrgHelper;
