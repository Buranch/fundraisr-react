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
    <Button
      style={mWidthStyle}
      label="New"
      href=""
      icon={<AddIcon />}
      secondary
    />
    <span className="space" />
    <Button
      style={mWidthStyle}
      label="Edit"
      href="#app/event-manage"
      icon={<EditIcon />}
      primary
    />
    <Button
      style={mWidthStyle}
      label="Duplicate"
      href=""
      icon={<CopyIcon />}
      primary
    />
    <Button style={mWidthStyle} label="Delete" href="" icon={<DeleteIcon />} />
  </div>
);

module.exports = Controls;
