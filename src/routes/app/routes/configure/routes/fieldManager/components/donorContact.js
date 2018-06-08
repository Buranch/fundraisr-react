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
    inputLabel: 'Home Phone',
    inputId: 'home-phone',
    inputType: 'text input'
  },
  {
    key: '2',
    inputLabel: 'Cell Phone',
    inputId: 'cell-phone',
    inputType: 'text input'
  },
  {
    key: '3',
    inputLabel: 'Business Phone',
    inputId: 'business-phone',
    inputType: 'text input'
  },
  {
    key: '4',
    inputLabel: 'eMail Address',
    inputId: 'email-address',
    inputType: 'text input'
  },
  {
    key: '5',
    inputLabel: 'Street Address',
    inputId: 'street-address',
    inputType: 'text input'
  },
  {
    key: '6',
    inputLabel: 'City',
    inputId: 'city',
    inputType: 'text input'
  },
  {
    key: '7',
    inputLabel: 'State',
    inputId: 'state',
    inputType: 'select'
  },
  {
    key: '8',
    inputLabel: 'Zip Code',
    inputId: 'zip-code',
    inputType: 'text input'
  }
];

const oneColumn = n => {
  const workText = n.toUpperCase();
  switch (workText) {
    case 'SELECT':
      return <span className="color-warning">{workText}</span>;
    case 'TEXT INPUT':
      return <span className="color-info">{workText}</span>;
    case 'CHECK BOX':
      return <span className="color-danger">{workText}</span>;
    default:
      return <span className="color-success">{workText}</span>;
  }
};

class DonationFormTable extends React.Component {
  render() {
    return (
      <div>
        <h5>Donor Contact</h5>
        <Table selectable={true}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Input Label</TableHeaderColumn>
              <TableHeaderColumn>Input ID</TableHeaderColumn>
              <TableHeaderColumn>Input Type</TableHeaderColumn>
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
                  <TableRowColumn>{n.inputLabel}</TableRowColumn>
                  <TableRowColumn>{n.inputId}</TableRowColumn>
                  <TableRowColumn>{oneColumn(n.inputType)}</TableRowColumn>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

module.exports = DonationFormTable;
