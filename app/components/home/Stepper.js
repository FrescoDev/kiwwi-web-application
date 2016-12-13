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
        return (<p><font color='#1B3628'>Kiwwi*</font> uses your <font color='black'> metrics </font></p>)
      case 1:
        return (<p>As well as <font color='black'>your</font> current level of <font color='black'>fitness</font></p>)
      case 2:
        return (<p>Then uses this <font color='black'>information</font> to provide you with an <font color='black'>optimal</font> set of excercise and diet plans.</p>)
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
          {this.getStepContent(stepIndex)}
          <div style={{marginTop: 12}}>
          </div>
        </div>
      </div>
    );
  }
}

export default HorizontalNonLinearStepper;