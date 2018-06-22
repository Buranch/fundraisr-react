import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ContentEdit from '@material-ui/icons/Create';
import ContentDelete from '@material-ui/icons/DeleteSweep';
import ContentSettings from '@material-ui/icons/Inbox';

const style = {
  fontSize: '15px'
};

export default class Donors extends React.Component {
  render() {
    return (
      <div className="box box-default">
        <div className="box-header">Top Events</div>
        <div className="box-body">
          <small>This is a list of Top Performing Events</small>
          <div className="box box-default table-box mdl-shadow--2dp">
            <table
              className="mdl-data-table"
              style={{ whiteSpace: 'normal', tableLayout: 'fixed' }}
            >
              <tbody>
                <tr>
                  <td style={{ width: '30%', paddingLeft: '10px' }}>
                    <small
                      className="material-icons color-warning"
                      style={style}
                    >
                      gradegrade
                    </small>
                  </td>
                  <td className="text-left">Walk to the Cure</td>
                  <td style={{ width: '25%', paddingLeft: '10px' }}>
                    <small className="material-icons" style={style}>
                      <a href="">mode_edit</a> <a href="">settings</a>{' '}
                      <a href="">delete</a>
                    </small>
                  </td>
                </tr>

                <tr>
                  <td style={{ paddingLeft: '10px' }}>
                    <small
                      className="material-icons color-danger"
                      style={style}
                    >
                      grade
                    </small>
                  </td>
                  <td className="text-left">Ride to the Cure</td>
                  <td style={{ paddingLeft: '10px' }}>
                    <small className="material-icons" style={style}>
                      <a href="">mode_edit</a> <a href="">settings</a>{' '}
                      <a href="">delete</a>
                    </small>
                  </td>
                </tr>

                <tr>
                  <td style={{ paddingLeft: '10px' }}>
                    <small
                      className="material-icons color-primary"
                      style={style}
                    >
                      gradegradegrade
                    </small>
                  </td>
                  <td className="text-left">Community Cares Run</td>
                  <td style={{ paddingLeft: '10px' }}>
                    <small className="material-icons" style={style}>
                      <a href="">mode_edit</a> <a href="">settings</a>{' '}
                      <a href="">delete</a>
                    </small>
                  </td>
                </tr>

                <tr>
                  <td style={{ paddingLeft: '10px' }}>
                    <small
                      className="material-icons color-primary"
                      style={style}
                    >
                      gradegradegrade
                    </small>
                  </td>
                  <td className="text-left">High Hopes</td>
                  <td style={{ paddingLeft: '10px' }}>
                    <small className="material-icons" style={style}>
                      <a href="">mode_edit</a> <a href="">settings</a>{' '}
                      <a href="">delete</a>
                    </small>
                  </td>
                </tr>

                <tr>
                  <td style={{ paddingLeft: '10px' }}>
                    <small
                      className="material-icons color-warning"
                      style={style}
                    >
                      gradegrade
                    </small>
                  </td>
                  <td className="text-left">Crowd Sourcing</td>
                  <td style={{ paddingLeft: '10px' }}>
                    <small className="material-icons" style={style}>
                      <a href="">mode_edit</a> <a href="">settings</a>{' '}
                      <a href="">delete</a>
                    </small>
                  </td>
                </tr>

                <tr>
                  <td style={{ paddingLeft: '10px' }}>
                    <small
                      className="material-icons color-success"
                      style={style}
                    >
                      gradegradegradegrade
                    </small>
                  </td>
                  <td className="text-left">Raise FunDation</td>
                  <td style={{ paddingLeft: '10px' }}>
                    <small className="material-icons" style={style}>
                      <a href="">mode_edit</a> <a href="">settings</a>{' '}
                      <a href="">delete</a>
                    </small>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
