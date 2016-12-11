import React from 'react';
import {
  Step,
  Stepper,
  StepButton,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Body from 'material-ui/svg-icons/action/accessibility';
import Target from 'material-ui/svg-icons/action/track-changes';
import Work from 'material-ui/svg-icons/places/fitness-center';


/**
 * Non-linear steppers allow users to enter a multi-step flow at any point.
 *
 * This example is similar to the regular horizontal stepper, except steps are no longer
 * automatically set to `disabled={true}` based on the `activeStep` prop.
 *
 * We've used the `<StepButton>` here to demonstrate clickable step labels.
 */
class HorizontalNonLinearStepper extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          stepIndex: 0,
        };
    }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Kiwwi* uses metrics such as age, B.M.I., weight, height, etc...';
      case 1:
        return 'As well as your current level of fitness';
      case 2:
        return 'Then uses this information to provide you with an optimal set of excercise and diet plans.';
      default:
        return 'Kiwwi makes it all simpler.';
    }
  }

  render() {
    const {stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', color: 'white', fontWeight:'bold'};

    return (
      <div style={{width: '100%', maxWidth: 900, margin: 'auto', paddingBottom: '8%'}}>
        <Stepper linear={false} activeStep={stepIndex} style={{fill:'#1B3628'}}>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              <font size="5">Body Metrics &nbsp;</font><Body/>
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              <font size="5">Health and Fitness Assessment &nbsp;</font><Work/>
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
             <font size="5"> Your Goals and Targets &nbsp;</font><Target/>
            </StepButton>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          <p>{this.getStepContent(stepIndex)}</p>
          <div style={{marginTop: 12}}>
          </div>
        </div>
      </div>
    );
  }
}

export default HorizontalNonLinearStepper;