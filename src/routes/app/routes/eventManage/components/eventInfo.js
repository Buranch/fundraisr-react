import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class PhoneSelect extends React.Component {
  state = {
    value: 1,
  };
  handleChange = (event, index, value) => this.setState({value});
  render() {
    return (
      <SelectField
        floatingLabelText="Phone"
        value={this.state.value}
        onChange={this.handleChange}
        style={{width: '180px'}}
      >
        <MenuItem value={1} primaryText="USA" />
        <MenuItem value={2} primaryText="United Kingdom" />
      </SelectField>
    );
  }

}

const EventInformation = () => (
  <div className="box box-default">
    <div className="box-body">
      <h1 className="article-title">Event Information</h1>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-7">
          <h5>Details</h5>
          <small>Event Information</small><br />
          <TextField defaultValue="Raise FunDation" floatingLabelText="Event Name" /><br/>
          <TextField
            defaultValue="We make raising funds, fun! Come to our event and join a great cause."
            floatingLabelText="Description"
            multiLine
            fullWidth
          /><br />
          <TextField defaultValue="$1,000,000" floatingLabelText="Monetary Goal" /><br/>
          <DatePicker defaultDate={new Date(2015, 3, 27)} floatingLabelText="Start Date" />
          <DatePicker defaultDate={new Date(2015, 3, 27)} floatingLabelText="End Date" /><br/>
          <TextField defaultValue="1234567890" floatingLabelText="Event ID" disabled /><br/>
          <small>Event ID is unique to your event and can not be edited.</small>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5">
          <h5>Contact</h5>
          <small>
            These fields are for the Event Information,
            not for the Participants Personal Information.
            Information entered here will appear in eMail
            confirmations to give supporters contact information.
          </small><br />
          <TextField defaultValue="info@raisefun.com" floatingLabelText="eMail" /><br />
          <PhoneSelect /><span className="space" />
          <TextField hintText="619" style={{width: '35px', top: '-17px'}} /> <span className="space" />
          <TextField hintText="768-0987" style={{width: '65px', top: '-17px'}} />
          <br />
          <TextField defaultValue="123 Give Lane." floatingLabelText="Location" />
        </div>
      </div>
    </div>
  </div>
);

module.exports = EventInformation;
