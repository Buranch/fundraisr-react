import React from 'react';
import Upload from 'material-ui-next-upload/Upload';
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
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 box-body">
            <Upload label="Choose an Image" />
            <br />
            <small>Recommended image size is 1170 x 320 for this layout.</small>
            <br />
            <br />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-8 box-body">
            <b>Image Preview</b>
            <br />
            <img
              src="assets/images-demo/donr-header.png"
              alt="donor-header"
              style={{ maxWidth: '100%', borderRadius: '5px' }}
            />
          </div>
        </div>
      </div>
    </Tab>
    <Tab label="Option 2">
      <div style={styles}>
        <h5>Split Header with image and text</h5>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 box-body">
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
          </div>
          <div className="col-xs-12 col-sm-12 col-md-8">
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
                <TextField floatingLabelText="CSS Class" />
              </div>
            </div>
          </div>
        </div>
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
