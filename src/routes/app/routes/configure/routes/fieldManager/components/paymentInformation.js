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
    inputLabel: 'Payment Type',
    inputId: 'payment-type',
    inputType: 'Select'
  },
  {
    key: '2',
    inputLabel: 'Name on Card',
    inputId: 'name-on-card',
    inputType: 'Text input'
  },
  {
    key: '3',
    inputLabel: 'Card Number',
    inputId: 'card-number',
    inputType: 'Text input'
  },
  {
    key: '4',
    inputLabel: 'CCV Number',
    inputId: 'ccv-number',
    inputType: 'Text input'
  },
  {
    key: '5',
    inputLabel: 'Expiration Month',
    inputId: 'expiration-month',
    inputType: 'Select'
  },
  {
    key: '6',
    inputLabel: 'Expiration Year',
    inputId: 'expiration-year',
    inputType: 'Select'
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
        <h5>Payment Information</h5>
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
