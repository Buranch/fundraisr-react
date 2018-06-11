import React from 'react';
// import FlatButton from 'material-ui/FlatButton';
// import AddIcon from 'material-ui/svg-icons/content/add';
// import DeleteIcon from 'material-ui/svg-icons/content/remove';
// import EditIcon from 'material-ui/svg-icons/image/edit';

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
        <Button
          style={mWidthStyle}
          label="New"
          href={this.state.newHref}
          secondary
          icon={<AddIcon />}
        />
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
