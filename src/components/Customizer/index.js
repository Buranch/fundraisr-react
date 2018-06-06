import PerfectScrollbar from 'perfect-scrollbar';
import React from 'react';
import APPCONFIG from 'constants/Config';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import LayoutOptions from './LayoutOptions';
import ColorOptions from './ColorOptions';
import ThemeOptions from './ThemeOptions';

class Customizer extends React.Component {
  componentDidMount() {
    const quickviewInner = this.quickview;
    console.log({ quickviewInner });
    this.ps = new PerfectScrollbar(quickviewInner);
  }

  componentWillUpdate() {
    this.ps.update();
  }

  componentWillUnmount() {
    this.ps.destroy();
  }

  toggleCustomizer = () => {
    const element = document.getElementById('body');
    element.classList.toggle('quickview-open-customizer');
  };

  closeCustomizer = () => {
    const element = document.getElementById('body');
    element.classList.remove('quickview-open-customizer');
  };

  render() {
    return (
      <section
        className="quickview-wrapper customizer d-none d-lg-block d-xl-block theme-light"
        id="quickview-customizer"
      >
        <a
          className="customizer-close"
          href="javascript:;"
          onClick={this.closeCustomizer}
        >
          <span className="material-icons">close</span>
        </a>
        <a
          className="customizer-toggle"
          href="javascript:;"
          onClick={this.toggleCustomizer}
        >
          <span className="material-icons">settings</span>
        </a>

        <div
          className="quickview-inner"
          ref={c => {
            this.quickview = c;
          }}
        >
          <p className="customizer-header">Customizer</p>
          <p className="small no-margin">Customize and preview in real time.</p>

          <div className="divider divider-lg divider-solid" />
          <LayoutOptions />

          <div className="divider divider-lg divider-solid" />
          <ColorOptions />

          <div className="divider divider-lg divider-solid" />
          <ThemeOptions />

          <div className="divider divider-lg divider-solid" />
          <div className="text-right">
            <a target="_blank" href={APPCONFIG.productLink}>
              Download it Now
            </a>
          </div>
        </div>
      </section>
    );
  }
}

module.exports = Customizer;
