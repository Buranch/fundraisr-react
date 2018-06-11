import React from 'react';
// import FlatButton from 'material-ui/FlatButton';
// import TextField from 'material-ui/TextField';
// import {Tabs, Tab} from 'material-ui/Tabs';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MyStatefulEditor from '../../../components/editor';

const mWidthStyle = {
  minWidth: '135px'
};

const styles = {
  padding: '12px 18px',
  marginBottom: 12,
  fontWeight: 400,
  minHeight: 300
};

class EmailConf extends React.Component {
  state = {
    first: true
  };

  clickHandler(e) {
    this.setState((prev, props) => ({ first: !prev.first }));
  }

  render() {
    this.clickHandler = this.clickHandler.bind(this);

    return (
      <div>
        <h1 className="article-title"> Conformation Title</h1>
        <div className="box box-default">
          <div className="box-body">
            <div className="row">
              <div className="col-xl-4">
                <h5>Message Type</h5>
                <div className="box box-default text-center">
                  <Button
                    onClick={this.clickHandler}
                    style={mWidthStyle}
                    label="Use Default Text"
                    target="_blank"
                    secondary={this.state.first}
                  />
                  <Button
                    onClick={this.clickHandler}
                    style={mWidthStyle}
                    label="Use Custom Text"
                    target="_blank"
                    secondary={!this.state.first}
                  />
                </div>
              </div>
              <div className="col-xl-8">
                <h5>Message Preview</h5>
                {this.state.first ? (
                  <p>
                    Lorem ipsum dolor sit amet, Consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo. exercitation
                    ullamco
                  </p>
                ) : (
                  <span>
                    [[registration_date]]<br />
                    <br />
                    [[First Name]] [[Last Name]]<br />
                    [[Email Address]]<br />
                    [[Address_1]]<br />
                    [[Address_2]]<br />
                    [[city]], [[state]] [[zip]]<br />
                    <br />
                    Thank you for registering for [[event_name]].<br />
                    <br />
                    ((DYNAMIC MERGE)) [[login_name]]<br />
                    ((DYNAMIC MERGE)) [[password]]<br />
                    <br />
                    [[event_name]] contact information:<br />
                    Email Address: [[event_email_address]]<br />
                    <br />
                    Sincerely,<br />
                    [[account_name]]
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: this.state.first ? 'none' : 'block' }}>
          <h1 className="article-title"> Message Options</h1>
          <section className="box box-default">
            <div className="box-body no-padding">
              <Tabs>
                <Tab label="Content">
                  <div style={styles}>
                    <div className="box bg-color-page">
                      <div className="box-body">
                        <b>Confirmation Title</b>
                        <br />
                        <small> Customize your messages.</small>
                        <MyStatefulEditor
                          defaultValue="<span>[[registration_date]]<br />
                            <br />
                            [[First Name]] [[Last Name]]<br />
                            [[Email Address]]<br />
                            [[Address_1]]<br />
                            [[Address_2]]<br />
                            [[city]], [[state]] [[zip]]<br />
                            <br />
                            Thank you for registering for [[event_name]].<br />
                            <br />
                            ((DYNAMIC MERGE)) [[login_name]]<br />
                            ((DYNAMIC MERGE)) [[password]]<br />
                            <br />
                            [[event_name]]  contact information:<br />
                            Email Address: [[event_email_address]]<br />
                            <br />
                            Sincerely,<br />
                            [[account_name]]</span>"
                        />
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab label="To/From">
                  <div style={styles}>
                    <TextField floatingLabelText="Subject Line" />{' '}
                    <span className="space" />
                    <TextField floatingLabelText="Reply To" /> <br />
                    <TextField floatingLabelText="CC" />{' '}
                    <span className="space" />
                    <TextField floatingLabelText="From Name" /> <br />
                    <TextField floatingLabelText="BCC" />{' '}
                    <span className="space" />
                    <TextField floatingLabelText="From eMail" />
                  </div>
                </Tab>
              </Tabs>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

module.exports = EmailConf;
