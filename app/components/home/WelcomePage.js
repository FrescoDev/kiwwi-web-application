import React, {Component} from 'react'
import Arrow from 'material-ui/svg-icons/navigation/expand-more';

const logoUrl = require('../../assets/img/logo.png');

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
      }, 5);
  }

  render () {
    const iconStyles = {
      width: 90,
      height: 70
    };

    return (
      
      <article>
        <div className='container-fluid welcome'>
          <div className='main-display col-md-8'>
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
       <div id='arrow' className='prompt'>
          <div className='arrow bounce'></div> 
       </div>

       <div className='container-fluid first-how-panel'>
          <div className='main-display col-md-8'>
              <h1><font color='#1B3628'>Kiwwi*</font></h1>
              <h1 className='plan-style'><font color='antiquewhite'>PLAN</font> WELL.</h1>
              <h1 className='plan-style'><font color='antiquewhite'>EAT</font> WELL.</h1>
              <h1 className='plan-style'><font color='antiquewhite'>BE </font>WELL.</h1>
              <h1>Repeat.</h1>
          </div>
        </div>        
      </article>
    )
  }
}

export default WelcomePage;