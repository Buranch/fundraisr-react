import React from 'react';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Stepper from '@material-ui/core/Stepper';
import Helper from '../../../components/helper';
import HeadText from '../../../components/headText';
import Breadcrumb from '../../../components/breadcrumb';
import ControlPanel from './controlPanel';
import ChooseEvents from './eventChoose';
import DateRange from './dateRange';
import Delivery from './delivery';
import FormatStep from './format';
import DefineFilters from './filters';

class HorizontalNonLinearStepper extends React.Component {
  props = {
    stepIndex: 0,
    changeStep: newStep => {}
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <ChooseEvents />;
      case 1:
        return <DateRange />;
      case 2:
        return <FormatStep />;
      case 3:
        return <DefineFilters />;
      case 4:
        return <Delivery />;
      default:
        return 'Error';
    }
  }

  render() {
    const { stepIndex } = this.props;
    const contentStyle = { margin: '0 16px' };

    return (
      <div style={{ width: '100%', maxWidth: 1100, margin: 'auto' }}>
        <Stepper linear={false} activeStep={stepIndex}>
          <Step>
            <StepButton onClick={() => this.props.changeStep(0)}>
              Events
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.props.changeStep(1)}>
              DateRange
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.props.changeStep(2)}>
              Format
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.props.changeStep(3)}>
              Filters
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.props.changeStep(4)}>
              Delivery
            </StepButton>
          </Step>
        </Stepper>
        <div style={contentStyle}>{this.getStepContent(stepIndex)}</div>
      </div>
    );
  }
}

class RR extends React.Component {
  state = {
    currentStepIndex: 0
  };

  moveNext = () => {
    if (this.state.currentStepIndex < 4) {
      this.setState({ currentStepIndex: this.state.currentStepIndex + 1 });
    }
  };

  moveBack = () => {
    if (this.state.currentStepIndex > 0) {
      this.setState({ currentStepIndex: this.state.currentStepIndex - 1 });
    }
  };

  setStep = newStepIndex => {
    this.setState({ currentStepIndex: newStepIndex });
  };

  render() {
    return (
      <section className="container-fluid no-breadcrumbs">
        <Helper />
        <HeadText pageName="Reporting - Registrants" />
        <Breadcrumb
          path={
            <small>
              <a href="#/app/dashboard">Dashboard</a> >{' '}
              <a href="#/app/reporting">Events</a> > Registrants
            </small>
          }
        />
        <ControlPanel
          onNextClick={this.moveNext}
          onPreviousClick={this.moveBack}
        />
        <div className="box box-default">
          <div className="box-body">
            <HorizontalNonLinearStepper
              stepIndex={this.state.currentStepIndex}
              changeStep={this.setStep}
            />
          </div>
        </div>
      </section>
    );
  }
}

module.exports = RR;
