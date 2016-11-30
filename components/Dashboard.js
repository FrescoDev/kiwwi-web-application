import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

const Dashboard = () => (
  <article>
        <div className='container-fluid'>
          <div className='main-display col-md-8'>
              <h1><font color='#1B3628'>Welcome</font></h1>
              <h1 className='plan-style'><font color='antiquewhite'>To</font> Your</h1>
              <h1 className='plan-style'><font color='antiquewhite'>Dashboard</font></h1>
              <h1 className='plan-style'>:)</h1>
          </div>
       </div>        
  <Tabs className='tabs'>
    <Tab style={{
          backgroundColor: '#2BC677'
        }} 
        icon={<ActionFlightTakeoff />} />
    <Tab style={{
          backgroundColor: '#2BC677'
        }}
        icon={<ActionFlightTakeoff />} />
    <Tab style={{
          backgroundColor: '#2BC677'
        }}
        icon={<ActionFlightTakeoff />} />
    <Tab style={{
          backgroundColor: '#2BC677'
        }}
        icon={<ActionFlightTakeoff />} />
  </Tabs>
  </article>
);
export default Dashboard
