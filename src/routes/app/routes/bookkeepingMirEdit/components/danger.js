import React from 'react';

class Danger extends React.Component {
  state = {
  };

  clickHandle = () => {
    this.setState({display: 'none'});
  };
  render() {
    return (
      <div className="box bg-color-danger" style={this.state} onClick={this.clickHandle}>
        <div className="box-body">
          <b>Alert:</b> This action will permanently delete the information related to this entry.         </div>
      </div>
    );
  }
}


module.exports = Danger;
