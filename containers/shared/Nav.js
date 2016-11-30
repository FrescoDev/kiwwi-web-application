import React, {Component} from 'react';
import {toggleLogin, loginRequest, authenticateUser, logout } from '../../actions/home/index';
import LoginForm from '../../components/navbar/login-modal/LoginForm';
import LoginButton from '../../components/navbar/LoginButton';
import LogoutButton from '../../components/navbar/LogoutButton';
import Menu from '../../components/navbar/Menu';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';
import {connect} from 'react-redux'

class Nav extends Component {
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
    this.props.dispatch(authenticateUser(this.props.state.reducer.loginCredentials));
  };

  onLogoutRequest () {
    this.props.dispatch(logout());
  };

  render () {

    const loginActions = [
        <FlatButton
          hoverColor = {'lavenderblush'}
          labelStyle={{
          color: '#2BC677'
          }}
          label="Cancel"
          primary={true}
          onTouchTap={this.onLoginClose}
          disabled={this.props.currentlySending}
        />,
        <FlatButton
          hoverColor = {'lavenderblush'}        
          labelStyle={{
           color: '#2BC677'
          }}
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.onLoginRequest}
          disabled={this.props.currentlySending}          
        />,
      ];

    return (
      <div>
        <AppBar className='navbar-style'
          style={{
          backgroundColor: '#2BC677'
        }}
          iconElementLeft={ <Menu />}
          iconElementRight={ (!this.props.currentlySending && !this.props.loggedIn) ? <LoginButton onTouchTap={this.onLoginOpen} className='login'/> : <LogoutButton onTouchTap={this.onLogoutRequest} className='login'/> }
        />
         <Dialog 
          titleStyle = {{ backgroundColor: '#FFB65D' }}
          bodyStyle = {{ backgroundColor: '#FFB65D' }}
          contentStyle={{ width: 300 }}
          title="Login"
          actions={loginActions}
          modal={false}
          open={this.props.state.reducer.loginPanelActive}
          onRequestClose={this.onLoginClose}
        >
        {this.props.currentlySending ? <LinearProgress color= '#24E583' mode="indeterminate" style={{backgroundColor: 'white'}} /> : <LinearProgress color= 'white' mode="indeterminate" style={{backgroundColor: 'white'}} />} 
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

export default connect(select)(Nav)
