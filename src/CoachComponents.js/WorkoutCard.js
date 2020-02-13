import React, { Component } from 'react';
import { Button, Card } from 'semantic-ui-react'
import './WorkoutCard.css'


class WorkoutCard extends Component {
    state = {  }

    handleDelete = () => {
         fetch(`https://wodshare.herokuapp.com/workouts/delete/${this.props.id}`, {
            method: "DELETE"
        }).then(workout => this.props.modifyWorkoutsArr(this.props.id))
    }

    render() {
        const { name, date, id, workout, category, score } = this.props
        return (
            <>
                <div className="workout-card">
                    <h2 className="workout-title">"{name}"</h2>
                    <h3 className="workout-date"><i>{date}</i></h3>
                    <div className="workout-bar">
                    <h4 className="card-content">Score: {score}</h4>
                    <h3 className="card-content">Category: {category}</h3>
                    {/* <h4 className="card-content">Workout: </h4> */}
                    {workout&&
                    workout.split('\n').map(element => {
                        return <h5 className="card-content wod-buttons wod-text">{element}</h5>
                    })}
                    <div className='card-content'>
                    <Button onClick={() => this.props.handleSelectWorkout(id)} basic color='green'>
                         Edit
                     </Button>
                     <Button onClick={this.handleDelete} basic color='red' >
                         Delete
                     </Button>
                     </div>
                    </div>
                </div>
            </>
        );
    }
}

export default WorkoutCard;
        // <Card>
        //     <Card.Content>
        //         <Card.Header>{name}</Card.Header>
        //         <Card.Meta>Date: {date}</Card.Meta>
        //     </Card.Content>
        //     <Card.Content extra>
        //         <div className='ui two buttons'>
        //         <Button onClick={() => this.props.handleSelectWorkout(id)} basic color='green'>
        //             Edit
        //         </Button>
        //         <Button onClick={this.handleDelete} basic color='red' >
        //             Delete
        //         </Button>
        //         </div> 
        //     </Card.Content>
        // </Card>