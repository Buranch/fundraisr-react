import React from 'react';

function getMonth(date) {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  return month[date.getMonth()];
}
const date = new Date();
const dateString = `${getMonth(date)} ${date.getDate()}, ${date.getFullYear()}`;

class HeadText extends React.Component {
  render = () => (
    <div className="row">
      <div className="col-xs-6 col-sm-6 col-md-6">
        <h1 className="article-title">{this.props.pageName}</h1>
      </div>
      <div className="col-xs-6 col-sm-6 col-md-6" style={{textAlign: 'right'}}>
        <h1 className="article-title">{dateString}</h1>
      </div>
    </div>
);
}

module.exports = HeadText;
