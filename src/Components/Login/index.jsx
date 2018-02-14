import React, { Component } from 'react';
import LoginView from './view';

class Login extends Component {


    // Setting up state with default key and values
    state =  {
        "email":'asdfa@asdf.com',
        "password":'',
        "logging": false,
        errors: {
            "isError" : false,
            "email" : '',
            "password" : ''
        }
    }

    emailChangeEvent = (event) => {
        var emailvalue = event.target.value;
        this.setState({
            "email": emailvalue
        })
    }

    passwordChangeEvent = (event) => {
        var passwordvalue = event.target.value;
        this.setState({
            "password": passwordvalue
        })
    }

    validate = () => {
        var email = this.state.email;
        var password = this.state.password;
        var errors = {
            isError:false,
            email:'',
            password:''
        }
        
        if(email === ''){
            errors.isError = true;
            errors.email = 'Email is blank';
        }

        if(password === ''){
            errors.isError = true;
            errors.password = 'Password is blank';
        }

        this.setState({
            "errors": errors
        })

        return errors.isError;
    }

    LoginAction = (event) => {
        event.preventDefault();
        console.log("Clicked On Login");
        console.log("email", this.state.email);
        console.log("password", this.state.password);
        var isError = this.validate();
        if(isError === false) {
            console.log("Call Backend to login")
        } else {
            console.log("Show error message to view");
        }
    }

    cancelAction = (event) => {
        console.log("Clicked On Cancel")
    }


    render() {
        return (
            <div className="login">
                <LoginView loginProps={this.state} actions={{
                    emailChangeEvent:this.emailChangeEvent,
                    passwordChangeEvent:this.passwordChangeEvent,
                    LoginAction: this.LoginAction,
                    cancelAction: this.cancelAction
                }}/>
            </div>
        );
    }
}

export default Login;
