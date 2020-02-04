import React, { Component } from 'react';
import API from '../API';
import { Button, Form } from 'semantic-ui-react'

class CoachLogin extends Component {
    state = { 
        email: undefined, 
        password: undefined,
     }

     handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
     }

     handleSubmit = () => {
        API.loginCoach({
            email: this.state.email,
            password: this.state.password
        }).then(user => this.props.onSuccess(user))
     }
    render() {
        const { email, password } = this.state
        return (
            <Form onSubmit={this.handleSubmit}>
                <h1>Coach Login</h1>
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
        );
    }
}

export default CoachLogin;