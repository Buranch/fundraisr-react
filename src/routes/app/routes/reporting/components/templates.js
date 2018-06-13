import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import TemplatesTable from './table';

/**
 * Non-linear steppers allow users to enter a multi-step flow at any point.
 *
 * This example is similiar to the regular horizontal stepper, except steps are no longer
 * automatically set to `disabled={true}` based on the `activeStep` prop.
 *
 * We've used the `<StepButton>` here to demonstrate clickable step labels.
 */
class HorizontalNonLinearStepper extends React.Component {
  state = {
    stepIndex: 0
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    if (stepIndex < 2) {
      this.setState({ stepIndex: stepIndex + 1 });
    }
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <TemplatesTable />;
      case 1:
        return 'here2';
      case 2:
        return 'here3';
      default:
        return 'Error';
    }
  }

  render() {
    const { stepIndex } = this.state;
    const contentStyle = { margin: '0 16px' };

    return (
      <div style={{ width: '100%', maxWidth: 900, margin: 'auto' }}>
        <Stepper linear={false} activeStep={stepIndex}>
          <Step>
            <StepButton onClick={() => this.setState({ stepIndex: 0 })}>
              People
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({ stepIndex: 1 })}>
              Planning
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({ stepIndex: 2 })}>
              Billing
            </StepButton>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          <p>{this.getStepContent(stepIndex)}</p>
          <div style={{ marginTop: 12 }}>
            <Button
              label="Back"
              disabled={stepIndex === 0}
              onClick={this.handlePrev}
              style={{ marginRight: 12 }}
            >
              Back
            </Button>
            <Button
              label="Next"
              variant="contained"
              disabled={stepIndex === 2}
              primary
              onClick={this.handleNext}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default HorizontalNonLinearStepper;
