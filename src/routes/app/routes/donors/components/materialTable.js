import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';

let counter = 0;
function createData(
  firstName,
  lastName,
  email,
  companyName,
  address,
  city,
  state,
  zip
) {
  counter += 1;
  return {
    id: counter,
    firstName,
    lastName,
    email,
    companyName,
    address,
    city,
    state,
    zip
  };
}

function createData2(obj) {
  obj['id'] = counter++;
  return obj;
}

const columnData = [
  {
    id: 'firstName',
    numeric: false,
    disablePadding: true,
    label: 'First Name'
  },
  { id: 'lastName', numeric: false, disablePadding: false, label: 'Last Name' },
  { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
  {
    id: 'companyName',
    numeric: false,
    disablePadding: false,
    label: 'Company Name'
  },
  { id: 'address', numeric: false, disablePadding: false, label: 'Address' },
  { id: 'city', numeric: false, disablePadding: false, label: 'City' },
  { id: 'state', numeric: false, disablePadding: false, label: 'State' },
  { id: 'zip', numeric: true, disablePadding: false, label: 'Zip' }
];

const dataSource = [
  {
    id: '1',
    firstName: 'Optimus',
    lastName: 'Prime',
    email: 'opp@mail.com',
    companyName: 'Non-profit America',
    address: '1357 Winners Circle',
    city: 'Donerville',
    state: 'CA',
    zip: '92110'
  },
  {
    id: '2',
    firstName: 'Daffy',
    lastName: 'Duck',
    email: 'dafDuck@mail.com',
    companyName: 'Ducky Dollars',
    address: '1 Lilly Lane',
    city: 'Duckville',
    state: 'CA',
    zip: '92345'
  },
  {
    id: '3',
    firstName: 'Betty',
    lastName: 'Boop',
    email: 'bboop@mail.com',
    companyName: 'Betty Bucks',
    address: '12 Boop Blvd',
    city: 'Betyington',
    state: 'CA',
    zip: '98756'
  },
  {
    id: '4',
    firstName: 'Jonas',
    lastName: 'Grumby',
    email: 'theskipper@mail.com',
    companyName: 'Minnow Money',
    address: '3 Gilli Lane',
    city: 'Island',
    state: 'CA',
    zip: '91654'
  },
  {
    id: '5',
    firstName: 'Super',
    lastName: 'Luidgi',
    email: 'sluigi@mail.com',
    companyName: '1-Up',
    address: '347 Castle Lane',
    city: 'Superland',
    state: 'CA',
    zip: '99876'
  },
  {
    id: '6',
    firstName: 'Jim',
    lastName: 'Magoo',
    email: 'mrmagoo@mail.com',
    companyName: 'Rag-Time',
    address: '657 Bear St',
    city: 'Gooville',
    state: 'CA',
    zip: '98734'
  },
  {
    id: '7',
    firstName: 'George',
    lastName: 'Jetson',
    email: 'gjett@mail.com',
    companyName: 'RUDI',
    address: '456 Space Lane',
    city: 'Space',
    state: 'CP',
    zip: 'X2148'
  },
  {
    id: '8',
    firstName: 'Bobby',
    lastName: 'Hill',
    email: 'bhill@mail.com',
    companyName: 'Sugarland Propane',
    address: '124 Rainey St',
    city: 'Arlen',
    state: 'TX',
    zip: '91993'
  },
  {
    id: '9',
    firstName: 'Eunice',
    lastName: 'Howell',
    email: 'lovey@mail.com',
    companyName: 'TH3 Industries',
    address: '128 High Lane',
    city: 'Island',
    state: 'CA',
    zip: '98376'
  },
  {
    id: '10',
    firstName: 'Bob',
    lastName: 'Denver',
    email: 'gilligan@mail.com',
    companyName: 'Minnow Money',
    address: '3.5 Gilli Lane',
    city: 'Island',
    state: 'CA',
    zip: '91654'
  }
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount
    } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {columnData.map(column => {
            return (
              <TableCell
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === column.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  spacer: {
    flex: '1 1 100%'
  },
  actions: {
    color: theme.palette.text.secondary
  },
  title: {
    flex: '0 0 auto'
  }
});

let EnhancedTableToolbar = props => {
  const { numSelected, classes } = props;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subheading">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="title" id="tableTitle">
            Nutrition
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 1020
  },
  tableWrapper: {
    overflowX: 'auto'
  }
});

class EnhancedTable extends React.Component {
  constructor(props) {
    super(props);
    console.log('enahanced');

    this.callAPI = this.callAPI.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.state = {
      order: 'asc',
      orderBy: 'firstName',
      selected: [],
      loaded: false,
      data: [],
      backup: [],
      filtered: [],
      page: 0,
      rowsPerPage: 5,
      filter: []
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        filter: nextProps.filter
      },
      () => {
        console.log('propsChanged');
        this.handleFilter();
      }
    );
  }

  handleFilter() {
    console.log('handleFilter');
    console.log(this.state.filter);
    var fromData = false;
    var filtered = this.state.backup;
    if (this.state.filter.length == 0) {
      this.setState({
        data: this.state.backup
      });
      return;
    }

    this.state.filter.forEach(filter => {
      if (filter.event == '' || filter.item == '' || filter.request == '') {
        console.log('returing');
        return;
      }

      switch (filter.event) {
        case 'startWith':
          filtered = filtered.filter(word => {
            return word[filter.item]
              .toLowerCase()
              .startsWith(filter.request.toLowerCase());
          });
          break;
        case 'equal':
          filtered = filtered.filter(
            word =>
              word[filter.item].toLowerCase() == filter.request.toLowerCase()
          );
          break;
        case 'contains':
          filtered = filtered.filter(word => {
            return word[filter.item]
              .toLowerCase()
              .includes(filter.request.toLowerCase());
          });
          break;
        case 'notContain':
          filtered = filtered.filter(word => {
            return !word[filter.item]
              .toLowerCase()
              .includes(filter.request.toLowerCase());
          });
          break;
        case 'containsAnyOf':
          filtered = filtered.filter(word => {
            return word[filter.item]
              .toLowerCase()
              .indexOf(filter.request.toLowerCase());
          });
          break;
        case 'containsAllOf':
          filtered = filtered.filter(
            word => word[filter.item] == filter.request
          );
          break;
      }
    });
    if (filtered.length != 0) {
      this.setState({
        data: filtered
      });
    } else if (!fromData) {
      // this.callAPI();
      this.setState({
        data: filtered
      });
    }
  }
  //filters
  // startsWith
  // includes
  // string == anotherString (equals)
  // !includes for not includes
  // indexOf for contains any of
  // == for contians of all
  callAPI() {
    var url = 'http://localhost:2121';
    // var url = 'https://raw.githubusercontent.com/Buranch/demo/master/db.json';
    fetch(url)
      .then(results => {
        return results.json();
      })
      .then(data => {
        console.log(data);
        if (this.mounted) {
          let empty = [];
          data.forEach(el => {
            console.log(el);
            empty.push(createData2(el));
          });
          console.log('sup');
          this.setState({
            data: empty,
            backup: empty,
            loaded: true
          });
        }
      });
  }

  componentWillMount() {
    this.callAPI();
  }

  componentDidMount() {
    this.mounted = true;
  }
  componentWillUnmount() {
    this.mounted = false;
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    const data =
      order === 'desc'
        ? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
        : this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

    this.setState({ data, order, orderBy });
  };

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState({ selected: this.state.data.map(n => n.id) });
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    console.log('handleClick');
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    if (!this.state.loaded) {
      return <p>Loading.....</p>;
    } else {
      const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

      return (
        <Paper className={classes.root}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <div className={classes.tableWrapper}>
            <Table className={classes.table} aria-labelledby="tableTitle">
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={this.handleSelectAllClick}
                onRequestSort={this.handleRequestSort}
                rowCount={data.length}
              />
              <TableBody>
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(n => {
                    const isSelected = this.isSelected(n.id);
                    return (
                      <TableRow
                        hover
                        onClick={event => this.handleClick(event, n.id)}
                        role="checkbox"
                        aria-checked={isSelected}
                        tabIndex={-1}
                        key={n.id}
                        selected={isSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox checked={isSelected} />
                        </TableCell>
                        <TableCell component="th" scope="row" padding="none">
                          {n.firstName}
                        </TableCell>
                        <TableCell>
                          <a
                            href="#/app/donors-manage"
                            style={{ display: 'block' }}
                          >
                            {n.lastName}{' '}
                            <small
                              className="material-icons"
                              style={{ fontSize: '15px', float: 'right' }}
                            >
                              <a href="#/app/donors-manage">settings</a>
                            </small>
                          </a>
                        </TableCell>
                        <TableCell>{n.email}</TableCell>
                        <TableCell>{n.companyName}</TableCell>
                        <TableCell>{n.address}</TableCell>
                        <TableCell>{n.city}</TableCell>
                        <TableCell>{n.state}</TableCell>
                        <TableCell>{n.zip}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 49 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              'aria-label': 'Previous Page'
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page'
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Paper>
      );
    }
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EnhancedTable);
