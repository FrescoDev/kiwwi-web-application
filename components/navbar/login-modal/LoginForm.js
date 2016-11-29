import React from 'react';
import TextField from 'material-ui/TextField';

const LoginForm = () => (
  <div>
    <TextField
      underlineFocusStyle ={{
        borderColor: 'white'
        }}
      underlineStyle ={{
        borderColor: 'white'
        }}
      floatingLabelFocusStyle ={{
          color: 'black'
        }}
      hintText="your@email.com"
      floatingLabelText="E-mail"
    /><br />
    <TextField
      underlineFocusStyle ={{
        borderColor: 'white'
        }}
      underlineStyle ={{
        borderColor: 'white'
        }}
      floatingLabelFocusStyle ={{
          color: 'black'
        }}
      hintText="Password"
      floatingLabelText="Password"
      type="password"
    />
  </div>
);

export default LoginForm;

