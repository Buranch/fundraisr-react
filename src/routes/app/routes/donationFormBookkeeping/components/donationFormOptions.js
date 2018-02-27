import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import DoneIcon from 'material-ui/svg-icons/action/done';
import Helper from '../../../components/helper';
import HeadText from '../../../components/headText';
import Breadcrumb from '../../../components/breadcrumb';
import ControlPanel from '../../../components/stickyControlPanel';
import DonationAmounts from './donationAmounts';
import CustomFields from './customFields';

const mWidthStyle = {
  minWidth: '135px'
};

class AdditionalContent extends React.Component {
  state = {
    advanced: false,
    notAdvFirst: '',
    notAdvTwo: '',
    advFirst: '',
    advTwo: '',
  };

  ClickHandler(e) {
    e.preventDefault();
    this.setState((prev, props) => ({advanced: !prev.advanced }));
  }

  ChangeFirstHandler(e, newValue) {
    if (this.state.advanced) {
      this.setState({advFirst: newValue});
    } else {
      this.setState({notAvdFirst: newValue});
    }
  }

  ChangeTwoHandler(e, newValue) {
    if (this.state.advanced) {
      this.setState({advTwo: newValue});
    } else {
      this.setState({notAvdTwo: newValue});
    }
  }

  render = () => {
    this.ClickHandler = this.ClickHandler.bind(this);
    this.ChangeFirstHandler = this.ChangeFirstHandler.bind(this);
    this.ChangeTwoHandler = this.ChangeTwoHandler.bind(this);
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
            multiLine
            rows={5}
            value={this.state.advanced ? this.state.advFirst : this.state.notAdvFirst}
            underlineStyle={this.state.advanced ? {borderColor: '#ff9e00'} : false}
            underlineFocusStyle={this.state.advanced ? {borderColor: '#ff9e00'} : false}
            floatingLabelStyle={this.state.advanced ? {color: '#ff9e00'} : false}
            floatingLabelFocusStyle={this.state.advanced ? {color: '#ff9e00'} : false}
            rowsMax={10}
            onChange={this.ChangeFirstHandler}
            fullWidth
          /><br />
          <b>Footer Content</b><br />
          <TextField
            hintText="<html> is ok. Lorem ipsum"
            multiLine
            value={this.state.advanced ? this.state.advTwo : this.state.notAdvTwo}
            underlineStyle={this.state.advanced ? {borderColor: '#ff9e00'} : false}
            underlineFocusStyle={this.state.advanced ? {borderColor: '#ff9e00'} : false}
            floatingLabelStyle={this.state.advanced ? {color: '#ff9e00'} : false}
            floatingLabelFocusStyle={this.state.advanced ? {color: '#ff9e00'} : false}
            rows={5}
            rowsMax={10}
            onChange={this.ChangeTwoHandler}
            fullWidth
          />
        </div>
      </div>
    );
  };
}

const AnalysticsCode = () => (
  <div className="box box-default">
    <div className="box-body">
      <h5>Analytics Code</h5>
      <small>Content in this section will be used for analytics</small>

      <TextField
        hintText="<html> is ok. Lorem ipsum"
        multiLine
        rows={5}
        rowsMax={10}
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
        <FlatButton style={mWidthStyle} label="Submit" icon={<DoneIcon />} secondary />
      </div>
    </div>
  </div>
);


const orgInfo = () => (
  <section className="container-fluid no-breadcrumbs">
    <Helper />
    <HeadText pageName="Donation Form Options" />
    <Breadcrumb path={<small><a href="">Dashboard</a> >> <a href="">Donation Forms</a> >> <a href="">Manage Donation Forms</a> >> Donation Form Options</small>} />
    <ControlPanel />
    <small>This is still a duplicate of "Donation Form Options"</small>
    <FriendlyUrl />
    <DonationAmounts />
    <CustomFields />
    <AdditionalContent />
    <AnalysticsCode />
  </section>
);

module.exports = orgInfo;
