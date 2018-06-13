import React from 'react';
import TextField from '@material-ui/core/TextField';
import IntegrationDownshift from './formTableAutocomplete';

const suggestions = [
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
        <TextField
          defaultValue="Thirston Howell"
          floatingLabelText="Main POC"
        />
        <div className="divider" />

        <TextField defaultValue="619-555-2424" floatingLabelText="Phone" />
        <br />
        <TextField defaultValue="619-555-2423" floatingLabelText="Fax" />
        <div className="divider" />

        <TextField defaultValue="support@th3.com" floatingLabelText="eMail" />
        <div className="divider" />

        <TextField
          defaultValue="234 Ortiz Dr."
          floatingLabelText="Street Address"
        />
        <br />
        <TextField defaultValue="Organie" floatingLabelText="City" />
        <br />
        <IntegrationDownshift title="state" suggestions={suggestions} />
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
            <div className="сol-xs-12 col-sm-12 col-md-2">
              <h5>Logo</h5>
              <img src="assets/images-demo/image-icons/imac.png" alt="Logo" />
              <div className="divider" />
              <img src="assets/images-demo/image-icons/imac.png" alt="Logo" />
            </div>
            <div className="сol-xs-12 col-sm-6 col-md-5">
              <h5>Organization Overview</h5>
              <OverviewTable />
            </div>
            <div className="сol-xs-12 col-sm-6 col-md-5">
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
