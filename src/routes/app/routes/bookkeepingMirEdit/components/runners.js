import React from 'react';
// import FlatButton from 'material-ui/FlatButton';
// import DeleteIcon from 'material-ui/svg-icons/action/delete-forever';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const mWidthStyle = {
  minWidth: '135px'
};

class Runner extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6">
          <div className="box box-default">
            <div className="box-header bg-color-info">
              Delete Record & Reverse Transaction
            </div>
            <div className="box-body">
              Delete record from event and reverse transaction. This individual
              is the transaction owner of a multiple registration transaction.
              There are 3 other participants associated with this transaction.
              Deleting this transaction will remove all associated participants.{' '}
              <div className="text-right">
                <Button
                  href="#app/gift-entry"
                  style={mWidthStyle}
                  label="Run"
                  target="_blank"
                  color="primary"
                >
                  <DeleteIcon /> Run
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6">
          <div className="box box-default">
            <div className="box-header bg-color-info">Reverse Transaction</div>
            <div className="box-body">
              Reverse partial transaction only. This option will allow you to
              individually reverse registration information for each participant
              associated with this transaction.{' '}
              <div className="text-right">
                <Button
                  href="#app/initiative-records"
                  style={mWidthStyle}
                  label="Run"
                  icon={<DeleteIcon />}
                  target="_blank"
                  color="primary"
                >
                  <DeleteIcon /> Run
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Runner;
