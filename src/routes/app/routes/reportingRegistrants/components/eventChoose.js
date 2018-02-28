import React from 'react';
import FlatButton from 'material-ui/FlatButton';
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
  type: 'event'
}, {
  key: 2,
  accountName: 'FundNation',
  description: 'FundNation is a non-profit group who Funds the Nation of the Needy',
  type: 'd. form'
}, {
  key: 3,
  accountName: 'March of Nickels',
  description: 'March of Nickels is a non-profit group that does things for a good reason',
  type: 'event'
}, {
  key: 4,
  accountName: 'Hoop Hopes',
  description: 'Hoop Hopes is a non-profit group who raises money for Basket Ball Scholorships for Inner City youth who would not normally have the oportunity for education.',
  type: 'd. form'
}, {
  key: 5,
  accountName: 'For Art',
  description: 'F.Art is a non-profit group dedicated to rasing money to support Art Programs in underfunded Schools',
  type: 'd. form'
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
const rowSelection = {};

class ChooseEvents extends React.Component {
  state = {
    individual: true,
    searchClicked: false,
    selectedCol: []
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

    return (
      <div>
        <h5>Choose Events</h5>
        <small>You may retrieve data in your report for one or more events. Select the Events you wish to report on, then Add the selections to the Selected Table by clicking the "Add" Button</small>
        <div className="text-center" style={controlPanelStyle}>
          <FlatButton onClick={this.ClickHandler} style={mWidthStyle} label="Choose Individual Initiatives" secondary={this.state.individual} />
          <FlatButton onClick={this.ClickHandler} style={mWidthStyle} label="Specify the type of Initiative" secondary={!this.state.individual} />
        </div>
        <FilterManager onSearch={this.searchHandler} />
        <Table
          dataSource={this.state.searchClicked ? dataSource : []}
          columns={col}
          size="small"
          bordered
          rowSelection={rowSelection}
          pagination={{defaultCurrent: 1, total: 55, pageSize: 11 }}
        />
        { this.state.selectedCol.length > 0 ?
          <Table
            dataSource={this.state.selectedCol}
            columns={col}
            size="small"
            bordered
            rowSelection
            pagination={{defaultCurrent: 1, total: 55, pageSize: 11 }}
          />
          : null}
      </div>
    );
  }
}

module.exports = ChooseEvents;
