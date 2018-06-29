import React from 'react';
import Upload from 'material-ui-next-upload/Upload';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
  padding: '12px 18px',
  marginBottom: 12,
  fontWeight: 400,
  minHeight: 300
};

const TabsExampleSimple = () => (
  <Tabs>
    <Tab label="Option 1">
      <div style={styles}>
        <h5>Full Header Image</h5>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={4} className="box-body">
            <Upload label="Choose an Image" />
            <br />
            <small>Recommended image size is 1170 x 320 for this layout.</small>
            <br />
            <br />
          </Grid>
          <Grid item xs={12} sm={12} md={8} className="box-body">
            <b>Image Preview</b>
            <br />
            <img
              src="assets/images-demo/donr-header.png"
              alt="donor-header"
              style={{ maxWidth: '100%', borderRadius: '5px' }}
            />
          </Grid>
        </Grid>
      </div>
    </Tab>
    <Tab label="Option 2">
      <div style={styles}>
        <h5>Split Header with image and text</h5>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={4} className="box-body">
            <b>Image Preview</b>
            <br />
            <img
              src="assets/images-demo/donr-header.png"
              alt="donor-header"
              style={{ maxWidth: '100%', borderRadius: '5px' }}
            />
            <br />
            <br />
            <Upload label="Choose an Image" />
            <small>Recommended image size is 1170 x 320 for this layout.</small>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <b>Text</b>
            <div className="box bg-color-page">
              <div className="box-body">
                <TextField hintText="HeadLine" />
                <TextField
                  hintText="<html> is ok. Lorem ipsum"
                  multiLine
                  rows={2}
                  rowsMax={10}
                  fullWidth
                />
                <TextField label="CSS Class" />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Tab>
  </Tabs>
);

const TabsSection = () => (
  <section className="box box-default">
    <div className="box-body no-padding">
      <TabsExampleSimple />
    </div>
  </section>
);

module.exports = TabsSection;
