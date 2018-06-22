import React from 'react';
import Button from '@material-ui/core/Button';
import SaveButton from '@material-ui/icons/Save';
import UndoButton from '@material-ui/icons/Undo';
import CancelButton from '@material-ui/icons/Cancel';

const mWidthStyle = {
  color: '#00bcd4',
  minWidth: '135px',
  fontSize: '15px'
};
const secondary = {
  color: '#ff4081',
  minWidth: '135px',
  fontSize: '15px'
};
const boxBodyStyle = {
  padding: '4px'
};

const panel = () => (
  <div className="box box-default position-sticky sticky-top -sticky-note -sticky-note-o fa-sticky-note fa-sticky-note-o">
    <div className="text-right" style={boxBodyStyle}>
      <Button style={secondary} color="secondary">
        <SaveButton /> Save
      </Button>
      <Button style={{ color: 'black' }}>
        <UndoButton /> Revert
      </Button>
      <Button style={mWidthStyle} color="primary">
        <CancelButton /> Cancel
      </Button>
    </div>
  </div>
);

module.exports = panel;
