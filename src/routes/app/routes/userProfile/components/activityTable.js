import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

const dataSource = [
  {
    key: '1',
    action: 'Successful Login',
    notes: '',
    timestamp: '8/18/2014 1:08 PM'
  },
  {
    key: '2',
    action: 'Run Report',
    notes: 'Registrant Report',
    timestamp: '8/14/2014 1:17 PM'
  },
  {
    key: '3',
    action: 'Successful Login',
    notes: '',
    timestamp: '7/7/2014 8:41 AM'
  },
  {
    key: '4',
    action: 'Successful Login',
    notes: '',
    timestamp: '6/16/2014 9:56 AM'
  }
];

class DonationFormTable extends React.Component {
  render() {
    return (
      <Table selectable={true}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Action</TableHeaderColumn>
            <TableHeaderColumn>Notes</TableHeaderColumn>
            <TableHeaderColumn>Timestamp</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
          stripedRows={true}
          showRowHover={true}
        >
          {dataSource.map(n => {
            return (
              <TableRow key={n.key}>
                <TableRowColumn>{n.action}</TableRowColumn>
                <TableRowColumn>{n.notes}</TableRowColumn>
                <TableRowColumn>{n.timestamp}</TableRowColumn>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}

module.exports = DonationFormTable;
