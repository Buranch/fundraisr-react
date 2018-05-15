import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import SettingsIcon from 'material-ui/svg-icons/action/settings';

const mWidthStyle = {
  minWidth: '135px'
};

class UserInfo extends React.Component {
  render() {
    return (
      <div role="form">
        <TextField defaultValue="Optimus" floatingLabelText="First Name" />
        <br />
        <TextField defaultValue="Bot" floatingLabelText="Middle Name" />
        <br />
        <TextField defaultValue="Prime" floatingLabelText="Last Name" />
      </div>
    );
  }
}
class UserContact extends React.Component {
  render() {
    return (
      <div role="form">
        <TextField hintText="619-555-2424" floatingLabelText="Home Phone" />
        <br />
        <TextField hintText="619-555-2424" floatingLabelText="Cell Phone" />
        <br />
        <TextField hintText="619-555-2424" floatingLabelText="Business Phone" />
        <div className="divider" />
        <TextField defaultValue="oprime@autobots.com" floatingLabelText="eMail" />
      </div>
    );
  }
}
class UserAccess extends React.Component {
  render() {
    return (
      <div>
        <TextField defaultValue="dave_be" floatingLabelText="User Name" />
        <div className="divider" />
        <div className="text-right"><FlatButton style={mWidthStyle} label="Reset Password" icon={<SettingsIcon />} primary /></div>
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
