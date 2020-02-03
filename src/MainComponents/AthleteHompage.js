import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import React, { Component } from 'react';
import './Homepage.css'
import WOD from '../AthleteComponents.js/WOD';
import { Grid, Image } from 'semantic-ui-react'
import PrevWOD from '../AthleteComponents.js/PrevWOD';



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
        const { coach_name, first_name, deadlift, strict_press, clean_and_jerk, backsquat, snatch } = this.props.user 
        const { workouts } = this.state
        return (
            <><br/><br/><br/><br/>
                <h2 className="h2">Welcome Back {first_name}!</h2> <br/><br/>
                <div name="wod-layout">
                <Grid textAlign={"center"} columns={2} divided>
                    <Grid.Row>
                    <Grid.Column>
                        <h1>Workout of the Day</h1>
                        <h2>{workouts[workouts.length - 1]? undefined : "None"}</h2>
                        {coach_name === null? undefined  : <h1>Assigned by Coach {coach_name}</h1>}
                         {workouts[workouts.length - 1]? <WOD workout={workouts[workouts.length - 1]}/> : undefined}

                    </Grid.Column>
                    <Grid.Column>
                        <h1>Benchmarks</h1>
                        <h2>Deadlift</h2>
                        <h3>{deadlift} KG</h3> 
                        <h2>Backsquat</h2>
                        <h3>{backsquat} KG</h3> 
                        <h2>Clean & Jerk</h2>
                        <h3>{clean_and_jerk} KG</h3> 
                        <h2>Snatch</h2>
                        <h3>{snatch} KG</h3> 
                        <h2>Strict Press</h2>
                        <h3>{strict_press} KG</h3> 
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                    <Grid.Column>
                        <br/><h1>Previous Workouts</h1>
                        <h2>{workouts[1]? undefined : "None"}</h2>
                        <Grid columns={3} divided >
                            <Grid.Row>
                                {workouts.slice(1, workouts.length-1).map(workout => (
                                <Grid.Column>
                                    <PrevWOD workout={workout}/>
                                </Grid.Column>
                                ))}
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
                </div>
            </>
        );
    }
}

export default AthleteHompage;
