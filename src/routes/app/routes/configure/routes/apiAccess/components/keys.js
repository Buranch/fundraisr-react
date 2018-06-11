import React from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const mWidthStyle = {
  minWidth: '135px'
};

const Keys = () => (
  <div>
    <TextField
      defaultValue="74AF67099E5911A2E5BDBBADB8943964126A6E60AA6B101ACF18DFFA5D60FE429C01B62237D23489BC48FFFCD7C27F6D818654A08731CAE3ADD9D8FBE99C8BD26DAA7092A3F8DFA6C86A1E890D63626CFC92F2893070A3F7CED4311D53A40413"
      floatingLabelText="API Key"
      multiLine
      fullWidth
      floatingLabelFixed
      rows={2}
      rowsMax={4}
    />
    <br />
    <small>
      This API key are required for your site to interact securely with
      Fundraisr's API.
    </small>
    <br />

    <TextField
      defaultValue={'192.168.1.1\n192.168.1.255'}
      placeholder="IP White List"
      multiLine
      fullWidth
      rows={2}
      rowsMax={4}
    />
    <br />
    <small>
      Add your companies IP network to always allows traffic from your internal
      network.
    </small>
    <br />
    <br />
    <Button variant="contained" style={mWidthStyle} color="primary">
      View API Documentation
    </Button>
  </div>
);

const KeysContainer = () => (
  <div className="box box-default">
    <div className="box-body">
      <h5>API Key</h5>
      <small>This is the Key to your API Access</small>
      <br />
      <Keys />
    </div>
  </div>
);

module.exports = KeysContainer;
