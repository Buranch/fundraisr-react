import React from 'react';
import Button from '@material-ui/core/Button';
import BrushIcon from '@material-ui/icons/Brush';
import BookIcon from '@material-ui/icons/Book';
import OptionIcon from '@material-ui/icons/Build';
import Grid from '@material-ui/core/Grid';
const mWidthStyle = {
  color: '#00bcd4',
  minWidth: '135px',
  fontSize: '15px'
};

class Runner extends React.Component {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} md={4}>
          <div className="box box-default">
            <div className="box-header bg-color-primary">Form Design</div>
            <div className="box-body">
              <b>Start</b> Here, Choose your form layout then choose from the
              provided styles. Next choose from the "Form Options" provided by
              your layout.
              <div className="text-right">
                <Button
                  href="#/app/donation-form-design"
                  style={mWidthStyle}
                  color="primary"
                >
                  <BrushIcon /> Open
                </Button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="box box-default">
            <div className="box-header bg-color-primary">Form Options</div>
            <div className="box-body">
              Choose from the available options provided by your layout choice
              in the "From Design" Section
              <div className="text-right">
                <Button
                  href="#/app/donation-form-options"
                  style={mWidthStyle}
                  color="primary"
                >
                  <OptionIcon /> Open
                </Button>
              </div>{' '}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="box box-default">
            <div className="box-header bg-color-primary">Form Bookkeeping</div>
            <div className="box-body">
              Track your donation form's progress
              <div className="text-right">
                <Button
                  href="#/app/donation-form-bookkeeping"
                  style={mWidthStyle}
                  color="primary"
                >
                  <BookIcon /> Open
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}

module.exports = Runner;
