import React from 'react';
import Helper from '../../../components/helper';
import HeadText from '../../../components/headText';
import Breadcrumb from '../../../components/breadcrumb';
import DonationTable from './table';

class DonationForm extends React.Component {
  render() {
    return (
      <section className="container-fluid no-breadcrumbs">
        <Helper />
        <HeadText pageName="Donation Forms" />
        <Breadcrumb
          path={
            <small>
              <a href="#app/dashboard">Dashboard</a> > Donation Forms
            </small>
          }
        />
        <DonationTable />
      </section>
    );
  }
}

module.exports = DonationForm;
