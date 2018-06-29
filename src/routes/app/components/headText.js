import React from 'react';
import Grid from '@material-ui/core/Grid';
function getMonth(date) {
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ];
  return month[date.getMonth()];
}
const date = new Date();
const dateString = `${getMonth(date)} ${date.getDate()}, ${date.getFullYear()}`;

class HeadText extends React.Component {
  render = () => (
    <Grid container spacing={24}>
      <Grid item xs={6} sm={6} md={6}>
        <h1 className="article-title">{this.props.pageName}</h1>
      </Grid>
      <Grid item xs={6} sm={6} md={6} style={{ textAlign: 'right' }}>
        <h1 className="article-title">{dateString}</h1>
      </Grid>
    </Grid>
  );
}

module.exports = HeadText;
