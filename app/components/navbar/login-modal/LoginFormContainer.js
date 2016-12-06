import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'
import { enterCredentials } from '../actions/index';

class LoginFormContainer extends Component {
  constructor (props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.emitChange = this.emitChange.bind(this);
  }

  onChangeEmail (event) {
    this.emitChange({ email: event.target.value, password: this.props.state.app.loginCredentials.password})
  }

  onChangePassword (event) {
    this.emitChange({ email: this.props.state.app.loginCredentials.email, password: event.target.value})
  }

  emitChange (loginForm) {
    this.props.dispatch(enterCredentials(loginForm))
  }

  render() {
    return(
      <div>        
        <TextField
          underlineFocusStyle ={{ borderColor: 'white' }}
          underlineStyle ={{ borderColor: 'white' }}
          floatingLabelFocusStyle ={{ color: 'black' }}
          hintText="your@email.com"
          floatingLabelText="E-mail"
          onChange={this.onChangeEmail}
        />
        <br />
        <TextField
          underlineFocusStyle ={{ borderColor: 'white' }}
          underlineStyle ={{ borderColor: 'white' }}
          floatingLabelFocusStyle ={{ color: 'black' }}
          hintText="Password"
          floatingLabelText="Password"
          type="password"
          onChange={this.onChangePassword}          
        />
      </div>
    )
  }
}

function select (state) {
  return {
    state: state
  }
}

export default connect(select)(LoginFormContainer)
