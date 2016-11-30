import React, {Component} from 'react'
import {connect} from 'react-redux'
import Nav from './shared/Nav'

class App extends Component {
  render () {
    return (
      <div>
        <Nav loggedIn={this.props.state.loggedIn}
          currentlySending={this.props.state.awaitingResponse}
          history={this.props.history}
          dispatch={this.props.dispatch}
          location={this.props.location} />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  state: React.PropTypes.object,
  history: React.PropTypes.object,
  location: React.PropTypes.object,
  children: React.PropTypes.object,
  dispatch: React.PropTypes.func
}

function select (state) {
  return {
    state: state
  }
}

export default connect(select)(App)