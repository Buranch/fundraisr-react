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
function createData(activity, subject, description, timestamp) {
  id += 1;
  return { id, activity, subject, description, timestamp };
}

const data = [
  createData(
    'Donation',
    'Event : Prouty 2008',
    'Amount : 100.00\nPayment Type : CREDIT\nSource : Event Side\nGift Type : Donation',
    '7/11/2008 1:08 PM'
  ),
  createData(
    'Registration',
    'Event : 2014 Reach for the Peaks - Moosilauke',
    'Amount : 255.00\nPayment Type : CREDIT\nSource : Event Side',
    '9/29/2014 1:17 PM'
  ),
  createData(
    'Registration',
    'Event : 2013 Reach for the Peaks - Kilimanjaro',
    'Amount : 500.00\nPayment Type : CREDIT\nSource : Event Side',
    '10/18/2013 8:41 AM'
  ),
  createData(
    'Donation',
    'Event : 2013 Reach for the Peaks - Kilimanjaro',
    'Amount : 3803.00\nPayment Type : CREDIT\nSource : Event Side\nGift Type : Donation',
    '12/11/2013 9:56 AM'
  )
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Activity</CustomTableCell>
            <CustomTableCell>Subject</CustomTableCell>
            <CustomTableCell>Description</CustomTableCell>
            <CustomTableCell>TimeStamp</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow className={classes.row} key={n.id}>
                <CustomTableCell component="th" scope="row">
                  {n.activity}
                </CustomTableCell>
                <CustomTableCell>{n.subject}</CustomTableCell>
                <CustomTableCell>{n.description}</CustomTableCell>
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
