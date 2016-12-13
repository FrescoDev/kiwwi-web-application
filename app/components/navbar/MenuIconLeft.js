import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreHorizIcon from 'material-ui/svg-icons/navigation/more-horiz';
import Scrollchor from 'react-scrollchor';

const MenuIconLeft = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={<IconButton><MoreHorizIcon /></IconButton>}
    menuStyle={{backgroundColor: '#FFCA89'}}
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
  <Scrollchor to="#first-how"><MenuItem primaryText="Getting Started" /></Scrollchor>
  <MenuItem primaryText="Register" />
  <Scrollchor to="#contact-us"><MenuItem primaryText="Contact Us" /></Scrollchor>
  </IconMenu>
);

MenuIconLeft.muiName = 'IconMenu';

export default MenuIconLeft;