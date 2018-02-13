import React from 'react';
import Helper from './helper';
import TableRec from './table';

function getMonth(date) {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  return month[date.getMonth()];
}
const date = new Date();
const dateString = `${getMonth(date)} ${date.getDate()}, ${date.getFullYear()}`;

const HeadText = () => (
  <div className="row">
    <div className="col-sm-6">
      <h1 className="article-title">Manage Initiative Records</h1>
    </div>
    <div className="col-sm-6" style={{textAlign: 'right'}}>
      <h1 className="article-title">{dateString}</h1>
    </div>
  </div>
);

class Events extends React.Component {
  render() {
    return (
      <section className="container-fluid no-breadcrumbs">
        <Helper />
        <HeadText />
        <TableRec />
      </section>
    );
  }
}


module.exports = Events;
