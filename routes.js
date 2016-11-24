import React, { Component } from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import Home from './components/Home'
import Login from './containers/Login'
import Register from './containers/Register'
import Dashboard from './components/Dashboard'
import NotFound from './components/shared/NotFound'

/**
 * Checks authentication status on route change
 * @param  {object}   nextState The state we want to change into when we change routes
 * @param  {function} replace Function provided by React Router to replace the location
 */
function checkAuth(nextState, replace) {
    let { loggedIn } = store.getState()

    store.dispatch(clearError())

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


class routes extends Component {
  render () {
    return (
        <Route component={App}>
            <Route path='/' component={Home} />
            <Route onEnter={checkAuth}>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/dashboard' component={Dashboard} />
            </Route>
            <Route path='*' component={NotFound} />
        </Route>
    )
  }
}

export default routes