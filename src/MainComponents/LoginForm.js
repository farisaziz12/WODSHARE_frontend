import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom"
import { Grid, Menu, Segment } from 'semantic-ui-react'
import './loginForm.css'
import AthleteLogin from '../AthleteComponents.js/AthleteLogin';
import CoachLogin from '../CoachComponents.js/CoachLogin';
import CreateAccountForm from './CreateAccountForm';
import Navbar from './Navbar';


class LoginForm extends Component {
    state = { 
        activeItem: "Athlete Login"
     }

     handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        if (this.props.user) return <Redirect to="/"/>;
        return (
            <div className="container">
                    <Navbar/>
                    <Grid textAlign='center' style={{ height: '100vh', width: '1200px' }} verticalAlign='middle'>
                        <Grid.Column width={4}>
                        <Menu fluid vertical tabular>
                            <Menu.Item
                            name='Athlete Login'
                            active={activeItem === 'Athlete Login'}
                            onClick={this.handleItemClick}
                            />
                            <Menu.Item
                            name='Coach Login'
                            active={activeItem === 'Coach Login'}
                            onClick={this.handleItemClick}
                            />
                            <Menu.Item
                            name='Create Account'
                            active={activeItem === 'Create Account'}
                            onClick={this.handleItemClick}
                            />
                        </Menu>
                        </Grid.Column>

                        <Grid.Column stretched width={12}>
                            <Segment>
                                {activeItem === "Athlete Login" && <AthleteLogin onSuccess={this.props.onSuccess}/>} 
                                {activeItem === "Coach Login" && <CoachLogin onSuccess={this.props.onSuccess}/>}
                                {activeItem === "Create Account" && <CreateAccountForm onSuccess={this.props.onSuccess}/>}
                            </Segment>
                        </Grid.Column>
                    </Grid>
            </div>
        );
    }
}

export default LoginForm;

