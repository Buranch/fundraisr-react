import React from 'react';
import Helper from './helper';
import Tabs from './tabs';

function getMonth(date) {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  return month[date.getMonth()];
}
const date = new Date();
const dateString = `${getMonth(date)} ${date.getDate()}, ${date.getFullYear()}`;

const HeadText = () => (
  <div className="row">
    <div className="col-sm-6">
      <h1 className="article-title">Bookkeeping</h1>
    </div>
    <div className="col-sm-6" style={{textAlign: 'right'}}>
      <h1 className="article-title">{dateString}</h1>
    </div>
  </div>
);


const fMan = () => (
  <section className="container-fluid no-breadcrumbs">
    <Helper />
    <HeadText />
    <Tabs />
  </section>
);

module.exports = fMan;