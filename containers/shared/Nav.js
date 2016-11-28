import React, {Component} from 'react';
import {toggleLogin} from '../../actions';
import LoginForm from '../../components/navbar/login-modal/LoginForm';
import LoginButton from '../../components/navbar/LoginButton';
import Menu from '../../components/navbar/Menu';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux'

class Nav extends Component {
  constructor (props) {
    super(props);
    this.open = false;
    this._handleOpen = this._handleOpen.bind(this);
    this._handleClose = this._handleClose.bind(this);
  }

  _handleOpen () {
    this.props.dispatch(toggleLogin());
    this.open = !this.open;
  };

  _handleClose () {
    this.props.dispatch(toggleLogin());
    this.open = !this.open;
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
          onTouchTap={this._handleClose}
        />,
        <FlatButton
          hoverColor = {'lavenderblush'}        
          labelStyle={{
           color: '#2BC677'
          }}
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this._handleClose}
        />,
      ];

    return (
      <div>
        <AppBar className='navbar-style'
          style={{
          backgroundColor: '#2BC677'
        }}
          iconElementLeft={ <Menu />}
          iconElementRight={<LoginButton onTouchTap={this._handleOpen} className='login'/>}
        />
         <Dialog 
          titleStyle = {{ backgroundColor: '#FFB65D' }}
          bodyStyle = {{ backgroundColor: '#FFB65D' }}
          contentStyle={{ width: 300 }}
          title="Login"
          actions={loginActions}
          modal={false}
          open={this.props.data.reducer.displayLoginPanel}
          onRequestClose={this._handleClose}
        >
        <LoginForm/>
        </Dialog>
      </div>
    )
  }
}
function select (state) {
  return {
    data: state
  }
}

export default connect(select)(Nav)
