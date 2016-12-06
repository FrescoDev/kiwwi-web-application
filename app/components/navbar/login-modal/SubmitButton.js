import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

class SubmitButton extends Component {
      constructor(props) {
        super(props);
        this.muiName = 'FlatButton';
    }

     render() {
        return ( 
        <FlatButton
          hoverColor = {'lavenderblush'}        
          labelStyle={{ color: '#2BC677' }}
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.props.onLoginRequest}
          disabled={this.props.awaitingResponse}  
        />
        );
    }
}  
      
export default SubmitButton;