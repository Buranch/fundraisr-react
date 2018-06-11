import React from 'react';
import TextField from '@material-ui/core/TextField';

const states = [
  'Alaska',
  'Alabama',
  'Arkansas',
  'Arizona',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Iowa',
  'Idaho',
  'Illinois',
  'Indiana',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Massachusetts',
  'Maryland',
  'Maine',
  'Michigan',
  'Minnesota',
  'Missouri',
  'Mississippi',
  'Montana',
  'North Carolina',
  'North Dakota',
  'Nebraska',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'Nevada',
  'New York',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Virginia',
  'Vermont',
  'Washington',
  'Wisconsin',
  'West Virginia',
  'Wyoming'
];

class DonorTitle extends React.Component {
  render() {
    return (
      <div>
        <TextField defaultValue="Dr." floatingLabelText="Suffix" />
        <br />
        <TextField defaultValue="Optimus" floatingLabelText="First Name" />
        <br />
        <TextField defaultValue="Bot" floatingLabelText="Middle Name" />
        <br />
        <TextField defaultValue="Prime" floatingLabelText="Last Name" />
        <br />
        <TextField defaultValue="OP" floatingLabelText="Nick Name" />
        <br />
        <TextField floatingLabelText="Maiden Name" />
      </div>
    );
  }
}
class ContactTable extends React.Component {
  render() {
    return (
      <div>
        <TextField hintText="619-555-2424" floatingLabelText="Home Phone" />
        <br />
        <TextField hintText="619-555-2424" floatingLabelText="Cell Phone" />
        <br />
        <TextField hintText="619-555-2424" floatingLabelText="Business Phone" />
        <div className="divider" />
        <TextField
          defaultValue="oprime@autobots.com"
          floatingLabelText="eMail"
        />
        <div className="divider" />

        <TextField
          defaultValue="123 Main St."
          floatingLabelText="Street Address"
        />
        <br />
        <TextField defaultValue="Cityville" floatingLabelText="City" />
        <br />
        {/*<AutoComplete*/}
        {/*floatingLabelText="State"*/}
        {/*filter={AutoComplete.caseInsensitiveFilter}*/}
        {/*dataSource={states}*/}
        {/*/>*/}
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
            <div className="col-xs-12 col-sm-12 col-md-2">
              <h5>Profile Pictures</h5>
              <img src="assets/images-demo/image-icons/imac.png" alt="Logo" />
              <div className="divider-md" />
              <img src="assets/images-demo/image-icons/imac.png" alt="Logo" />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-5">
              <h5>Donor Title</h5>
              <DonorTitle />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-5">
              <h5>Donor Contact</h5>
              <ContactTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = formTable;
