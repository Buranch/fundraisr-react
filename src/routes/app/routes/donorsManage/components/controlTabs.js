import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import AutoComplete from 'material-ui/AutoComplete/index';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import HistoryTable from './historyTable';

const styles = {
  padding: '12px 18px',
  marginBottom: 12,
  fontWeight: 400,
  minHeight: 300,
  toggle: {
    maxWidth: 250,
    marginBottom: 16
  },
  radioButton: {
    marginBottom: 16,
  },
};
const years = [
  '1900', '1901', '1902', '1903', '1904', '1905', '1906', '1907',
  '1908', '1909', '1910', '1911', '1912', '1913', '1914', '1915',
  '1916', '1917', '1918', '1919', '1920', '1921', '1922', '1923',
  '1924', '1925', '1926', '1927', '1928', '1929', '1930', '1931',
  '1932', '1933', '1934', '1935', '1936', '1937', '1938', '1939',
  '1940', '1941', '1942', '1943', '1944', '1945', '1946', '1947',
  '1948', '1949', '1950', '1951', '1952', '1953', '1954', '1955',
  '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963',
  '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971',
  '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979',
  '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987',
  '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995',
  '1996', '1997', '1998', '1999'
];
const mWidthStyle = {
  minWidth: '135px'
};

class Personal extends React.Component {
  state = {
    sexValue: 'alt',
    ethnicity: '',
    maritalStatus: '',
    living: 'living'
  };
  handleSexChange = (event, index, value) => this.setState({sexValue: value});
  handleEtnChange = (event, index, value) => this.setState({ethnicity: value});
  handleMarChange = (event, index, value) => this.setState({maritalStatus: value});
  handleLivChange = (event, index, value) => this.setState({living: value});

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h5>Demographics</h5>
          <TextField value="68" floatingLabelText="Age" disabled /><br />
          <small>Donors "Age" is set by Donors "Birth Day". </small>
          <DatePicker floatingLabelText="Birth Day" />
          <SelectField
            floatingLabelText="Gender"
            value={this.state.sexValue}
            onChange={this.handleSexChange}
          >
            <MenuItem value={'male'} primaryText="Male" />
            <MenuItem value={'female'} primaryText="Female" />
            <MenuItem value={'alt'} primaryText="Alt" />
          </SelectField>
          <SelectField
            floatingLabelText="Ethnicity"
            value={this.state.ethnicity}
            onChange={this.handleEtnChange}
          >
            <MenuItem value={'euAmerican'} primaryText="European American" />
            <MenuItem value={'afAmerican'} primaryText="African American" />
            <MenuItem value={'alaskan'} primaryText="Alaskan Native" />
            <MenuItem value={'amIndian'} primaryText="American Indian" />
            <MenuItem value={'asian'} primaryText="Asian" />
            <MenuItem value={'hispanic'} primaryText="Hispanic" />
            <MenuItem value={'pacificIslander'} primaryText="Pacific Islander" />
            <MenuItem value={'other'} primaryText="Other" />
          </SelectField>
          <TextField defaultValue="Circuits" floatingLabelText="Religion" />
          <SelectField
            floatingLabelText="Marital Status"
            value={this.state.maritalStatus}
            onChange={this.handleMarChange}
          >
            <MenuItem value={'single'} primaryText="Single" />
            <MenuItem value={'married'} primaryText="Married" />
            <MenuItem value={'separated'} primaryText="Separated" />
            <MenuItem value={'divorced'} primaryText="Divorced" />
            <MenuItem value={'widow'} primaryText="Widow" />
          </SelectField>
          <SelectField
            floatingLabelText="Living"
            value={this.state.living}
            onChange={this.handleLivChange}
          >
            <MenuItem value={'living'} primaryText="Living" />
            <MenuItem value={'deceased'} primaryText="Deceased" />
          </SelectField>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4">
          <h5>Tax Information</h5>
          <TextField defaultValue="2034299-345" floatingLabelText="Tax ID#" />
          <Toggle label="Head of Household?" style={styles.toggle} defaultToggled />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4">
          <h5>Employment Information</h5>
          <TextField defaultValue="Transformers - Robots in Disguise" floatingLabelText="Company Name" /> <br />
          <TextField defaultValue="Team Leader" floatingLabelText="Job Title" /> <br />
          <TextField defaultValue="www.transformers.com" floatingLabelText="Company URL" /> <br />
        </div>
      </div>
    );
  }
}
const Identifiers = () => (
  <div className="row">
    <div className="col-xs-12 col-sm-6 col-md-4">
      <h5>Identifiers</h5>
      <TextField value="9812873456" floatingLabelText="Donor ID" disabled /><br />
      <small>Donor ID can not be changed. </small>

      <TextField value="43631" floatingLabelText="Alternate ID" /><br />

      <TextField value="Active; Gold; Veteran" floatingLabelText="Tags" /><br />
      <small>Seperate tags with ; </small>

    </div>
  </div>
);
class Education extends React.Component {
  state = {
    eduValue: 'highSchool',
  };
  handleEduChange = (event, index, value) => this.setState({eduValue: value});

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h5>Education</h5>
          <TextField value="Cybertron University" floatingLabelText="School" /><br />
          <TextField value="Engineering" floatingLabelText="Department" /><br />
          <TextField value="Mechanical Engineering" floatingLabelText="Major" /><br />
          <SelectField
            floatingLabelText="Highest Education"
            value={this.state.eduValue}
            onChange={this.handleEduChange}
          >
            <MenuItem value={'highSchool'} primaryText="High School" />
            <MenuItem value={'associate'} primaryText="Associate" />
            <MenuItem value={'bachelors'} primaryText="Bachelors" />
            <MenuItem value={'masters'} primaryText="Masters" />
            <MenuItem value={'doctorate'} primaryText="Doctorate" />
            <MenuItem value={'postDoctorate'} primaryText="Post Doctorate" />
          </SelectField>
          <AutoComplete
            floatingLabelText="Graduation Year"
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={years}
          />
        </div>
      </div>
    );
  }
}
const Relationships = () => (
  <div className="row">
    <div className="col-xs-12 col-sm-6 col-md-4">
      <h5>Relationships</h5>
    </div>
  </div>
);
const History = () => (
  <div>
    <h5>History</h5>
    <HistoryTable />
  </div>
);
class ContactMethods extends React.Component {
  state = {
    emailFormat: 'html'
  };
  handleMailChange = (event, index, value) => this.setState({emailFormat: value});

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h5>Phone</h5>
          <Toggle label="Home Phone" style={styles.toggle} defaultToggled />
          <Toggle label="Cell Phone" style={styles.toggle} defaultToggled />
          <Toggle label="Business Phone" style={styles.toggle} defaultToggled />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h5>Physical</h5>
          <Toggle label="Direct Mail" style={styles.toggle} defaultToggled />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h5>eMail</h5>
          <Toggle label="eMail" style={styles.toggle} defaultToggled />
          <SelectField
            floatingLabelText="eMail Format"
            value={this.state.emailFormat}
            onChange={this.handleMailChange}
          >
            <MenuItem value={'html'} primaryText="HTML" />
            <MenuItem value={'text'} primaryText="Text" />
          </SelectField>
          <FlatButton style={mWidthStyle} label="Reset Password" target="_blank" primary />
        </div>
      </div>
    );
  }
}
class Misc extends React.Component {
  state = {
    hear: ''
  };
  handleHearChange = (event, index, value) => this.setState({hear: value});

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h5>Custom Fields</h5>
          <SelectField
            floatingLabelText="How did you hear about us?"
            value={this.state.hear}
            onChange={this.handleHearChange}
          >
            <MenuItem value={'direct'} primaryText="Direct Contact" />
            <MenuItem value={'webWide'} primaryText="Web-Wide Search" />
            <MenuItem value={'referal'} primaryText="Referal" />
            <MenuItem value={'other'} primaryText="Other" />
          </SelectField>
          <Toggle label="Active Flag" style={styles.toggle}  />
          <Toggle label="Private Listing" style={styles.toggle} />
          <Toggle label="Celebrity" style={styles.toggle} />
          <Toggle label="Can Post" style={styles.toggle} defaultToggled />
          <Toggle label="Giving Fund" style={styles.toggle} defaultToggled />
        </div>
      </div>
    );
  }
}

const TabsExampleSimple = () => (
  <Tabs>
    <Tab label="Personal" >
      <div style={styles}>
        <Personal />
      </div>
    </Tab>
    <Tab label="Identifiers" >
      <div style={styles}>
        <Identifiers />
      </div>
    </Tab>
    <Tab label="Education" >
      <div style={styles}>
        <Education />
      </div>
    </Tab>
    <Tab label="Relationships" >
      <div style={styles}>
        <Relationships />
      </div>
    </Tab>
    <Tab label="History" >
      <div style={styles}>
        <History />
      </div>
    </Tab>
    <Tab label="Contact Methods" >
      <div style={styles}>
        <ContactMethods />
      </div>
    </Tab>
    <Tab label="Misc" >
      <div style={styles}>
        <Misc />
      </div>
    </Tab>
  </Tabs>
);

const TabsSection = () => (
      <section className="box box-default">
        <div className="box-body no-padding">
          <TabsExampleSimple />
        </div>
      </section>
);

module.exports = TabsSection;



