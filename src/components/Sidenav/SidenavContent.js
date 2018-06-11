import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

class SidebarContent extends React.Component {
  constructor(props) {
    super(props);
    this.handleSideDropDown = this.handleSideDropDown.bind(this);
    this.collapseDropDown = this.collapseDropDown.bind(this);
    this.highlightActive = this.highlightActive.bind(this);

    this.configure = React.createRef();
    this.state = {
      completed: false,
      height: 1
    };
  }

  componentDidMount() {
    const { history } = this.props;
    const nav = this.nav;
    let dropDown = document.createElement('i');
    dropDown.appendChild(document.createTextNode('keyboard_arrow_right'));
    dropDown.classList.add('material-icons');
    let ch = nav.querySelectorAll('.prepend-icon');
    ch.forEach(prepend => {
      let dropDown = document.createElement('i');
      dropDown.appendChild(document.createTextNode('keyboard_arrow_right'));
      dropDown.classList.add('material-icons');
      console.log();
      let d = prepend.children[0];
      d.insertBefore(dropDown, d.firstChild);
    });
    const list = nav.querySelector('ul');
    const p = list.parentNode;
    let material_elem = document.createElement('i');
    material_elem.appendChild(document.createTextNode('arrow_drop_down'));
    material_elem.classList.add('material-icons');
    material_elem.classList.add('icon-has-ul');
    p.appendChild(material_elem);
    const As = p.children[0];
    As.addEventListener('click', e => {
      console.log('clicked As');
      e.preventDefault();
    });
    console.log('ass');

    const currentLocation = history.location;
    this.highlightActive(currentLocation.pathname);
    history.listen(location => {
      this.highlightActive(location.pathname);
    });
    const slideTime = 250;
    nav.addEventListener('click', e => {
      const currentLocation = history.location;
      this.highlightActive(currentLocation.pathname);
      history.listen(location => {
        this.highlightActive(location.pathname);
      });
    });
  }
  highlightActive(pathname) {
    const links = this.nav.querySelectorAll('a');
    const path = `#${pathname}`;
    links.forEach(i => {
      let p = i.parentNode;
      let href = i.getAttribute('href');
      if (p.classList.contains('active')) {
        p.classList.remove('active');
      }
      if (path.indexOf(href) === 0) {
        p.classList.add('active');
      }
    });
  }

  handleSideDropDown() {
    const list = this.nav.querySelector('ul');
    const child = list.querySelectorAll('li');
    const p = list.querySelector('li').parentNode;
    const li = p.querySelector('li');
    let flag = this.state.completed;
    if (!flag) {
      this.setState({
        completed: !this.state.completed,
        height: 1
      });

      p.parentNode.classList.add('open');
      let i = 0,
        totalHeight = 10;
      this.i = setInterval(() => {
        p.style.height = `${i}px`;
        i += 5;
        if (i == 10) {
          const h = li.getBoundingClientRect().height;
          totalHeight = h * child.length;
        }
        if (i > totalHeight) {
          clearInterval(this.i);
        }
      }, 5);
    } else {
      this.collapseDropDown();
    }
  }
  collapseDropDown() {
    const list = this.nav.querySelector('ul');
    const child = list.querySelectorAll('li');
    const p = list.querySelector('li').parentNode;
    const li = p.querySelector('li');
    const h = li.getBoundingClientRect().height;
    let i = h * child.length;
    console.log('mslo');
    p.parentNode.classList.remove('open');

    this.i = setInterval(() => {
      p.style.height = `${i}px`;
      i -= 5;
      if (i < 0) {
        this.setState({
          completed: !this.state.completed,
          height: 1
        });
        clearInterval(this.i);
      }
    }, 5);
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
          {/* <i className="material-icons icon-has-ul">arrow_drop_down</i> */}
          <FlatButton onClick={this.handleSideDropDown} href="#/app/form">
            <i className="nav-icon material-icons">build</i>
            <span className="nav-text">Configure</span>
            <span className="badge badge-pill badge-info">6</span>
          </FlatButton>
          <ul
            style={{
              display: this.state.completed ? 'block' : 'none',
              height: this.state.height,
              overflow: 'hidden'
            }}
          >
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
            <span className="nav-text" ref={this.configure}>
              Reporting
            </span>
          </FlatButton>
        </li>
      </ul>
    );
  }
}

module.exports = withRouter(SidebarContent);
