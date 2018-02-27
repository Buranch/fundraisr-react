import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import DeleteIcon from 'material-ui/svg-icons/content/remove';
import EditIcon from 'material-ui/svg-icons/image/edit';

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
        <FlatButton style={mWidthStyle} label="New" href={this.state.newHref} secondary icon={<AddIcon />} />
        <span className="space" />
        <FlatButton style={mWidthStyle} label="Edit" href={this.state.editHref} primary icon={<EditIcon />} />
        <FlatButton style={mWidthStyle} label="Delete" href={this.state.deleteHref} primary icon={<DeleteIcon />} />
      </div>
    );
  }
}


module.exports = Controls;
