import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom"
import { Button, Form } from 'semantic-ui-react'
import API from '../API';


class LoginForm extends Component {
    state = { 
        email: undefined, 
        password: undefined
     }

     handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
     }

     handleSubmit = () => {
        API.loginUser({
            email: this.state.email,
            password: this.state.password
        }).then(user => this.props.onSuccess(user))
     }

    render() {
        if (this.props.user) return <Redirect to="/"/>;
        const { email, password } = this.state
        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <h1>Sign in or <Link to="/signup">Create an account</Link> </h1>
                    <Form.Field>
                        <label>Email</label>
                        <input type = "text" name = "email" value = {email} onChange = {this.handleChange}></input>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input type = "password" name = "password" value = {password} onChange = {this.handleChange}></input>
                    </Form.Field>
                    <Form.Field>
                    </Form.Field>
                        <Button type='submit'>Log in</Button>
                </Form>
        </>
        );
    }
}

export default LoginForm;
