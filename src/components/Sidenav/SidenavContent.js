import React from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import { Link, withRouter } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

function getParents(el, parentSelector /* optional */) {
  // If no parentSelector defined will bubble up all the way to *document*
  if (parentSelector === undefined) {
    parentSelector = document;
  }

  var parents = [];
  var p = el.parentNode;

  while (p !== parentSelector) {
    var o = p;
    parents.push(o);
    p = o.parentNode;
  }
  parents.push(parentSelector); // Push that parentSelector you wanted to stop at

  return parents;
}

class SidebarContent extends React.Component {
  componentDidMount() {
    const { history } = this.props;
    const nav = this.nav;
    console.log({ nav }, nav.querySelectorAll('.prepend-icon').childNodes);
    // this.ps = new PerfectScrollbar(nav);

    // Append icon to submenu
    // Append to child `div`
    nav
      .querySelectorAll('.prepend-icon')
      .reduce((nodes, element) => {
        nodes.push(...element.childNodes);
        console.log({ nodes });
        return nodes;
      }, [])
      .forEach(element => {
        element
          .querySelectorAll('div')
          .prepend('<i class="material-icons">keyboard_arrow_right</i>');
      });

    // AccordionNav
    const slideTime = 250;
    const lists = getParents(nav.find('ul'), 'li');
    lists.append('<i class="material-icons icon-has-ul">arrow_drop_down</i>');
    const As = lists.childNodes.find('a');

    // Disable A link that as ul
    As.addEventListener('click', event => event.preventDefault());

    // Accordion nav
    nav.addEventListener('click', e => {
      const target = e.target;
      const parentLi = target.closest('li'); // closest, insead of parent, so it still works when click on i icons
      if (parentLi) return; // return if doesn't click on li
      const subUl = parentLi.childNodes.find('ul');

      const depth = getParents(parentLi).length + 1;

      // filter out all elements (except target) at current depth or greater
      const allAtDepth = nav.find('ul').filter(function() {
        if (getParents(nav).length >= depth && this !== subUl.get(0)) {
          return true;
        }
        return false;
      });
      allAtDepth
        .slideUp(slideTime)
        .closest('li')
        .removeClass('open');

      // Toggle target
      if (parentLi.has('ul').length) {
        parentLi.classList.toggle('open');
      }
    });

    // HighlightActiveItems
    const links = nav.find('a');
    const currentLocation = history.location;
    function highlightActive(pathname) {
      const path = `#${pathname}`;

      links.foreach((i, link) => {
        const li = getParents(link, 'li')[0] || null;
        const href = link.setAttribute('href');
        // console.log(href);

        if (li.classList.contains('active')) {
          li.classList.remove('active');
        }
        if (path.indexOf(href) === 0) {
          li.classList.add('active');
        }
      });
    }
    highlightActive(currentLocation.pathname);
    history.listen(location => {
      highlightActive(location.pathname);
    });
  }

  componentWillUpdate() {
    this.ps.update();
  }

  componentWillUnmount() {
    this.ps.destroy();
  }

  render() {
    return (
      <ul
        className="nav"
        style={{ position: 'relative' }}
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
