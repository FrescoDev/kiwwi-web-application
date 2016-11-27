import React, {Component} from 'react'
import LoadingButton from '../../components/shared/LoadingButton'
import {Link} from 'react-router'
import {logout, clearError} from '../../actions'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Toggle from 'material-ui/Toggle';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreHorizIcon from 'material-ui/svg-icons/navigation/more-horiz';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

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

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class Home extends Component {

  render() {
    return (
      <div>
        <AppBar
          iconElementLeft={<Login />}
          iconElementRight={ <Logged />}
        />
      </div>
    );
  }
}

class Nav extends Component {
  constructor (props) {
    super(props)
    this._logout = this._logout.bind(this)
    this._clearError = this._clearError.bind(this)
  }

  render () {
    let navButtons = this.props.loggedIn ? (
      <div>
        <Link to='/dashboard' className='btn btn--dash btn--nav'>Dashboard</Link>
        {this.props.currentlySending ? (
          <LoadingButton className='btn--nav' />
        ) : (
          <a href='#' className='btn btn--login btn--nav' onClick={this._logout}>Logout</a>
        )}
      </div>
    ) : (
      <div>
        <Link to='/register' className='btn btn--login btn--nav' onClick={this._clearError}>Register</Link>
        <Link to='/login' className='btn btn--login btn--nav' onClick={this._clearError}>Login</Link>
      </div>
    )

    return (
      <div>
        <AppBar className='navbar-style'
          style={{
          backgroundColor: '#2BC677'
        }}
          iconElementLeft={ <Logged />}
          iconElementRight={<Login />}
        />
      </div>
    )
  }

  _logout () {
    this.props.dispatch(logout())
  }

  _clearError () {
    this.props.dispatch(clearError())
  }
}

Nav.propTypes = {
  loggedIn: React.PropTypes.bool,
  currentlySending: React.PropTypes.bool,
  dispatch: React.PropTypes.func
}

export default Nav
