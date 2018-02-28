import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import SearchIcon from 'material-ui/svg-icons/action/search';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Table} from 'antd';
import 'antd/dist/antd.css';
import FilterManager from '../../../components/filterManager';

const mWidthStyle = {
  minWidth: '135px'
};
const controlPanelStyle = {
  padding: '4px'
};
const smallIconsStyle = {
  fontSize: '15px', padding: '3px'
};

const dataSource = [{
  key: 1,
  accountName: 'Fun Funds',
  description: 'Fun Funds is a non-profit group dedicated to Raising Funds the Fun Way',
  type: 'event',
  num: 0
}, {
  key: 2,
  accountName: 'FundNation',
  description: 'FundNation is a non-profit group who Funds the Nation of the Needy',
  type: 'd. form',
  num: 1
}, {
  key: 3,
  accountName: 'March of Nickels',
  description: 'March of Nickels is a non-profit group that does things for a good reason',
  type: 'event',
  num: 2
}, {
  key: 4,
  accountName: 'Hoop Hopes',
  description: 'Hoop Hopes is a non-profit group who raises money for Basket Ball Scholorships for Inner City youth who would not normally have the oportunity for education.',
  type: 'd. form',
  num: 3
}, {
  key: 5,
  accountName: 'For Art',
  description: 'F.Art is a non-profit group dedicated to rasing money to support Art Programs in underfunded Schools',
  type: 'd. form',
  num: 4
}];
const col = [{
  title: 'Account Name',
  dataIndex: 'accountName',
  key: 'accountName',
}, {
  title: 'Description',
  dataIndex: 'description',
  key: 'description',
}, {
  title: 'Type',
  dataIndex: 'type',
  key: 'type',
  render: (text) => {
    const workText = text.toUpperCase();
    switch (workText) {
      case 'EVENT':
        return <span className="color-info">{workText}</span>;
      default:
        return <span className="color-danger">{workText}</span>;
    }
  }
}, {
  title: 'Actions',
  key: 'firstName',
  render: () => (
    <span>
      <a className="material-icons" style={smallIconsStyle} title="Add">add</a>
    </span>)
}];

class Date extends React.Component {
  state = {
    value: 'All Initatives',
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <SelectField
        floatingLabelText="Date Range"
        value={this.state.value}
        maxHeight={200}
        onChange={this.handleChange}
      >
        <MenuItem value="All Initatives" primaryText="All Initatives" />
        <MenuItem value="All Active Initatives" primaryText="All Active Initatives" />
        <MenuItem value="All Closed Initatives" primaryText="All Closed Initatives" />
      </SelectField>
    );
  }
}
class DateSel extends React.Component {
  state = {
    value: 'Donation Form',
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <SelectField
        floatingLabelText="Date Range"
        value={this.state.value}
        maxHeight={200}
        onChange={this.handleChange}
      >
        <MenuItem value="Donation Form" primaryText="Donation Form" />
        <MenuItem value="Events" primaryText="Events" />
      </SelectField>
    );
  }
}

class ChooseEvents extends React.Component {
  state = {
    selectedRowKeys: [],
    individual: true,
    searchClicked: false,
    selectedCol: []
  };

  start = () => {
    this.setState((prev, props) => {
      const collection = prev.selectedRowKeys.map(number => dataSource[number + 1]);
      // const newww = prev.selectedCol.concat(collection);
      return ({ selectedCol: collection, selectedRowKeys: []});
    });
  };

  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  };

  ClickHandler(e) {
    this.setState((prev, props) =>
      ({individual: !prev.individual}));
  }

  searchHandler() {
    this.setState({searchClicked: true});
  }

  render() {
    this.ClickHandler = this.ClickHandler.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
      <div>
        <h5>Choose Events</h5>
        <small>You may retrieve data in your report for one or more events. Select the Events you wish to report on, then Add the selections to the Selected Table by clicking the "Add" Button</small>
        <div className="text-center" style={controlPanelStyle}>
          <FlatButton onClick={this.ClickHandler} style={mWidthStyle} label="Choose Individual Initiatives" secondary={this.state.individual} />
          <FlatButton onClick={this.ClickHandler} style={mWidthStyle} label="Specify the type of Initiative" secondary={!this.state.individual} />
        </div>
        {
          this.state.individual ?
            <FilterManager onSearch={this.searchHandler} /> :
            <div className="box box-default">
              <div className="box-body">
                <Date />
                <span className="space" />
                <DateSel />
                <span className="space" />
                <FlatButton onClick={this.searchHandler} style={mWidthStyle} label="Search" icon={<SearchIcon />} primary />
              </div>
            </div>
        }
        <Table
          dataSource={this.state.searchClicked ? dataSource : []}
          columns={col}
          size="small"
          bordered
          rowSelection={rowSelection}
          pagination={{defaultCurrent: 1, total: 55, pageSize: 11 }}
        />
        <FlatButton icon={<AddIcon />} secondary onClick={this.start} disabled={!hasSelected} style={mWidthStyle} label="Add All" />
        <div style={{display: this.state.selectedCol.length > 0 ? 'block' : 'none'}}>
          <Table
            dataSource={this.state.selectedCol}
            columns={col}
            size="small"
            bordered
            pagination={{defaultCurrent: 1, total: 55, pageSize: 11 }}
          />
        </div>
      </div>
    );
  }
}

module.exports = ChooseEvents;
