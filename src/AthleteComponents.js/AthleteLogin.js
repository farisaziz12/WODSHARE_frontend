import React, { Component } from 'react';
import API from '../API';
import './AthleteLogin.css'



class AthleteLogin extends Component {
    state = { 
        loginEmail: null, 
        loginPassword: null,
        signupEmail: null, 
        signupPassword: null,
        signupPasswordConfirm: null,
        firstName: null,
        lastName: null, 
        signUp: false, 
        passwordMatchError: false,
        incorrectPasswordError: false, 
        error: null
     }

     handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
     }

     handleLoginSubmit = (e) => {
         e.preventDefault()
        API.loginAthlete({
            email: this.state.loginEmail,
            password: this.state.loginPassword
        }).then(user => this.props.onSuccess(user))
        .catch(errorPromise => errorPromise.then(error => this.setState({error: error.error}))).then(this.setState({success: false}))
     }

     toggleSignup = () => {
         this.setState({
            signUp: !this.state.signUp
         })
     }


     handleSignUpSubmit = (e) => {
         e.preventDefault()
        const { firstName, lastName, signupPassword, signupPasswordConfirm, signupEmail } = this.state
       
        if (signupPassword === signupPasswordConfirm) {
            this.setState({password_error: false})
            
                API.createAthleteAccount({
                    athlete: {
                        first_name: firstName,
                        last_name: lastName,
                        password: signupPassword,
                        email: signupEmail
                    }
                })
                .then(this.setState({success: true}))
                .then(user => 
                    setTimeout(() => {this.props.onSuccess(user)}, 500)
                )
                .catch(errorPromise => errorPromise.then(error => this.setState({error: error.message}))).then(this.setState({success: false}))
        } else {
            this.setState({passwordMatchError: true})
        }
    }

    render() {
        return (
            <div className={`login-container ${this.state.signUp? "right-panel-active" : ""}`} id="container">
                <div className="login-form-container sign-up-container ">
                    <form onSubmit={this.handleSignUpSubmit}>
                        <h1 className='login-h1'>Create Account</h1>
                        <input onChange={this.handleChange} name="firstName" className='login-input' type="text" placeholder="First Name" />
                        <input onChange={this.handleChange} name="lastName" className='login-input' type="text" placeholder="Last Name" />
                        <input onChange={this.handleChange} name="signupEmail" className='login-input' type="email" placeholder="Email" />
                        {this.state.passwordMatchError&& <p className="error" >Passwords do not match!</p>}
                        <input onChange={this.handleChange} name="signupPassword" className='login-input' type="password" placeholder="Password" />
                        <input onChange={this.handleChange} name="signupPasswordConfirm" className='login-input' type="password" placeholder="Password Confirmation" />
                        <button className='signup-button'>Sign Up</button>
                    </form>
                </div>
                { !this.state.signUp&&
                <div className="login-form-container sign-in-container">
                    {this.state.error&& <p className='error'>{this.state.error}</p>}
                    <form onSubmit={this.handleLoginSubmit}>
                        <h1 className='login-h1'>Sign in</h1>
                        <input onChange={this.handleChange} name="loginEmail" className='login-input' type="email" placeholder="Email" />
                        <input onChange={this.handleChange} name="loginPassword" className='login-input' type="password" placeholder="Password" /> <br/>
                        <a className='login-a' href="#">Forgot your password?</a> <br/>
                        <button className='login-button'>Sign In</button>
                    </form>
                </div>
                }
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel-left overlay-left">
                            <h1 className='signup-h1'>Welcome Back!</h1>
                            <p className='login-p'>To keep connected with us please login with your personal info</p>
                            <button onClick={this.toggleSignup} className="login-button ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className='signup-h1'>Hello!</h1>
                            <p className='login-hp'>Enter your personal details and start journey with us</p>
                            <button onClick={this.toggleSignup} className="login-button ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AthleteLogin;
