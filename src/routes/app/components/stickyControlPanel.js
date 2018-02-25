import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import SaveButton from 'material-ui/svg-icons/content/save';
import UndoButton from 'material-ui/svg-icons/content/undo';
import CancelButton from 'material-ui/svg-icons/navigation/cancel';

const mWidthStyle = {
  minWidth: '135px'
};
const boxBodyStyle = {
  padding: '4px'
};

const panel = () => (
  <div className="box box-default position-sticky sticky-top -sticky-note -sticky-note-o fa-sticky-note fa-sticky-note-o">
    <div className="text-right" style={boxBodyStyle}>
      <FlatButton style={mWidthStyle} label="Save" secondary icon={<SaveButton />}/>
      <FlatButton style={mWidthStyle} label="Revert" icon={<UndoButton />} />
      <FlatButton style={mWidthStyle} label="Cancel" primary icon={<CancelButton />} />
    </div>
  </div>
);

module.exports = panel;
