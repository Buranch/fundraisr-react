import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import DeleteIcon from 'material-ui/svg-icons/content/remove';
import EditIcon from 'material-ui/svg-icons/image/edit';
import CopyIcon from 'material-ui/svg-icons/content/content-copy';

const mWidthStyle = {
  minWidth: '135px'
};

const Controls = () => (
  <div className="box box-default text-center">
    <FlatButton style={mWidthStyle} label="New" href="" icon={<AddIcon />} secondary />
    <span className="space" />
    <FlatButton style={mWidthStyle} label="Edit" href="#/app/email-conf-manage" icon={<EditIcon />} primary />
    <FlatButton style={mWidthStyle} label="Duplicate" href="" icon={<CopyIcon />} primary />
    <FlatButton style={mWidthStyle} label="Delete" href="" icon={<DeleteIcon />} />
  </div>
);

module.exports = Controls;
