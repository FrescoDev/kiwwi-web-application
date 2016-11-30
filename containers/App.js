import React, {Component} from 'react'
import {connect} from 'react-redux'
import Nav from './shared/Nav'
import Dashboard from '../components/Dashboard'
import LinearProgress from 'material-ui/LinearProgress';

class App extends Component {
  render () {
    return (
      <div>
        {this.props.state.reducer.awaitingResponse ? <LinearProgress color= '#24E583' mode="indeterminate" style={{backgroundColor: '#00793C'}} /> : <LinearProgress color= '#2BC677' mode="indeterminate" style={{backgroundColor: '#2BC677'}} /> } 
        <Nav loggedIn={this.props.state.reducer.loggedIn}
          currentlySending={this.props.state.reducer.awaitingResponse}
          history={this.props.history}
          dispatch={this.props.dispatch}
          location={this.props.location} />
        {this.props.state.reducer.loggedIn ? <Dashboard/> : this.props.children}
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