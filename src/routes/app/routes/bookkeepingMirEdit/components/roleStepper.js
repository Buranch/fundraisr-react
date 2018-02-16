import React from 'react';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

/**
 * A basic vertical non-linear implementation
 */
class VerticalNonLinear extends React.Component {

  state = {
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 4) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  renderStepActions(step) {
    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label="Run"
          disableTouchRipple
          disableFocusRipple
          primary
          style={{marginRight: 12}}
        />
      </div>
    );
  }

  render() {
    const {stepIndex} = this.state;

    return (
      <div style={{maxWidth: 500, height: 400, margin: 'auto'}}>
        <Stepper
          activeStep={stepIndex}
          linear={false}
          orientation="vertical"
        >
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Start a Team
            </StepButton>
            <StepContent>
              <p>Start a new Team</p>
              {this.renderStepActions(0)}</StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Become a Team Captain of an Existing Team
            </StepButton>
            <StepContent>
              <p>Go Join an already existing team as the Captain.</p>
              {this.renderStepActions(1)}</StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              Become a Co-Captain of an Existing Team
            </StepButton>
            <StepContent>
              <p>Join an already existing team as a Co-Captain. </p>
              {this.renderStepActions(2)}</StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 3})}>
              Join Another Team
            </StepButton>
            <StepContent>
              <p> Join a different Team.</p>
              {this.renderStepActions(3)}</StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 4})}>
              Become an Individual Participant
            </StepButton>
            <StepContent>
              <p>Go solo, Choose to participate as an individual.</p>
              {this.renderStepActions(4)}</StepContent>
          </Step>
        </Stepper>
      </div>
    );
  }
}

export default VerticalNonLinear;
