/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import IconButton from 'material-ui/IconButton';
import ContentEdit from 'material-ui/svg-icons/content/create';
import ContentDelete from 'material-ui/svg-icons/content/delete-sweep';
import ContentSettings from 'material-ui/svg-icons/content/inbox';

// TODO add a tooltip
export default class Donors extends React.Component {
  render() {
    return (
      <div className="box box-transparent">
        <div className="box-header no-padding-h">Top Donors</div>
        <div className="box-body no-padding-h">
          <div className="box box-default table-box mdl-shadow--2dp">
            <table className="mdl-data-table" style={{whiteSpace: 'normal'}}>
              <tbody>
                <tr>
                  <td><small className="material-icons">gradegrade</small></td>
                  <td><b>John</b> Doe</td>
                  <td> <IconButton> <ContentEdit /> </IconButton> </td>
                  <td> <IconButton> <ContentSettings /> </IconButton> </td>
                  <td> <IconButton> <ContentDelete /> </IconButton> </td>
                </tr>
                <tr>
                  <td><small className="material-icons">grade</small></td>
                  <td><b>John</b> Krazinski</td>
                  <td> <IconButton> <ContentEdit /> </IconButton> </td>
                  <td> <IconButton> <ContentSettings /> </IconButton> </td>
                  <td> <IconButton> <ContentDelete /> </IconButton> </td>
                </tr>
                <tr>
                  <td><small className="material-icons">gradegradegrade</small></td>
                  <td><b>Johnathan</b> Bell</td>
                  <td> <IconButton> <ContentEdit /> </IconButton> </td>
                  <td> <IconButton> <ContentSettings /> </IconButton> </td>
                  <td> <IconButton> <ContentDelete /> </IconButton> </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    );
  }
}
