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
        return (<p> Recieve a stream of <font color='white'>excercise</font> and <font color='white'>diet</font> recommendations tailored to <font color='white'>you and your needs.</font></p>);
      case 1:
        return (<p> <font color='white'>Daily updates</font> including <font color='white'>meal ideas,</font> and the perfect set of excercises for <font color='white'>you</font>.</p>);
      case 2:
        return (<p> Track your <font color='white'>progress</font> and <font color='white'>monitor</font> your journey.</p>);
      default:
        return (<p> Kiwwi makes it all simpler.</p>);
    }
  }

  render() {
    const {stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', color: 'black', fontWeight:'bold', fontSize: '24'};

    return (
      <div style={{width: '100%', maxWidth: 900, margin: 'auto', paddingBottom: '1%'}}>
        <Stepper linear={false} activeStep={stepIndex} style={{fill:'#1B3628'}} orientation="vertical">
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              <font size="5"></font><Body/>
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              <font size="5"></font><Work/>
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
             <font size="5"></font><Target/>
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