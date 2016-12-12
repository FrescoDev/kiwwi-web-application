import React, {Component} from 'react'
import Arrow from 'material-ui/svg-icons/navigation/expand-more';
import Play from 'material-ui/svg-icons/av/play-circle-outline';
import Profile from 'material-ui/svg-icons/social/person-outline';
import Paper from 'material-ui/Paper';
import Food from 'material-ui/svg-icons/maps/restaurant';
import Health from 'material-ui/svg-icons/maps/local-hospital';
import HorizontalNonLinearStepper from './Stepper';
import Chips from './Chips';

const logoUrl = require('../../assets/img/logo.png');
const foodUrl = require('../../assets/img/food_generic.png');

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class WelcomePage extends Component {

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
      let arrow = document.getElementById("arrow");
      var opacity = 1;  // initial opacity
      var timer = setInterval(function () {
          if (opacity <= 0.1) {
              clearInterval(timer);
              arrow.style.display = 'none';
          }
          
          arrow.style.opacity = opacity;
          arrow.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
          opacity -= opacity * 0.1;
      }, 25);
  }

  render () {
    const iconStyles = {
      width: 90,
      height: 70
    };

    const foo = <p>hisdfgsdfg</p>;

    return (
      
      <article>
        <div className='container-fluid welcome'>
          <div className='main-display col-md-8 fade-in'>
              <h1><font color='#1B3628'>Kiwwi*</font></h1>
              <h1 className='plan-style'><font color='antiquewhite'>PLAN</font> WELL.</h1>
              <h1 className='plan-style'><font color='antiquewhite'>EAT</font> WELL.</h1>
              <h1 className='plan-style'><font color='antiquewhite'>BE </font>WELL.</h1>
              <h1>Repeat.</h1>
          </div>
          <div className='col-md-2 main-logo'>
            <img src={logoUrl} />
          </div>
       </div>
       <div id='arrow'className='prompt arrow bounce'>
       </div> 

       <div className='container-fluid first-how-panel'>
          <div className='first-how-display wow animated bounceInDown'>
              <h1><font color='#1B3628'>Getting Started</font> <Play style={{width: '60px', height: '60px'}}/></h1>
              <h1 id="first-how" className='first-how-style wow animated fadeInLeft'><font color='antiquewhite'>Step 1.</font> Tell us about you <Profile style={{width: '110px', height: '95px', color: 'white'}}/></h1>
                <div className='row'>
                  <div className='first-how-style wow animated fadeInLeft'>
                    <HorizontalNonLinearStepper/>
                  </div>
                </div>
          </div>
        </div>

        <div className='container-fluid welcome'>
          <div className='second-how-display col-md-8 fade-in'>
              <h1 id="second-how" className='first-how-style wow animated fadeInLeft'><font color='antiquewhite'>Step 2.</font> Tell us about your food <Food style={{width: '110px', height: '95px', color: 'white'}}/></h1>
          </div>
          <div className='wow animated fadeInRight'>
            <Chips/>
          </div>
       </div>

        <div className='container-fluid third-how-panel'>
          <div className='third-how-display col-md-8'>
              <h1 id="third-how" className='first-how-style wow animated fadeInLeft'><font color='antiquewhite'>Step 3.</font> Select a health plan <Health style={{width: '110px', height: '95px', color: 'white'}}/></h1>
          </div>
        </div>

      </article>
    )
  }
}

export default WelcomePage;