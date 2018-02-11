import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const allowCountries = [
  "Afghanistan", "Albania", "Algeria",
  "American Samoa", "Andorra", "Angola",
  "Anguilla", "Antarctica", "Antigua and Barbuda",
  "Argentina", "Armenia", "Aruba", "Australia",
  "Austria", "Azerbaijan", "Bahamas", "Bahrain",
  "Bangladesh", "Barbados", "Belarus", "Belgium",
  "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia",
  "Bosnia and Herzegowina", "Botswana", "Bouvet Island",
  "Brazil", "British Indian Ocean Territory",
  "Brunei Darussalam", "Bulgaria", "Burkina Faso",
  "Burundi", "Cambodia", "Cameroon", "Canada",
  "Cape Verde", "Cayman Islands",
  "Central African Republic", "Chad", "Chile",
  "China", "Christmas Island", "Cocos (Keeling) Islands",
  "Colombia", "Comoros", "Congo",
  "Congo, the Democratic Republic of the",
  "Cook Islands", "Costa Rica", "Cote d'Ivoire",
  "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "East Timor", "Ecuador", "Egypt", "El Salvador",
  "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia",
  "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji",
  "Finland", "France", "France Metropolitan", "French Guiana",
  "French Polynesia", "French Southern Territories", "Gabon",
  "Gambia", "Georgia", "Germany", "Gibraltar", "Greece",
  "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala",
  "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
  "Heard and Mc Donald Islands", "Holy See (Vatican City State)",
  "Honduras", "Hong Kong", "Hungary", "Iceland", "India",
  "Indonesia", "Iran (Islamic Republic of)", "Iraq",
  "Ireland", "Israel", "Italy", "Jamaica", "Japan",
  "Jordan", "Kazakhstan", "Kenya", "Kiribati",
  "Korea, Democratic People's Republic of",
  "Korea, Republic of", "Kuwait", "Kyrgyzstan",
  "Lao, People's Democratic Republic", "Latvia", "Lebanon",
  "Lesotho", "Liberia", "Libyan Arab Jamahiriya",
  "Liechtenstein", "Lithuania", "Luxembourg", "Macau",
  "Macedonia, The Former Yugoslav Republic of",
  "Madagascar", "Malawi", "Maldives",
  "Mali", "Malta", "Marshall Islands", "Martinique",
  "Mauritania", "Mauritius", "Mayotte", "Mexico",
  "Micronesia, Federated States of", "Moldova, Republic of",
  "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique",
  "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands",
  "Netherlands Antilles", "New Caledonia", "New Zealand",
  "Nicaragua", "Niger",  "Niue", "Norfolk Island",
  "Northern Mariana Islands", "Norway", "Oman", "Pakistan",
  "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru",
  "Pitcairn", "Poland", "Portugal",
  "Puerto Rico", "Qatar", "Reunion", "Romania",
  "Rwanda", "Saint Kitts and Nevis",
  "Saint Lucia", "Saint Vincent and the Grenadines",
  "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
  "Senegal", "Seychelles", "Sierra Leone", "Singapore",
  "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands",
  "Somalia", "South Africa", "South Georgia and the South Sandwich Islands",
  "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon",
  "Sudan", "Suriname", "Svalbard and Jan Mayen Islands",
  "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic",
  "Taiwan, Province of China", "Tajikistan",
  "Tanzania, United Republic of", "Thailand", "Togo",
  "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia",
  "Turkey", "Turkmenistan", "Turks and Caicos Islands",
  "Tuvalu", "Uganda", "United Arab Emirates",
  "United Kingdom", "United States",
  "United States Minor Outlying Islands", "Uruguay",
  "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam",
  "Virgin Islands (British)", "Virgin Islands (U.S.)",
  "Wallis and Futuna Islands", "Western Sahara", "Yemen",
  "Yugoslavia", "Zambia", "Zimbabwe"
];
const blockedCountries = [
  "Nigeria", "Ghana", "Russian Federation", "Ukraine", "Philippines", "Malaysia"
];
const styles = {
  radioButton: {
    marginTop: 16,
  },
};

class DialogExampleScrollable extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onClick={this.handleClose}
      />,
      <FlatButton
        label={this.props.label}
        primary
        keyboardFocused
        onClick={this.handleClose}
      />,
    ];

    const radios = [];
    for (let i = 0; i < this.props.array.length; i++) {
      radios.push(
        <RadioButton
          key={i}
          value={`${this.props.array[i]}`}
          label={`${this.props.array[i]}`}
          style={styles.radioButton}
        />
      );
    }

    return (
      <div>
        <RaisedButton label={this.props.label} onClick={this.handleOpen} />
        <Dialog
          title="Scrollable Dialog"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent
        >
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            {radios}
          </RadioButtonGroup>
        </Dialog>
      </div>
    );
  }
}

const DialogSection = () => (
  <div className="form-inline">
    <DialogExampleScrollable label="Add" array={allowCountries} />
    <span className="space" />
    <DialogExampleScrollable label="Remove" array={blockedCountries} />
  </div>
);

module.exports = DialogSection;
