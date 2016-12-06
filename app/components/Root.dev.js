import 'babel-polyfill'

import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { Route } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppContainer from './AppContainer'
import WelcomePage from './home/WelcomePage'
import Dashboard from './dashboard/Dashboard'
import NotFound from './shared/NotFound'
import DevTools from './shared/DevTools'
import '../styles/main.css'

function checkAuth(nextState, replace) {
    let loggedIn = true;
    console.log(nextState);
    
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
                replace('/dashboard')
            }
        }
    }
}

export default class Root extends Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
      <MuiThemeProvider>
        <div>
          <Router history={history}>
            <Route component={AppContainer}>
              <Route path='/' component={WelcomePage} />
              <Route onEnter={checkAuth}>
                <Route path='/dashboard' component={Dashboard} />
              </Route>
            <Route path='*' component={NotFound} />
          </Route> 
         </Router>
         <DevTools />
        </div>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
