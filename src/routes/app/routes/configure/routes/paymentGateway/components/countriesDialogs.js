import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowUp from '@material-ui/icons/KeyboardArrowUp';
import ArrowDown from '@material-ui/icons/KeyboardArrowDown';
import RadioButton from '@material-ui/core/Radio';
import RadioButtonGroup from '@material-ui/core/RadioGroup';

const styles = {
  radioButton: {
    marginTop: 16
  },
  raisedButton: {
    margin: 12
  }
};

class Padum extends React.Component {
  state = {
    selectAllowed: false,
    selectBlocked: false
  };

  handleSelectAllowed = (e, value) => {
    this.setState({ selectAllowed: true });
  };

  handleSelectBlocked = (e, value) => {
    this.setState({ selectBlocked: true });
  };

  handleAdd = () => {
    this.setState({ selectAllowed: false });
  };

  handleRemove = () => {
    this.setState({ selectBlocked: false });
  };

  render() {
    const allowCountries = [
      'Afghanistan',
      'Albania',
      'Algeria',
      'American Samoa',
      'Andorra',
      'Angola',
      'Anguilla',
      'Antarctica',
      'Antigua and Barbuda',
      'Argentina',
      'Armenia',
      'Aruba',
      'Australia',
      'Austria',
      'Azerbaijan',
      'Bahamas',
      'Bahrain',
      'Bangladesh',
      'Barbados',
      'Belarus',
      'Belgium',
      'Belize',
      'Benin',
      'Bermuda',
      'Bhutan',
      'Bolivia',
      'Bosnia and Herzegowina',
      'Botswana',
      'Bouvet Island',
      'Brazil',
      'British Indian Ocean Territory',
      'Brunei Darussalam',
      'Bulgaria',
      'Burkina Faso',
      'Burundi',
      'Cambodia',
      'Cameroon',
      'Canada',
      'Cape Verde',
      'Cayman Islands',
      'Central African Republic',
      'Chad',
      'Chile',
      'China',
      'Christmas Island',
      'Cocos (Keeling) Islands',
      'Colombia',
      'Comoros',
      'Congo',
      'Congo, the Democratic Republic of the',
      'Cook Islands',
      'Costa Rica',
      "Cote d'Ivoire",
      'Croatia (Hrvatska)',
      'Cuba',
      'Cyprus',
      'Czech Republic',
      'Denmark',
      'Djibouti',
      'Dominica',
      'Dominican Republic',
      'East Timor',
      'Ecuador',
      'Egypt',
      'El Salvador',
      'Equatorial Guinea',
      'Eritrea',
      'Estonia',
      'Ethiopia',
      'Falkland Islands (Malvinas)',
      'Faroe Islands',
      'Fiji',
      'Finland',
      'France',
      'France Metropolitan',
      'French Guiana',
      'French Polynesia',
      'French Southern Territories',
      'Gabon',
      'Gambia',
      'Georgia',
      'Germany',
      'Gibraltar',
      'Greece',
      'Greenland',
      'Grenada',
      'Guadeloupe',
      'Guam',
      'Guatemala',
      'Guinea',
      'Guinea-Bissau',
      'Guyana',
      'Haiti',
      'Heard and Mc Donald Islands',
      'Holy See (Vatican City State)',
      'Honduras',
      'Hong Kong',
      'Hungary',
      'Iceland',
      'India',
      'Indonesia',
      'Iran (Islamic Republic of)',
      'Iraq',
      'Ireland',
      'Israel',
      'Italy',
      'Jamaica',
      'Japan',
      'Jordan',
      'Kazakhstan',
      'Kenya',
      'Kiribati',
      "Korea, Democratic People's Republic of",
      'Korea, Republic of',
      'Kuwait',
      'Kyrgyzstan',
      "Lao, People's Democratic Republic",
      'Latvia',
      'Lebanon',
      'Lesotho',
      'Liberia',
      'Libyan Arab Jamahiriya',
      'Liechtenstein',
      'Lithuania',
      'Luxembourg',
      'Macau',
      'Macedonia, The Former Yugoslav Republic of',
      'Madagascar',
      'Malawi',
      'Maldives',
      'Mali',
      'Malta',
      'Marshall Islands',
      'Martinique',
      'Mauritania',
      'Mauritius',
      'Mayotte',
      'Mexico',
      'Micronesia, Federated States of',
      'Moldova, Republic of',
      'Monaco',
      'Mongolia',
      'Montserrat',
      'Morocco',
      'Mozambique',
      'Myanmar',
      'Namibia',
      'Nauru',
      'Nepal',
      'Netherlands',
      'Netherlands Antilles',
      'New Caledonia',
      'New Zealand',
      'Nicaragua',
      'Niger',
      'Niue',
      'Norfolk Island',
      'Northern Mariana Islands',
      'Norway',
      'Oman',
      'Pakistan',
      'Palau',
      'Panama',
      'Papua New Guinea',
      'Paraguay',
      'Peru',
      'Pitcairn',
      'Poland',
      'Portugal',
      'Puerto Rico',
      'Qatar',
      'Reunion',
      'Romania',
      'Rwanda',
      'Saint Kitts and Nevis',
      'Saint Lucia',
      'Saint Vincent and the Grenadines',
      'Samoa',
      'San Marino',
      'Sao Tome and Principe',
      'Saudi Arabia',
      'Senegal',
      'Seychelles',
      'Sierra Leone',
      'Singapore',
      'Slovakia (Slovak Republic)',
      'Slovenia',
      'Solomon Islands',
      'Somalia',
      'South Africa',
      'South Georgia and the South Sandwich Islands',
      'Spain',
      'Sri Lanka',
      'St. Helena',
      'St. Pierre and Miquelon',
      'Sudan',
      'Suriname',
      'Svalbard and Jan Mayen Islands',
      'Swaziland',
      'Sweden',
      'Switzerland',
      'Syrian Arab Republic',
      'Taiwan, Province of China',
      'Tajikistan',
      'Tanzania, United Republic of',
      'Thailand',
      'Togo',
      'Tokelau',
      'Tonga',
      'Trinidad and Tobago',
      'Tunisia',
      'Turkey',
      'Turkmenistan',
      'Turks and Caicos Islands',
      'Tuvalu',
      'Uganda',
      'United Arab Emirates',
      'United Kingdom',
      'United States',
      'United States Minor Outlying Islands',
      'Uruguay',
      'Uzbekistan',
      'Vanuatu',
      'Venezuela',
      'Vietnam',
      'Virgin Islands (British)',
      'Virgin Islands (U.S.)',
      'Wallis and Futuna Islands',
      'Western Sahara',
      'Yemen',
      'Yugoslavia',
      'Zambia',
      'Zimbabwe'
    ];
    const blockedCountries = [
      'Nigeria',
      'Ghana',
      'Russian Federation',
      'Ukraine',
      'Philippines',
      'Malaysia'
    ];

    const allowed = allowCountries.map((item, i, arr) => (
      <RadioButton
        key={i}
        value={item}
        label={item}
        style={styles.radioButton}
      />
    ));
    const blocked = blockedCountries.map((item, i, arr) => (
      <RadioButton
        key={i}
        value={`${blockedCountries[i]}`}
        label={`${blockedCountries[i]}`}
        style={styles.radioButton}
      />
    ));

    return (
      <div>
        <div className="box bg-color-page">
          <div
            className="box-body no-padding"
            style={{ margin: '8px', maxHeight: '200px', overflow: 'auto' }}
          >
            <RadioButtonGroup
              name="allowedCountries"
              onChange={this.handleSelectAllowed}
            >
              {allowed}
            </RadioButtonGroup>
          </div>
        </div>

        <Button
          label="Add"
          labelPosition="before"
          variant="contained"
          style={styles.raisedButton}
          disabled={!this.state.selectAllowed}
          onClick={this.handleAdd}
        >
          <ArrowDown /> Add
        </Button>

        <Button
          label="Remove"
          labelPosition="before"
          variant="contained"
          style={styles.raisedButton}
          disabled={!this.state.selectBlocked}
          onClick={this.handleRemove}
        >
          <ArrowUp /> Remove
        </Button>

        <div className="box bg-color-page">
          <div
            className="box-body no-padding"
            style={{ margin: '8px', maxHeight: '200px', overflow: 'auto' }}
          >
            <RadioButtonGroup
              name="blockCountries"
              onChange={this.handleSelectBlocked}
            >
              {blocked}
            </RadioButtonGroup>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Padum;
