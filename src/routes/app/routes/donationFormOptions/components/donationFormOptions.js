import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Helper from './helper';
import ControlPanel from './controlPanel';
import DonationAmounts from './donationAmounts';

const mWidthStyle = {
  minWidth: '135px'
};

function getMonth(date) {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  return month[date.getMonth()];
}
const date = new Date();
const dateString = `${getMonth(date)} ${date.getDate()}, ${date.getFullYear()}`;

const HeadText = () => (
  <div className="row">
    <div className="col-sm-6">
      <h1 className="article-title">User Profile</h1>
    </div>
    <div className="col-sm-6" style={{textAlign: 'right'}}>
      <h1 className="article-title">{dateString}</h1>
    </div>
  </div>
);

// TODO Styles dont change!
class AdditionalContent extends React.Component {
  state = {
    advanced: false,
    underlineStyle: {
      borderColor: 'orange500',
    },
    floatingLabelStyle: {
      color: 'orange500',
    },
  };

  ClickHandler(e) {
    e.preventDefault();
    this.setState((prev, props) => {
      let underline;
      let floatingLabel;
      if (prev.advanced) {
        underline = {};
        floatingLabel = {};
      } else {
        underline = {
          borderColor: 'orange500',
        };
        floatingLabel = {
          color: 'orange500',
        };
      }
      return {
        advanced: !prev.advanced,
        underlineStyle: underline,
        floatingLabelStyle: floatingLabel
      };
    });
  }

  render = () => {
    this.ClickHandler = this.ClickHandler.bind(this);
    return (
      <div className="box box-default">
        <div className="box-body">
          <h5>Additional Content</h5>
          <small>
            Content in these sections will be appended to their respective container
          </small>
          <div className="text-center">
            <FlatButton onClick={this.ClickHandler} style={mWidthStyle} label="Content" href="" target="_blank" secondary={!this.state.advanced} />
            <FlatButton onClick={this.ClickHandler} style={mWidthStyle} label="Advanced" href="" target="_blank" secondary={this.state.advanced} />
          </div>
          <br />
          <b>Header Content</b><br />
          <TextField
            hintText="<html> is ok. Lorem ipsum"
            multiLine={true}
            rows={2}
            underlineStyle={this.state.underlineStyle}
            underlineFocusStyle={this.state.underlineStyle}
            floatingLabelStyle={this.state.floatingLabelStyle}
            floatingLabelFocusStyle={this.state.floatingLabelFocusStyle}
            rowsMax={4}
            fullWidth
          /><br />
          <b>Footer Content</b><br />
          <TextField
            hintText="<html> is ok. Lorem ipsum"
            multiLine={true}
            underlineStyle={this.state.underlineStyle}
            underlineFocusStyle={this.state.underlineStyle}
            floatingLabelStyle={this.state.floatingLabelStyle}
            floatingLabelFocusStyle={this.state.floatingLabelFocusStyle}
            rows={2}
            rowsMax={4}
            fullWidth
          />
        </div>
      </div>)};
}

const AnalysticsCode = () => (
  <div className="box box-default">
    <div className="box-body">
      <h5>Analytics Code</h5>
      <small>Content in this section will be used for analytics</small>

      <TextField
        hintText="<html> is ok. Lorem ipsum"
        multiLine={true}
        rows={2}
        rowsMax={4}
        fullWidth
      />
    </div>
  </div>
);

const FriendlyUrl = () => (
  <div className="box box-default">
    <div className="box-body">
      <h5>Friendly URL</h5>
      http://<span className="space" />
      <TextField hintText="Organisation Name" /> <span className="space" />
      .fundaisr.org/<span className="space" />
      <TextField hintText="Form Name" />
      <div className="text-right">
        <FlatButton style={mWidthStyle} label="Submit" secondary />
      </div>
    </div>
  </div>
);

const orgInfo = () => (
  <section className="container-fluid no-breadcrumbs">
    <Helper />
    <HeadText />
    <ControlPanel />
    <FriendlyUrl />
    <DonationAmounts />п
    <AdditionalContent />
    <AnalysticsCode />
  </section>
);

module.exports = orgInfo;
