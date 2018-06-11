import React from 'react';
// import TextField from 'material-ui/TextField';

import TextField from '@material-ui/core/TextField';

const FooterMessage = () => (
  <div className="box box-default">
    <div className="box-body">
      <h5>Footer Message</h5>
      <div className="box bg-color-page">
        <div className="box-body">
          <TextField hintText="HeadLine" />
          <TextField
            hintText="<html> is ok. Lorem ipsum"
            multiLine
            rows={2}
            rowsMax={10}
            fullWidth
          />
          <TextField floatingLabelText="CSS Class" />
        </div>
      </div>
    </div>
  </div>
);

module.exports = FooterMessage;
