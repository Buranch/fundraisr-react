import React from 'react';
import OrgHelper from './orgHelper';
import ControlPanel from './controlPanel';
import FormTable from './formTable';
import ControlTabs from './controlTabs';

function getMonth(date) {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  return month[date.getMonth()];
}
const date = new Date();
const dateString = `${getMonth(date)} ${date.getDate()}, ${date.getFullYear()}`;

const HeadText = () => (
  <div className="row">
    <div className="col-sm-6">
      <h1 className="article-title">Organisation information</h1>
    </div>
    <div className="col-sm-6" style={{textAlign: 'right'}}>
      <h1 className="article-title">{dateString}</h1>
    </div>
  </div>
);

const orgInfo = () => (
  <section className="container-fluid no-breadcrumbs">
    <OrgHelper />
    <HeadText />
    <ControlPanel />
    <FormTable />
    <ControlTabs />
  </section>
);

module.exports = orgInfo;
