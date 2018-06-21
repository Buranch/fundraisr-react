import React from 'react';
import { withRouter } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Avatar from '@material-ui/core/Avatar';

class NavRightList extends React.Component {
  state = {
    anchorEl: null
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleChange = (event, value) => {
    console.log('navRight changed ');
    this.props.history.push(value);
  };
  render() {
    return (
      <ul className="list-unstyled float-right">
        <li
          style={{
            margin: '10px'
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="assets/images/g1.jpg"
            aria-owns={this.state.anchorEl ? 'fade-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
          />
          <Menu
            id="fade-menu"
            anchorEl={this.state.anchorEl}
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleClose}
            style={{
              marginRight: '10px',
              lineHeight: '48px'
            }}
            TransitionComponent={Fade}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
          >
            <MenuItem
              component="a"
              href="#/app/dashboard"
              onClick={this.handleClose}
            >
              <ListItemIcon
                style={{
                  marginRight: '4px',
                  paddingRight: '8px'
                }}
              >
                <i className="material-icons">home</i>
              </ListItemIcon>
              <ListItemText
                style={{
                  fontSize: '14px',
                  padding: '0',
                  lineHeight: '48px'
                }}
                inset="inset"
                primary="Dashboard"
              />
            </MenuItem>

            <MenuItem
              component="a"
              href="#/app/page/about"
              onClick={this.handleClose}
            >
              <ListItemIcon
                style={{
                  marginRight: '4px',
                  paddingRight: '8px'
                }}
              >
                <i className="material-icons">person_outline</i>
              </ListItemIcon>
              <ListItemText
                style={{
                  fontSize: '14px',
                  padding: '0',
                  lineHeight: '48px'
                }}
                inset="inset"
                primary="Profile"
              />
            </MenuItem>

            <MenuItem component="a" href="/logout" onClick={this.handleClose}>
              <ListItemIcon
                style={{
                  marginRight: '4px',
                  paddingRight: '8px'
                }}
              >
                <i className="material-icons">forward</i>
              </ListItemIcon>
              <ListItemText
                style={{
                  fontSize: '14px',
                  padding: '0',
                  lineHeight: '48px'
                }}
                inset="inset"
                primary="About"
              />
            </MenuItem>
          </Menu>
        </li>
      </ul>
    );
  }
}

module.exports = withRouter(NavRightList);
