import React from 'react';
// import TextField from 'material-ui/TextField';
// import FlatButton from 'material-ui/FlatButton';
// import ContentRemove from 'material-ui/svg-icons/content/remove';
// import ContentAdd from 'material-ui/svg-icons/content/add';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ContentRemove from '@material-ui/icons/Remove';
import ContentAdd from '@material-ui/icons/Add';

const mWidthStyle = {
  minWidth: '135px'
};

class TextSection extends React.Component {
  clickHandler = e => {
    this.props.onDelete(this.props.num - 1);
  };
  headLineHandler = (e, newValue) => {
    this.props.onHeadLineChange(newValue, this.props.num - 1);
  };
  contentHandler = (e, newValue) => {
    this.props.onContentChange(newValue, this.props.num - 1);
  };
  cssHandler = (e, newValue) => {
    this.props.onCssChange(newValue, this.props.num - 1);
  };
  render() {
    return (
      <div className="bg-color-page col-xs-12 col-sm-6 col-md-4 box">
        <div className="box-body">
          <TextField
            hintText="HeadLine"
            onChange={this.headLineHandler}
            value={this.props.value.headLine}
          />
          <TextField
            onChange={this.contentHandler}
            hintText="<html> is ok. Lorem ipsum"
            multiLine
            rows={2}
            rowsMax={10}
            fullWidth
            value={this.props.value.content}
          />
          <TextField
            floatingLabelText="CSS Class"
            onChange={this.cssHandler}
            value={this.props.value.css}
          />
          <div className="text-right">
            <FlatButton
              style={mWidthStyle}
              onClick={this.clickHandler}
              label="Delete"
              labelPosition="after"
              primary
              icon={<ContentRemove />}
            />
          </div>
        </div>
      </div>
    );
  }
}
class SidebarSections extends React.Component {
  state = {
    array: [{ headLine: '', css: '', content: '' }]
  };

  addHandler = () => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev.push({ headLine: '', css: '', content: '' });
      return {
        array: prev
      };
    });
  };
  removeHandler = num => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev.splice(num, 1);
      return {
        array: prev
      };
    });
  };
  headLineHandler = (newValue, num) => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev[num].headLine = newValue;
      return {
        array: prev
      };
    });
  };
  cssHandler = (newValue, num) => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev[num].css = newValue;
      return {
        array: prev
      };
    });
  };
  contentHandler = (newValue, num) => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev[num].content = newValue;
      return {
        array: prev
      };
    });
  };

  render() {
    this.headLineHandler = this.headLineHandler.bind(this);
    this.cssHandler = this.cssHandler.bind(this);
    this.contentHandler = this.contentHandler.bind(this);

    const elems = [];
    for (let i = 0; i < this.state.array.length; i++) {
      elems.push(
        <TextSection
          value={this.state.array[i]}
          key={i}
          num={i + 1}
          onDelete={this.removeHandler}
          onCssChange={this.cssHandler}
          onHeadLineChange={this.headLineHandler}
          onContentChange={this.contentHandler}
        />
      );
    }

    return (
      <div>
        <div className="box box-default">
          <div className="box-body">
            <Button
              onClick={this.addHandler}
              style={mWidthStyle}
              label="Addresses"
              labelPosition="after"
              primary
              icon={<ContentAdd />}
            />
            <br />
            <div className="row">{elems}</div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = SidebarSections;
