import 'babel-polyfill'

import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { Route } from 'react-router'
import { clearError } from '../actions'

import App from './App'
import Home from '../components/Home'
import Login from './Login'
import Register from './Register'
import Dashboard from '../components/Dashboard'
import NotFound from '../components/shared/NotFound'
import DevTools from './DevTools'

import '../styles/main.css'

function checkAuth(nextState, replace) {
    let { loggedIn } = true;

    //store.dispatch(clearError())

    // Check if the path isn't dashboard. That way we can apply specific logic to
    // display/render the path we want to
    if (nextState.location.pathname !== '/dashboard') {
        if (loggedIn) {
            if (nextState.location.state && nextState.location.pathname) {
                replace(nextState.location.pathname)
            } else {
                replace('/')
            }
        }
    } else {
        // If the user is already logged in, forward them to the homepage
        if (!loggedIn) {
            if (nextState.location.state && nextState.location.pathname) {
                replace(nextState.location.pathname)
            } else {
                replace('/')
            }
        }
    }
}

export default class Root extends Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            <Route component={App}>
              <Route path='/' component={Home} />
              <Route onEnter={checkAuth}>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/dashboard' component={Dashboard} />
              </Route>
            <Route path='*' component={NotFound} />
          </Route> 
         </Router>
         <DevTools />
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
