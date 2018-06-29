import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import MyStatefulEditor from '../../../components/editor';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = {
  padding: '12px 18px',
  marginBottom: 12,
  fontWeight: 400,
  minHeight: 300,
  toggle: {
    maxWidth: 250,
    marginLeft: 6
    // marginBottom: 16
  }
};

const Confirmations = () => (
  <div>
    <h5>Donation Confirmations</h5>
    <small>Customize Donation Confirmation messages</small>
    <div className="box bg-color-page">
      <div className="box-body">
        <b>Thank You Message</b>
        <br />
        <small>
          Customize messages and receipt Donors receive after submitting a
          Donation.
        </small>
        <MyStatefulEditor defaultValue="<b>Thank You</b> for giving. <i>We're Pinning our hopes on you!!</i>" />
      </div>
    </div>

    <div className="box bg-color-page">
      <div className="box-body">
        <b>PDF Receipt</b>
        <br />
        <small>Customize the PDF Receipt.</small>
        <MyStatefulEditor
          defaultValue="<b>Official Receipt for Income Tax Purposes <br />
          Voided by any erasures, alterations or changes</b> <br />
          <br />
          Receipt Number: <code>[[pdf_receipt_id]]</code><br />
          Payment ID: <code>[[payment_id]]</code><br />
          <br />
          <code>[[First Name]]</code> <code>[[Last Name]]</code><br />
          <code>[[address]]</code><br />
          <code>[[city]]</code>, <code>[[state]]</code> <code>[[zip]]</code><br />
          <br />
          Supporter ID: <code>[[supporter_id]]</code><br />
          Donation Date: <code>[[original_payment_date]]</code><br />
          Donation Amount: <code>[[donation_amount]]</code><br />
          Credit Card Number: <code>[[credit_card_mask]]</code><br />
          Credit Card Type: <code>[[credit_card_type]]</code><br />
          Credit Card Exp. Date: <code>[[credit_card_exp]]</code><br />
          "
        />
      </div>
    </div>

    <div className="divider" />
    <h5>Registration Confirmations</h5>
    <small>
      {' '}
      Customize the message users will see when registering for the first time.
    </small>
    <div className="box bg-color-page">
      <div className="box-body">
        <b>Registration Thank You</b>
        <br />
        <small> Customize the message a New User sees on Registration.</small>
        <MyStatefulEditor defaultValue="Thank You for Registering. " />
      </div>
    </div>

    <div className="divider" />
    <h5> Goal Achievements</h5>
    <small>Customize Goal Achievement Notifications</small>
    <div className="box bg-color-page">
      <div className="box-body">
        <b>First Goal Achievement</b>
        <br />
        <input
          type="text"
          style={{ margin: '3px' }}
          id="percents"
          size="3"
          defaultValue="50"
        />% <small>Percentage of Goal to Reach for first Notification</small>
        <br />
        <label htmlFor="notification">Notification Subject Line</label>
        <br />
        <input
          type="text"
          className="form-control"
          id="notification"
          defaultValue="Congratulations! You're Halfway there!"
        />{' '}
        <br />
        <MyStatefulEditor defaultValue="You have made it Halfway to your goal. Thanks for being SO Great! You Rock!" />
      </div>
    </div>

    <div className="box bg-color-page">
      <div className="box-body">
        <b>Second Goal Achievement</b>
        <br />
        <input
          type="text"
          style={{ margin: '3px' }}
          id="percents"
          size="3"
          defaultValue="90"
        />% <small>Percentage of Goal to Reach for first Notification</small>
        <br />
        <label htmlFor="notification">Notification Subject Line</label>
        <br />
        <input
          type="text"
          className="form-control"
          id="notification"
          defaultValue="Congratulations! You're Almost there!"
        />{' '}
        <br />
        <MyStatefulEditor defaultValue="You're Almost to your goal. Thanks for being SO Great! You Rock!" />
      </div>
    </div>
  </div>
);

const Notification = () => (
  <div>
    <h5>Notifications</h5>
    <small>Customize the Notifications that your team/family will see.</small>
    <div className="box-body">
      <b>New Registration - Personal Page Owner</b>
      <br />
      <small>Notification to Personal Page Owner for new Registration</small>
      <br />
      <TextField
        multiLine
        fullWidth
        key="1"
        defaultValue="An individual just signed up on the form from within your personal web page. Go to your personal page, login and see your latest updates."
      />
    </div>

    <div className="box-body">
      <b>New Registration - Team Leader</b>
      <br />
      <small>
        Notification to Team Leader for new Team Member Registration
      </small>
      <br />
      <TextField
        multiLine
        key="2"
        fullWidth
        defaultValue="A new team member has just registered and joined your team. Login and see your latest updates."
      />
    </div>

    <div className="box-body">
      <b>New Donation - Personal Page Owner</b>
      <br />
      <small>
        Customize the message a Personal Page Owner sees when a new Donation is
        made
      </small>
      <br />
      <TextField
        key="3"
        multiLine
        fullWidth
        defaultValue="A donation has just been made on your personal web page. Go to your personal page, login and see your latest updates."
      />
    </div>

    <div className="box-body">
      <b>New Donation (General) - Team Leader</b>
      <br />
      <small>
        Customize the message a Team Leader sees when a new General Donation is
        made.{' '}
      </small>
      <br />
      <TextField
        key="4"
        multiLine
        fullWidth
        defaultValue="A donation has just been made on your team web page. Go to your team page, login and see your latest updates."
      />
    </div>

    <div className="box-body">
      <b>New Donation (Team Member) - Team Leader</b>
      <br />
      <small>
        Customize the message a Team Leader sees when a Donation is made to a
        Team Member.
      </small>
      <br />
      <TextField
        multiLine
        key="5"
        fullWidth
        defaultValue="A donation has just been made on your team web page. Go to your team page, login and see your latest updates."
      />
    </div>
  </div>
);

const Features = () => (
  <div>
    <h5>Add Registrations</h5>
    <small>Social Media Options</small>
    <div>
      <br />
      <small>
        Allow users to Register/Login and Donate using their Social Media Login
        Information
      </small>
      <FormControlLabel
        control={<Switch />}
        label="Enable Quick Connect"
        style={styles.toggle}
      />
    </div>

    <h5>Registration Types</h5>
    <small>Choose how participants can Register</small>
    <div>
      <br />
      <small>
        Send Notifications to Event Managers when a new Registration is
        Confirmed
      </small>
      <FormControlLabel
        control={<Switch />}
        label="Send Registration Notifications"
        style={styles.toggle}
      />

      <small>
        Allow users to create a Family of Donors - Each member will have
        individual contact information and the Family will have it's own Family
        page to collaborate Fund-Raising
      </small>
      <FormControlLabel
        control={<Switch />}
        label="Family registration"
        style={styles.toggle}
      />
    </div>
  </div>
);

class Registration extends React.Component {
  state = {
    display: 'none'
  };

  toggleHandler = (e, isChecked) => {
    this.setState({ display: isChecked ? 'block' : 'none' });
  };

  render = () => (
    <div>
      <h5>Registration</h5>
      <small>
        Choose how participants can Register / registration types, fees etc.
      </small>
      <div>
        <br />
        <small>
          Send Notifications to Event Managers when a new Registration is
          Confirmed
        </small>
        <FormControlLabel
          control={<Switch onToggle={this.toggleHandler} />}
          label=" Send Registration Notifications"
          style={styles.toggle}
        />

        <div
          className="box bg-color-page"
          style={{ display: this.state.display }}
        >
          <div className="box-body">
            See Confirmations Tab > Notifications to Customize Notifications
          </div>
        </div>

        <small>
          Allow users to create a Family of Donors - Each member will have
          individual contact information and the Family will have it's own
          Family page to collaborate Fund-Raising
        </small>
        <FormControlLabel
          control={<Switch />}
          label="Family registration"
          style={styles.toggle}
        />
        <small>
          Allow participants to register as an Individual and not be a team
          member.
        </small>
        <FormControlLabel
          control={<Switch />}
          label="Individual Registration"
          style={styles.toggle}
        />
        <small>
          Enable users to participate and help fund-raise for your event.
        </small>
        <FormControlLabel
          control={<Switch />}
          label="Participant Registration"
          style={styles.toggle}
        />
      </div>
    </div>
  );
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
          <Tab label="Confirmations" />
          <Tab label="Notifications" />
          <Tab label="Features" />
          <Tab label="Registration" />
        </Tabs>
        {value === 0 && (
          <div style={styles}>
            <Confirmations />
          </div>
        )}
        {value === 1 && (
          <div style={styles}>
            <Notification />
          </div>
        )}
        {value === 2 && (
          <div style={styles}>
            <Features />
          </div>
        )}
        {value === 3 && (
          <div style={styles}>
            <Registration />
          </div>
        )}
      </div>
    );
  }
}

const TabsSection = () => (
  <div>
    <h1 className="article-title">Event Settings</h1>
    <section className="box box-default">
      <div className="box-body no-padding">
        <TabsExampleSimple />
      </div>
    </section>
  </div>
);

module.exports = TabsSection;
