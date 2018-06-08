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
    inputLabel: 'Suffix',
    inputId: 'donor-suffix',
    inputType: 'text input'
  },
  {
    key: '2',
    inputLabel: 'First Name',
    inputId: 'first-name',
    inputType: 'text input'
  },
  {
    key: '3',
    inputLabel: 'Middle Name',
    inputId: 'middle-name',
    inputType: 'text input'
  },
  {
    key: '4',
    inputLabel: 'Last Name',
    inputId: 'last-name',
    inputType: 'text input'
  },
  {
    key: '5',
    inputLabel: 'Nick Name',
    inputId: 'nick-name',
    inputType: 'text input'
  },
  {
    key: '6',
    inputLabel: 'Maiden Name',
    inputId: 'maiden-name',
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
        <h5>Donor Title</h5>
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
