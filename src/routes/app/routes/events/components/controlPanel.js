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
    <FlatButton style={mWidthStyle} label="New" href="" target="_blank" icon={<AddIcon />} secondary />
    <span className="space" />
    <FlatButton style={mWidthStyle} label="Edit" href="#app/event-manage" target="_blank" icon={<EditIcon />} primary />
    <FlatButton style={mWidthStyle} label="Duplicate" href="" target="_blank" icon={<CopyIcon />} primary />
    <FlatButton style={mWidthStyle} label="Delete" href="" target="_blank" icon={<DeleteIcon />} />
  </div>
);

module.exports = Controls;
