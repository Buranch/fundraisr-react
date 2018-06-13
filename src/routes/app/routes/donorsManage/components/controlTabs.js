import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import SelectField from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import HistoryTable from './historyTable';
import IntegrationDownshift from '../../configure/routes/organizationInformation/components/formTableAutocomplete';

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
    marginBottom: 16
  }
};
const years = [
  { label: '1900' },
  { label: '1901' },
  { label: '1902' },
  { label: '1903' },
  { label: '1904' },
  { label: '1905' },
  { label: '1906' },
  { label: '1907' },
  { label: '1908' },
  { label: '1909' },
  { label: '1910' },
  { label: '1911' },
  { label: '1912' },
  { label: '1913' },
  { label: '1914' },
  { label: '1915' },
  { label: '1916' },
  { label: '1917' },
  { label: '1918' },
  { label: '1919' },
  { label: '1920' },
  { label: '1921' },
  { label: '1922' },
  { label: '1923' },
  { label: '1924' },
  { label: '1925' },
  { label: '1926' },
  { label: '1927' },
  { label: '1928' },
  { label: '1929' },
  { label: '1930' },
  { label: '1931' },
  { label: '1932' },
  { label: '1933' },
  { label: '1934' },
  { label: '1935' },
  { label: '1936' },
  { label: '1937' },
  { label: '1938' },
  { label: '1939' },
  { label: '1940' },
  { label: '1941' },
  { label: '1942' },
  { label: '1943' },
  { label: '1944' },
  { label: '1945' },
  { label: '1946' },
  { label: '1947' },
  { label: '1948' },
  { label: '1949' },
  { label: '1950' },
  { label: '1951' },
  { label: '1952' },
  { label: '1953' },
  { label: '1954' },
  { label: '1955' },
  { label: '1956' },
  { label: '1957' },
  { label: '1958' },
  { label: '1959' },
  { label: '1960' },
  { label: '1961' },
  { label: '1962' },
  { label: '1963' },
  { label: '1964' },
  { label: '1965' },
  { label: '1966' },
  { label: '1967' },
  { label: '1968' },
  { label: '1969' },
  { label: '1970' },
  { label: '1971' },
  { label: '1972' },
  { label: '1973' },
  { label: '1974' },
  { label: '1975' },
  { label: '1976' },
  { label: '1977' },
  { label: '1978' },
  { label: '1979' },
  { label: '1980' },
  { label: '1981' },
  { label: '1982' },
  { label: '1983' },
  { label: '1984' },
  { label: '1985' },
  { label: '1986' },
  { label: '1987' },
  { label: '1988' },
  { label: '1989' },
  { label: '1990' },
  { label: '1991' },
  { label: '1992' },
  { label: '1993' },
  { label: '1994' },
  { label: '1995' },
  { label: '1996' },
  { label: '1997' },
  { label: '1998' },
  { label: '1999}' }
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
  handleSexChange = (event, index, value) => this.setState({ sexValue: value });
  handleEtnChange = (event, index, value) =>
    this.setState({ ethnicity: value });
  handleMarChange = (event, index, value) =>
    this.setState({ maritalStatus: value });
  handleLivChange = (event, index, value) => this.setState({ living: value });

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h5>Demographics</h5>
          <TextField value="68" floatingLabelText="Age" disabled />
          <br />
          <small>Donors "Age" is set by Donors "Birth Day". </small>
          {/*<DatePicker floatingLabelText="Birth Day" />*/}
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
            <MenuItem
              value={'pacificIslander'}
              primaryText="Pacific Islander"
            />
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
          <Switch
            label="Head of Household?"
            style={styles.toggle}
            defaultToggled
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4">
          <h5>Employment Information</h5>
          <TextField
            defaultValue="Transformers - Robots in Disguise"
            floatingLabelText="Company Name"
          />{' '}
          <br />
          <TextField
            defaultValue="Team Leader"
            floatingLabelText="Job Title"
          />{' '}
          <br />
          <TextField
            defaultValue="www.transformers.com"
            floatingLabelText="Company URL"
          />{' '}
          <br />
        </div>
      </div>
    );
  }
}
const Identifiers = () => (
  <div className="row">
    <div className="col-xs-12 col-sm-6 col-md-4">
      <h5>Identifiers</h5>
      <TextField value="9812873456" floatingLabelText="Donor ID" disabled />
      <br />
      <small>Donor ID can not be changed. </small>
      <IntegrationDownshift title="select year" suggestions={years} />
      <TextField value="43631" floatingLabelText="Alternate ID" />
      <br />

      <TextField value="Active; Gold; Veteran" floatingLabelText="Tags" />
      <br />
      <small>Seperate tags with ; </small>
    </div>
  </div>
);
class Education extends React.Component {
  state = {
    eduValue: 'highSchool'
  };
  handleEduChange = (event, index, value) => this.setState({ eduValue: value });

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h5>Education</h5>
          <TextField value="Cybertron University" floatingLabelText="School" />
          <br />
          <TextField value="Engineering" floatingLabelText="Department" />
          <br />
          <TextField value="Mechanical Engineering" floatingLabelText="Major" />
          <br />
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
  handleMailChange = (event, index, value) =>
    this.setState({ emailFormat: value });

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h5>Phone</h5>
          <Switch label="Home Phone" style={styles.toggle} />
          <Switch label="Cell Phone" style={styles.toggle} />
          <Switch label="Business Phone" style={styles.toggle} />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h5>Physical</h5>
          <Switch label="Direct Mail" style={styles.toggle} />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h5>eMail</h5>
          <Switch label="eMail" style={styles.toggle} />
          <SelectField
            floatingLabelText="eMail Format"
            value={this.state.emailFormat}
            onChange={this.handleMailChange}
          >
            <MenuItem value={'html'} primaryText="HTML" />
            <MenuItem value={'text'} primaryText="Text" />
          </SelectField>
          <Button
            style={mWidthStyle}
            label="Reset Password"
            target="_blank"
            primary
          />
        </div>
      </div>
    );
  }
}
class Misc extends React.Component {
  state = {
    hear: ''
  };
  handleHearChange = (event, index, value) => this.setState({ hear: value });

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
          <Switch label="Active Flag" style={styles.toggle} />
          <Switch label="Private Listing" style={styles.toggle} />
          <Switch label="Celebrity" style={styles.toggle} />
          <Switch label="Can Post" style={styles.toggle} defaultToggled />
          <Switch label="Giving Fund" style={styles.toggle} defaultToggled />
        </div>
      </div>
    );
  }
}

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
          <Tab label="Personal" />
          <Tab label="Identifiers" />
          <Tab label="Education" />
          <Tab label="Relationships" />
          <Tab label="History" />
          <Tab label="Contact Methods" />
          <Tab label="Misc" />
        </Tabs>
        {value === 0 && (
          <div style={styles}>
            <Personal />
          </div>
        )}
        {value === 1 && (
          <div style={styles}>
            <Identifiers />
          </div>
        )}
        {value === 2 && (
          <div style={styles}>
            <Education />
          </div>
        )}
        {value === 3 && (
          <div style={styles}>
            <Relationships />
          </div>
        )}
        {value === 4 && (
          <div style={styles}>
            <History />
          </div>
        )}
        {value === 5 && (
          <div style={styles}>
            <ContactMethods />
          </div>
        )}
        {value === 6 && (
          <div style={styles}>
            <Misc />
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

export default TabsSection;
