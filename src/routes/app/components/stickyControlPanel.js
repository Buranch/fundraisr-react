import React from 'react';
// import FlatButton from 'material-ui/FlatButton';
// import SaveButton from 'material-ui/svg-icons/content/save';
// import UndoButton from 'material-ui/svg-icons/content/undo';
// import CancelButton from 'material-ui/svg-icons/navigation/cancel';

import Button from '@material-ui/core/Button';
import SaveButton from '@material-ui/icons/Save';
import UndoButton from '@material-ui/icons/Undo';
import CancelButton from '@material-ui/icons/Cancel';

const mWidthStyle = {
  minWidth: '135px'
};
const boxBodyStyle = {
  padding: '4px'
};

const panel = () => (
  <div className="box box-default position-sticky sticky-top -sticky-note -sticky-note-o fa-sticky-note fa-sticky-note-o">
    <div className="text-right" style={boxBodyStyle}>
      <Button style={mWidthStyle} color="secondary">
        <SaveButton /> Save
      </Button>
      <Button style={mWidthStyle}>
        <UndoButton /> Revert
      </Button>
      <Button style={mWidthStyle} color="primary">
        <CancelButton /> Cancel
      </Button>
    </div>
  </div>
);

module.exports = panel;
