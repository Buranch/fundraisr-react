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
function createData(template, description) {
  id += 1;
  return { id, template, description };
}

const data = [
  createData(
    'Registrant Listing',
    'This report provides access to detailed information about registrants of one or more events. It may be run for multi-tiered accounts.'
  ),
  createData(
    'Membership & Benefits Status Listing',
    'This report provides information about Memberships and Benefits associated with a contact.'
  ),
  createData(
    'Relationship Listing',
    'This report provides a list of contacts, their Giving Summary Information, and their relationships including relationship attributes, custom profile fields, and segmentation.'
  ),
  createData(
    'Registrant Listing',
    'This report provides access to detailed information about registrants of one or more events. It may be run for multi-tiered accounts.'
  ),
  createData(
    'Membership & Benefits Status Listing',
    'This report provides information about Memberships and Benefits associated with a contact.'
  ),
  createData(
    'Relationship Listing',
    'This report provides a list of contacts, their Giving Summary Information, and their relationships including relationship attributes, custom profile fields, and segmentation.'
  ),
  createData(
    'Registrant Listing',
    'This report provides access to detailed information about registrants of one or more events. It may be run for multi-tiered accounts.'
  ),
  createData(
    'Membership & Benefits Status Listing',
    'This report provides information about Memberships and Benefits associated with a contact.'
  ),
  createData(
    'Relationship Listing',
    'This report provides a list of contacts, their Giving Summary Information, and their relationships including relationship attributes, custom profile fields, and segmentation.'
  )
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Template</CustomTableCell>
            <CustomTableCell>Description</CustomTableCell>
            <CustomTableCell>Actions</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow className={classes.row} key={n.id}>
                <CustomTableCell component="th" scope="row">
                  <a href="#/app/reporting-registrant">{n.template}</a>
                </CustomTableCell>
                <CustomTableCell>{n.description}</CustomTableCell>
                <CustomTableCell>
                  <span>
                    <a href="#/app/reporting-registrant">Run</a>
                  </span>
                </CustomTableCell>
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
