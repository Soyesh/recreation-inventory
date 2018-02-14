import React, { Component } from 'react';
import './login.css';
class LoginView extends Component {

  render() {
      let loginProps = this.props.loginProps;
      let actions = this.props.actions;
      let EmailError = '';
      if(loginProps.errors.isError === true && loginProps.errors.email !== ''){
          EmailError = (<font color="red">{loginProps.errors.email}</font>);
      }
      let PasswordError = '';
      if(loginProps.errors.isError === true && loginProps.errors.password !== ''){
          PasswordError = (<font color="red">{loginProps.errors.password}</font>);
      }
    return (
      <div className="login-wrapper">
        {/* We will configure Routes here */}
        <div className="loginmodal-container">
            <h1>Login to Your Account</h1><br />
            <form onSubmit={actions.LoginAction}>
            <input type="text" name="user" placeholder="Email" value={loginProps.email} onChange={actions.emailChangeEvent}/>
            {EmailError}
            <input type="password" name="pass" placeholder="Password" value={loginProps.password} onChange={actions.passwordChangeEvent}/>
            {PasswordError}
            <p>
            <button className="login loginmodal-submit" onClick={actions.LoginAction}> Login </button>
            <button className="login loginmodal-submit" style={{marginLeft:'10px'}} onClick={actions.cancelAction}> Cancel </button>
            </p>
            </form>
            
            <div className="login-help">
                <a href="#">Register</a> - <a href="#">Forgot Password</a>
            </div>
        </div>
      </div>
    );
  }
}

export default LoginView;
