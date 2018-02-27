import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ColorPicker from '../../../components/colorPicker';
import NumField from '../../../components/numField';

class BoxPattern extends React.Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <SelectField
        floatingLabelText={this.props.label}
        value={this.state.value}
        onChange={this.handleChange}
      >
        <MenuItem value={1} primaryText="Diagonal" />
        <MenuItem value={2} primaryText="Grid" />
        <MenuItem value={3} primaryText="Grill" />
      </SelectField>
    );
  }
}
class RepeatPattern extends React.Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <SelectField
        floatingLabelText="Pattern Repeat"
        value={this.state.value}
        onChange={this.handleChange}
      >
        <MenuItem value={1} primaryText="No Repeat" />
        <MenuItem value={2} primaryText="Horizontal" />
        <MenuItem value={3} primaryText="Verticall" />
        <MenuItem value={4} primaryText="All MS" />
      </SelectField>
    );
  }
}
class SelectFonts extends React.Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <SelectField
        floatingLabelText="Font Family"
        value={this.state.value}
        onChange={this.handleChange}
      >
        <MenuItem value={1} primaryText="Arial" />
        <MenuItem value={2} primaryText="Helvetica" />
        <MenuItem value={3} primaryText="Verdana" />
        <MenuItem value={4} primaryText="Trebuchet MS" />
        <MenuItem value={5} primaryText="Georgia" />
        <MenuItem value={5} primaryText="Tahoma" />
        <MenuItem value={5} primaryText="Times New Roman" />
      </SelectField>
    );
  }
}
class ColorTable extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4">
            <ColorPicker r="61" g="68" b="255" text="canvas" />
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4">
            <ColorPicker r="74" g="125" b="217" text="top box" />
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4">
            <ColorPicker r="85" g="80" b="75" text="body text" />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4">
            <ColorPicker r="255" g="255" b="255" text="bottom footer text" />
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4">
            <ColorPicker r="86" g="162" b="2" text="form headlines" />
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4">
            <ColorPicker r="255" g="255" b="255" text="sidebar headlines" />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4">
            <ColorPicker r="1" g="132" b="255" text="sidebar top bg" />
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4">
            <ColorPicker r="226" g="226" b="213" text="sidebar cont text" />
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4">
            <ColorPicker r="226" g="226" b="213" text="sidebar cont bg" />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4">
            <ColorPicker r="51" g="51" b="51" text="top footer bg" />
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4">
            <ColorPicker r="240" g="240" b="232" text="top footer text" />
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4">
            <ColorPicker r="74" g="125" b="217" text="bottom footer bg" />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4">
            <ColorPicker r="66" g="139" b="202" text="body links" />
          </div>
        </div>
      </div>
    )
  }
}

class FormTable extends React.Component {
  render() {
    return (
      <div className="box box-default">
        <div className="box-body">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <h5>Colors</h5>
              <ColorTable />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <h5>Body Font</h5>
              <NumField min="10" start="10" label="Font Size" />
              <SelectFonts />
              <h5>Title Font</h5>
              <NumField min="10" start="28" label="Font Size" />
              <SelectFonts />
              <h5>Sub-Title Font</h5>
              <NumField min="10" start="20" label="Font Size" />
              <SelectFonts />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <h5>Patterns</h5>
              <BoxPattern label="Top Box Pattern" />
              <RepeatPattern />
              <div className="divider" />
              <BoxPattern label="Bottom Box Pattern" />
              <RepeatPattern />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = FormTable;
