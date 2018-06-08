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
    inputLabel: 'Age',
    inputId: 'age',
    inputType: 'Text input'
  },
  {
    key: '2',
    inputLabel: 'Birth Day',
    inputId: 'birth-day',
    inputType: 'Text input'
  },
  {
    key: '3',
    inputLabel: 'Gender',
    inputId: 'gender',
    inputType: 'Radio Buttons'
  },
  {
    key: '4',
    inputLabel: 'Ethnicity',
    inputId: 'ethnicity',
    inputType: 'Select'
  },
  {
    key: '5',
    inputLabel: 'Religion',
    inputId: 'religion',
    inputType: 'Text input'
  },
  {
    key: '6',
    inputLabel: 'Marital Status',
    inputId: 'marital-status',
    inputType: 'Select'
  },
  {
    key: '7',
    inputLabel: 'Living',
    inputId: 'living',
    inputType: 'Radio Buttons'
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
        <h5>Personal Information > Demographics</h5>
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
