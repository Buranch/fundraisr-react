import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Avatar from '@material-ui/core/Avatar';

import { withRouter } from 'react-router-dom';

const HeaderIconButtonStyle = {
  width: '60px',
  height: '60px'
};

const badgeStyle = {
  marginTop: '14px'
};

class NavLeftList extends React.Component {
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
    this.props.history.push(value);
  };
  render() {
    return (
      <ul className="list-unstyled list-inline">
        <li className="list-inline-item">
          <Avatar
            alt="Remy Sharp"
            aria-owns={this.state.anchorEl ? 'fade-menu' : null}
            aria-haspopup="true"
            style={{
              top: '9px',
              background: 'white',
              color: 'black'
            }}
            onClick={this.handleClick}
          >
            <i className="material-icons">notifications_none</i>
          </Avatar>

          <Menu
            id="fade-menu"
            anchorEl={this.state.anchorEl}
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleClose}
            TransitionComponent={Fade}
            style={{
              marginTop: '40px',
              marginLeft: '60px'
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
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
                  paddingRight: '10px'
                }}
              >
                <i className="material-icons">mail_outline</i>
              </ListItemIcon>

              <ListItemText
                style={{
                  fontSize: '14px',
                  padding: '0',
                  paddingRight: '10px',
                  lineHeight: '48px'
                }}
                primary="Messages"
              />
              <ListItemIcon
                style={{
                  marginRight: '4px'
                }}
              >
                <span
                  style={badgeStyle}
                  className="badge badge-pill badge-danger"
                >
                  3
                </span>
              </ListItemIcon>
            </MenuItem>
            <MenuItem
              component="a"
              href="#/app/dashboard"
              onClick={this.handleClose}
            >
              <ListItemIcon
                style={{
                  marginRight: '4px',
                  paddingRight: '10px'
                }}
              >
                <i className="material-icons">perm_identity</i>
              </ListItemIcon>

              <ListItemText
                style={{
                  fontSize: '14px',
                  padding: '0',
                  lineHeight: '48px'
                }}
                primary="Profile"
              />
            </MenuItem>

            <MenuItem
              component="a"
              href="#/app/dashboard"
              onClick={this.handleClose}
            >
              <ListItemIcon
                style={{
                  marginRight: '4px',
                  paddingRight: '10px'
                }}
              >
                <i className="material-icons">settings</i>
              </ListItemIcon>

              <ListItemText
                style={{
                  fontSize: '14px',
                  padding: '0',
                  lineHeight: '48px'
                }}
                primary="Settings"
              />
            </MenuItem>
          </Menu>
        </li>
      </ul>
    );
  }
}

module.exports = withRouter(NavLeftList);
