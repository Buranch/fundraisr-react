import React from 'react';

class Helper extends React.Component {
  state = {
    text: this.props.text || 'This is an Important Message, ' +
                              'you can tell because it\'s right here ' +
                              'at the top and a color that contrasts ' +
                              'it\'s surroundings! Click anywhere in ' +
                              'the box to make this thing go away, until next time',
    color: this.props.isDanger ? 'box bg-color-danger' : 'box bg-color-warning'
  };

  clickHandle = () => {
    this.setState({display: 'none'});
  };
  render() {
    return (
      <div className={this.state.color} style={this.state} onClick={this.clickHandle}>
        <div className="box-body">
          {this.state.text}
        </div>
      </div>
    );
  }
}

module.exports = Helper;
