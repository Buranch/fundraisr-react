import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import APPCONFIG from 'constants/Config';
import NavLeftList from './NavLeftList';
import NavRightList from './NavRightList';

class Header extends React.Component {
  handleSidebarClick = () => {
    var element = document.getElementById('body');
    element.classList.toggle('sidebar-mobile-open');
  };

  render() {
    const { isFixedHeader, colorOption } = this.props;

    return (
      <section className="app-header">
        <div
          className={classnames('app-header-inner', {
            'bg-color-light':
              ['11', '12', '13', '14', '15', '16', '21'].indexOf(colorOption) >=
              0,
            'bg-color-dark': colorOption === '31',
            'bg-color-primary': ['22', '32'].indexOf(colorOption) >= 0,
            'bg-color-success': ['23', '33'].indexOf(colorOption) >= 0,
            'bg-color-info': ['24', '34'].indexOf(colorOption) >= 0,
            'bg-color-warning': ['25', '35'].indexOf(colorOption) >= 0,
            'bg-color-danger': ['26', '36'].indexOf(colorOption) >= 0
          })}
        >
          <div className="d-lg-none d-xl-none float-left">
            <a
              href="javascript:;"
              className="md-button header-icon toggle-sidebar-btn"
              onClick={this.handleSidebarClick}
            >
              <i className="material-icons">menu</i>
            </a>
          </div>

          <div className="brand d-none d-lg-inline-block d-xl-inline-block">
            <h2>
              <Link to="/">{APPCONFIG.brand}</Link>
            </h2>
          </div>

          <div className="top-nav-left">
            <NavLeftList />
          </div>

          <div className="top-nav-right">
            <NavRightList />
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  colorOption: state.settings.colorOption,
  isFixedHeader: state.settings.isFixedHeader
});

module.exports = connect(mapStateToProps)(Header);
