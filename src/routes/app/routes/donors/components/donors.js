import React from 'react';
import Helper from '../../../components/helper';
import HeadText from '../../../components/headText';
import Breadcrumb from '../../../components/breadcrumb';
import DonorTable from './table';


class Donors extends React.Component {
  render() {
    return (
      <section className="container-fluid no-breadcrumbs">
        <Helper />
        <HeadText pageName="Donors" />
        <Breadcrumb path={
          <small>
            <a href="">Dashboard</a> >> Donors
          </small>
        } />
        <DonorTable />
      </section>
    );
  }
}


module.exports = Donors;
