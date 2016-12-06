import React, { Component } from 'react';
import { toggleLogin, loginRequest, authenticateUser, logout, fetchUserAuthenticationStatus } from './actions/index';
import { connect } from 'react-redux'
import LoginForm from './login-modal/LoginFormContainer';
import SubmitButton from './login-modal/SubmitButton';
import CancelButton from './login-modal/CancelButton';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import MenuIconLeft from './MenuIconLeft';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';

class NavBarContainer extends Component {
  constructor (props) {
    super(props);
    this.onLoginOpen = this.onLoginOpen.bind(this);
    this.onLoginClose = this.onLoginClose.bind(this);
    this.onLoginRequest = this.onLoginRequest.bind(this);
    this.onLogoutRequest = this.onLogoutRequest.bind(this);
  }

  onLoginOpen () {
    this.props.dispatch(toggleLogin());
  };

  onLoginClose () {
    this.props.dispatch(toggleLogin());
  };

  onLoginRequest () {
    this.props.dispatch(fetchUserAuthenticationStatus());
  };

  onLogoutRequest () {
    this.props.dispatch(logout());
  };

  hideMenuIcon () {
    return !this.props.awaitingResponse && !this.props.loggedIn
  }

  render () {

    const LoginActions = [
        <CancelButton
          onLoginClose={this.onLoginClose}
          awaitingResponse={this.props.awaitingResponse}
        />,
        <SubmitButton
          onLoginRequest={this.onLoginRequest}
          awaitingResponse={this.props.awaitingResponse}          
        />
];

    return (
      <div>
        <AppBar 
          className='navbar-style'
          style={{ backgroundColor: '#2BC677' }}
          iconElementLeft={ <MenuIconLeft />}
          iconElementRight={ this.hideMenuIcon ? <LoginButton onTouchTap={this.onLoginOpen} className='login'/> : null }
        />
         <Dialog 
          titleStyle = {{ backgroundColor: '#FFB65D' }}
          bodyStyle = {{ backgroundColor: '#FFB65D' }}
          contentStyle={{ width: 300 }}
          title="Login"
          actions={ LoginActions }
          modal={ false }
          open={ this.props.state.app.loginPanelActive }
          onRequestClose={ this.onLoginClose }
        >
        { this.props.awaitingResponse ? <LinearProgress color= '#24E583' mode="indeterminate" style={{backgroundColor: 'white'}} /> : <LinearProgress color= 'white' mode="indeterminate" style={{backgroundColor: 'white'}}/> } 
        <LoginForm />
        </Dialog>
      </div>
    )
  }
}
function select (state) {
  return {
    state: state
  }
}

export default connect(select)(NavBarContainer)
