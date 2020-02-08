import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import React, { Component } from 'react';
import { Grid, Card } from 'semantic-ui-react'
import AthleteCard from '../CoachComponents.js/AthleteCard';
import AssignWorkoutForm from '../CoachComponents.js/AssignWorkoutForm';



class CoachHompage extends Component {
    state = { 
        athletes: [],
        athleteBeingProgrammedFor: null,
        athleteBeingShown: null
     }
     

     handleAthlete = athleteID => {
        const athlete = this.state.athletes.find(athlete => (athlete.id === athleteID))
        this.state.athleteBeingProgrammedFor?
            this.setState({athleteBeingProgrammedFor: null})
        :
            this.setState({athleteBeingProgrammedFor: athlete})
        
     }

     componentDidMount() {
        fetch('https://wodshare.herokuapp.com/coach/athletes',{
            method: "GET",
            headers: {
                Authorisation: localStorage.token,
            }
        })
        .then(resp => resp.json())
        .then(athletes => this.setState({athletes}))
    }


    handleAthleteShow = athleteID => {
        const athlete = this.state.athletes.find(athlete => athlete.id === athleteID)
        this.props.handleShowAthlete(athlete)
    }
    render() {
        return (
            <><br/><br/><br/><br/>
                <h2 className="h2">Welcome Back {this.props.user.first_name}!</h2> <br/><br/>
                <div name="wod-layout">
                <Grid textAlign={"center"} columns={2} divided>
                    <Grid.Row>
                    <Grid.Column>
                        <h1>Athletes</h1>
                        <Card.Group centered={true}>
                            {this.state.athletes[0]? 

                            this.state.athletes.map(athlete => (
                            <AthleteCard handleAthleteShow={this.handleAthleteShow} handleAthlete={this.handleAthlete} {...athlete}/>
                            ))

                            :

                             undefined}
                        </Card.Group>

                    </Grid.Column>
                    <Grid.Column>
                        {this.state.athleteBeingProgrammedFor &&
                            <AssignWorkoutForm coachID={this.props.user.id} athleteName={this.state.athleteBeingProgrammedFor.first_name} athleteID={this.state.athleteBeingProgrammedFor.id}/>
                        }
                        {!this.state.athleteBeingProgrammedFor &&
                            <h1>Select an Athlete to Program for</h1>
                        }
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                    </Grid.Row>
                </Grid>
                </div>
                <div name="old-wod-layout"> 

                </div>
            </>
        );
    }
}

export default CoachHompage;