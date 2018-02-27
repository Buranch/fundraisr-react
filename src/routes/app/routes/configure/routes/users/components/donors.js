import React from 'react';
import Helper from '../../../../../components/helper';
import HeadText from '../../../../../components/headText';
import Breadcrumb from '../../../../../components/breadcrumb';
import DonorTable from './table';

class Donors extends React.Component {
  render() {
    return (
      <section className="container-fluid no-breadcrumbs">
        <Helper />
        <HeadText pageName="Users" />
        <Breadcrumb path={
          <small>
            <a href="#app/dashboard">Dashboard</a> >> Users
          </small>
        } />
        <DonorTable />
      </section>
    );
  }
}


module.exports = Donors;
