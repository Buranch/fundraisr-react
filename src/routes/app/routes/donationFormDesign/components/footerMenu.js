import React from 'react';
import Upload from 'material-ui-next-upload/Upload';
// import TextField from 'material-ui/TextField';
// import ContentAdd from 'material-ui/svg-icons/content/add';
// import FlatButton from 'material-ui/FlatButton';
// import IconButton from 'material-ui/IconButton';
// import ContentRemove from 'material-ui/svg-icons/content/remove';

import TextField from '@material-ui/core/TextField';
import ContentAdd from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ContentRemove from '@material-ui/icons/Remove';

const mWidthStyle = {
  minWidth: '135px'
};
const styles = {
  textFieldStyle: { width: 180 }
};

class Elem extends React.Component {
  clickHandler = e => {
    e.preventDefault();
    this.props.onDelete(this.props.num - 1);
  };
  begHandler = (e, newValue) => {
    e.preventDefault();
    this.props.onBegChange(newValue, this.props.num - 1);
  };
  endHandler = (e, newValue) => {
    e.preventDefault();
    this.props.onEndChange(newValue, this.props.num - 1);
  };

  render() {
    return (
      <div>
        <TextField
          key={`${this.props.key}beg`}
          onChange={this.begHandler}
          floatingLabelText="Link"
          hintText="Link Name"
          style={styles.textFieldStyle}
          value={this.props.value.begin}
        />
        <span className="space" />
        <TextField
          key={`${this.props.key}end`}
          onChange={this.endHandler}
          hintText="Link Destination"
          style={styles.textFieldStyle}
          value={this.props.value.end}
        />
        <IconButton onClick={this.clickHandler}>
          {' '}
          <ContentRemove />{' '}
        </IconButton>
      </div>
    );
  }
}

class FooterLinks extends React.Component {
  state = {
    array: []
  };

  AddHandler = () => {
    if (this.state.array.length > 0) {
      alert('Maximum is set at 4');
    } else {
      this.setState((prevState, props) => {
        const prev = prevState.array.map(elem => elem);
        prev.push({ begin: '', end: '' });
        return {
          array: prev
        };
      });
    }
  };

  RemoveHandler = num => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev.splice(num, 1);
      return {
        array: prev
      };
    });
  };

  BegHandler = (newValue, num) => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev[num].begin = newValue;
      return {
        array: prev
      };
    });
  };

  EndHandler = (newValue, num) => {
    this.setState((prevState, props) => {
      const prev = prevState.array.map(elem => elem);
      prev[num].end = newValue;
      return {
        array: prev
      };
    });
  };

  render() {
    this.BegHandler = this.BegHandler.bind(this);
    this.EndHandler = this.EndHandler.bind(this);

    const elems = [];
    for (let i = 0; i < this.state.array.length; i++) {
      elems.push(
        <Elem
          value={this.state.array[i]}
          key={i}
          num={i + 1}
          onDelete={this.RemoveHandler}
          onBegChange={this.BegHandler}
          onEndChange={this.EndHandler}
        />
      );
    }

    return (
      <div>
        <Button
          onClick={this.AddHandler}
          style={mWidthStyle}
          label="Addresses"
          labelPosition="after"
          primary
          icon={<ContentAdd />}
        />
        <div>
          <TextField
            floatingLabelText="Link*"
            style={styles.textFieldStyle}
            value="Privacy Policy"
            disabled
          />
          <br />
          <small>*This link is required</small>
          <br />
          <TextField
            floatingLabelText="Link*"
            style={styles.textFieldStyle}
            value="Donation Policy"
            disabled
          />
          <br />
          <small>*This link is required</small>
          <br />
          <TextField
            floatingLabelText="Link*"
            style={styles.textFieldStyle}
            value="Terms of Use Policy"
            disabled
          />
          <br />
          <small>*This link is required</small>
          <br />
        </div>
        {elems}
      </div>
    );
  }
}

const Table = () => (
  <div className="box box-default">
    <div className="box-body">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6">
          <h5>Logo & Copyright</h5>
          <Upload label="Choose an Image" />
          <br />
          <small>Recommended image size is 1170 x 320 for this layout.</small>
          <div
            className="bg-color-body"
            style={{ borderRadius: '10px', padding: '20px' }}
          >
            <img src="assets/images-demo/donr-logo.png" alt="donor-logo" />
          </div>
          © 2018 <TextField hintText="Company Name" />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6">
          <h5>Footer Menu</h5>
          <FooterLinks />
        </div>
      </div>
    </div>
  </div>
);

module.exports = Table;
