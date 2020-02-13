import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import React, { Component } from 'react';
import { Grid, Card } from 'semantic-ui-react'
import AthleteCard from '../CoachComponents.js/AthleteCard';
import AssignWorkoutForm from '../CoachComponents.js/AssignWorkoutForm';
import './MobileCoachHomepage.css'



class MobileCoachHomepage extends Component {
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
            <>
                <div className="wod-layout" name="wod-layout">
                <h2 className="h2">Welcome Back {this.props.user.first_name}!</h2> <br/><br/>
                        <h1 className='text'>Athletes</h1>
                            
                            {this.state.athletes[0] && !this.state.athleteBeingProgrammedFor?

                            this.state.athletes.map(athlete => (
                            <AthleteCard handleAthleteShow={this.handleAthleteShow} handleAthlete={this.handleAthlete} {...athlete}/>
                            ))

                            :

                             undefined}
                            
                        {this.state.athleteBeingProgrammedFor &&
                            <AssignWorkoutForm coachID={this.props.user.id} athleteName={this.state.athleteBeingProgrammedFor.first_name} athleteID={this.state.athleteBeingProgrammedFor.id}/>
                        }

                </div>
                <div name="old-wod-layout"> 

                </div>
            </>
        );
    }
}

export default MobileCoachHomepage;