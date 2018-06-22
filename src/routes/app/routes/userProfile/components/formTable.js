import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';

const mWidthStyle = {
  color: '#00bcd4',
  minWidth: '135px',
  fontSize: '15px'
};

class UserInfo extends React.Component {
  render() {
    return (
      <div role="form">
        <TextField defaultValue="Optimus" label="First Name" />
        <br />
        <TextField defaultValue="Bot" label="Middle Name" />
        <br />
        <TextField defaultValue="Prime" label="Last Name" />
      </div>
    );
  }
}
class UserContact extends React.Component {
  render() {
    return (
      <div role="form">
        <TextField hintText="619-555-2424" label="Home Phone" />
        <br />
        <TextField hintText="619-555-2424" label="Cell Phone" />
        <br />
        <TextField hintText="619-555-2424" label="Business Phone" />
        <div className="divider" />
        <TextField defaultValue="oprime@autobots.com" label="eMail" />
      </div>
    );
  }
}
class UserAccess extends React.Component {
  render() {
    return (
      <div>
        <TextField defaultValue="dave_be" label="User Name" />
        <div className="divider" />
        <div className="text-right">
          <Button style={mWidthStyle} color="primary">
            <SettingsIcon /> Reset Password
          </Button>
        </div>
      </div>
    );
  }
}

class formTable extends React.Component {
  render() {
    return (
      <div className="box box-default">
        <div className="box-body">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <h5>User Info</h5>
              <UserInfo />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <h5>User Contact</h5>
              <UserContact />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <h5>User Access</h5>
              <UserAccess />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = formTable;
