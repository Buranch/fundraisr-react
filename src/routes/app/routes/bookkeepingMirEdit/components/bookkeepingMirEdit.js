import React from 'react';
import Helper from '../../../components/helper';
import HeadText from '../../../components/headText';
import Breadcrumb from '../../../components/breadcrumb';
import ControlTab from './tabs';


class Reports extends React.Component {
  render() {
    return (
      <section className="container-fluid no-breadcrumbs">
        <Helper />
        <HeadText pageName="Bookkeeping MIR EDIT" />
        <Breadcrumb path={<small>there will be path</small>} />
        <ControlTab />
      </section>
    );
  }
}


module.exports = Reports;
