import React, {Component} from 'react'
import Arrow from 'material-ui/svg-icons/navigation/expand-more';
import Play from 'material-ui/svg-icons/av/play-circle-outline';
import Profile from 'material-ui/svg-icons/social/person-outline';
import Message from 'material-ui/svg-icons/communication/message';
import Paper from 'material-ui/Paper';
import Food from 'material-ui/svg-icons/maps/restaurant';
import Health from 'material-ui/svg-icons/maps/local-hospital';
import HorizontalNonLinearStepper from './Stepper';
import Rule from './Divider';
import Chips from './Chips';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem'

const logoUrl = require('../../assets/img/logo.png');
const plateUrl = require('../../assets/img/plate_nobg.png');
const screensUrl = require('../../assets/img/screenshots.png');
const badgesUrl = require('../../assets/img/badges.png');

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
       <div id='arrow'className='prompt arrow bounce'/>

       <div className='container-fluid first-how-panel'>
          <div className='first-how-display wow animated fadeInDown'>
              <h1 id="Getting-Started" ><font color='#1B3628'>Getting Started</font> <Play style={{width: '60px', height: '60px'}}/></h1>
              <h1 className='first-how-style wow animated fadeInLeft'><font color='antiquewhite'>Step 1.</font> Tell us about you <Profile style={{width: '110px', height: '95px', color: 'white'}}/></h1>
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
          <div className='plate-logo'>
            <img className='plate animated wow fadeInDown' src={plateUrl} />
          </div>
       </div>

        <div className='container-fluid third-how-panel'>
          <div className='third-how-display col-md-8'>
            <h1 id="third-how" className='first-how-style wow animated fadeInLeft'><font color='antiquewhite'>Step 3.</font> Select a health plan <Health style={{width: '110px', height: '95px', color: 'white'}}/></h1>
          </div>
          <div className='fourth-how-panel col-md-4'>
            <Rule className='wow animated fadeInRight'/>
          </div>
          <div className='plate-logo'>
            <img className='plate wow animated fadeInUp' src={screensUrl} />
          </div>          
        </div>

        <div className="container-fluid main-display welcome col-md-6">
          <h1 id="Contact-Us" ><font color='#1B3628'>Contact Us</font> <Message style={{width: '60px', height: '60px'}}/></h1>
        </div>
        <div className="col-md-6">        
          <div className="contact-icons">
              <a href="https://twitter.com/kiwwi-health">
                  <img title="Twitter" alt="Twitter" src="https://socialmediawidgets.files.wordpress.com/2014/03/01_twitter1.png" width="35" height="35" />
              </a>
              <a href="https://www.facebook.com/kiwwi-health/">
                  <img title="Facebook" alt="Facebook" src="https://socialmediawidgets.files.wordpress.com/2014/03/02_facebook1.png" width="35" height="35" />
              </a>
              <a href="https://www.youtube.com/user/kiwwi-health">
                  <img title="Youtube" alt="Youtube" src="https://socialmediawidgets.files.wordpress.com/2014/03/03_youtube.png" width="35" height="35" />
              </a>
              <a href="support@kiwwi.com">
                  <img title="Email" alt="Email" src="https://socialmediawidgets.files.wordpress.com/2014/03/email.png" width="35" height="35" />
              </a>
          </div>
       </div>
       <div className="badges-content">
            <img className='badges animated wow fadeInDown' src={badgesUrl} />
      </div>

      </article>
    )
  }
}

export default WelcomePage;