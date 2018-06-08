import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import 'jquery-slimscroll/jquery.slimscroll.min';

class SidebarContent extends React.Component {
  componentDidMount() {
    const { history } = this.props;
    const nav = this.nav;
    const $nav = $(nav);

    // scroll
    $nav.slimscroll({
      height: '100%'
    });

    // Append icon to submenu
    // Append to child `div`
    $nav
      .find('.prepend-icon')
      .children('div')
      .prepend('<i class="material-icons">keyboard_arrow_right</i>');

    // AccordionNav
    const slideTime = 250;
    const $lists = $nav.find('ul').parent('li');
    $lists.append('<i class="material-icons icon-has-ul">arrow_drop_down</i>');
    const $As = $lists.children('a');

    // Disable A link that has ul
    $As.on('click', event => event.preventDefault());

    // Accordion nav
    $nav.on('click', e => {
      const target = e.target;
      const $parentLi = $(target).closest('li'); // closest, insead of parent, so it still works when click on i icons
      if (!$parentLi.length) return; // return if doesn't click on li
      const $subUl = $parentLi.children('ul');

      // let depth = $subUl.parents().length; // but some li has no sub ul, so...
      const depth = $parentLi.parents().length + 1;

      // filter out all elements (except target) at current depth or greater
      const allAtDepth = $nav.find('ul').filter(function() {
        if ($(this).parents().length >= depth && this !== $subUl.get(0)) {
          return true;
        }
        return false;
      });
      allAtDepth
        .slideUp(slideTime)
        .closest('li')
        .removeClass('open');

      // Toggle target
      if ($parentLi.has('ul').length) {
        $parentLi.toggleClass('open');
      }
      $subUl.stop().slideToggle(slideTime);
    });

    // HighlightActiveItems
    const $links = $nav.find('a');
    const currentLocation = history.location;
    function highlightActive(pathname) {
      const path = `#${pathname}`;

      $links.each((i, link) => {
        const $link = $(link);
        const $li = $link.parent('li');
        const href = $link.attr('href');
        // console.log(href);

        if ($li.hasClass('active')) {
          $li.removeClass('active');
        }
        if (path.indexOf(href) === 0) {
          $li.addClass('active');
        }
      });
    }
    highlightActive(currentLocation.pathname);
    history.listen(location => {
      highlightActive(location.pathname);
    });
  }

  render() {
    return (
      <ul
        className="nav"
        ref={c => {
          this.nav = c;
        }}
      >
        <li className="nav-header">
          <span>Navigation</span>
        </li>
        <li>
          <FlatButton href="#/app/dashboard">
            <i className="nav-icon material-icons">dashboard</i>
            <span className="nav-text">Dashboard</span>
          </FlatButton>
        </li>
        <li>
          <FlatButton href="#/app/donors">
            <i className="nav-icon material-icons">face</i>
            <span className="nav-text">Donors</span>
          </FlatButton>
        </li>
        <li>
          <FlatButton href="#/app/events">
            <i className="nav-icon material-icons">event</i>
            <span className="nav-text">Events</span>
          </FlatButton>
        </li>
        <li>
          <FlatButton href="#/app/donation-forms">
            <i className="nav-icon material-icons">assignment</i>
            <span className="nav-text">Donation Forms</span>
          </FlatButton>
        </li>
        <li>
          <FlatButton href="#/app/form">
            <i className="nav-icon material-icons">build</i>
            <span className="nav-text">Configure</span>
            <span className="badge badge-pill badge-info">6</span>
          </FlatButton>
          <ul>
            <li>
              <FlatButton
                className="prepend-icon"
                href="#/app/configure/organization-info"
              >
                <span>Organization Information</span>
              </FlatButton>
            </li>
            <li>
              <FlatButton className="prepend-icon" href="#/app/configure/users">
                <span>Users</span>
              </FlatButton>
            </li>
            <li>
              <FlatButton
                className="prepend-icon"
                href="#/app/configure/field-manager"
              >
                <span>Field Manager</span>
              </FlatButton>
            </li>
            <li>
              <FlatButton
                className="prepend-icon"
                href="#/app/configure/payment-gateway"
              >
                <span>Payment Gateway</span>
              </FlatButton>
            </li>
            <li>
              <FlatButton
                className="prepend-icon"
                href="#/app/configure/mail-confirmations"
              >
                <span>eMail & Confirmations</span>
              </FlatButton>
            </li>
            <li>
              <FlatButton
                className="prepend-icon"
                href="#/app/configure/api-access"
              >
                <span>API Access</span>
              </FlatButton>
            </li>
          </ul>
        </li>
        <li>
          <FlatButton href="#/app/reporting">
            <i className="nav-icon material-icons">report_problem</i>
            <span className="nav-text">Reporting</span>
          </FlatButton>
        </li>
      </ul>
    );
  }
}

module.exports = withRouter(SidebarContent);
