import React, {Component} from 'react'

const logoUrl = require('../../assets/img/logo.png');

class WelcomePage extends Component {
  render () {
    return (
      <article>
        <div className='container-fluid'>
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
      </article>
    )
  }
}

export default WelcomePage;