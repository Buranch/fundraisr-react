import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import IntegrationDownshift from './formTableAutocomplete';
import Grid from '@material-ui/core/Grid';
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
  { label: '(GMT-11:00) Midway Island' },
  { label: '(GMT-11:00) Samoa' },
  { label: '(GMT-10:00) Hawaii' },
  { label: '(GMT-09:00) Alaska' },
  { label: '(GMT-08:00) Pacific Time (US &amp; Canada)' },
  { label: '(GMT-08:00) Tijuana' },
  { label: '(GMT-07:00) Arizona' },
  { label: '(GMT-07:00) Mountain Time (US &amp; Canada)' },
  { label: '(GMT-07:00) Chihuahua' },
  { label: '(GMT-07:00) Mazatlan' },
  { label: '(GMT-06:00) Mexico City' },
  { label: '(GMT-06:00) Monterrey' },
  { label: '(GMT-06:00) Saskatchewan' },
  { label: '(GMT-06:00) Central Time (US &amp; Canada)' },
  { label: '(GMT-05:00) Eastern Time (US &amp; Canada)' },
  { label: '(GMT-05:00) Indiana (East)' },
  { label: '(GMT-05:00) Bogota' },
  { label: '(GMT-05:00) Lima' },
  { label: '(GMT-04:30) Caracas' },
  { label: '(GMT-04:00) Atlantic Time (Canada)' },
  { label: '(GMT-04:00) La Paz' },
  { label: '(GMT-04:00) Santiago' },
  { label: '(GMT-03:30) Newfoundland' },
  { label: '(GMT-03:00) Buenos Aires' },
  { label: '(GMT-03:00) Greenland' },
  { label: '(GMT-02:00) Stanley' },
  { label: '(GMT-01:00) Azores' },
  { label: '(GMT-01:00) Cape Verde Is.' },
  { label: '(GMT) Casablanca' },
  { label: '(GMT) Dublin' },
  { label: '(GMT) Lisbon' },
  { label: '(GMT) London' },
  { label: '(GMT) Monrovia' },
  { label: '(GMT+01:00) Amsterdam' },
  { label: '(GMT+01:00) Belgrade' },
  { label: '(GMT+01:00) Berlin' },
  { label: '(GMT+01:00) Bratislava' },
  { label: '(GMT+01:00) Brussels' },
  { label: '(GMT+01:00) Budapest' },
  { label: '(GMT+01:00) Copenhagen' },
  { label: '(GMT+01:00) Ljubljana' },
  { label: '(GMT+01:00) Madrid' },
  { label: '(GMT+01:00) Paris' },
  { label: '(GMT+01:00) Prague' },
  { label: '(GMT+01:00) Rome' },
  { label: '(GMT+01:00) Sarajevo' },
  { label: '(GMT+01:00) Skopje' },
  { label: '(GMT+01:00) Stockholm' },
  { label: '(GMT+01:00) Vienna' },
  { label: '(GMT+01:00) Warsaw' },
  { label: '(GMT+01:00) Zagreb' },
  { label: '(GMT+02:00) Athens' },
  { label: '(GMT+02:00) Bucharest' },
  { label: '(GMT+02:00) Cairo' },
  { label: '(GMT+02:00) Harare' },
  { label: '(GMT+02:00) Helsinki' },
  { label: '(GMT+02:00) Istanbul' },
  { label: '(GMT+02:00) Jerusalem' },
  { label: '(GMT+02:00) Kyiv' },
  { label: '(GMT+02:00) Minsk' },
  { label: '(GMT+02:00) Riga' },
  { label: '(GMT+02:00) Sofia' },
  { label: '(GMT+02:00) Tallinn' },
  { label: '(GMT+02:00) Vilnius' },
  { label: '(GMT+03:00) Baghdad' },
  { label: '(GMT+03:00) Kuwait' },
  { label: '(GMT+03:00) Nairobi' },
  { label: '(GMT+03:00) Riyadh' },
  { label: '(GMT+03:00) Moscow' },
  { label: '(GMT+03:30) Tehran' },
  { label: '(GMT+04:00) Baku' },
  { label: '(GMT+04:00) Volgograd' },
  { label: '(GMT+04:00) Muscat' },
  { label: '(GMT+04:00) Tbilisi' },
  { label: '(GMT+04:00) Yerevan' },
  { label: '(GMT+04:30) Kabul' },
  { label: '(GMT+05:00) Karachi' },
  { label: '(GMT+05:00) Tashkent' },
  { label: '(GMT+05:30) Kolkata' },
  { label: '(GMT+05:45) Kathmandu' },
  { label: '(GMT+06:00) Ekaterinburg' },
  { label: '(GMT+06:00) Almaty' },
  { label: '(GMT+06:00) Dhaka' },
  { label: '(GMT+07:00) Novosibirsk' },
  { label: '(GMT+07:00) Bangkok' },
  { label: '(GMT+07:00) Jakarta' },
  { label: '(GMT+08:00) Krasnoyarsk' },
  { label: '(GMT+08:00) Chongqing' },
  { label: '(GMT+08:00) Hong Kong' },
  { label: '(GMT+08:00) Kuala Lumpur' },
  { label: '(GMT+08:00) Perth' },
  { label: '(GMT+08:00) Singapore' },
  { label: '(GMT+08:00) Taipei' },
  { label: '(GMT+08:00) Ulaan Bataar' },
  { label: '(GMT+08:00) Urumqi' },
  { label: '(GMT+09:00) Irkutsk' },
  { label: '(GMT+09:00) Seoul' },
  { label: '(GMT+09:00) Tokyo' },
  { label: '(GMT+09:30) Adelaide' },
  { label: '(GMT+09:30) Darwin' },
  { label: '(GMT+10:00) Yakutsk' },
  { label: '(GMT+10:00) Brisbane' },
  { label: '(GMT+10:00) Canberra' },
  { label: '(GMT+10:00) Guam' },
  { label: '(GMT+10:00) Hobart' },
  { label: '(GMT+10:00) Melbourne' },
  { label: '(GMT+10:00) Port Moresby' },
  { label: '(GMT+10:00) Sydney' },
  { label: '(GMT+11:00) Vladivostok' },
  { label: '(GMT+12:00) Magadan' },
  { label: '(GMT+12:00) Auckland' },
  { label: '(GMT+12:00) Fiji}' }
];
const month = [
  { label: 'January' },
  { label: 'February' },
  { label: 'March' },
  { label: 'April' },
  { label: 'May' },
  { label: 'June' },
  { label: 'July' },
  { label: 'August' },
  { label: 'September' },
  { label: 'October' },
  { label: 'November' },
  { label: 'December}' }
];

const Verification = () => (
  <Grid container spacing={24}>
    <Grid item xs={12} sm={6} md={4}>
      <h5>Verification Defaults</h5>
      <small>Require Address or Zip/Postal code verification. </small>
      <Switch label="Postal Code" style={styles.toggle} />
      <br />
      <small>Lock credit card verification settings. </small>
      <Switch label="Lock Settings" style={styles.toggle} />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <h5>Description</h5>
      <TextField defaultValue="e5r6tyui" label="Soft Descriptor" />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <h5>Contact</h5>
      <TextField defaultValue="drfytguyh" label="Inquiry Phone" /> <br />
      <small>Donor Inquiry Phone Number. </small>
    </Grid>
  </Grid>
);
const Virtual = () => (
  <Grid container spacing={24}>
    <Grid item xs={12} sm={6} md={4}>
      <h5>All Accounts</h5>
      <small>Share Transactions Across All Virtual Accounts.</small>
      <Switch label="Sharing" style={styles.toggle} defaultToggled />
    </Grid>
  </Grid>
);
const Preferences = () => (
  <Grid container spacing={24}>
    <Grid item xs={12} sm={6} md={4}>
      <h5>Time Keeping</h5>
      <IntegrationDownshift title="select timeZone" suggestions={timezones} />
      <IntegrationDownshift title="select month" suggestions={month} />
      <br />
      <small>Last Month of Fiscal Year</small>
      <br />
      <br />
      <small>Enable Daylight Saving Time (DST)</small>
      <Switch label="DST" style={styles.toggle} defaultToggled />
    </Grid>
  </Grid>
);
const Benchmark = () => (
  <Grid container spacing={24}>
    <Grid item xs={12} sm={6} md={4}>
      <h5>Benchmark Profile</h5>
      <TextField
        hintText="2,500,000"
        label="Annual Revenue"
        floatingLabelFixed
      />
    </Grid>
  </Grid>
);
const Duplicates = () => (
  <Grid container spacing={24}>
    <Grid item xs={12} sm={6} md={4}>
      <h5>Duplicates</h5>
      <small>
        Merge new records if First Name, Last Name, and E-Mail address match
        exactly
      </small>
      <Switch label="De-Duplicator" style={styles.toggle} defaultToggled />
    </Grid>
  </Grid>
);
const Admin = () => (
  <Grid container spacing={24}>
    <Grid item xs={12} sm={6} md={4}>
      <h5>Admin</h5>
      <small>
        Administrator for “Forgot Password?” and “Form Workflow” Support
      </small>
      <br />
      <TextField
        floatingLabelFixed
        hintText="Thirston Howell"
        label="Administrator"
      />
      <TextField floatingLabelFixed hintText="thirst@th3.com" label="eMail" />
    </Grid>
  </Grid>
);
const Analytics = () => (
  <Grid container spacing={24}>
    <Grid item xs={12} sm={6} md={4}>
      <h5>Analytics Tracking</h5>
      <TextField
        floatingLabelFixed
        hintText="12345-2345-4567488"
        label="Account"
      />
    </Grid>
  </Grid>
);
const Receipts = () => (
  <Grid container spacing={24}>
    <Grid item xs={12} sm={6} md={4}>
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

      <TextField floatingLabelFixed hintText="1" label="Starting Number" />
      <TextField floatingLabelFixed hintText="99000" label="Send Warning at" />
      <TextField floatingLabelFixed hintText="99999" label="Ending Number" />
    </Grid>
  </Grid>
);
const Export = () => (
  <Grid container spacing={24}>
    <Grid item xs={12} sm={6} md={4}>
      <h5>Enable PDF Receipts for Account?</h5>
      <small>Exclude extended characters set in CSV and XLS exports.</small>
      <Switch label="Sharing" style={styles.toggle} />
    </Grid>
  </Grid>
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
