import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ContentRemove from '@material-ui/icons/Remove';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

const mWidthStyle = {
  color: '#00bcd4',
  minWidth: '135px',
  fontSize: '15px'
};

const styles = {
  textFieldStyle: { top: '5px', width: '170px' },
  tagCheckBoxStyle: { width: '180px' },
  optionCheckBoxStyle: { width: '180px' }
};

class Elem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // item: this.props.value.value.item,
      item: '',
      event: null,
      request: null
      // item: '',
      // event: this.props.value.value.event,
      // request: this.props.value.value.request
    };
    props = {
      value: {
        item: '',
        event: null,
        request: null
      },
      num: 0,
      onDelete: idx => {},
      onItemChange: (value, idx) => {},
      onEventChange: (value, idx) => {},
      onRequestChange: (value, idx) => {},
      canRemove: false
    };
  }
  clickHandler = e => {
    this.props.onDelete(this.props.num - 1);
    console.log('delete');
  };
  typeOfItemHandler = (e, index, newValue) => {
    console.log('item changed');
    this.setState({ item: e.target.value });
    this.props.onItemChange(e.target.value, this.props.num - 1);
  };
  typeOfSearchHandler = (e, index, newValue) => {
    this.setState({ event: e.target.value });
    this.props.onEventChange(e.target.value, this.props.num - 1);
  };
  requestHandler = (e, newValue) => {
    this.setState({ request: e.target.value });
    console.log('requestHandler');

    this.props.onRequestChange(e.target.value, this.props.num - 1);
  };
  render() {
    return (
      <div>
        <Select
          value={this.state.item}
          onChange={this.typeOfItemHandler}
          style={styles.tagCheckBoxStyle}
          key={`${this.props.num}item`}
        >
          <MenuItem value="profile">Profile</MenuItem>
          <MenuItem value="firstName">First Name</MenuItem>
          <MenuItem value="lastName">Last Name </MenuItem>
          <MenuItem value="companyName">Company Name</MenuItem>
          <MenuItem value="email">eMail</MenuItem>
          <MenuItem value="city">City</MenuItem>
          <MenuItem value="state">State</MenuItem>
          <MenuItem value="zipPostalCode">Zip/Postal Code</MenuItem>
          <MenuItem value="supporterId">Supporter ID</MenuItem>
          <MenuItem value="alternateId">Alternate ID</MenuItem>
          <MenuItem value="specialFlag">Special Flag</MenuItem>
        </Select>
        <span className="space" />
        <Select
          label="option"
          key={`${this.props.num}event`}
          value={this.state.event}
          style={styles.optionCheckBoxStyle}
          onChange={this.typeOfSearchHandler}
        >
          <MenuItem value="startWith">Start With</MenuItem>
          <MenuItem value="equal">Equal</MenuItem>
          <MenuItem value="contains">Contains</MenuItem>
          <MenuItem value="notContain">Not Contain</MenuItem>
          <MenuItem value="containsAnyOf">Contains Any Of</MenuItem>
          <MenuItem value="containsAllOf">Contains All Of</MenuItem>
        </Select>
        <span className="space" />
        <TextField
          style={styles.textFieldStyle}
          value={this.state.request}
          onChange={this.requestHandler}
          key={`${this.props.num}request`}
        />

        {this.props.canRemove && (
          <IconButton onClick={this.clickHandler}>
            {' '}
            <ContentRemove />{' '}
          </IconButton>
        )}
      </div>
    );
  }
}

class FilterManager extends React.Component {
  state = {
    array: [{ item: '', event: '', request: '' }]
  };

  AddHandler = () => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      // prev.push({ item: 'firstName', event: 'startWith', request: '' });
      prev.push({
        item: '',
        event: '',
        request: ''
      });

      console.log(prev);
      return {
        style: prevState.style,
        array: prev
      };
    });
  };
  RemoveHandler = num => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev.splice(num, 1);
      this.props.onFilterChange(prev);

      return {
        style: prevState.style,
        array: prev
      };
    });
  };
  RemoveAllHandler = () => {
    this.props.onFilterChange([]);
    this.setState({
      array: []
    });
  };
  ItemHandler = (newValue, num) => {
    console.log('ItemHandler ');
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev[num].item = newValue;
      this.props.onFilterChange(prev);
      return {
        style: prevState.style,
        array: prev
      };
    });
  };
  EventHandler = (newValue, num) => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev[num].event = newValue;
      this.props.onFilterChange(prev);
      return {
        style: prevState.style,
        array: prev
      };
    });
  };
  RequestHandler = (newValue, num) => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev[num].request = newValue;
      this.props.onFilterChange(prev);
      return {
        style: prevState.style,
        array: prev
      };
    });
  };

  render() {
    this.ItemHandler = this.ItemHandler.bind(this);
    this.EventHandler = this.EventHandler.bind(this);
    this.RequestHandler = this.RequestHandler.bind(this);

    const elems = [];
    for (let i = 0; i < this.state.array.length; i++) {
      elems.push(
        <Elem
          value={this.state.array[i]}
          key={i}
          num={i + 1}
          onDelete={this.RemoveHandler}
          onItemChange={this.ItemHandler}
          onEventChange={this.EventHandler}
          onRequestChange={this.RequestHandler}
          canRemove={this.state.array.length > 1}
        />
      );
    }
    return (
      <div className="box box-default" style={this.state.style}>
        <div className="box-body">
          <div className="text-right">
            <Button
              color="primary"
              onClick={this.AddHandler}
              style={mWidthStyle}
              label="Adddd Filter"
              // labelposition="after"
            >
              Add Filters
            </Button>
            <Button
              onClick={this.RemoveAllHandler}
              style={mWidthStyle}
              label="Show All"
              // labelposition="after"
            >
              Show All
            </Button>
            <Button
              onClick={this.props.onSearch ? this.props.onSearch : null}
              style={mWidthStyle}
              label="Search"
              // labelposition="after"
              color="primary"
            >
              <SearchIcon /> Search
            </Button>
          </div>
          {elems}
        </div>
      </div>
    );
  }
}

// module.exports = FilterManager;
export default withStyles(styles)(FilterManager);
