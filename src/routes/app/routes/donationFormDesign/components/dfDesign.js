import React from 'react';
import Helper from '../../../components/helper';
import ControlPanel from '../../../components/stickyControlPanel';
import HeadText from '../../../components/headText';
import Breadcrumb from '../../../components/breadcrumb';
import StyleTable from './styleTable';
import HeaderSelect from './headerSelect';
import SidebarSections from './sidebarSections';
import FooterMessage from './footerMessage';
import FooterMenu from './footerMenu';

class Design extends React.Component {
  render() {
    return (
      <section className="container-fluid no-breadcrumbs">
        <Helper />
        <HeadText pageName="Donation Form Design" />
        <Breadcrumb path={<small><a href="">Dashboard</a> >> <a href="">Donation Forms</a> >> <a href="">Manage Donation Forms</a> >> Donation Form Style</small>} />
        <ControlPanel />
        <StyleTable />
        <HeaderSelect />
        <SidebarSections />
        <FooterMessage />
        <FooterMenu />
      </section>
    );
  }
}


module.exports = Design;
