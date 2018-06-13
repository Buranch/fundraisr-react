import React from 'react';
import TextField from '@material-ui/core/TextField';
import IntegrationDownshift from '../../configure/routes/organizationInformation/components/formTableAutocomplete';

const states = [
  { label: 'Alaska' },
  { label: 'Alabama' },
  { label: 'Arkansas' },
  { label: 'Arizona' },
  { label: 'California' },
  { label: 'Colorado' },
  { label: 'Connecticut' },
  { label: 'Delaware' },
  { label: 'Florida' },
  { label: 'Georgia' },
  { label: 'Hawaii' },
  { label: 'Iowa' },
  { label: 'Idaho' },
  { label: 'Illinois' },
  { label: 'Indiana' },
  { label: 'Kansas' },
  { label: 'Kentucky' },
  { label: 'Louisiana' },
  { label: 'Massachusetts' },
  { label: 'Maryland' },
  { label: 'Maine' },
  { label: 'Michigan' },
  { label: 'Minnesota' },
  { label: 'Missouri' },
  { label: 'Mississippi' },
  { label: 'Montana' },
  { label: 'North Carolina' },
  { label: 'North Dakota' },
  { label: 'Nebraska' },
  { label: 'New Hampshire' },
  { label: 'New Jersey' },
  { label: 'New Mexico' },
  { label: 'Nevada' },
  { label: 'New York' },
  { label: 'Ohio' },
  { label: 'Oklahoma' },
  { label: 'Oregon' },
  { label: 'Pennsylvania' },
  { label: 'Rhode Island' },
  { label: 'South Carolina' },
  { label: 'South Dakota' },
  { label: 'Tennessee' },
  { label: 'Texas' },
  { label: 'Utah' },
  { label: 'Virginia' },
  { label: 'Vermont' },
  { label: 'Washington' },
  { label: 'Wisconsin' },
  { label: 'West Virginia' },
  { label: 'Wyoming}' }
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
        <IntegrationDownshift title="select the country" suggestions={states} />
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
