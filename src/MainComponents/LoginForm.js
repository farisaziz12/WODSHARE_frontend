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
        athleteLogin: false, 
        coachLogin: false
     }

     handleAthleteClick = () => {
         this.setState({
             athleteLogin: true,
             coachLogin: false
         })
     }
     handleCoachClick = () => {
         this.setState({
             athleteLogin: false,
             coachLogin: true
         })
     }

    render() {
        const { activeItem } = this.state
        if (this.props.user) return <Redirect to="/"/>;
        return (
            <div className='login-body'>
                {!this.state.athleteLogin && !this.state.coachLogin?
                <>
                    <button onClick={this.handleAthleteClick} className='choice-button'>Athlete</button> 
                    <h1>------OR------</h1>
                    <button onClick={this.handleCoachClick} className='choice-button-2'>Coach</button>
                </>
                :
                undefined
                }
                <div className='login-from-spacing'></div> <br/>
                {this.state.athleteLogin&&
                    <AthleteLogin onSuccess={this.props.onSuccess}/>
                }
                {this.state.coachLogin&&
                    <CoachLogin onSuccess={this.props.onSuccess}/>
                }
            </div>
        );
    }
}

export default LoginForm;


            // <div className="container">
            //         <Navbar/>
            //         <Grid textAlign='center' style={{ height: '100vh', width: '1200px' }} verticalAlign='middle'>
            //             <Grid.Column width={4}>
            //             <Menu fluid vertical tabular>
            //                 <Menu.Item
            //                 name='Athlete Login'
            //                 active={activeItem === 'Athlete Login'}
            //                 onClick={this.handleItemClick}
            //                 />
            //                 <Menu.Item
            //                 name='Coach Login'
            //                 active={activeItem === 'Coach Login'}
            //                 onClick={this.handleItemClick}
            //                 />
            //                 <Menu.Item
            //                 name='Create Account'
            //                 active={activeItem === 'Create Account'}
            //                 onClick={this.handleItemClick}
            //                 />
            //             </Menu>
            //             </Grid.Column>

            //             <Grid.Column stretched width={12}>
            //                 <Segment>
            //                     {activeItem === "Athlete Login" && <AthleteLogin onSuccess={this.props.onSuccess}/>} 
            //                     {activeItem === "Coach Login" && <CoachLogin onSuccess={this.props.onSuccess}/>}
            //                     {activeItem === "Create Account" && <CreateAccountForm onSuccess={this.props.onSuccess}/>}
            //                 </Segment>
            //             </Grid.Column>
            //         </Grid>
            // </div>