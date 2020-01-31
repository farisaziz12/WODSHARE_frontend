import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import React, { Component } from 'react';
import './Homepage.css'
import WOD from '../AthleteComponents.js/WOD';
import { Grid } from 'semantic-ui-react'



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
                <h2 className="h2">Welcome Back {this.props.user.first_name}!</h2> <br/><br/>
                <div name="wod-layout">
                <Grid textAlign={"center"} columns={2} divided>
                    <Grid.Row>
                    <Grid.Column>
                        <h1>Workout of the Day</h1>
                        <h2>{this.state.workouts[0]? undefined : "None"}</h2>
                        {this.props.user.coach_name === null? undefined  : <h1>Assigned by Coach {this.props.user.coach_name}</h1>}
                         {this.state.workouts[0]? <WOD workout={this.state.workouts[0]}/> : undefined}

                    </Grid.Column>
                    <Grid.Column>
                        hey 2
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                    <Grid.Column>
                        <h1>Previous Workouts</h1>
                        <h2>{this.state.workouts[0]? undefined : "None"}</h2>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
                </div>
                <div name="old-wod-layout"> 

                </div>
            </>
        );
    }
}

export default AthleteHompage;
// {this.state.workouts[0]? <WOD workout={this.state.workouts[0]}/> : undefined}