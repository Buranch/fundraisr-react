import React from 'react';
// import FlatButton from 'material-ui/FlatButton';
// import AddIcon from 'material-ui/svg-icons/content/add';
// import DeleteIcon from 'material-ui/svg-icons/content/remove';
// import EditIcon from 'material-ui/svg-icons/image/edit';
// import CopyIcon from 'material-ui/svg-icons/content/content-copy';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CopyIcon from '@material-ui/icons/ContentCopy';

const mWidthStyle = {
  minWidth: '135px'
};

const Controls = () => (
  <div className="box box-default text-center">
    <Button style={mWidthStyle} href="" color="secondary">
      <AddIcon /> New
    </Button>
    <span className="space" />
    <Button style={mWidthStyle} href="#app/event-manage" color="primary">
      <EditIcon /> Edit
    </Button>
    <Button style={mWidthStyle} href="" color="primary">
      <CopyIcon /> Duplicate
    </Button>
    <Button style={mWidthStyle} href="">
      <DeleteIcon /> Delete
    </Button>
  </div>
);

module.exports = Controls;
