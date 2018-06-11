import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Remove';
import EditIcon from '@material-ui/icons/Edit';

const mWidthStyle = {
  minWidth: '135px'
};

class Controls extends React.Component {
  state = {
    newHref: this.props.new || '',
    editHref: this.props.edit || '',
    deleteHref: this.props.delete || ''
  };

  render() {
    return (
      <div className="box box-default text-center">
        <Button style={mWidthStyle} href={this.state.newHref} color="secondary">
          <AddIcon /> New
        </Button>
        <span className="space" />
        <Button style={mWidthStyle} href={this.state.editHref} color="primary">
          <EditIcon /> Edit
        </Button>
        <Button
          style={mWidthStyle}
          href={this.state.deleteHref}
          color="primary"
        >
          <DeleteIcon /> Delete
        </Button>
      </div>
    );
  }
}

module.exports = Controls;
