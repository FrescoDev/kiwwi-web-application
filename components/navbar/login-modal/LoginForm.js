import React from 'react';
import TextField from 'material-ui/TextField';

const LoginForm = () => (
  <div>
    <TextField
      hintText="Username"
      floatingLabelText="Username"
    /><br />
    <TextField
      hintText="Password"
      floatingLabelText="Password"
      type="password"
    />
  </div>
);

export default LoginForm;

