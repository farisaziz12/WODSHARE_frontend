import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import React, { Component } from 'react';

class AthleteHompage extends Component {
    state = { 
        workouts: []
     }

    componentDidMount() {
        fetch('http://localhost:3000/athlete/workouts',{
            method: "GET",
            headers: {
                Authorisation: localStorage.token,
            }
        })
        .then(resp => resp.json())
        .then(workouts => this.setState({workouts}))
    }
    render() {
        return (
            <><br/><br/><br/><br/>
                <h1>Welcome Back {this.props.user.first_name}!</h1>
            </>
        );
    }
}

export default AthleteHompage;