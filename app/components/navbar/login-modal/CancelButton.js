import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

class CancelButton extends Component {
      constructor(props) {
        super(props);
        this.muiName = 'FlatButton';
    }

     render() {
        return ( 
        <FlatButton
          hoverColor = {'lavenderblush'}
          labelStyle={{ color: '#2BC677' }}
          label="Cancel"
          primary={true}
          onTouchTap={this.props.onLoginClose}
          disabled={this.props.awaitingResponse}
        />
        );
    }
}  
      
export default CancelButton;
