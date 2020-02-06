import React, { Component } from 'react';
import { Button, Card } from 'semantic-ui-react'


class WorkoutCard extends Component {
    state = {  }

    handleDelete = () => {
         fetch(`http://localhost:3000/workouts/delete/${this.props.id}`, {
            method: "DELETE"
        }).then(workout => this.props.modifyWorkoutsArr(this.props.id))
    }

    render() {
        const { name, date, id } = this.props
        return (
        <Card>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>Date: {date}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                <Button onClick={() => this.props.handleSelectWorkout(id)} basic color='green'>
                    Edit
                </Button>
                <Button onClick={this.handleDelete} basic color='red' >
                    Delete
                </Button>
                </div> 
            </Card.Content>
        </Card>
        );
    }
}

export default WorkoutCard;