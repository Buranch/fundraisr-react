import React from 'react';
import { Button, Collapse, Table } from 'antd';
import Checkbox from '@material-ui/core/Checkbox';

const Panel = Collapse.Panel;

class FormatStep extends React.Component {
  state = {
    allOptions: [
      { name: 'Account EIN', kind: 'standard', isChecked: false },
      { name: 'Account Name', kind: 'standard', isChecked: false },
      { name: 'Additional Fee 1', kind: 'standard', isChecked: false },
      { name: 'Additional Fee 2', kind: 'standard', isChecked: false },
      { name: 'Adoption', kind: 'standard', isChecked: false },
      { name: 'Tracking Number', kind: 'standard', isChecked: false },
      { name: 'Amount Due', kind: 'standard', isChecked: false },
      { name: 'Amount Paid', kind: 'standard', isChecked: false },
      { name: 'Capacity Limit', kind: 'standard', isChecked: false },
      { name: 'Capacity Status', kind: 'standard', isChecked: false },
      { name: 'Mobile Phone', kind: 'standard', isChecked: false },

      { name: 'Custom Field 1', kind: 'custom', isChecked: false },
      { name: 'Custom Field 2', kind: 'custom', isChecked: false },
      { name: 'Custom Field 3', kind: 'custom', isChecked: false },
      { name: 'Custom Field 4', kind: 'custom', isChecked: false },
      { name: 'Custom Field 5', kind: 'custom', isChecked: false },
      { name: 'Custom Field 6', kind: 'custom', isChecked: false },
      { name: 'Custom Field 7', kind: 'custom', isChecked: false },
      { name: 'Custom Field 8', kind: 'custom', isChecked: false },
      { name: 'Custom Field 9', kind: 'custom', isChecked: false },
      { name: 'Custom Field 10', kind: 'custom', isChecked: false },
      { name: 'Custom Field 11', kind: 'custom', isChecked: false },

      { name: 'Training Field 1', kind: 'training-1', isChecked: false },
      { name: 'Training Field 2', kind: 'training-1', isChecked: false },
      { name: 'Training Field 3', kind: 'training-1', isChecked: false },
      { name: 'Training Field 4', kind: 'training-1', isChecked: false },
      { name: 'Training Field 5', kind: 'training-1', isChecked: false },
      { name: 'Training Field 6', kind: 'training-1', isChecked: false },
      { name: 'Training Field 7', kind: 'training-1', isChecked: false },
      { name: 'Training Field 8', kind: 'training-1', isChecked: false },
      { name: 'Training Field 9', kind: 'training-1', isChecked: false },
      { name: 'Training Field 10', kind: 'training-1', isChecked: false },
      { name: 'Training Field 11', kind: 'training-1', isChecked: false },

      { name: 'Training Field a1', kind: 'training-2', isChecked: false },
      { name: 'Training Field a2', kind: 'training-2', isChecked: false },
      { name: 'Training Field a3', kind: 'training-2', isChecked: false },
      { name: 'Training Field a4', kind: 'training-2', isChecked: false },
      { name: 'Training Field a5', kind: 'training-2', isChecked: false },
      { name: 'Training Field a6', kind: 'training-2', isChecked: false },
      { name: 'Training Field a7', kind: 'training-2', isChecked: false },
      { name: 'Training Field a8', kind: 'training-2', isChecked: false },
      { name: 'Training Field a9', kind: 'training-2', isChecked: false },
      { name: 'Training Field a10', kind: 'training-2', isChecked: false },
      { name: 'Training Field a11', kind: 'training-2', isChecked: false }
    ]
  };

  createTableCols = onRemoveRow => {
    return [
      {
        title: 'Data Point',
        dataIndex: 'data-point',
        key: 'data-point'
      },
      {
        title: 'Sort',
        dataIndex: 'sort',
        key: 'sort'
      },
      {
        title: 'Group',
        dataIndex: 'group',
        key: 'group',
        render: () => <Checkbox />
      },
      {
        title: 'Remove',
        key: 'remove',
        render: a => (
          <Button icon="minus" onClick={() => onRemoveRow(a)}>
            Remove
          </Button>
        ),
        width: 100
      }
    ];
  };

  onCheckOption = (option, isChecked) => {
    this.setState({
      allOptions: this.state.allOptions.map(x => {
        if (x.name === option.name) {
          x.isChecked = isChecked;
        }
        return x;
      })
    });
  };

  renderCheckboxes = checkboxes => {
    return (
      <div className="row">
        {checkboxes.map(x => (
          <div className="col-md-6 col-sm-12" key={x.name}>
            <Checkbox
              label={x.name}
              checked={x.isChecked}
              onCheck={(e, isChecked) => this.onCheckOption(x, isChecked)}
            />
          </div>
        ))}
      </div>
    );
  };

  renderOptionsPanel = (panelLabel, panelKey, params) => {
    if (params.length === 1) {
      return (
        <Panel header={panelLabel} key={panelKey}>
          {this.renderCheckboxes(params[0].options)}
        </Panel>
      );
    } else {
      return (
        <Panel header={panelLabel} key={panelKey}>
          <Collapse bordered={false} defaultActiveKey={params.map(x => x.key)}>
            {params.map(param => {
              return (
                <Panel header={param.label} key={param.key}>
                  {this.renderCheckboxes(param.options)}
                </Panel>
              );
            })}
          </Collapse>
        </Panel>
      );
    }
  };

  removeFromSelectedRows = row => {
    this.onCheckOption({ name: row['data-point'] }, false);
  };

  getCheckedOptionsDataSource = () => {
    return this.state.allOptions.filter(x => x.isChecked).map(x => {
      return {
        'data-point': x.name,
        sort: 'Not Sorted',
        group: ''
      };
    });
  };

  getStandardFieldsOptions = () => {
    return this.state.allOptions.filter(x => x.kind === 'standard');
  };

  getCustomFieldsOptions = () => {
    return this.state.allOptions.filter(x => x.kind === 'custom');
  };

  getTraining1Options = () => {
    return this.state.allOptions.filter(x => x.kind === 'training-1');
  };

  getTraining2Options = () => {
    return this.state.allOptions.filter(x => x.kind === 'training-2');
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xl-6 col-lg-12">
            <Collapse accordion>
              {this.renderOptionsPanel('Standard Fields', 'standard-fields', [
                { options: this.getStandardFieldsOptions() }
              ])}
              {this.renderOptionsPanel(
                'All Custom Fields',
                'all-custom-fields',
                [{ options: this.getCustomFieldsOptions() }]
              )}
              {this.renderOptionsPanel('Segments', 'segments', [
                {
                  options: this.getTraining1Options(),
                  label: 'Training 1',
                  key: 'training-1'
                },
                {
                  options: this.getTraining2Options(),
                  label: 'Training 2',
                  key: 'training-2'
                }
              ])}
            </Collapse>
          </div>
          <div className="col-xl-6 col-lg-12">
            <Table
              dataSource={this.getCheckedOptionsDataSource()}
              columns={this.createTableCols(this.removeFromSelectedRows)}
              size="small"
              bordered
            />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = FormatStep;
