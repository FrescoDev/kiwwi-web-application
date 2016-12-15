import React, { Component } from 'react';
import Badge from 'material-ui/Badge';
import { ativateTab, toggleSettingsDrawer, logout } from './actions/index';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import { blue500, red500, greenA200 } from 'material-ui/styles/colors';
import Home from 'material-ui/svg-icons/action/home';
import Consultation from 'material-ui/svg-icons/action/account-circle';
import Food from 'material-ui/svg-icons/maps/restaurant';
import Work from 'material-ui/svg-icons/places/fitness-center';
import Settings from 'material-ui/svg-icons/action/settings';
import FontIcon from 'material-ui/FontIcon';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem'

class DashBarContainer extends Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.logout = this.logout.bind(this);
  }

    handleChange (value) {
        this.props.dispatch(ativateTab(value))
    }

    toggleDrawer () {
        this.props.dispatch(toggleSettingsDrawer());
    }

    logout () {
        this.props.dispatch(logout());
    }

render () { 
    return (
    <div>
        <Tabs 
            inkBarStyle={{backgroundColor: 'white'}}
            value={this.props.state.app.dashbarActiveTabIndex}
            onChange={this.handleChange}
        >
            <Tab 
                value ='0'
                className='tab-select' 
                style= {{ backgroundColor: '#FFCA89' }} 
                icon= {<Home style={{fill: '#2BC677', color: '#2BC677'}} hoverColor={greenA200} />} 
            />
            <Tab 
                value ='1'            
                className='tab-select' 
                style={{ backgroundColor: '#FCAF63' }}
                icon={<Food style={{fill: '#2BC677', color: '#2BC677'}} hoverColor={greenA200} />}           
            />
            <Tab 
                value ='2'            
                className='tab-select' 
                style={{ backgroundColor: '#FFCA89' }}
                icon={<Badge className='main-logo' badgeStyle={{top: 12, right: 12, backgroundColor: '#D46A6A'}} badgeContent={1} primary={true}> <Consultation style={{fill: '#2BC677', color: '#2BC677'}} hoverColor={greenA200} /></Badge>}           
            />     
            <Tab 
                value ='3'            
                className='tab-select' 
                style={{ backgroundColor: '#FCAF63' }}
                icon={<Work style={{fill: '#2BC677', color: '#2BC677'}} hoverColor={greenA200} />}          
            />
            <Tab 
                value ='4'            
                className='tab-select' 
                style={{ backgroundColor: '#FFCA89' }}
                icon={<Settings style={{fill: '#2BC677', color: '#2BC677'}} hoverColor={greenA200} />}
                onActive={this.toggleDrawer}           
            />
        </Tabs>
        <Drawer
            docked={false}
            width={200}
            open={this.props.state.app.settingsDrawerActive}
            openSecondary={true} 
            onRequestChange={this.toggleDrawer}
        >
            <MenuItem onTouchTap={this.logout}>Log out</MenuItem>
        </Drawer>
    </div>
    );
  }
}

function select (state) {
  return {
    state: state
  }
}

export default connect(select)(DashBarContainer)
