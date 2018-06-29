import React from 'react';
import Grid from '@material-ui/core/Grid';
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
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} md={6}>
          {this.state.path}
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <small>{this.state.id}</small>
        </Grid>
      </Grid>
    );
  }
}

module.exports = Breadcrumb;
