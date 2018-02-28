import React from 'react';
import {
  Step,
  Stepper,
  StepButton,
} from 'material-ui/Stepper';
import Helper from '../../../components/helper';
import HeadText from '../../../components/headText';
import Breadcrumb from '../../../components/breadcrumb';
import ControlPanel from './controlPanel';
import EventChoose from './eventChoose';
import DateRange from  './dateRange';

class HorizontalNonLinearStepper extends React.Component {
  state = {
    stepIndex: 0,
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <EventChoose />;
      case 1:
        return <DateRange />;
      case 2:
        return 'here3';
      case 3:
        return 'here4';
      case 4:
        return 'here5';
      default:
        return 'Error';
    }
  }

  render() {
    const {stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 900, margin: 'auto'}}>
        <Stepper linear={false} activeStep={stepIndex}>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Events
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              DateRange
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              Format
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 3})}>
              Filters
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 4})}>
              Delivery
            </StepButton>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          <p>{this.getStepContent(stepIndex)}</p>
        </div>
      </div>
    );
  }
}

class RR extends React.Component {
  render() {
    return (
      <section className="container-fluid no-breadcrumbs">
        <Helper />
        <HeadText pageName="Reporting - Registrants" />
        <Breadcrumb
          path={
            <small>
              <a href="#/app/dashboard">Dashboard</a> >> <a href="#/app/reporting">Events</a> >> Registrants
            </small>
          } />
        <ControlPanel />
        <div className="box box-default">
          <div className="box-body">
            <HorizontalNonLinearStepper />
          </div>
        </div>
      </section>
    );
  }
}


module.exports = RR;
