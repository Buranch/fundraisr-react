import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import DeleteIcon from 'material-ui/svg-icons/content/remove';
import EditIcon from 'material-ui/svg-icons/image/edit';

const mWidthStyle = {
  minWidth: '135px'
};

const Controls = () => (
  <div className="box box-default text-center">
    <FlatButton style={mWidthStyle} label="New" href="" target="_blank" secondary icon={<AddIcon />} />
    <span className="space" />
    <FlatButton style={mWidthStyle} label="Edit" href="#/app/donors-manage" target="_blank" primary icon={<EditIcon/>}/>
    <FlatButton style={mWidthStyle} label="Delete" href="" target="_blank" primary icon={<DeleteIcon />} />
  </div>
);

module.exports = Controls;
