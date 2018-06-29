import React from 'react';
import TextField from '@material-ui/core/TextField';
import SelectField from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
class PhoneSelect extends React.Component {
  state = {
    value: 1
  };
  handleChange = (event, index, value) => this.setState({ value });
  render() {
    return (
      <SelectField
        label="Phone"
        value={this.state.value}
        onChange={this.handleChange}
        style={{ width: '180px' }}
      >
        <MenuItem value={1}>USA</MenuItem>
        <MenuItem value={2}>United Kingdom</MenuItem>
      </SelectField>
    );
  }
}

const EventInformation = () => (
  <div className="box box-default">
    <div className="box-body">
      <h1 className="article-title">Event Information</h1>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} md={8}>
          <h5>Details</h5>
          <small>Event Information</small>
          <br />
          <TextField defaultValue="Raise FunDation" label="Event Name" />
          <br />
          <TextField
            defaultValue="We make raising funds, fun! Come to our event and join a great cause."
            label="Description"
            multiLine
            fullWidth
          />
          <br />
          <TextField defaultValue="$1,000,000" label="Monetary Goal" />
          <br />
          {/*<DatePicker defaultDate={new Date(2015, 3, 27)} label="Start Date" />*/}
          {/*<DatePicker defaultDate={new Date(2015, 3, 27)} label="End Date" /><br/>*/}
          <TextField defaultValue="1234567890" label="Event ID" disabled />
          <br />
          <small>Event ID is unique to your event and can not be edited.</small>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <h5>Contact</h5>
          <small>
            These fields are for the Event Information, not for the Participants
            Personal Information. Information entered here will appear in eMail
            confirmations to give supporters contact information.
          </small>
          <br />
          <TextField defaultValue="info@raisefun.com" label="eMail" />
          <br />
          <PhoneSelect />
          <span className="space" />
          <TextField
            hintText="619"
            style={{ width: '35px', top: '-17px' }}
          />{' '}
          <span className="space" />
          <TextField
            hintText="768-0987"
            style={{ width: '65px', top: '-17px' }}
          />
          <br />
          <TextField defaultValue="123 Give Lane." label="Location" />
        </Grid>
      </Grid>
    </div>
  </div>
);

module.exports = EventInformation;
