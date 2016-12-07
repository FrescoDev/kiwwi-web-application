import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Food from './Food';
import Settings from './Settings';
import Work from './Work';
import Consultation from './Consultation';
import { connect } from 'react-redux';

class DashBoardContainer extends Component {
  constructor (props) {
    super(props);
  }

render () {

    let dashboardComponentArray = [ <Dashboard/>, <Food/>, <Consultation/>, <Work/>, <Settings/> ];

    return ( 
        <div>
            {dashboardComponentArray[this.props.state.app.dashbarActiveTabIndex]}
        </div>
    );
  }
}

function select (state) {
  return {
    state: state
  }
}

export default connect(select)(DashBoardContainer);
