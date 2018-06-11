import React from 'react';
// import TextField from 'material-ui/TextField';
// import FlatButton from 'material-ui/FlatButton';
// import IconButton from 'material-ui/IconButton';
// import ContentRemove from 'material-ui/svg-icons/content/remove';
// import SelectField from 'material-ui/SelectField';
// import MenuItem from 'material-ui/MenuItem';
// import SearchIcon from 'material-ui/svg-icons/action/search';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ContentRemove from '@material-ui/icons/Remove';
import SelectField from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';

const mWidthStyle = {
  minWidth: '135px'
};
const styles = {
  textFieldStyle: { top: '-17px', width: '170px' },
  tagCheckBoxStyle: { width: '180px' },
  optionCheckBoxStyle: { width: '180px' }
};

class Elem extends React.Component {
  props = {
    value: { item: '', event: null, request: null },
    num: 0,
    onDelete: idx => {},
    onItemChange: (value, idx) => {},
    onEventChange: (value, idx) => {},
    onRequestChange: (value, idx) => {},
    canRemove: false
  };

  clickHandler = e => {
    this.props.onDelete(this.props.num - 1);
  };

  typeOfItemHandler = (e, index, newValue) => {
    this.props.onItemChange(newValue, this.props.num - 1);
  };
  typeOfSearchHandler = (e, index, newValue) => {
    this.props.onEventChange(newValue, this.props.num - 1);
  };
  requestHandler = (e, newValue) => {
    this.props.onRequestChange(newValue, this.props.num - 1);
  };

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="Tag"
          value={this.props.value.item}
          onChange={this.typeOfItemHandler}
          style={styles.tagCheckBoxStyle}
          key={`${this.props.num}item`}
        >
          <MenuItem value="firstName" primaryText="First Name" />
          <MenuItem value="lastName" primaryText="Last Name" />
          <MenuItem value="companyName" primaryText="Company Name" />
          <MenuItem value="eMail" primaryText="eMail" />
          <MenuItem value="city" primaryText="City" />
          <MenuItem value="state" primaryText="State" />
          <MenuItem value="zipPostalCode" primaryText="Zip/Postal Code" />
          <MenuItem value="supporterId" primaryText="Supporter ID" />
          <MenuItem value="alternateId" primaryText="Alternate ID" />
          <MenuItem value="specialFlag" primaryText="Special Flag" />
        </SelectField>
        <span className="space" />
        <SelectField
          floatingLabelText="option"
          key={`${this.props.num}event`}
          value={this.props.value.event}
          style={styles.optionCheckBoxStyle}
          onChange={this.typeOfSearchHandler}
        >
          <MenuItem value="startWith" primaryText="Start With" />
          <MenuItem value="equal" primaryText="Equal" />
          <MenuItem value="contains" primaryText="Contains" />
          <MenuItem value="notContain" primaryText="Not Contain" />
          <MenuItem value="containsAnyOf" primaryText="Contains Any Of" />
          <MenuItem value="containsAllOf" primaryText="Contains All Of" />
        </SelectField>
        <span className="space" />
        <TextField
          style={styles.textFieldStyle}
          value={this.props.value.request}
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
    array: [{ value: { item: 'firstName', event: 'startWith', request: '' } }]
  };

  AddHandler = () => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev.push({ item: 'firstName', event: 'startWith', request: '' });
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
      return {
        style: prevState.style,
        array: prev
      };
    });
  };
  RemoveAllHandler = () => {
    this.setState({
      array: [{ value: { item: 'firstName', event: 'startWith', request: '' } }]
    });
  };
  ItemHandler = (newValue, num) => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev[num].item = newValue;
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
              onClick={this.AddHandler}
              style={mWidthStyle}
              label="Add Filter"
              // labelPosition="after"
              color="primary"
            >
              Add Filter
            </Button>
            <Button
              onClick={this.RemoveAllHandler}
              style={mWidthStyle}
              label="Show All"
              // labelPosition="after"
              color="primary"
            >
              Show All
            </Button>
            <Button
              onClick={this.props.onSearch ? this.props.onSearch : null}
              style={mWidthStyle}
              label="Search"
              labelPosition="after"
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

module.exports = FilterManager;
