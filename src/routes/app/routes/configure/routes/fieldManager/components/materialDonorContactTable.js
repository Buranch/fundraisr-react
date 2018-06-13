import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
});

let id = 0;
function createData(inputLabel, inputID, inputType) {
  id += 1;
  return { id, name, inputLabel, inputID, inputType };
}

const data = [
  createData('Home Phone', 'home-phone', 'text input'),
  createData('Cell Phone', 'cell-phone', 'text input'),
  createData('Business Phone', 'business-phone', 'text input'),
  createData('eMail Address', 'email-address', 'text input'),
  createData('Street Address', 'street-address', 'text input'),
  createData('City', 'city', 'text input'),
  createData('State', 'state', 'select'),
  createData('Zip Code', 'zip-code', 'text input')
];

function onChangeStyle(text) {
  const workText = text.toUpperCase();
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
}

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Input Label</CustomTableCell>
            <CustomTableCell>Input ID</CustomTableCell>
            <CustomTableCell>Input Type</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow className={classes.row} key={n.id}>
                <CustomTableCell component="th" scope="row">
                  {n.inputLabel}
                </CustomTableCell>
                <CustomTableCell>{n.inputID}</CustomTableCell>
                <CustomTableCell>{onChangeStyle(n.inputType)}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTable);
