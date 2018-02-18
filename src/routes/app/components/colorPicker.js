import React from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';

/**
 * @param {string} [r, g, b]
 */
class SketchExample extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: this.props.r || '255',
      g: this.props.g || '255',
      b: this.props.b || '255',
      a: this.props.a || '1'
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb });
  };

  render() {
    const styles = reactCSS({
      'default': {
        color: {
          padding: '0 4px',
          color: '#000',
          borderRadius: '2px',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
          padding: '5px',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } > {this.props.text} </div>
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose } />
          <SketchPicker color={this.state.color} onChange={this.handleChange} />
        </div> : null }

      </div>
    )
  }
}

export default SketchExample;
