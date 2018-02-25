/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import IconButton from 'material-ui/IconButton';
import ContentEdit from 'material-ui/svg-icons/content/create';
import ContentDelete from 'material-ui/svg-icons/content/delete-sweep';
import ContentSettings from 'material-ui/svg-icons/content/inbox';

const style = {
  fontSize: '15px',
};

export default class Donors extends React.Component {
  render() {
    return (
      <div className="box box-default">
        <div className="box-header">Top Donors</div>
        <div className="box-body">
          <small>This is a list of Top Performing Donors.</small>
          <div className="box box-default table-box mdl-shadow--2dp">
            <table className="mdl-data-table" style={{whiteSpace: 'normal', tableLayout: 'fixed'}}>
              <tbody>
                <tr>
                  <td style={{width: '30%', paddingLeft: '10px'}}>
                    <small className="material-icons color-warning" style={style}>gradegrade</small>
                  </td>
                  <td className="text-left"><b>John</b> Doe</td>
                  <td style={{width: '25%', paddingLeft: '10px'}}>
                    <small className="material-icons" style={style}>
                      <a href="">mode_edit</a> <a href="">settings</a> <a href="">delete</a>
                    </small>
                  </td>
                </tr>

                <tr>
                  <td style={{paddingLeft: '10px'}}><small className="material-icons color-danger" style={style}>grade</small></td>
                  <td className="text-left"><b>John</b> Krazinski</td>
                  <td style={{paddingLeft: '10px'}}>
                    <small className="material-icons" style={style}>
                      <a href="">mode_edit</a> <a href="">settings</a> <a href="">delete</a>
                    </small>
                  </td>
                </tr>

                <tr>
                  <td style={{paddingLeft: '10px'}}><small className="material-icons color-primary" style={style}>gradegradegrade</small></td>
                  <td className="text-left"><b>Johnathan</b> Bell</td>
                  <td style={{paddingLeft: '10px'}}>
                    <small className="material-icons" style={style}>
                      <a href="">mode_edit</a> <a href="">settings</a> <a href="">delete</a>
                    </small>
                  </td>
                </tr>

                <tr>
                  <td style={{paddingLeft: '10px'}}><small className="material-icons color-primary" style={style}>gradegradegrade</small></td>
                  <td className="text-left"><b>John</b> Debogosrky</td>
                  <td style={{paddingLeft: '10px'}}>
                    <small className="material-icons" style={style}>
                      <a href="">mode_edit</a> <a href="">settings</a> <a href="">delete</a>
                    </small>
                  </td>
                </tr>

                <tr>
                  <td style={{paddingLeft: '10px'}}><small className="material-icons color-warning" style={style}>gradegrade</small></td>
                  <td className="text-left"><b>Johnathan</b> Bell</td>
                  <td style={{paddingLeft: '10px'}}>
                    <small className="material-icons" style={style}>
                      <a href="">mode_edit</a> <a href="">settings</a> <a href="">delete</a>
                    </small>
                  </td>
                </tr>

                <tr>
                  <td style={{paddingLeft: '10px'}}><small className="material-icons color-success" style={style}>gradegradegradegrade</small></td>
                  <td className="text-left"><b>Johnny</b> Haliday</td>
                  <td style={{paddingLeft: '10px'}}>
                    <small className="material-icons" style={style}>
                      <a href="">mode_edit</a> <a href="">settings</a> <a href="">delete</a>
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
