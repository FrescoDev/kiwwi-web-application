import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import Home from 'material-ui/svg-icons/action/home';
import Consultation from 'material-ui/svg-icons/action/account-circle';
import Food from 'material-ui/svg-icons/maps/restaurant';
import Work from 'material-ui/svg-icons/places/fitness-center';
import Settings from 'material-ui/svg-icons/action/settings';
import FontIcon from 'material-ui/FontIcon';

const DashBar = () => (
    <Tabs inkBarStyle={{backgroundColor: 'white'}}>
        <Tab 
            className='tab-select' 
            style= {{ backgroundColor: '#FFCA89' }} 
            icon= {<Home style={{fill: '#2BC677', color: '#2BC677'}} hoverColor={greenA200} />} 
        />
        <Tab 
            className='tab-select' 
            style={{ backgroundColor: '#FCAF63' }}
            icon={<Food style={{fill: '#2BC677', color: '#2BC677'}} hoverColor={greenA200} />} 
        />
        <Tab 
            className='tab-select' 
            style={{ backgroundColor: '#FFCA89' }}
            icon={<Consultation style={{fill: '#2BC677', color: '#2BC677'}} hoverColor={greenA200} />} 
        />
        <Tab 
            className='tab-select' 
            style={{ backgroundColor: '#FCAF63' }}
            icon={<Work style={{fill: '#2BC677', color: '#2BC677'}} hoverColor={greenA200} />} 
        />
        <Tab 
            className='tab-select' 
            style={{ backgroundColor: '#FFCA89' }}
            icon={<Settings style={{fill: '#2BC677', color: '#2BC677'}} hoverColor={greenA200} />}
        />
    </Tabs>
);

export default DashBar;