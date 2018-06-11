import React, { Component } from 'react';
// import {Tabs, Tab} from 'material-ui/Tabs';
// import AutoComplete from 'material-ui/AutoComplete/index';
// import TextField from 'material-ui/TextField';
// import Toggle from 'material-ui/Toggle';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';

const styles = {
  padding: '12px 18px',
  marginBottom: 12,
  fontWeight: 400,
  minHeight: 300,
  toggle: {
    maxWidth: 250,
    marginBottom: 16
  }
};
const timezones = [
  '(GMT-11:00) Midway Island',
  '(GMT-11:00) Samoa',
  '(GMT-10:00) Hawaii',
  '(GMT-09:00) Alaska',
  '(GMT-08:00) Pacific Time (US &amp; Canada)',
  '(GMT-08:00) Tijuana',
  '(GMT-07:00) Arizona',
  '(GMT-07:00) Mountain Time (US &amp; Canada)',
  '(GMT-07:00) Chihuahua',
  '(GMT-07:00) Mazatlan',
  '(GMT-06:00) Mexico City',
  '(GMT-06:00) Monterrey',
  '(GMT-06:00) Saskatchewan',
  '(GMT-06:00) Central Time (US &amp; Canada)',
  '(GMT-05:00) Eastern Time (US &amp; Canada)',
  '(GMT-05:00) Indiana (East)',
  '(GMT-05:00) Bogota',
  '(GMT-05:00) Lima',
  '(GMT-04:30) Caracas',
  '(GMT-04:00) Atlantic Time (Canada)',
  '(GMT-04:00) La Paz',
  '(GMT-04:00) Santiago',
  '(GMT-03:30) Newfoundland',
  '(GMT-03:00) Buenos Aires',
  '(GMT-03:00) Greenland',
  '(GMT-02:00) Stanley',
  '(GMT-01:00) Azores',
  '(GMT-01:00) Cape Verde Is.',
  '(GMT) Casablanca',
  '(GMT) Dublin',
  '(GMT) Lisbon',
  '(GMT) London',
  '(GMT) Monrovia',
  '(GMT+01:00) Amsterdam',
  '(GMT+01:00) Belgrade',
  '(GMT+01:00) Berlin',
  '(GMT+01:00) Bratislava',
  '(GMT+01:00) Brussels',
  '(GMT+01:00) Budapest',
  '(GMT+01:00) Copenhagen',
  '(GMT+01:00) Ljubljana',
  '(GMT+01:00) Madrid',
  '(GMT+01:00) Paris',
  '(GMT+01:00) Prague',
  '(GMT+01:00) Rome',
  '(GMT+01:00) Sarajevo',
  '(GMT+01:00) Skopje',
  '(GMT+01:00) Stockholm',
  '(GMT+01:00) Vienna',
  '(GMT+01:00) Warsaw',
  '(GMT+01:00) Zagreb',
  '(GMT+02:00) Athens',
  '(GMT+02:00) Bucharest',
  '(GMT+02:00) Cairo',
  '(GMT+02:00) Harare',
  '(GMT+02:00) Helsinki',
  '(GMT+02:00) Istanbul',
  '(GMT+02:00) Jerusalem',
  '(GMT+02:00) Kyiv',
  '(GMT+02:00) Minsk',
  '(GMT+02:00) Riga',
  '(GMT+02:00) Sofia',
  '(GMT+02:00) Tallinn',
  '(GMT+02:00) Vilnius',
  '(GMT+03:00) Baghdad',
  '(GMT+03:00) Kuwait',
  '(GMT+03:00) Nairobi',
  '(GMT+03:00) Riyadh',
  '(GMT+03:00) Moscow',
  '(GMT+03:30) Tehran',
  '(GMT+04:00) Baku',
  '(GMT+04:00) Volgograd',
  '(GMT+04:00) Muscat',
  '(GMT+04:00) Tbilisi',
  '(GMT+04:00) Yerevan',
  '(GMT+04:30) Kabul',
  '(GMT+05:00) Karachi',
  '(GMT+05:00) Tashkent',
  '(GMT+05:30) Kolkata',
  '(GMT+05:45) Kathmandu',
  '(GMT+06:00) Ekaterinburg',
  '(GMT+06:00) Almaty',
  '(GMT+06:00) Dhaka',
  '(GMT+07:00) Novosibirsk',
  '(GMT+07:00) Bangkok',
  '(GMT+07:00) Jakarta',
  '(GMT+08:00) Krasnoyarsk',
  '(GMT+08:00) Chongqing',
  '(GMT+08:00) Hong Kong',
  '(GMT+08:00) Kuala Lumpur',
  '(GMT+08:00) Perth',
  '(GMT+08:00) Singapore',
  '(GMT+08:00) Taipei',
  '(GMT+08:00) Ulaan Bataar',
  '(GMT+08:00) Urumqi',
  '(GMT+09:00) Irkutsk',
  '(GMT+09:00) Seoul',
  '(GMT+09:00) Tokyo',
  '(GMT+09:30) Adelaide',
  '(GMT+09:30) Darwin',
  '(GMT+10:00) Yakutsk',
  '(GMT+10:00) Brisbane',
  '(GMT+10:00) Canberra',
  '(GMT+10:00) Guam',
  '(GMT+10:00) Hobart',
  '(GMT+10:00) Melbourne',
  '(GMT+10:00) Port Moresby',
  '(GMT+10:00) Sydney',
  '(GMT+11:00) Vladivostok',
  '(GMT+12:00) Magadan',
  '(GMT+12:00) Auckland',
  '(GMT+12:00) Fiji'
];
const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const Verification = () => (
  <div className="row">
    <div className="сol-xs-12 col-sm-6 col-md-4">
      <h5>Verification Defaults</h5>
      <small>Require Address or Zip/Postal code verification. </small>
      <Switch label="Postal Code" style={styles.toggle} />
      <br />
      <small>Lock credit card verification settings. </small>
      <Switch label="Lock Settings" style={styles.toggle} />
    </div>
    <div className="сol-xs-12 col-sm-6 col-md-4">
      <h5>Description</h5>
      <TextField defaultValue="e5r6tyui" floatingLabelText="Soft Descriptor" />
    </div>
    <div className="сol-xs-12 col-sm-6 col-md-4">
      <h5>Contact</h5>
      <TextField
        defaultValue="drfytguyh"
        floatingLabelText="Inquiry Phone"
      />{' '}
      <br />
      <small>Donor Inquiry Phone Number. </small>
    </div>
  </div>
);
const Virtual = () => (
  <div className="row">
    <div className="сol-xs-12 col-sm-6 col-md-4">
      <h5>All Accounts</h5>
      <small>Share Transactions Across All Virtual Accounts.</small>
      <Switch label="Sharing" style={styles.toggle} defaultToggled />
    </div>
  </div>
);
const Preferences = () => (
  <div className="row">
    <div className="сol-xs-12 col-sm-6 col-md-4">
      <h5>Time Keeping</h5>
      {/*<AutoComplete*/}
      {/*floatingLabelText="Time Zone"*/}
      {/*filter={AutoComplete.caseInsensitiveFilter}*/}
      {/*dataSource={timezones} />*/}
      {/*<AutoComplete*/}
      {/*floatingLabelText="Time Zone"*/}
      {/*filter={AutoComplete.caseInsensitiveFilter}*/}
      {/*dataSource={month}*/}
      {/*/>*/}
      <br />
      <small>Last Month of Fiscal Year</small>
      <br />
      <br />
      <small>Enable Daylight Saving Time (DST)</small>
      <Switch label="DST" style={styles.toggle} defaultToggled />
    </div>
  </div>
);
const Benchmark = () => (
  <div className="row">
    <div className="сol-xs-12 col-sm-6 col-md-4">
      <h5>Benchmark Profile</h5>
      <TextField
        hintText="2,500,000"
        floatingLabelText="Annual Revenue"
        floatingLabelFixed
      />
    </div>
  </div>
);
const Duplicates = () => (
  <div className="row">
    <div className="сol-xs-12 col-sm-6 col-md-4">
      <h5>Duplicates</h5>
      <small>
        Merge new records if First Name, Last Name, and E-Mail address match
        exactly
      </small>
      <Switch label="De-Duplicator" style={styles.toggle} defaultToggled />
    </div>
  </div>
);
const Admin = () => (
  <div className="row">
    <div className="сol-xs-12 col-sm-6 col-md-4">
      <h5>Admin</h5>
      <small>
        Administrator for “Forgot Password?” and “Form Workflow” Support
      </small>
      <br />
      <TextField
        floatingLabelFixed
        hintText="Thirston Howell"
        floatingLabelText="Administrator"
      />
      <TextField
        floatingLabelFixed
        hintText="thirst@th3.com"
        floatingLabelText="eMail"
      />
    </div>
  </div>
);
const Analytics = () => (
  <div className="row">
    <div className="сol-xs-12 col-sm-6 col-md-4">
      <h5>Analytics Tracking</h5>
      <TextField
        floatingLabelFixed
        hintText="12345-2345-4567488"
        floatingLabelText="Account"
      />
    </div>
  </div>
);
const Receipts = () => (
  <div className="row">
    <div className="сol-xs-12 col-sm-6 col-md-4">
      <h5>Enable PDF Receipts for Account?</h5>
      <small>
        You must specify all three numbers. When the number specified for Send
        Warning at is assigned, an email will be sent notifying that you are
        nearing the end of the range. Select values that will give you
        sufficient time to reset the range. To meet tax agency requirements,
        when you start a new range of numbers for PDF receipts, you must
        manually enter a range that is unique and not previously used.
      </small>
      <Switch label="PDF Receipts" style={styles.toggle} />

      <TextField
        floatingLabelFixed
        hintText="1"
        floatingLabelText="Starting Number"
      />
      <TextField
        floatingLabelFixed
        hintText="99000"
        floatingLabelText="Send Warning at"
      />
      <TextField
        floatingLabelFixed
        hintText="99999"
        floatingLabelText="Ending Number"
      />
    </div>
  </div>
);
const Export = () => (
  <div className="row">
    <div className="сol-xs-12 col-sm-6 col-md-4">
      <h5>Enable PDF Receipts for Account?</h5>
      <small>Exclude extended characters set in CSV and XLS exports.</small>
      <Switch label="Sharing" style={styles.toggle} />
    </div>
  </div>
);

class TabsExampleSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event, val) => {
    this.setState({ value: val });
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="Verification" />
          <Tab label="Virtual" />
          <Tab label="Preferences" />
          <Tab label="Benchmark" />
          <Tab label="Duplicates" />
          <Tab label="Admin" />
          <Tab label="Analytics" />
          <Tab label="Reciepts" />
          <Tab label="Export" />
        </Tabs>
        {value === 0 && (
          <div style={styles}>
            <Verification />
          </div>
        )}
        {value === 1 && (
          <div style={styles}>
            <Virtual />
          </div>
        )}
        {value === 2 && (
          <div style={styles}>
            <Preferences />
          </div>
        )}
        {value === 3 && (
          <div style={styles}>
            <Benchmark />
          </div>
        )}
        {value === 4 && (
          <div style={styles}>
            <Duplicates />
          </div>
        )}
        {value === 5 && (
          <div style={styles}>
            <Admin />
          </div>
        )}
        {value === 6 && (
          <div style={styles}>
            <Analytics />
          </div>
        )}
        {value === 7 && (
          <div style={styles}>
            <Receipts />
          </div>
        )}
        {value === 8 && (
          <div style={styles}>
            <Export />
          </div>
        )}
      </div>
    );
  }
}

const TabsSection = () => (
  <section className="box box-default">
    <div className="box-body no-padding">
      <TabsExampleSimple />
    </div>
  </section>
);

module.exports = TabsSection;
