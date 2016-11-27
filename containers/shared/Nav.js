import React, {Component} from 'react'
import LoadingButton from '../../components/shared/LoadingButton'
import {Link} from 'react-router'
import {logout, clearError, toggleLogin} from '../../actions'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Toggle from 'material-ui/Toggle';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreHorizIcon from 'material-ui/svg-icons/navigation/more-horiz';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const TextFieldExampleSimple = () => (
  <div>
    <TextField
      hintText="Username"
      floatingLabelText="Username"
    /><br />
    <TextField
      hintText="Password"
      floatingLabelText="Password"
      type="password"
    />
  </div>
);

class Login extends Component {

  constructor(props)
  {
    super(props);
    this.muiName = 'FlatButton';
  }

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreHorizIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

class Nav extends Component {
  constructor (props) {
    super(props)
    this.open = false;
    this._handleOpen = this._handleOpen.bind(this)
    this._handleClose = this._handleClose.bind(this)
  }

  _handleOpen () {
    this.open = !this.open;
    this.props.dispatch(toggleLogin());
    console.log(this.open);
    console.log(this.props);
  };

  _handleClose () {
    this.props.dispatch(toggleLogin());
    this.open = !this.open;
  };

  render () {
        const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this._handleClose}
        />,
        <FlatButton
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
          iconElementLeft={ <Logged />}
          iconElementRight={<Login onTouchTap={this._handleOpen} className='login'/>}
        />
         <Dialog
          title="Login"
          actions={actions}
          modal={false}
          open={this.open}
          onRequestClose={this._handleClose}
        >
          <TextFieldExampleSimple/>
        </Dialog>
      </div>
    )
  }
}

Nav.propTypes = {
  loggedIn: React.PropTypes.bool,
  currentlySending: React.PropTypes.bool,
  dispatch: React.PropTypes.func
}

export default Nav
