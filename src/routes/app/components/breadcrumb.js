import React from 'react';

/**
 * @param {string} path
 * @param {string} [typeId]
 * @param {string} [id]
 */
class Breadcrumb extends React.Component {
  state = {
    path: this.props.path,
    id: this.props.id ? `${this.props.typeId} ID #${this.props.id}` : ''
  };

  render() {
    return (
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6">
          {this.state.path}
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 text-right">
          <small>{this.state.id}</small>
        </div>
      </div>
    );
  }
}

module.exports = Breadcrumb;
