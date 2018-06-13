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
function createData(action, notes, timestamp) {
  id += 1;
  return { id, action, notes, timestamp };
}

const data = [
  createData('Successful Login', '', '8/18/2014 1:08 PM'),
  createData('Run Report', 'Registrant Report', '8/14/2014 1:17 PM'),
  createData('Successful Login', '', '7/7/2014 8:41 AM'),
  createData('Successful Login', '', '6/16/2014 9:56 AM')
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Action</CustomTableCell>
            <CustomTableCell>Notes</CustomTableCell>
            <CustomTableCell>TimeStamp</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow className={classes.row} key={n.id}>
                <CustomTableCell component="th" scope="row">
                  {n.action}
                </CustomTableCell>
                <CustomTableCell>{n.notes}</CustomTableCell>
                <CustomTableCell>{n.timestamp}</CustomTableCell>
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
