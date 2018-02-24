import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const mWidthStyle = {
  minWidth: '135px'
};
const styles = {
  textFieldStyle: { top: '-17px' }
};


class Elem extends React.Component {
  clickHandler = (e) => {
    e.preventDefault();
    this.props.onDelete(this.props.num - 1);
  };

  typeOfItemHandler = (e, newValue) => {
    e.preventDefault();
    this.props.onItemChange(newValue, this.props.num - 1);
  };
  typeOfSearchHandler = (e, newValue) => {
    e.preventDefault();
    this.props.onEventChange(newValue, this.props.num - 1);
  };
  requestHandler = (e, newValue) => {
    e.preventDefault();
    this.props.onRequestChange(newValue, this.props.num - 1);
  };
  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="Tag"
          value={this.props.value.item}
          onChange={this.typeOfItemHandler}
          key={`${this.props.num}item`}
        >
          <MenuItem value={0} primaryText="First Name" />
          <MenuItem value={1} primaryText="Last Name" />
          <MenuItem value={2} primaryText="Company Name" />
          <MenuItem value={3} primaryText="eMail" />
          <MenuItem value={4} primaryText="City" />
          <MenuItem value={5} primaryText="State" />
          <MenuItem value={6} primaryText="Zip/Postal Code" />
          <MenuItem value={7} primaryText="Supporter ID" />
          <MenuItem value={8} primaryText="Alternate ID" />
          <MenuItem value={9} primaryText="Special Flag" />
        </SelectField>
        <span className="space" />
        <SelectField
          floatingLabelText="option"
          key={`${this.props.num}event`}
          value={this.props.value.event}
          onChange={this.typeOfSearchHandler}
        >
          <MenuItem value={0} primaryText="Start With" />
          <MenuItem value={1} primaryText="Equal" />
          <MenuItem value={2} primaryText="Contains" />
          <MenuItem value={3} primaryText="Not Contain" />
          <MenuItem value={4} primaryText="Contains Any Of" />
          <MenuItem value={5} primaryText="Contains All Of" />
        </SelectField>
        <span className="space" />
        <TextField style={styles.textFieldStyle} value={this.props.value.request} onChange={this.requestHandler} key={`${this.props.num}request`} />
        <IconButton onClick={this.clickHandler} > <ContentRemove /> </IconButton>
      </div>
    );
  }
}

class FilterManager extends React.Component {
  state = {
    array: [],
    firstElem: {value: {item: 'firstName', event: 'startWith'}}
  };

  AddHandler = () => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev.push({item: '', event: '', request: ''});
      return {
        style: prevState.style,
        array: prev
      };
    });
  };
  RemoveHandler = (num) => {
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
      array: []
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
  FirstItemHandler = (e, newValue) => {
    e.preventDefault();
    this.setState((prevState, props) => {
      const prev = prevState.firstElem;
      prev.value.item = newValue;
      return {
        firstElem: prev
      };
    });
  };
  FirstEventHandler = (e, newValue) => {
    e.preventDefault();
    this.setState((prevState, props) => {
      const prev = prevState.firstElem;
      prev.value.event = newValue;
      return {
        firstElem: prev
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
        />
      );
    }

    return (
      <div className="box box-default" style={this.state.style}>
        <div className="box-body">
          <div className="text-right">
            <FlatButton onClick={this.AddHandler} style={mWidthStyle} label="Add Filter" labelPosition="after" primary />
            <FlatButton onClick={this.RemoveAllHandler} style={mWidthStyle} label="Show All" labelPosition="after" primary />
            <FlatButton style={mWidthStyle} label="Search" labelPosition="after" primary />
          </div>

          <div>
            <SelectField
              onChange={this.FirstItemHandler}
              floatingLabelText="Tag"
              key="-1item"
              value={this.state.firstElem.value.item || 0}
            >
              <MenuItem value={'firstName'} primaryText="First Name" />
              <MenuItem value={1} primaryText="Last Name" />
              <MenuItem value={2} primaryText="Company Name" />
              <MenuItem value={3} primaryText="eMail" />
              <MenuItem value={4} primaryText="City" />
              <MenuItem value={5} primaryText="State" />
              <MenuItem value={6} primaryText="Zip/Postal Code" />
              <MenuItem value={7} primaryText="Supporter ID" />
              <MenuItem value={8} primaryText="Alternate ID" />
              <MenuItem value={9} primaryText="Special Flag" />
            </SelectField>
            <span className="space" />
            <SelectField
              value={this.state.firstElem.value.event || 0}
              onChange={this.FirstEventHandler}
              floatingLabelText="option"
              key="-1event"
            >
              <MenuItem value={'startWith'} primaryText="Start With" />
              <MenuItem value={1} primaryText="Equal" />
              <MenuItem value={2} primaryText="Contains" />
              <MenuItem value={3} primaryText="Not Contain" />
              <MenuItem value={4} primaryText="Contains Any Of" />
              <MenuItem value={5} primaryText="Contains All Of" />
            </SelectField>
            <span className="space" />
            <TextField key="-1request" style={styles.textFieldStyle} />
          </div>
          {elems}
        </div>
      </div>
    );
  }
}

module.exports = FilterManager;
