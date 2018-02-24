import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const mWidthStyle = {
  minWidth: '135px'
};

const Controls = () => (
  <div className="box box-default text-center">
    <FlatButton style={mWidthStyle} label="New" href="" target="_blank" secondary />
    <span className="space" />
    <FlatButton style={mWidthStyle} label="Edit" href="#/app/donors-manage" target="_blank" primary />
    <FlatButton style={mWidthStyle} label="Delete" href="" target="_blank" primary />
  </div>
);

module.exports = Controls;
