import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreHorizIcon from 'material-ui/svg-icons/navigation/more-horiz';

const MenuIconLeft = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={<IconButton><MoreHorizIcon /></IconButton>}
    menuStyle={{backgroundColor: '#FFCA89'}}
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
  <MenuItem primaryText="Refresh" />
  <MenuItem primaryText="Help" />
  <MenuItem primaryText="Sign out" />
  </IconMenu>
);

MenuIconLeft.muiName = 'IconMenu';

export default MenuIconLeft;
