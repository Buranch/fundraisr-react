import React from 'react';
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
    <Button style={mWidthStyle} href="#/app/email-conf-manage" color="primary">
      <EditIcon /> Edit
    </Button>
    <Button style={mWidthStyle} href="" color="primary">
      <CopyIcon /> Duplicate
    </Button>
    <Button style={mWidthStyle} label="Delete" href="" icon={<DeleteIcon />} />
  </div>
);

module.exports = Controls;
