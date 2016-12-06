import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton';

class LogoutButton extends Component {
    constructor(props) {
        super(props);
        this.muiName = 'FlatButton';
    }

    render() {
        return ( 
            <FlatButton {...this.props } label = "Login" />
        );
    }
}

export default LogoutButton;