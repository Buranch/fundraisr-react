import React from 'react';
import AutoComplete from 'material-ui/AutoComplete/index';
import TextField from 'material-ui/TextField';

const states = [
  'Alaska', 'Alabama', 'Arkansas',
  'Arizona', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'Florida',
  'Georgia', 'Hawaii', 'Iowa', 'Idaho',
  'Illinois', 'Indiana', 'Kansas', 'Kentucky',
  'Louisiana', 'Massachusetts', 'Maryland',
  'Maine', 'Michigan', 'Minnesota', 'Missouri',
  'Mississippi', 'Montana', 'North Carolina',
  'North Dakota', 'Nebraska', 'New Hampshire',
  'New Jersey', 'New Mexico', 'Nevada', 'New York',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Virginia', 'Vermont',
  'Washington', 'Wisconsin', 'West Virginia', 'Wyoming'];

class OverviewTable extends React.Component {
  render() {
    return (
      <div role="form">
        <TextField defaultValue="TH3 Industries" floatingLabelText="Name" />
        <br />
        <TextField defaultValue="0123456789" floatingLabelText="EIN" />
        <br />
        <TextField defaultValue="http://www.th3.com" floatingLabelText="URL" />
        <br />
        <TextField defaultValue="Level 5" floatingLabelText="Level" />
        <br />
      </div>
    );
  }
}
class ContactTable extends React.Component {
  render() {
    return (
      <div>
        <TextField defaultValue="Thirston Howell" floatingLabelText="Main POC" />
        <div className="divider" />

        <TextField defaultValue="619-555-2424" floatingLabelText="Phone" />
        <br />
        <TextField defaultValue="619-555-2423" floatingLabelText="Fax" />
        <div className="divider" />

        <TextField defaultValue="support@th3.com" floatingLabelText="eMail" />
        <div className="divider" />

        <TextField defaultValue="234 Ortiz Dr." floatingLabelText="Street Address" />
        <br />
        <TextField defaultValue="Organie" floatingLabelText="City" />
        <br />
        <AutoComplete
          floatingLabelText="State"
          filter={AutoComplete.caseInsensitiveFilter}
          dataSource={states}
        />
        <br />
        <TextField defaultValue="91234" floatingLabelText="Zip Code" />
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
            <div className="col-xl-2">
              <h5>Logo</h5>
              <img src="assets/images-demo/image-icons/imac.png" alt="Logo" />
              <div className="divider" />
              <img src="assets/images-demo/image-icons/imac.png" alt="Logo" />
            </div>
            <div className="col-xl-5">
              <h5>Organization Overview</h5>
              <OverviewTable />
            </div>
            <div className="col-xl-5">
              <h5>Contact</h5>
              <ContactTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = formTable;
