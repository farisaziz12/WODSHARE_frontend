import React, { Component } from 'react';
import { Grid, Card } from 'semantic-ui-react'
import WorkoutCard from './WorkoutCard';
import EditWorkoutForm from './EditWorkoutForm';


class AthleteShowPage extends Component {
    state = { 
        workouts: [],
        workoutBeingEdited: null
     }

     componentDidMount() {
        fetch(`http://localhost:3000/coach/athlete/workouts/${this.props.id}`,{
            method: "GET",
            headers: {
                Authorisation: localStorage.token,
            }
        })
        .then(resp => resp.json())
        .then(workouts => this.setState({workouts}))
    }


    handleSelectWorkout = workoutID => {
        const workout = this.state.workouts.find(workout => workout.id === workoutID)
        console.log(workout)
        this.setState({workoutBeingEdited: workout})
    }

    cancelEdit = () => {
        this.setState({workoutBeingEdited: null})
    }

    modifyWorkoutsArr = workoutID => {
        const workouts = this.state.workouts.filter(workout => workout.id !== workoutID)
        this.setState({workouts})
    }

    render() {
        return (
            <> <br/><br/><br/>
                <h1 className='h2'>{this.props.first_name + " " + this.props.last_name}</h1> <br/><br/>
                    <div name="wod-layout">
                    <Grid textAlign={"center"} columns={2} divided>
                        <Grid.Row>
                        <Grid.Column>
                            <h1>Workouts</h1>
                            <Card.Group centered={true}>
                                {
                                this.state.workouts.map(workout => (
                                    <WorkoutCard modifyWorkoutsArr={this.modifyWorkoutsArr} handleSelectWorkout={this.handleSelectWorkout} {...workout}/>
                                ))
                                }
                            </Card.Group>

                        </Grid.Column>
                        <Grid.Column>
                            {this.state.workoutBeingEdited &&
                                <EditWorkoutForm cancelEdit={this.cancelEdit} coachID={this.props.coach.id} {...this.state.workoutBeingEdited}/>
                            }
                            {!this.state.workoutBeingEdited &&
                                <h1>Select a Workout to Edit</h1>
                            }
                        </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                        </Grid.Row>
                    </Grid>
                </div>
            </>
        );
    }
}

export default AthleteShowPage;