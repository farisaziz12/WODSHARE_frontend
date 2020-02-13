import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import React, { Component } from 'react';
import './Homepage.css'
import WOD from '../AthleteComponents.js/WOD';
import { Grid, Image } from 'semantic-ui-react'
import PrevWOD from '../AthleteComponents.js/PrevWOD';
import Benchmarks from '../AthleteComponents.js/Benchmarks';



class AthleteHompage extends Component {
    state = { 
        workouts: []
     }

    componentDidMount() {
        fetch('https://wodshare.herokuapp.com/athlete/workouts',{
            method: "GET",
            headers: {
                Authorisation: localStorage.token,
            }
        })
        .then(resp => resp.json())
        .then(workouts => this.setState({workouts}))
    }
    render() {
        const { coach_name, first_name } = this.props.user 
        const { workouts } = this.state

        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const formatedDate = date.split("-")
        const WODDatePT1 = parseInt(formatedDate[1]) < 10 ? formatedDate[0] + "-0" + formatedDate[1] : formatedDate[0] + "-" + formatedDate[1] 
        const WODDatePT2 = formatedDate[2].length < 9 ?  "-" + formatedDate[2] :  "-0" + formatedDate[2]
        const WODDate = WODDatePT1 + WODDatePT2

        const workoutOfTheDay = workouts.find(workout => workout.date === WODDate)
        const PrevWODSSort = workouts.sort((a,b) => {return new Date(a.date) - new Date(b.date);}).filter(workout => new Date(workout.date) < new Date(WODDate))
        const PrevWODS = PrevWODSSort.slice(Math.max(PrevWODSSort.length - 5))
        // const WelcomeWordArr = [first_name, "Beast, Monster, Champion, Engine"]
         

        return (
            <>
                <div className="background" name="wod-layout">
                <h2 className="h2">Welcome Back {first_name}!</h2> <br/><br/>
                <Grid textAlign={"center"} columns={2} divided>
                    <Grid.Row>
                    <Grid.Column>
                        <h1 className='text'>Workout of the Day</h1>
                        <h2>{workoutOfTheDay? undefined : "None"}</h2>
                        {coach_name === null? undefined  : workoutOfTheDay&&<h1>Assigned by Coach {coach_name}</h1>}
                         {workoutOfTheDay? <WOD workout={workoutOfTheDay}/> : undefined}

                    </Grid.Column>
                    <Grid.Column>

                        <Benchmarks {...this.props.user}/>
                    
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        
                    <Grid.Column>
                    <br/><br/><h1 className='text'>Previous Workouts</h1>
                        <h2>{workouts[1]? undefined : "None"}</h2>
                        <Grid columns={5} divided >
                            <Grid.Row>
                                {PrevWODS[0]&& PrevWODS.reverse().map(workout => (
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

// <h1>Benchmarks</h1>
// <h2>Deadlift</h2>
// <h3>{deadlift} KG</h3> 
// <h2>Backsquat</h2>
// <h3>{backsquat} KG</h3> 
// <h2>Clean & Jerk</h2>
// <h3>{clean_and_jerk} KG</h3> 
// <h2>Snatch</h2>
// <h3>{snatch} KG</h3> 
// <h2>Strict Press</h2>
// <h3>{strict_press} KG</h3>  