import React from 'react';
import axios from 'axios';

export default class LoginError extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
    };
  }

  render(){
    return(
      <div>
      <div>Login Page</div>
      <br></br>
      Incorrect username and password. Please try again.
      <br></br>
      <br></br>
      <form method="post" action="/loginpassport">
		  Username:
		  <input type="text" name="username" placeholder="Email" />
		  <br></br>
		  Password:
		  <input type="password" name="password" />
		  <br></br>
		  <input type="submit" value="Submit"/>
      
	  </form>
      <br></br>
      <a href="/auth/facebook">Login with Facebook</a>
      <br></br>
      <a href="/signup">Sign up</a>
      </div>
    );
  }
}