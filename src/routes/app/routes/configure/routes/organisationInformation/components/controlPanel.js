import React from 'react';
import FlatButton from 'material-ui/FlatButton';


const mWidthStyle = {
  minWidth: '135px'
};

const panel = () => (
  <div className="box box-default position-sticky sticky-top -sticky-note -sticky-note-o fa-sticky-note fa-sticky-note-o">
    <div className="text-right">
      <FlatButton style={mWidthStyle} label="Save" secondary />
      <FlatButton style={mWidthStyle} label="Revert" />
      <FlatButton style={mWidthStyle} label="Cancel" primary/>
    </div>
  </div>
);

module.exports = panel;
